"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck2,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Database,
  Cpu,
} from "lucide-react";

export default function HipaaGdprCompliantLlmPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const compliancePillars = [
    {
      title: "Private VPC & Sovereign Bare-Metal Deployment",
      desc: "Models run inside client-controlled AWS eu-central-1 (Frankfurt), AWS eu-west-2 (London), AWS us-east-1, or dedicated Hetzner servers. Zero multi-tenant sharing.",
      icon: Server,
      tag: "DEDICATED CLUSTERS",
    },
    {
      title: "Automated PII Redaction & Zero Data Retention",
      desc: "Real-time named entity recognition (NER) redacting patient medical record numbers, social security digits, and phone numbers before inference tokenization.",
      icon: Lock,
      tag: "ZERO RETENTION",
    },
    {
      title: "GDPR Article 22 Right-to-Explain Systems",
      desc: "Deterministic algorithmic audit trails explaining automated triage and customer routing decisions, satisfying European data protection commissioner inquiries.",
      icon: FileCheck2,
      tag: "EU AUDIT READY",
    },
    {
      title: "Business Associate Agreements (BAA)",
      desc: "Full contractual BAA execution for healthcare organizations and Data Processing Agreements (DPAs) for UK and European enterprise clients.",
      icon: ShieldCheck,
      tag: "LEGALLY BINDING BAA",
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
            <span className="text-[#1A1817]">HIPAA & GDPR Sovereign LLMs</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Sovereign Enterprise AI Architecture
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              HIPAA & GDPR Compliant Sovereign LLM Deployment
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Deploy high-intelligence language models without compromising confidential data. We architect private, containerized LLM systems that run inside your sovereign cloud perimeter with zero persistent logging and complete regulatory compliance.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Commission Sovereign Deployment</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/n8n-automation"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Explore Private n8n Clusters
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compliancePillars.map((pillar, idx) => (
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
                Enterprise Data Protection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Retain 100% Control Over Your Enterprise Knowledge
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Refuse public multi-tenant APIs. Commission a sovereign, HIPAA and GDPR-compliant LLM deployment engineered by DestiX AI.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Request Compliance Specs
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
