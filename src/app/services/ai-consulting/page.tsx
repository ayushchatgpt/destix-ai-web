"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Compass,
  ShieldCheck,
  LineChart,
  Layers,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  FileCode2,
  Lock,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function AiConsultingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const advisoryPillars = [
    {
      title: "Enterprise AI Readiness Audit",
      desc: "Deep-dive diagnostic of your current IT ecosystem, CRM structure, telephony infrastructure, and security posture. We identify the top 3 highest-ROI automation opportunities within your business.",
      icon: Compass,
      tag: "COMPREHENSIVE AUDIT",
    },
    {
      title: "Telephony & Latency Architecture",
      desc: "Architecting sub-500ms voice agent pipelines, SIP trunk peering, WebRTC streaming, and Silero VAD tuning. Eliminates conversational latency across domestic and international telecom carriers.",
      icon: Cpu,
      tag: "SUB-435MS BENCHMARK",
    },
    {
      title: "Data Sovereignty & Security Compliance",
      desc: "Private cloud deployment strategies (AWS, Hetzner, GCP) preventing sensitive corporate and customer data from being harvested by public multi-tenant foundation models.",
      icon: Lock,
      tag: "ZERO DATA LEAKAGE",
    },
    {
      title: "5x Hurdle Rate ROI Modeling",
      desc: "Rigorous quantitative financial modeling comparing pass-through telephony unit economics ($0.02-$0.07/min) against full-time human headcount and venture SaaS seat subscriptions.",
      icon: LineChart,
      tag: "FINANCIAL VALIDATION",
    },
    {
      title: "Carrier & Regulatory Navigation",
      desc: "Regulatory advisory across TRAI (India DLT/PE registrations), TDRA (UAE whitelist approvals), FCC STIR/SHAKEN (US A2P 10DLC), and Ofcom UK telecom frameworks.",
      icon: ShieldCheck,
      tag: "GLOBAL COMPLIANCE",
    },
    {
      title: "Fractional Chief AI Officer Advisory",
      desc: "Direct retainer advisory with Principal Systems Architect Ayush Meena. Bi-weekly strategic reviews, technical vendor audits, and architectural roadmap stewardship.",
      icon: Layers,
      tag: "EXECUTIVE COUNSEL",
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
            <span className="text-[#1A1817]">Strategic AI Consulting</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Engineering-First Strategic Advisory
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              Strategic AI Consulting & Enterprise Architecture
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Cut through generative AI hype. We advise boards, founders, and CTOs on deploying sovereign, high-margin AI infrastructure with audited latency, guaranteed data privacy, and a contractual 5x Hurdle Rate ROI.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Commission Architecture Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/why-destix-ai"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Why DestiX AI
              </Link>
            </div>
          </div>
        </section>

        {/* Advisory Pillars */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Advisory Spectrum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              Six Dimensions of Strategic AI Consulting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryPillars.map((pillar, idx) => (
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

        {/* Consulting Process */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
                Consulting Engagement Process
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-4">
                From Assessment to Production In 3 Stages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-2">PHASE 01 / WEEK 1</div>
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">Systems & Telephony Audit</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  We inspect your existing tech stack, CRM schemas, SIP trunk providers, and customer touchpoints. Identify high-friction bottlenecks and calculate precise financial payback models.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-2">PHASE 02 / WEEK 2</div>
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">Architecture Blueprint</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  Deliver complete technical specifications: model selection, orchestration state machines, API integration maps, failover policies, and carrier compliance documentation.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-2">PHASE 03 / ONGOING</div>
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">Stewardship & Governance</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  Bi-weekly executive advisory, prompt regression testing, latency monitoring, and model upgrades to ensure your business remains at the technological forefront.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Executive Advisory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Schedule a 1-on-1 Architecture Consultation
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Connect directly with Principal Systems Architect Ayush Meena to evaluate your enterprise AI deployment strategy and unlock guaranteed operational ROI.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Book Executive Consultation
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
