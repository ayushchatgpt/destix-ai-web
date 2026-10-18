"use client";

import React from "react";
import Image from "next/image";
import {
  PhoneCall,
  CalendarCheck2,
  TrendingDown,
  AudioLines,
  Workflow,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface HowWeHelpProps {
  onOpenBooking: () => void;
}

export const HowWeHelp: React.FC<HowWeHelpProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      num: "01",
      title: "Inbound Autonomous Reception",
      desc: "Every inbound inquiry answered in < 2 rings. Natural conversational flow, bilingual fluency, and zero customer hold times, 24/7.",
      icon: PhoneCall,
      tag: "Zero Hold Times",
      metric: "< 2 Rings",
    },
    {
      num: "02",
      title: "Speed-to-Lead Outbound Qualifier",
      desc: "Outbound agents call ad leads within 45 seconds of form submission. Automatically score intent and reserve slots directly in your executive calendar.",
      icon: CalendarCheck2,
      tag: "Speed-to-Lead",
      metric: "45s Dial",
    },
    {
      num: "03",
      title: "Operational Overhead Elimination",
      desc: "Eradicate repetitive tier-1 phone inquiries, front-desk queues, and manual CRM lead updating. Free your human sales closers for high-value negotiations.",
      icon: TrendingDown,
      tag: "Efficiency",
      metric: "90% Cut",
    },
    {
      num: "04",
      title: "Sub-350ms Speech Synthesis",
      desc: "Ultra-low latency conversational turn-taking. Natural human pauses, breathing cadence, and graceful interruption handling that callers mistake for a human rep.",
      icon: AudioLines,
      tag: "Voice Engine",
      metric: "< 350ms",
    },
    {
      num: "05",
      title: "Unified AI Operating System",
      desc: "Custom n8n and Python pipelines orchestrating telephony, WhatsApp, and CRM (HubSpot, Salesforce, GoHighLevel) into one self-healing operational brain.",
      icon: Workflow,
      tag: "Orchestration",
      metric: "100% Synced",
    },
    {
      num: "06",
      title: "Category-Defining 3D WebGL",
      desc: "High-ticket digital storefronts built on Next.js and Three.js with 100/100 Lighthouse performance that command 5x higher trust and engagement.",
      icon: Sparkles,
      tag: "Architecture",
      metric: "5x Trust",
    },
  ];

  return (
    <section id="how-we-help" className="relative bg-[#08090C] px-6 py-24 md:px-10 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header & Visual */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              // Core Architecture Systems
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              AI that books revenue, not a chatbot that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                annoys your callers.
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300 font-light">
              Most automation tools feel robotic, break on natural turn-taking, and frustrate prospects.
              DestiX AI builds bespoke acoustic intelligence that acts like your top senior account executive:
              empathetic, razor-sharp, and laser-focused on qualifying the deal.
            </p>
          </div>

          {/* Futuristic Acoustic Visual */}
          <div className="group relative hidden aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#0E1017] shadow-espresso lg:block">
            <Image
              src="/images/acoustic-visual.jpg"
              alt="DestiX AI Autonomous Voice Agent Telephony and Audio Waveform Laboratory"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white">
              <span className="font-mono text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/30 text-cyan-300">
                Acoustic Laboratory • DestiX AI
              </span>
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Node
              </span>
            </div>
          </div>
        </div>

        {/* 6-Card Cyber Border Grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-400 font-semibold">
                      {pillar.num}
                    </span>
                    <span className="rounded-full bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase text-cyan-300">
                      {pillar.metric}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase text-slate-400">
                  <span>{pillar.tag}</span>
                  <ArrowUpRight className="size-3.5 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
