"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  PhoneCall,
  Zap,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function AiCallingDelhiNcrPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const callingFeatures = [
    {
      title: "Sub-435ms Voice Latency",
      desc: "Instant conversational turn-taking without dead air or delays. Powered by streaming Silero VAD and low-latency Groq/Cartesia audio pipelines.",
      tag: "REAL-TIME PARITY",
    },
    {
      title: "Sub-45s Speed to Lead",
      desc: "Triggers instant phone calls within 45 seconds of a prospect submitting an ad form on Meta, Google, 99acres, or MagicBricks.",
      tag: "4X CONVERSIONS",
    },
    {
      title: "Fluent North Indian Hinglish",
      desc: "Effortless code-switching across Hindi, English, and urban NCR Hinglish, understanding colloquial phrasing and local accents natively.",
      tag: "COLLOQUIAL CODE-SWITCH",
    },
    {
      title: "TRAI & DLT Compliant Telephony",
      desc: "Direct enterprise interconnects with Tata Tele, Airtel PRI, and Exotel with verified +91 caller IDs and full regulatory compliance.",
      tag: "100% COMPLIANT",
    },
    {
      title: "Sub-2s Bi-Directional CRM Sync",
      desc: "Instant recording, call summary, transcript, and deal status updates pushed straight to Salesforce, HubSpot, Zoho, or LeadSquared.",
      tag: "ENTERPRISE SYNC",
    },
    {
      title: "Wholesale Carrier Economics",
      desc: "Pass-through carrier minutes with zero recurring platform markups. 100% client code and prompt IP ownership with a 5x Hurdle Rate ROI guarantee.",
      tag: "PASS-THROUGH MINS",
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
            <Link href="/locations/delhi-ncr/ai-voice-agents" className="hover:text-[#1A1817] transition-colors">
              Delhi NCR
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">AI Calling Software</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Delhi NCR Premier Telephony Studio
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              AI Calling Software & Autonomous Telephony in Delhi NCR
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              From Connaught Place to Golf Course Road and Noida Expressways. DestiX AI engineers high-performance AI calling pipelines with sub-435ms voice parity, sub-45s speed to lead, and authentic Hinglish fluency.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy AI Calling Pipeline</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/blog/best-ai-voice-agent-in-new-delhi"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Read 2026 Delhi Benchmark
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {callingFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <PhoneCall className="w-5 h-5" />
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
                Delhi NCR Telephony
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Automate Your Delhi NCR Calling Operations
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Connect your business to carrier-grade AI calling with sub-435ms voice latency and guaranteed 5x Hurdle Rate ROI.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission Calling System
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
