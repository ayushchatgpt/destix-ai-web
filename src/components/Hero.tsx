"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToDemo: () => void;
}

export function Hero({ onOpenBooking, onScrollToDemo }: HeroProps) {
  const rotatingPhrases = [
    "ELIMINATE LEAD EVAPORATION",
    "QUALIFY INBOUND CALLS IN <45S",
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
      {/* Ambient Gradient Pools */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[400px] sm:h-[550px] bg-gradient-to-b from-[#B8652B]/10 via-[#EDE8DC]/40 to-transparent blur-[130px] pointer-events-none -z-10" />

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
          {/* Conversion Eyebrow with Rotating Dynamic Text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] sm:text-xs font-['JetBrains_Mono'] tracking-[0.16em] text-[#55514B] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8652B] animate-beacon" />
            <span className="font-semibold text-[#181614]">(01) THE AUTONOMOUS ACQUISITION STUDIO</span>
            <span className="text-[#888277] hidden sm:inline">— INSTALLED TO</span>
            <span className="text-[#B8652B] font-bold min-w-[210px] text-left transition-all duration-300">
              {rotatingPhrases[phraseIdx]}
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.94] tracking-tight text-[#181614] mb-8">
            Autonomous voice systems and digital architectures that{" "}
            <span className="italic text-[#B8652B]">convert.</span>
          </h1>

          {/* Trust Guarantee Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-['JetBrains_Mono'] text-[#55514B] mb-8">
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#E2DDD1] shadow-2xs font-medium">
              Guaranteed Sub-45s Lead Interception
            </span>
            <span className="text-[#888277]">•</span>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#E2DDD1] shadow-2xs font-medium">
              100% Performance SLA
            </span>
            <span className="text-[#888277]">•</span>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#E2DDD1] shadow-2xs font-medium">
              Zero Template Code
            </span>
            <span className="text-[#888277]">•</span>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#E2DDD1] shadow-2xs font-medium">
              Bespoke Engineering
            </span>
          </div>

          {/* Subparagraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#55514B] leading-relaxed max-w-2xl mb-10 font-normal">
            Most businesses lose 60% of their ad leads within five minutes of submission. DestiX AI intercepts every lead in 45 seconds with natural human voice, syncs directly to your calendar, and backs it with an award-grade digital storefront.
          </p>

          {/* Dual Conversion CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 sm:mb-20">
            {/* Primary Deep Espresso Pill */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B8652B] text-[#F6F4EE] font-semibold text-sm tracking-tight transition-all duration-300 shadow-md group"
            >
              <span>Schedule a 30-Min Diagnostic Call</span>
              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>

            {/* Secondary Pill with Equalizer */}
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white hover:bg-[#EDE8DC] border border-[#E2DDD1] text-[#181614] text-sm font-semibold transition-all duration-300 shadow-xs group"
            >
              <div className="flex items-center gap-0.5 h-4">
                <span className="w-1 bg-[#B8652B] rounded-full animate-eq-1" />
                <span className="w-1 bg-[#B8652B] rounded-full animate-eq-2" />
                <span className="w-1 bg-[#B8652B] rounded-full animate-eq-3" />
                <span className="w-1 bg-[#B8652B] rounded-full animate-eq-4" />
              </div>
              <span>Test an Agent Live (Audio Console)</span>
            </button>
          </div>

          {/* 4-Metric Proof Strip (1px Hairline Grid) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD1] p-px rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-white p-6 sm:p-7 text-left group hover:bg-[#EDE8DC]/40 transition-colors">
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-2">
                Velocity Unlock
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#181614] mb-1">
                10x
              </div>
              <div className="text-xs text-[#55514B]">
                Revenue velocity unlocked across active operations
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 text-left group hover:bg-[#EDE8DC]/40 transition-colors">
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-2">
                Lead Drop-Off
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#181614] mb-1">
                90%*
              </div>
              <div className="text-xs text-[#55514B]">
                Inbound lead drop-off eliminated at first touch
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 text-left group hover:bg-[#EDE8DC]/40 transition-colors">
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-2">
                Speed to Lead
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#B8652B] mb-1">
                &lt; 45s
              </div>
              <div className="text-xs text-[#55514B]">
                Average ad-to-voice qualification speed
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 text-left group hover:bg-[#EDE8DC]/40 transition-colors">
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#888277] uppercase mb-2">
                Live Coverage
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-['Instrument_Serif'] text-[#181614] mb-1">
                24/7
              </div>
              <div className="text-xs text-[#55514B]">
                Multilingual live voice coverage across all phone lines
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
