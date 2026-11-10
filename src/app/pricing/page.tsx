"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Zap,
  PhoneCall,
  Sparkles,
  TrendingUp,
  HelpCircle,
  Plus,
  Minus,
  Check,
  X,
  ChevronRight,
  Building2,
  DollarSign,
} from "lucide-react";

export default function PricingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [minutes, setMinutes] = useState(15000);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Traditional call center cost: $1.20/min
  const traditionalCost = Math.round(minutes * 1.2);

  // Typical SaaS markup: $0.30/min
  const saasCost = Math.round(minutes * 0.3);

  // DestiX effective volume rate ($0.08 down to $0.045/min)
  const destixRate =
    minutes > 50000 ? 0.045 : minutes > 20000 ? 0.052 : minutes > 5000 ? 0.065 : 0.08;
  const destixCost = Math.round(minutes * destixRate + 450);

  const monthlySavings = Math.max(0, traditionalCost - destixCost);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round(((traditionalCost - destixCost) / traditionalCost) * 100);

  const faqs = [
    {
      q: "How are conversation minutes billed?",
      a: "Minutes are billed strictly at actual wholesale carrier pass-through rates (~₹4.50 to ₹7.50 per conversation minute / $0.05 to $0.08 USD). We do not apply proprietary markup onto voice minutes or telephony trunks. You receive 100% transparent usage invoices directly from the telephony infrastructure provider.",
    },
    {
      q: "Are Indian phone numbers (+91) and TRAI/DLT compliance included?",
      a: "Yes. Every production deployment includes carrier-grade domestic Indian telephony: TRAI/DLT compliant +91 virtual mobile DIDs, 011 (Delhi), and 0124 (Gurugram) landline trunks provisioned via Tier-1 Indian telecom interconnects (Tata Tele, Airtel, Exotel) with zero SIP proxy hops.",
    },
    {
      q: "Do you charge recurring software seat licenses?",
      a: "No. Unlike legacy SaaS platforms that charge $50 to $200 per agent seat every month, DestiX AI builds custom-scoped, client-owned infrastructure. You pay a one-time sprint engineering fee to architect and deploy your system, followed by transparent pass-through infrastructure costs.",
    },
    {
      q: "What is the 5x Hurdle Rate Mandate?",
      a: "Before accepting any engagement, we audit your lead volume, conversion economics, and operational bottlenecks on a 30-minute diagnostic session. If the explicit financial modeling does not show at least a 5x return on investment over a 12-month horizon, we politely decline the project.",
    },
    {
      q: "What is your deployment guarantee?",
      a: "Every custom deployment carries our 100% satisfaction guarantee. If your voice agent fails to achieve sub-500ms voice parity, automated CRM synchronization, or live telephone call handling within the agreed sprint window, we issue a full refund.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614] font-sans antialiased">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#B88746] font-semibold">Transparent Pricing &amp; Unit Economics</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-14 border-b border-[#E2DDD1] pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              TRANSPARENT UNIT ECONOMICS // THE 5X HURDLE RATE MANDATE
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[0.98] mb-6 max-w-4xl">
            Transparent Pricing.{" "}
            <span className="italic text-[#B88746]">
              Guaranteed Unit Economics.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-3xl leading-relaxed mb-6">
            Zero hidden platform fees, zero predatory minutes markups, and zero recurring seat taxes. We price based on production engineering sprints with wholesale pass-through carrier telephony.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#888277]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B88746]" /> 5x ROI Hurdle Rate Mandate
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#B88746]" /> Zero Telephony Markup Policy
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B88746]" /> 100% Client IP Ownership
            </span>
          </div>
        </header>

        {/* The 5x Hurdle Rate Commitment Box */}
        <section className="rounded-3xl bg-white border-2 border-[#B88746] p-8 sm:p-12 shadow-md mb-16 relative overflow-hidden">
          <div className="flex items-center gap-2.5 text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746] font-bold mb-4">
            <ShieldCheck className="w-5 h-5 text-[#B88746]" />
            <span>OUR INSTITUTIONAL COMMITMENT // THE 5X HURDLE RATE</span>
          </div>

          <blockquote className="font-['Instrument_Serif'] italic text-2xl sm:text-3xl md:text-4xl text-[#181614] leading-snug mb-6">
            &ldquo;Every business has distinct operational plumbing. We do not sell cookie-cutter SaaS plans. Every deployment is precision-modeled on a 30-minute diagnostic session with an explicit financial ROI model in writing. If the math does not clear a 5x return on investment, we politely decline the project.&rdquo;
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E2DDD1]">
            <div className="flex items-center gap-2.5 text-xs text-[#55514B]">
              <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0" />
              <span>Custom Unit Economics Audit</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#55514B]">
              <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0" />
              <span>Explicit Financial Model in Writing</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#55514B]">
              <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0" />
              <span>Declined if Under 5x Modeled ROI</span>
            </div>
          </div>
        </section>

        {/* Interactive Minutes & Cost Savings Modeler */}
        <section className="rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-12 shadow-xs mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
                ESTIMATED MONTHLY VOLUME
              </span>
              <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
                Model your monthly operational savings.
              </h2>
            </div>

            <div className="inline-flex items-baseline gap-2 bg-[#F6F4EE] px-5 py-2.5 rounded-2xl border border-[#E2DDD1]">
              <span className="font-['Instrument_Serif'] text-3xl sm:text-4xl font-bold text-[#181614]">
                {minutes.toLocaleString()}
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#888277]">
                MINS / MO
              </span>
            </div>
          </div>

          {/* Range Slider */}
          <input
            type="range"
            min={1000}
            max={100000}
            step={1000}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full h-3 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746] mb-4"
          />

          <div className="flex justify-between text-[11px] font-['JetBrains_Mono'] text-[#888277] mb-10">
            <span>1,000 mins</span>
            <span>25,000 mins</span>
            <span>50,000 mins</span>
            <span>75,000 mins</span>
            <span>100,000 mins</span>
          </div>

          {/* 3-Column Comparison Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider block mb-2 font-semibold">
                Traditional Telecallers ($1.20/min)
              </span>
              <div className="font-['Instrument_Serif'] text-4xl text-rose-700 font-bold mb-1">
                ${traditionalCost.toLocaleString()}
                <span className="text-xs font-normal text-[#888277]"> /mo</span>
              </div>
              <p className="text-xs text-[#55514B] leading-relaxed">
                Base wages, recruitment churn, absenteeism, supervisor overhead, and 14-hour overnight callback lag.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider block mb-2 font-semibold">
                Generic SaaS Markup ($0.30/min)
              </span>
              <div className="font-['Instrument_Serif'] text-4xl text-amber-700 font-bold mb-1">
                ${saasCost.toLocaleString()}
                <span className="text-xs font-normal text-[#888277]"> /mo</span>
              </div>
              <p className="text-xs text-[#55514B] leading-relaxed">
                High reseller markup with zero custom state machines, high robotic latency (1,800ms+), and no CRM plumbing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-[#B88746] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider font-bold">
                  DestiX AI Architecture
                </span>
                <span className="px-2 py-0.5 rounded bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold">
                  ${destixRate}/min effective
                </span>
              </div>
              <div className="font-['Instrument_Serif'] text-4xl text-emerald-700 font-bold mb-1">
                ${destixCost.toLocaleString()}
                <span className="text-xs font-normal text-[#888277]"> /mo</span>
              </div>
              <p className="text-xs text-[#55514B] leading-relaxed">
                Wholesale carrier pass-through rates, sub-435ms voice parity, and 15-second lead callbacks with 100% IP ownership.
              </p>
            </div>
          </div>

          {/* Savings Highlight Ribbon */}
          <div className="rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B88746]/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-[#B88746]" />
              </div>
              <div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block font-bold">
                  NET OPERATIONAL CAPITAL PRESERVED
                </span>
                <span className="text-sm font-semibold text-[#181614]">
                  Estimated annual savings against traditional human dialers
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl font-bold text-emerald-700">
                +${annualSavings.toLocaleString()}
                <span className="text-xs text-[#888277] font-normal font-sans"> / year</span>
              </div>
              <span className="text-[11px] font-['JetBrains_Mono'] text-emerald-700 font-bold block">
                {savingsPercent}% Lower Unit Operating Cost
              </span>
            </div>
          </div>
        </section>

        {/* The 3 Precision Deployment Packages */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
              // PRODUCTION SPRINT PACKAGES
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              Engineered Deployments. No Recurring Software Taxes.
            </h2>
            <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] mt-1">
              One-time sprint engineering fee to design, build, and deploy your custom system, paired with direct wholesale carrier telephony.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tier 1: Pilot Sprint */}
            <div className="rounded-3xl bg-white border border-[#E2DDD1] p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614]">
                    Pilot Deployment
                  </h3>
                  <span className="px-2.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[10px] font-['JetBrains_Mono'] text-[#55514B] font-semibold uppercase">
                    14-Day Delivery
                  </span>
                </div>
                <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                  Single voice agent architecture deployed in 14 days. Ideal for validating speed-to-lead on high-intent ad campaigns.
                </p>

                <div className="pb-6 border-b border-[#E2DDD1] mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Instrument_Serif'] text-4xl font-bold text-[#181614]">
                      ₹35,000 – ₹50,000
                    </span>
                  </div>
                  <span className="text-xs text-[#888277] font-['JetBrains_Mono'] block mt-1">
                    $450 – $600 USD (One-time Sprint)
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-[#55514B] font-['Plus_Jakarta_Sans']">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>1 Production Voice Agent (Inbound or Outbound)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>TRAI/DLT Compliant +91 Virtual DID or US/UAE Carrier DID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Sub-500ms Voice Parity &amp; English/Hindi Fluency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Google Calendar / Cal.com Automated Booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Telephony Minutes at Wholesale Cost (~₹4.50–₹7/min)</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-xs tracking-tight transition-all duration-300 shadow-sm"
              >
                Schedule Pilot Briefing
              </button>
            </div>

            {/* Tier 2: Full Enterprise Suite (Highlighted) */}
            <div className="rounded-3xl bg-white border-2 border-[#B88746] p-8 flex flex-col justify-between shadow-md relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B88746] text-[#F6F4EE] text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-wider">
                MOST DEPLOYED ENTERPRISE ARCHITECTURE
              </div>

              <div>
                <div className="flex items-center justify-between mb-3 mt-1">
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614]">
                    Autonomous Suite
                  </h3>
                  <span className="px-2.5 py-1 rounded-full bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase">
                    Turnkey Production
                  </span>
                </div>
                <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                  Complete inbound &amp; outbound speed-to-lead architecture for real estate developers, clinics, and high-ticket sales teams.
                </p>

                <div className="pb-6 border-b border-[#E2DDD1] mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Instrument_Serif'] text-4xl font-bold text-[#181614]">
                      ₹75,000 – ₹1,50,000
                    </span>
                  </div>
                  <span className="text-xs text-[#888277] font-['JetBrains_Mono'] block mt-1">
                    $900 – $1,800 USD (One-time Turnkey)
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-[#55514B] font-['Plus_Jakarta_Sans']">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Sub-435ms Real-Time Voice Parity with Mid-Sentence Interruption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Instant Sub-45s Lead Interception (99acres, MagicBricks, Meta Forms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Bi-Directional CRM Sync (LeadSquared, Salesforce, HubSpot, Zoho)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Automated WhatsApp Brochure, Floor Plan &amp; Location Pin Dispatch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>100% Client Codebase &amp; Prompt IP Ownership (Zero Lock-In)</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#B88746] hover:bg-[#A37336] text-[#F6F4EE] font-bold text-xs tracking-tight transition-all duration-300 shadow-md"
              >
                Commission Autonomous Suite
              </button>
            </div>

            {/* Tier 3: White-Label Agency Partner */}
            <div className="rounded-3xl bg-white border border-[#E2DDD1] p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614]">
                    Agency White-Label
                  </h3>
                  <span className="px-2.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[10px] font-['JetBrains_Mono'] text-[#55514B] font-semibold uppercase">
                    Partner Program
                  </span>
                </div>
                <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                  Fractional AI development and telephony backplane for marketing agencies reselling AI voice solutions to their own clients.
                </p>

                <div className="pb-6 border-b border-[#E2DDD1] mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Instrument_Serif'] text-4xl font-bold text-[#181614]">
                      Custom Scoping
                    </span>
                  </div>
                  <span className="text-xs text-[#888277] font-['JetBrains_Mono'] block mt-1">
                    Wholesale Per-Seat / Reseller Margin
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-[#55514B] font-['Plus_Jakarta_Sans']">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>100% Unbranded / White-Label Client Portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Multi-Agent Clusters &amp; Custom Voice Cloning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Wholesale Telephony Pass-Through ($0.045–$0.06/min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Dedicated Technical Architect &amp; 99.9% Telephony SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                    <span>Client Demo Workspaces &amp; Sales Deck Assets</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/partners/agency-white-label"
                className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-xs tracking-tight transition-all duration-300 shadow-sm text-center block"
              >
                Explore Partner Program
              </Link>
            </div>
          </div>
        </section>

        {/* Competitor Benchmark Matrix */}
        <section className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
              // MARKET TCO BENCHMARK
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              Annual Total Cost of Ownership (TCO) Audit
            </h2>
            <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] mt-1">
              Comparing 120,000 annual voice minutes across DestiX AI, generic SaaS resellers, and traditional call centers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2DDD1] bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2DDD1] bg-[#F6F4EE] text-[#55514B] font-mono text-[11px] sm:text-xs">
                  <th className="p-4 sm:p-5 font-semibold">Evaluation Metric</th>
                  <th className="p-4 sm:p-5 font-semibold text-[#B88746]">DestiX AI Practice</th>
                  <th className="p-4 sm:p-5 font-semibold">Decibel Labs / Generic SaaS</th>
                  <th className="p-4 sm:p-5 font-semibold">Traditional Telecallers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1]">
                <tr className="hover:bg-[#F6F4EE]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#181614]">Voice Turn-Taking Latency</td>
                  <td className="p-4 sm:p-5 text-[#B88746] font-bold">Sub-435ms (Human Parity)</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">1,800ms – 3,200ms (Awkward Pause)</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">Human Voice (~300ms)</td>
                </tr>
                <tr className="hover:bg-[#F6F4EE]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#181614]">Speed to Lead Intercept</td>
                  <td className="p-4 sm:p-5 text-[#B88746] font-bold">&lt; 45 Seconds (Automated)</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">Batch Outbound (5–60 mins)</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">4 to 14 Hours (Overnight Decay)</td>
                </tr>
                <tr className="hover:bg-[#F6F4EE]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#181614]">Telephony Minute Markup</td>
                  <td className="p-4 sm:p-5 text-[#B88746] font-bold">Zero (Pass-Through Wholesale)</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">300% to 500% Reseller Markup</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">Full Salary Overhead ($1.20/min)</td>
                </tr>
                <tr className="hover:bg-[#F6F4EE]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#181614]">Recurring Software Seat Tax</td>
                  <td className="p-4 sm:p-5 text-[#B88746] font-bold">$0 / Month (Client-Owned)</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">$500 to $3,000 / Month SaaS</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">HR, Payroll &amp; Supervisor Overhead</td>
                </tr>
                <tr className="hover:bg-[#F6F4EE]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#181614]">Codebase &amp; Prompt Ownership</td>
                  <td className="p-4 sm:p-5 text-[#B88746] font-bold">100% Client IP Ownership</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">Proprietary SaaS Vendor Lock-In</td>
                  <td className="p-4 sm:p-5 text-[#55514B]">High Staff Attrition (40%/mo)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
              // FAQ &amp; VERIFICATION
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E2DDD1] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-['Instrument_Serif'] text-xl sm:text-2xl text-[#181614] hover:text-[#B88746] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#B88746]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#B88746]" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed border-t border-[#E2DDD1] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#B88746] text-center shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-4">
            NO SAAS LOCK-IN // STRICT 5X HURDLE RATE
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Schedule a 30-Minute Financial Scoping Session
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto mb-8 leading-relaxed">
            We will map your current call volume, calculate your exact unit economics, and hand you an explicit ROI model in writing. If the numbers do not clear 5x, you owe us nothing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all duration-300 shadow-sm"
            >
              Book 30-Min Diagnostic Call
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300"
            >
              Contact Principal Desk
            </Link>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="Custom Pricing & Volume Sizing"
      />
    </div>
  );
}
