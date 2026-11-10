"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import VoiceDemoConsole from "@/components/VoiceDemoConsole";
import {
  PhoneCall,
  CheckCircle2,
  Zap,
  Languages,
  ShieldAlert,
  Server,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Clock,
} from "lucide-react";

export default function ServicesVoiceAgentsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const architectureLayers = [
    {
      num: "01",
      title: "Telephony Carrier & SIP Trunking",
      desc: "Direct integration with Tier-1 telecom interconnects (Tata Tele, Airtel, Twilio, Exotel) with multi-region domestic redundancy across India, UAE, and North America. Sub-50ms packet delivery with zero jitter.",
      icon: Server,
    },
    {
      num: "02",
      title: "Speech-to-Speech Realtime Engine",
      desc: "Ultra-low latency streaming voice architecture. Turn-taking threshold tuned to 340ms, eliminating robotic pauses and awkward over-talk interruptions on cellular networks.",
      icon: Zap,
    },
    {
      num: "03",
      title: "Multi-Dialect Accent & Tone Calibration",
      desc: "Bilingual English and Hindi fluency with natural Hinglish code-switching. Callers experience authentic colloquial tonality without synthesized robotic cues.",
      icon: Languages,
    },
    {
      num: "04",
      title: "Deterministic Guardrails & Escalation",
      desc: "Strict adherence to company compliance and boundary guardrails. Immediate warm SIP transfer to human closers or instant WhatsApp dispatch on high-intent signals.",
      icon: ShieldAlert,
    },
  ];

  const benchmarks = [
    { metric: "< 350ms", label: "End-to-End Voice Latency", note: "vs 1,200ms industry average" },
    { metric: "99.8%", label: "Carrier Connection Uptime", note: "Multi-carrier redundant failover" },
    { metric: "< 45s", label: "Speed to Lead Outbound Dial", note: "Instant CRM webhook trigger" },
    { metric: "100%", label: "Client Code Ownership", note: "Zero SaaS seat licenses or lock-in" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614] font-sans antialiased">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/voice-agents" className="hover:text-[#181614] transition-colors">Voice Agents</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">Telephony Infrastructure</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD1] text-[10px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-4 shadow-2xs">
            <PhoneCall className="w-3 h-3 text-[#B88746]" />
            <span>TELEPHONY ARCHITECTURE // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] tracking-tight leading-[1.08] mb-6">
            Autonomous voice agents that sound <br />
            <span className="italic text-[#B88746]">indistinguishable from human closers.</span>
          </h1>
          <p className="text-[#55514B] font-['Plus_Jakarta_Sans'] text-base sm:text-lg max-w-3xl leading-relaxed">
            Eliminate robotic delays and awkward interruptions. We engineer custom enterprise voice systems with sub-350ms turn-taking latency, natural Hinglish fluency, and instant CRM calendar synchronization.
          </p>
        </header>

        {/* Benchmarks Strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {benchmarks.map((b, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs flex flex-col justify-between"
            >
              <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl font-bold text-[#181614] mb-1">
                {b.metric}
              </div>
              <div>
                <p className="text-xs font-semibold text-[#181614] font-['Plus_Jakarta_Sans']">
                  {b.label}
                </p>
                <p className="text-[10px] font-mono text-[#888277] mt-0.5">{b.note}</p>
              </div>
            </div>
          ))}
        </section>

        {/* 4 Architecture Layers */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
              // TELEPHONY ARCHITECTURE
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              The 4-Layer Low-Latency Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectureLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#B88746]/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-[#EDE8DC] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#B88746]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#B88746]">
                        LAYER {layer.num}
                      </span>
                    </div>
                    <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3">
                      {layer.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Audio Console Preview */}
        <section className="mb-16">
          <VoiceDemoConsole onOpenBooking={() => setIsBookingOpen(true)} />
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#B88746] text-center shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-4">
            SCOPED ENGINEERING SPRINT
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Deploy an Autonomous Voice Agent in 14 Days
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto mb-8 leading-relaxed">
            Includes domestic Indian phone numbers, TRAI/DLT registration, custom prompt calibration, and direct CRM synchronization with a strict 5x Hurdle Rate financial guarantee.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all duration-300 shadow-sm"
            >
              Book 30-Min Diagnostic Call
            </button>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300"
            >
              Review Pricing &amp; Economics
            </Link>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="Autonomous AI Voice Agent Deployment"
      />
    </div>
  );
}
