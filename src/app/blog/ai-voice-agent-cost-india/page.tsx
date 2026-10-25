"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Calculator,
  Coins,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Server,
  Layers,
  PhoneCall,
  AlertCircle,
} from "lucide-react";

export default function AIVoiceAgentCostIndiaPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const costLayers = [
    {
      layer: "Layer 1: Speech-to-Text (STT)",
      tech: "Deepgram Nova-2 (North Indian Acoustic Models)",
      rate: "₹0.35 – ₹0.50 / minute",
      note: "Processes incoming spoken English, pure Hindi, and Hinglish with sub-120ms streaming transcription.",
    },
    {
      layer: "Layer 2: Large Language Model (LLM) Inference",
      tech: "Groq LPU / Llama-3.3 70B / OpenAI GPT-4o-mini",
      rate: "₹0.45 – ₹1.20 / minute",
      note: "Ultra-fast streaming token generation with strict prompt guardrails and zero hallucinations.",
    },
    {
      layer: "Layer 3: Text-to-Speech (TTS) Synthesis",
      tech: "Cartesia Sonic / ElevenLabs Flash Latency Models",
      rate: "₹1.80 – ₹2.80 / minute",
      note: "Sub-150ms speech synthesis delivering human breathing, natural tone inflection, and poise.",
    },
    {
      layer: "Layer 4: Indian Carrier SIP Trunking & Telephony",
      tech: "Tata Tele / Airtel / Exotel Enterprise Interconnect",
      rate: "₹0.80 – ₹1.40 / minute",
      note: "Domestic +91 mobile virtual numbers and landline DIDs with TRAI/DLT regulatory compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#131210] selection:bg-[#B88746]/20 selection:text-[#131210]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Breadcrumb Strip */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#7A756D]">
            <Link href="/" className="hover:text-[#131210] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <Link href="/blog" className="hover:text-[#131210] transition-colors">
              Technical Dispatches
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-[#B88746]">AI Voice Agent Cost in India</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mb-6">
            <Coins className="size-3.5" />
            2026 Enterprise Telephony Economics & Pricing Scorecard
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight leading-[1.08] text-[#131210] max-w-5xl mb-6">
            AI Voice Agent Cost in India:{" "}
            <span className="italic font-normal text-[#7A756D]">
              Setup Fees, Per-Minute Rates & ROI Benchmarks
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#5A554E] max-w-3xl leading-relaxed mb-8">
            How much does an enterprise AI voice agent actually cost to build and operate in
            India? From wholesale carrier per-minute telephony to one-time sprint
            deployments, here is an audited breakdown of real costs comparing DestiX AI,
            Decibel Labs, RapidX AI, and human call centers.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5E0D5] text-xs font-mono text-[#7A756D]">
            <div className="flex items-center gap-2">
              <Calendar className="size-3.5 text-[#B88746]" />
              <span>Published: October 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-3.5 text-[#B88746]" />
              <span>8 Min Financial Audit</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-[#B88746]" />
              <span>Zero Vendor Lock-In Standard</span>
            </div>
          </div>
        </section>

        {/* The 4-Layer Infrastructure Cost Breakdown */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono font-semibold text-[#B88746] uppercase tracking-wider">
              The Real Cost Stack
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#131210] mt-2 mb-3">
              Where Does the Money Go? The 4 Per-Minute Infrastructure Layers
            </h2>
            <p className="text-sm text-[#5A554E] max-w-2xl">
              Unlike SaaS aggregators that charge marked-up flat rates, enterprise voice AI
              is composed of 4 modular engineering components:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {costLayers.map((c, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E5E0D5] rounded-2xl shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-[#7A756D]">
                    {c.layer}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#B88746] bg-[#B88746]/10 px-2.5 py-0.5 rounded-md">
                    {c.rate}
                  </span>
                </div>
                <h3 className="font-display text-lg font-medium text-[#131210] mb-2">
                  {c.tech}
                </h3>
                <p className="text-xs text-[#5A554E] leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#131210] text-[#F6F4EE] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider block">
                Total Marginal Infrastructure Cost
              </span>
              <div className="text-2xl sm:text-3xl font-display font-medium text-white mt-1">
                ₹3.40 – ₹5.90 per connected minute
              </div>
            </div>
            <div className="text-xs text-neutral-400 max-w-md">
              This is the true baseline cost of high-quality conversational telephony in India.
              Any provider charging ₹15–₹25/min is pocketing a 300%+ software markup.
            </div>
          </div>
        </section>

        {/* Industry Pricing Comparison Matrix */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <span className="text-xs font-mono font-semibold text-[#B88746] uppercase tracking-wider">
              Comparative Analysis
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#131210] mt-2 mb-3">
              India Pricing Matrix: DestiX AI vs Decibel Labs vs RapidX AI vs Human Staff
            </h2>
            <p className="text-sm text-[#5A554E] max-w-2xl">
              Compare transparent sprint engineering against subscription retainers and
              human call desks.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-[#E5E0D5] rounded-xl text-left text-xs">
              <thead>
                <tr className="bg-[#F0ECE1] border-b border-[#E5E0D5] font-mono text-[#5A554E]">
                  <th className="p-4 font-semibold">Cost Component</th>
                  <th className="p-4 font-semibold text-[#B88746]">DestiX AI (Enterprise Sprint)</th>
                  <th className="p-4 font-semibold">Decibel Labs (decibellabs.ai)</th>
                  <th className="p-4 font-semibold">RapidX AI (rapidxai.com)</th>
                  <th className="p-4 font-semibold">In-House Human Reception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D5] text-[#3A352E]">
                <tr>
                  <td className="p-4 font-semibold font-mono">One-Time Setup Fee</td>
                  <td className="p-4 font-semibold text-[#131210] bg-[#B88746]/5">
                    ₹35,000 – ₹150,000 (Full custom sprint)
                  </td>
                  <td className="p-4">Platform onboarding tier</td>
                  <td className="p-4">Included in recurring retainers</td>
                  <td className="p-4">₹15,000 – ₹30,000 (Recruitment & training)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold font-mono">Per-Minute Rate</td>
                  <td className="p-4 font-semibold text-emerald-700 bg-[#B88746]/5">
                    ₹4.50 – ₹7.00 / min (Pass-through wholesale)
                  </td>
                  <td className="p-4">Starts at ₹6.00 / min (Launch plan)</td>
                  <td className="p-4">Bundled in monthly plan caps</td>
                  <td className="p-4">Effective ₹12 – ₹18 / min (Salary ÷ active talk time)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold font-mono">Monthly Minimum Commitment</td>
                  <td className="p-4 font-semibold text-emerald-700 bg-[#B88746]/5">
                    Zero monthly lock-in (Pay as you talk)
                  </td>
                  <td className="p-4">Minimum monthly volume tier</td>
                  <td className="p-4">₹7,000 – ₹40,000 / month retainer</td>
                  <td className="p-4">₹25,000 – ₹45,000 / month fixed salary</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold font-mono">Operating Hours</td>
                  <td className="p-4 font-semibold text-emerald-700 bg-[#B88746]/5">
                    24/7/365 (Zero missed night calls)
                  </td>
                  <td className="p-4">24/7/365</td>
                  <td className="p-4">24/7/365</td>
                  <td className="p-4 text-rose-700">8–9 hours/day (Night leads lost)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold font-mono">Speed to Lead Response</td>
                  <td className="p-4 font-semibold text-emerald-700 bg-[#B88746]/5">
                    &lt; 45 Seconds (Instant outbound trigger)
                  </td>
                  <td className="p-4">API dependent</td>
                  <td className="p-4">Automated workflow</td>
                  <td className="p-4 text-rose-700">2 to 6 hours average</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold font-mono">Code Ownership & IP</td>
                  <td className="p-4 font-semibold text-emerald-700 bg-[#B88746]/5">
                    Client owns prompt logic & CRM plumbing
                  </td>
                  <td className="p-4">Proprietary platform host</td>
                  <td className="p-4">Agency managed container</td>
                  <td className="p-4">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ROI Breakdown Calculator Example */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 bg-white border border-[#E5E0D5] rounded-3xl shadow-sm">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#131210] mb-4">
              Real-World Financial Model: A Gurugram Real Estate Brokerage
            </h2>

            <p className="text-sm text-[#5A554E] mb-6 leading-relaxed">
              Consider a luxury real estate brokerage generating 1,000 ad leads per month on
              Meta and Google Ads for ₹4 Cr – ₹12 Cr apartments on Golf Course Extension Road:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-rose-50/50 border border-rose-200 rounded-xl">
                <span className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider block mb-2">
                  Traditional Human Sales Desk
                </span>
                <ul className="space-y-2 text-xs text-[#3A352E]">
                  <li>• 2 Sales Reps: ₹70,000/month fixed overhead</li>
                  <li>• Average callback time: 3 hours 45 minutes</li>
                  <li>• Lead contact rate: 32% (680 leads never pick up)</li>
                  <li>• Qualified site visits booked: 16 visits</li>
                  <li>• Effective cost per booked visit: ₹4,375</li>
                </ul>
              </div>

              <div className="p-6 bg-emerald-50/50 border border-emerald-200 rounded-xl">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                  DestiX AI Autonomous Telephony
                </span>
                <ul className="space-y-2 text-xs text-[#3A352E]">
                  <li>• Total telephony cost (1,000 calls x 2.5 min @ ₹5/min): ₹12,500</li>
                  <li>• Average callback time: 38 seconds</li>
                  <li>• Lead contact rate: 74% (740 leads pick up immediately)</li>
                  <li>• Qualified site visits booked: 52 visits</li>
                  <li>• Effective cost per booked visit: ₹240 (18x efficiency gain)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic CTA */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="p-8 sm:p-14 bg-[#131210] text-[#F6F4EE] rounded-3xl border border-[#B88746]/40 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746]">
                Transparent Scoping • New Delhi 110001
              </span>

              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
                Calculate the Exact Unit Economics for Your Enterprise
              </h2>

              <p className="mt-4 text-base text-neutral-300 leading-relaxed">
                We do not sell generic SaaS tiers. In a 30-minute diagnostic session with{" "}
                <strong className="text-white">Ayush Meena</strong>, we calculate your
                expected call minutes, carrier SIP rates, and lead recovery ROI in writing.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="px-6 py-3.5 bg-[#B88746] text-[#131210] rounded-xl text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#C99857] transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
                >
                  <PhoneCall className="size-3.5" />
                  <span>Request Custom Pricing Audit</span>
                </button>

                <Link
                  href="/blog/best-ai-voice-agent-in-new-delhi"
                  className="px-6 py-3.5 bg-neutral-900 border border-neutral-700 text-neutral-200 rounded-xl text-xs font-mono uppercase tracking-wider hover:border-[#B88746] transition-colors"
                >
                  Read New Delhi Comparison Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
