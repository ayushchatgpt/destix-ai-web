"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  PhoneCall,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  BadgeIndianRupee,
  TrendingDown,
  Calculator,
} from "lucide-react";

export default function PricingGuidePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <article className="pt-36 sm:pt-44 pb-20 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8C8275] mb-6">
          <Link href="/blog" className="hover:text-[#B88746] transition-colors">
            Dispatches
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-[#B88746] font-semibold">Unit Economics</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
          <BadgeIndianRupee className="size-3.5 text-[#B88746]" />
          <span className="font-semibold text-[#181614]">2026 PRICING AUDIT</span>
        </div>

        <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-8">
          Managed AI Voice Receptionist Pricing in India:{" "}
          <span className="italic text-[#B88746]">Costs, Telephony &amp; ROI.</span>
        </h1>

        {/* Quick Answer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-sm mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B88746] font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="size-4" />
            <span>TRANSPARENT COST BREAKDOWN</span>
          </div>
          <p className="text-base sm:text-lg text-[#181614] leading-relaxed">
            In India, commercial AI voice agents typically cost between <strong>₹35,000 and ₹1,50,000 for custom technical buildout</strong>, followed by monthly maintenance retainers and low wholesale usage rates of <strong>₹4 to ₹8 per conversation minute</strong>. Compared to maintaining a 24/7 human receptionist desk (costing ₹50,000 to ₹90,000 every single month with turnover), an autonomous AI agent delivers an immediate 60% to 75% operational cost reduction while guaranteeing sub-45s speed to lead.
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none text-base sm:text-lg text-[#4A443B] leading-relaxed space-y-8 mb-16">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            1. The Three Cost Components
          </h2>
          <div className="space-y-4 not-prose my-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['Instrument_Serif'] text-2xl text-[#181614]">A. Custom Engineering &amp; SIP Trunk Provisioning</span>
                <span className="text-xs font-mono text-[#B88746] font-bold">₹35,000 – ₹1,50,000 (One-Time)</span>
              </div>
              <p className="text-sm text-[#6B655C] leading-relaxed">Includes Indian SIP carrier interconnection, prompt tuning, CRM database hooks, WhatsApp gate pass integration, and sub-500ms voice parity calibration.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['Instrument_Serif'] text-2xl text-[#181614]">B. Telephony &amp; LLM Inference Pass-Through</span>
                <span className="text-xs font-mono text-[#B88746] font-bold">~₹4 – ₹8 per minute</span>
              </div>
              <p className="text-sm text-[#6B655C] leading-relaxed">Pass-through wholesale costs for real-time speech-to-text, ultra-low latency Groq LLM inference, and Cartesia audio synthesis.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['Instrument_Serif'] text-2xl text-[#181614]">C. Managed Retainer &amp; Prompt Evolution</span>
                <span className="text-xs font-mono text-[#B88746] font-bold">Monthly SLA</span>
              </div>
              <p className="text-sm text-[#6B655C] leading-relaxed">Ongoing prompt optimization, objection handling updates, carrier uptime monitoring, and weekly call summary reporting.</p>
            </div>
          </div>

          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            2. Self-Serve SaaS vs. Done-For-You Studio
          </h2>
          <p>
            Self-serve platforms like Retell or Vapi seem cheaper upfront but require your in-house team to spend 60+ hours debugging carrier drops, Indian phonetics, and webhook failures. DestiX AI provides complete turnkey delivery: you give us your qualification script, and within 72 hours, your live phone number answers with human voice parity.
          </p>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] text-center flex flex-col items-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Get an Exact Unit Economics Quote
          </h2>
          <p className="text-base text-[#6B655C] max-w-xl mb-8">
            Let us calculate your exact cost-per-lead and monthly savings. Book a 30-minute diagnostic session with Ayush Meena.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all shadow-md group"
          >
            <span>Book Unit Economics Consultation</span>
            <ArrowUpRight className="size-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </article>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
