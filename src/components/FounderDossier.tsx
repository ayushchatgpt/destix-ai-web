"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Mail, Globe, MapPin, Terminal, CheckCircle2, ArrowUpRight } from "lucide-react";

interface FounderDossierProps {
  onOpenBooking: () => void;
}

export default function FounderDossier({ onOpenBooking }: FounderDossierProps) {
  const commitments = [
    {
      title: "Direct Engineering Access",
      desc: "You collaborate directly with the architect who designs the prompts, n8n pipelines, and 3D WebGL shaders. No junior account managers or offshore communication layers.",
    },
    {
      title: "5x Minimum ROI Mandate",
      desc: "If the conversion math, unit economics, and pipeline volume do not clear a minimum 5x return on our architecture call, I will personally decline the engagement.",
    },
    {
      title: "Zero Slideware Policy",
      desc: "We don't deliver 40-page theoretical slide decks. DestiX AI ships live phone numbers, active conversational agents, and production code repositories.",
    },
    {
      title: "100% Independent & Client-Aligned",
      desc: "Bootstrapped and founder-led. Zero venture capital pressure to cut corners, rush sloppy code, or lock clients into predatory proprietary silos.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111216] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            // 07 SYSTEMS ARCHITECT
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            The Founder Dossier.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Fusing autonomous AI voice telephony with category-defining spatial 3D web platforms. Bootstrapped, hands-on, and focused on revenue velocity.
          </p>
        </div>

        {/* Founder Card Grid */}
        <div className="rounded-3xl bg-[#111216] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            {/* Left Column: Portrait & Badge (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(0,245,160,0.15)] mb-6 group">
                <Image
                  src="/images/ayush-meena-dark.jpg"
                  alt="Ayush Meena - Founder & Principal Architect of DestiX AI (Desti) — Autonomous AI Voice Agency"
                  fill
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between px-3 py-2 rounded-xl bg-[#08080A]/90 backdrop-blur-md border border-white/10 text-[10px] font-['JetBrains_Mono']">
                  <span className="text-[#00F5A0] font-bold">● ACTIVE ON TERMINAL</span>
                  <span className="text-[#7A7D87]">AYUSH MEENA</span>
                </div>
              </div>

              {/* Coordinates */}
              <div className="flex flex-col gap-1.5 text-xs font-['JetBrains_Mono'] text-[#7A7D87]">
                <div className="flex items-center justify-center gap-2 text-[#F4F4F6]">
                  <MapPin className="w-3.5 h-3.5 text-[#00F5A0]" />
                  <span>Delhi NCR &amp; Remote Worldwide</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Production Domain: ayush.company</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Guarantees (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181F] border border-white/10 text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#00F5A0] uppercase mb-4">
                Founder &amp; Systems Architect
              </div>

              <h3 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-[#F4F4F6] mb-6">
                Ayush Meena
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
                <p>
                  &ldquo;Most agencies sell bloated retainers, hand work off to juniors, and hide behind robotic chatbots that alienate high-ticket prospects. I founded DestiX AI to engineer the exact opposite: category-defining 3D spatial web architectures fused with ultra-low-latency voice agents that convert traffic into revenue 24/7.&rdquo;
                </p>
                <p>
                  &ldquo;Every prompt instruction, n8n data orchestration, and Three.js shader is architected with obsessive precision. When you commission a DestiX sprint, you get hardened infrastructure built to compound your enterprise valuation.&rdquo;
                </p>
              </div>

              {/* 4 Guarantees Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {commitments.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#08080A] border border-white/5"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-[#F4F4F6] mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#7A7D87] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Inquiries & Action */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00F5A0] hover:bg-[#34F8B3] text-[#08080A] font-bold text-xs tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(0,245,160,0.3)]"
                >
                  <span>Book Private Session with Ayush</span>
                  <ArrowUpRight className="w-4 h-4 text-[#08080A]" />
                </button>

                <a
                  href="mailto:ayushmeenadestixai@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16181F] hover:bg-[#1E222D] border border-white/10 text-xs font-['JetBrains_Mono'] text-[#F4F4F6] hover:text-[#00F5A0] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00F5A0]" />
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
