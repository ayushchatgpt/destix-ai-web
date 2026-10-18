"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, Zap, PhoneCall, Cpu, Activity } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToDemo: () => void;
}

export default function Hero({ onOpenBooking, onScrollToDemo }: HeroProps) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-obsidian-grid">
      {/* Ambient Radial Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-b from-[#00F5A0]/10 via-[#3B82F6]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Telemetry Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111216] border border-white/10 text-[11px] sm:text-xs font-['JetBrains_Mono'] tracking-[0.2em] text-[#A1A5B2] mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-beacon" />
            <span className="text-[#00F5A0] font-semibold">[ SYSTEM: ONLINE ]</span>
            <span className="text-white/20">•</span>
            <span>ROUNDTRIP LATENCY: 380MS</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="hidden sm:inline">24/7 INBOUND & OUTBOUND OPERATIONS</span>
          </div>

          {/* Giant Display Headline */}
          <h1 className="font-['Syne'] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.03em] leading-[1.08] text-[#F4F4F6] mb-6 sm:mb-8">
            Autonomous voice agents{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#52F8BD] to-[#3B82F6]">
              &amp; category-defining
            </span>{" "}
            3D web platforms.
          </h1>

          {/* Subparagraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-10 font-normal">
            DestiX AI engineers ultra-low-latency voice agents that answer every call in native human cadence, paired with high-performance 3D digital storefronts that command instant authority.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 sm:mb-20">
            {/* Primary Emerald Button */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00F5A0] hover:bg-[#34F8B3] text-[#08080A] font-bold text-sm tracking-tight transition-all duration-300 shadow-[0_0_35px_-5px_rgba(0,245,160,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule an Architecture Session</span>
              <ArrowUpRight className="w-4 h-4 text-[#08080A] stroke-[2.5]" />
            </button>

            {/* Secondary Frosted Obsidian Button with Soundwave Bars */}
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#111216] hover:bg-[#16181F] border border-white/10 hover:border-[#00F5A0]/40 text-[#F4F4F6] text-sm font-semibold transition-all duration-300 shadow-lg group"
            >
              <div className="flex items-center gap-0.5 h-4">
                <span className="w-1 bg-[#00F5A0] rounded-full animate-eq-1" />
                <span className="w-1 bg-[#00F5A0] rounded-full animate-eq-2" />
                <span className="w-1 bg-[#00F5A0] rounded-full animate-eq-3" />
                <span className="w-1 bg-[#00F5A0] rounded-full animate-eq-4" />
              </div>
              <span>Test an Agent Live (Audio Console)</span>
            </button>
          </div>

          {/* Live Performance Strip (Bordered Grid) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 p-px rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#111216]/90 backdrop-blur-xl p-5 sm:p-6 text-left group hover:bg-[#16181F] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#7A7D87] uppercase">
                  Speed to Lead
                </span>
                <Zap className="w-4 h-4 text-[#00F5A0]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-['Syne'] text-[#F4F4F6] mb-1">
                &lt; 45s
              </div>
              <div className="text-xs text-[#7A7D87]">
                Instant outbound ad-to-call response
              </div>
            </div>

            <div className="bg-[#111216]/90 backdrop-blur-xl p-5 sm:p-6 text-left group hover:bg-[#16181F] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#7A7D87] uppercase">
                  Qualification
                </span>
                <ShieldCheck className="w-4 h-4 text-[#00F5A0]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-['Syne'] text-[#F4F4F6] mb-1">
                99.2%
              </div>
              <div className="text-xs text-[#7A7D87]">
                Precision lead triage accuracy
              </div>
            </div>

            <div className="bg-[#111216]/90 backdrop-blur-xl p-5 sm:p-6 text-left group hover:bg-[#16181F] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#7A7D87] uppercase">
                  Voice Latency
                </span>
                <Activity className="w-4 h-4 text-[#00F5A0]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-['Syne'] text-[#F4F4F6] mb-1 text-[#00F5A0]">
                380ms
              </div>
              <div className="text-xs text-[#7A7D87]">
                Ultra-low conversational latency
              </div>
            </div>

            <div className="bg-[#111216]/90 backdrop-blur-xl p-5 sm:p-6 text-left group hover:bg-[#16181F] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#7A7D87] uppercase">
                  Architecture
                </span>
                <Cpu className="w-4 h-4 text-[#00F5A0]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-['Syne'] text-[#F4F4F6] mb-1">
                0%
              </div>
              <div className="text-xs text-[#7A7D87]">
                Template code • 100% bespoke engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
