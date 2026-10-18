"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Phone,
  Radio,
  Sparkles,
  CheckCircle2,
  Activity,
  Layers,
} from "lucide-react";

interface PersonaData {
  id: string;
  name: string;
  industry: string;
  role: string;
  latency: string;
  audioDuration: number;
  dialogue: {
    speaker: "DestiX Agent" | "Caller";
    text: string;
    timestamp: string;
  }[];
}

const PERSONAS: PersonaData[] = [
  {
    id: "real-estate",
    name: "Luxury Real Estate Concierge",
    industry: "High-Value Property",
    role: "HNI Inbound Lead Qualifier",
    latency: "368ms",
    audioDuration: 18,
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Good afternoon, this is DestiX with Meridian Signature Villas. I noticed you just submitted an inquiry for the Horizon Seafront Residences. Are you looking at this as a private residence or an investment portfolio addition?",
      },
      {
        speaker: "Caller",
        timestamp: "00:06",
        text: "Hi there. We're looking for a private 4-bedroom villa for my family, but we specifically need sea-facing sunset views and secure multi-car parking.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:11",
        text: "Understood. The Horizon Villa collection specifically features 4 oceanfront suites with a dedicated three-car private courtyard. Our managing partner has preview slots open this Saturday at 11 AM or 3 PM. Which time suits your schedule best?",
      },
      {
        speaker: "Caller",
        timestamp: "00:15",
        text: "Saturday at 11 AM works perfectly for us.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:17",
        text: "Wonderful, Mr. Singhania. I've reserved the 11 AM private escort for you. I'm dispatching the gate pass and architectural brochure to your WhatsApp right now. We look forward to welcoming you.",
      },
    ],
  },
  {
    id: "medspa",
    name: "Medspa / Clinic Desk",
    industry: "Healthcare & Aesthetics",
    role: "24/7 Triage & Doctor Dispatch",
    latency: "374ms",
    audioDuration: 16,
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Thank you for calling Apex Aesthetics and Dermatology. This is DestiX. Are you calling to book a doctor consultation, inquire about a treatment, or follow up on past care?",
      },
      {
        speaker: "Caller",
        timestamp: "00:05",
        text: "Hello, I was looking into the Morpheus8 skin tightening treatment, but I have a couple of questions about post-procedure downtime.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:10",
        text: "Certainly. Most patients experience mild redness for approximately 24 to 48 hours, with zero disruption to daily routines. Dr. Kapoor has a consultation opening tomorrow afternoon at 4:30 PM. Would you like me to hold that slot?",
      },
      {
        speaker: "Caller",
        timestamp: "00:13",
        text: "Yes, tomorrow at 4:30 PM works. What's the address?",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:15",
        text: "You're confirmed for 4:30 PM with Dr. Kapoor. I've sent the clinic location map and preparation checklist straight to your SMS. Have a wonderful day!",
      },
    ],
  },
  {
    id: "b2b",
    name: "High-Ticket B2B Qualifier",
    industry: "Enterprise Software & Tech",
    role: "Speed-to-Lead Outbound Qualifier",
    latency: "355ms",
    audioDuration: 19,
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Hi Alex, this is DestiX from CloudScale AI. I saw you just requested pricing for our enterprise data pipeline tier. Do you currently have 30 seconds to confirm if this is for your AWS or Azure infrastructure?",
      },
      {
        speaker: "Caller",
        timestamp: "00:06",
        text: "Hey! Wow, you called fast. Yes, we are migrating 40TB of PostgreSQL data on AWS this quarter.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:11",
        text: "That's exactly what our high-concurrency ingestion tier is architected for. Our principal cloud architect, Marcus, can walk you through our benchmark latency test tomorrow at 10 AM EST. Does that match your calendar?",
      },
      {
        speaker: "Caller",
        timestamp: "00:16",
        text: "Tomorrow at 10 AM EST works. Send me the invite.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:18",
        text: "Calendar invite and benchmark whitepaper are in your inbox. Thanks Alex, talk tomorrow!",
      },
    ],
  },
  {
    id: "hospitality",
    name: "VIP Hospitality Concierge",
    industry: "Luxury Hotels & Resorts",
    role: "Guest Experience & Reservation",
    latency: "382ms",
    audioDuration: 17,
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Welcome to The Grand Sanctuary Resort Concierge. How may I elevate your upcoming stay with us?",
      },
      {
        speaker: "Caller",
        timestamp: "00:05",
        text: "We are arriving this Friday for our anniversary. Can we arrange a private helicopter transfer from the airport and a sunset dinner table?",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:11",
        text: "Congratulations on your anniversary! I have reserved our private Airbus H125 heli-transfer for your arrival window at 3:15 PM, and secured the Cliffside Table #1 at the Ocean Grill. May I confirm champagne preferences?",
      },
      {
        speaker: "Caller",
        timestamp: "00:14",
        text: "Dom Pérignon Vintage would be perfect. Thank you!",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:16",
        text: "It is all arranged. The itinerary has been synced to your guest portal. We look forward to creating an unforgettable celebration.",
      },
    ],
  },
];

