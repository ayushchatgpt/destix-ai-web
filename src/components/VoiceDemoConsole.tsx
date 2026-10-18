"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Radio, CheckCircle2, Activity, Sparkles } from "lucide-react";

interface PersonaData {
  id: string;
  name: string;
  industry: string;
  role: string;
  latency: string;
  dialogue: {
    speaker: "DestiX Agent" | "Caller";
    text: string;
    timestamp: string;
  }[];
}

const PERSONAS: PersonaData[] = [
  {
    id: "estate",
    name: "Luxury Villa Estate Agent",
    industry: "High-Net-Worth Property",
    role: "Private Villa Acquisition Concierge",
    latency: "380ms",
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Good afternoon. This is DestiX on behalf of Meridian Signature Villas. I noticed your private inquiry regarding the Horizon Seafront Residences. May I confirm if you are exploring this as a personal retreat or an addition to your investment portfolio?",
      },
      {
        speaker: "Caller",
        timestamp: "00:07",
        text: "Good afternoon. We are looking for a secluded 4-bedroom villa for my family, but we specifically require unobstructed ocean sunset views and secure parking for three vehicles.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:13",
        text: "Understood. The Horizon Villa collection specifically features 4 oceanfront master suites with a dedicated three-car private courtyard. Our managing partner has preview slots open this Saturday at 11:00 AM or 3:00 PM. Which time accommodates your calendar best?",
      },
      {
        speaker: "Caller",
        timestamp: "00:17",
        text: "Saturday at 11:00 AM works perfectly for us.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:20",
        text: "Splendid, Mr. Singhania. I have reserved the 11:00 AM private escort for you. The gate pass and architectural dossier are en route to your WhatsApp right now. We look forward to receiving you.",
      },
    ],
  },
  {
    id: "clinic",
    name: "Private Clinic Receptionist",
    industry: "Surgical & Aesthetic Practice",
    role: "Confidential Patient Triage & Booking",
    latency: "392ms",
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Thank you for calling Apex Aesthetics and Dermatology. This is DestiX. Are you calling to schedule a doctor consultation, inquire about a clinical treatment, or follow up on past care?",
      },
      {
        speaker: "Caller",
        timestamp: "00:06",
        text: "Hello, I was looking into the Morpheus8 RF skin treatment, but I have a couple of questions regarding procedural recovery downtime.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:11",
        text: "Certainly. Most patients experience mild redness for approximately 24 to 48 hours with zero disruption to daily routines. Dr. Kapoor has a private consultation slot available tomorrow afternoon at 4:30 PM. Would you like me to reserve that appointment?",
      },
      {
        speaker: "Caller",
        timestamp: "00:15",
        text: "Yes, tomorrow at 4:30 PM works. Please confirm the clinic address.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:18",
        text: "You are confirmed for 4:30 PM with Dr. Kapoor. I have dispatched the clinic location coordinates and preparation checklist straight to your phone. Have a wonderful day.",
      },
    ],
  },
  {
    id: "growth",
    name: "B2B Growth Qualifier",
    industry: "Enterprise Advisory & Tech",
    role: "Speed-to-Lead Outbound Interception",
    latency: "365ms",
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Good morning Alex, this is DestiX from CloudScale AI. I noticed you just submitted an inquiry regarding enterprise ingestion pipelines. Do you have 30 seconds to confirm if this is for your AWS or Azure infrastructure?",
      },
      {
        speaker: "Caller",
        timestamp: "00:07",
        text: "Hello! Wow, that was an exceptionally fast callback. Yes, our engineering team is migrating 40TB of PostgreSQL databases on AWS this quarter.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:13",
        text: "That is precisely what our high-concurrency ingestion tier is architected for. Our principal cloud architect, Marcus, can walk you through our benchmark latency audit tomorrow at 10:00 AM EST. Does that align with your schedule?",
      },
      {
        speaker: "Caller",
        timestamp: "00:17",
        text: "Tomorrow at 10:00 AM EST works. Please send over the invitation.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:20",
        text: "The calendar invitation and architecture whitepaper have been dispatched to your inbox. Thank you Alex, speak tomorrow.",
      },
    ],
  },
];

