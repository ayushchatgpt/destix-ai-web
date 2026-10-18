"use client";

import React from "react";
import Image from "next/image";
import { Mail, Globe, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface LeadershipDossierProps {
  onOpenBooking: () => void;
}

export function LeadershipDossier({ onOpenBooking }: LeadershipDossierProps) {
  const credentials = [
    {
      title: "Founder-Led Practice",
      desc: "Zero delegation to junior account reps or offshore intermediaries. You interface directly with the architect responsible for your system's deployment.",
    },
    {
      title: "Direct Architect Access",
      desc: "Every prompt state machine, n8n data orchestration, and Three.js WebGL shader is authored and verified under Ayush's personal oversight.",
    },
    {
      title: "Bespoke Codebases",
      desc: "We do not sell pre-packaged SaaS licenses. We engineer custom Next.js platforms and telephony infrastructure owned 100% by your firm.",
    },
    {
      title: "The 5x Hurdle Rate",
      desc: "If the conversion economics do not clear a modelled 5x return on our discovery audit, we politely decline the engagement.",
    },
  ];

  return (
    <section id="leadership" className="py-24 sm:py-32 bg-[#F6F4EE] relative border-b border-[#E2DDD1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            (08) STUDIO LEADERSHIP
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-6">
            Principal &amp; systems{" "}
            <span className="italic text-[#B88746]">architect.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#55514B] leading-relaxed font-normal">
            DestiX AI operates with the intimacy and precision of a private advisory practice. Direct builder access with zero corporate bloat.
          </p>
        </div>

        {/* Leadership Dossier Card */}
        <div className="rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            {/* Left 5 Cols: Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-[#E2DDD1] shadow-md mb-6 group">
                <Image
                  src="/images/ayush-meena.jpg"
                  alt="Ayush Meena - Principal & Systems Architect"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between px-3 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#E2DDD1] text-[10px] font-['JetBrains_Mono']">
                  <span className="text-[#B88746] font-bold">● STUDIO PRINCIPAL</span>
                  <span className="text-[#181614]">AYUSH MEENA</span>
                </div>
              </div>

              {/* Coordinates */}
              <div className="space-y-1.5 text-xs font-['JetBrains_Mono'] text-[#888277]">
                <div className="flex items-center justify-center gap-1.5 text-[#181614]">
                  <MapPin className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>Delhi NCR &amp; Global Remote</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#888277]" />
                  <span>Practice Domain: ayush.company</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[10px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#B88746] uppercase mb-3 font-bold">
                STUDIO PRINCIPAL &amp; SYSTEMS ARCHITECT
              </div>

              <h3 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mb-3">
                Ayush Meena
              </h3>

              <blockquote className="font-['Instrument_Serif'] italic text-2xl sm:text-3xl text-[#181614] leading-snug mb-4">
                &ldquo;We don&apos;t build software experiments. We engineer cashflow pipelines.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-[#55514B] leading-relaxed mb-6 font-normal">
                DestiX AI operates as a sovereign, founder-led systems practice. You interface directly with the architect who designs, codes, and tunes your deployment. Zero junior account managers, zero template code, and an uncompromising 5x ROI threshold.
              </p>

              {/* 4 Sleek Credential Badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1]">
                  <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase tracking-wider mb-0.5">
                    01 // DIRECT ACCESS
                  </div>
                  <div className="text-xs font-semibold text-[#181614]">
                    Zero junior account hand-offs
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1]">
                  <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase tracking-wider mb-0.5">
                    02 // 5X HURDLE RATE
                  </div>
                  <div className="text-xs font-semibold text-[#181614]">
                    Mandatory ROI or we decline
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1]">
                  <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase tracking-wider mb-0.5">
                    03 // LATENCY SLA
                  </div>
                  <div className="text-xs font-semibold text-[#181614]">
                    Sub-500ms acoustic breath parity
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1]">
                  <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase tracking-wider mb-0.5">
                    04 // SPATIAL ARCHITECTURE
                  </div>
                  <div className="text-xs font-semibold text-[#181614]">
                    60 FPS Three.js WebGL canvases
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  data-cursor-text="BOOK"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-xs tracking-tight transition-all shadow-sm"
                >
                  <span>Request Private Diagnostic Call</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F6F4EE]" />
                </button>

                <a
                  href="mailto:ayushmeenadestixai@gmail.com"
                  data-cursor-text="EMAIL"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#EDE8DC] border border-[#E2DDD1] text-xs font-['JetBrains_Mono'] text-[#181614] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>ayushmeenadestixai@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ayush-meena-065a89380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="LINKEDIN"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#EDE8DC] border border-[#E2DDD1] text-xs font-['JetBrains_Mono'] text-[#181614] transition-colors group"
                >
                  <svg className="w-3.5 h-3.5 fill-[#B88746] group-hover:fill-[#181614] transition-colors" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipDossier;
