"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Building,
  PhoneCall,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  TrendingUp,
  FileText,
  MapPin,
  Award,
  Plus,
  Minus,
} from "lucide-react";

export default function AiVoiceAgentForRealEstatePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const capabilities = [
    {
      title: "Qualify Portal Leads in 30 Seconds",
      desc: "Instant webhook triggers dial 99acres, MagicBricks, Housing.com, and Meta ad leads in under 30 seconds while the prospect is still actively searching.",
      metric: "< 30s",
      tag: "SPEED TO LEAD",
    },
    {
      title: "Budget & Unit Configuration Filtering",
      desc: "Screens for 2BHK, 3BHK, 4BHK, or luxury penthouses, establishing liquid down-payment capability and pre-approved home loan status.",
      metric: "100%",
      tag: "BUYER TRIAGE",
    },
    {
      title: "Automated Site Visit Scheduling",
      desc: "Checks real-time sales agent calendar availability and books showroom walkthroughs, dispatching instant WhatsApp confirmations and Google Maps pins.",
      metric: "Direct Sync",
      tag: "SITE VISITS",
    },
    {
      title: "Eliminate Junk Inquiries for Closers",
      desc: "Filters out brokers, window shoppers, and invalid numbers so your high-commission sales closers spend 100% of their day talking to ready buyers.",
      metric: "+35% Close",
      tag: "CLOSER LIFT",
    },
  ];

  const faqs = [
    {
      q: "How fast does the real estate AI voice agent call new leads?",
      a: "Our outbound carrier engine places an automated telephone call within 30 to 45 seconds of a lead form submission on Meta, Google, 99acres, or MagicBricks.",
    },
    {
      q: "Can the AI qualify buyers for multi-crore luxury projects in Gurgaon and Delhi?",
      a: "Yes. The conversational state machine is specifically scripted to screen for high-ticket budgets (₹4 Cr to ₹25 Cr+), financing vs cash readiness, and purchase timelines (30 to 90 days).",
    },
    {
      q: "How does the AI handle caller objections and interruptions?",
      a: "DestiX AI achieves sub-435ms voice parity and sub-200ms acoustic interruption handling. If a prospect interrupts mid-sentence with 'Wait, what is the price per sq. ft.?', the agent pauses instantly and responds naturally.",
    },
    {
      q: "Does it integrate with real estate CRMs like LeadSquared and Salesforce?",
      a: "Yes. We engineer bi-directional webhooks with LeadSquared, Salesforce, HubSpot, Zoho, and Google Sheets, logging call audio, transcripts, and qualification tags instantly.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Building className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              REAL ESTATE LEAD QUALIFICATION &bull; PORTAL SPEED-TO-LEAD &lt; 30S
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Agents for Real Estate:{" "}
            <span className="italic text-[#B88746]">
              Qualify Portal Leads in 30 Seconds.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Engineered by Ayush Meena. DestiX AI deploys autonomous voice agents for real estate brokers and developers that call 99acres, MagicBricks, and Meta ad leads in under 30 seconds, screen buyer budgets, and book confirmed site visits 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Deploy Real Estate Voice Agent</span>
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

        {/* Lead Decay Fact Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Clock className="size-4 text-[#B88746]" />
            <span>The 30-Second Speed-to-Lead Rule</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
            Why Property Inquiries Die After 5 Minutes
          </h2>
          <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
            Data across 50,000+ real estate ad clicks proves that dialing a lead within <strong>30 seconds</strong> increases conversation rates by <strong>391%</strong> compared to calling hours later. DestiX AI connects directly to your 99acres, MagicBricks, and Meta ad webhooks to dial before your competitors even see the notification.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Proven Architecture
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Full-Cycle Real Estate Qualification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                    {c.tag}
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#181614]">
                    {c.metric}
                  </span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            Real Estate AI Telephony <span className="italic text-[#B88746]">FAQ.</span>
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
