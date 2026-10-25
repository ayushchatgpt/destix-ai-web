"use client";

import React from "react";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";

export function SelectedWorks() {
  const projects = [
    {
      num: "01",
      title: "Alliance Capital Properties (ACP Dubai) — UAE Luxury Real Estate Advisory",
      location: "Dubai, UAE • Serving Private Investors, HNW Families & Institutions",
      category: "Bespoke Capital Advisory Architecture & Inbound Voice Acquisition",
      desc: "Architectural digital presence and high-intent acquisition infrastructure engineered for Alliance Capital Properties (ACP Dubai). Built for strategic capital allocation across prime UAE developments (Palm Jebel Ali, Dubai Hills, and beachfront penthouses). Integrates multilingual investor qualification, automated WhatsApp portfolio briefings, and a sub-45s telephony bridge connecting global private wealth offices directly to senior advisors.",
      stats: [
        { label: "Qualified Deal Pipeline", val: "AED 85M+" },
        { label: "Consultation Show-Rate", val: "3.2x" },
        { label: "International SLA", val: "< 40s" },
      ],
      tags: ["Dubai Real Estate", "Private Wealth Advisory", "Multilingual Inbound", "Bespoke Digital Storefront"],
      url: "https://acpdubai.com/",
      domain: "acpdubai.com",
    },
    {
      num: "02",
      title: "Luxury Editorial Brand Platform — Pranav Jha Studio",
      location: "Delhi NCR & Remote Global",
      category: "Swiss Editorial Typography & High-Trust Credibility Architecture",
      desc: "Category-defining digital portfolio built with tight typography grids, smooth scroll physics, and sub-second page transitions. Engineered to command high-ticket client authority and eliminate proposal price resistance.",
      stats: [
        { label: "Lighthouse Performance", val: "99/100" },
        { label: "Cumulative Layout Shift", val: "0.00" },
        { label: "Inbound Contract Size", val: "+240%" },
      ],
      tags: ["Swiss Typography", "Kinetic Motion", "Tailwind CSS", "Editorial Layout"],
      url: "https://pranav-jha-portfolio.vercel.app",
      domain: "pranav-jha-portfolio.vercel.app",
    },
    {
      num: "03",
      title: "Spatial 3D Interactive Launch Platform — Digiirox Experience",
      location: "International Technology Studio",
      category: "Three.js WebGL Spatial Product Launch & Shaders",
      desc: "Immersive spatial WebGL interactive experience built for an international product unveiling. Featuring full 60 FPS Three.js viewport rendering, custom GLSL noise shaders, ambient spatial audio, and fluid micro-interactions.",
      stats: [
        { label: "Dwell Time Lift", val: "+340%" },
        { label: "Viewport Performance", val: "60 FPS" },
        { label: "Interactive Dwell Time", val: "4.2 mins" },
      ],
      tags: ["Three.js WebGL", "GLSL Shaders", "Spatial Motion", "Interactive 3D"],
      url: "https://digiiroxinteractiveexperience.vercel.app",
      domain: "digiiroxinteractiveexperience.vercel.app",
    },
    {
      num: "04",
      title: "BirchStays & The Boundary — Sovereign Hospitality & Private Villa Landmarks",
      location: "Goa, Alibaug & London Global Desk",
      category: "High-Ticket Digital Hospitality & 24/7 Multilingual Voice Concierge",
      desc: "Sovereign digital platform fusing cinematic architectural aesthetics (benchmarked against The Boundary & The Well CG) with an autonomous multilingual voice concierge. International guests and private retreat organizers are qualified for dates, party size, and bespoke amenities 24/7 across time zones.",
      stats: [
        { label: "After-Hours Booking", val: "+48%" },
        { label: "Inquiry Response SLA", val: "< 30s" },
        { label: "Zero Front-Desk Drop", val: "100%" },
      ],
      tags: ["Luxury Hospitality", "Multilingual Voice", "Make.com Engine", "High-Ticket UI"],
      url: "https://birchstays.com",
      domain: "birchstays.com • Private Estate Collection",
    },
  ];

  return (
    <section id="works" className="py-24 sm:py-32 bg-[#F6F4EE] relative border-b border-[#E2DDD1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            (03) SELECTED WORK &amp; LIVE PROOF
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-6">
            Architectural benchmarks built with{" "}
            <span className="italic text-[#B88746]">editorial dignity.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#55514B] leading-relaxed font-normal">
            We do not exhibit conceptual drafts or superficial agency mockups. These environments are live in production, processing actual traffic, commanding high-ticket authority, and driving verified revenue.
          </p>
        </div>

        {/* 4 Selected Work Cards */}
        <div className="space-y-10 sm:space-y-12">
          {projects.map((project) => (
            <div
              key={project.num}
              data-cursor-text="EXPLORE"
              className="rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-12 hover:border-[#B88746]/60 transition-all duration-300 shadow-sm hover:shadow-[0_20px_50px_-20px_rgba(24,22,20,0.08)] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: Details */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#B88746] tracking-widest px-2.5 py-1 rounded bg-[#EDE8DC] border border-[#E2DDD1]">
                      PROJECT {project.num}
                    </span>
                    <span className="text-xs font-['JetBrains_Mono'] text-[#888277]">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-3 leading-tight">
                    {project.title}
                  </h3>

                  <div className="text-xs font-['Plus_Jakarta_Sans'] font-semibold text-[#888277] uppercase tracking-wider mb-4">
                    {project.category}
                  </div>

                  <p className="text-sm sm:text-base text-[#55514B] leading-relaxed mb-6 font-normal">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] text-[#55514B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Outbound Link */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text="VISIT"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-semibold tracking-tight transition-all duration-300 shadow-xs group"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#B88746] group-hover:text-[#F6F4EE]" />
                    <span>Inspect Platform: {project.domain}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Right 5 Columns: Metrics Strip */}
                <div className="lg:col-span-5 bg-[#F6F4EE] rounded-2xl border border-[#E2DDD1] p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#888277] uppercase mb-6 flex items-center justify-between pb-3 border-b border-[#E2DDD1]">
                      <span>VERIFIED METRIC RECORD</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {project.stats.map((s, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="font-['Instrument_Serif'] text-3xl font-bold text-[#181614]">
                            {s.val}
                          </div>
                          <div className="text-[11px] text-[#888277] font-['JetBrains_Mono'] leading-tight">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E2DDD1] flex items-center justify-between text-xs text-[#888277] font-['JetBrains_Mono']">
                    <span>STATUS: ACTIVE ARCHITECTURE</span>
                    <span className="text-[#B88746] font-semibold">100% BESPOKE</span>
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

export default SelectedWorks;
