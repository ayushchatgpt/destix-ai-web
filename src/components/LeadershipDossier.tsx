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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[10px] font-['JetBrains_Mono'] tracking-[0.18em] text-[#B88746] uppercase mb-4 font-bold">
                Principal &amp; Systems Architect
              </div>

              <h3 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mb-6">
                Ayush Meena
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#55514B] leading-relaxed mb-8 font-normal">
                <p>
                  &ldquo;DestiX AI operates as a high-density, founder-led practice. We do not employ junior account managers or delegate core engineering to subcontractors. When you commission a system, you collaborate directly with the architect who designs, codes, and tunes the deployment.&rdquo;
                </p>
                <p>
                  &ldquo;Our focus is narrow and uncompromising: luxury developers, private medical practices, and advisory firms where a single missed call or substandard website destroys multi-crore transactions. We engineer hardened systems that print revenue without excuse.&rdquo;
                </p>
              </div>

              {/* 4 Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {credentials.map((c, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#181614] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B88746] shrink-0" />
                      <span>{c.title}</span>
                    </div>
                    <p className="text-xs text-[#55514B] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-xs tracking-tight transition-all shadow-sm"
                >
                  <span>Request Private Diagnostic Call</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F6F4EE]" />
                </button>

                <a
                  href="mailto:ayushmeenadestixai@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#EDE8DC] border border-[#E2DDD1] text-xs font-['JetBrains_Mono'] text-[#181614] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>ayushmeenadestixai@gmail.com</span>
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
