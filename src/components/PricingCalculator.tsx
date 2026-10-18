"use client";

import React, { useState } from "react";
import { Check, ArrowUpRight, Sparkles, Calculator, ShieldCheck } from "lucide-react";

interface PricingCalculatorProps {
  onOpenBooking: () => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenBooking }) => {
  const [minutes, setMinutes] = useState(10000);

  const getEffectiveRate = (mins: number) => {
    if (mins <= 2000) return 0.08;
    if (mins <= 10000) return 0.0625;
    if (mins <= 25000) return 0.056;
    if (mins <= 50000) return 0.05;
    return 0.045;
  };

  const effectiveRate = getEffectiveRate(minutes);
  const yourCost = Math.round(minutes * effectiveRate);
  const platformCost = Math.round(minutes * 0.3);
  const savings = platformCost - yourCost;
  const savingsPct = Math.round((1 - effectiveRate / 0.3) * 100);

  return (
    <section id="pricing" className="relative bg-[#08090C] px-6 py-24 md:py-36 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
            // Transparent Unit Economics
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Only pay for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              what works.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light leading-relaxed">
            Simple, transparent pricing in USD. Every plan ships with the ROI model in writing
            before we build. If the math does not clear 5x, we politely decline the project.
          </p>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Tier 1: Pilot Sprint */}
          <div className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-white">Pilot Deployment</span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                  14-Day Delivery
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400 font-light">
                One agent, live in 14 days • Perfect for a first deployment
              </p>

              <div className="mt-6 flex items-baseline gap-1 border-b border-white/10 pb-6">
                <span className="font-display text-4xl font-bold text-white">$500</span>
                <span className="text-xs text-slate-400 font-mono">/month (no setup fee)</span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span><strong>3,000+ call minutes</strong> included monthly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>1 production voice agent, inbound or outbound</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Dedicated phone number & carrier routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Direct Google Calendar / Cal.com sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Extra minutes at $0.08/min flat</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full rounded-full border border-white/20 bg-white/5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white transition-colors hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
              >
                Start a pilot
              </button>
            </div>
          </div>

          {/* Tier 2: Scale Plan (Featured / Most Deployed) */}
          <div className="relative flex flex-col justify-between rounded-2xl border-2 border-cyan-400 bg-[#0E1017] p-8 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-black shadow-lg">
              Most Deployed
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-white">Scale Plan</span>
                <span className="rounded-full bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-300 uppercase tracking-wider">
                  Volume Operations
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400 font-light">
                Volume-based per-minute pricing for active phone operations
              </p>

              <div className="mt-6 flex items-baseline gap-1 border-b border-white/10 pb-6">
                <span className="font-display text-4xl font-bold text-cyan-400">From $0.05</span>
                <span className="text-xs text-slate-400 font-mono">/min all-in</span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-cyan-400 mt-0.5" />
                  <span><strong>Multiple agents</strong> across inbound & outbound campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-cyan-400 mt-0.5" />
                  <span>Up to <strong>100 concurrent calls</strong> simultaneously</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-cyan-400 mt-0.5" />
                  <span>Full CRM, WhatsApp and calendar automated workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-cyan-400 mt-0.5" />
                  <span>Weekly revenue + hours saved reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-cyan-400 mt-0.5" />
                  <span>Dedicated prompt engineer & bi-weekly script updates</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={onOpenBooking}
                className="btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider"
              >
                <span>Run your numbers</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Tier 3: Enterprise & White-Label */}
          <div className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-white">Enterprise</span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                  Agencies & Portfolios
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400 font-light">
                Custom scalable plans for large organisations & partners
              </p>

              <div className="mt-6 flex items-baseline gap-1 border-b border-white/10 pb-6">
                <span className="font-display text-4xl font-bold text-white">Custom</span>
                <span className="text-xs text-slate-400 font-mono">committed volume</span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span><strong>Unlimited concurrent calls</strong> with zero rate limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Bespoke 3D WebGL digital storefront included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>White-label agency sub-account access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Multi-language: English, Hindi + regional dialects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Direct Slack channel with founder Ayush Meena</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full rounded-full border border-white/20 bg-white/5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white transition-colors hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
              >
                Talk to the founder
              </button>
            </div>
          </div>
        </div>

        {/* Volume-Based ROI Calculator Box */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0E1017] p-8 md:p-12 shadow-espresso">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Calculator className="size-4" />
                <span>Volume-Based ROI Engine</span>
              </div>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">
                Drag to calculate monthly minutes & net savings.
              </h3>
              <p className="mt-2 text-sm text-slate-400 max-w-xl font-light">
                See your effective rate compared against typical VAPI/Retell style all-in pricing
                of about $0.30 per minute.
              </p>
            </div>

            <div className="text-right">
              <div className="font-display text-3xl md:text-4xl font-bold text-white">
                ${effectiveRate.toFixed(3)}{" "}
                <span className="text-sm font-mono text-slate-400">/ min all-in</span>
              </div>
              <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                <span>You save ~{savingsPct}% (${savings.toLocaleString()}/mo)</span>
              </div>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="mt-10">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Selected Monthly Call Volume</span>
              <span className="text-base font-bold text-cyan-400">
                {minutes.toLocaleString()} minutes / month
              </span>
            </div>

            <input
              type="range"
              min={1000}
              max={100000}
              step={1000}
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              className="w-full"
            />

            <div className="mt-3 flex justify-between text-[11px] font-mono text-slate-500">
              <span>1K min</span>
              <span>25K min</span>
              <span>50K min</span>
              <span>75K min</span>
              <span>100K min</span>
            </div>
          </div>

          {/* 4 Math Comparison Cards */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#08090C] p-5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Minutes / Month
              </span>
              <div className="mt-2 font-display text-2xl font-bold text-white">
                {minutes.toLocaleString()}
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/30 p-5">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                DestiX Effective Cost
              </span>
              <div className="mt-2 font-display text-2xl font-bold text-cyan-400">
                ${yourCost.toLocaleString()}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#08090C] p-5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Traditional SaaS Cost
              </span>
              <div className="mt-2 font-display text-2xl font-bold text-slate-500 line-through">
                ${platformCost.toLocaleString()}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-5">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                Net Margin You Keep
              </span>
              <div className="mt-2 font-display text-2xl font-bold text-emerald-400">
                ${savings.toLocaleString()}
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs font-mono text-slate-500">
            Website builds from $1,000 one-time. WhatsApp and revenue automation scoped per build, always with the ROI math attached.
          </p>
        </div>
      </div>
    </section>
  );
};