export default function AudioTelemetryConsole() {
  const [selectedPersona, setSelectedPersona] = useState<PersonaData>(PERSONAS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Frequency spectrum animation bars
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

      const barCount = 42;
      const barWidth = 3;
      const gap = (canvas.width - barCount * barWidth) / (barCount - 1);

      for (let i = 0; i < barCount; i++) {
        let height = 4;
        if (isPlaying) {
          const sinVal = Math.sin(phase + i * 0.28);
          const cosVal = Math.cos(phase * 1.5 + i * 0.15);
          height = Math.max(4, Math.abs(sinVal * cosVal) * 36 + 6);
        }

        const x = i * (barWidth + gap);
        const y = (canvas.height - height) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, "#00F5A0");
        gradient.addColorStop(1, "#3B82F6");

        ctx.fillStyle = isPlaying ? gradient : "rgba(255, 255, 255, 0.15)";
        ctx.fillRect(x, y, barWidth, height);
      }
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  // Handle Playback Simulation with SpeechSynthesis
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying) {
      // Use Web Speech Synthesis if available
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const currentTurn = selectedPersona.dialogue[currentTurnIndex];
        if (currentTurn) {
          const utterance = new SpeechSynthesisUtterance(currentTurn.text);
          utterance.rate = 1.05;
          utterance.pitch = currentTurn.speaker === "DestiX Agent" ? 1.0 : 0.95;
          synthRef.current = utterance;

          utterance.onend = () => {
            if (currentTurnIndex < selectedPersona.dialogue.length - 1) {
              timer = setTimeout(() => {
                setCurrentTurnIndex((prev) => prev + 1);
              }, 600);
            } else {
              setIsPlaying(false);
              setCurrentTurnIndex(0);
              setProgress(100);
            }
          };

          window.speechSynthesis.speak(utterance);
        }
      } else {
        // Fallback interval simulation
        timer = setInterval(() => {
          setCurrentTurnIndex((prev) => {
            if (prev < selectedPersona.dialogue.length - 1) {
              return prev + 1;
            } else {
              setIsPlaying(false);
              return 0;
            }
          });
        }, 3500);
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

  // Update progress bar
  useEffect(() => {
    const total = selectedPersona.dialogue.length;
    setProgress(Math.round(((currentTurnIndex + (isPlaying ? 0.5 : 0)) / total) * 100));
  }, [currentTurnIndex, isPlaying, selectedPersona]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentTurnIndex(0);
    setProgress(0);
  };

  const handleSelectPersona = (p: PersonaData) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSelectedPersona(p);
    setIsPlaying(false);
    setCurrentTurnIndex(0);
    setProgress(0);
  };

  return (
    <section id="voice" className="py-24 sm:py-32 bg-[#08080A] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111216] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            // 03 LIVE TELEMETRY CONSOLE
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Test the conversational latency live.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Select a target industry deployment below. Experience sub-380ms roundtrip audio synthesis, live speech spectrum dynamics, and instant CRM calendar synchronization in real-time.
          </p>
        </div>

        {/* 4 Industry Preset Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {PERSONAS.map((persona) => {
            const isSelected = selectedPersona.id === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => handleSelectPersona(persona)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                  isSelected
                    ? "bg-[#16181F] border-[#00F5A0] shadow-[0_0_20px_rgba(0,245,160,0.15)]"
                    : "bg-[#111216] border-white/5 hover:border-white/20 text-[#7A7D87]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#7A7D87]">
                    {persona.industry}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-[#00F5A0] animate-pulse" : "bg-white/20"
                    }`}
                  />
                </div>
                <div
                  className={`text-sm font-semibold truncate ${
                    isSelected ? "text-[#F4F4F6]" : "text-[#94A3B8]"
                  }`}
                >
                  {persona.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Audio Telemetry Console Interface */}
        <div className="rounded-3xl bg-[#111216] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Top Telemetry Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-white/5 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#16181F] border border-white/10 flex items-center justify-center text-[#00F5A0]">
                <Radio className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-['Syne'] font-bold text-lg text-[#F4F4F6]">
                    {selectedPersona.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[10px] font-['JetBrains_Mono'] text-[#00F5A0]">
                    {selectedPersona.latency}
                  </span>
                </div>
                <p className="text-xs text-[#7A7D87]">
                  {selectedPersona.role} • 16kHz HD Telephony Codec
                </p>
              </div>
            </div>

            {/* Telemetry Stats Strip */}
            <div className="flex items-center gap-4 text-xs font-['JetBrains_Mono'] text-[#7A7D87]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
                <span>INTERRUPTION: SUB-200MS</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>JITTER &lt; 2MS</span>
              </div>
            </div>
          </div>

          {/* Central Visualizer Canvas & Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Visualizer & Controls (Left 5 Cols) */}
            <div className="lg:col-span-5 bg-[#08080A] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#7A7D87] uppercase mb-4">
                Real-Time Audio Spectrum (Neural Synth)
              </div>

              {/* Dynamic Spectrum Canvas */}
              <canvas
                ref={canvasRef}
                width={320}
                height={64}
                className="w-full max-w-[280px] h-16 mb-6"
              />

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-[#00F5A0] hover:bg-[#34F8B3] text-[#08080A] flex items-center justify-center shadow-[0_0_30px_rgba(0,245,160,0.4)] transition-all hover:scale-105"
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
                  className="p-3 rounded-full bg-[#16181F] hover:bg-[#1E222D] border border-white/10 text-[#7A7D87] hover:text-[#F4F4F6] transition-colors"
                  aria-label="Reset Audio"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-[#7A7D87] mt-4 font-['JetBrains_Mono']">
                {isPlaying ? "SYNTHESIZING AUDIO..." : "TAP PLAY TO TEST LIVE VOICE SYNTHESIS"}
              </div>
            </div>

            {/* Live Synchronized Transcript Feed (Right 7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#7A7D87] pb-2 border-b border-white/5">
                <span>CONVERSATIONAL TRANSCRIPT FEED</span>
                <span>STEP {currentTurnIndex + 1} OF {selectedPersona.dialogue.length}</span>
              </div>

              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2">
                {selectedPersona.dialogue.map((turn, idx) => {
                  const isActive = idx === currentTurnIndex && isPlaying;
                  const isAgent = turn.speaker === "DestiX Agent";

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "bg-[#16181F] border-[#00F5A0]/60 shadow-[0_0_20px_rgba(0,245,160,0.1)]"
                          : "bg-[#08080A]/60 border-white/5 text-opacity-80"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold font-['JetBrains_Mono'] ${
                              isAgent ? "text-[#00F5A0]" : "text-[#3B82F6]"
                            }`}
                          >
                            {turn.speaker}
                          </span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-beacon" />
                          )}
                        </div>
                        <span className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87]">
                          {turn.timestamp}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          isActive ? "text-[#F4F4F6] font-medium" : "text-[#94A3B8]"
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

          {/* Bottom Operational Output Strip */}
          <div className="bg-[#08080A] rounded-xl p-4 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-['JetBrains_Mono']">
            <div className="flex items-center gap-2 text-[#00F5A0]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>OUTCOME: CALENDAR SLOT CONFIRMED + SMS / WHATSAPP DISPATCHED</span>
            </div>
            <div className="text-[#7A7D87]">
              MODEL: DESTIX-NEURAL-V4.2 • ZERO LATENCY SPIKES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
