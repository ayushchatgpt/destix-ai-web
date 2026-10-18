"use client";

import React from "react";
import { Zap, Mic, GitBranch, Globe2, ShieldX, Sparkles, ArrowUpRight } from "lucide-react";

export function OperatingPrinciples() {
  const principles = [
    {
      num: "01",
      title: "The Speed Imperative",
      desc: "A lead not contacted in 60 seconds experiences an 80% drop in qualification rate. Our autonomous systems initiate outbound phone contact in 45 seconds of form submission—intercepting buyer intent while it is white-hot.",
      icon: Zap,
      tag: "SPEED TO LEAD < 45S",
    },
    {
      num: "02",
      title: "The Parity Threshold",
      desc: "If an interaction feels robotic, brand prestige collapses instantly. DestiX agents pause, breathe, and converse in natural human cadence with sub-500ms latency. Your callers experience the composure of a senior private client partner.",
      icon: Mic,
      tag: "LATENCY < 500MS",
    },
    {
      num: "03",
      title: "The Integrated Surface",
      desc: "Voice telephony and digital architecture must share one brain. Inbound web inquiries, private villa site visits, automated WhatsApp brochures, and executive calendar confirmations synchronize simultaneously through unified n8n pipelines.",
      icon: GitBranch,
      tag: "UNIFIED DATA PIPELINE",
    },
    {
      num: "04",
      title: "Multilingual Fluency",
      desc: "High-net-worth buyers code-switch fluidly between English, Hindi, and regional colloquialisms. DestiX agents track tone and linguistic nuance natively—eliminating friction across affluent demographics in Delhi NCR, Mumbai, and worldwide.",
      icon: Globe2,
      tag: "NATIVE CODE-SWITCHING",
    },
    {
      num: "05",
      title: "Operational Elimination",
      desc: "Front-desk bottlenecks, missed after-hours triage, repetitive Tier-1 phone inquiries, and manual CRM data entry are permanently eliminated. Your human team focuses solely on closing pre-qualified appointments.",
      icon: ShieldX,
      tag: "ZERO FRONT-DESK BOTTLENECK",
    },
    {
      num: "06",
      title: "Bespoke Craftsmanship",
      desc: "We do not use WordPress, generic themes, or amateur drag-and-drop builders. Every digital storefront is custom-engineered on Next.js and Three.js for sub-second global speed, commanding immediate market authority.",
      icon: Sparkles,
      tag: "BESPOKE NEXT.JS & THREE.JS",
    },
  ];

  return (
    <section id="practice-areas" className="py-24 sm:py-32 bg-[#F6F4EE] relative border-b border-[#E2DDD1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            (02) OPERATING PRINCIPLES
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181512] leading-[1.0] mb-6">
            Systems engineered for revenue velocity,{" "}
            <span className="italic text-[#B88746]">not conversational toys.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#55514B] leading-relaxed font-normal">
            Most agencies deploy disconnected widgets that irritate buyers. DestiX AI institutes a unified operating standard governed by six uncompromising structural axioms.
          </p>
        </div>

        {/* 6-Card Hairline Border Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.num}
                className="group relative p-8 sm:p-9 rounded-2xl bg-white border border-[#E2DDD1] hover:border-[#B88746]/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Number Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center group-hover:border-[#B88746]/40 transition-colors">
                      <IconComp className="w-5 h-5 text-[#B88746]" />
                    </div>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#888277] font-semibold tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181512] mb-3 group-hover:text-[#B88746] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#55514B] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center justify-between">
                  <span className="text-[10px] font-['JetBrains_Mono'] tracking-[0.16em] text-[#888277] uppercase font-semibold">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#888277] group-hover:text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OperatingPrinciples;
