"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Clock, DollarSign, ArrowUpRight } from "lucide-react";

interface MinutesRoiCalculatorProps {
  onOpenBooking: () => void;
}

export default function MinutesRoiCalculator({ onOpenBooking }: MinutesRoiCalculatorProps) {
  const [minutes, setMinutes] = useState(15000);

  // Traditional call center cost: $1.20/min
  const traditionalCost = Math.round(minutes * 1.2);

  // Typical SaaS / Agency setup: $0.30/min
  const saasCost = Math.round(minutes * 0.3);

  // DestiX AI Neural Rate: volume-based $0.08 down to $0.045/min
  const destixPerMinute =
    minutes > 50000 ? 0.045 : minutes > 20000 ? 0.055 : minutes > 5000 ? 0.068 : 0.08;
  const destixCost = Math.round(minutes * destixPerMinute + 450);

  const monthlySavingsVsTraditional = Math.max(0, traditionalCost - destixCost);
  const annualSavings = monthlySavingsVsTraditional * 12;
  const repLaborHoursSaved = Math.round(minutes / 40); // 40 mins talk time per hour
  const roiMultiplier = ((traditionalCost / destixCost)).toFixed(1);

  return (
    <section className="py-24 sm:py-32 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111216] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            // 06 FINANCIAL TELEMETRY
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Interactive Minutes &amp;{" "}
            <span className="text-[#00F5A0]">Cost Savings Calculator.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Drag the slider to your estimated monthly call volume. See the exact unit economics, rep hours automated, and monthly capital preserved compared to human call centers.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="rounded-3xl bg-[#111216] border border-white/10 p-8 sm:p-12 shadow-2xl">
          {/* Slider Row */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider block mb-1">
                  Estimated Monthly Call Volume
                </span>
                <span className="text-sm text-[#A1A5B2]">
                  Combined inbound answering &amp; outbound speed-to-lead dialing
                </span>
              </div>

              <div className="inline-flex items-baseline gap-2 bg-[#08080A] px-5 py-2.5 rounded-2xl border border-white/10">
                <span className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-[#00F5A0]">
                  {minutes.toLocaleString()}
                </span>
                <span className="text-xs font-['JetBrains_Mono'] text-[#7A7D87]">
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
              className="w-full h-3 bg-[#16181F] rounded-lg appearance-none cursor-pointer accent-[#00F5A0]"
            />

            <div className="flex justify-between text-[11px] font-['JetBrains_Mono'] text-[#7A7D87] mt-3">
              <span>1,000 mins</span>
              <span>25,000 mins</span>
              <span>50,000 mins</span>
              <span>75,000 mins</span>
              <span>100,000 mins</span>
            </div>
          </div>

          {/* 3 Cost Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Traditional Call Center */}
            <div className="p-6 rounded-2xl bg-[#08080A] border border-white/5">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider block mb-2">
                Traditional Call Center Reps
              </span>
              <div className="font-['Syne'] font-extrabold text-3xl text-rose-400 mb-1">
                ${traditionalCost.toLocaleString()}
                <span className="text-xs font-normal text-[#7A7D87]"> /mo</span>
              </div>
              <p className="text-xs text-[#7A7D87] leading-relaxed">
                Based on industry standard $1.20/min all-in salary, training, sick leave, and management overhead.
              </p>
            </div>

            {/* Standard SaaS / Agency Setup */}
            <div className="p-6 rounded-2xl bg-[#08080A] border border-white/5">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider block mb-2">
                Generic SaaS / Agency Markups
              </span>
              <div className="font-['Syne'] font-extrabold text-3xl text-amber-300 mb-1">
                ${saasCost.toLocaleString()}
                <span className="text-xs font-normal text-[#7A7D87]"> /mo</span>
              </div>
              <p className="text-xs text-[#7A7D87] leading-relaxed">
                Typical per-minute reselling markup ($0.30/min) without custom CRM logic or latency tuning.
              </p>
            </div>

            {/* DestiX AI Neural Rate */}
            <div className="p-6 rounded-2xl bg-[#08080A] border-2 border-[#00F5A0] relative shadow-[0_0_25px_rgba(0,245,160,0.15)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#00F5A0] uppercase tracking-wider font-bold">
                  DestiX AI Neural Ops
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00F5A0]/20 text-[10px] font-['JetBrains_Mono'] text-[#00F5A0]">
                  ${destixPerMinute}/min effective
                </span>
              </div>
              <div className="font-['Syne'] font-extrabold text-3xl text-[#00F5A0] mb-1">
                ${destixCost.toLocaleString()}
                <span className="text-xs font-normal text-[#7A7D87]"> /mo</span>
              </div>
              <p className="text-xs text-[#7A7D87] leading-relaxed">
                Includes sub-380ms low latency inference, dedicated phone numbers, and full CRM automation pipelines.
              </p>
            </div>
          </div>

          {/* Bottom Telemetry Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#08080A] border border-white/10 items-center">
            <div>
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider block mb-1">
                Monthly Net Savings
              </span>
              <div className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#00F5A0]">
                +${monthlySavingsVsTraditional.toLocaleString()}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider block mb-1">
                Annual Capital Preserved
              </span>
              <div className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#F4F4F6]">
                ${annualSavings.toLocaleString()}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider block mb-1">
                Rep Labor Automated
              </span>
              <div className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#3B82F6]">
                {repLaborHoursSaved.toLocaleString()} hrs
              </div>
            </div>

            <div>
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider block mb-1">
                ROI Multiplier
              </span>
              <div className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#00F5A0]">
                {roiMultiplier}x Net
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#7A7D87] font-['JetBrains_Mono']">
              *All pricing transparently audited during your private architecture discovery sprint.
            </span>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00F5A0] hover:bg-[#34F8B3] text-[#08080A] font-bold text-xs tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(0,245,160,0.3)]"
            >
              <span>Lock In High-Volume Minutes</span>
              <ArrowUpRight className="w-4 h-4 text-[#08080A]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
