"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  MonitorSmartphone,
  Sparkles,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  ChevronRight,
  Layers,
  Globe,
  Gauge,
  ShieldCheck,
  Check,
  X,
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
      desc: "We do not build useless art projects. Every scroll depth trigger, CTA placement, and typography choice is engineered to capture qualified leads.",
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
    { feature: "Ownership", generic: "Subscription vendor lock-in", destix: "100% Client-Owned Source Code" },
  ];

  const works = [
    {
      title: "Alliance Capital Properties (ACP Dubai)",
      desc: "Architectural web storefront and investor acquisition portal for Dubai luxury real estate advisory.",
      url: "https://acpdubai.com/",
      domain: "acpdubai.com",
    },
    {
      title: "DigiiRox Spatial 3D Experience",
      desc: "Real-time 60 FPS Three.js WebGL spatial product launch and interactive shader architecture.",
      url: "https://digiirox.vercel.app",
      domain: "digiirox.vercel.app",
    },
    {
      title: "Pranav Jha Architectural Studio",
      desc: "Swiss editorial typography and authority portfolio built with 99/100 Lighthouse performance.",
      url: "https://pranav-jha-portfolio.vercel.app",
      domain: "pranav-jha-portfolio.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614] font-sans antialiased">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/websites" className="hover:text-[#181614] transition-colors">Websites &amp; 3D</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">3D WebGL &amp; Performance Web</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD1] text-[10px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-4 shadow-2xs">
            <MonitorSmartphone className="w-3 h-3 text-[#B88746]" />
            <span>DIGITAL ARCHITECTURE &amp; 3D WEBGL // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] tracking-tight leading-[1.08] mb-6">
            Digital architecture that commands authority. <br />
            <span className="italic text-[#B88746]">Zero lag. Uncompromising speed.</span>
          </h1>
          <p className="text-[#55514B] font-['Plus_Jakarta_Sans'] text-base sm:text-lg max-w-3xl leading-relaxed">
            Most corporate websites are slow, template-ridden brochures that leak high-value prospects. We engineer high-performance web applications with sub-second page transitions, kinetic Swiss typography, and interactive 3D WebGL experiences.
          </p>
        </header>

        {/* 3 Core Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#B88746]/50 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#EDE8DC] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-[#B88746]" />
                  </div>
                  <h2 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3">
                    {pillar.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#E2DDD1]/60">
                  <div className="font-['Instrument_Serif'] text-3xl font-bold text-[#181614]">
                    {pillar.metric}
                  </div>
                  <div className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider font-semibold">
                    {pillar.metricLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Comparison Table */}
        <section className="rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-10 shadow-xs mb-16">
          <div className="mb-6">
            <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
              // ARCHITECTURAL BENCHMARK
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              DestiX AI vs. Legacy Agency Stacks
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-['Plus_Jakarta_Sans']">
              <thead>
                <tr className="border-b border-[#E2DDD1] bg-[#F6F4EE]/80">
                  <th className="p-4 font-semibold text-[#181614]">Feature / Parameter</th>
                  <th className="p-4 font-bold text-[#B88746]">DestiX AI Private Practice</th>
                  <th className="p-4 font-semibold text-[#888277]">Generic Agency (WordPress / Webflow)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1]">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F4EE]/40 transition-colors">
                    <td className="p-4 font-semibold text-[#181614]">{row.feature}</td>
                    <td className="p-4 text-[#181614] font-medium flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#B88746] shrink-0" />
                      <span>{row.destix}</span>
                    </td>
                    <td className="p-4 text-[#888277] flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.generic}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Featured Live Deliverables */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
              // VERIFIED PORTFOLIO
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              Live Client Storefronts &amp; 3D Launches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {works.map((work, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#B88746]/50 transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-2 font-bold">
                    STOREFRONT 0{idx + 1}
                  </span>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3">
                    {work.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {work.desc}
                  </p>
                </div>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#B88746] hover:text-[#181614] transition-colors"
                >
                  <span>Visit {work.domain}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#B88746] text-center shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-4">
            BESPOKE WEB ENGINEERING SPRINT
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Build a Category-Defining Digital Flagship
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto mb-8 leading-relaxed">
            Eliminate price shopping and elevate your inbound deal size. We build custom Next.js web applications, 3D spatial models, and high-converting acquisition funnels in 14-day sprints.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all duration-300 shadow-sm"
            >
              Book 30-Min Diagnostic Call
            </button>
            <Link
              href="/websites"
              className="px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300"
            >
              Explore Websites Portfolio
            </Link>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="3D WebGL & Performance Web Development"
      />
    </div>
  );
}
