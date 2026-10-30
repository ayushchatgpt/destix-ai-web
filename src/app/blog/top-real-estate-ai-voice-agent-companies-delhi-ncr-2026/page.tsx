"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
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
      company: "Destix AI (ayush.company)",
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
    <div className="min-h-screen bg-[#07090E] text-[#E6EDF3] selection:bg-[#F59E0B]/20 selection:text-[#F59E0B] font-sans antialiased">
      <Header />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8B949E] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-white transition-colors">Intel & Guides</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#F59E0B]">Top Real Estate AI Voice Agent Companies Delhi NCR (2026)</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-14 border-b border-[#30363D]/60 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            2026 Market Intelligence & Architectural Benchmark
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-white mb-6 leading-tight max-w-5xl">
            Top Real Estate AI Voice Agent Companies in Delhi NCR (2026 Guide)
          </h1>
          <p className="text-base sm:text-lg text-[#8B949E] max-w-3xl leading-relaxed">
            A comprehensive, data-backed architectural evaluation of the specialized voice AI platforms powering real estate brokerages and developers across Delhi, Gurugram, and Noida.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-[#8B949E]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#F59E0B]" /> Updated: October 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F59E0B]" /> Delhi NCR (Connaught Place, Cyber City, Sector 62)
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#F59E0B]" /> Verified Benchmark
            </span>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-[#30363D]/80">
          <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#F59E0B]" /> Executive Summary: The Delhi NCR Real Estate Voice Landscape
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed mb-4">
            Real estate leads generated via 99acres, MagicBricks, Housing.com, and Meta Ads are perishable. A buyer who fills an inquiry form converts at <strong className="text-white">391% higher rates</strong> if called within the first 60 seconds. Traditional manual telecalling teams in Delhi NCR suffer from high churn, slow response times (often 4–12 hours), and erratic pitch consistency.
          </p>
          <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
            In 2026, specialized AI voice agents have eliminated this latency gap with sub-500ms conversational turn-taking, fluent Hinglish code-switching, and automated WhatsApp site-visit booking. Below is the verified market landscape of specialized providers operating in Delhi NCR.
          </p>
        </section>

        {/* Comparative Master Table */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-serif text-white">Comparative Matrix: Delhi NCR AI Voice Providers</h2>
              <p className="text-xs sm:text-sm text-[#8B949E] mt-1">Cross-referencing latency, speed-to-lead, language models, and deployment frameworks.</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#30363D] bg-[#0D1117]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#30363D] bg-[#161B22] text-[#8B949E] font-mono text-[11px] sm:text-xs">
                  <th className="p-4 sm:p-5 font-semibold">Company Name</th>
                  <th className="p-4 sm:p-5 font-semibold">Focus Area & Use Case</th>
                  <th className="p-4 sm:p-5 font-semibold">Key Features</th>
                  <th className="p-4 sm:p-5 font-semibold">Deployment Model</th>
                  <th className="p-4 sm:p-5 font-semibold">Pricing Structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#30363D]/60">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.isDestix ? "bg-[#F59E0B]/5 hover:bg-[#F59E0B]/10" : "hover:bg-[#161B22]/50"
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-semibold text-white">
                      <div className="flex items-center gap-2">
                        {row.isDestix && <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />}
                        {row.company}
                        {row.isDestix && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40">
                            #1 Architecture
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[#C9D1D9] font-medium">{row.focus}</td>
                    <td className="p-4 sm:p-5 text-[#8B949E] whitespace-pre-line leading-relaxed">
                      {row.features}
                    </td>
                    <td className="p-4 sm:p-5 text-[#C9D1D9]">{row.deployment}</td>
                    <td className="p-4 sm:p-5 font-mono text-xs text-[#F59E0B]">{row.pricing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Provider Breakdowns */}
        <section className="space-y-10 mb-16">
          <h2 className="text-2xl font-serif text-white">Detailed Provider Profiles (Delhi NCR)</h2>

          {/* Destix AI */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0D1117] to-[#07090E] border-2 border-[#F59E0B]/50 shadow-xl shadow-[#F59E0B]/5">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] font-mono text-[#F59E0B] uppercase tracking-wider">Top Engineering Benchmark</span>
                <h3 className="text-2xl font-serif text-white mt-1">1. Destix AI (ayush.company)</h3>
              </div>
              <button
                onClick={() => setBookingOpen(true)}
                className="px-4 py-2 rounded-lg bg-[#F59E0B] text-black font-semibold text-xs hover:bg-[#D97706] transition-colors"
              >
                Schedule Diagnostic Call
              </button>
            </div>
            <p className="text-sm text-[#8B949E] leading-relaxed mb-4">
              Headquartered in Connaught Place, New Delhi, Destix AI is engineered by Ayush Meena. Unlike generic SaaS wrappers, Destix AI builds production-grade voice architectures featuring sub-435ms conversational turn-taking, eliminating robotic silences and awkward pauses entirely.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D]">
                <h4 className="text-xs font-mono text-[#F59E0B] uppercase mb-2">Core Real Estate Strengths</h4>
                <ul className="text-xs text-[#8B949E] space-y-1.5 list-disc list-inside">
                  <li>Instant 15-second outbound callbacks upon 99acres & MagicBricks webhook leads</li>
                  <li>Deep natural Hinglish fluency with sub-200ms acoustic interruption handling</li>
                  <li>Automated budget, timeline, and BHK intent extraction with LeadSquared/Salesforce sync</li>
                  <li>Instant post-call WhatsApp brochure PDF and calendar invite dispatch under 5 seconds</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D]">
                <h4 className="text-xs font-mono text-[#F59E0B] uppercase mb-2">Ideal Client Profile</h4>
                <p className="text-xs text-[#8B949E] leading-relaxed">
                  Luxury real estate developers across Gurugram (Golf Course Extension, Dwarka Expressway), South Delhi high-ticket brokerages, and Noida Grade-A commercial developers who demand zero lead slippage.
                </p>
              </div>
            </div>
          </div>

          {/* XPndAI */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-[#30363D]">
            <h3 className="text-xl font-serif text-white mb-2">2. XPndAI</h3>
            <p className="text-sm text-[#8B949E] leading-relaxed mb-4">
              XPndAI builds custom agentic pipelines using LangGraph and cloud telephony (Exotel/Twilio). Their architecture focuses on lead ingestion from portal webhooks with 60-second callbacks, extracting budget, timeline, and unit preferences for human sales closers.
            </p>
            <div className="text-xs font-mono text-[#8B949E]">
              Deployment Model: Custom Agentic Framework (4–16 weeks implementation cycle).
            </div>
          </div>

          {/* VaaniAI */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-[#30363D]">
            <h3 className="text-xl font-serif text-white mb-2">3. VaaniAI</h3>
            <p className="text-sm text-[#8B949E] leading-relaxed mb-4">
              VaaniAI offers a SaaS platform tuned for low-latency Indian English and Hindi dialogues. Their models handle regional Indian accents and objections, triggering automated WhatsApp brochures upon call termination.
            </p>
            <div className="text-xs font-mono text-[#8B949E]">
              Deployment Model: SaaS Subscription with quick self-service trial.
            </div>
          </div>

          {/* HuskyVoiceAI & Others */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D]">
              <h3 className="text-base font-serif text-white mb-2">4. HuskyVoiceAI</h3>
              <p className="text-xs text-[#8B949E] leading-relaxed">
                Specializes in 24/7 inbound reception for property brokerages, auto-categorizing buyer intent and offering live human call transfers.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D]">
              <h3 className="text-base font-serif text-white mb-2">5. ElevateBox</h3>
              <p className="text-xs text-[#8B949E] leading-relaxed">
                Offers transparent usage billing at ₹7.98/minute with zero monthly platform retainers, ideal for brokerages running sporadic marketing campaigns.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D]">
              <h3 className="text-base font-serif text-white mb-2">6. Fedna AI</h3>
              <p className="text-xs text-[#8B949E] leading-relaxed">
                Provides a managed no-code setup operational within 48 hours, supporting 11 regional Indian languages for diverse buyer demographics.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#161B22] via-[#0D1117] to-[#161B22] border border-[#F59E0B]/30 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">
            Audition the Sub-435ms Real Estate Agent Live
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] max-w-2xl mx-auto mb-8">
            Experience real-time Hindi and Hinglish voice qualification with zero robotic latency. Receive a custom architectural plan for your Delhi NCR brokerage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-[#F59E0B] text-black font-semibold text-sm hover:bg-[#D97706] transition-all shadow-lg shadow-[#F59E0B]/20"
            >
              Book 30-Min Diagnostic Call
            </button>
            <Link
              href="/ai-voice-agent-for-real-estate"
              className="px-6 py-3.5 rounded-xl bg-[#21262D] text-white font-medium text-sm hover:bg-[#30363D] transition-colors border border-[#30363D]"
            >
              Explore Real Estate Workflows
            </Link>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
