"use client";

import React from "react";
import { Languages, Cable, BrainCircuit, ArrowUpRight, Check } from "lucide-react";

export const BuiltToCompound: React.FC = () => {
  const cards = [
    {
      num: "01",
      title: "Real-Time Code-Switching",
      subtitle: "Fluid Hinglish, English, and regional dialect fluency.",
      desc: "Callers in Delhi NCR or Mumbai frequently shift mid-sentence between Hindi and English. DestiX agents parse colloquial vernacular, regional idioms, and tone without breaking conversational cadence.",
      icon: Languages,
      bullets: [
        "Real-time dialect recognition in < 80ms",
        "Zero robotic translation stutter or unnatural pause",
        "Accent-calibrated voice synthesis models for high-ticket HNIs",
      ],
    },
    {
      num: "02",
      title: "Carrier & CRM Telephony Mesh",
      subtitle: "Native webhooks into CRMs, WhatsApp, and telephony backbones.",
      desc: "DestiX hooks directly into your existing infrastructure: Twilio, Retell, Vapi, HubSpot, Salesforce, GoHighLevel, and WhatsApp Business API. No manual exporting or CSV spreadsheet babysitting.",
      icon: Cable,
      bullets: [
        "Instant calendar booking via Google Calendar & Cal.com",
        "WhatsApp brochure and confirmation dispatched mid-call",
        "Sentiment scoring & full transcript pushed into CRM lead records",
      ],
    },
    {
      num: "03",
      title: "Self-Refining Intelligence Loops",
      subtitle: "Reinforcement learning that tunes conversion rates weekly.",
      desc: "Every conversation generates proprietary training signal. Our systems log caller objections, analyze drop-off timestamps, and run synthetic stress-tests to optimize script rebuttals continuously.",
      icon: BrainCircuit,
      bullets: [
        "Automated objection mapping & win-rate attribution",
        "Weekly prompt calibration supervised by senior AI engineers",
        "Multi-armed bandit testing for high-ticket pricing offers",
      ],
    },
  ];

  return (
    <section className="relative bg-[#08090C] px-6 py-24 md:px-10 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
            // Self-Compounding Architecture
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Systems that get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              sharper every single day.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light leading-relaxed">
            One-off automations decay. DestiX AI builds self-refining digital infrastructure
            that adapts to your customer objections, integrates with your tech stack, and scales call capacity infinitely.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-semibold">{card.num}</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-cyan-400">
                    {card.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400 font-light">
                    {card.desc}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    {card.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="size-3.5 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Architecture Spec</span>
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
