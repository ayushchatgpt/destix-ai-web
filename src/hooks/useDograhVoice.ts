"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { DograhVoiceStatus, LeadSummary, DograhDisconnectEvent, VoiceLanguage } from "@/types/dograh";

interface UseDograhVoiceReturn {
  status: DograhVoiceStatus;
  isReady: boolean;
  error: string | null;
  callDuration: number;
  lastRunId: number | null;
  leadSummary: LeadSummary | null;
  isLoadingSummary: boolean;
  language: VoiceLanguage;
  setLanguage: (lang: VoiceLanguage) => void;
  startCall: () => Promise<void>;
  endCall: () => void;
  retry: () => Promise<void>;
  clearSummary: () => void;
}

export function useDograhVoice(defaultLanguage: VoiceLanguage = "en"): UseDograhVoiceReturn {
  const [status, setStatus] = useState<DograhVoiceStatus>("uninitialized");
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [lastRunId, setLastRunId] = useState<number | null>(null);
  const [leadSummary, setLeadSummary] = useState<LeadSummary | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [language, setLanguageState] = useState<VoiceLanguage>(defaultLanguage);

  const durationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const callStartTimeRef = useRef<number | null>(null);

  // Synchronize mutable refs to avoid effect recreation & premature closures
  const statusRef = useRef<DograhVoiceStatus>(status);
  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  const languageRef = useRef<VoiceLanguage>(language);
  useEffect(() => {
    languageRef.current = language;
  }, [language]);

  const fetchLeadSummary = useCallback(async (runId: number) => {
    setIsLoadingSummary(true);
    try {
      // Dograh executes structured variable extraction asynchronously on call completion.
      for (let attempt = 0; attempt < 4; attempt++) {
        const res = await fetch(`/api/lead-summary?runId=${runId}`);
        if (res.ok) {
          const data = await res.json();
          const gathered = data.gatheredContext;
          if (gathered && Object.keys(gathered).length > 0) {
            // Merge with existing buyer context to preserve information across language switches
            setLeadSummary((prev) => {
              if (!prev) return gathered as LeadSummary;
              const merged: LeadSummary = { ...prev };
              for (const [key, val] of Object.entries(gathered)) {
                if (
                  val !== undefined &&
                  val !== null &&
                  val !== "" &&
                  val !== "Not specified" &&
                  val !== "لم يُحدد بعد" &&
                  val !== "None noted" &&
                  val !== "لا توجد متطلبات إضافية"
                ) {
                  merged[key] = val;
                }
              }
              return merged;
            });
            break;
          }
        }
        if (attempt < 3) {
          await new Promise((r) => setTimeout(r, 1200));
        }
      }
    } catch (err: unknown) {
      console.warn("Could not retrieve post-call lead summary:", err);
    } finally {
      setIsLoadingSummary(false);
    }
  }, []);

  const fetchLeadSummaryRef = useRef(fetchLeadSummary);
  useEffect(() => {
    fetchLeadSummaryRef.current = fetchLeadSummary;
  }, [fetchLeadSummary]);

  const setLanguage = useCallback((newLang: VoiceLanguage) => {
    if (statusRef.current === "connecting" || statusRef.current === "connected") {
      console.warn("Cannot change language while call is active");
      return;
    }
    setLanguageState(newLang);
    setError(null);
  }, []);

  // Initialize and load the Dograh headless widget script
  // NOTE: This effect must ONLY re-run when language changes (which switches tokens).
  // It MUST NOT depend on status, otherwise state transitions trigger premature teardowns!
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Resolve token:
    // "ar": Arabic workflow (Workflow 2, ar-AE-FatimaNeural)
    // "en": English workflow (Workflow 1, aura-2-pandora-en)
    // "auto": Smart resolution based on browser locale with automatic fallback
    const arToken = process.env.NEXT_PUBLIC_DOGRAH_EMBED_TOKEN_AR || "emb_arabic_destix_ae_2b24abaa690c41f2804e75f2";
    const enToken = process.env.NEXT_PUBLIC_DOGRAH_EMBED_TOKEN || "emb_idhoGSLg_YWMh69WWGe5-E02euO4tOkMq8rlMyxQVxc";

    let activeToken = enToken;
    if (language === "ar") {
      activeToken = arToken;
    } else if (language === "hi") {
      const hiToken = process.env.NEXT_PUBLIC_DOGRAH_EMBED_TOKEN_HI || enToken;
      activeToken = hiToken;
    } else if (language === "auto") {
      activeToken = enToken;
    }

    const apiUrl = process.env.NEXT_PUBLIC_DOGRAH_API_URL || "http://localhost:8000";
    const uiUrl = process.env.NEXT_PUBLIC_DOGRAH_UI_URL || "http://localhost:3010";

    if (!activeToken) {
      console.warn("Dograh embed token is not defined in environment.");
      setError("Dograh embed configuration missing.");
      setStatus("failed");
      return;
    }

    const scriptId = "dograh-widget";

    const setupWidgetCallbacks = () => {
      const widget = window.DograhWidget;
      if (!widget) return;

      widget.onReady?.(() => {
        setIsReady(true);
        setStatus("idle");
      });

      widget.onCallStart?.(() => {
        setError(null);
        setStatus("connecting");
      });

      widget.onCallConnected?.(() => {
        setError(null);
        setStatus("connected");
        callStartTimeRef.current = Date.now();
        setCallDuration(0);

        if (durationTimerRef.current) clearInterval(durationTimerRef.current);
        durationTimerRef.current = setInterval(() => {
          if (callStartTimeRef.current) {
            setCallDuration(Math.floor((Date.now() - callStartTimeRef.current) / 1000));
          }
        }, 1000);
      });

      widget.onCallDisconnected?.((data: DograhDisconnectEvent) => {
        if (durationTimerRef.current) {
          clearInterval(durationTimerRef.current);
          durationTimerRef.current = null;
        }
        callStartTimeRef.current = null;
        setStatus("ended");

        if (data?.workflowRunId) {
          setLastRunId(data.workflowRunId);
          fetchLeadSummaryRef.current?.(data.workflowRunId);
        }
      });

      widget.onError?.((err: Error | { message?: string }) => {
        if (durationTimerRef.current) {
          clearInterval(durationTimerRef.current);
          durationTimerRef.current = null;
        }
        callStartTimeRef.current = null;
        const msg = err?.message || (languageRef.current === "ar" ? "تعذر الاتصال بالصوت. يرجى المحاولة مرة أخرى." : "Voice connection encountered an error.");
        console.error("Dograh Voice Error:", err);
        setError(msg);
        setStatus("failed");
      });

      widget.onStatusChange?.((st: string) => {
        if (st === "connected") {
          setStatus("connected");
        } else if (st === "connecting") {
          setStatus("connecting");
        } else if (st === "idle") {
          setStatus((prev) => (prev === "connected" ? "ended" : "idle"));
        } else if (st === "failed") {
          setStatus("failed");
        }
      });

      setIsReady(true);
      if (statusRef.current === "uninitialized") {
        setStatus("idle");
      }
    };

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    // If script exists but was for a different token, replace it safely
    if (script && script.getAttribute("data-token") !== activeToken) {
      try {
        window.DograhWidget?.stop?.();
      } catch {
        // ignore cleanup error
      }
      script.remove();
      window.DograhWidget = undefined;
      setIsReady(false);
      script = null;
    }

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = `${uiUrl}/embed/dograh-widget.js?token=${activeToken}&environment=local&apiEndpoint=${apiUrl}`;
      script.async = true;
      script.setAttribute("data-token", activeToken);
      script.setAttribute(
        "data-dograh-context",
        JSON.stringify({
          source: "destix_web_dubai_demo",
          page_url: window.location.href,
          language_mode: language,
        })
      );

      script.onload = () => {
        setupWidgetCallbacks();
      };

      script.onerror = () => {
        setError(languageRef.current === "ar" ? "فشل تحميل ملحق المحادثة الصوتية." : "Failed to load Dograh voice agent widget script.");
        setStatus("failed");
      };

      document.body.appendChild(script);
    } else {
      if (window.DograhWidget) {
        setupWidgetCallbacks();
      } else {
        script.addEventListener("load", setupWidgetCallbacks);
      }
    }

    return () => {
      if (durationTimerRef.current) {
        clearInterval(durationTimerRef.current);
        durationTimerRef.current = null;
      }
      // ONLY stop call on actual unmount or token/language change
      if (window.DograhWidget && (statusRef.current === "connected" || statusRef.current === "connecting")) {
        try {
          window.DograhWidget.stop?.();
        } catch {
          // ignore cleanup errors on unmount
        }
      }
    };
  }, [language]);

  const startCall = useCallback(async () => {
    if (statusRef.current === "connecting" || statusRef.current === "connected") return;

    setError(null);
    setStatus("connecting");

    const widget = window.DograhWidget;
    if (!widget || typeof widget.start !== "function") {
      const msg = languageRef.current === "ar" 
        ? "ملحق المحادثة الصوتية غير جاهز بعد. يرجى الانتظار لحظات." 
        : "Dograh voice widget is not initialized yet. Please wait a moment.";
      setError(msg);
      setStatus("failed");
      return;
    }

    try {
      await widget.start();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to start call";
      console.error("Widget start error:", message);
      setError(
        languageRef.current === "ar"
          ? "تعذر بدء المكالمة الصوتية. تأكد من منح إذن الميكروفون."
          : "Could not initiate voice call. Ensure microphone permission is granted."
      );
      setStatus("failed");
    }
  }, []);

  const endCall = useCallback(() => {
    if (statusRef.current !== "connected" && statusRef.current !== "connecting") return;

    setStatus("ending");
    if (durationTimerRef.current) {
      clearInterval(durationTimerRef.current);
      durationTimerRef.current = null;
    }

    try {
      const widget = window.DograhWidget;
      if (widget) {
        if (typeof widget.end === "function") {
          widget.end();
        } else if (typeof widget.stop === "function") {
          widget.stop();
        }
      }
    } catch (err) {
      console.warn("Error ending call gracefully:", err);
    } finally {
      setStatus("ended");
      callStartTimeRef.current = null;
    }
  }, []);

  const retry = useCallback(async () => {
    setError(null);
    setStatus("idle");
    await startCall();
  }, [startCall]);

  const clearSummary = useCallback(() => {
    setLeadSummary(null);
    setLastRunId(null);
  }, []);

  return {
    status,
    isReady,
    error,
    callDuration,
    lastRunId,
    leadSummary,
    isLoadingSummary,
    language,
    setLanguage,
    startCall,
    endCall,
    retry,
    clearSummary,
  };
}
