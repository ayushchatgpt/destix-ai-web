"use client";

import React from "react";

export const TechStackMarquee: React.FC = () => {
  const partners = [
    { name: "Claude 3.5 Sonnet", role: "Reasoning & Edge Cases", color: "#F59E0B" },
    { name: "OpenAI GPT-4o", role: "Realtime Speech API", color: "#10B981" },
    { name: "ElevenLabs", role: "Ultra-Low Latency Voice", color: "#6366F1" },
    { name: "Vapi Realtime", role: "Telephony Voice Orchestration", color: "#EC4899" },
    { name: "Retell AI", role: "Turn Taking Thresholds", color: "#3B82F6" },
    { name: "n8n Workflows", role: "CRM & ERP Automation", color: "#F97316" },
    { name: "Twilio Telephony", role: "Global SIP & Carrier Routing", color: "#EF4444" },
    { name: "Next.js 15", role: "High-Performance SSR Web", color: "#06B6D4" },
    { name: "Three.js & WebGL", role: "Interactive 3D Digital Architecture", color: "#8B5CF6" },
    { name: "Anthropic", role: "Deterministic Tool Calling", color: "#F59E0B" },
    { name: "Cursor AI", role: "Rapid Production Shipping", color: "#38BDF8" },
    { name: "HubSpot & Salesforce", role: "Bi-directional Lead Pipelines", color: "#FB923C" },
  ];

  return (
    <section
      aria-label="Certified AI Platforms"
      className="border-y border-white/10 bg-[#08090C] py-14 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 text-center mb-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
          // Enterprise Infrastructure Stack
        </span>
        <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-white">
          Engineered on certified frontier models and carrier SIP backbones.
        </h3>
      </div>

      <div className="flex w-max items-center">
        <div className="animate-marquee flex shrink-0 items-center gap-4 pr-4">
          {partners.map((partner, idx) => (
            <div
              key={`p1-${idx}`}
              className="glass-panel group flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 hover:border-cyan-500/40"
            >
              <div
                className="size-2.5 rounded-full transition-transform group-hover:scale-125"
                style={{ backgroundColor: partner.color, boxShadow: `0 0 10px ${partner.color}` }}
              />
              <div className="text-left">
                <span className="block font-semibold text-xs text-white group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </span>
                <span className="block text-[10px] font-mono text-slate-400">{partner.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="animate-marquee flex shrink-0 items-center gap-4 pr-4">
          {partners.map((partner, idx) => (
            <div
              key={`p2-${idx}`}
              className="glass-panel group flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 hover:border-cyan-500/40"
            >
              <div
                className="size-2.5 rounded-full transition-transform group-hover:scale-125"
                style={{ backgroundColor: partner.color, boxShadow: `0 0 10px ${partner.color}` }}
              />
              <div className="text-left">
                <span className="block font-semibold text-xs text-white group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </span>
                <span className="block text-[10px] font-mono text-slate-400">{partner.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
