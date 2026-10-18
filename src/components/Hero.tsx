"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Zap, PhoneCall, Cpu, Activity, Clock } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToDemo: () => void;
}

export function Hero({ onOpenBooking, onScrollToDemo }: HeroProps) {
  const rotatingPhrases = [
    "ELIMINATE LEAD DROP-OFF",
    "INTERCEPT BUYERS IN <45S",
    "CUT FRONT-DESK OVERHEAD",
    "SCALE HIGH-TICKET PIPELINE",
  ];

  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [rotatingPhrases.length]);

  return (
    <section className="relative pt-32 sm:pt-44 pb-20 sm:pb-28 bg-[#F6F4EE] bg-architectural-grid overflow-hidden border-b border-[#E2DDD1]">
      {/* Ambient Architectural Gradient Pools */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[400px] sm:h-[550px] bg-gradient-to-b from-[#B88746]/10 via-[#ECE8DC]/40 to-transparent blur-[130px] pointer-events-none -z-10" />

      {/* Decorative Hairline Architectural Curve SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50%" cy="40%" r="480" fill="none" stroke="#E2DDD1" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="50%" cy="40%" r="720" fill="none" stroke="#E2DDD1" strokeWidth="1" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* System Eyebrow with Rotating Text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE8DC] border border-[#E2DDD1] text-[11px] sm:text-xs font-['JetBrains_Mono'] tracking-[0.16em] text-[#55514B] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
            <span className="font-semibold text-[#181512]">(01) THE AUTONOMOUS ACQUISITION STUDIO</span>
            <span className="text-[#888277] hidden sm:inline">— INSTALLED TO</span>
            <span className="text-[#B88746] font-bold min-w-[190px] text-left transition-all duration-300">
              {rotatingPhrases[phraseIdx]}
            </span>
          </div>

          {/* Commanding Display Headline */}
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.94] tracking-tight text-[#181512] mb-8">
            Autonomous voice systems and digital architectures that{" "}
            <span className="italic text-[#B88746]">compound.</span>
          </h1>

          {/* Institutional SLA Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-['JetBrains_Mono'] text-[#55514B] mb-8">
            <span className="px-3 py-1 rounded-full bg-white border border-[#E2DDD1] shadow-2xs">
              Sub-45s Interception SLA
            </span>
            <span className="text-[#888277]">•</span>
            <span className="px-3 py-1 rounded-full bg-white border border-[#E2DDD1] shadow-2xs">
              100% Performance Guarantee
            </span>
            <span className="text-[#888277]">•</span>
            <span className="px-3 py-1 rounded-full bg-white border border-[#E2DDD1] shadow-2xs">
              Zero Template Code
            </span>
            <span className="text-[#888277]">•</span>
            <span className="px-3 py-1 rounded-full bg-white border border-[#E2DDD1] shadow-2xs">
              Bespoke Engineering
            </span>
          </div>

          {/* Subparagraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#55514B] leading-relaxed max-w-2xl mb-10 font-normal">
            AI executes the operations; you bank the revenue. DestiX AI designs human-sounding voice agents, automated CRM pipelines, and category-defining 3D digital storefronts for high-ticket developers, clinics, and advisory practices.
          </p>

          {/* Dual Strategic CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 sm:mb-20">
            {/* Primary Deep Espresso Pill */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181512] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm tracking-tight transition-all duration-300 shadow-md group"
            >
              <span>Commission an Architecture Session</span>
              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowUpRight className="w-3 h-3 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>

            {/* Secondary Hairline Pill with Soundwave Equalizer */}
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white hover:bg-[#ECE8DC] border border-[#E2DDD1] text-[#181512] text-sm font-semibold transition-all duration-300 shadow-sm group"
            >
              <div className="flex items-center gap-0.5 h-4">
                <span className="w-1 bg-[#B88746] rounded-full animate-eq-1" />
                <span className="w-1 bg-[#B88746] rounded-full animate-eq-2" />
                <span className="w-1 bg-[#B88746] rounded-full animate-eq-3" />
                <span className="w-1 bg-[#B88746] rounded-full animate-eq-4" />
              </div>
              <span>Test an Agent Live (Voice Console)</span>
            </button>
          </div>

          {/* 4-Stat Institutional Metric Strip (1px Hairline Grid) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD1] p-px rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-white p-6 sm:p-7 text-left group hover:bg-[#ECE8DC]/40 transition-colors">
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-2">
                Velocity Unlock
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#181512] mb-1">
                10x
              </div>
              <div className="text-xs text-[#55514B]">
                Revenue velocity unlocked across active operations
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 text-left group hover:bg-[#ECE8DC]/40 transition-colors">
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-2">
                Lead Preservation
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#181512] mb-1">
                90%*
              </div>
              <div className="text-xs text-[#55514B]">
                Inbound lead evaporation eliminated at first touch
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 text-left group hover:bg-[#ECE8DC]/40 transition-colors">
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-2">
                Interception SLA
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#B88746] mb-1">
                &lt; 45s
              </div>
              <div className="text-xs text-[#55514B]">
                Average ad-to-voice qualification speed
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 text-left group hover:bg-[#ECE8DC]/40 transition-colors">
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-2">
                Sovereign Triage
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#181512] mb-1">
                24/7
              </div>
              <div className="text-xs text-[#55514B]">
                Multilingual live voice coverage across all channels
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
