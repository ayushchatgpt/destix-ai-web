"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Building2,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  Award,
  Plus,
  Minus,
} from "lucide-react";

export default function GurgaonNoidaCallingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const corridors = [
    {
      corridor: "Gurgaon Golf Course Road & Extension",
      focus: "Ultra-Luxury High-Rise & Penthouses (₹8 Cr to ₹35 Cr+)",
      sla: "Screening HNW Executives & Business Families",
      metric: "< 45s Callback",
    },
    {
      corridor: "Dwarka Expressway & New Gurgaon",
      focus: "High-Velocity Gated Communities (₹2.5 Cr to ₹7 Cr)",
      sla: "End-User vs Investor Allocation & Loan Pre-Approval",
      metric: "Instant Lead Sync",
    },
    {
      corridor: "Noida Expressway & Sector 150",
      focus: "Sports City & Low-Density Luxury Towers (₹2 Cr to ₹6 Cr)",
      sla: "Site Visit Confirmation & WhatsApp Gate Passes",
      metric: "100% Calendar Pass",
    },
    {
      corridor: "DLF Cyber City & Commercial Hubs",
      focus: "Grade-A Commercial Office Leasing & High-Street Retail",
      sla: "Floor Plate & Corporate Fit-Out Screening",
      metric: "B2B Qualification",
    },
  ];

  const faqs = [
    {
      q: "Why do Gurgaon and Noida builders need an AI calling system?",
      a: "Top developers and channel partners in Gurgaon and Noida spend lakhs weekly on Meta, Google, 99acres, and Housing.com ads. However, leads generated at night sit unattended for 14 hours. By the time human telecallers call the next day, contact rates drop below 15%. DestiX AI calls in under 45 seconds while the buyer is still looking at the floor plan.",
    },
    {
      q: "Does the voice agent speak in natural North Indian Hinglish?",
      a: "Yes. Our models are trained specifically on Delhi NCR vernacular speech, smoothly navigating switches between formal English and conversational Hindi without awkward pauses or confusion.",
    },
    {
      q: "Can the AI filter out brokers and channel partners?",
      a: "Yes. The qualification logic automatically identifies whether the caller is a genuine property buyer or an external broker seeking commission sharing, routing them appropriately.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <MapPin className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              GURGAON GOLF COURSE RD &bull; DWARKA EXP &bull; NOIDA SEC 150
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Real Estate AI Calling System for{" "}
            <span className="italic text-[#B88746]">
              Builders in Gurgaon &amp; Noida.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Engineered by Ayush Meena. DestiX AI deploys autonomous AI telecallers for property builders, developers, and prime channel partners in Gurgaon and Noida that dial portal ad leads in under 45 seconds, qualify buyer budgets, and schedule site tours 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule Builder Architecture Audit</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/#voice-console"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Audition Voice Parity Live
            </Link>
          </div>
        </div>

        {/* Portal Integration Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Zap className="size-4 text-[#B88746]" />
            <span>Instant Portal Webhook Ingest &bull; 99acres &bull; MagicBricks &bull; Meta Ads</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
            Stop Losing ₹4 Cr+ Leads to Slow Human Telecalling
          </h2>
          <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
            When a buyer submits an inquiry on 99acres or MagicBricks for a high-end apartment in Gurgaon or Noida, DestiX AI triggers an automated telephone call in <strong>under 45 seconds</strong>. If they pick up, our natural Hinglish voice model answers project questions, checks their budget, and locks in a site visit directly on your closers&apos; calendars.
          </p>
        </div>
      </section>

      {/* Corridors Grid */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Micro-Market Deployment
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Calibrated for Prime NCR Property Corridors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {corridors.map((c, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                      {c.metric}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                    {c.corridor}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
                    <strong>Focus:</strong> {c.focus}
                  </p>
                  <p className="text-xs text-[#888277] font-['Plus_Jakarta_Sans']">
                    <strong>Qualification:</strong> {c.sla}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2DDD1]/60 flex items-center gap-1.5 text-xs font-semibold text-[#181614]">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <span>Verified Integration</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            Builder Telephony <span className="italic text-[#B88746]">FAQ.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2DDD1] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-['Instrument_Serif'] text-2xl text-[#181614] group-hover:text-[#B88746] transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center shrink-0 text-[#181614]">
                    {isOpen ? <Minus className="w-4 h-4 text-[#B88746]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
