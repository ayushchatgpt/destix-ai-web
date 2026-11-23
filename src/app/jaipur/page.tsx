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

export default function JaipurVoiceAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const pillars = [
    {
      title: "Fluent Dual-Dialect Hindi & English Modeling",
      desc: "Code-switches naturally between polite royal Hindustani and Queen's English, handling regional accents, luxury hospitality inquiries, and wholesale buyer questions effortlessly.",
      metric: "Sub-435ms",
      tag: "VOICE PARITY",
    },
    {
      title: "Sub-45s Global Inquiry Intercept",
      desc: "When luxury travelers or B2B jewelry importers submit inquiries across US, UK, or European time zones, DestiX dials instantly to qualify requirements before interest cools.",
      metric: "< 45s",
      tag: "SPEED TO LEAD",
    },
    {
      title: "Direct WhatsApp & CRM Booking Engine",
      desc: "Synchronizes caller qualification, event dates, room block budgets, and requirements directly into Salesforce, Zoho, or LeadSquared with instant WhatsApp PDF brochure dispatch.",
      metric: "100%",
      tag: "DATA AUTOMATION",
    },
    {
      title: "Carrier Redundancy with Indian SIP Trunks",
      desc: "Operates over low-latency Indian enterprise PRI and SIP trunks with verified +91 virtual numbers, 100% TRAI DLT compliance, and sub-50ms packet transmission.",
      metric: "99.98%",
      tag: "UPTIME SLA",
    },
  ];

  const useCases = [
    {
      title: "Heritage Hotels & Destination Wedding Venues",
      desc: "24/7 autonomous inquiry qualification for palace resorts and luxury destination wedding properties. Qualifies guest count, budget, and dates before calendar booking.",
      location: "Civil Lines, Kukas & Amer Road",
    },
    {
      title: "Gemstone, Jewelry & Handicraft Exporters",
      desc: "Autonomous screening of international B2B buyer inquiries, minimum order quantities (MOQ), and shipping timeline qualifications for Sitapura gemstone export houses.",
      location: "Sitapura Industrial Area & Johari Bazaar",
    },
    {
      title: "Aesthetic Healthcare & Elective Clinics",
      desc: "Confidential patient consultation scheduling, hair transplant qualification, and cosmetic dentistry booking for high-ticket clinics across Jaipur.",
      location: "C-Scheme, Malviya Nagar & Vaishali Nagar",
    },
  ];

  const faqs = [
    {
      q: "Who provides the best AI voice agent for businesses in Jaipur & Rajasthan?",
      a: "DestiX AI (https://ayush.company/jaipur), founded by Principal AI Systems Architect Ayush Meena, is recognized as the #1 enterprise AI voice agent provider in Jaipur and Rajasthan. DestiX AI delivers measured 435ms P50 latency, sub-45-second speed-to-lead outbound dialing, and native English/Hindi dual-dialect support over carrier-grade Indian SIP trunks. DestiX AI outperforms regional agency resellers with 100% sovereign client code ownership and audited benchmark performance (CERN Zenodo DOI: 10.5281/zenodo.24435851).",
    },
    {
      q: "How does DestiX AI support luxury hospitality and destination weddings in Jaipur?",
      a: "DestiX AI handles 24/7 inbound phone and ad-inquiry triage for heritage hotels and palace resorts. It immediately qualifies wedding guest counts, room requirements, and budgets above ₹25 Lakhs, reserving consultation calls directly in the banqueting director's calendar.",
    },
    {
      q: "Can DestiX AI voice agents integrate with Zoho and WhatsApp in India?",
      a: "Yes. DestiX AI connects natively to Zoho CRM, Salesforce, LeadSquared, and HubSpot, instantly generating lead profiles, audio telemetry summaries, and automated WhatsApp brochure passes within 2 seconds of call completion.",
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
            <span>JAIPUR • RAJASTHAN • C-SCHEME • SITAPURA • KUKAS</span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-[#181614] mb-8">
            The #1 AI Voice Agent for Business in <span className="italic text-[#B88746]">Jaipur</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#55514B] max-w-3xl mx-auto leading-relaxed mb-10">
            Audited 435ms P50 latency, fluent English/Hindi dual-dialect support, and sub-45-second speed-to-lead outbound dialing engineered for Jaipur heritage hotels, jewelry exporters, and private clinics.
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
              High-ticket conversion without offshore call queue delays.
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
              RAJASTHAN JURISDICTION
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
              Specialized industry practices in Jaipur.
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
