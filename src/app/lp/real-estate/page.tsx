"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import LiveCallDemoTrigger from "@/components/LiveCallDemoTrigger";
import { initAttribution } from "@/lib/attribution";
import {
  Building2,
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
  ChevronDown,
  Layers,
  Sliders,
  DollarSign,
  PhoneIncoming,
  Bot,
  Flame,
  Check,
  X as CloseIcon,
} from "lucide-react";

export default function RealEstateLandingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // ROI Calculator State
  const [monthlySpend, setMonthlySpend] = useState<number>(35000); // in USD / AED equiv
  const [avgDealValue, setAvgDealValue] = useState<number>(650000);
  const [currentResponseTime, setCurrentResponseTime] = useState<number>(180); // minutes

  useEffect(() => {
    initAttribution();
  }, []);

  // ROI Calculations
  // Baseline conversion drop: Leads called in <45s convert at 391% higher rate than leads called after 30+ minutes
  const estimatedLeads = Math.round(monthlySpend / 85);
  const leakedLeads = Math.round(estimatedLeads * (currentResponseTime > 30 ? 0.68 : 0.35));
  const recoveredDeals = Math.max(1, Math.round((leakedLeads * 0.045)));
  const addedPipeline = recoveredDeals * avgDealValue;
  const netCommissionROI = Math.round((addedPipeline * 0.02) / (monthlySpend * 0.15));

  const faqs = [
    {
      q: "How does DestiX AI guarantee a sub-45-second callback on Meta and Google ad leads?",
      a: "When a prospect submits an instant form on Instagram, Facebook, or Google Search, our serverless ingestion webhook catches the payload in <80ms. The engine immediately normalizes the phone number, validates against DNC, triggers our direct carrier SIP trunk, and dials the prospect. Over 94% of our client calls connect within 28 to 38 seconds of ad submission.",
    },
    {
      q: "Can the voice agent speak Arabic, British RP, and Hinglish naturally without sounding robotic?",
      a: "Yes. We configure specialized acoustic models combining Cartesia Sonic and Deepgram Nova-3 with sub-120ms turn-taking. For the Gulf region, our agents switch seamlessly between Gulf Arabic, Levantine, and international English. For Indian and UK brokerages, our models master luxury real estate terminology (e.g., off-plan, DLD fees, post-handover payment plans, freehold zones) with zero accent jitter.",
    },
    {
      q: "What happens when a buyer wants to see a brochure or book a site visit?",
      a: "Mid-call, our agent verifies the buyer's budget, bedroom requirement, and investor vs. end-user profile. Upon verbal confirmation, the agent instantly executes an automated n8n/webhook workflow that delivers the high-res project brochure and floor plans via WhatsApp Business API while still on the line, and synchronizes a calendar invite for a private VIP site walk with your senior sales director.",
    },
    {
      q: "Does this integrate directly into Salesforce, HubSpot, or bespoke real estate CRMs?",
      a: "Yes. DestiX integrates natively with HubSpot, Salesforce, Zoho, Bitrix24, and proprietary agency CRMs. Every call produces a high-fidelity stereo recording, clean verbatim transcript, structured qualification metadata (budget, timeline, financing preference), and an automated sentiment score tagged directly to the lead record.",
    },
    {
      q: "How does DestiX compare to generic voice platforms like Vapi, Retell, or Bland AI?",
      a: "Generic platforms are SaaS aggregators that charge marked-up per-minute fees, suffer from unpredictable 800ms-1500ms latency spikes, and lack carrier-grade direct SIP routing. DestiX provides sovereign, zero-markup infrastructure engineered specifically for luxury enterprise transactions with audited 435ms P50 latency and turnkey custom workflow orchestration.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Architectural Grid & Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2DDD1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2DDD1] shadow-xs text-xs font-mono tracking-wider uppercase text-[#B88746]">
              <Flame className="w-3.5 h-3.5 text-[#B88746]" />
              <span>SUB-45s LUXURY REAL ESTATE SPEED-TO-LEAD TELEPHONY</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-[#181614]">
              Stop burning ad spend. Call luxury buyers in{" "}
              <span className="italic text-[#B88746]">under 45 seconds</span>.
            </h1>
            <p className="text-base sm:text-xl text-[#55514B] font-normal leading-relaxed max-w-2xl mx-auto">
              Leads called within 45 seconds convert at <strong className="text-[#181614] font-semibold">391% higher rates</strong> than those called at the 30-minute mark. DestiX AI qualifies high-net-worth investors, dispatches WhatsApp brochures, and books private site visits 24/7.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#B88746]">&lt; 38s</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Average Call SLA</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#181614]">435ms</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Audited P50 Latency</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#181614]">94.2%</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Contact Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#B88746]">AED 85M+</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Pipeline Generated</div>
            </div>
          </div>

          {/* Embedded Live Call Demo Widget */}
          <div className="max-w-3xl mx-auto mb-16">
            <LiveCallDemoTrigger
              defaultVertical="Luxury Real Estate"
              defaultAccent="Dubai Gulf Arabic & English"
              headline="Test The Real Estate AI Agent On Your Phone Right Now"
              subheadline="Enter your direct phone number below. Our sovereign telephony carrier will dial you in under 45 seconds so you can test conversational qualification, interruption recovery, and accent fluency first-hand."
              theme="dark"
            />
          </div>

          {/* Social Proof / Anonymized Verified Track Record */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#EDE8DC] border border-[#D8D2C4] max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#B88746] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#B88746]" />
                  <span>Verified Client Case Dossier // Mutual NDA</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181614]">
                  Premier UAE Luxury Real Estate Advisory
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B]">
                  Off-Plan Palm Jumeirah &amp; DIFC Portfolio &bull; 85M+ AED qualified pipeline in 90 days with zero added telecallers.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="px-4 py-2.5 rounded-xl bg-white border border-[#D8D2C4] text-center">
                  <div className="text-lg font-mono font-bold text-[#B88746]">4.8x</div>
                  <div className="text-[10px] font-mono text-[#888277] uppercase">Ad Spend ROAS</div>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white border border-[#D8D2C4] text-center">
                  <div className="text-lg font-mono font-bold text-[#181614]">&lt;35s</div>
                  <div className="text-[10px] font-mono text-[#888277] uppercase">Median Callback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mathematics of Lead Decay Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#FFFFFF] border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              THE BRUTAL REALITY OF META &amp; GOOGLE ADS
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] leading-tight mb-4">
              Why your brokerage is bleeding 60% of high-ticket buyer leads
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] leading-relaxed">
              When an investor taps an ad on Instagram at 9:30 PM, they are actively looking at properties. Every 60 seconds of delay drops their purchase intent exponentially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1] relative">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 font-mono font-bold text-sm">
                01
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                The 5-Minute Lead Cliff
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                MIT and InsideSales telemetry demonstrates that calling an ad lead within 5 minutes results in a <strong>21x qualification increase</strong> compared to 30 minutes. At 4 hours, the lead is completely dead.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1] relative">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 font-mono font-bold text-sm">
                02
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                After-Hours Ad Waste
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                54% of luxury property ad submissions occur outside standard 9 AM - 6 PM office hours. Human SDR teams respond the next morning—after the buyer has registered with 3 rival brokerages.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1] relative">
              <div className="w-10 h-10 rounded-2xl bg-[#EDE8DC] border border-[#D8D2C4] flex items-center justify-center text-[#B88746] mb-4 font-mono font-bold text-sm">
                03
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                Human Agent Inconsistency
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                Junior telecallers frequently forget payment plan specifics, mispronounce prime community landmarks, and fail to log structured CRM notes, corrupting attribution and pipeline forecasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="py-20 px-4 sm:px-6 bg-[#F6F4EE]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8DC] border border-[#D8D2C4] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              REVENUE RECOVERY AUDIT
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              Calculate the revenue hidden in your current ad lead response time
            </h2>
            <p className="text-sm sm:text-base text-[#55514B]">
              Adjust the sliders below to calculate your estimated leaked pipeline and DestiX AI payback multiple.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">MONTHLY META / GOOGLE AD SPEND</span>
                  <span className="text-[#B88746] font-bold text-sm">
                    ${monthlySpend.toLocaleString()} / AED {(monthlySpend * 3.67).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>$5,000</span>
                  <span>$75,000</span>
                  <span>$150,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">AVERAGE PROPERTY TRANSACTION VALUE</span>
                  <span className="text-[#181614] font-bold text-sm">
                    ${avgDealValue.toLocaleString()} / AED {(avgDealValue * 3.67).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="3000000"
                  step="50000"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>$200k</span>
                  <span>$1.5M</span>
                  <span>$3M+ Sky Villas</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">CURRENT AVERAGE LEAD RESPONSE TIME</span>
                  <span className="text-rose-600 font-bold text-sm">
                    {currentResponseTime < 60 ? `${currentResponseTime} Minutes` : `${(currentResponseTime / 60).toFixed(1)} Hours`}
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="480"
                  step="15"
                  value={currentResponseTime}
                  onChange={(e) => setCurrentResponseTime(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>15 Mins</span>
                  <span>3 Hours (Industry Avg)</span>
                  <span>8 Hours+</span>
                </div>
              </div>
            </div>

            {/* Calculations Outcome (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#131210] text-[#F6F4EE] border border-[#2D2823] space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#B88746]">
                AUDITED PIPELINE RECOVERY ESTIMATE
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#888277]">ANNUALIZED RECOVERED PIPELINE</div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#F6F4EE]">
                  ${(addedPipeline * 12).toLocaleString()}
                </div>
                <div className="text-xs font-mono text-[#B88746] mt-0.5">
                  &asymp; AED {((addedPipeline * 12) * 3.67).toLocaleString()} Gross GDV
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#2D2823] text-xs font-mono">
                <div>
                  <div className="text-[#888277]">MONTHLY LEADS</div>
                  <div className="text-sm font-bold text-[#F6F4EE]">{estimatedLeads} leads</div>
                </div>
                <div>
                  <div className="text-[#888277]">SAVED FROM LEAKAGE</div>
                  <div className="text-sm font-bold text-emerald-400">+{recoveredDeals} Closed Deals/mo</div>
                </div>
              </div>

              <button
                onClick={() => setBookingOpen(true)}
                className="w-full py-3.5 rounded-xl bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-bold text-xs uppercase font-mono tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Deploy Sub-45s SLA Telephony</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: DestiX AI vs Generic SaaS vs Human Floor */}
      <section className="py-20 px-4 sm:px-6 bg-[#FFFFFF] border-t border-[#E2DDD1]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              ARCHITECTURAL BENCHMARK
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              DestiX AI vs. Generic SaaS Wrappers vs. Human Telecallers
            </h2>
            <p className="text-sm sm:text-base text-[#55514B]">
              Why high-end luxury brokerages choose sovereign infrastructure over fragile consumer tools.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#E2DDD1] text-xs font-mono uppercase text-[#888277]">
                  <th className="py-4 px-4 font-normal">Technical Feature / Metric</th>
                  <th className="py-4 px-4 bg-[#EDE8DC]/50 text-[#B88746] font-bold rounded-t-xl">
                    DestiX AI Sovereign Circuit
                  </th>
                  <th className="py-4 px-4 font-normal">Generic SaaS Wrapper (Vapi/Retell)</th>
                  <th className="py-4 px-4 font-normal">Traditional Human Telecaller Floor</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm divide-y divide-[#E2DDD1]">
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Speed-to-Lead SLA</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-[#B88746]">&lt; 38 Seconds</td>
                  <td className="py-4 px-4 text-[#55514B]">5 - 15 Minutes (webhook delays)</td>
                  <td className="py-4 px-4 text-rose-600">2 to 8 Hours (business hours only)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Ear-to-Mouth Latency</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-emerald-600">435ms P50 Audited</td>
                  <td className="py-4 px-4 text-[#55514B]">900ms - 1,800ms (jitter spikes)</td>
                  <td className="py-4 px-4 text-[#55514B]">250ms (Human)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Interruption Handling (VAD)</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-semibold text-[#181614]">
                    Silero v4 (120ms cutoff)
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">Clunky pause / awkward overlaps</td>
                  <td className="py-4 px-4 text-[#55514B]">Natural, but prone to fatigue</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Dialect &amp; Accent Fluency</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-semibold text-[#181614]">
                    Gulf Arabic, British RP, Hinglish
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">Generic US synthetic robotic</td>
                  <td className="py-4 px-4 text-[#55514B]">Varies wildly by agent shift</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Instant WhatsApp Brochure</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-emerald-600">
                    <Check className="w-4 h-4 inline mr-1 text-emerald-600" /> Automated On-Call
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">Requires manual zapier stitching</td>
                  <td className="py-4 px-4 text-rose-600">Forgotten in 60% of calls</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Carrier Infrastructure</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-semibold text-[#181614]">
                    Direct Tier-1 SIP (Zero SaaS markup)
                  </td>
                  <td className="py-4 px-4 text-rose-600">30% to 50% per-minute SaaS tax</td>
                  <td className="py-4 px-4 text-[#55514B]">Fixed salaries + phone bills</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4-Step 14-Day Deployment Sprint */}
      <section className="py-20 px-4 sm:px-6 bg-[#F6F4EE]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8DC] border border-[#D8D2C4] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              DEPLOYMENT TIMELINE
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              Live in production within 14 days
            </h2>
            <p className="text-sm sm:text-base text-[#55514B]">
              A turnkey engineering sprint managed by our principal systems architects. Zero friction for your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
              <div className="text-xs font-mono text-[#B88746] font-bold mb-2">DAYS 01 - 03</div>
              <h4 className="font-serif text-lg font-bold text-[#181614] mb-2">Telemetry &amp; Prompts</h4>
              <p className="text-xs text-[#55514B] leading-relaxed">
                Ingest your past 500 top-performing sales calls. Map objections, pricing rules, payment plans, and WhatsApp assets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
              <div className="text-xs font-mono text-[#B88746] font-bold mb-2">DAYS 04 - 07</div>
              <h4 className="font-serif text-lg font-bold text-[#181614] mb-2">Carrier &amp; Webhooks</h4>
              <p className="text-xs text-[#55514B] leading-relaxed">
                Provision direct local DIDs (+971, +91, +44, +1), establish Meta/Google webhook ingestion, and wire CRM bi-directional sync.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
              <div className="text-xs font-mono text-[#B88746] font-bold mb-2">DAYS 08 - 10</div>
              <h4 className="font-serif text-lg font-bold text-[#181614] mb-2">Shadow Pilot Testing</h4>
              <p className="text-xs text-[#55514B] leading-relaxed">
                Run 100 simulated stress-test calls with live voice architects. Fine-tune Silero VAD thresholds and accent pronunciation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#131210] text-[#F6F4EE] border border-[#2D2823] shadow-md">
              <div className="text-xs font-mono text-[#B88746] font-bold mb-2">DAY 14</div>
              <h4 className="font-serif text-lg font-bold text-[#F6F4EE] mb-2">Production Cutover</h4>
              <p className="text-xs text-[#A89F93] leading-relaxed">
                Flip ad traffic to sub-45s autonomous callbacks with 24/7 telemetry monitoring and instant Slack/WhatsApp lead alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#FFFFFF] border-t border-[#E2DDD1]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              Everything you need to know about deployment
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#181614] hover:text-[#B88746] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B88746] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Deployment Footer */}
      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService="Sub-45s Luxury Real Estate Speed-to-Lead Telephony"
      />
    </div>
  );
}