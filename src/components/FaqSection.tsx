"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can an agent be deployed into production?",
      a: "Rapid execution is fundamental to DestiX AI. Most production voice agents go live in 7 to 14 business days once we understand your call flow and objections. We build the prompts, integrate your CRM/telephony webhooks, run synthetic stress tests, and conduct live test calls with you before going live.",
    },
    {
      q: "Will our callers know it's an AI?",
      a: "No. Our voice synthesis latency is sub-350ms—faster than human conversational pause thresholds. DestiX agents are tuned with natural breathing pauses, colloquial intonations, and polite interruption handling. Callers experience the exact cadence and empathy of your top sales representative.",
    },
    {
      q: "Can you connect with our existing CRM and WhatsApp?",
      a: "Yes. We engineer bi-directional webhooks with HubSpot, Salesforce, GoHighLevel, Zoho, Google Sheets, and custom Postgres databases. Furthermore, the agent can trigger an instant WhatsApp confirmation with brochures, PDFs, and calendar links while the caller is still on the line.",
    },
    {
      q: "Do you offer white-label development for creative agencies?",
      a: "Yes. Several top-tier marketing and web agencies partner with DestiX AI as their dedicated AI development arm. We handle telephony orchestration, prompt engineering, and n8n backend pipelines under your agency's brand and invoice structure.",
    },
    {
      q: "How does pricing scale with minute volume?",
      a: "Unlike typical SaaS platforms that charge flat $0.30/min regardless of volume, our effective rate drops from $0.08/min on starter sprints down to $0.045–$0.05/min for scale operations. You never get punished for booking more calls.",
    },
    {
      q: "What happens if a caller asks an unexpected or hostile question?",
      a: "Every DestiX agent is equipped with deterministic edge-case guardrails. If a caller deviates completely off topic or requests a human manager, the agent responds gracefully and executes an instant live SIP transfer to your staff or triggers an urgent SMS alert with the full call recording.",
    },
    {
      q: "Are you an agency or a product company?",
      a: "We are founder-led, bootstrapped, and engineering-driven. You work directly with Ayush Meena and principal AI engineers who write production code and tune models daily—not outsourced junior account managers or sales reps with slideware.",
    },
  ];

  return (
    <section id="faq" className="relative bg-[#08090C] px-6 py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
            // Frequently Asked Questions
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Everything you might be{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              wondering.
            </span>
          </h2>
          <p className="mt-4 text-sm text-slate-400 font-light">
            Clear, honest answers about our technology, deployment speed, and commercial agreements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0E1017] shadow-espresso overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="transition-colors hover:bg-white/[0.02]">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-base md:text-lg text-white pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-cyan-500 text-black rotate-180"
                        : "bg-white/10 text-white hover:bg-cyan-500/20 hover:text-cyan-400"
                    }`}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-slate-400 font-light">
                    <div className="pt-2 border-t border-white/5">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
