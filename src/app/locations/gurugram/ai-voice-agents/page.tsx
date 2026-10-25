"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Building2,
  TrendingUp,
} from "lucide-react";

export default function GurugramVoiceAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const pillars = [
    {
      title: "Sub-45s Speed to Lead for Golf Course Rd Builders",
      desc: "Intercepts inbound inquiries from Meta, Google, and 99acres ad campaigns in under 45 seconds while prospective buyers are still looking at their screens.",
      metric: "< 45s",
      tag: "SPEED TO LEAD",
    },
    {
      title: "Fluent Hinglish & Corporate English Parity",
      desc: "Trained on corporate and North Indian colloquial speech patterns, handling complex buyer qualification with zero robotic friction.",
      metric: "Sub-450ms",
      tag: "VOICE PARITY",
    },
    {
      title: "Automated Site Visit Bookings into Sales Calendars",
      desc: "Directly qualifies buyer budgets (₹3 Cr – ₹25 Cr+), filters out window shoppers, and books verified walkthroughs for senior sales reps.",
      metric: "Direct Sync",
      tag: "CALENDAR PASS",
    },
    {
      title: "Instant WhatsApp Dossier & Location Pin Pass",
      desc: "Delivers an instant WhatsApp confirmation, brochure PDF, and Google Maps pin to the caller within 3 seconds of call completion.",
      metric: "Instant",
      tag: "WHATSAPP GATE",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Building2 className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">GURUGRAM • CYBER CITY • GOLF COURSE ROAD</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Autonomous Voice Agents in{" "}
            <span className="italic text-[#B88746]">Gurugram.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B655C] leading-relaxed max-w-2xl mb-8">
            Stop losing luxury property and high-ticket service leads to voicemail and slow callbacks. DestiX AI engineers autonomous AI voice agents that call back inbound ad leads in under 45 seconds with sub-500ms voice parity.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all shadow-md group"
            >
              <span>Deploy Gurugram Voice Infrastructure</span>
              <ArrowUpRight className="size-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/blog/best-ai-voice-agents-agency-delhi-ncr"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#EFECE4] border border-[#E2DDD1] text-xs font-mono text-[#181614] transition-colors"
            >
              <span>View 2026 Latency Benchmarks</span>
              <ArrowUpRight className="size-3.5 text-[#B88746]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 border-t border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-[#B88746] font-semibold">
                      {pillar.tag}
                    </span>
                    <span className="font-['Instrument_Serif'] text-2xl text-[#181614] italic">
                      {pillar.metric}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6B655C] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
