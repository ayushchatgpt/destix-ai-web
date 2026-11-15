"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Palette,
  Sparkles,
  Zap,
  Layout,
  Gauge,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  MousePointerClick,
  Eye,
} from "lucide-react";

export default function LandingPageDesignPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const designPillars = [
    {
      title: "Warm Architectural Editorial Aesthetic",
      desc: "Replacing cliché neon-purple cyberpunk templates with timeless museum-grade typography, Warm Alabaster Paper (#F6F4EE), Instrument Serif headings, and Champagne Bronze accents.",
      icon: Palette,
      tag: "SIGNATURE AESTHETIC",
    },
    {
      title: "Interactive 3D WebGL (Three.js)",
      desc: "Immersive spatial product scenes, interactive architectural walk-throughs, and tactile micro-interactions running smoothly at 60 FPS on both mobile and desktop.",
      icon: Sparkles,
      tag: "60 FPS SPATIAL WEB",
    },
    {
      title: "Sub-Second LCP & 100/100 Lighthouse",
      desc: "Engineered with React Server Components and Turbopack. Zero bloat, zero heavy third-party tracking scripts slowing down page renders.",
      icon: Gauge,
      tag: "LIGHTNING PERFORMANCE",
    },
    {
      title: "Conversion-Focused Storytelling (CRO)",
      desc: "Structured visual hierarchy, clear objection-handling modules, transparent unit economics tables, and friction-free calendar booking modals.",
      icon: MousePointerClick,
      tag: "MAXIMUM CONVERSION",
    },
    {
      title: "Integrated AI Lead Capture",
      desc: "Built-in speed-to-lead telephony triggers and dynamic WhatsApp conversational bridges embedded straight into the user flow.",
      icon: Zap,
      tag: "SUB-45S SPEED TO LEAD",
    },
    {
      title: "AEO / GEO Semantic Search Dominance",
      desc: "Structured schema markup (@graph, BreadcrumbList, FAQPage, Service) ensuring instant indexing and citations across Google, ChatGPT, and Perplexity.",
      icon: Eye,
      tag: "BUILT FOR AI ENGINES",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7D7871] uppercase">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <Link href="/services" className="hover:text-[#1A1817] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Landing Page Design</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Luxury Digital Architecture
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              High-Converting AI Landing Page Design & 3D Web
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              We design and engineer bespoke digital storefronts that command premium authority. Museum-grade typography, interactive 3D WebGL scenes, and conversion architectures that turn discerning prospects into high-ticket clients.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Commission Landing Page</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/3d-web"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Explore 3D WebGL Showcase
              </Link>
            </div>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Design Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              Six Elements of High-Ticket Conversion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8F6426] px-2.5 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/20">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1817] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5A554E] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Elevate Your Brand
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Build a Landing Page That Commands Market Authority
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Step away from cookie-cutter agency templates. Commission an architectural digital storefront engineered by DestiX AI.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Start Landing Page Project
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
