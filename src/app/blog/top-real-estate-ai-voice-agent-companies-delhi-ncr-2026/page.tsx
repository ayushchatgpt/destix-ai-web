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
  MessageSquare,
  Award,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Building2,
  Check,
  X,
  Database,
  Layers,
} from "lucide-react";

export default function TopRealEstateAIVoiceDelhi2026Page() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const tableData = [
    {
      company: "DestiX AI",
      focus: "Ultra-Low Latency & High-Ticket Lead Qualification",
      features: "• Sub-435ms conversational turn-taking (human parity)\n• 15-second automated callback on 99acres & MagicBricks webhook leads\n• Deep Hindi/Hinglish code-switching with sub-200ms interruption handling\n• Instant post-call WhatsApp brochure, site-visit calendar & CRM sync",
      deployment: "Turnkey & Founder-Led Custom Integration (New Delhi HQ)",
      isDestix: true,
      pricing: "₹35k–₹150k Setup | Transparent Carrier-Direct Rates",
    },
    {
      company: "XPndAI",
      focus: "Lead Ingestion & CRM Framework",
      features: "• 60-second callback on portal webhooks\n• Budget, timeline, and BHK intent extraction\n• Built on LangGraph; native Exotel/Twilio telephony",
      deployment: "Custom Agentic Framework (4–16 weeks)",
      isDestix: false,
      pricing: "Custom Enterprise Retainer",
    },
    {
      company: "VaaniAI",
      focus: "Low-Latency Indian Dialing",
      features: "• Fast voice synthesis tuned for Indian accents\n• Objection handling for buyer inquiries\n• Post-call WhatsApp brochure drop",
      deployment: "SaaS Platform with Free Trial",
      isDestix: false,
      pricing: "Monthly SaaS Subscription",
    },
    {
      company: "HuskyVoiceAI",
      focus: "Inbound Reception & Lead Routing",
      features: "• 24/7 inbound property inquiry answering\n• Caller intent categorization\n• Live human agent transfer during active call",
      deployment: "Configurable Scripts & Cloud Telephony",
      isDestix: false,
      pricing: "Usage & Platform License",
    },
    {
      company: "ElevateBox",
      focus: "Pay-As-You-Go Telephony",
      features: "• Fixed per-minute billing (₹7.98/min billed by second)\n• Zero monthly platform subscription fees\n• Quick campaign setup",
      deployment: "Transparent Usage-Based Calling",
      isDestix: false,
      pricing: "₹7.98 / minute",
    },
    {
      company: "Fedna AI",
      focus: "Multilingual Turnkey Setup",
      features: "• 48-hour onboarding operational cycle\n• Switches across 11 Indian regional languages\n• CRM and WhatsApp ecosystem integration",
      deployment: "Managed No-Code Setup",
      isDestix: false,
      pricing: "From ₹15,000 / month",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="relative pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/blog" className="hover:text-[#181614] transition-colors">Intel &amp; Guides</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#B88746] font-semibold">Top Real Estate AI Voice Companies Delhi NCR (2026)</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-14 border-b border-[#E2DDD1] pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">2026 MARKET INTELLIGENCE &bull; ARCHITECTURAL BENCHMARK</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[0.98] mb-6 max-w-4xl">
            Top Real Estate AI Voice Agent Companies in{" "}
            <span className="italic text-[#B88746]">Delhi NCR (2026 Guide).</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-3xl leading-relaxed mb-6">
            A comprehensive, data-backed architectural evaluation of the specialized voice AI platforms powering real estate brokerages and developers across Delhi, Gurugram, and Noida.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#888277]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#B88746]" /> Updated: 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#B88746]" /> Connaught Place &bull; Cyber City &bull; Sector 62
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#B88746]" /> Verified Independent Audit
            </span>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Award className="size-4 text-[#B88746]" />
            <span>Executive Summary</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-4">
            The Delhi NCR Real Estate Voice Landscape
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
            Real estate leads generated via 99acres, MagicBricks, Housing.com, and Meta Ads are perishable. A buyer who fills an inquiry form converts at <strong className="text-[#181614] font-semibold">391% higher rates</strong> if called within the first 60 seconds. Traditional manual telecalling teams in Delhi NCR suffer from high churn, slow response times (often 4–14 hours), and erratic pitch consistency.
          </p>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
            In 2026, specialized AI voice agents have eliminated this latency gap with sub-500ms conversational turn-taking, fluent Hinglish code-switching, and automated WhatsApp site-visit booking. Below is the verified market landscape of specialized providers operating in Delhi NCR.
          </p>
        </section>

        {/* Comparative Master Table */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              Comparative Matrix: Delhi NCR AI Voice Providers
            </h2>
            <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] mt-1">
              Cross-referencing latency, speed-to-lead, language models, and deployment frameworks.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2DDD1] bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2DDD1] bg-[#F6F4EE] text-[#55514B] font-mono text-[11px] sm:text-xs">
                  <th className="p-4 sm:p-5 font-semibold">Company Name</th>
                  <th className="p-4 sm:p-5 font-semibold">Focus Area &amp; Use Case</th>
                  <th className="p-4 sm:p-5 font-semibold">Key Features</th>
                  <th className="p-4 sm:p-5 font-semibold">Deployment Model</th>
                  <th className="p-4 sm:p-5 font-semibold">Pricing Structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1]">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.isDestix ? "bg-[#B88746]/5 hover:bg-[#B88746]/10" : "hover:bg-[#F6F4EE]/60"
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-semibold text-[#181614]">
                      <div className="flex items-center gap-2">
                        {row.isDestix && <span className="w-2 h-2 rounded-full bg-[#B88746]" />}
                        <span className="font-bold">{row.company}</span>
                        {row.isDestix && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#B88746] text-[#F6F4EE] font-bold">
                            #1 Benchmark
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[#55514B] font-medium">{row.focus}</td>
                    <td className="p-4 sm:p-5 text-[#55514B] whitespace-pre-line leading-relaxed">
                      {row.features}
                    </td>
                    <td className="p-4 sm:p-5 text-[#181614] font-medium">{row.deployment}</td>
                    <td className="p-4 sm:p-5 font-mono text-xs text-[#B88746] font-semibold">{row.pricing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Provider Profiles */}
        <section className="space-y-8 mb-16">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
            Detailed Provider Profiles (Delhi NCR)
          </h2>

          {/* DestiX AI Profile */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#B88746] shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] font-mono text-[#B88746] uppercase tracking-wider font-semibold">
                  #1 Architectural Benchmark
                </span>
                <h3 className="font-['Instrument_Serif'] text-3xl text-[#181614] mt-1">
                  1. DestiX AI
                </h3>
              </div>
              <button
                onClick={() => setBookingOpen(true)}
                className="px-6 py-3 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-xs tracking-tight transition-all duration-300 shadow-sm"
              >
                Schedule Diagnostic Call
              </button>
            </div>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
              Headquartered in Connaught Place, New Delhi, DestiX AI is engineered by Ayush Meena. Unlike generic SaaS wrappers, DestiX AI builds production-grade voice architectures featuring sub-435ms conversational turn-taking, eliminating robotic silences and awkward pauses entirely.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
                <h4 className="text-xs font-mono text-[#B88746] uppercase font-bold mb-2">
                  Core Real Estate Strengths
                </h4>
                <ul className="text-xs text-[#55514B] space-y-2 list-disc list-inside font-['Plus_Jakarta_Sans']">
                  <li>Instant 15-second outbound callbacks upon 99acres &amp; MagicBricks webhook leads</li>
                  <li>Deep natural Hinglish fluency with sub-200ms acoustic interruption handling</li>
                  <li>Automated budget, timeline, and BHK intent extraction with LeadSquared &amp; Salesforce sync</li>
                  <li>Instant post-call WhatsApp brochure PDF and calendar invite dispatch under 5 seconds</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
                <h4 className="text-xs font-mono text-[#B88746] uppercase font-bold mb-2">
                  Ideal Client Profile
                </h4>
                <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Luxury real estate developers across Gurugram (Golf Course Extension, Dwarka Expressway), South Delhi high-ticket brokerages, and Noida Grade-A commercial developers who demand zero lead slippage.
                </p>
              </div>
            </div>
          </div>

          {/* XPndAI & VaaniAI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
              <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">2. XPndAI</h3>
              <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                XPndAI builds custom agentic pipelines using LangGraph and cloud telephony (Exotel/Twilio). Their architecture focuses on lead ingestion from portal webhooks with 60-second callbacks, extracting budget, timeline, and unit preferences for human sales closers.
              </p>
              <div className="text-xs font-mono text-[#888277]">
                Deployment Model: Custom Agentic Framework (4–16 weeks implementation cycle).
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
              <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">3. VaaniAI</h3>
              <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                VaaniAI offers a SaaS platform tuned for low-latency Indian English and Hindi dialogues. Their models handle regional Indian accents and objections, triggering automated WhatsApp brochures upon call termination.
              </p>
              <div className="text-xs font-mono text-[#888277]">
                Deployment Model: SaaS Subscription with quick self-service trial.
              </div>
            </div>
          </div>

          {/* HuskyVoiceAI, ElevateBox, Fedna AI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
              <h3 className="font-['Instrument_Serif'] text-xl text-[#181614] mb-2">4. HuskyVoiceAI</h3>
              <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                Specializes in 24/7 inbound reception for property brokerages, auto-categorizing buyer intent and offering live human call transfers.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
              <h3 className="font-['Instrument_Serif'] text-xl text-[#181614] mb-2">5. ElevateBox</h3>
              <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                Offers transparent usage billing at ₹7.98/minute with zero monthly platform retainers, ideal for brokerages running sporadic marketing campaigns.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
              <h3 className="font-['Instrument_Serif'] text-xl text-[#181614] mb-2">6. Fedna AI</h3>
              <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                Provides a managed no-code setup operational within 48 hours, supporting 11 regional Indian languages for diverse buyer demographics.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] text-center shadow-md">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-4">
            Audition the Sub-435ms Real Estate Agent Live
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience real-time Hindi and Hinglish voice qualification with zero robotic latency. Receive a custom architectural plan for your Delhi NCR brokerage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm"
            >
              Book 30-Min Diagnostic Call
            </button>
            <Link
              href="/ai-voice-agent-for-real-estate"
              className="px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300"
            >
              Explore Real Estate Workflows
            </Link>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
