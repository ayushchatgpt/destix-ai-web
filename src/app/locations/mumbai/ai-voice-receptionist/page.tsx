"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Stethoscope,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Users,
} from "lucide-react";

export default function MumbaiVoiceReceptionistPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const pillars = [
    {
      title: "Confidential Patient Inbound Triage",
      desc: "Answers callers in under two rings, identifies treatment interest (cosmetic surgery, dermatology, specialized dental), and books consultation slots.",
      metric: "< 2 Rings",
      tag: "PATIENT INTAKE",
    },
    {
      title: "Zero Missed After-Hours Calls",
      desc: "When patients call past 8 PM or on weekends, DestiX voice agents answer with flawless warmth, eliminating lost revenue from off-hours inquiries.",
      metric: "24/7/365",
      tag: "AVAILABILITY",
    },
    {
      title: "Direct EMR & Calendar Booking",
      desc: "Schedules consultations directly into your clinic management software and triggers automated WhatsApp reminder sequences to reduce no-show rates.",
      metric: "< 15% No-Shows",
      tag: "ATTENDANCE BOOSTER",
    },
    {
      title: "Bilingual English & Hindi Cadence",
      desc: "Tuned specifically for South Mumbai and Bandra clinics with polite, composed conversational speech that reflects the premium stature of your practice.",
      metric: "Sub-450ms",
      tag: "HUMAN CADENCE",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <MapPin className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">MUMBAI • BANDRA • SOUTH MUMBAI • JUHU</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Receptionists in{" "}
            <span className="italic text-[#B88746]">Mumbai.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Engineered by Ayush Meena. DestiX AI installs autonomous conversational telephony systems that handle confidential patient intake, triage consultations, and eliminate missed clinic calls 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule Mumbai Clinical Consultation</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/#voice-console"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Listen to Clinic Voice Simulation
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Clinical Telephony Standards
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Engineered for High-Ticket Patient Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#181614]">
                    {p.metric}
                  </span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {p.desc}
                </p>
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
