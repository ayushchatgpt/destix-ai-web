"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  MonitorSmartphone,
  Sparkles,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function ThreeDWebPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const pillars = [
    {
      title: "Sub-Second Next.js Performance",
      desc: "100/100 Lighthouse scores, edge rendering, and optimized asset pipelines. Your site loads faster than competitors' blank screens.",
      metric: "99+",
      metricLabel: "Performance Score",
      icon: Zap,
    },
    {
      title: "Tactile Three.js & WebGL Visuals",
      desc: "Custom 3D shaders, real-time lighting, and interactive spatial models that allow high-ticket buyers to inspect villas, jewelry, or hardware.",
      metric: "5x",
      metricLabel: "Higher User Engagement",
      icon: Sparkles,
    },
    {
      title: "Direct-Response Conversion Funnels",
      desc: "We don't build useless art projects. Every scroll depth trigger, CTA placement, and typography choice is engineered to book calls and capture revenue.",
      metric: "$1M+",
      metricLabel: "Attributed Client Sales",
      icon: TrendingUp,
    },
  ];

  const comparison = [
    { feature: "Framework", generic: "WordPress / Webflow Templates", destix: "Next.js 15 App Router + TypeScript" },
    { feature: "3D Rendering", generic: "Heavy video loops or none", destix: "Custom 60FPS Three.js WebGL" },
    { feature: "Page Speed", generic: "3.5s - 6s loading lag", destix: "Sub-400ms Edge TTFB" },
    { feature: "AI Voice & CRM Integration", generic: "Disjointed 3rd party chat widget", destix: "Native Realtime Voice & n8n APIs" },
    { feature: "Ownership", generic: "Subscription lock-in", destix: "100% Owned Source Code" },
  ];

  return (
    <div className="min-h-screen bg-[#08090C] bg-cyber-grid text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Capabilities</span>
            <span>/</span>
            <span>Websites That Convert & 3D WebGL</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-950/40 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-violet-300">
              <MonitorSmartphone className="size-3.5" />
              Digital Architecture & 3D WebGL
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Category-defining 3D storefronts that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                convert traffic into equity.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
              Generic corporate templates destroy trust for high-ticket businesses.
              DestiX AI designs award-grade digital platforms combining 60FPS WebGL interactive models,
              edge Next.js performance, and ruthlessly tuned direct-response funnels.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary inline-flex items-center gap-3 px-8 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider"
              >
                <span>Commission 3D Platform</span>
                <ArrowUpRight className="size-4" />
              </button>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:border-cyan-400 hover:text-cyan-300"
              >
                <span>Review Pricing (From $1,000)</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3 Conversion Pillars */}
        <section className="mt-24 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                        <Icon className="size-6" />
                      </div>
                      <span className="font-display text-3xl font-bold text-white">
                        {p.metric}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 mt-2 text-right">
                      {p.metricLabel}
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light">{p.desc}</p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400 flex items-center justify-between">
                    <span>Engineering Standards</span>
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Comparison Table */}
        <section className="mt-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-[#0E1017] p-8 md:p-12 shadow-espresso">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
              Why DestiX 3D architectures outperform generic templates.
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-light">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-slate-400">
                    <th className="pb-4">Dimension</th>
                    <th className="pb-4">Typical Agency Build</th>
                    <th className="pb-4 text-cyan-400 font-semibold">DestiX AI Architecture</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparison.map((c, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 font-medium text-white">{c.feature}</td>
                      <td className="py-4 text-slate-400">{c.generic}</td>
                      <td className="py-4 text-white flex items-center gap-2 font-medium">
                        <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                        <span>{c.destix}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <FinalCtaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialService="High-Converting 3D WebGL Storefront" />
    </div>
  );
}
