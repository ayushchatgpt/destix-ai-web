"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Building2,
  Calendar,
  Zap,
  PhoneCall,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function RealEstateIndustryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const realEstateFeatures = [
    {
      title: "Sub-45s Speed to Lead on Portal Inquiries",
      desc: "Connects directly to PropertyFinder, Bayut, Zillow, MagicBricks, and 99acres webhooks. Initiates outbound calls while the buyer is still reviewing floor plans.",
      icon: Zap,
      tag: "4X CONVERSION",
    },
    {
      title: "Automated Site Visit Scheduling",
      desc: "Checks sales gallery and mock-up apartment availability in real-time. Locks appointment slots and dispatches location maps and gate passes over WhatsApp.",
      icon: Calendar,
      tag: "DIRECT SITE LOCK",
    },
    {
      title: "Budget & Payment Plan Qualification",
      desc: "Naturally probes buyer readiness: cash vs mortgage, 50/50 payment plans, handover timelines, and investor vs end-user status before alerting sales brokers.",
      icon: TrendingUp,
      tag: "BANT FILTERING",
    },
    {
      title: "Multilingual Dialects (English, Hindi, Arabic)",
      desc: "Seamless switching across colloquial North Indian Hinglish, Gulf-accented English, and Arabic to communicate fluently with global high-net-worth investors.",
      icon: PhoneCall,
      tag: "MULTILINGUAL",
    },
    {
      title: "Enterprise CRM Bidirectional Sync",
      desc: "Full automated data push into Salesforce Health/Sales Cloud, HubSpot, LeadSquared, and GoHighLevel with audio recordings and call transcript summaries.",
      icon: Building2,
      tag: "SUB-2S SYNC",
    },
    {
      title: "DND & Local Carrier Compliance",
      desc: "Enforces TRAI scrub lists, UAE TDRA telemarketing guidelines, and FCC STIR/SHAKEN caller ID standards to maintain flawless line reputation.",
      icon: ShieldCheck,
      tag: "100% COMPLIANT",
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
            <span className="text-[#7D7871]">Industries</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Real Estate</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Luxury Real Estate Telephony
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              AI Voice Agents for Real Estate Developers & Brokerages
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              From Dubai Marina to Manhattan and Gurgaon. DestiX AI deploys sub-435ms voice telephony agents that contact inbound property buyers in under 45 seconds, filter serious capital from casual browsers, and lock confirmed site visits.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy Real Estate Agent</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/locations/dubai/real-estate-ai-voice-agents"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Explore Dubai Practice
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <feat.icon className="w-5 h-5" />
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

        {/* Proven Outcome */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Audited Case Study
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-4">
              Alliance Capital Properties Dubai (AED 85M+ Qualified Pipeline)
            </h2>
            <p className="text-sm text-[#5A554E] leading-relaxed max-w-3xl mb-6">
              Alliance Capital Properties deployed DestiX AI across off-plan luxury villa developments in Dubai Hills and Palm Jumeirah. Inbound leads from Meta ads were phoned in under 42 seconds, qualifying buyer liquidity and booking over 140 on-site viewings in the first 60 days.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-serif text-[#1A1817]">42 sec</div>
                <div className="text-xs font-mono text-[#8F6426]">Speed to Lead</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#1A1817]">140+</div>
                <div className="text-xs font-mono text-[#8F6426]">Site Visits Booked</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#1A1817]">AED 85M+</div>
                <div className="text-xs font-mono text-[#8F6426]">Pipeline Unlocked</div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Real Estate Telephony
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Capture Every High-Net-Worth Property Lead
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Stop leaving prime real estate inquiries unanswered. Commission DestiX AI voice telephony for your brokerage or development project.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission Real Estate Agent
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
