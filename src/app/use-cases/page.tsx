"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Building2,
  Stethoscope,
  Briefcase,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  PhoneCall,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function UseCasesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const playbooks = [
    {
      id: "real-estate",
      category: "LUXURY REAL ESTATE & VILLA ESTATES",
      title: "Real Estate Ultra-HNW Lead Interception",
      badge: "VERIFIED BENCHMARK",
      icon: Building2,
      headline: "Sub-45s qualification and VIP villa tour scheduling before ad leads go cold.",
      problem:
        "High ad spend on Meta and Google generates inquiries after business hours and on weekends. Sales agents typically take 4 to 12 hours to follow up, by which time 65% of ultra-high-net-worth buyers have browsed competing developments.",
      solution:
        "DestiX AI activates an outbound telephony trigger within 45 seconds of form submission. The agent engages in an articulate, natural dialogue assessing investment horizon ($1.5M–$5M+), preferred architecture, and timeline.",
      flow: [
        "Buyer submits high-intent lead form on luxury estate landing page",
        "DestiX telephony engine initiates outbound call in <45 seconds",
        "Natural conversational qualification (Budget: $2M+, Timeline: 90 days)",
        "Instant WhatsApp dispatch of 3D architectural lookbook & site pass",
        "Direct calendar synchronization with Senior Portfolio Director",
      ],
      techStack: [
        "Twilio High-Throughput SIP Trunking",
        "Deepgram Nova-2 Low-Latency STT",
        "Claude 3.5 Sonnet Prompt Architecture",
        "Cartesia Voice Synthesis (Sub-150ms)",
        "n8n Webhook & Salesforce CRM Sync",
      ],
      metrics: [
        { label: "Speed to Lead", val: "<45s", change: "From 6.5 hours" },
        { label: "Appointment Rate", val: "94%", change: "+380% vs email" },
        { label: "Pipeline Influenced", val: "$14.2M+", change: "Quarterly qualified" },
      ],
      liveExample: "Alliance Capital Properties (acpdubai.com)",
    },
    {
      id: "healthcare",
      category: "PRIVATE HEALTHCARE & AESTHETIC CLINICS",
      title: "24/7 Zero-Hold Patient Reception & Triage",
      badge: "HIPAA COMPLIANT",
      icon: Stethoscope,
      headline: "Eliminating missed calls and front-desk phone queues for high-ticket procedures.",
      problem:
        "Clinic front desks get overwhelmed during peak consultation hours. Up to 38% of prospective aesthetic and private surgical patients hang up during hold times or get diverted to voicemails that are rarely returned.",
      solution:
        "Our autonomous voice agent handles simultaneous multi-line inquiries with zero hold time. It answers clinical preparation questions, explains downtime protocols, quotes fee ranges, and securely collects intake details.",
      flow: [
        "Patient dials private clinic or submits treatment inquiry",
        "Inbound call answered on ring two by empathetic voice agent",
        "Patient inquiries answered (procedure steps, anesthesia, recovery time)",
        "Preliminary triage & medical disclosure criteria recorded",
        "Appointment booked with deposit link dispatched via WhatsApp & SMS",
      ],
      techStack: [
        "LiveKit WebRTC Low-Latency Voice Gateway",
        "ElevenLabs Multilingual Natural Timbre",
        "Deterministic Medical Guardrails",
        "GoHighLevel & Jane App Calendar Sync",
        "Stripe Automated Consultation Deposit Link",
      ],
      metrics: [
        { label: "Hold Time", val: "0.0s", change: "Down from 4.2 mins" },
        { label: "Inbound Capture", val: "100%", change: "Zero dropped calls" },
        { label: "Monthly Saved", val: "$32,000", change: "Reduced admin burden" },
      ],
      liveExample: "Elite Aesthetic Surgery & Medspa Practices",
    },
    {
      id: "advisory",
      category: "HIGH-TICKET B2B & EXECUTIVE ADVISORY",
      title: "Executive Lead Qualification Gatekeeper",
      badge: "ENTERPRISE READY",
      icon: Briefcase,
      headline: "Protecting senior partners from low-intent, budget-mismatched discovery calls.",
      problem:
        "Consulting principals and agency founders spend 15 to 20 hours each week on discovery calls with companies that cannot afford enterprise fees, diluting focus from paying accounts and business development.",
      solution:
        "DestiX AI acts as a sophisticated executive screener. It conducts a brief, professional diagnostic conversation probing revenue milestones, internal decision makers, and timeline before granting partner calendar access.",
      flow: [
        "Inbound partner or client inquiry received through executive portal",
        "Automated phone verification & diagnostic screening conducted",
        "Budget criteria ($50k–$250k engagement minimum) rigorously confirmed",
        "Executive 1-page dossier automatically summarized into Slack & Notion",
        "Direct partner calendar unlocked exclusively for qualified leads",
      ],
      techStack: [
        "Telnyx Enterprise Voice Network",
        "Claude 3.5 Sonnet Logic Engine",
        "Custom Voice Persona (Executive & Authoritative)",
        "HubSpot Enterprise Pipeline Automations",
        "Executive Notion & Slack Dossier Bot",
      ],
      metrics: [
        { label: "Partner Hours Saved", val: "16 hrs/wk", change: "Unqualified calls gone" },
        { label: "Proposal Close Rate", val: "3.2x", change: "Only qualified buyers" },
        { label: "Audit Accuracy", val: "99.2%", change: "Strict criteria adherence" },
      ],
      liveExample: "Pranav Jha Luxury Editorial & Private Advisory",
    },
    {
      id: "hospitality",
      category: "BOUTIQUE HOSPITALITY & LUXURY RETREATS",
      title: "Global Multi-Lingual Luxury Concierge",
      badge: "24/7 GLOBAL REACH",
      icon: Compass,
      headline: "Instant multi-lingual booking inquiries across global time zones.",
      problem:
        "HNW travelers book luxury private villas and boutique retreats across time zones. Inquiries received at 2 AM local time sit unanswered until morning, resulting in prospective guests booking alternative 5-star properties.",
      solution:
        "Our multilingual voice concierge answers around the clock in fluent English, Hindi, Arabic, or European dialects. It checks room and estate availability, quotes seasonal rates, and coordinates bespoke dietary and transport needs.",
      flow: [
        "Guest calls private villa estate hotline from international number",
        "Agent detects language and responds in native accent instantly",
        "Dates, guest count, private chef, and transport requirements cataloged",
        "Dynamic booking quote calculated from real-time reservation database",
        "Instant WhatsApp itinerary summary and deposit payment link sent",
      ],
      techStack: [
        "Twilio Global Edge Telephony",
        "ElevenLabs Multilingual v2 Voice Model",
        "PostgreSQL Real-Time Inventory & Booking API",
        "Make.com & Cloudflare Worker Microservices",
        "Stripe Global Multi-Currency Checkout",
      ],
      metrics: [
        { label: "Night Inquiry Capture", val: "100%", change: "Zero night lag" },
        { label: "Direct Booking Lift", val: "+62%", change: "Reduced OTA dependency" },
        { label: "Guest Satisfaction", val: "4.9/5", change: "Instant concierge response" },
      ],
      liveExample: "BirchStays & Private Retreat Landmarks",
    },
  ];

  const currentPlaybook = playbooks[activeTab];

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 bg-architectural-grid border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
              INDUSTRY PRODUCTION BLUEPRINTS
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl leading-[0.96] text-[#181614] mb-8">
              Battle-tested AI playbooks for{" "}
              <span className="italic text-[#B88746]">high-ticket</span> operations.
            </h1>

            <p className="text-base sm:text-xl text-[#55514B] leading-relaxed mb-10 font-normal">
              We do not build generic chatbots. DestiX AI engineers tailored operational voice and automation engines for sectors where a single qualified lead represents substantial five- to six-figure revenue.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#B88746] hover:bg-[#A37336] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm"
              >
                <span>Audit Your Vertical Playbook</span>
                <ArrowUpRight className="w-4 h-4 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#playbook-explorer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#E2DDD1] bg-[#FFFFFF] hover:bg-[#EDE8DC] text-[#181614] font-semibold text-sm transition-all"
              >
                <span>Explore 4 Blueprints</span>
                <ArrowRight className="w-4 h-4 text-[#55514B]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Selector & Tab Bar */}
      <section id="playbook-explorer" className="py-20 sm:py-28 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E2DDD1] gap-6">
          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.22em] text-[#B88746] font-semibold mb-2">
              SELECT INDUSTRY VERTICAL
            </div>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614]">
              Inspect production architecture & flows.
            </h2>
          </div>
          <p className="text-sm font-['Plus_Jakarta_Sans'] text-[#55514B] max-w-md">
            Click through our 4 verified production playbooks to see exact call flows, technical stacks, and verified financial outcomes.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {playbooks.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[140px] ${
                  isSelected
                    ? "bg-[#181614] text-[#F6F4EE] border-[#181614] shadow-md"
                    : "bg-[#FFFFFF] text-[#181614] border-[#E2DDD1] hover:border-[#B88746]/50 hover:bg-[#F9F7F1]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? "bg-[#B88746] text-[#F6F4EE]"
                        : "bg-[#EDE8DC] text-[#181614]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-['JetBrains_Mono'] font-semibold tracking-wider ${
                      isSelected ? "text-[#B88746]" : "text-[#888277]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div
                    className={`text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider mb-1 ${
                      isSelected ? "text-stone-400" : "text-[#888277]"
                    }`}
                  >
                    {p.id.replace("-", " ")}
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-bold text-sm leading-snug">
                    {p.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Playbook Deep Dive Card */}
        <div className="bg-[#FFFFFF] border border-[#E2DDD1] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_15px_45px_-15px_rgba(24,22,20,0.06)]">
          {/* Top Badge & Title Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E2DDD1]">
            <div>
              <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] uppercase text-[#B88746] font-semibold mb-2">
                {currentPlaybook.category}
              </div>
              <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
                {currentPlaybook.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-wider text-[#181614] font-semibold">
                {currentPlaybook.badge}
              </span>
              <span className="text-xs font-['Plus_Jakarta_Sans'] text-[#888277] italic">
                Ref: {currentPlaybook.liveExample}
              </span>
            </div>
          </div>

          <div className="mt-8 mb-10">
            <p className="text-lg sm:text-xl font-['Plus_Jakarta_Sans'] text-[#181614] font-medium leading-relaxed">
              "{currentPlaybook.headline}"
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#EDE8DC]/50 border border-[#E2DDD1]">
              <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-red-700 font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                The Core Bottleneck
              </div>
              <p className="text-sm font-['Plus_Jakarta_Sans'] text-[#55514B] leading-relaxed">
                {currentPlaybook.problem}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F4EE] border border-[#B88746]/30">
              <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746] font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B88746]" />
                The DestiX Architecture
              </div>
              <p className="text-sm font-['Plus_Jakarta_Sans'] text-[#55514B] leading-relaxed">
                {currentPlaybook.solution}
              </p>
            </div>
          </div>

          {/* 5-Step Call & Telephony Logic Flow */}
          <div className="mb-12">
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#888277] font-semibold mb-4">
              // TELEPHONY & AUTOMATION SEQUENCE
            </div>
            <div className="space-y-3">
              {currentPlaybook.flow.map((stepText, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl border border-[#E2DDD1] bg-[#FDFCFB] hover:bg-[#F6F4EE] transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-[#181614] text-[#F6F4EE] flex items-center justify-center text-xs font-['JetBrains_Mono'] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-['Plus_Jakarta_Sans'] text-[#181614] font-medium leading-relaxed">
                    {stepText}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Quantified Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 pt-8 border-t border-[#E2DDD1]">
            {/* Tech Stack */}
            <div>
              <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#888277] font-semibold mb-4">
                // PRODUCTION TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentPlaybook.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#EDE8DC] border border-[#E2DDD1] text-xs font-['JetBrains_Mono'] text-[#181614] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#888277] font-semibold mb-4">
                // VERIFIED OPERATIONAL METRICS
              </div>
              <div className="grid grid-cols-3 gap-3">
                {currentPlaybook.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] text-center"
                  >
                    <div className="text-xl sm:text-2xl font-bold font-['Instrument_Serif'] text-[#181614]">
                      {metric.val}
                    </div>
                    <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] mt-1 font-semibold">
                      {metric.label}
                    </div>
                    <div className="text-[10px] font-['Plus_Jakarta_Sans'] text-[#B88746] font-medium mt-0.5">
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card CTA */}
          <div className="mt-10 pt-8 border-t border-[#E2DDD1] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-['Plus_Jakarta_Sans'] text-[#55514B]">
              Ready to deploy this exact sequence for your company?
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-semibold font-['Plus_Jakarta_Sans'] transition-all shadow-sm"
            >
              <span>Schedule Blueprint Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: DestiX vs Traditional Agency Approaches */}
      <section className="py-20 bg-[#131210] text-[#F6F4EE] border-t border-[#2A2825]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.22em] text-[#B88746] font-semibold mb-2">
              SYSTEM INTEGRITY BENCHMARK
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#F6F4EE] mb-4">
              Why traditional chatbots fail high-ticket operations.
            </h2>
            <p className="text-sm font-['Plus_Jakarta_Sans'] text-stone-400">
              Low-cost software widgets frustrate high-ticket clients. DestiX AI builds carrier-grade voice infrastructure connected to sovereign digital architectures.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-stone-800 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] uppercase text-stone-400">
                  <th className="py-4 px-4 font-semibold">Capability Matrix</th>
                  <th className="py-4 px-4 font-semibold text-[#B88746]">DestiX AI Studio</th>
                  <th className="py-4 px-4 font-semibold text-stone-500">Traditional Agency / SaaS Bots</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 text-sm font-['Plus_Jakarta_Sans']">
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#F6F4EE]">Outbound Lead Speed</td>
                  <td className="py-4 px-4 text-[#B88746] font-semibold">&lt;45 seconds automated telephony</td>
                  <td className="py-4 px-4 text-stone-400">4 to 24 hours manual sales rep callback</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#F6F4EE]">Acoustic & Voice Parity</td>
                  <td className="py-4 px-4 text-[#B88746] font-semibold">Sub-500ms conversational, breath-modeled</td>
                  <td className="py-4 px-4 text-stone-400">Robotic IVR phone trees & text chat widgets</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#F6F4EE]">Data & CRM Integration</td>
                  <td className="py-4 px-4 text-[#B88746] font-semibold">Full two-way n8n sync (HubSpot, Salesforce)</td>
                  <td className="py-4 px-4 text-stone-400">Isolated CSV downloads or email alerts</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#F6F4EE]">Digital Storefronts</td>
                  <td className="py-4 px-4 text-[#B88746] font-semibold">Bespoke 3D WebGL spatial architectures</td>
                  <td className="py-4 px-4 text-stone-400">Generic WordPress & Framer themes</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#F6F4EE]">Engagement Hurdle Rate</td>
                  <td className="py-4 px-4 text-[#B88746] font-semibold">Mandatory 5x ROI threshold or decline</td>
                  <td className="py-4 px-4 text-stone-400">Locked multi-month vanity retainers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scoping Diagnostic Invitation */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="bg-[#FFFFFF] border border-[#E2DDD1] rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-[0_12px_40px_-15px_rgba(24,22,20,0.08)]">
          <div className="w-12 h-12 rounded-full bg-[#EDE8DC] text-[#B88746] flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#B88746] font-semibold mb-3">
            HURDLE RATE SCOPING
          </div>

          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mb-6">
            Let's evaluate your industry unit economics.
          </h2>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto leading-relaxed mb-8">
            Every engagement begins with a 30-minute diagnostic session with Ayush Meena. If we cannot prove a clear 5x hurdle rate return from recovered lead leakage, we will honestly tell you not to hire us.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#A37336] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm"
            >
              <span>Book 30-Minute Diagnostic Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#E2DDD1] bg-[#FFFFFF] hover:bg-[#EDE8DC] text-[#181614] font-semibold text-sm transition-all"
            >
              <span>Contact Private Desk</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
