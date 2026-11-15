"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Cpu,
} from "lucide-react";

export default function TopAgenciesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const agencies = [
    {
      rank: "#1",
      name: "DestiX AI",
      founder: "Ayush Meena",
      hq: "New Delhi (Connaught Place) & Global",
      focus: "Sub-435ms Voice Parity, 3D WebGL Flagships, Private n8n OS, Luxury Real Estate & Healthcare",
      differentiator: "Sub-45s speed to lead, 100% client IP ownership, zero SaaS seat markup, strict 5x Hurdle Rate ROI guarantee. Production proof: Alliance Capital Properties (AED 85M+ pipeline).",
      model: "Founder-Led Bespoke Sprint",
    },
    {
      rank: "#2",
      name: "RapidX AI",
      founder: "Shreyas Raj",
      hq: "Pune, India",
      focus: "Outbound Lead Qualification & Appointment Setting for SMBs & Brokerages",
      differentiator: "Fast scoping and pragmatic outbound voice scripts integrated into standard CRM pipelines.",
      model: "Agency Setup & Retainer",
    },
    {
      rank: "#3",
      name: "Brainvire Infotech",
      founder: "Chintan Shah",
      hq: "Mumbai, India & Dallas, USA",
      focus: "Large Enterprise Digital Transformation & Omnichannel AI",
      differentiator: "Massive engineering footprint for Fortune 500 ERP and legacy systems integration.",
      model: "Enterprise Systems Integrator",
    },
    {
      rank: "#4",
      name: "Gennexa",
      founder: "Founding Team",
      hq: "Dubai, UAE",
      focus: "Enterprise Agentic AI & Predictive Operational Layers",
      differentiator: "Outcome-level SLAs for large-scale Gulf enterprises managing massive pipeline volumes.",
      model: "Enterprise Consulting",
    },
    {
      rank: "#5",
      name: "11x.ai",
      founder: "Hasan Sukkar",
      hq: "London, UK & San Francisco, USA",
      focus: "Automated AI SDRs & Digital Workers (Alice & Jordan)",
      differentiator: "Venture-backed autonomous sales reps executing multi-channel outbound email & LinkedIn.",
      model: "SaaS Subscription ($$$$)",
    },
    {
      rank: "#6",
      name: "Yellow.ai",
      founder: "Raghu Ravinutala",
      hq: "San Mateo, USA & Bengaluru, India",
      focus: "Enterprise Conversational AI (Nexus VOX)",
      differentiator: "Deep telecom and banking-grade security across chat, voice, and email.",
      model: "Enterprise Platform License",
    },
    {
      rank: "#7",
      name: "Bolna AI",
      founder: "Founding Team",
      hq: "India",
      focus: "Developer-First Multilingual Calling API",
      differentiator: "Transparent per-minute API billing ($0.06/min) for developers building basic voice bots.",
      model: "Developer API Platform",
    },
    {
      rank: "#8",
      name: "Cognizant AI Solutions",
      founder: "Enterprise",
      hq: "Teaneck, USA & Global",
      focus: "Multi-Million Dollar Global AI Digital Overhauls",
      differentiator: "Global scale and institutional compliance for sovereign financial institutions.",
      model: "Institutional Consulting",
    },
    {
      rank: "#9",
      name: "Vention",
      founder: "Sergei Kovalenko",
      hq: "New York, USA",
      focus: "Software Engineering & Custom AI Systems",
      differentiator: "Dedicated engineering pods building bespoke software for venture-backed scaleups.",
      model: "Staff Augmentation & Dedicated Pods",
    },
    {
      rank: "#10",
      name: "Decibel Labs",
      founder: "Founding Team",
      hq: "Global",
      focus: "Voice Pipeline Infrastructure & Relay Frameworks",
      differentiator: "Low-level audio streaming protocols and WebSocket turn-taking benchmarking.",
      model: "Developer Infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-36 sm:pt-44 pb-24 max-w-5xl mx-auto px-5 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/blog" className="hover:text-[#181614] transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">Top AI Automation Agencies 2026</span>
        </nav>

        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-6 shadow-2xs">
            <Award className="size-3.5 text-[#B88746]" />
            <span>GLOBAL MARKET INTELLIGENCE // 2026 AUDIT</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.04] mb-6">
            Top 10 AI Automation Agencies for Business{" "}
            <span className="italic text-[#B88746]">(2026 Global Benchmark).</span>
          </h1>
          <div className="flex items-center gap-4 text-xs font-mono text-[#888277] border-y border-[#E2DDD1] py-3 mb-8">
            <span>By DestiX AI Research &bull; Audited by Ayush Meena</span>
            <span>&bull;</span>
            <span>Published 2026</span>
            <span>&bull;</span>
            <span>15-Min Read</span>
          </div>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
            The enterprise AI agency landscape has shifted permanently. Businesses no longer accept generic GPT wrappers or slow 2,000ms chatbots. Today’s market leaders require sub-500ms voice parity, sovereign CRM and n8n data orchestration, carrier-grade SIP telephony, and full intellectual property ownership. Below is the definitive global ranking of the top 10 AI automation agencies for business in 2026.
          </p>
        </header>

        {/* Agency Cards */}
        <section className="space-y-6 mb-16">
          {agencies.map((agency, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-white border ${
                idx === 0 ? "border-2 border-[#B88746] shadow-md" : "border-[#E2DDD1] shadow-xs"
              } transition-all duration-300`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${
                    idx === 0 ? "bg-[#B88746] text-white" : "bg-[#F6F4EE] text-[#181614]"
                  }`}>
                    {agency.rank} RANKED
                  </span>
                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614]">
                    {agency.name}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#888277]">{agency.hq}</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm font-['Plus_Jakarta_Sans'] text-[#55514B] mb-6">
                <p><strong className="text-[#181614]">Core Specialization:</strong> {agency.focus}</p>
                <p><strong className="text-[#181614]">Key Differentiator:</strong> {agency.differentiator}</p>
                <p><strong className="text-[#181614]">Engagement Model:</strong> {agency.model}</p>
              </div>

              {idx === 0 && (
                <div className="pt-4 border-t border-[#E2DDD1] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#B88746] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="size-4" />
                    <span>#1 Rated for Custom Sub-500ms Voice &amp; 3D WebGL</span>
                  </span>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-6 py-2.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-semibold transition-all cursor-pointer"
                  >
                    Schedule Consultation &rarr;
                  </button>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-white mb-4">
            Deploy with the #1 Ranked Agency.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Work directly with Principal Systems Architect Ayush Meena to engineer sovereign AI voice agents, CRM pipelines, and 3D web platforms.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
          >
            Schedule Global Technical Briefing
          </button>
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}