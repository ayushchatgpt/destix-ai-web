"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import VoiceDemoConsole from "@/components/VoiceDemoConsole";
import {
  PhoneCall,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Calendar,
  Users,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function AiReceptionistServicePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const pillars = [
    {
      title: "Sub-Two-Ring Inbound Answering",
      desc: "Zero callers placed on hold. Every call answered immediately 24 hours a day, 365 days a year—capturing evening, weekend, and holiday inquiries that competitors lose.",
      tag: "ZERO HOLD TIME",
      metric: "< 2 Rings",
    },
    {
      title: "Direct Calendar & EHR/CRM Booking",
      desc: "Books consultations directly into Google Calendar, Outlook, Cal.com, or specialized practice software, followed by automated WhatsApp confirmation passes.",
      tag: "AUTOMATED BOOKING",
      metric: "100% Automated",
    },
    {
      title: "Warm Human Staff Transfer",
      desc: "Intelligently routes critical emergencies, VIP investors, or specialized inquiries directly to staff members with pre-briefed caller context.",
      tag: "SMART ESCALATION",
      metric: "Zero Friction",
    },
    {
      title: "Sub-435ms Voice Parity",
      desc: "Natural human conversational timing with real-time interruption handling. Callers experience a polished, respectful professional executive receptionist.",
      tag: "HUMAN CADENCE",
      metric: "435ms Latency",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/solutions" className="hover:text-[#181614] transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">AI Voice Receptionist</span>
        </nav>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-6 shadow-2xs">
            <PhoneCall className="size-3.5 text-[#B88746]" />
            <span>24/7 INBOUND TELEPHONY // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Autonomous 24/7{" "}
            <span className="italic text-[#B88746]">AI Voice Receptionist.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-8">
            Engineered by Principal AI Systems Architect Ayush Meena. Replace busy signals and lost callers with a human-sounding voice receptionist that answers under two rings, qualifies high-ticket buyer intent, and books appointments 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule Receptionist Consultation</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Inspect Transparent Unit Economics
            </Link>
          </div>
        </header>

        {/* Live Audio Console */}
        <div className="mb-20">
          <VoiceDemoConsole />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                    {pillar.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#181614]">{pillar.metric}</span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center gap-2 text-xs font-semibold text-[#181614]">
                <CheckCircle2 className="size-4 text-[#B88746]" />
                <span>Zero Missed Calls Guarantee</span>
              </div>
            </div>
          ))}
        </section>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-white mb-4">
            Never Miss Another Customer Call.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Deploy an autonomous AI voice receptionist that captures every high-ticket inquiry with human voice parity.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
          >
            Deploy AI Receptionist
          </button>
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}