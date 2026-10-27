"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  PhoneOff,
  Volume2,
  Sparkles,
  Building2,
  ShoppingCart,
  CreditCard,
  Calendar,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Globe,
  Share2,
  ChevronRight,
  User,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useDograhVoice } from "@/hooks/useDograhVoice";
import { VoiceLanguage } from "@/types/dograh";

interface AgentProfile {
  id: string;
  name: string;
  category: string;
  agentName: string;
  latency: string;
  badge: string;
  icon: React.ReactNode;
  isLive: boolean;
  transcript: Array<{ speaker: "agent" | "user"; text: string }>;
}

const AGENTS: AgentProfile[] = [
  {
    id: "south-delhi-luxury",
    name: "South Delhi Luxury Real Estate",
    category: "High-Net-Worth Advisory",
    agentName: "Sarah (Sarvam AI)",
    latency: "Sub-2s Real-Time",
    badge: "Live Interactive Agent",
    icon: <Building2 className="w-5 h-5 text-[#B88746]" />,
    isLive: true,
    transcript: [
      {
        speaker: "agent",
        text: "Hi, welcome to DestiX AI. I'm Sarah, your AI real-estate assistant for South Delhi. Are you looking to buy a property, explore options, or arrange a visit?",
      },
      {
        speaker: "user",
        text: "I'm looking for a 3 BHK builder floor around 2.5 Crore in Greater Kailash.",
      },
      {
        speaker: "agent",
        text: "Greater Kailash offers fantastic builder floors in that price range with clear freehold titles, lift access, and stilt parking. Would you prefer a ready-to-move unit or are you open to near-completion projects?",
      },
    ],
  },
  {
    id: "delhi-ncr-investor",
    name: "Delhi NCR Private Client Advisory",
    category: "Ultra-HNW Wealth & Yield",
    agentName: "Sarah (Sarvam AI)",
    latency: "Sub-2s Real-Time",
    badge: "Live Interactive Agent",
    icon: <Sparkles className="w-5 h-5 text-[#B88746]" />,
    isLive: true,
    transcript: [
      {
        speaker: "agent",
        text: "Welcome to DestiX Private Client Advisory. We advise on prime residential builder floors in South Delhi and Grade-A commercial corridors across Delhi NCR. What kind of asset are you evaluating?",
      },
      {
        speaker: "user",
        text: "I have 30 years of investing experience and want to understand rental yields and capital appreciation.",
      },
      {
        speaker: "agent",
        text: "For long-term capital preservation, established South Delhi colonies yield 2.5 to 3.5 percent with exceptional land value growth. If you are targeting higher immediate cash flows of 7 to 9 percent, Grade-A commercial assets in Gurgaon offer structured institutional leases.",
      },
    ],
  },
  {
    id: "cart-recovery",
    name: "Cart Recovery & Retention Nudge",
    category: "E-Commerce Speed-to-Lead",
    agentName: "Simran",
    latency: "340ms TTFA",
    badge: "Interactive Prototype",
    icon: <ShoppingCart className="w-5 h-5 text-emerald-500" />,
    isLive: false,
    transcript: [
      {
        speaker: "agent",
        text: "Hi, I noticed you left a few items in your cart. Would you like help completing the order?",
      },
      {
        speaker: "user",
        text: "Yes, but I need delivery by Friday.",
      },
      {
        speaker: "agent",
        text: "I can check the available delivery window before you continue.",
      },
    ],
  },
  {
    id: "emi-reminder",
    name: "EMI & Payment Concierge",
    category: "Fintech & Banking",
    agentName: "Aarav",
    latency: "360ms TTFA",
    badge: "Interactive Prototype",
    icon: <CreditCard className="w-5 h-5 text-amber-500" />,
    isLive: false,
    transcript: [
      {
        speaker: "agent",
        text: "Hello, this is Aarav regarding your upcoming vehicle installment due this Friday. Would you like to authorize automated debit today?",
      },
      {
        speaker: "user",
        text: "Can you send the payment link on my WhatsApp?",
      },
      {
        speaker: "agent",
        text: "I have dispatched the secure instant payment link via SMS and WhatsApp. You will receive zero penalty charges once paid.",
      },
    ],
  },
  {
    id: "clinic-booking",
    name: "Private Clinic Consultation",
    category: "Healthcare & Aesthetics",
    agentName: "Dr. Elena's Assistant",
    latency: "350ms TTFA",
    badge: "Interactive Prototype",
    icon: <Calendar className="w-5 h-5 text-sky-500" />,
    isLive: false,
    transcript: [
      {
        speaker: "agent",
        text: "Good afternoon. Thank you for calling Mayfair Wellness Clinic. How may I assist with your doctor consultation today?",
      },
      {
        speaker: "user",
        text: "I wanted to check recovery timelines for surgical aesthetics and see if consultations are in-person.",
      },
      {
        speaker: "agent",
        text: "Dr. Elena conducts all initial evaluations in our Mayfair clinic with complete privacy. Would this Thursday at 4:30 PM suit your calendar?",
      },
    ],
  },
];

