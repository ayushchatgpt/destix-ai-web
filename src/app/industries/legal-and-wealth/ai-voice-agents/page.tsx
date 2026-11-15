"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Scale,
  ShieldCheck,
  Briefcase,
  Lock,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Clock,
} from "lucide-react";

export default function LegalWealthIndustryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const legalFeatures = [
    {
      title: "Confidential Conflict Checks & Case Intake",
      desc: "Captures opposing party entities, jurisdiction, incident dates, and initial case summaries before scheduling consultation calls, safeguarding firm compliance.",
      icon: Scale,
      tag: "CONFLICT OF INTEREST CHECK",
    },
    {
      title: "Private Wealth Liquidity Qualification",
      desc: "Discreetly assesses investable asset brackets, liquidity horizons, and family office structures before granting calendar access to senior partners.",
      icon: Briefcase,
      tag: "HNW QUALIFICATION",
    },
    {
      title: "Zero-Knowledge Sovereign Audio Pipelines",
      desc: "Calls are handled with strict in-memory streaming encryption. Transcripts and recordings bypass public LLM logs to uphold attorney-client privilege.",
      icon: Lock,
      tag: "ATTORNEY-CLIENT PRIVILEGE",
    },
    {
      title: "Sub-2 Rings Answering for Urgent Inquiries",
      desc: "High-net-worth clients and prospective litigation matters receive immediate, polished front-desk reception without answering services or delays.",
      icon: PhoneCall,
      tag: "WHITE-GLOVE RECEPTION",
    },
    {
      title: "Clio, PracticePanther & Salesforce Sync",
      desc: "Generates structured client matter cards, intake notes, and retainer agreements directly inside your legal practice management software.",
      icon: CheckCircle2,
      tag: "PRACTICE MGMT SYNC",
    },
    {
      title: "24/7 After-Hours Emergency Routing",
      desc: "Classifies incoming emergency calls (e.g., immediate arrests, injunctions, transaction deadlines) and triggers priority SMS/call escalation to managing partners.",
      icon: Clock,
      tag: "EMERGENCY ESCALATION",
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
            <span className="text-[#7D7871]">Industries</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Legal & Wealth</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Private Practice Telephony
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              AI Voice Agents for Law Firms & Wealth Management
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Protect partner billing hours and elevate prospective client intake. DestiX AI deploys confidential, white-glove voice telephony agents conducting structured intake, conflict evaluations, and high-net-worth qualification.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy Legal Intake Agent</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/ai-receptionist"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Receptionist Capabilities
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <feat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8F6426] px-2.5 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/20">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1817] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#5A554E] leading-relaxed">
                    {feat.desc}
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
                Confidential Infrastructure
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Safeguard Partner Time with Autonomous Intake
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Experience how DestiX AI streamlines new matter intake while preserving complete client discretion and regulatory compliance.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission Intake System
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
