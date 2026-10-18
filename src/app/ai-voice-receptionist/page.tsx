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
  MessageSquare,
  Users,
  Sparkles,
} from "lucide-react";

export default function VoiceReceptionistPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const pillars = [
    {
      title: "Under-Two-Ring Inbound Pickup",
      desc: "Zero wait queues or voicemail graveyards. Calls are answered instantly in natural human conversational cadence across English, Hindi, and regional accents.",
      metric: "< 2 Rings",
      tag: "SPEED TO HELLO",
    },
    {
      title: "High-Ticket Lead Qualification",
      desc: "Screens callers for budget, purchasing timeline, project scope, and urgency before routing high-intent buyers straight to senior partners or booking their calendar.",
      metric: "100%",
      tag: "CALL QUALIFICATION",
    },
    {
      title: "Unlimited Concurrent Callers",
      desc: "Whether you receive 5 calls a day or 50 calls simultaneously during peak ad campaigns, our carrier bridge handles infinite concurrency with zero degradation.",
      metric: "Infinite",
      tag: "CONCURRENCY SLA",
    },
    {
      title: "Instant CRM & WhatsApp Sync",
      desc: "Transcribes the conversation, logs an executive summary into HubSpot, Salesforce, or GoHighLevel, and triggers an immediate WhatsApp confirmation to the caller.",
      metric: "Instant",
      tag: "AUTOMATED CRM PASS",
    },
  ];

  const faqs = [
    {
      q: "What makes this different from an offshore call center or answering service?",
      a: "Human call centers have high turnover, variable tone, hold times, and cost thousands per seat. A DestiX AI Voice Receptionist never takes a day off, answers in under two rings with flawless composure, and adheres 100% to your firm's compliance and qualification logic.",
    },
    {
      q: "Can the AI Voice Receptionist handle angry or interrupted callers?",
      a: "Yes. Our sub-500ms latency telephony pipeline includes active acoustic turn-taking. If a caller interrupts, the agent immediately pauses, acknowledges the input politely, and responds with composure.",
    },
    {
      q: "Which industries benefit most from an AI Voice Receptionist?",
      a: "Luxury real estate brokerages, private dental & medical practices, legal counsel, wealth management advisory offices, and boutique hospitality where every missed call represents $10,000+ in lost deal value.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-20 border-b border-[#E2DDD1] bg-architectural-grid relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
              DESTIX AI RECEPTIONIST INFRASTRUCTURE
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
              The AI Voice Receptionist that{" "}
              <span className="italic text-[#B88746]">never misses</span> a $50k deal.
            </h1>

            <p className="text-lg sm:text-xl text-[#55514B] leading-relaxed mb-10 font-normal">
              An enterprise-grade autonomous telephony front desk. Answers inbound calls in under two rings, screens high-net-worth buyer intent, answers FAQs, and books qualified appointments 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                data-cursor-text="BOOK"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm group"
              >
                <span>Deploy AI Receptionist</span>
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>

              <Link
                href="/voice-agents"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#EDE8DC] border border-[#E2DDD1] text-[#181614] text-sm font-semibold transition-all duration-300"
              >
                <span>Audition Voice Console</span>
                <ArrowUpRight className="w-4 h-4 text-[#888277]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-24 border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#888277] mb-2 font-semibold">
              SPECIFICATION // PERFORMANCE BENCHMARKS
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
              Zero hold times. Zero missed appointments.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-10 flex flex-col justify-between hover:border-[#B88746]/60 transition-all duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2DDD1]">
                    <span className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#B88746] font-semibold uppercase">
                      {p.tag}
                    </span>
                    <span className="font-['Instrument_Serif'] text-3xl font-bold text-[#181614]">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#55514B] leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Intent SEO FAQs */}
      <section className="py-24 border-b border-[#E2DDD1] bg-[#EDE8DC]/30">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#888277] uppercase mb-2 font-semibold">
              FREQUENTLY ANSWERED
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
              Everything you need to know about AI Voice Receptionists.
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2DDD1] p-7 shadow-xs"
              >
                <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-lg text-[#181614] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#55514B] leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} initialService="AI Voice Receptionist Deployment" />
    </div>
  );
}
