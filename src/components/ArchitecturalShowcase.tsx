"use client";

import React from "react";
import { ArrowUpRight, ExternalLink, Globe, Layers, Sparkles, Terminal } from "lucide-react";

export default function ArchitecturalShowcase() {
  const showcases = [
    {
      id: "digiirox",
      num: "01",
      title: "3D Spatial Interactive Launch Platform",
      client: "Digiirox Interactive",
      url: "https://digiiroxinteractiveexperience.vercel.app",
      domain: "digiiroxinteractiveexperience.vercel.app",
      category: "Spatial WebGL / Three.js Engineering",
      desc: "Category-defining interactive spatial experience engineered for an international product launch. Full Three.js 60 FPS viewport, dynamic geometry shaders, ambient spatial audio, and bespoke micro-interactions.",
      metrics: [
        { label: "Dwell Time", val: "+340%" },
        { label: "WebGL FPS", val: "60 FPS" },
        { label: "Conversion Lift", val: "4.8x" },
      ],
      tags: ["Three.js", "WebGL", "Next.js", "Spatial Motion", "GLSL Shaders"],
    },
    {
      id: "pranav-jha",
      num: "02",
      title: "High-End Editorial Brand Architecture",
      client: "Pranav Jha Studio",
      url: "https://pranav-jha-portfolio.vercel.app",
      domain: "pranav-jha-portfolio.vercel.app",
      category: "Creative Direction & Kinetic Web",
      desc: "Architectural digital identity platform designed with razor-sharp editorial typography, smooth scroll physics, and sub-second page transitions. Built to command high-ticket client authority.",
      metrics: [
        { label: "Page Speed", val: "0.8s" },
        { label: "Layout Shift", val: "0.00 CLS" },
        { label: "Inbound ACV", val: "+210%" },
      ],
      tags: ["Next.js App Router", "Framer Motion", "Tailwind CSS", "Editorial UX"],
    },
    {
      id: "birch-well",
      num: "03",
      title: "Luxury Estate & Villa Benchmark",
      client: "Meridian Living & Estates",
      url: "https://birchstays.com",
      domain: "birchstays.com / thewellcg.com styling",
      category: "Autonomous Phone AI + Spatial Real Estate",
      desc: "High-net-worth property acquisition platform fused with an autonomous DestiX phone qualification agent. Incoming buyer inquiries for ₹15Cr+ private villas are answered within 2 rings and booked into executive inspection slots.",
      metrics: [
        { label: "Deal Pipeline", val: "₹15Cr+" },
        { label: "Triage Speed", val: "< 45s" },
        { label: "Zero Hold Time", val: "100%" },
      ],
      tags: ["AI Voice Infrastructure", "WhatsApp Automation", "Cal.com Sync", "3D Architecture"],
    },
  ];

  return (
    <section id="showcase" className="py-24 sm:py-32 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111216] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            // 04 PRODUCTION CASEFILES
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            The Signature Work &amp;{" "}
            <span className="text-[#00F5A0]">Architectural Showcase.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Live production environments engineered by DestiX AI. We don&apos;t show static Figma mockups; these platforms process live traffic, command high-ticket trust, and drive verified revenue.
          </p>
        </div>

        {/* 3 Large Showcase Casefiles */}
        <div className="space-y-10 sm:space-y-12">
          {showcases.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-[#111216] border border-white/10 hover:border-[#00F5A0]/40 p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,245,160,0.1)] relative overflow-hidden"
            >
              {/* Background Glow Pool */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00F5A0]/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-[#00F5A0]/10 transition-colors" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Column: Number, Title, Overview (7 Cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#00F5A0] tracking-widest px-2.5 py-1 rounded bg-[#00F5A0]/10 border border-[#00F5A0]/30">
                      CASEFILE {item.num}
                    </span>
                    <span className="text-xs font-['JetBrains_Mono'] text-[#7A7D87]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#F4F4F6] mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#16181F] border border-white/5 text-[11px] font-['JetBrains_Mono'] text-[#A1A5B2]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External Link Action */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#16181F] hover:bg-[#00F5A0] text-[#F4F4F6] hover:text-[#08080A] border border-white/10 hover:border-[#00F5A0] text-xs font-bold tracking-tight transition-all duration-300 shadow-md group/btn"
                  >
                    <Globe className="w-4 h-4 text-[#00F5A0] group-hover/btn:text-[#08080A]" />
                    <span>Inspect Live Platform: {item.domain}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#00F5A0] group-hover/btn:text-[#08080A] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Right Column: Key Production Metrics (5 Cols) */}
                <div className="lg:col-span-5 bg-[#08080A] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#7A7D87] uppercase mb-6 flex items-center justify-between pb-3 border-b border-white/5">
                      <span>VERIFIED OUTCOMES</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#00F5A0]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#00F5A0]">
                            {m.val}
                          </div>
                          <div className="text-xs text-[#7A7D87] font-['JetBrains_Mono']">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#7A7D87] font-['JetBrains_Mono']">
                    <span>ARCHITECTURE: BESPOKE</span>
                    <span className="text-[#00F5A0]">STATUS: PRODUCTION ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
