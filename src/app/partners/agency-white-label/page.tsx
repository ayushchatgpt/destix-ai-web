"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Users2,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";

export default function AgencyWhiteLabelPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const benefits = [
    {
      title: "100% White-Label Execution",
      desc: "We build, host, and tune the conversational telephony under your brand name or as your dedicated technical execution partner. Your client never knows we exist.",
      metric: "100% Ghost",
      tag: "BRAND PRESERVATION",
    },
    {
      title: "Protect Client ROAS & Ad Spend",
      desc: "Stop losing leads on your Meta and Google ad campaigns to slow client callbacks. Our voice agents call inbound leads in under 45 seconds, instantly boosting client ROAS.",
      metric: "+35% Lift",
      tag: "PERFORMANCE MULTIPLIER",
    },
    {
      title: "25% to 35% Recurring Monthly Margin",
      desc: "You set the retail pricing for your clients. We charge you a wholesale build and maintenance fee, leaving you with healthy recurring monthly margin.",
      metric: "25-35%",
      tag: "REVENUE EXPANSION",
    },
    {
      title: "Zero Headcount or Engineering Hassle",
      desc: "No need to hire prompt engineers, Python developers, or telephony specialists. Ayush Meena and the DestiX engineering team handle the entire build and uptime SLA.",
      metric: "Zero Ops",
      tag: "ENGINEERING ARM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Users2 className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">AGENCY WHITE-LABEL &amp; GHOST PARTNER PROGRAM</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Resell AI Voice Agents Under{" "}
            <span className="italic text-[#B88746]">Your Agency Brand.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B655C] leading-relaxed max-w-2xl mb-8">
            You run the ad campaigns. DestiX AI builds the autonomous voice agents. Keep 100% of the client relationship, protect client ad spend with sub-45s speed to lead, and unlock recurring technical retainer margins.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all shadow-md group"
            >
              <span>Apply for Agency White-Label Partnership</span>
              <ArrowUpRight className="size-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="mailto:ayushmeenadestixai@gmail.com?subject=Agency%20White-Label%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#EFECE4] border border-[#E2DDD1] text-xs font-mono text-[#181614] transition-colors"
            >
              <span>Direct Inquiries: ayushmeenadestixai@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 border-t border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-[#B88746] font-semibold">
                      {benefit.tag}
                    </span>
                    <span className="font-['Instrument_Serif'] text-2xl text-[#181614] italic">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6B655C] leading-relaxed">
                    {benefit.desc}
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
