"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  MessageSquare,
  X,
  Send,
  Volume2,
  VolumeX,
  Minimize2,
  Maximize2,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Activity,
  Zap,
} from "lucide-react";

interface Message {
  id: string;
  sender: "agent" | "user" | "system";
  text: string;
  timestamp: string;
}

export function InteractiveConcierge() {
  const pathname = usePathname();
  if (pathname?.startsWith("/call") || pathname === "/connect") {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [voiceMuted, setVoiceMuted] = useState(true);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Telemetry & Visitor Activity State
  const [dwellTime, setDwellTime] = useState(0);
  const [currentSection, setCurrentSection] = useState<string>("Hero // Overview");
  const [visitedSections, setVisitedSections] = useState<string[]>([]);
  const [scrollDepth, setScrollDepth] = useState<number>(0);
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", contact: "", vertical: "" });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m-0",
      sender: "agent",
      text: "Good day. I am the DestiX Autonomous Concierge. I monitor live session telemetry and assist qualified enterprise clients with voice infrastructure, 3D WebGL architecture, and CRM operating pipelines.",
      timestamp: "Live",
    },
  ]);

  // 1. Session Dwell Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setDwellTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Active Section & Scroll Observer
  useEffect(() => {
    const sectionIds = [
      { id: "works", label: "Selected Works (Live Proof)" },
      { id: "how-we-build", label: "How We Build (6 Pillars)" },
      { id: "playbooks", label: "Vertical Playbooks" },
      { id: "voice-console", label: "Voice Telephony Console" },
      { id: "scoping", label: "Volume Scoping Model" },
      { id: "leadership", label: "Principal Dossier (Ayush Meena)" },
      { id: "faq", label: "Engineering FAQ" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sectionIds.find((s) => s.id === entry.target.id);
            if (found) {
              setCurrentSection(found.label);
              setVisitedSections((prev) =>
                prev.includes(found.label) ? prev : [...prev, found.label]
              );
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionIds.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const depth = Math.round((window.scrollY / totalHeight) * 100);
        setScrollDepth((prev) => Math.max(prev, depth));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 3. Discreet First Interaction Trigger (non-annoying, delayed after genuine engagement)
  useEffect(() => {
    if (dwellTime === 24 && !hasPrompted && !isOpen) {
      setHasPrompted(true);
    }
  }, [dwellTime, hasPrompted, isOpen]);

  // Scroll chat to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Speech synthesis for agent response if unmuted
  const speakText = (text: string) => {
    if (voiceMuted || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 0.98;
    window.speechSynthesis.speak(utterance);
  };

  // Dispatch activity & lead report to studio
  const reportToStudio = async (customLead?: typeof contactInfo, customText?: string) => {
    try {
      const payload = {
        leadData: {
          name: customLead?.name || contactInfo.name || "Anonymous Visitor",
          contact: customLead?.contact || contactInfo.contact || "Not submitted",
          vertical: customLead?.vertical || contactInfo.vertical || currentSection,
          notes: customText || "Concierge Session Telemetry Dispatch",
        },
        telemetry: {
          currentSection,
          visitedSections,
          dwellTimeSeconds: dwellTime,
          scrollDepthPercent: scrollDepth,
          referrer: typeof document !== "undefined" ? document.referrer || "Direct" : "Unknown",
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "Unknown",
        },
        transcript: messages.map((m) => ({
          sender: m.sender,
          text: m.text,
          timestamp: m.timestamp,
        })),
      };

      await fetch("/api/concierge-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error("Failed to report telemetry lead:", e);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
      timestamp: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Natural agent reasoning & contextual answers
    setTimeout(async () => {
      let reply = "";
      const lower = text.toLowerCase();

      if (lower.includes("speed") || lower.includes("latency") || lower.includes("how fast") || lower.includes("delay")) {
        reply = `Our telephony agents achieve a measured sub-500ms roundtrip latency (typically 435ms audio-to-audio). We run dedicated domestic Indian SIP trunks with Cartesia streaming synthesis, meaning zero awkward robotic lags or unnatural interruptions.`;
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing") || lower.includes("fee")) {
        reply = `Our commercial deployments are structured with total unit-economic clarity: one-time custom engineering (₹35k – ₹1.5L depending on CRM depth) + wholesale usage pass-through at ₹4 to ₹8 per conversation minute. Zero recurring per-seat markups. If we cannot model a 5x return on your audit, we decline the engagement.`;
      } else if (lower.includes("real estate") || lower.includes("dubai") || lower.includes("villa") || lower.includes("acp")) {
        reply = `For luxury real estate (such as our live deployment for Alliance Capital Properties in Dubai), the agent dials inbound leads in under 45 seconds, screens for minimum budgets (e.g. ₹5Cr+ or AED 5M+), qualifies possession timelines, and sends private lookbooks via WhatsApp directly to WhatsApp.`;
      } else if (lower.includes("book") || lower.includes("schedule") || lower.includes("call") || lower.includes("ayush") || lower.includes("consult")) {
        reply = `I would be delighted to coordinate a 30-minute diagnostic session directly with Ayush Meena. Please share your Name and WhatsApp / Mobile number below, and I will dispatch your dossier directly to his priority desk.`;
        setLeadFormOpen(true);
      } else if (lower.includes("3d") || lower.includes("web") || lower.includes("three.js") || lower.includes("storefront")) {
        reply = `Our digital storefronts are 100% bespoke Next.js and Three.js platforms featuring custom WebGL shaders, sub-second load times, and Swiss editorial typography. Zero WordPress, zero template code.`;
      } else {
        reply = `Understood. Given that you have dwelled on "${currentSection}", our studio can configure a tailored speed-to-lead voice circuit or 3D WebGL storefront for your exact operational requirements. Would you like to schedule a private diagnostic call with Ayush Meena?`;
      }

      const agentMsg: Message = {
        id: `a-${Date.now()}`,
        sender: "agent",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
      speakText(reply);

      // Report updated session transcript to studio
      reportToStudio(undefined, `User asked: "${text}"`);
    }, 600);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.contact) return;

    setLeadSubmitted(true);
    setLeadFormOpen(false);

    const confirmationText = `Thank you, ${contactInfo.name || "Executive"}. Your details have been dispatched to Ayush Meena's priority desk along with your session activity trail (${visitedSections.length} sections explored over ${dwellTime}s). A briefing will arrive via WhatsApp shortly.`;

    const confirmMsg: Message = {
      id: `c-${Date.now()}`,
      sender: "system",
      text: confirmationText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, confirmMsg]);
    speakText("Thank you. Your briefing has been dispatched directly to the studio principal.");

    await reportToStudio(contactInfo, "Direct Lead Qualification Submitted");
  };

  return (
    <>
      {/* Discreet Passive Floating Pill (Bottom Right) */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5">
          {/* Contextual Teaser (only triggers after real browsing time) */}
          {hasPrompted && (
            <div className="max-w-xs p-3.5 rounded-2xl bg-[#131210]/95 backdrop-blur-md border border-[#B88746]/40 text-[#F6EFE2] shadow-2xl text-xs font-['Plus_Jakarta_Sans'] leading-relaxed animate-fade-in relative">
              <button
                onClick={() => setHasPrompted(false)}
                className="absolute top-2 right-2 text-[#888277] hover:text-white"
                aria-label="Dismiss"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-1.5 text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-semibold uppercase mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
                <span>OBSERVING: {currentSection}</span>
              </div>
              <p className="text-[12px] text-[#D8D2C5]">
                Exploring voice agents or 3D web? Tap to speak with our autonomous systems concierge.
              </p>
            </div>
          )}

          {/* Main Launcher Pill */}
          <button
            onClick={() => {
              setIsOpen(true);
              setHasPrompted(false);
            }}
            data-cursor-text="CONCIERGE"
            className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#131210]/95 hover:bg-[#1C1A17] backdrop-blur-md border border-[#B88746]/50 hover:border-[#B88746] text-[#F6EFE2] shadow-[0_12px_40px_-10px_rgba(24,22,20,0.35)] transition-all duration-300 hover:scale-[1.02]"
            aria-label="Open DestiX Autonomous Concierge"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="absolute w-4 h-4 rounded-full bg-emerald-500/30 animate-ping" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[11px] font-['JetBrains_Mono'] font-bold text-[#F6EFE2] tracking-wider uppercase flex items-center gap-1.5">
                <span>DESTIX CONCIERGE</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#B88746]/20 text-[#B88746] border border-[#B88746]/30">
                  AI ARCHITECT
                </span>
              </span>
              <span className="text-[10px] text-[#888277] font-['JetBrains_Mono']">
                {currentSection}
              </span>
            </div>

            <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#B88746] flex items-center justify-center transition-colors ml-1">
              <MessageSquare className="w-3.5 h-3.5 text-[#F6EFE2]" />
            </div>
          </button>
        </div>
      )}

      {/* Expanded Luxury Concierge Panel */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[410px] max-h-[620px] h-[580px] rounded-3xl overflow-hidden bg-[#131210] border border-[#B88746]/50 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)] flex flex-col text-[#F6EFE2] font-sans animate-fade-in">
          {/* Top Architectural Header */}
          <div className="p-4 bg-[#181614] border-b border-[#2A2723] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#23201C] border border-[#B88746]/40 flex items-center justify-center text-[#B88746]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-['Instrument_Serif'] text-lg font-bold text-[#F6EFE2]">
                    DestiX Concierge
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] tracking-wider uppercase">
                  SYSTEM ARCHITECT // 435MS BRIDGE
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 text-stone-400">
              <button
                onClick={() => setVoiceMuted(!voiceMuted)}
                className={`p-1.5 rounded-lg hover:bg-white/10 transition-colors ${
                  !voiceMuted ? "text-[#B88746]" : "text-stone-400"
                }`}
                title={voiceMuted ? "Enable speech audio" : "Mute speech audio"}
              >
                {voiceMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
                title="Minimize Concierge"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Live Activity Observer Strip (Visually communicates that AI sees activity) */}
          <div className="px-4 py-2 bg-[#1C1A17] border-b border-[#2A2723] flex items-center justify-between text-[10px] font-['JetBrains_Mono'] text-[#888277]">
            <div className="flex items-center gap-1.5 truncate max-w-[260px]">
              <Eye className="w-3 h-3 text-[#B88746] shrink-0" />
              <span className="text-stone-400">Active View:</span>
              <span className="text-[#F6EFE2] font-semibold truncate">{currentSection}</span>
            </div>
            <div className="flex items-center gap-1 shrink-0 text-stone-400">
              <Activity className="w-3 h-3 text-emerald-500" />
              <span>{dwellTime}s</span>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-['Plus_Jakarta_Sans']">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user"
                    ? "items-end"
                    : m.sender === "system"
                    ? "items-center text-center"
                    : "items-start"
                }`}
              >
                {m.sender !== "system" && (
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277] mb-1 px-1">
                    {m.sender === "user" ? "You" : "DestiX Agent"} &bull; {m.timestamp}
                  </span>
                )}

                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#B88746] text-[#131210] font-medium rounded-tr-xs"
                      : m.sender === "system"
                      ? "bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 w-full rounded-2xl"
                      : "bg-[#1C1A17] border border-[#2D2824] text-[#E8E2D7] rounded-tl-xs"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#1C1A17] border border-[#2D2824] text-stone-400 text-xs w-20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            {/* Quick Prompt Recommendation Chips */}
            <div className="pt-2">
              <div className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider mb-2">
                Suggested Inquiries:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "How fast is your voice latency?",
                  "Estimate our voice ROI",
                  "Dubai Real Estate case study",
                  "Schedule 30-min call with Ayush",
                ].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleSendMessage(chip)}
                    className="px-2.5 py-1 rounded-full bg-[#23201C] hover:bg-[#B88746]/20 border border-[#3A332E] hover:border-[#B88746] text-[11px] text-[#D8D2C5] transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Lead Capture Form inside Concierge */}
            {leadFormOpen && !leadSubmitted && (
              <form
                onSubmit={handleLeadSubmit}
                className="p-4 rounded-2xl bg-[#1F1C18] border border-[#B88746]/50 space-y-3 mt-3 animate-fade-in"
              >
                <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#B88746] font-bold">
                  <span>DISPATCH REQUIREMENTS TO AYUSH</span>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>

                <input
                  type="text"
                  placeholder="Your Name / Practice"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#131210] border border-[#3A332E] text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-[#B88746]"
                  required
                />

                <input
                  type="text"
                  placeholder="WhatsApp or Mobile (+91 / +971 / +1)"
                  value={contactInfo.contact}
                  onChange={(e) => setContactInfo({ ...contactInfo, contact: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#131210] border border-[#3A332E] text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-[#B88746]"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-semibold text-xs tracking-tight transition-colors flex items-center justify-center gap-2"
                >
                  <span>Dispatch Priority Request</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Chat Input */}
          <div className="p-3 bg-[#181614] border-t border-[#2A2723] flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about our systems or scope a project..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#131210] border border-[#2D2824] text-xs text-[#F6EFE2] placeholder:text-stone-500 focus:outline-none focus:border-[#B88746]/60"
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-xl bg-[#B88746] hover:bg-[#C5A059] disabled:opacity-40 disabled:hover:bg-[#B88746] text-[#131210] flex items-center justify-center transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default InteractiveConcierge;
