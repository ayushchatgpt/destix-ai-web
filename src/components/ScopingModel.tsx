"use client";

import React, { useState } from "react";
import { ArrowUpRight, ShieldCheck, Calculator, Clock, CheckCircle2 } from "lucide-react";

interface ScopingModelProps {
  onOpenBooking: () => void;
}

export function ScopingModel({ onOpenBooking }: ScopingModelProps) {
  const [minutes, setMinutes] = useState(15000);

  // Traditional call center cost: $1.20/min
  const traditionalCost = Math.round(minutes * 1.2);

  // Typical SaaS markup: $0.30/min
  const saasCost = Math.round(minutes * 0.3);

  // DestiX effective volume rate ($0.08 down to $0.045/min)
  const destixRate =
    minutes > 50000 ? 0.045 : minutes > 20000 ? 0.052 : minutes > 5000 ? 0.065 : 0.08;
  const destixCost = Math.round(minutes * destixRate + 450);

  const monthlySavings = Math.max(0, traditionalCost - destixCost);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round(((traditionalCost - destixCost) / traditionalCost) * 100);

  return (
    <section id="scoping-model" className="py-24 sm:py-32 bg-[#F6F4EE] relative border-b border-[#E2DDD1]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8652B]" />
            (07) THE SCOPING MODEL &amp; VOLUME MODELER
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-6">
            Custom-scoped architectures, governed by the{" "}
            <span className="italic text-[#B8652B]">5x Hurdle Rate.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#55514B] leading-relaxed font-normal">
            We do not sell cookie-cutter SaaS plans or generic subscription tiers. Every deployment is precision-engineered to your exact operational bottleneck and validated before contract signing.
          </p>
        </div>

        {/* The 5x Hurdle Rate Guarantee Box */}
        <div className="rounded-3xl bg-white border-2 border-[#B8652B] p-8 sm:p-12 shadow-md mb-16 relative overflow-hidden">
          <div className="flex items-center gap-2.5 text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#B8652B] font-bold mb-4">
            <ShieldCheck className="w-5 h-5" />
            <span>OUR INSTITUTIONAL COMMITMENT // THE 5X HURDLE RATE</span>
          </div>

          <blockquote className="font-['Instrument_Serif'] italic text-2xl sm:text-3xl md:text-4xl text-[#181614] leading-snug mb-6">
            &ldquo;Every business has different operational plumbing. We do not sell one-size-fits-all packages. Every deployment is custom-scoped on a 30-minute diagnostic call with an explicit financial ROI model in writing. If the math does not clear a 5x return on your investment, we decline the project.&rdquo;
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E2DDD1]">
            <div className="flex items-center gap-2.5 text-xs text-[#55514B]">
              <CheckCircle2 className="w-4 h-4 text-[#B8652B] shrink-0" />
              <span>Custom Unit Economics Audit</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#55514B]">
              <CheckCircle2 className="w-4 h-4 text-[#B8652B] shrink-0" />
              <span>Explicit Financial Model in Writing</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#55514B]">
              <CheckCircle2 className="w-4 h-4 text-[#B8652B] shrink-0" />
              <span>Declined if Under 5x Modeled ROI</span>
            </div>
          </div>
        </div>

        {/* Interactive Minutes & Cost Savings Modeler (NO TIERS) */}
        <div className="rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-['JetBrains_Mono'] text-[#B8652B] uppercase tracking-wider block mb-1 font-bold">
                ESTIMATED MONTHLY VOLUME
              </span>
              <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
                Model your monthly operational savings.
              </h3>
            </div>

            <div className="inline-flex items-baseline gap-2 bg-[#F6F4EE] px-5 py-2.5 rounded-2xl border border-[#E2DDD1]">
              <span className="font-['Instrument_Serif'] text-3xl sm:text-4xl font-bold text-[#181614]">
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
            className="w-full h-3 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B8652B] mb-4"
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
                Includes base wages, recruitment, training, sick leave, and supervisor overhead.
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
                Typical reseller markup with zero custom CRM logic, workflow bridges, or latency tuning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-[#B8652B] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#B8652B] uppercase tracking-wider font-bold">
                  DestiX AI Practice
                </span>
                <span className="px-2 py-0.5 rounded bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B8652B] font-bold">
                  ${destixRate}/min effective
                </span>
              </div>
              <div className="font-['Instrument_Serif'] text-4xl text-[#181614] font-bold mb-1">
                ${destixCost.toLocaleString()}
                <span className="text-xs font-normal text-[#888277]"> /mo</span>
              </div>
              <p className="text-xs text-[#55514B]">
                Sub-500ms conversational parity, dedicated telephony carrier lines, and n8n sync.
              </p>
            </div>
          </div>

          {/* Savings Callout Banner & Action */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#131210] text-[#F6EFE2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-['JetBrains_Mono'] text-[#B8652B] uppercase tracking-wider mb-1 font-semibold">
                VERIFIED REAL-TIME SAVINGS
              </div>
              <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl font-bold">
                You save ~{savingsPercent}% (${monthlySavings.toLocaleString()}/mo) vs typical platform pricing.
              </div>
              <div className="text-xs text-[#C5BDB1] mt-1 font-['JetBrains_Mono']">
                Annual Capital Preserved: ${annualSavings.toLocaleString()} • 100% Custom Engineering
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#B8652B] hover:bg-[#D4A373] text-[#131210] font-bold text-sm tracking-tight transition-all duration-300 shadow-md shrink-0 flex items-center gap-2 group"
            >
              <span>Get Your Exact System Scope &amp; ROI Model</span>
              <ArrowUpRight className="w-4 h-4 text-[#131210] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const EngagementModel = ScopingModel;
export default ScopingModel;
