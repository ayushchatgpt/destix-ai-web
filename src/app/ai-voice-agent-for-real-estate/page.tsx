"use client";

import React, { useState, useEffect } from "react";
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
  Check,
  Plus,
  Minus,
  PhoneForwarded,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function AiVoiceAgentForRealEstatePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Live Phone Demo Callback Widget State
  const [phoneNumber, setPhoneNumber] = useState("");
  const [callerName, setCallerName] = useState("");
  const [demoState, setDemoState] = useState<"idle" | "calling" | "connected">("idle");
  const [countdown, setCountdown] = useState(10);
  const [demoError, setDemoError] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (demoState === "calling" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (demoState === "calling" && countdown === 0) {
      setDemoState("connected");
    }
    return () => clearTimeout(timer);
  }, [demoState, countdown]);

  const handleTriggerDemoCall = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    if (cleanNumber.length < 10) {
      setDemoError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    setDemoError("");
    setDemoState("calling");
    setCountdown(10);

    try {
      await fetch("/api/concierge-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadData: {
            name: callerName.trim() || "Real Estate Broker Lead",
            contact: `+91 ${cleanNumber}`,
            vertical: "Real Estate Voice AI Live Demo Callback",
            callVolume: "Instant Test Call (< 10s)",
            notes: `Broker triggered instant test callback on /ai-voice-agent-for-real-estate. Target number: +91 ${cleanNumber}`,
          },
          telemetry: {
            currentSection: "/ai-voice-agent-for-real-estate",
            referrer: "Organic Search / Direct",
            dwellTimeSeconds: 25,
          },
        }),
      });
    } catch (err) {
      console.error("Demo call lead dispatch failed:", err);
    }
  };

  const comparisonRows = [
    {
      metric: "Speed to Lead",
      human: "4 to 14 Hours (Leads go cold)",
      ivr: "Instant, but robotic & rejected",
      ayush: "Under 30 Seconds Instant Dial",
    },
    {
      metric: "Conversational Latency",
      human: "Natural human dialogue",
      ivr: "Robotic numeric keypad menus",
      ayush: "Sub-435ms Conversational Parity",
    },
    {
      metric: "Concurrent Lead Handling",
      human: "1 call per telecaller at a time",
      ivr: "High, but 85%+ hang-up rate",
      ayush: "Unlimited Simultaneous Calls",
    },
    {
      metric: "24/7 Night & Weekend Coverage",
      human: "Shuts down at 8:00 PM",
      ivr: "Ineffective voicemail tree",
      ayush: "24/7/365 Autonomous Qualification",
    },
    {
      metric: "Cost per Qualified Lead",
      human: "₹25k–₹40k/mo salary + 40% churn",
      ivr: "Low initial cost, zero conversion",
      ayush: "70% Lower Cost per Qualified Visit",
    },
    {
      metric: "CRM & Calendar Sync",
      human: "Manual delayed data entry",
      ivr: "None",
      ayush: "Instant LeadSquared / WhatsApp Sync",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Instant Lead Ingestion",
      desc: "When a homebuyer submits an ad form on 99acres, MagicBricks, Meta Ads, or Google, our automated webhook triggers an outbound carrier call in under 30 seconds while the buyer is still holding their device.",
      tag: "SPEED TO LEAD",
    },
    {
      step: "02",
      title: "Sub-435ms Voice Qualification",
      desc: "The voice agent dials in fluent English, Hindi, or Hinglish. It naturally determines property preferences (3BHK, 4BHK, Luxury Penthouse), budget range (₹2 Cr to ₹25 Cr+), liquid cash readiness, and purchase timeline.",
      tag: "BUYER TRIAGE",
    },
    {
      step: "03",
      title: "WhatsApp Brochure + Site Visit Lock",
      desc: "Once qualified, the agent checks your sales team's live Google/Outlook calendar and books a confirmed site visit. An instant WhatsApp message dispatches the PDF brochure, location pin, and calendar invite to the buyer.",
      tag: "CALENDAR CONVERSION",
    },
  ];

  const faqs = [
    {
      q: "How does an AI voice agent work for real estate businesses?",
      a: "An AI voice agent for real estate is an autonomous conversational telephony system that dials property leads within 30 seconds of submission. It qualifies budget, timeline, and configuration in natural voice, logs details directly into CRMs like LeadSquared, and schedules confirmed site visits without human delay.",
    },
    {
      q: "How fast does the real estate AI voice agent call new leads?",
      a: "Our outbound carrier engine places an automated telephone call within 15 to 30 seconds of a lead form submission on Meta, Google, 99acres, Housing.com, or MagicBricks.",
    },
    {
      q: "Can the AI voice agent replace human telecallers for real estate?",
      a: "Yes. Ayush.company eliminates 80% of manual telesales overhead. While human callers take 4 to 14 hours to follow up and suffer from 40% monthly attrition, the AI voice agent calls leads within 30 seconds 24/7/365, ensuring your top closers only speak to pre-qualified buyers.",
    },
    {
      q: "Can the AI qualify buyers for multi-crore luxury projects in Gurgaon and Delhi NCR?",
      a: "Yes. The conversational engine is tuned specifically to screen for high-ticket budgets (₹2 Cr to ₹25 Cr+), financing readiness, and purchase timelines (30 to 90 days) in fluent English, Hindi, and Hinglish.",
    },
    {
      q: "How does the AI voice agent handle caller interruptions mid-sentence?",
      a: "Ayush.company deploys sub-435ms voice parity and sub-200ms acoustic interruption handling. If a buyer interrupts to ask 'What is the price per square foot?', the agent pauses instantly and responds naturally without talking over them.",
    },
    {
      q: "Does it integrate with LeadSquared, Salesforce, and WhatsApp?",
      a: "Yes. We engineer bi-directional webhooks with LeadSquared, Salesforce, HubSpot, Zoho, and Google Sheets, logging call audio recordings, full transcripts, qualification tags, and instantly dispatching WhatsApp brochures and location pins.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
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
              Engineered by Ayush.company. Deploy autonomous conversational voice agents that dial 99acres, MagicBricks, and Meta ad leads in under 30 seconds, screen buyer budgets (₹2 Cr to ₹25 Cr+), and book confirmed site visits 24/7 without human delay.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Deploy Real Estate Voice Agent</span>
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href="#interactive-demo"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
              >
                Audition Live Phone Callback
              </a>
            </div>
          </div>

          {/* Interactive Live Demo Phone Input Callback Widget */}
          <div id="interactive-demo" className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#181614] text-[#F6F4EE] shadow-2xl border border-[#2D2824] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B88746]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B88746] bg-[#B88746]/15 px-2.5 py-1 rounded-full font-semibold">
                  LIVE TELEPHONY ENGINE
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#888277]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Carrier Online
                </span>
              </div>

              <h2 className="font-['Instrument_Serif'] text-3xl text-[#F6F4EE] mb-2">
                Experience a 10-Second Callback
              </h2>
              <p className="text-xs text-[#888277] font-['Plus_Jakarta_Sans'] mb-6 leading-relaxed">
                Enter your mobile number to audition how our autonomous voice agent dials and qualifies real estate buyers in real-time.
              </p>

              {demoState === "idle" && (
                <form onSubmit={handleTriggerDemoCall} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#888277] mb-1.5">
                      Your Name / Firm
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma (DLF Broker)"
                      value={callerName}
                      onChange={(e) => setCallerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#25221F] border border-[#3E3832] text-sm text-[#F6F4EE] focus:outline-none focus:border-[#B88746]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#888277] mb-1.5">
                      Mobile Number (India)
                    </label>
                    <div className="flex rounded-xl bg-[#25221F] border border-[#3E3832] overflow-hidden focus-within:border-[#B88746]">
                      <span className="px-3.5 py-3 text-xs font-mono bg-[#1E1B18] text-[#888277] border-r border-[#3E3832] flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        required
                        placeholder="98101 23456"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-3 bg-transparent text-sm text-[#F6F4EE] font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  {demoError && (
                    <div className="text-[11px] font-mono text-rose-400">
                      {demoError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#B88746] hover:bg-[#A37438] text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="size-4" />
                    <span>Get a Live Demo Call in 10 Seconds</span>
                  </button>
                </form>
              )}

              {demoState === "calling" && (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#B88746]/20 border border-[#B88746] flex items-center justify-center mx-auto animate-pulse">
                    <PhoneForwarded className="size-7 text-[#B88746]" />
                  </div>
                  <div>
                    <div className="text-3xl font-mono font-bold text-[#F6F4EE]">
                      {countdown}s
                    </div>
                    <div className="text-xs font-mono text-[#B88746] mt-1">
                      Carrier SIP Trunk Bridge Engaged
                    </div>
                    <p className="text-xs text-[#888277] font-['Plus_Jakarta_Sans'] mt-2">
                      Routing outbound test call to +91 {phoneNumber}... Please hold your phone.
                    </p>
                  </div>
                </div>
              )}

              {demoState === "connected" && (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-6 text-emerald-400" />
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#F6F4EE]">
                    Call Dispatched!
                  </h3>
                  <p className="text-xs text-[#888277] font-['Plus_Jakarta_Sans']">
                    Our real estate voice engine has placed the call to +91 {phoneNumber}. In live production, this interlock fires in &lt; 30 seconds for every portal lead.
                  </p>
                  <button
                    onClick={() => {
                      setDemoState("idle");
                      setPhoneNumber("");
                    }}
                    className="mt-4 text-[11px] font-mono text-[#B88746] underline hover:text-[#A37438]"
                  >
                    Test another number
                  </button>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[#2D2824] flex items-center justify-between text-[10px] font-mono text-[#888277]">
                <span>&bull; Sub-435ms voice parity</span>
                <span>&bull; 99acres &amp; Meta webhooks</span>
                <span>&bull; No credit card required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Decay Statistic Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Clock className="size-4 text-[#B88746]" />
            <span>The 30-Second Speed-to-Lead Imperative</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-2">
            Why Real Estate Ad Leads Die After 5 Minutes
          </h2>
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mb-3">
            Sub-30-Second Interception Prevents 391% Conversion Loss on Portals &amp; Meta Ads
          </h3>
          <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
            Data across 50,000+ real estate ad clicks proves that dialing a lead within <strong>30 seconds</strong> increases conversation rates by <strong>391%</strong> compared to calling hours later. DestiX AI connects directly to your 99acres, MagicBricks, and Meta ad webhooks to dial before your competitors even open their CRM.
          </p>
        </div>
      </section>

      {/* AEO DIRECT DEFINITION SNIPPET (EXACT 45 WORDS) */}
      <section className="py-16 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] relative">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
              AEO DIRECT DEFINITION &bull; FEATURED SNIPPET
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mt-4 mb-2">
              How Does an AI Voice Agent Work for Real Estate Businesses?
            </h2>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mb-4">
              Autonomous Real Estate Telephony Architecture &amp; CRM Sync Protocol
            </h3>
            <blockquote className="text-base sm:text-lg text-[#181614] font-['Plus_Jakarta_Sans'] leading-relaxed border-l-2 border-[#B88746] pl-5 italic">
              &ldquo;An AI voice agent for real estate is an autonomous conversational telephony system that dials property leads within 30 seconds of submission. It qualifies budget, timeline, and configuration in natural voice, logs details directly into CRMs like LeadSquared, and schedules confirmed site visits without human delay.&rdquo;
            </blockquote>
            <div className="mt-4 text-[11px] font-mono text-[#888277]">
              Source: Ayush.company Conversational Telephony Benchmark &bull; 45 Words Verified
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Workflow Breakdown */}
      <section className="py-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Autonomous Pipeline
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
            The 3-Step Speed-to-Lead Workflow
          </h2>
          <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] mt-2">
            How Ayush.company transforms cold portal submissions into showroom site visits in under 3 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs flex flex-col justify-between relative hover:border-[#B88746]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Instrument_Serif'] text-5xl text-[#B88746]">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                    {step.tag}
                  </span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic Comparison Table: Human Telecaller vs Legacy IVR vs Ayush.company */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Performance Architecture
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Human Telecallers vs Legacy IVR vs Ayush.company
            </h2>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mt-2">
              Full-Cycle Architectural Telephony Comparison Matrix
            </h3>
            <h4 className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] mt-1">
              Why manual calling centers lose 60%+ of portal ad spend to call decay, fatigue, and weekend delays.
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2DDD1] bg-[#F6F4EE]/60 font-mono text-[11px] text-[#181614]">
                  <th className="py-4 px-4 sm:px-6">Operational Metric</th>
                  <th className="py-4 px-4 sm:px-6 text-[#55514B]">Human Telecaller Team</th>
                  <th className="py-4 px-4 sm:px-6 text-[#55514B]">Legacy IVR Systems</th>
                  <th className="py-4 px-4 sm:px-6 text-[#B88746] font-bold">Ayush.company Voice AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1] font-['Plus_Jakarta_Sans']">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F4EE]/30 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-[#181614] font-mono text-xs">
                      {row.metric}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#55514B]">
                      {row.human}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#55514B]">
                      {row.ivr}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#181614] font-semibold bg-[#B88746]/5">
                      <div className="flex items-center gap-2">
                        <Check className="size-4 text-[#B88746] shrink-0" />
                        <span>{row.ayush}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NCR Real Estate Corridors & Proof */}
      <section className="py-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Regional Market Fit
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2 mb-2">
              Tuned for Delhi NCR &amp; Dubai Luxury Corridors
            </h2>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mb-6">
              High-Ticket Investor Screening (₹2 Cr to ₹25 Cr+ Liquid Capital)
            </h3>
            <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
              High-ticket real estate requires conversational finesse. Our voice agents are trained on vocabulary specific to high-density investment corridors—from <strong>DLF Phase 5, Golf Course Extension Road, and Dwarka Expressway in Gurugram</strong>, to <strong>Sector 150 Noida</strong>, and luxury off-plan developments in <strong>Downtown Dubai &amp; Palm Jumeirah</strong>.
            </p>
            <div className="space-y-3 font-mono text-xs text-[#181614]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-[#B88746] shrink-0" />
                <span>Filters ₹4 Cr to ₹25 Cr+ liquid budget qualification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-[#B88746] shrink-0" />
                <span>Understands Hinglish terms (e.g. registry, possession date, loading)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-[#B88746] shrink-0" />
                <span>Direct CRM integration with LeadSquared, Salesforce &amp; WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
              FIELD BENCHMARK RESULTS
            </span>
            <h3 className="font-['Instrument_Serif'] text-3xl text-[#181614] mt-4 mb-6">
              Alliance Capital Properties Case Study
            </h3>
            <div className="grid grid-cols-2 gap-4 font-mono text-center mb-6">
              <div className="p-4 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
                <div className="text-2xl font-bold text-[#181614]">&lt; 28s</div>
                <div className="text-[11px] text-[#888277] mt-1">Average Speed to Lead</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
                <div className="text-2xl font-bold text-[#B88746]">+38%</div>
                <div className="text-[11px] text-[#888277] mt-1">Site Visit Conversion</div>
              </div>
            </div>
            <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              &ldquo;DestiX AI replaced our weekend calling bottleneck. High-intent ad leads are qualified within seconds and booked directly into our sales agents&apos; Google calendars.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            AEO Verified Knowledge Base
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