interface VoiceDemoConsoleProps {
  onOpenBooking?: () => void;
}

export function VoiceDemoConsole({ onOpenBooking }: VoiceDemoConsoleProps) {
  const [selectedAgent, setSelectedAgent] = useState<AgentProfile>(AGENTS[0]);
  const [activeTab, setActiveTab] = useState<string>("voice-agents");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Hook into Dograh Live Voice Engine
  const {
    status,
    isReady,
    error,
    callDuration,
    language,
    setLanguage,
    startCall,
    endCall,
    retry,
  } = useDograhVoice("en");

  const isConnected = status === "connected";
  const isConnecting = status === "connecting";

  // Pulsing animation scale for the central orb
  const [pulseScale, setPulseScale] = useState(1);
  useEffect(() => {
    if (!isConnected) {
      setPulseScale(1);
      return;
    }
    const interval = setInterval(() => {
      setPulseScale(1 + Math.random() * 0.14);
    }, 240);
    return () => clearInterval(interval);
  }, [isConnected]);

  // Audio spectrum visualizer animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      phase += isConnected ? 0.14 : 0.03;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barCount = 36;
      const barWidth = 3;
      const gap = (canvas.width - barCount * barWidth) / (barCount - 1);

      for (let i = 0; i < barCount; i++) {
        let height = 4;
        if (isConnected) {
          const sinVal = Math.sin(phase + i * 0.35);
          const cosVal = Math.cos(phase * 1.6 + i * 0.2);
          height = Math.max(4, Math.abs(sinVal * cosVal) * 40 + 6);
        } else if (isConnecting) {
          height = Math.max(4, (Math.sin(phase * 3 + i * 0.25) + 1) * 12 + 4);
        }

        const x = i * (barWidth + gap);
        const y = (canvas.height - height) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, "#B88746");
        gradient.addColorStop(1, "#D4A373");

        ctx.fillStyle = isConnected || isConnecting ? gradient : "rgba(184, 135, 70, 0.25)";
        ctx.fillRect(x, y, barWidth, height);
      }
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isConnected, isConnecting]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="voice-console"
      className="bg-[#0C0A09] text-[#F6EFE2] py-24 px-4 sm:px-6 lg:px-8 border-y border-[#2D2824] relative overflow-hidden selection:bg-[#B88746]/20"
    >
      {/* Background Luxury Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#B88746]/10 via-[#B88746]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1917] border border-[#B88746]/30 text-[#B88746] text-xs font-mono tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B88746] animate-pulse" />
            <span>(06) AUTONOMOUS VOICE AGENT STUDIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6EFE2] tracking-tight mb-4">
            Test Production Voice Agents In Real Time
          </h2>

          <p className="text-sm sm:text-base text-[#A8A29E] leading-relaxed">
            Experience sub-1.5s human conversational intelligence with genuine vocal emotion and natural inflections. Powered by Deepgram Aura-2, Groq LPUs, and WebRTC streaming.
          </p>
        </div>

        {/* Tab Navigation Strip matching uploaded screenshot in dark luxury */}
        <div className="flex items-center justify-between border-b border-[#2D2824] pb-4 mb-8">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("voice-agents")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "voice-agents"
                  ? "bg-[#1C1917] text-[#B88746] border border-[#B88746]/40 shadow-xs"
                  : "text-[#888277] hover:text-[#F6EFE2]"
              }`}
            >
              <span className="text-base font-serif">अ</span>
              <span>Voice Agents (Live)</span>
            </button>
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "enterprise"
                  ? "bg-[#1C1917] text-[#B88746] border border-[#B88746]/40"
                  : "text-[#888277] hover:text-[#F6EFE2]"
              }`}
            >
              Enterprise Hub
            </button>
            <button
              onClick={() => setActiveTab("tts")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "tts"
                  ? "bg-[#1C1917] text-[#B88746] border border-[#B88746]/40"
                  : "text-[#888277] hover:text-[#F6EFE2]"
              }`}
            >
              Text to Speech
            </button>
            <button
              onClick={() => setActiveTab("stt")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "stt"
                  ? "bg-[#1C1917] text-[#B88746] border border-[#B88746]/40"
                  : "text-[#888277] hover:text-[#F6EFE2]"
              }`}
            >
              Speech to Text
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#888277]">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Sub-1.5s Guaranteed Ceiling</span>
          </div>
        </div>

        {/* 3-Column Studio Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#131210] border border-[#2D2824] rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl relative">
          {/* Column 1: Choose an Agent (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2D2824] pb-6 lg:pb-0 lg:pr-6">
            <div>
              <div className="text-xs font-mono text-[#888277] uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Choose an agent</span>
                <span className="text-[10px] text-[#B88746] bg-[#B88746]/10 px-2 py-0.5 rounded-full font-bold">
                  {AGENTS.length} Profiles
                </span>
              </div>

              <div className="space-y-2">
                {AGENTS.map((agent) => {
                  const isSelected = selectedAgent.id === agent.id;
                  return (
                    <button
                      key={agent.id}
                      onClick={() => {
                        if (isConnected || isConnecting) {
                          endCall();
                        }
                        setSelectedAgent(agent);
                      }}
                      className={`w-full text-left p-3.5 rounded-2xl flex items-start gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#1C1917] border border-[#B88746] text-[#F6EFE2] shadow-lg shadow-[#B88746]/5"
                          : "bg-transparent hover:bg-[#1C1917]/50 text-[#A8A29E] hover:text-[#F6EFE2] border border-transparent"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                          isSelected
                            ? "bg-[#B88746]/15 text-[#B88746]"
                            : "bg-[#1C1917] text-[#888277]"
                        }`}
                      >
                        {agent.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-xs sm:text-sm font-semibold truncate text-[#F6EFE2]">
                            {agent.name}
                          </span>
                          {agent.isLive && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                          )}
                        </div>
                        <div className="text-[11px] text-[#888277] truncate">
                          {agent.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Language Selector Pill */}
            <div className="mt-6 pt-4 border-t border-[#2D2824]">
              <div className="text-[10px] font-mono text-[#888277] uppercase tracking-wider mb-2">
                Language Model Mode
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#1C1917] rounded-xl border border-[#2D2824]">
                <button
                  onClick={() => setLanguage("en")}
                  disabled={isConnected || isConnecting}
                  className={`py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    language === "en"
                      ? "bg-[#B88746] text-[#0C0A09] font-bold shadow-xs"
                      : "text-[#888277] hover:text-[#F6EFE2]"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("ar")}
                  disabled={isConnected || isConnecting}
                  className={`py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    language === "ar"
                      ? "bg-[#B88746] text-[#0C0A09] font-bold shadow-xs"
                      : "text-[#888277] hover:text-[#F6EFE2]"
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  disabled={isConnected || isConnecting}
                  className={`py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    language === "hi"
                      ? "bg-[#B88746] text-[#0C0A09] font-bold shadow-xs"
                      : "text-[#888277] hover:text-[#F6EFE2]"
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Central Studio Canvas with Glowing Voice Sphere (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 sm:p-6 text-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#2D2824]">
            {/* Subtle Gold Dots Pattern */}
            <div
              className="absolute inset-0 opacity-[0.15] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#B88746 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 flex flex-col items-center w-full max-w-sm">
              {/* Agent Title Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1917] border border-[#2D2824] text-[11px] font-mono text-[#B88746] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{selectedAgent.badge}</span>
                <span className="text-[#888277]">•</span>
                <span>{selectedAgent.latency}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-[#F6EFE2] mb-1">
                {selectedAgent.name}
              </h3>
              <p className="text-xs text-[#888277] mb-8">
                Autonomous voice consultant with natural emotional human inflection.
              </p>

              {/* The Glowing Luxury Voice Sphere */}
              <div className="relative flex items-center justify-center my-4">
                {/* Outer Breathing Gold/Emerald Aura */}
                <div
                  className={`w-56 h-56 sm:w-64 sm:h-64 rounded-full transition-transform duration-300 ease-out flex items-center justify-center ${
                    isConnected
                      ? "bg-gradient-to-br from-[#B88746]/40 via-emerald-500/25 to-teal-500/10 shadow-[0_0_90px_rgba(184,135,70,0.35)]"
                      : isConnecting
                      ? "bg-gradient-to-br from-[#B88746]/20 via-[#B88746]/10 to-transparent animate-pulse shadow-[0_0_60px_rgba(184,135,70,0.2)]"
                      : "bg-gradient-to-br from-[#B88746]/15 via-[#1C1917] to-transparent shadow-[0_0_50px_rgba(184,135,70,0.1)] hover:shadow-[0_0_70px_rgba(184,135,70,0.25)]"
                  }`}
                  style={{
                    transform: `scale(${pulseScale})`,
                  }}
                >
                  {/* Secondary Inner Ripple Ring */}
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#131210]/90 border border-[#B88746]/30 flex items-center justify-center backdrop-blur-md">
                    {/* Interactive Central Pill Button */}
                    {selectedAgent.isLive ? (
                      !isConnected ? (
                        <button
                          onClick={startCall}
                          disabled={isConnecting}
                          className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B88746] to-[#D4A373] text-[#0C0A09] font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
                        >
                          {isConnecting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-[#0C0A09]" />
                              <span>Connecting...</span>
                            </>
                          ) : (
                            <>
                              <Mic className="w-4 h-4 text-[#0C0A09]" />
                              <span>Start Speaking</span>
                            </>
                          )}
                        </button>
                      ) : (
                        <button
                          onClick={endCall}
                          className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <PhoneOff className="w-4 h-4" />
                          <span>End Call ({formatTime(callDuration)})</span>
                        </button>
                      )
                    ) : (
                      <button
                        onClick={() => setSelectedAgent(AGENTS[0])}
                        className="px-6 py-3 rounded-full bg-[#1C1917] hover:bg-[#25221E] text-[#B88746] border border-[#B88746]/40 font-semibold text-xs transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-[#B88746]" />
                        <span>Switch to Live Sarah</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Real-Time Audio Spectrum Canvas */}
              <canvas
                ref={canvasRef}
                width={280}
                height={48}
                className="w-full max-w-[260px] h-12 my-2"
              />

              {/* Live Status Caption */}
              <p className="text-xs text-[#888277] max-w-xs mt-2">
                {isConnected
                  ? "Sarah is listening — speak naturally with full emotion in English."
                  : isConnecting
                  ? "Initializing zero-deadlock WebRTC pipeline (<1.5s)..."
                  : `Press Start Speaking to call ${selectedAgent.agentName}.`}
              </p>

              {/* Error Banner */}
              {error && (
                <div className="mt-4 px-4 py-2 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{error}</span>
                  <button onClick={retry} className="underline font-bold ml-1">
                    Retry
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Illustrative & Live Transcript (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pl-0 lg:pl-4">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2D2824] mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-[#F6EFE2]">
                    Illustrative transcript
                  </h4>
                  <p className="text-[11px] text-[#888277]">
                    Conversational dialogue preview
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1C1917] border border-[#2D2824] text-xs text-[#B88746]">
                  <User className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>{selectedAgent.agentName}</span>
                </div>
              </div>

              {/* Chat Speech Bubbles */}
              <div className="space-y-4">
                {selectedAgent.transcript.map((turn, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      turn.speaker === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[90%] p-3.5 text-xs leading-relaxed ${
                        turn.speaker === "agent"
                          ? "bg-[#1C1917] text-[#F6EFE2] rounded-2xl rounded-tl-sm border border-[#2D2824] shadow-md"
                          : "bg-[#B88746]/15 text-[#F6EFE2] rounded-2xl rounded-tr-sm border border-[#B88746]/40 shadow-md"
                      }`}
                    >
                      <div className="text-[10px] font-mono text-[#888277] mb-1">
                        {turn.speaker === "agent" ? selectedAgent.agentName : "Caller"}
                      </div>
                      {turn.text}
                    </div>
                  </div>
                ))}

                {isConnected && (
                  <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live WebRTC Audio Channel Active • Listening</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 pt-4 border-t border-[#2D2824]">
              <button
                onClick={() => onOpenBooking?.()}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#B88746] to-[#D4A373] text-[#0C0A09] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <span>Build & Deploy Your Own Agent</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Access Notice & Remote Mobile Testing Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-[#131210] border border-[#2D2824] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#888277]">
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-[#B88746] shrink-0" />
            <span>
              Share live demo with clients anywhere:{" "}
              <strong className="text-[#F6EFE2]">
                npx cloudflared tunnel --url http://localhost:3000
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Deepgram Aura-2 + Nova-3</span>
            <span>•</span>
            <span>Groq LPU 120B</span>
            <span>•</span>
            <span className="text-emerald-400">sub-1.5s latency</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VoiceDemoConsole;
