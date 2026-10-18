"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the expected production deployment timeline?",
      a: "Our standard sprint timeline is 10 to 14 business days from kickoff. During this window, we map your objection state machine, author deterministic guardrails, integrate telephony SIP trunking with your CRM and WhatsApp Business API, and execute comprehensive synthetic stress tests before public caller routing.",
    },
    {
      q: "Will callers detect that they are conversing with an autonomous agent?",
      a: "No. Our conversational roundtrip latency is rigorously benchmarked under 500ms—faster than human pause perception. DestiX agents are synthesized with subtle breathing pauses, natural phrasing, and sub-200ms interruption handling. Callers experience the poise and composure of your most senior partner.",
    },
    {
      q: "How does DestiX integrate with our existing enterprise stack?",
      a: "We engineer bi-directional webhooks with HubSpot, Salesforce, GoHighLevel, Zoho, Practo, Google Calendar, and Cal.com via dedicated n8n pipelines. Furthermore, the agent dispatches instant WhatsApp lookbooks, site passes, and calendar confirmations while the prospect is still on the line.",
    },
    {
      q: "Do you offer white-label engineering partnerships for elite agencies?",
      a: "Yes. Select brand, creative, and performance marketing agencies retain DestiX AI as their specialized voice intelligence and 3D WebGL engineering studio. We deploy systems seamlessly under your firm's brand and master service agreement.",
    },
    {
      q: "How does the 5x Hurdle Rate guarantee work in practice?",
      a: "Prior to contract execution, we audit your average deal size, monthly inbound volume, and current qualification drop-off rate. If the modeled conversion lift does not mathematically project a 5x return on our engagement fee, we decline the mandate.",
    },
    {
      q: "Who actually designs, codes, and tunes the systems?",
      a: "You work directly with principal and systems architect Ayush Meena and our core engineering team. DestiX AI does not employ junior account reps or delegate mission-critical code to offshore subcontractors.",
    },
  ];

  return (
    <section id="inquiries" className="py-24 sm:py-32 bg-[#F6F4EE] relative border-b border-[#E2DDD1]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            (09) INSTITUTIONAL INQUIRIES &amp; FAQ
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181512] leading-[1.0] mb-4">
            Everything you need to{" "}
            <span className="italic text-[#B88746]">know.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] leading-relaxed max-w-xl mx-auto font-normal">
            Rigorous, candid answers regarding our architectural standards, deployment speeds, and commercial criteria.
          </p>
        </div>

        {/* Accordion Drawers */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2DDD1] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-['Instrument_Serif'] text-2xl text-[#181512] group-hover:text-[#B88746] transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center shrink-0 text-[#181512]">
                    {isOpen ? <Minus className="w-4 h-4 text-[#B88746]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/60 pt-4 font-normal">
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
