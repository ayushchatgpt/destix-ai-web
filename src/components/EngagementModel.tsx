"use client";

import React, { useState } from "react";
import { Check, ArrowUpRight, ShieldCheck, Calculator } from "lucide-react";

interface EngagementModelProps {
  onOpenBooking: () => void;
}

export function EngagementModel({ onOpenBooking }: EngagementModelProps) {
  const [minutes, setMinutes] = useState(15000);

  // Industry standard human call center rate: $1.20/min
  const traditionalCost = Math.round(minutes * 1.2);

  // Typical fragmented SaaS markup: $0.30/min
  const saasCost = Math.round(minutes * 0.3);

  // DestiX AI Effective Volume Rate ($0.08 down to $0.045/min)
  const destixRate =
    minutes > 50000 ? 0.045 : minutes > 20000 ? 0.052 : minutes > 5000 ? 0.065 : 0.08;
  const destixCost = Math.round(minutes * destixRate + 450);

  const monthlySavings = Math.max(0, traditionalCost - destixCost);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round(((traditionalCost - destixCost) / traditionalCost) * 100);

  const tiers = [
    {
      id: "tier-1",
      name: "Tier 01: The Pilot Sprint",
      timeline: "14-Day Delivery",
      badge: "ENTRY SPRINT",
      desc: "Single dedicated production voice agent engineered for inbound triage or rapid ad-lead follow-up.",
      price: "$500",
      period: "per month / or ₹42,000 flat",
      isPopular: false,
      features: [
        "1 dedicated production voice agent (inbound or outbound)",
        "3,000+ call minutes included monthly ($0.07/min overage)",
        "Direct Google Calendar & Cal.com real-time sync",
        "Dedicated carrier telephone number & SIP trunking",
        "Sub-500ms conversational latency tuning",
        "14-day production delivery with synthetic call auditing",
      ],
      ctaText: "Commission Pilot Sprint",
    },
    {
      id: "tier-2",
      name: "Tier 02: Full System Deployment",
      timeline: "Comprehensive Telephony",
      badge: "MOST RETAINED",
      desc: "Multi-agent telephony suite with automated WhatsApp and bi-directional CRM infrastructure.",
      price: "$1,250",
      period: "per month + setup",
      isPopular: true,
      features: [
        "Multi-agent suite across inbound & outbound campaigns",
        "Volume minutes billed at institutional $0.05/min rate",
        "Full n8n / Make automated pipeline (HubSpot, Salesforce, GHL)",
        "Instant automated WhatsApp brochure & site visit dispatch",
        "Fluent English, Hindi, and regional dialect tuning",
        "Weekly prompt reinforcement loops & conversion audits",
      ],
      ctaText: "Retain Full Deployment",
    },
    {
      id: "tier-3",
      name: "Tier 03: Complete Architecture Partnership",
      timeline: "Sovereign Enterprise",
      badge: "BESPOKE PARTNERSHIP",
      desc: "Custom 3D WebGL digital storefront + complete voice infrastructure + dedicated sprint lead.",
      price: "$2,800",
      period: "one-time + scaled ops",
      isPopular: false,
      features: [
        "Bespoke 3D WebGL / Three.js digital storefront platform",
        "Unlimited concurrent phone channels with zero rate limiting",
        "White-label agency infrastructure & sub-account provisioning",
        "Swiss editorial typography & psychological direct-response copy",
        "Full GitHub repository handover & lifetime code ownership",
        "Direct private advisory channel with principal Ayush Meena",
      ],
      ctaText: "Commission Partnership",
    },
  ];

  return (
    <section id="hurdle-rate" className="py-24 sm:py-32 bg-[#F6F4EE] relative border-b border-[#E2DDD1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            (07) THE ENGAGEMENT MODEL &amp; VOLUME MODELER
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181512] leading-[1.0] mb-6">
            The 5x Hurdle Rate &amp;{" "}
            <span className="italic text-[#B88746]">commercial tiers.</span>
          </h2>

          {/* The 5x Hurdle Rate Quote Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs mb-8">
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746] font-bold mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>THE 5X HURDLE RATE MANDATE</span>
            </div>
            <p className="font-['Instrument_Serif'] italic text-xl sm:text-2xl text-[#181512] leading-snug">
              &ldquo;Every engagement ships with an explicit financial ROI model before build kickoff. If our systems do not clear a modeled 5x return on your investment, we decline the project.&rdquo;
            </p>
          </div>
        </div>

        {/* 3 Structured Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular
                  ? "bg-white border-2 border-[#B88746] shadow-xl lg:-translate-y-2"
                  : "bg-white border border-[#E2DDD1] hover:border-[#B88746]/50 shadow-sm"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B88746] text-[#F6F4EE] text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-widest shadow-xs">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.isPopular && (
                  <div className="text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#888277] uppercase mb-2">
                    {tier.badge}
                  </div>
                )}

                <h3 className="font-['Instrument_Serif'] text-3xl text-[#181512] mb-1">
                  {tier.name}
                </h3>
                <div className="text-xs font-['JetBrains_Mono'] text-[#B88746] mb-3">
                  {tier.timeline}
                </div>

                <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed mb-6 font-normal">
                  {tier.desc}
                </p>

                {/* Price */}
                <div className="pb-6 mb-6 border-b border-[#E2DDD1]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-['Instrument_Serif'] text-5xl font-bold text-[#181512]">
                      {tier.price}
                    </span>
                    <span className="text-xs text-[#888277] font-['JetBrains_Mono']">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Feature Inclusions */}
                <div className="space-y-3.5 mb-8">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#ECE8DC] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#B88746]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenBooking}
                className={`w-full py-4 rounded-full font-semibold text-xs tracking-tight flex items-center justify-center gap-2 transition-all duration-300 ${
                  tier.isPopular
                    ? "bg-[#181512] hover:bg-[#B88746] text-[#F6F4EE] shadow-md"
                    : "bg-[#ECE8DC] hover:bg-[#181512] text-[#181512] hover:text-[#F6F4EE]"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Volume ROI Modeler */}
        <div className="rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
                INTERACTIVE VOLUME ROI MODELER
              </span>
              <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181512]">
                Model your monthly operational savings.
              </h3>
            </div>

            <div className="inline-flex items-baseline gap-2 bg-[#F6F4EE] px-5 py-2.5 rounded-2xl border border-[#E2DDD1]">
              <span className="font-['Instrument_Serif'] text-3xl sm:text-4xl font-bold text-[#181512]">
                {minutes.toLocaleString()}
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#888277]">
                MINS / MO
              </span>
            </div>
          </div>

          {/* Range Slider */}
          <input
            type="range"
            min={1000}
            max={100000}
            step={1000}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full h-3 bg-[#ECE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746] mb-4"
          />

          <div className="flex justify-between text-[11px] font-['JetBrains_Mono'] text-[#888277] mb-10">
            <span>1,000 mins</span>
            <span>25,000 mins</span>
            <span>50,000 mins</span>
            <span>75,000 mins</span>
            <span>100,000 mins</span>
          </div>

          {/* Comparison Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider block mb-2">
                Traditional Call Center Reps ($1.20/min)
              </span>
              <div className="font-['Instrument_Serif'] text-4xl text-rose-700 font-bold mb-1">
                ${traditionalCost.toLocaleString()}
                <span className="text-xs font-normal text-[#888277]"> /mo</span>
              </div>
              <p className="text-xs text-[#55514B]">
                Includes base salary, recruiting, training, and supervisor overhead.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider block mb-2">
                Generic SaaS Markup ($0.30/min)
              </span>
              <div className="font-['Instrument_Serif'] text-4xl text-amber-700 font-bold mb-1">
                ${saasCost.toLocaleString()}
                <span className="text-xs font-normal text-[#888277]"> /mo</span>
              </div>
              <p className="text-xs text-[#55514B]">
                Typical reseller markup without custom CRM pipelines or latency tuning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-[#B88746] shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider font-bold">
                  DestiX AI Practice
                </span>
                <span className="px-2 py-0.5 rounded bg-[#ECE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold">
                  ${destixRate}/min
                </span>
              </div>
              <div className="font-['Instrument_Serif'] text-4xl text-[#181512] font-bold mb-1">
                ${destixCost.toLocaleString()}
                <span className="text-xs font-normal text-[#888277]"> /mo</span>
              </div>
              <p className="text-xs text-[#55514B]">
                Sub-500ms conversational parity, dedicated numbers, and n8n sync.
              </p>
            </div>
          </div>

          {/* Realized Savings Highlight */}
          <div className="p-6 rounded-2xl bg-[#141210] text-[#F6EFE2] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider mb-1 font-semibold">
                AUDITED OPERATIONAL SAVINGS
              </div>
              <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl font-bold">
                You preserve ~{savingsPercent}% (${monthlySavings.toLocaleString()}/mo)
              </div>
              <div className="text-xs text-[#C5BDB1] mt-1 font-['JetBrains_Mono']">
                Annual Capital Retained: ${annualSavings.toLocaleString()}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-full bg-[#B88746] hover:bg-[#D4A373] text-[#141210] font-bold text-xs tracking-tight transition-all shrink-0"
            >
              Audit Your Unit Economics ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngagementModel;
