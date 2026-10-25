"use client";

import React from "react";
import { PhoneCall, Cpu, Layers, ArrowUpRight, Check } from "lucide-react";

export function CorePracticeAreas() {
  const practices = [
    {
      num: "01",
      title: "Autonomous Voice Infrastructure",
      subtitle: "Enterprise Telephony & Sub-500ms Human Parity",
      desc: "Human-grade conversational agents deployed across dedicated carrier lines. Answering every inbound call in 2 rings and executing outbound speed-to-lead dials in 45 seconds.",
      features: [
        "Sub-500ms roundtrip conversational latency",
        "Natural pauses, micro-breaths, and polite interruption handling",
        "Fluent native English, Hindi, and regional dialect code-switching",
        "Direct calendar reservation and live telephony SIP forwarding",
      ],
      icon: PhoneCall,
      accent: "#B88746",
    },
    {
      num: "02",
      title: "The Enterprise AI Operating System",
      subtitle: "Multi-Node n8n Workflows & Instant CRM Dispatch",
      desc: "The central nervous system uniting telephony, CRM, and customer messaging. Every spoken word is transcribed, analyzed for purchase intent, and routed instantaneously.",
      features: [
        "Custom n8n and Make.com multi-step orchestrations",
        "Bi-directional synchronization with HubSpot, Salesforce, and GHL",
        "Instant automated WhatsApp brochure, gate pass, and calendar dispatch",
        "Automated CRM lead revival campaigns for cold historical records",
      ],
      icon: Cpu,
      accent: "#D4A373",
    },
    {
      num: "03",
      title: "Category-Defining Digital Architecture",
      subtitle: "Bespoke Next.js & Three.js Spatial Storefronts",
      desc: "Architectural digital storefronts designed to command monumental authority. Built on Next.js App Router and Three.js for sub-second load speeds and 5x conversion lift.",
      features: [
        "Zero template code • 100% custom-engineered Next.js architecture",
        "Three.js WebGL spatial models, shaders, and micro-interactions",
        "Swiss editorial typography and psychological direct-response copywriting",
        "Sub-second Lighthouse scores with zero layout shift",
      ],
      icon: Layers,
      accent: "#B88746",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#131210] text-[#F6EFE2] relative border-b border-[#25221F] bg-dark-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1C19] border border-[#332E29] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            (05) CORE PRACTICE AREAS
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#F6EFE2] leading-[1.0] mb-6">
            The triad of institutional{" "}
            <span className="italic text-[#B88746]">authority.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C5BDB1] leading-relaxed font-normal">
            We do not sell fragmented widgets or hourly consultation retainer bloat. DestiX AI engineers three tightly integrated architectural domains.
          </p>
        </div>

        {/* 3 Large Practice Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {practices.map((practice) => {
            const IconComponent = practice.icon;
            return (
              <div
                key={practice.num}
                className="rounded-3xl bg-[#1A1815] border border-[#2D2824] p-8 sm:p-10 flex flex-col justify-between hover:border-[#B88746]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#23201C] border border-[#3A332E] flex items-center justify-center text-[#B88746] group-hover:border-[#B88746]/50 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#888277] font-semibold tracking-wider">
                      PRACTICE {practice.num}
                    </span>
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-3xl text-[#F6EFE2] mb-2 leading-tight">
                    {practice.title}
                  </h3>

                  <div className="text-xs font-['Plus_Jakarta_Sans'] font-semibold text-[#B88746] uppercase tracking-wider mb-4">
                    {practice.subtitle}
                  </div>

                  <p className="text-sm text-[#C5BDB1] leading-relaxed mb-8 font-normal">
                    {practice.desc}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#2D2824] mb-8">
                    {practice.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#B88746]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#B88746]" />
                        </div>
                        <span className="text-xs text-[#A89F93] leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#888277]">
                  <span>DEPLOYED GLOBALLY</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B88746] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CorePracticeAreas;
