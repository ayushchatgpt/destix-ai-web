"use client";

import React from "react";
import { PhoneCall, Zap, ShieldX, Mic, GitBranch, Sparkles, ArrowUpRight } from "lucide-react";

export function HowWeBuild() {
  const pillars = [
    {
      num: "01",
      title: "Zero-Hold Inbound Reception",
      desc: "Inbound calls answered in under two rings in fluent, natural human cadence across English, Hindi, and regional dialects. Zero hold times, zero queue drop-offs, 24/7.",
      icon: PhoneCall,
      tag: "INBOUND < 2 RINGS",
    },
    {
      num: "02",
      title: "45-Second Lead Interception",
      desc: "Calls web and ad leads in under a minute while buyer intent is at its peak. The agent qualifies intent, scores the prospect, and books the appointment directly to your calendar.",
      icon: Zap,
      tag: "SPEED TO LEAD < 45S",
    },
    {
      num: "03",
      title: "Front-Desk Load Elimination",
      desc: "Handles tier-1 FAQs, pricing inquiries, qualification screening, and appointment reschedule requests on autopilot—freeing your senior staff to focus entirely on closing deals.",
      icon: ShieldX,
      tag: "TIER-1 AUTOMATION",
    },
    {
      num: "04",
      title: "Human Cadence & Synthesis",
      desc: "Ultra-low latency voice tuning with natural breathing pauses, subtle intonations, and polite interruption handling. Your callers experience the composure of your top sales executive.",
      icon: Mic,
      tag: "LATENCY < 500MS",
    },
    {
      num: "05",
      title: "Complete AI Operating System",
      desc: "Webhook-driven automated pipelines connecting WhatsApp Business API, enterprise CRM (HubSpot, Salesforce, GoHighLevel), and telephony into a unified operational nervous system.",
      icon: GitBranch,
      tag: "UNIFIED N8N STACK",
    },
    {
      num: "06",
      title: "Bespoke Digital Architecture",
      desc: "Custom Next.js and Three.js platforms designed to command instant authority with high-net-worth clients. Zero WordPress, zero template bloat, sub-second global performance.",
      icon: Sparkles,
      tag: "BESPOKE NEXT.JS & 3D",
    },
  ];

  return (
    <section id="how-we-build" className="py-24 sm:py-32 bg-[#F6F4EE] relative border-b border-[#E2DDD1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            (02) HOW WE BUILD
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-6">
            AI that books revenue, not a chatbot that{" "}
            <span className="italic text-[#B88746]">annoys</span> your customers.
          </h2>
          <p className="text-base sm:text-lg text-[#55514B] leading-relaxed font-normal">
            Most agencies deploy fragile point solutions that irritate high-value callers. DestiX AI engineers a complete, hardened acquisition circuit that converts traffic into booked pipeline.
          </p>
        </div>

        {/* 6-Card Hairline Border Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.num}
                className="group relative p-8 sm:p-9 rounded-2xl bg-white border border-[#E2DDD1] hover:border-[#B88746]/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center group-hover:border-[#B88746]/40 transition-colors">
                      <IconComp className="w-5 h-5 text-[#B88746]" />
                    </div>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#888277] font-semibold tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3 group-hover:text-[#B88746] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#55514B] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

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

export const OperatingPrinciples = HowWeBuild;
export default HowWeBuild;
