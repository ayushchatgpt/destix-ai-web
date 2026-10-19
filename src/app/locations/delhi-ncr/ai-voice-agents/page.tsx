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
  Users,
  Building,
} from "lucide-react";

export default function DelhiVoiceAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const pillars = [
    {
      title: "Fluent Hinglish & Dual-Dialect Support",
      desc: "Our conversational engines handle code-switching between professional English and natural colloquial Hindi flawlessly, accommodating Delhi NCR's diverse caller base.",
      metric: "Sub-400ms",
      tag: "VOICE PARITY",
    },
    {
      title: "Immediate Lead Capture in Under 45 Seconds",
      desc: "When high-ticket buyers call from Google Ads, Meta campaigns, or 99acres listings, DestiX voice agents answer on ring two before they dial your competitors.",
      metric: "< 45s",
      tag: "SPEED TO LEAD",
    },
    {
      title: "Direct WhatsApp & CRM Booking Pass",
      desc: "Synchronizes call summaries, caller budget, and qualifying answers straight into your CRM while triggering a instant WhatsApp verification message with executive details.",
      metric: "100%",
      tag: "DATA AUTOMATION",
    },
    {
      title: "Carrier Redundancy with Indian SIP Trunks",
      desc: "Provisioned on low-latency Indian telecom carrier bridges ensuring crisp acoustic clarity, sub-50ms packet transmission, and zero dropped calls.",
      metric: "99.98%",
      tag: "UPTIME SLA",
    },
  ];

  const useCases = [
    {
      title: "Real Estate Developers & Brokerages",
      desc: "Instant pre-qualification for luxury apartments in Golf Course Road, Cyber City, and Sector 150 Noida. Books site visits directly into sales reps' calendars.",
    },
    {
      title: "High-Ticket Aesthetic & Dental Clinics",
      desc: "Confidential appointment screening for cosmetic surgery, hair restoration, and specialized dental procedures across South Delhi and Gurugram.",
    },
    {
      title: "Enterprise B2B & Wealth Management",
      desc: "Screens institutional investors and corporate clients, routing high-net-worth inquiries directly to managing partners.",
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
            <span className="font-semibold text-[#181614]">DELHI NCR • GURUGRAM • NOIDA</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Autonomous Voice Agents in{" "}
            <span className="italic text-[#B88746]">Delhi NCR.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Engineered by Ayush Meena at DestiX AI. We deploy enterprise-grade AI telephony systems that answer inbound calls under 2 rings, qualify buyer budgets, and automate appointments 24/7 across Northern India.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule Delhi NCR Technical Briefing</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/#voice-console"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Listen to Live Telephony Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Engineered for Enterprise Performance
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Why Delhi NCR Businesses Choose DestiX AI
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

      {/* Localized Industry Use Cases */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Active Verticals
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
            Deployed Across Premier Industries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs"
            >
              <CheckCircle2 className="size-6 text-[#B88746] mb-4" />
              <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                {uc.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                {uc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
