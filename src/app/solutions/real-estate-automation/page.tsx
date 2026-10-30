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
  ChevronRight,
  Plus,
  Minus,
  Award,
} from "lucide-react";

export default function RealEstateAutomationPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const workflows = [
    {
      step: "01",
      title: "Sub-45s Inbound Lead Intercept",
      desc: "When a prospective buyer clicks your Meta ad, Google ad, or 99acres listing and submits a phone number, DestiX triggers an automated carrier call within 45 seconds while they are still holding their smartphone.",
      tag: "SPEED TO LEAD",
    },
    {
      step: "02",
      title: "Natural Voice Budget Qualification",
      desc: "Speaking with sub-500ms voice latency in English, Hindi, or Hinglish, the voice model screens for unit configuration (3BHK/4BHK/Penthouse), timeline (30 to 90 days), and funding readiness.",
      tag: "QUALIFICATION",
    },
    {
      step: "03",
      title: "Instant WhatsApp Dossier Dispatch",
      desc: "While the prospect is still on the phone, the system dispatches architectural floor plans, high-res digital brochures, and site Google Maps pins directly to their WhatsApp chat in under 3 seconds.",
      tag: "DATA PASS",
    },
    {
      step: "04",
      title: "Confirmed Site Tour Booking",
      desc: "Books the private site walkthrough directly into your senior sales closers' Google Calendar, CRM, or LeadSquared dashboard with automated pre-visit SMS and WhatsApp reminders.",
      tag: "CLOSING SYNC",
    },
  ];

  const portals = [
    { name: "Meta Lead Ads", desc: "Instagram & Facebook native form webhooks" },
    { name: "Google Ads", desc: "Performance Max & Search ad call extensions" },
    { name: "99acres.com", desc: "Real-time portal webhook lead ingest" },
    { name: "MagicBricks", desc: "Automated developer campaign lead parsing" },
    { name: "Housing.com", desc: "Instant API webhook connection" },
    { name: "Custom 3D Web", desc: "DestiX bespoke WebGL storefronts" },
  ];

  const faqs = [
    {
      q: "What is real estate automation with AI voice agents?",
      a: "Real estate automation with DestiX AI connects your advertising channels (Meta Ads, Google Ads, 99acres, MagicBricks) to an autonomous conversational voice engine. When a prospective buyer submits an inquiry, an outbound phone call is triggered in under 45 seconds to qualify their budget, configuration (3BHK/4BHK/Penthouse), and purchase timeline before scheduling a site tour directly into your sales team's calendar.",
    },
    {
      q: "Why is the sub-45-second speed-to-lead critical for real estate?",
      a: "Most real estate brokerages and developers let high-intent leads sit in a spreadsheet for 14 hours overnight. By the time a sales rep calls the next afternoon, the buyer has forgotten which project they clicked or has already spoken to a competing developer. Calling in under 45 seconds catches buyers at peak emotional intent, increasing contact and qualification rates by over 300%.",
    },
    {
      q: "Can the voice agent handle natural Hindi and urban Hinglish?",
      a: "Yes. Our models are specifically calibrated for North Indian and Delhi NCR caller demographics, supporting fluid mid-sentence code-switching between formal British/Indian English, colloquial Hindi, and urban Hinglish with sub-200ms interruption handling.",
    },
    {
      q: "How does this connect to our existing real estate CRM?",
      a: "We engineer native bi-directional webhook connectors for Salesforce, HubSpot, LeadSquared, Zoho CRM, and custom SQL databases. Every call automatically generates structured notes, qualification tags, audio recording links, and calendar events.",
    },
    {
      q: "What is the commercial pricing for real estate automation?",
      a: "Turnkey enterprise real estate deployments range from ₹35,000 to ₹1,50,000 one-time depending on workflow complexity, CRM integration, and campaign volume. Ongoing voice minutes run on wholesale pass-through carrier rates (~₹4 to ₹8 per conversation minute) with zero platform markup.",
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
              AUTONOMOUS REAL ESTATE CONVERSION &bull; &lt; 45S SPEED TO LEAD
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Real Estate Automation &amp;{" "}
            <span className="italic text-[#B88746]">AI Voice Telephony.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Stop losing luxury property leads to slow callbacks. DestiX AI deploys autonomous voice agents that call back inbound inquiries in under 45 seconds, qualify buyer budgets (₹4 Cr to ₹25 Cr+), and book confirmed site visits 24/7 across Gurugram, Delhi NCR, and Dubai.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Deploy Real Estate Automation</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/#voice-console"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Audition Live Telephony Demo
            </Link>
          </div>
        </div>

        {/* The 10:30 PM Experiment Highlight Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Clock className="size-4 text-[#B88746]" />
            <span>The 10:30 PM Lead Decay Benchmark</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
            The 14-Hour Spreadsheet Freeze Killing Real Estate ROAS
          </h2>
          <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
            Recently, our team submitted lead forms on 12 luxury real estate ads across Gurugram and South Delhi at 10:30 PM. <strong>Zero developers called back that night.</strong> The first human sales rep called at 11:45 AM the next day—14 hours later. By then, the intent had evaporated.
          </p>
          <div className="p-4 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] text-xs sm:text-sm font-['Plus_Jakarta_Sans'] text-[#181614] flex items-center gap-3">
            <CheckCircle2 className="size-5 text-[#B88746] shrink-0" />
            <span>
              <strong>The DestiX Fix:</strong> Inbound inquiries trigger an outbound phone call in under <strong>45 seconds</strong> while the prospect is still holding their device, qualifying configuration and booking the site tour on the spot.
            </span>
          </div>
        </div>
      </section>

      {/* The 4-Step Pipeline Section */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Autonomous Conversion Architecture
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              How the Real Estate Automation Engine Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {workflows.map((wf, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#B88746]">
                    ({wf.step})
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#181614] bg-white border border-[#E2DDD1] px-2.5 py-1 rounded-full">
                    {wf.tag}
                  </span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  {wf.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Portals & Channels */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Turnkey Integrations
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
            Connected to Every Real Estate Marketing Channel
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {portals.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs flex flex-col justify-between"
            >
              <div>
                <CheckCircle2 className="size-5 text-[#B88746] mb-3" />
                <h3 className="font-['Instrument_Serif'] text-xl text-[#181614] mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans']">
                  {p.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2DDD1]/60 text-[10px] font-mono text-[#B88746] uppercase tracking-wider font-semibold">
                Live Webhook Sync
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Localized Real Estate FAQ Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            Real Estate Automation <span className="italic text-[#B88746]">FAQ.</span>
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
