"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can a DestiX voice agent be deployed into production?",
      a: "Rapid execution is foundational to DestiX AI. Most production voice agents go live in 7 to 14 business days once we understand your call flow and qualification logic. We engineer the prompt state machines, integrate your CRM/telephony webhooks, execute synthetic stress tests, and conduct live test dials with your team before public rollout.",
    },
    {
      q: "Will callers know it's an AI speaking?",
      a: "No. Our roundtrip latency is benchmarked under 380ms—faster than average human conversational pause thresholds. DestiX agents are synthesized with micro-breathing pauses, contextual colloquialisms, and sub-200ms interruption handling. Callers experience the natural cadence and poise of your top sales representative.",
    },
    {
      q: "Can you connect with our existing CRM, Calendar, and WhatsApp?",
      a: "Yes. We engineer bi-directional webhooks with HubSpot, Salesforce, GoHighLevel, Zoho, Google Sheets, and custom PostgreSQL databases. Furthermore, the agent can trigger an instant WhatsApp confirmation with brochures, PDFs, and calendar links while the caller is still on the line.",
    },
    {
      q: "How does your 3D WebGL architecture integrate with voice systems?",
      a: "We build digital storefronts that aren't static brochures. Our Three.js platforms feature interactive spatial models, real-time voice audition widgets, and direct calendar dispatching. The 3D site captures peak visual intent, while the voice agent instantly follows up on inbound form submissions in under 45 seconds.",
    },
    {
      q: "How does pricing scale with minute volume?",
      a: "Unlike typical SaaS platforms that charge flat $0.30/min regardless of volume, our effective rate drops from $0.08/min on starter sprints down to $0.045–$0.05/min for high-volume operations. You never get penalized for booking more calls.",
    },
    {
      q: "What happens if a caller asks an unpredictable or hostile objection?",
      a: "Every DestiX agent is equipped with deterministic edge-case guardrails. If a caller deviates completely off topic or insists on speaking with an executive, the agent responds with composure and executes an instant live SIP transfer to your staff or triggers an urgent SMS alert with the full call recording.",
    },
    {
      q: "Who actually builds the system?",
      a: "You work directly with founder Ayush Meena and our core engineering team. No junior account managers, no outsourced offshore layers, and no corporate bureaucracy. We write production code and ship live phone systems.",
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111216] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            // FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-4">
            Everything you might be{" "}
            <span className="text-[#00F5A0]">wondering.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl mx-auto font-normal">
            Clear, honest answers about our technology, deployment speed, and commercial agreements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#111216] border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-['Syne'] font-bold text-base sm:text-lg text-[#F4F4F6] group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#16181F] border border-white/10 flex items-center justify-center shrink-0 text-[#00F5A0]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
