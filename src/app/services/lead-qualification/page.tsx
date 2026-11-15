"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  PhoneCall,
  Zap,
  Target,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Users,
  Activity,
  GitBranch,
  Clock,
  Sparkles,
} from "lucide-react";

export default function LeadQualificationPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const qualificationFeatures = [
    {
      title: "Sub-45s Speed-to-Lead Callback",
      desc: "Triggers a high-fidelity outbound voice call within 45 seconds of a lead completing a Meta Lead Ad, Google Form, or landing page inquiry, capitalizing on peak buying intent.",
      icon: Zap,
      tag: "391% HIGHER CONVERSION",
    },
    {
      title: "Deterministic BANT Evaluation",
      desc: "Autonomously audits Budget, Authority, Need, and Timeline through conversational natural dialogue. Accurately flags disqualified tire-kickers and prioritizes high-value buyers.",
      icon: Target,
      tag: "BANT FRAMEWORK",
    },
    {
      title: "Live SIP Warm Transfers",
      desc: "When a prospect qualifies, the agent whispers a 10-second contextual brief to your sales executive before bridging the call seamlessly with zero lag.",
      icon: PhoneCall,
      tag: "HUMAN-IN-THE-LOOP",
    },
    {
      title: "Instant CRM Enrichment & Tagging",
      desc: "Generates structured call summaries, audio recordings, sentiment scores, and intent tags in Salesforce, HubSpot, or LeadSquared in under 2 seconds.",
      icon: GitBranch,
      tag: "REAL-TIME SYNC",
    },
    {
      title: "Smart Voicemail & WhatsApp Fallbacks",
      desc: "Detects voicemail in under 80ms to leave tailored audio messages, immediately triggering an automated WhatsApp conversational follow-up to re-engage unreachable leads.",
      icon: Activity,
      tag: "MULTI-CHANNEL",
    },
    {
      title: "Sovereign Compliance (TRAI & FCC)",
      desc: "Enforces strict regional calling hour restrictions, DND registry checks, and carrier STIR/SHAKEN caller ID authentication to protect your domain reputation.",
      icon: ShieldCheck,
      tag: "CARRIER COMPLIANT",
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
            <span className="text-[#1A1817]">AI Lead Qualification</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Sub-45s Speed-to-Lead Telephony
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              AI Lead Qualification & Automated Inbound Triage
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Engage every inbound lead while their screen is still open. DestiX AI initiates sub-45-second phone conversations, scores prospect intent and buying power, and bridges qualified buyers straight to your sales floor.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy Speed-to-Lead Pipeline</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/voice-agents"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Explore Voice Architecture
              </Link>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <div className="text-3xl sm:text-4xl font-serif text-[#1A1817] mb-1">
                391%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8F6426] mb-2">
                Conversion Lift
              </div>
              <p className="text-xs text-[#7D7871] leading-relaxed">
                Contacting prospects within 60 seconds delivers up to 4x higher sales qualification rates.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <div className="text-3xl sm:text-4xl font-serif text-[#1A1817] mb-1">
                &lt; 45s
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8F6426] mb-2">
                First Dial Latency
              </div>
              <p className="text-xs text-[#7D7871] leading-relaxed">
                Webhook trigger to ringing phone in under 45 seconds across US, UK, UAE, and India trunks.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <div className="text-3xl sm:text-4xl font-serif text-[#1A1817] mb-1">
                Zero
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8F6426] mb-2">
                Tire-Kicker Burden
              </div>
              <p className="text-xs text-[#7D7871] leading-relaxed">
                Reps speak exclusively to verified decision-makers who meet your exact budget criteria.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <div className="text-3xl sm:text-4xl font-serif text-[#1A1817] mb-1">
                100%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8F6426] mb-2">
                CRM Accountability
              </div>
              <p className="text-xs text-[#7D7871] leading-relaxed">
                Every call recording, transcript, and evaluation scorecard synced directly into your CRM.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Pipeline Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              How DestiX AI Qualifies Inbound Traffic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualificationFeatures.map((feat, idx) => (
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

        {/* Qualification Workflow Flowchart */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
                Execution Workflow
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-4">
                The 4-Stage Lead Qualification Sequence
              </h2>
              <p className="text-sm text-[#5A554E] leading-relaxed">
                Deterministic routing ensures zero leads slip through cracks while maintaining pristine human relationship management for high-net-worth clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-2">01 / INGESTION</div>
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">Webhook Ingest</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  Ad click or web inquiry triggers secure payload parsing and DND regulatory validation.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-2">02 / DIAL & VAD</div>
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">Sub-45s First Ring</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  High-priority SIP trunk dials lead. Silero VAD discriminates voicemail vs live human within 80ms.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-2">03 / BANT AUDIT</div>
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">Adaptive Dialogue</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  Natural conversation extracts budget parameters, timelines, and decision criteria effortlessly.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-2">04 / DISPOSITION</div>
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">Warm Bridge or Lock</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  Live transfer to executive or calendar appointment booking with instant CRM synchronization.
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
                Stop Burning Ad Spend
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Capture 100% of Your Inbound Ad Pipeline
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Connect your Meta, Google, and website forms to DestiX AI telephony. Experience the conversion power of sub-45-second outreach.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission Qualification Engine
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
