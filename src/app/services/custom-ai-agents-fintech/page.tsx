"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Landmark,
  ShieldCheck,
  Lock,
  Zap,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Activity,
} from "lucide-react";

export default function CustomAiAgentsFintechPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const fintechPillars = [
    {
      title: "Automated Voice KYC & Identity Verification",
      desc: "Conducts multi-factor voice authentication and structured KYC question flows, bridging caller credentials directly into verification pipelines with cryptographic audit logs.",
      icon: Lock,
      tag: "FCA & FINRA ALIGNED",
    },
    {
      title: "Accredited Investor & Mandate Triage",
      desc: "Screens institutional capital, family offices, and high-net-worth investors, probing fund liquidity and investment criteria before connecting managing partners.",
      icon: Landmark,
      tag: "UHNW QUALIFICATION",
    },
    {
      title: "Sub-45s Speed to Lead on High-Ticket Finance",
      desc: "Instantly dials prospective loan, mortgage, and alternative investment inquiries while intent is at its peak, increasing qualification conversions by 391%.",
      icon: Zap,
      tag: "391% HIGHER CONVERSIONS",
    },
    {
      title: "Sovereign In-Memory Audio Redaction",
      desc: "Audio streams and customer account numbers are processed in ephemeral memory without being retained in public LLM training datasets.",
      icon: ShieldCheck,
      tag: "ZERO-KNOWLEDGE PIPELINES",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
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
            <span className="text-[#1A1817]">FinTech AI Agents</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Institutional Financial Telephony
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              Custom AI Agent Development for FinTech & Banking
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Engineered for Canary Wharf, Wall Street, Paradeplatz, and DIFC. We build sovereign, regulatory-compliant AI telephony agents for financial institutions, private wealth managers, and high-velocity fintech scale-ups.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy FinTech AI Pipeline</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/locations/uk/london/ai-voice-agents"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Explore London Banking Practice
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fintechPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
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
                  <h3 className="font-serif text-2xl text-[#1A1817] mb-3">
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
                Sovereign Financial Infrastructure
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Automate Financial Telephony With Institutional Security
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Connect your wealth advisory or FinTech platform to DestiX AI. Experience sub-435ms voice fidelity backed by strict FCA, FINRA, and GDPR Article 22 compliance.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Request FinTech Briefing
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
