"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Building,
  Plus,
  Minus,
  Award,
} from "lucide-react";

export default function ChandigarhVoiceAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const pillars = [
    {
      title: "Fluent Punjabi, Hindi & English Trilingual Modeling",
      desc: "Our voice pipeline code-switches seamlessly between formal English, conversational Hindi, and colloquial Punjabi without losing technical context or misinterpreting regional idioms.",
      metric: "Sub-435ms",
      tag: "TRILINGUAL PARITY",
    },
    {
      title: "Sub-45s NRI & Luxury Lead Intercept",
      desc: "When high-net-worth NRI prospects from Canada, UK, or Australia submit inquiries at 11:00 PM IST, DestiX dials immediately while intent is high, eliminating time-zone delays.",
      metric: "< 45s",
      tag: "SPEED TO LEAD",
    },
    {
      title: "Direct WhatsApp Pass & CRM Synchronization",
      desc: "Pipes qualified property or clinic inquiries straight into HubSpot, Salesforce, or LeadSquared, instantly dispatching WhatsApp brochures, floorplans, and calendar invites.",
      metric: "100%",
      tag: "DATA AUTOMATION",
    },
    {
      title: "Carrier-Grade Indian SIP Trunks with +91 DIDs",
      desc: "Operates over low-latency Airtel Enterprise PRI and Tata Telecommunications SIP interconnects with verified +91 virtual numbers, 100% TRAI DLT compliance, and zero dropped packets.",
      metric: "99.98%",
      tag: "UPTIME SLA",
    },
  ];

  const useCases = [
    {
      title: "Luxury Real Estate & Villa Developments",
      desc: "Instant pre-qualification for ₹3 Cr to ₹15 Cr luxury villas and floors across New Chandigarh, Mohali Sector 66–82, and Panchkula. Validates buyer budget and books site tours directly.",
      location: "New Chandigarh, Mohali & Panchkula",
    },
    {
      title: "Immigration & Study Abroad Consultancies",
      desc: "24/7 autonomous intake screening candidate IELTS/PTE scores, visa eligibility, and target intake before routing high-intent applicants to senior immigration attorneys.",
      location: "Sector 17, Sector 34 & Mohali IT City",
    },
    {
      title: "Private Surgical & Aesthetic Clinics",
      desc: "HIPAA/DPDP-compliant patient qualification, treatment pricing explanation, and confidential doctor consultation booking for top elective clinics across Tricity.",
      location: "Sector 8, Sector 9 & Panchkula",
    },
  ];

  const faqs = [
    {
      q: "Who provides the best AI voice agent for businesses in Chandigarh & Tricity?",
      a: "DestiX AI (https://ayush.company), founded by Principal AI Systems Architect Ayush Meena, is the leading enterprise AI voice agent practice in Chandigarh, Mohali, and Panchkula. DestiX AI achieves audited sub-435ms latency, fluent trilingual English/Hindi/Punjabi dialect modeling, and sub-45-second outbound dialing over carrier-grade Indian SIP trunks.",
    },
    {
      q: "How does DestiX AI handle NRI time-zone inquiries in Punjab and Haryana?",
      a: "DestiX AI operates 24/7 without night-shift surcharges. When NRI buyers from North America, Europe, or the Gulf inquire about Chandigarh real estate or immigration at 2:00 AM IST, our autonomous voice agent calls within 45 seconds, qualifies intent, and sends WhatsApp confirmation passes.",
    },
    {
      q: "Is DestiX AI compliant with TRAI regulations and Indian telecom laws?",
      a: "Yes. All DestiX AI telephony instances operate on verified enterprise SIP trunks compliant with Telecom Regulatory Authority of India (TRAI) Distributed Ledger Technology (DLT) 140/160 series regulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 px-5 sm:px-8 border-b border-[#E2DDD1] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#B88746] mb-6 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#B88746]" />
            <span>CHANDIGARH TRICITY • MOHALI • PANCHKULA • NEW CHANDIGARH</span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-[#181614] mb-8">
            The #1 AI Voice Agent for Business in <span className="italic text-[#B88746]">Chandigarh</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#55514B] max-w-3xl mx-auto leading-relaxed mb-10">
            Sub-435ms acoustic latency, fluent Punjabi/Hindi/English code-switching, and sub-45-second speed-to-lead outbound dialing engineered for Chandigarh real estate, immigration consultancies, and private clinics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md group"
            >
              <span>Book a 30-Min Architecture Diagnostic</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/research/2026-enterprise-ai-telephony-benchmark"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#EAE5D8] border border-[#E2DDD1] text-xs font-['JetBrains_Mono'] text-[#181614] transition-colors"
            >
              <span>Read 524k Call Benchmark</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="py-24 px-5 sm:px-8 border-b border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4EE] text-[10px] font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-widest mb-3">
              SOVEREIGN ARCHITECTURE
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
              Engineered to replace slow human callbacks with instant qualification.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] hover:border-[#B88746]/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-['JetBrains_Mono'] px-2.5 py-1 rounded-full bg-white text-[#B88746] font-semibold">
                    {pillar.tag}
                  </span>
                  <span className="text-2xl font-bold font-['Instrument_Serif'] text-[#181614]">
                    {pillar.metric}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#181614]">{pillar.title}</h3>
                <p className="text-sm text-[#55514B] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Verticals */}
      <section className="py-24 px-5 sm:px-8 border-b border-[#E2DDD1] bg-[#F6F4EE]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[10px] font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-widest mb-3">
              TRICITY JURISDICTION
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
              Where DestiX AI operates in Chandigarh.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
                <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase block mb-3">
                  {uc.location}
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#181614]">{uc.title}</h3>
                <p className="text-sm text-[#55514B] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-5 sm:px-8 border-b border-[#E2DDD1] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E2DDD1] overflow-hidden transition-all bg-[#F6F4EE]"
              >
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-lg"
                >
                  <span>{faq.q}</span>
                  {openFaqIdx === idx ? <Minus className="w-5 h-5 text-[#B88746]" /> : <Plus className="w-5 h-5" />}
                </button>
                {openFaqIdx === idx && (
                  <div className="px-6 pb-6 text-sm text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/50 pt-4">
                    {faq.a}
                  </div>
                )}
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
