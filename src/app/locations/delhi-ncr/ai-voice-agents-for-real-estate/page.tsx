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
  Building,
} from "lucide-react";

export default function RealEstateVoiceAgentPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const capabilities = [
    {
      title: "Sub-45s Speed-to-Lead from Ad Campaigns",
      desc: "When high-ticket buyers submit enquiries on Meta ads, Google ads, or 99acres, the voice agent calls within 45 seconds while buyer intent is at its peak.",
      metric: "< 45s",
      tag: "SPEED TO LEAD",
    },
    {
      title: "Budget & Unit Size Pre-Qualification",
      desc: "Screens for configuration (3BHK / 4BHK / Penthouse), financing readiness, and timeframe for Gurugram (Golf Course Rd, Dwarka Exp), Noida, and South Delhi.",
      metric: "100%",
      tag: "QUALIFICATION",
    },
    {
      title: "Automated Site Visit Scheduling",
      desc: "Books property walkthroughs directly into your senior sales reps' calendars and sends location GPS coordinates via instant WhatsApp pass.",
      metric: "Direct Sync",
      tag: "SITE VISITS",
    },
    {
      title: "Zero Junk Leads for Your Sales Floor",
      desc: "Filters out window shoppers, brokers, and wrong numbers so your closers spend 100% of their time talking to qualified, high-intent buyers.",
      metric: "+35% Close",
      tag: "EFFICIENCY",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Building className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">REAL ESTATE • DEVELOPERS • DELHI NCR</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Agents for{" "}
            <span className="italic text-[#B88746]">Real Estate in Delhi NCR.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B655C] leading-relaxed max-w-2xl mb-8">
            Stop losing luxury property leads to slow callbacks. DestiX AI deploys autonomous voice agents that call back inbound real estate enquiries in under 45 seconds, qualify buyer budgets, and book site visits automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all shadow-md group"
            >
              <span>Deploy Real Estate Voice Infrastructure</span>
              <ArrowUpRight className="size-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/locations/delhi-ncr/ai-voice-agents"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#EFECE4] border border-[#E2DDD1] text-xs font-mono text-[#181614] transition-colors"
            >
              <MapPin className="size-3.5 text-[#B88746]" />
              <span>All Delhi NCR Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 border-t border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-[#B88746] font-semibold">
                      {item.tag}
                    </span>
                    <span className="font-['Instrument_Serif'] text-2xl text-[#181614] italic">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6B655C] leading-relaxed">
                    {item.desc}
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
