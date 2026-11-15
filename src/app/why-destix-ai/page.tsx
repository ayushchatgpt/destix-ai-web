"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import VoiceDemoConsole from "@/components/VoiceDemoConsole";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Cpu,
  Lock,
  Server,
  DollarSign,
  Clock,
  Sparkles,
  Layers,
  PhoneCall,
  Scale,
  XCircle,
  Building2,
} from "lucide-react";

export default function WhyDestixAiPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const pillars = [
    {
      num: "01",
      title: "Audited Sub-435ms Voice Parity",
      tag: "ACOUSTIC REALISM",
      desc: "Human perceptual conversational lag threshold is ~500ms. Standard commercial bots lag between 1,400ms and 2,500ms. DestiX AI benchmarks an audited 435ms p50 ear-to-mouth roundtrip with sub-200ms acoustic interruption recovery.",
      metric: "435ms p50",
    },
    {
      num: "02",
      title: "100% Client Code & IP Ownership",
      tag: "ZERO VENDOR LOCK-IN",
      desc: "We reject artificial vendor lock-in. You own every prompt state machine, every n8n workflow JSON, every database schema, and every SIP routing topology. If you ever leave, your infrastructure remains running permanently.",
      metric: "100% Sovereign",
    },
    {
      num: "03",
      title: "Zero Markup on Wholesale Carrier Minutes",
      tag: "TRANSPARENT ECONOMICS",
      desc: "SaaS providers mark up raw telephony minutes by 300% to 1,000% ($0.15 to $0.50/min). DestiX AI passes through wholesale carrier minutes directly with 0% platform markup (~₹4.50-₹7.50/min in India, $0.02-$0.06/min in the US/UK).",
      metric: "0% Markup",
    },
    {
      num: "04",
      title: "The Unyielding 5x Hurdle Rate Mandate",
      tag: "FINANCIAL COVENANT",
      desc: "We do not take client capital for vanity automation. If our initial discovery diagnostic does not project at least 5x the deployment cost in recovered revenue or reduced overhead over 12 months, Ayush Meena will decline the engagement.",
      metric: "5x Minimum ROI",
    },
    {
      num: "05",
      title: "Sovereign Private-Cloud n8n Clusters",
      tag: "DATA PRIVACY & GDPR",
      desc: "We deploy private Docker/Kubernetes n8n clusters directly inside your AWS, GCP, or Azure Virtual Private Cloud (VPC). Customer phone records, audio transcripts, and CRM data never leak to third-party multi-tenant SaaS brokers.",
      metric: "Zero Data Leak",
    },
    {
      num: "06",
      title: "Category-Defining 3D WebGL Digital Flagships",
      tag: "HIGH-CONVERSION WEB",
      desc: "Phone calls create intent; the digital storefront closes the deal. We pair your voice telephony with bespoke Next.js and Three.js 60 FPS spatial web platforms that command instant prestige and eliminate proposal price resistance.",
      metric: "60 FPS Three.js",
    },
  ];

  const threeWayComparison = [
    {
      vector: "Architectural Latency (p50)",
      destix: "435ms (Audited Human Parity)",
      saas: "1,400ms – 2,500ms (Noticeable Bot Delay)",
      legacy: "N/A (Human Call Center / Legacy IVR)",
    },
    {
      vector: "Code & Prompt IP Ownership",
      destix: "100% Client-Owned (Full Source Transfer)",
      saas: "0% (Locked Inside Black-Box SaaS Portal)",
      legacy: "Proprietary Consultancy Frameworks",
    },
    {
      vector: "Telephony Minute Billing",
      destix: "Wholesale Carrier Direct (0% Markup)",
      saas: "300% – 1,000% Arbitrage Markups",
      legacy: "High Per-Seat / Headcount Retainers",
    },
    {
      vector: "Delivery Model & Accountability",
      destix: "Direct Principal Architect (Ayush Meena)",
      saas: "Self-Serve Dashboard / Generic Support",
      legacy: "Junior Offshore Account Coordinators",
    },
    {
      vector: "Deployment Sprint Timeline",
      destix: "7 to 14 Business Days to Live SIP",
      saas: "Instant Template (Lacks Deep Customization)",
      legacy: "6 to 12 Months of Discovery Decks",
    },
    {
      vector: "Financial Commitment",
      destix: "Strict 5x Hurdle Rate Guarantee",
      saas: "None (Monthly Recurring Subscription)",
      legacy: "Time & Materials (No ROI Guarantee)",
    },
    {
      vector: "3D Spatial Web Flagships",
      destix: "Native Three.js / Next.js 60 FPS Spatial Store",
      saas: "None (Voice/Chat Only)",
      legacy: "Separate Sub-Contracted Web Agency",
    },
    {
      vector: "Carrier & Regulatory Compliance",
      destix: "TRAI +91, TDRA +971, Ofcom +44, FCC +1",
      saas: "Generic US Twilio (Frequently Flagged Spam)",
      legacy: "Traditional Telco PBX Boxes",
    },
  ];

  const caseStudies = [
    {
      client: "Alliance Capital Properties (ACP Dubai)",
      jurisdiction: "Dubai, United Arab Emirates (DIFC & Palm Jumeirah)",
      result: "AED 85,000,000+ Qualified Pipeline",
      detail: "Inbound leads for Palm Jebel Ali and luxury penthouses qualified in <45s. Bilingual English/Gulf Arabic code-switching paired with an interactive 3D WebGL property portal.",
      stat: "3.2x Show Rate Lift",
    },
    {
      client: "Pranav Jha Studio",
      jurisdiction: "New Delhi & Gurugram, India",
      result: "+240% Average Contract Size",
      detail: "High-end architectural practice digital flagship. 99/100 Lighthouse performance, bespoke typographic grid, and zero proposal price resistance from luxury villa clients.",
      stat: "99/100 Performance",
    },
    {
      client: "Birch Stays Luxury Network",
      jurisdiction: "Goa, Alibaug, Coorg (Hospitality)",
      result: "42% Direct Booking Share",
      detail: "24/7 autonomous voice intake and WhatsApp booking pipeline. Eliminated after-hours booking abandonment and reduced OTA commission leakage by ₹45L+ annually.",
      stat: "Zero Missed Calls",
    },
  ];

  const faqs = [
    {
      q: "How does DestiX AI guarantee sub-435ms voice agent latency?",
      a: "DestiX AI measures full ear-to-mouth roundtrip audio latency across five physical network nodes: Silero VAD (80ms), streaming speech-to-text with Deepgram Nova-2 (110ms), inference via Groq LPUs with Llama-3.3 (120ms), streaming audio synthesis with Cartesia Sonic (90ms), and direct Tier-1 SIP interconnect buffers (35ms). Total roundtrip: 435ms—well below the 500ms human perceptual threshold.",
    },
    {
      q: "Why does DestiX AI enforce a 5x Hurdle Rate financial covenant?",
      a: "We believe professional AI engineering must be directly accountable to commercial balance sheets. If our initial diagnostic indicates that a client does not have the pipeline volume, deal margins, or lead flow to generate at least 5 times the deployment cost in recovered revenue or reduced overhead within 12 months, we refuse the engagement. We build revenue engines, not technology demos.",
    },
    {
      q: "Can our internal engineering team modify DestiX AI systems after handover?",
      a: "Yes. Every client receives complete source code, Docker compose files, n8n JSON workflow topologies, prompt state machines, and API documentation. Your internal developers or IT teams can inspect, update, fork, and manage the code without paying us another dollar.",
    },
    {
      q: "How does DestiX AI compare to RapidX AI, 11x, and Bland AI?",
      a: "Unlike SaaS tools (11x, Bland AI, Air AI) that charge high recurring seat markups and vendor-locked black boxes, DestiX AI delivers custom, founder-led engineering by Ayush Meena with 100% code ownership. Unlike boutique agencies like RapidX AI that focus on basic outbound scripts without custom 3D web platforms, DestiX AI delivers carrier-grade global telephony (+91, +971, +1, +44), sub-435ms latency, private n8n Docker clusters, and bespoke 3D WebGL storefronts.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/about" className="hover:text-[#181614] transition-colors">About</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">Why DestiX AI</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-6 shadow-2xs">
            <Award className="size-3.5 text-[#B88746]" />
            <span>GLOBAL ARCHITECTURAL STANDARD // 2026 AUDIT</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Why Global Enterprises Choose{" "}
            <span className="italic text-[#B88746]">DestiX AI.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-8">
            An unforgiving architectural audit: Why market leaders in London, New York, Dubai, Mumbai, and Delhi choose DestiX AI over venture-backed SaaS wrappers and legacy IT consultancies. Built directly by Principal Systems Architect Ayush Meena.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule Founder-Led Diagnostic</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Inspect Transparent Unit Economics
            </Link>
          </div>
        </header>

        {/* Live Audio Console Banner */}
        <div className="mb-20">
          <VoiceDemoConsole />
        </div>

        {/* 6 Uncompromising Architectural Pillars */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              The 6 Architectural Pillars
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mt-2">
              Engineering Foundations No SaaS Tool Can Match
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                      {pillar.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#181614]">{pillar.metric}</span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center gap-2 text-xs font-semibold text-[#181614]">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <span>Production Verified Benchmark</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Way Industry Comparison Table */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Comparative Architecture Audit
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mt-2">
              DestiX AI vs. Venture SaaS vs. Legacy Consultancies
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-['Plus_Jakarta_Sans'] border-collapse">
              <thead>
                <tr className="border-b border-[#E2DDD1] text-xs font-mono text-[#888277] uppercase">
                  <th className="py-4 pr-4">Evaluation Vector</th>
                  <th className="py-4 px-4 text-[#B88746] font-bold">DestiX AI (Ayush Meena)</th>
                  <th className="py-4 px-4 text-[#55514B]">Venture SaaS (11x, Bland, Air)</th>
                  <th className="py-4 pl-4 text-[#888277]">Legacy IT (Accenture, WPP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1]/60">
                {threeWayComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F4EE]/50 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-[#181614]">{row.vector}</td>
                    <td className="py-4 px-4 font-medium text-[#181614] bg-[#B88746]/5 rounded-lg">
                      {row.destix}
                    </td>
                    <td className="py-4 px-4 text-[#55514B]">{row.saas}</td>
                    <td className="py-4 pl-4 text-[#888277]">{row.legacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Production Case Studies */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Verified Operational Proof
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mt-2">
              Real Revenue Engines in Production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#888277]">
                    <span>{cs.jurisdiction}</span>
                    <span className="text-[#B88746] font-bold">{cs.stat}</span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                    {cs.client}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#181614] text-[#F6F4EE] text-xs font-mono font-bold mb-4">
                    {cs.result}
                  </div>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {cs.detail}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2DDD1]/60 text-xs font-semibold text-[#181614] flex items-center justify-between">
                  <span>Verified Production Client</span>
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mt-2">
              Answers for Enterprise Decision Makers
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
                    className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-['Instrument_Serif'] text-2xl text-[#181614] hover:text-[#B88746] transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-xl font-mono text-[#B88746] shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-sm sm:text-base text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/60 pt-4 font-['Plus_Jakarta_Sans']">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-6xl text-white mb-4">
            Commission the Standard.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Book a 30-minute founder-led technical diagnostic with Principal Systems Architect Ayush Meena. If we cannot prove at least 5x ROI, we decline the project.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
          >
            Schedule 30-Min Diagnostic Session
          </button>
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