export function VoiceDemoConsole() {
  const [selectedPersona, setSelectedPersona] = useState<PersonaData>(PERSONAS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Audio spectrum visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      phase += 0.08;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barCount = 38;
      const barWidth = 3;
      const gap = (canvas.width - barCount * barWidth) / (barCount - 1);

      for (let i = 0; i < barCount; i++) {
        let height = 4;
        if (isPlaying) {
          const sinVal = Math.sin(phase + i * 0.3);
          const cosVal = Math.cos(phase * 1.4 + i * 0.16);
          height = Math.max(4, Math.abs(sinVal * cosVal) * 36 + 6);
        }

        const x = i * (barWidth + gap);
        const y = (canvas.height - height) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, "#B88746");
        gradient.addColorStop(1, "#D4A373");

        ctx.fillStyle = isPlaying ? gradient : "rgba(246, 239, 226, 0.2)";
        ctx.fillRect(x, y, barWidth, height);
      }
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  // Audio Speech Synthesis Simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const currentTurn = selectedPersona.dialogue[currentTurnIndex];
        if (currentTurn) {
          const utterance = new SpeechSynthesisUtterance(currentTurn.text);
          utterance.rate = 1.02;
          utterance.pitch = currentTurn.speaker === "DestiX Agent" ? 1.0 : 0.95;

          utterance.onend = () => {
            if (currentTurnIndex < selectedPersona.dialogue.length - 1) {
              timer = setTimeout(() => {
                setCurrentTurnIndex((prev) => prev + 1);
              }, 600);
            } else {
              setIsPlaying(false);
              setCurrentTurnIndex(0);
            }
          };

          window.speechSynthesis.speak(utterance);
        }
      } else {
        timer = setInterval(() => {
          setCurrentTurnIndex((prev) => {
            if (prev < selectedPersona.dialogue.length - 1) {
              return prev + 1;
            } else {
              setIsPlaying(false);
              return 0;
            }
          });
        }, 3600);
      }
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying, currentTurnIndex, selectedPersona]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentTurnIndex(0);
  };

  const handleSelectPersona = (p: PersonaData) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSelectedPersona(p);
    setIsPlaying(false);
    setCurrentTurnIndex(0);
  };

  return (
    <section id="voice-console" className="py-24 sm:py-32 bg-[#141210] text-[#F6EFE2] relative border-b border-[#25221F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201D1A] border border-[#332E29] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            (06) LIVE VOICE TELEMETRY CONSOLE
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#F6EFE2] leading-[1.0] mb-6">
            Audition the conversational parity{" "}
            <span className="italic text-[#B88746]">in real-time.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C5BDB1] leading-relaxed font-normal">
            Select an institutional vertical preset below. Experience sub-500ms roundtrip audio synthesis, live speech spectrum dynamics, and instant executive calendar confirmation.
          </p>
        </div>

        {/* 3 Industry Preset Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {PERSONAS.map((persona) => {
            const isSelected = selectedPersona.id === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => handleSelectPersona(persona)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 ${
                  isSelected
                    ? "bg-[#201D1A] border-[#B88746] shadow-lg"
                    : "bg-[#181512] border-[#2D2824] hover:border-[#3D3732] text-[#888277]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746]">
                    {persona.industry}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-[#B88746] animate-pulse" : "bg-white/20"
                    }`}
                  />
                </div>
                <div
                  className={`text-base font-bold font-['Instrument_Serif'] ${
                    isSelected ? "text-[#F6EFE2]" : "text-[#A89F93]"
                  }`}
                >
                  {persona.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Console Interface Container */}
        <div className="rounded-3xl bg-[#1C1916] border border-[#2D2824] p-6 sm:p-10 shadow-2xl">
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#2D2824] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25211D] border border-[#3A332E] flex items-center justify-center text-[#B88746]">
                <Radio className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#F6EFE2]">
                    {selectedPersona.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#B88746]/10 border border-[#B88746]/30 text-[10px] font-['JetBrains_Mono'] text-[#B88746]">
                    {selectedPersona.latency}
                  </span>
                </div>
                <p className="text-xs text-[#888277]">
                  {selectedPersona.role} • 16kHz HD Telephony Codec
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-['JetBrains_Mono'] text-[#888277]">
              <span>INTERRUPTION: SUB-200MS</span>
              <span>•</span>
              <span>JITTER &lt; 2MS</span>
            </div>
          </div>

          {/* Central Visualizer & Transcript Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Visualizer & Controls (Left 5 Cols) */}
            <div className="lg:col-span-5 bg-[#141210] border border-[#2D2824] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#888277] uppercase mb-4">
                Real-Time Audio Spectrum (Neural Synth)
              </div>

              {/* Dynamic Spectrum Canvas */}
              <canvas
                ref={canvasRef}
                width={300}
                height={64}
                className="w-full max-w-[260px] h-16 mb-6"
              />

              {/* Play & Reset Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-[#B88746] hover:bg-[#D4A373] text-[#141210] flex items-center justify-center shadow-lg transition-all hover:scale-105"
                  aria-label={isPlaying ? "Pause Demo" : "Play Demo"}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current stroke-[2.5]" />
                  ) : (
                    <Play className="w-6 h-6 fill-current stroke-[2.5] ml-1" />
                  )}
                </button>

                <button
                  onClick={handleReset}
                  className="p-3 rounded-full bg-[#201D1A] hover:bg-[#2A2622] border border-[#3A332E] text-[#888277] hover:text-[#F6EFE2] transition-colors"
                  aria-label="Reset Audio"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-[#888277] mt-4 font-['JetBrains_Mono']">
                {isPlaying ? "SYNTHESIZING LIVE AUDIO..." : "TAP PLAY TO HEAR HUMAN PARITY"}
              </div>
            </div>

            {/* Synchronized Transcript Feed (Right 7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#888277] pb-2 border-b border-[#2D2824]">
                <span>CONVERSATIONAL TRANSCRIPT</span>
                <span>STEP {currentTurnIndex + 1} OF {selectedPersona.dialogue.length}</span>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {selectedPersona.dialogue.map((turn, idx) => {
                  const isActive = idx === currentTurnIndex && isPlaying;
                  const isAgent = turn.speaker === "DestiX Agent";

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "bg-[#25211D] border-[#B88746] shadow-md"
                          : "bg-[#141210]/60 border-[#2D2824]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-xs font-bold font-['JetBrains_Mono'] ${
                            isAgent ? "text-[#B88746]" : "text-[#D4A373]"
                          }`}
                        >
                          {turn.speaker}
                        </span>
                        <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277]">
                          {turn.timestamp}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          isActive ? "text-[#F6EFE2] font-medium" : "text-[#A89F93]"
                        }`}
                      >
                        {turn.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Outcome Footer */}
          <div className="bg-[#141210] rounded-xl p-4 border border-[#2D2824] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-['JetBrains_Mono']">
            <div className="flex items-center gap-2 text-[#B88746]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>OUTCOME: CALENDAR SLOT SECURED + WHATSAPP LOOKBOOK DISPATCHED</span>
            </div>
            <div className="text-[#888277]">
              MODEL: DESTIX-NEURAL-V4.2 • 0% CALLER DROPOFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VoiceDemoConsole;
