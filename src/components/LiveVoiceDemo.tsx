"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Square,
  Volume2,
  VolumeX,
  Building2,
  Stethoscope,
  Briefcase,
  Utensils,
  Radio,
  Zap,
} from "lucide-react";

interface AgentDemo {
  id: string;
  name: string;
  subtitle: string;
  role: string;
  voiceStyle: string;
  language: string;
  latency: string;
  icon: any;
  lines: { speaker: "Agent" | "Caller"; text: string; time: string }[];
}

export const LiveVoiceDemo: React.FC = () => {
  const [selectedAgentIdx, setSelectedAgentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const agents: AgentDemo[] = [
    {
      id: "real-estate",
      name: "Real Estate Specialist",
      subtitle: "Buyer qualification & villa tour scheduling",
      role: "Luxury Property Broker",
      voiceStyle: "Warm, authoritative, conversational",
      language: "English & Hindi (Fluent code-switch)",
      latency: "340ms",
      icon: Building2,
      lines: [
        {
          speaker: "Agent",
          text: "Hello! This is DestiX from Meridian Luxury Estates. I noticed your interest in the Seafront Signature Villas in Mumbai. May I confirm if you're exploring this as a personal residence or an investment asset?",
          time: "0:02",
        },
        {
          speaker: "Caller",
          text: "Hi, yes. We're looking for a private 4-bedroom villa for my family, but we need sea-facing views and private parking.",
          time: "0:08",
        },
        {
          speaker: "Agent",
          text: "Understood. The Horizon Villa collection specifically features 4 oceanfront suites with a dedicated three-car private courtyard. Our managing partner has preview slots available this Saturday at 11 AM or 3 PM. Which time suits your schedule best?",
          time: "0:16",
        },
        {
          speaker: "Caller",
          text: "Saturday at 11 AM works perfectly for us.",
          time: "0:22",
        },
        {
          speaker: "Agent",
          text: "Wonderful, Mr. Singhania. I've reserved the 11 AM private escort for you. I'm dispatching the gate pass and architectural brochure to your WhatsApp right now. We look forward to welcoming you.",
          time: "0:29",
        },
      ],
    },
    {
      id: "clinic",
      name: "Clinic Receptionist",
      subtitle: "24/7 Patient triage & emergency doctor booking",
      role: "Medical Front-Desk Lead",
      voiceStyle: "Empathetic, calm, reassuring",
      language: "English & Hindi",
      latency: "360ms",
      icon: Stethoscope,
      lines: [
        {
          speaker: "Agent",
          text: "Thank you for calling SkinMed Aesthetics & Surgical Clinic. I'm the clinical assistant. Are you calling regarding a cosmetic consultation or a follow-up with Dr. Verma?",
          time: "0:02",
        },
        {
          speaker: "Caller",
          text: "Hello, I wanted to inquire about downtime for fractional laser resurfacing. I have an event next week.",
          time: "0:08",
        },
        {
          speaker: "Agent",
          text: "Great question! Most of our patients experience mild redness that subsides within 48 to 72 hours. For an event next week, Dr. Verma recommends our gentle hydra-glow protocol instead. We have an open slot today at 4:30 PM. Would you like me to book that for you?",
          time: "0:17",
        },
        {
          speaker: "Caller",
          text: "Yes, 4:30 PM today would be great.",
          time: "0:23",
        },
        {
          speaker: "Agent",
          text: "You are confirmed for 4:30 PM with Dr. Verma. Please arrive 10 minutes prior for digital registration. I've sent the clinic location pin to your phone.",
          time: "0:30",
        },
      ],
    },
    {
      id: "b2b",
      name: "B2B Sales Qualifier",
      subtitle: "Speed-to-lead qualification in < 45 seconds",
      role: "Senior Pipeline Qualifier",
      voiceStyle: "Sharp, consultative, punchy",
      language: "English",
      latency: "320ms",
      icon: Briefcase,
      lines: [
        {
          speaker: "Agent",
          text: "Hi David! DestiX AI calling from ScaleOps Cloud. I saw you just reviewed our enterprise pricing tier for Kubernetes cluster management. Are you currently running over 50 production nodes?",
          time: "0:02",
        },
        {
          speaker: "Caller",
          text: "Hey David, yes—we manage around 180 nodes on AWS, and our multi-cloud deployment is becoming really messy.",
          time: "0:09",
        },
        {
          speaker: "Agent",
          text: "That is precisely what our Series-C customers face. Our principal cloud architect specializes in 100+ node multi-region architectures. I have his live calendar open—can we do a 20-minute technical deep dive tomorrow at 2 PM EST?",
          time: "0:18",
        },
        {
          speaker: "Caller",
          text: "Sure, let's do 2 PM EST tomorrow.",
          time: "0:24",
        },
        {
          speaker: "Agent",
          text: "Confirmed. The calendar invite and technical benchmark deck are already in your inbox. Looking forward to speaking then!",
          time: "0:31",
        },
      ],
    },
    {
      id: "hospitality",
      name: "Hospitality Concierge",
      subtitle: "Boutique resort reservations & dining triage",
      role: "Luxury Concierge",
      voiceStyle: "Polite, gracious, discreet",
      language: "English, Hindi & Global Nuances",
      latency: "350ms",
      icon: Utensils,
      lines: [
        {
          speaker: "Agent",
          text: "Good evening, you've reached The Oberoi Pavilion concierge. How may I assist you with your stay or dinner reservations tonight?",
          time: "0:02",
        },
        {
          speaker: "Caller",
          text: "Hi, I'm checking if you have a private candlelit table by the terrace for an anniversary dinner tonight for two people?",
          time: "0:08",
        },
        {
          speaker: "Agent",
          text: "Happy anniversary! We do have our signature North Terrace table available at 8:30 PM, complete with personalized menus and champagne pairing. May I reserve this under your name?",
          time: "0:17",
        },
        {
          speaker: "Caller",
          text: "Yes please, under Rahul Mehra.",
          time: "0:23",
        },
        {
          speaker: "Agent",
          text: "It is my pleasure, Mr. Mehra. Your table is reserved for 8:30 PM. Our sommelier will have your welcome flutes prepared upon arrival.",
          time: "0:30",
        },
      ],
    },
  ];

  const activeAgent = agents[selectedAgentIdx];

  // Speech synthesis / Audio playback effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (typeof window !== "undefined" && "speechSynthesis" in window && !isMuted) {
        window.speechSynthesis.cancel();
        const currentLine = activeAgent.lines[currentLineIdx];
        if (currentLine) {
          const utterance = new SpeechSynthesisUtterance(currentLine.text);
          utterance.rate = 1.05;
          utterance.pitch = currentLine.speaker === "Agent" ? 1.0 : 0.95;
          window.speechSynthesis.speak(utterance);
        }
      }

      timer = setTimeout(() => {
        if (currentLineIdx < activeAgent.lines.length - 1) {
          setCurrentLineIdx((prev) => prev + 1);
        } else {
          setIsPlaying(false);
          setCurrentLineIdx(0);
        }
      }, 5500);
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isPlaying, currentLineIdx, selectedAgentIdx, isMuted, activeAgent.lines]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentLineIdx(0);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    } else {
      setIsPlaying(true);
      setCurrentLineIdx(0);
    }
  };

  const handleSelectAgent = (idx: number) => {
    setIsPlaying(false);
    setCurrentLineIdx(0);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSelectedAgentIdx(idx);
  };

  return (
    <section
      id="live-demo"
      className="relative overflow-hidden bg-[#0A0C12] px-6 py-24 text-white md:px-10 md:py-36 border-t border-white/10"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
            // Mission Control Audio Station
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Experience live voice synthesis,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              in real-time.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light leading-relaxed">
            Select an agent persona below and experience low-latency conversational telephony.
            This is the exact production voice stack we deploy for our clients.
            Zero canned recordings, sub-350ms turn-taking latency.
          </p>
        </div>

        {/* 4 Agent Selectable Tabs */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, idx) => {
            const Icon = agent.icon;
            const isSelected = selectedAgentIdx === idx;
            return (
              <button
                key={agent.id}
                type="button"
                onClick={() => handleSelectAgent(idx)}
                className={`group flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl transition-colors ${
                      isSelected
                        ? "bg-cyan-400 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                        : "bg-white/10 text-white group-hover:bg-cyan-500/20 group-hover:text-cyan-400"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-white">
                      {agent.name}
                    </span>
                    <span className="block text-[11px] font-mono text-slate-400">
                      {agent.role}
                    </span>
                  </div>
                </div>

                <div
                  className={`size-2 rounded-full ${
                    isSelected ? "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" : "bg-white/20"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Cyber Audio Console Station */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#08090C] p-6 md:p-10 shadow-espresso backdrop-blur-xl">
          {/* Top Console Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  Realtime Telephony Stream Active
                </span>
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">
                {activeAgent.name} • <span className="text-cyan-400">{activeAgent.subtitle}</span>
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 font-mono text-xs text-cyan-300">
                Turn Latency: <strong className="text-emerald-400">{activeAgent.latency}</strong>
              </span>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white"
                title={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              </button>
            </div>
          </div>

          {/* Soundwave Visualizer & Play Button */}
          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <button
                onClick={handleTogglePlay}
                className={`group flex size-20 items-center justify-center rounded-full transition-all duration-300 shadow-2xl ${
                  isPlaying
                    ? "bg-red-500 text-white hover:scale-105 shadow-[0_0_25px_rgba(239,68,68,0.5)]"
                    : "bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-bold hover:scale-105 shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                }`}
                aria-label={isPlaying ? "Stop conversation" : "Start conversation"}
              >
                {isPlaying ? (
                  <Square className="size-7 fill-current" />
                ) : (
                  <Play className="size-8 fill-current pl-1 text-black" />
                )}
              </button>

              <div>
                <div className="font-display text-xl font-bold text-white">
                  {isPlaying ? "Simulating Live Production Call..." : "Tap to Start Call Simulation"}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-light">
                  Natural breathing pauses, intelligent interruption detection, instant CRM trigger.
                </div>
              </div>
            </div>

            {/* Dynamic Soundwave Bars */}
            <div className="flex items-end gap-1.5 h-16 w-full max-w-xs">
              {[15, 30, 60, 90, 45, 80, 100, 75, 40, 85, 95, 50, 70, 35, 65, 90, 45, 20].map(
                (height, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-200 ${
                      isPlaying
                        ? "bg-gradient-to-t from-cyan-400 to-indigo-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                        : "bg-white/10"
                    }`}
                    style={{
                      height: isPlaying ? `${Math.max(15, (height * (currentLineIdx + 1)) % 100)}%` : "12%",
                      animation: isPlaying
                        ? `eq-bounce-${(i % 4) + 1} ${0.6 + (i % 3) * 0.2}s ease-in-out infinite alternate`
                        : "none",
                    }}
                  />
                )
              )}
            </div>
          </div>

          {/* Live Transcript Dialog Box */}
          <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-5 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 pb-2 border-b border-white/5">
              <span>REAL-TIME CALL TRANSCRIPT</span>
              <span>Turn {currentLineIdx + 1} of {activeAgent.lines.length}</span>
            </div>

            <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
              {activeAgent.lines.map((line, idx) => {
                const isCurrent = idx === currentLineIdx && isPlaying;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 rounded-xl p-3 text-xs transition-all ${
                      line.speaker === "Agent"
                        ? "bg-white/[0.03] border border-white/10"
                        : "bg-cyan-950/40 border border-cyan-500/30"
                    } ${isCurrent ? "ring-1 ring-cyan-400" : ""}`}
                  >
                    <span
                      className={`font-mono font-semibold px-2 py-0.5 rounded text-[10px] shrink-0 ${
                        line.speaker === "Agent"
                          ? "bg-white/10 text-white"
                          : "bg-cyan-500 text-black font-bold"
                      }`}
                    >
                      {line.speaker}
                    </span>

                    <p className={`flex-1 leading-relaxed ${isCurrent ? "text-white font-medium" : "text-slate-400"}`}>
                      {line.text}
                    </p>

                    <span className="font-mono text-[10px] text-slate-500 shrink-0">
                      {line.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
