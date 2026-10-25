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
  Phone,
  Layers,
  FileCheck,
} from "lucide-react";

export default function IndianNumbersGuidePage() {
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
          <span className="text-[#B88746] font-semibold">Telephony &amp; SIP</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
          <Phone className="size-3.5 text-[#B88746]" />
          <span className="font-semibold text-[#181614]">INDIAN TELEPHONY INFRASTRUCTURE</span>
        </div>

        <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-8">
          Indian Phone Numbers for AI Voice Agents:{" "}
          <span className="italic text-[#B88746]">A Practical Guide.</span>
        </h1>

        {/* Quick Answer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-sm mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B88746] font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="size-4" />
            <span>HOW TO GET A WORKING +91 NUMBER FOR AI</span>
          </div>
          <p className="text-base sm:text-lg text-[#181614] leading-relaxed">
            The biggest roadblock Indian agencies face is connecting an AI agent to an actual Indian phone number. Western SIP aggregators often fail due to Indian Department of Telecommunications (DoT) routing policies. The optimal route for production in India is provisioning a <strong>Virtual Landline DID (011/0124/022)</strong> or a <strong>10-digit virtual mobile SIP trunk</strong> through licensed Indian carriers connected directly via SIP URI into your conversational backend.
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none text-base sm:text-lg text-[#4A443B] leading-relaxed space-y-8 mb-16">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            1. Why US Phone Numbers Destroy Conversion in India
          </h2>
          <p>
            When an Indian prospective lead sees a call coming from a +1 (US) or +44 (UK) area code, Truecaller labels it as spam, and answer rates drop to under 4%. To achieve 65%+ answer rates on speed-to-lead campaigns, your AI must present a clean domestic Indian caller ID (+91).
          </p>

          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            2. The Three Indian Number Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose my-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1]">
              <span className="text-xs font-mono text-[#B88746] font-semibold block mb-1">TYPE 01</span>
              <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">Virtual Mobile (+91 9xxx)</h3>
              <p className="text-xs text-[#6B655C] leading-relaxed">Best for outbound speed-to-lead ad callbacks. Maximum answer rate on Indian smartphones.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1]">
              <span className="text-xs font-mono text-[#B88746] font-semibold block mb-1">TYPE 02</span>
              <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">Local Landline DID (011/0124)</h3>
              <p className="text-xs text-[#6B655C] leading-relaxed">Best for Delhi/Gurugram clinics, law firms, and real estate developer front desks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1]">
              <span className="text-xs font-mono text-[#B88746] font-semibold block mb-1">TYPE 03</span>
              <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">Toll-Free (1800)</h3>
              <p className="text-xs text-[#6B655C] leading-relaxed">Best for pan-India healthcare, education, and institutional customer support lines.</p>
            </div>
          </div>

          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            3. How DestiX AI Bridges Indian Carrier Telephony
          </h2>
          <p>
            DestiX AI eliminates the technical headache of KYC verification, carrier interconnection, and SIP trunk mapping. When you commission a voice agent with DestiX AI, we provision and verify your domestic Indian carrier trunk as part of our turnkey deployment.
          </p>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] text-center flex flex-col items-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Provision Indian Carrier Numbers for Your AI
          </h2>
          <p className="text-base text-[#6B655C] max-w-xl mb-8">
            Consult with Ayush Meena to configure a compliant +91 carrier bridge for your clinic, brokerage, or agency.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all shadow-md group"
          >
            <span>Book 30-Min Telephony Session</span>
            <ArrowUpRight className="size-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </article>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
