"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Mic, Volume2, Globe, Sparkles, CheckCircle2, Play, Pause } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToDemo: () => void;
}

export function Hero({ onOpenBooking, onScrollToDemo }: HeroProps) {
  const [activeEngine, setActiveEngine] = useState<"voice" | "spatial">("voice");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [transcriptIndex, setTranscriptIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const transcripts = [
    {
      speaker: "DestiX Agent",
      text: "Good afternoon. I noticed your private inquiry regarding the Palm Jebel Ali seafront residences with Alliance Capital Properties. Are you exploring this for portfolio capital allocation or a family residence?",
    },
    {
      speaker: "Prospect (Investor)",
      text: "Looking for an oceanfront family estate within the next 90 days. Budget is around AED 25 million.",
    },
    {
      speaker: "DestiX Agent",
      text: "Understood. I have dispatched the confidential Palm Jebel Ali briefing dossier directly to your WhatsApp and scheduled a private briefing with our Senior Managing Advisor for tomorrow at 11 AM.",
    },
  ];

  // Rotate transcript lines
  useEffect(() => {
    const interval = setInterval(() => {
      setTranscriptIndex((prev) => (prev + 1) % transcripts.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [transcripts.length]);

  // Audio wave canvas simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const renderWave = () => {
      time += 0.04;
      const width = (canvas.width = canvas.parentElement?.clientWidth || 300);
      const height = (canvas.height = 70);

      ctx.clearRect(0, 0, width, height);

      // Draw 3 layered sine waves
      const waves = [
        { color: "rgba(184, 135, 70, 0.7)", freq: 0.025, amp: isPlayingAudio ? 22 : 12, speed: 1.5 },
        { color: "rgba(197, 160, 89, 0.4)", freq: 0.018, amp: isPlayingAudio ? 16 : 8, speed: 1.1 },
        { color: "rgba(24, 22, 20, 0.15)", freq: 0.035, amp: isPlayingAudio ? 12 : 5, speed: 2.0 },
      ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = w.color;

        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * w.freq + time * w.speed) * w.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      animId = requestAnimationFrame(renderWave);
    };

    renderWave();
    return () => cancelAnimationFrame(animId);
  }, [isPlayingAudio]);

  const handleToggleAudio = () => {
    if (typeof window === "undefined") return;

    if (!isPlayingAudio) {
      setIsPlayingAudio(true);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(transcripts[transcriptIndex].text);
        utterance.rate = 1.02;
        utterance.pitch = 0.98;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => setIsPlayingAudio(false), 3000);
      }
    } else {
      setIsPlayingAudio(false);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#F6F4EE] bg-architectural-grid overflow-hidden border-b border-[#E2DDD1]">
      {/* Ambient Gradient Pools with Gentle Drift */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[600px] bg-gradient-to-b from-[#B88746]/12 via-[#EDE8DC]/50 to-transparent blur-[140px] pointer-events-none -z-10 animate-aura-drift" />

      {/* Decorative Hairline Architectural SVG Rings with Subtle Pulse */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50%" cy="38%" r="420" fill="none" stroke="#E2DDD1" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="50%" cy="38%" r="680" fill="none" stroke="#E2DDD1" strokeWidth="1" />
        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#E2DDD1" strokeWidth="1" strokeDasharray="2 8" opacity="0.5" />
      </svg>

      {/* Floating Micro-Motion Badges (Dribbble & RapidX Style) */}
      <div className="hidden xl:block absolute top-40 left-12 animate-float-slow pointer-events-none z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2DDD1] shadow-[0_8px_25px_-8px_rgba(24,22,20,0.08)] text-[11px] font-['JetBrains_Mono'] text-[#181614]">
          <span className="w-2 h-2 rounded-full bg-[#B88746] animate-beacon" />
          <span className="font-semibold text-[#B88746]">SLA &lt;45s</span>
          <span className="text-[#888277]">Speed to Lead</span>
        </div>
      </div>

      <div className="hidden xl:block absolute top-48 right-12 animate-float-delayed pointer-events-none z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2DDD1] shadow-[0_8px_25px_-8px_rgba(24,22,20,0.08)] text-[11px] font-['JetBrains_Mono'] text-[#181614]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-[#181614]">Sub-500ms</span>
          <span className="text-[#888277]">Acoustic Parity</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Minimalist Architectural Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] sm:text-xs font-['JetBrains_Mono'] tracking-[0.18em] text-[#55514B] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
            <span className="font-semibold text-[#181614]">BEST AI VOICE AGENT IN DELHI NCR &bull; AUTONOMOUS TELEPHONY</span>
          </div>

          {/* Monumental Sculptural Display Headline */}
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl lg:text-[96px] leading-[0.93] tracking-tight text-[#181614] mb-6">
            <span className="block font-['JetBrains_Mono'] font-medium text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#B88746] mb-3 sm:mb-4">
              DestiX AI &bull; Best AI Voice Agent in Delhi NCR &bull; Autonomous Telephony
            </span>
            AI handles the qualification.{" "}
            <span className="italic text-[#B88746] inline-block transition-transform duration-300 hover:scale-[1.02]">
              You bank the revenue.
            </span>
          </h1>

          {/* Streamlined, High-Authority Subhead */}
          <p className="text-base sm:text-lg md:text-xl text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Engineered by Ayush Meena in New Delhi. DestiX AI installs the best AI voice agents in Delhi NCR and globally—intercepting incoming leads in under 45 seconds with sub-500ms voice parity and automated CRM qualification.
          </p>

          {/* Dual Conversion Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm tracking-tight transition-all duration-300 shadow-md group"
            >
              <span>Schedule 30-Min Diagnostic Call</span>
              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>

            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#EDE8DC] border border-[#E2DDD1] text-[#181614] text-sm font-semibold transition-all duration-300 shadow-xs group"
            >
              <div className="flex items-center gap-0.5 h-4">
                <span className="w-1 bg-[#B88746] rounded-full animate-eq-1" />
                <span className="w-1 bg-[#B88746] rounded-full animate-eq-2" />
                <span className="w-1 bg-[#B88746] rounded-full animate-eq-3" />
                <span className="w-1 bg-[#B88746] rounded-full animate-eq-4" />
              </div>
              <span>Audition Voice Console</span>
            </button>
          </div>

          {/* Interactive Dual-Engine Hero Terminal / Visualizer (The Living Centerpiece) */}
          <div className="w-full max-w-3xl rounded-3xl bg-[#FFFFFF] border border-[#E2DDD1] p-5 sm:p-7 shadow-[0_15px_45px_-15px_rgba(24,22,20,0.08)] mb-12 text-left transition-all duration-300">
            {/* Engine Selector Tabs */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD1] flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveEngine("voice")}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['JetBrains_Mono'] font-semibold transition-all ${
                    activeEngine === "voice"
                      ? "bg-[#181614] text-[#F6F4EE]"
                      : "bg-[#EDE8DC] text-[#55514B] hover:text-[#181614]"
                  }`}
                >
                  <Mic className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>ENGINE 01 // AUTONOMOUS VOICE</span>
                </button>

                <button
                  onClick={() => setActiveEngine("spatial")}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['JetBrains_Mono'] font-semibold transition-all ${
                    activeEngine === "spatial"
                      ? "bg-[#181614] text-[#F6F4EE]"
                      : "bg-[#EDE8DC] text-[#55514B] hover:text-[#181614]"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>ENGINE 02 // 3D SPATIAL WEB</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-['JetBrains_Mono'] text-[#888277]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-[#181614]">LIVE CARRIER BRIDGE</span>
              </div>
            </div>

            {/* Content for Engine 01: Voice Telephony */}
            {activeEngine === "voice" ? (
              <div className="pt-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746] font-semibold">
                      TELEPHONY SIMULATION &bull; SUB-500MS LATENCY
                    </div>
                    <div className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#181614] mt-0.5">
                      Live Inbound Qualification Dialogue
                    </div>
                  </div>

                  <button
                    onClick={handleToggleAudio}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDE8DC] hover:bg-[#E2DDD1] text-[#181614] text-xs font-['JetBrains_Mono'] font-semibold transition-colors"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-[#B88746]" />
                        <span>Mute Audio</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-[#B88746] fill-[#B88746]" />
                        <span>Audition Voice Agent</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Animated Waveform Canvas */}
                <div className="h-16 w-full rounded-xl bg-[#FDFCFB] border border-[#E2DDD1] overflow-hidden flex items-center px-4">
                  <canvas ref={canvasRef} className="w-full h-full" />
                </div>

                {/* Live Rotating Transcript Box */}
                <div className="p-4 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#B88746] mt-1.5 shrink-0 animate-ping" />
                  <div className="text-xs font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <span className="font-['JetBrains_Mono'] font-bold text-[#181614] mr-2">
                      [{transcripts[transcriptIndex].speaker}]:
                    </span>
                    <span className="text-[#55514B]">
                      "{transcripts[transcriptIndex].text}"
                    </span>
                  </div>
                </div>

                {/* Telemetry Indicator Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-['JetBrains_Mono'] text-[#55514B]">
                  <span className="px-2.5 py-1 rounded-md bg-[#EDE8DC] text-[#181614] font-medium">
                    ⚡ Latency: 460ms
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#EDE8DC] text-[#181614] font-medium">
                    📞 Speed to Lead: &lt;45s
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#EDE8DC] text-[#181614] font-medium">
                    💬 WhatsApp Gate Pass: Instant
                  </span>
                </div>
              </div>
            ) : (
              /* Content for Engine 02: 3D Spatial Web */
              <div className="pt-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746] font-semibold">
                      SPATIAL WEB ARCHITECTURE &bull; NEXT.JS &amp; THREE.JS
                    </div>
                    <div className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#181614] mt-0.5">
                      Bespoke Interactive 3D Digital Storefronts
                    </div>
                  </div>

                  <a
                    href="/websites"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EDE8DC] hover:bg-[#E2DDD1] text-[#181614] text-xs font-['JetBrains_Mono'] font-semibold transition-colors"
                  >
                    <span>View 3D Works</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B88746]" />
                  </a>
                </div>

                {/* Visual Spatial Showcase Preview Card */}
                <div className="p-6 rounded-xl bg-[#181614] text-[#F6F4EE] border border-[#2A2825] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] tracking-widest uppercase font-semibold">
                      FEATURED ARCHITECTURAL DEPLOYMENT
                    </div>
                    <div className="font-['Instrument_Serif'] text-2xl font-bold mt-1">
                      Alliance Capital Properties (ACP Dubai) &bull; UAE Advisory
                    </div>
                    <p className="text-xs font-['Plus_Jakarta_Sans'] text-stone-400 mt-1 max-w-md">
                      Bespoke real estate capital allocation platform and autonomous acquisition infrastructure for Dubai waterfront developments and private wealth investors.
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-stone-200 text-xs font-['JetBrains_Mono']">
                      60 FPS WebGL
                    </span>
                    <span className="text-[11px] font-['JetBrains_Mono'] text-[#B88746]">
                      +380% Lead Retention
                    </span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-['JetBrains_Mono'] text-[#55514B]">
                  <span className="px-2.5 py-1 rounded-md bg-[#EDE8DC] text-[#181614] font-medium">
                    🎮 Three.js Shaders
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#EDE8DC] text-[#181614] font-medium">
                    ⚡ Next.js App Router
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#EDE8DC] text-[#181614] font-medium">
                    💎 Zero Template Code
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Streamlined 4-Metric Telemetry Strip */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD1] p-px rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-[#FFFFFF] p-5 sm:p-6 text-left group hover:bg-[#EDE8DC]/40 transition-colors">
              <div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-1.5">
                Speed to Lead
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#B88746] mb-1">
                &lt; 45s
              </div>
              <div className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans']">
                Outbound voice qualification
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-5 sm:p-6 text-left group hover:bg-[#EDE8DC]/40 transition-colors">
              <div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-1.5">
                Voice Latency
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#181614] mb-1">
                &lt; 500ms
              </div>
              <div className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans']">
                Natural conversational flow
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-5 sm:p-6 text-left group hover:bg-[#EDE8DC]/40 transition-colors">
              <div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-1.5">
                Inbound Capture
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#181614] mb-1">
                100%
              </div>
              <div className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans']">
                Zero missed calls 24/7
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-5 sm:p-6 text-left group hover:bg-[#EDE8DC]/40 transition-colors">
              <div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-1.5">
                Mandatory Hurdle
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#B88746] mb-1">
                5x ROI
              </div>
              <div className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans']">
                Strict scoping threshold
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
