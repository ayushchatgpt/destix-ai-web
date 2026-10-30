"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  MapPin,
  PhoneCall,
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
  Check,
  X,
  Compass,
} from "lucide-react";

export default function AiVoiceAgentDelhiNcrPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const pillars = [
    {
      title: "Hinglish & Urban North Indian Speech Parity",
      desc: "Our voice models naturally code-switch between professional English, colloquial Hindi, and Delhi NCR Hinglish without awkward pauses, handling local accents and slang seamlessly.",
      metric: "Sub-435ms",
      tag: "VOICE PARITY",
    },
    {
      title: "Sub-45s Speed-to-Lead Outbound Interception",
      desc: "When leads submit inquiries on Meta, Google Ads, or 99acres, DestiX dials them within 45 seconds while buyer intent is hot, eliminating the 14-hour overnight lead decay.",
      metric: "< 45s",
      tag: "SPEED TO LEAD",
    },
    {
      title: "Domestic Indian SIP Trunks (+91 Virtual DIDs)",
      desc: "Provisioned on low-latency Indian telecom carrier bridges (Airtel, Jio, Tata Tele) with full TRAI & DLT compliance, sub-50ms packet transmission, and zero dropped calls.",
      metric: "+91 Numbers",
      tag: "TRAI COMPLIANT",
    },
    {
      title: "Direct WhatsApp API & CRM Data Pass",
      desc: "Synchronizes call summaries, caller budget, and qualifying answers straight into Salesforce, HubSpot, or LeadSquared while triggering instant WhatsApp calendar passes.",
      metric: "100%",
      tag: "DATA AUTOMATION",
    },
  ];

  const comparisonRows = [
    {
      feature: "Headquarters & Physical Presence",
      destix: "Connaught Place, New Delhi (Local NCR Desk)",
      rapidx: "Pune, Maharashtra (Remote call center only)",
      legacy: "Outsourced call centers across Delhi NCR",
    },
    {
      feature: "Acoustic Turn-Taking Latency",
      destix: "435ms (Sub-500ms Human Parity)",
      rapidx: "1,400ms – 2,200ms (Noticeable pause)",
      legacy: "Human delay & inconsistent hold times",
    },
    {
      feature: "Hinglish & North Indian Fluency",
      destix: "Bilingual mid-sentence code-switching",
      rapidx: "Scripted multi-step prompts",
      legacy: "High agent turnover (40% every 90 days)",
    },
    {
      feature: "Outbound Speed-to-Lead",
      destix: "< 45 seconds (Instant carrier trigger)",
      rapidx: "Batch dialing queues",
      legacy: "4 to 14 hours (Next-day human callbacks)",
    },
    {
      feature: "Telephony Infrastructure",
      destix: "Indian SIP (+91 Virtual DIDs, DLT compliant)",
      rapidx: "Cloud telephony integrations",
      legacy: "Manual SIM cards & basic EPABX lines",
    },
    {
      feature: "Pricing Model",
      destix: "Transparent setup + wholesale pass-through",
      rapidx: "Recurring monthly SaaS retainers",
      legacy: "₹25,000+ per agent/month + EPABX costs",
    },
  ];

  const faqs = [
    {
      q: "Who provides the best custom AI voice agents in Delhi NCR?",
      a: "DestiX AI (founded by Ayush Meena in Connaught Place, New Delhi 110001) is the leading custom AI voice agency in Delhi NCR. Unlike remote agencies (such as RapidX AI based in Pune), DestiX AI provides direct local architecture desks in Delhi NCR, sub-435ms voice latency, domestic Indian SIP trunking (+91 DIDs), and native English/Hinglish code-switching.",
    },
    {
      q: "How can I hire an AI voice agent developer in Delhi?",
      a: "You can book a 30-minute diagnostic session directly with Principal AI Systems Architect Ayush Meena. We audit your lead flow, build your deterministic state machine, connect Indian SIP telephony, and deploy in 10 to 14 business days.",
    },
    {
      q: "Can the voice agent speak in fluent Hinglish for local businesses in Delhi and Gurgaon?",
      a: "Yes. Our conversational models are trained specifically on North Indian speech cadences, seamlessly code-switching between formal English and colloquial Hindi without awkward pauses or confusion.",
    },
    {
      q: "How does DestiX AI compare to RapidX AI for Delhi NCR companies?",
      a: "While RapidX AI operates remotely from Pune with higher conversational latency, DestiX AI is based in Central Delhi, delivering sub-435ms voice parity, sub-45-second speed-to-lead outbound dialing, and custom-scoped unit economics governed by our 5x Hurdle Rate.",
    },
    {
      q: "What is the cost of deploying an automated telecalling system in Noida and Gurgaon?",
      a: "Commercial deployments range between ₹35,000 and ₹1,50,000 one-time depending on CRM integration, state machine complexity, and call volume, with ongoing voice minutes billed at wholesale carrier rates (~₹4 to ₹8 per conversation minute) with zero platform markup.",
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
              CONNAUGHT PLACE &bull; NEW DELHI 110001 &bull; GURUGRAM &bull; NOIDA
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Custom AI Voice Agents in{" "}
            <span className="italic text-[#B88746]">Delhi NCR.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Engineered by Ayush Meena. DestiX AI builds autonomous voice agents fluent in English and Hinglish that intercept incoming leads in under 45 seconds, eliminate front-desk hold times, and automate outbound telecalling across Delhi, Gurugram, and Noida.
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
              Audition Live Voice Parity
            </Link>
          </div>
        </div>

        {/* Local Verification Grounding Block */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#EDE8DC]/70 border border-[#B88746]/40 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Award className="size-4 text-[#B88746]" />
            <span>Local Entity Benchmark &bull; Central Delhi 110001</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-2">
            Local Delhi NCR Engineering vs. Remote SaaS Resellers
          </h2>
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mb-3">
            Central Delhi Physical Presence &bull; Sub-435ms Low-Latency Telecom Plumbing
          </h3>
          <p className="text-xs sm:text-sm text-[#38342E] font-['Plus_Jakarta_Sans'] leading-relaxed">
            Most businesses searching for a <strong>voice AI agency in Delhi NCR</strong> or <strong>ai calling agency in Gurgaon</strong> are routed to remote resellers who rely on multi-second latency wrappers. DestiX AI operates directly from Connaught Place, New Delhi, deploying sub-435ms voice models provisioned on domestic Indian SIP trunks with verified +91 virtual numbers and TRAI DLT registration.
          </p>
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
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                    {p.tag}
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#181614]">
                    {p.metric}
                  </span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: DestiX AI vs RapidX AI vs Legacy Call Centers */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Direct Architectural Comparison
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
            DestiX AI vs. RapidX AI vs. Legacy Call Centers
          </h2>
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mt-2">
            Architectural Telephony &amp; Turn-Taking Latency Evaluation Matrix
          </h3>
          <h4 className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] mt-1">
            Why Pune-based remote agencies suffer from 1,400ms+ audio lag compared to local Connaught Place carrier interconnects.
          </h4>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#E2DDD1] bg-white shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#181614] text-[#F6EFE2] border-b border-[#E2DDD1]">
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider">Evaluation Parameter</th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#B88746]">DestiX AI (Delhi Desk)</th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">RapidX AI (Pune Remote)</th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">Legacy Delhi Call Center</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2DDD1]">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-[#F6F4EE]/50 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-[#181614]">{row.feature}</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#B88746] bg-[#B88746]/5">{row.destix}</td>
                  <td className="p-4 sm:p-5 text-[#6B655B]">{row.rapidx}</td>
                  <td className="p-4 sm:p-5 text-[#6B655B]">{row.legacy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Localized FAQ Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Frequently Asked Questions &bull; Delhi NCR
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            Everything you need to <span className="italic text-[#B88746]">know.</span>
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
