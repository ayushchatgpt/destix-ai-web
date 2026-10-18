"use client";

import React from "react";
import {
  Mic,
  Zap,
  PhoneCall,
  GitBranch,
  Layers,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function EngineeringPillars() {
  const pillars = [
    {
      num: "01",
      title: "Sub-Second Voice Synthesis",
      desc: "Human pauses, natural breaths, and contextual code-switching with sub-380ms roundtrip latency. Your callers never experience the robotic freeze or stutter typical of basic chatbots.",
      icon: Mic,
      tag: "LATENCY < 380MS",
      accent: "#00F5A0",
    },
    {
      num: "02",
      title: "Instant Lead Interception",
      desc: "Our automated outbound dialer contacts high-intent inbound form submissions within 45 seconds. Captures intent while the lead is active on your page, driving 4x higher qualification rates.",
      icon: Zap,
      tag: "SPEED TO LEAD < 45S",
      accent: "#3B82F6",
    },
    {
      num: "03",
      title: "Zero Hold Time Inbound",
      desc: "Handles unlimited concurrent incoming calls across English, Hindi, and regional dialects with zero queue drop. Scales instantly during peak ad spend spikes without adding headcount.",
      icon: PhoneCall,
      tag: "UNLIMITED CONCURRENCY",
      accent: "#10B981",
    },
    {
      num: "04",
      title: "Autonomous WhatsApp & CRM OS",
      desc: "Bi-directional webhooks trigger instant WhatsApp confirmation brochures, log conversation transcripts into HubSpot/Salesforce, and sync booked slots directly to executive calendars.",
      icon: GitBranch,
      tag: "N8N / MAKE ARCHITECTURE",
      accent: "#00F5A0",
    },
    {
      num: "05",
      title: "Bespoke 3D WebGL Architectures",
      desc: "Immersive digital storefronts engineered with Next.js, Three.js, and GSAP. Replacing template agency layouts with spatial luxury experiences that command instant trust and 5x conversion rates.",
      icon: Layers,
      tag: "THREE.JS / WEBGL",
      accent: "#3B82F6",
    },
    {
      num: "06",
      title: "Enterprise Security & Telemetry",
      desc: "Dedicated private carrier telephony, encrypted end-to-end call recordings, custom prompt security guardrails against prompt injection, and live operational analytics dashboards.",
      icon: ShieldCheck,
      tag: "ENCRYPTED / SOC-2 READY",
      accent: "#10B981",
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#08080A] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111216] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            // 02 CAPABILITIES
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Engineered for revenue velocity.{" "}
            <span className="text-[#7A7D87]">Not conversational gimmicks.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Every pipeline we ship is hardened against edge cases, hallucinations, and drop-offs. We replace fragile point solutions with an integrated intelligence infrastructure.
          </p>
        </div>

        {/* 6-Card Engineering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="group relative p-8 rounded-2xl bg-[#111216] border border-white/10 hover:border-[#00F5A0]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(0,245,160,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Number Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#16181F] border border-white/10 flex items-center justify-center group-hover:border-[#00F5A0]/50 transition-colors">
                      <IconComponent className="w-5 h-5 text-[#00F5A0]" />
                    </div>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#7A7D87] font-semibold tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Syne'] font-bold text-xl sm:text-2xl text-[#F4F4F6] mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#00F5A0] uppercase font-semibold">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#7A7D87] group-hover:text-[#00F5A0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
