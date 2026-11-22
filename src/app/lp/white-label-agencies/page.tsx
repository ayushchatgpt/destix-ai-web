"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import LiveCallDemoTrigger from "@/components/LiveCallDemoTrigger";
import { initAttribution } from "@/lib/attribution";
import {
  Briefcase,
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
  Award,
  ChevronDown,
  Layers,
  Percent,
  Sliders,
  DollarSign,
  Laptop,
  Check,
  Building,
  Key,
} from "lucide-react";

export default function WhiteLabelAgenciesLandingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Agency Margin Calculator State
  const [clientCount, setClientCount] = useState<number>(12);
  const [monthlyRetainer, setMonthlyRetainer] = useState<number>(2500); // USD
  const [minutesPerClient, setMinutesPerClient] = useState<number>(1500);

  useEffect(() => {
    initAttribution();
  }, []);

  // Financial Calculations
  // Wholesale Carrier COGS with DestiX: ~$0.04/min (SIP + VAD + ASR + LLM + TTS)
  // SaaS Wrapper COGS: ~$0.18/min
  const cogsPerMinute = 0.045;
  const monthlyCostPerClient = Math.round(minutesPerClient * cogsPerMinute);
  const totalMonthlyGrossRevenue = clientCount * monthlyRetainer;
  const totalMonthlyCOGS = clientCount * monthlyCostPerClient;
  const netMonthlyProfit = totalMonthlyGrossRevenue - totalMonthlyCOGS;
  const annualARR = netMonthlyProfit * 12;
  const grossMarginPercent = Math.round((netMonthlyProfit / totalMonthlyGrossRevenue) * 100);

  const faqs = [
    {
      q: "How does the white-label branding work for my agency and clients?",
      a: "Everything is 100% white-labeled under your agency's domain and branding. Your clients log in to your custom subdomain (e.g., voice.youragency.com), see your logo, color tokens, and custom documentation. There is zero mention of DestiX AI anywhere in code, headers, or telephony metadata.",
    },
    {
      q: "How do your wholesale carrier costs compare to Vapi, Retell, or Bland AI?",
      a: "Generic SaaS wrappers act as middlemen: they mark up Deepgram, Cartesia, Groq, and Twilio by 200% to 400%, charging you $0.14 to $0.25 per minute. With DestiX White-Label, we connect your sovereign carrier SIP trunks and API keys directly. Your blended COGS is ~$0.035 to $0.05 per minute, allowing your agency to retain 80% to 90% gross profit margins on client retainers.",
    },
    {
      q: "Can each client have isolated CRM webhooks, prompts, and telephony phone numbers?",
      a: "Yes. Our multi-tenant architecture provides strict sandboxing. Each client organization has isolated sub-accounts with their own dedicated DIDs (+1, +44, +971, +91), custom prompt rules, knowledge bases, CRM webhooks (HubSpot, GoHighLevel, Salesforce), and role-based access control.",
    },
    {
      q: "What technical support and engineering assistance do you provide to partner agencies?",
      a: "You get a dedicated Slack/Discord shared engineering bridge with our senior voice architects. We assist with complex client prompt engineering, custom CRM integrations, carrier interconnect routing, and provide pre-built sales diagnostic decks to help you close your first 5 accounts.",
    },
    {
      q: "Can I bundle Voice AI with GoHighLevel, HubSpot, or our existing marketing retainers?",
      a: "Yes! High-growth agencies bundle an autonomous speed-to-lead voice agent with their existing paid media or SEO retainers, instantly bumping their monthly retainer from $2,000/mo to $4,500/mo while solving lead attribution and client churn forever.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2DDD1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2DDD1] shadow-xs text-xs font-mono tracking-wider uppercase text-[#B88746]">
              <Briefcase className="w-3.5 h-3.5 text-[#B88746]" />
              <span>ENTERPRISE WHITE-LABEL AI VOICE INFRASTRUCTURE</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-[#181614]">
              Launch your own high-margin voice AI practice in{" "}
              <span className="italic text-[#B88746]">under 14 days</span>.
            </h1>
            <p className="text-base sm:text-xl text-[#55514B] font-normal leading-relaxed max-w-2xl mx-auto">
              Stop paying 400% markups to consumer SaaS wrappers. Deploy carrier-grade autonomous voice AI under your agency brand, keep <strong className="text-[#181614] font-semibold">80%+ gross margins</strong>, and add $100k-$500k in high-retention ARR.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
            <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#B88746]">85%+</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Agency Gross Margins</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#181614]">100%</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">White-Label Isolation</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#181614]">435ms</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Audited P50 Latency</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#B88746]">Wholesale</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Direct Carrier Cost</div>
            </div>
          </div>

          {/* Embedded Live Call Demo Widget */}
          <div className="max-w-3xl mx-auto mb-16">
            <LiveCallDemoTrigger
              defaultVertical="Agency White-Label / RevOps"
              defaultAccent="British RP & London English"
              headline="Test The White-Label Telephony Circuit On Your Handset"
              subheadline="Experience sub-435ms voice AI latency first-hand. This exact speed and conversational fluency can be deployed under your agency domain within two weeks."
              theme="dark"
            />
          </div>

          {/* Social Proof / Anonymized Verified Case Dossier */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#EDE8DC] border border-[#D8D2C4] max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#B88746] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#B88746]" />
                  <span>Verified Agency Partner Dossier // Mutual NDA</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181614]">
                  Tier-1 Performance Growth Agency
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B]">
                  B2B &amp; E-commerce Focus &bull; Added $140,000 in high-margin recurring ARR across 18 enterprise accounts with 84% retained gross margins.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="px-4 py-2.5 rounded-xl bg-white border border-[#D8D2C4] text-center">
                  <div className="text-lg font-mono font-bold text-[#B88746]">+$140k</div>
                  <div className="text-[10px] font-mono text-[#888277] uppercase">Net Recurring ARR</div>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white border border-[#D8D2C4] text-center">
                  <div className="text-lg font-mono font-bold text-[#181614]">84%</div>
                  <div className="text-[10px] font-mono text-[#888277] uppercase">Gross Profit Margin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Reseller Margin Problem */}
      <section className="py-20 px-4 sm:px-6 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              THE SAAS RESELLER TRAP
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] leading-tight mb-4">
              Why reselling consumer voice SaaS destroys your agency margins
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] leading-relaxed">
              When you build client automations on top of retail tools, you inherit their latency spikes, branding leaks, and excessive per-minute fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 font-mono font-bold text-sm">
                01
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                400% SaaS Markup Drain
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                Platforms like Vapi, Retell, and Bland charge $0.15 to $0.25 per minute. If a client uses 2,000 minutes, your COGS is $400-$500/mo, crushing your net margins down to 30%.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 font-mono font-bold text-sm">
                02
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                Client Vendor Bypass Risk
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                Your savvy enterprise clients eventually inspect webhooks, find the underlying SaaS vendor, realize you are just wrapping an off-the-shelf tool, and bypass your agency entirely.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="w-10 h-10 rounded-2xl bg-[#EDE8DC] border border-[#D8D2C4] flex items-center justify-center text-[#B88746] mb-4 font-mono font-bold text-sm">
                03
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                Latency Spikes &amp; Churn
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                Shared multi-tenant cloud platforms frequently hit 1200ms+ latency spikes during peak US/EU hours. Callers notice the robotic delay, complain to your client, and your client cancels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Agency ARR & Margin Calculator */}
      <section className="py-20 px-4 sm:px-6 bg-[#F6F4EE]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8DC] border border-[#D8D2C4] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              AGENCY REVENUE PROJECTION
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              Model your agency ARR at 85%+ gross margins
            </h2>
            <p className="text-sm sm:text-base text-[#55514B]">
              See how reselling sovereign Voice AI infrastructure transforms your agency&apos;s bottom-line economics.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">ACTIVE CLIENT ACCOUNTS ONBOARDED</span>
                  <span className="text-[#B88746] font-bold text-sm">
                    {clientCount} Clients
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="40"
                  step="1"
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>3 clients</span>
                  <span>20 clients</span>
                  <span>40+ enterprise accounts</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">MONTHLY RETAINER CHARGED PER CLIENT</span>
                  <span className="text-[#181614] font-bold text-sm">
                    ${monthlyRetainer.toLocaleString()}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="6000"
                  step="250"
                  value={monthlyRetainer}
                  onChange={(e) => setMonthlyRetainer(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>$1,000/mo (Base)</span>
                  <span>$2,500/mo (Standard)</span>
                  <span>$6,000/mo (Enterprise)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">AVG MONTHLY CALL MINUTES PER CLIENT</span>
                  <span className="text-[#55514B] font-bold text-sm">
                    {minutesPerClient.toLocaleString()} Minutes (~${monthlyCostPerClient} COGS)
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="250"
                  value={minutesPerClient}
                  onChange={(e) => setMinutesPerClient(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>500 mins</span>
                  <span>2,000 mins</span>
                  <span>5,000 mins</span>
                </div>
              </div>
            </div>

            {/* Calculations Outcome (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#131210] text-[#F6F4EE] border border-[#2D2823] space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#B88746]">
                PROJECTED ANNUAL RECURRING REVENUE
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#888277]">NET RECURRING PROFIT (ARR)</div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#F6F4EE]">
                  ${annualARR.toLocaleString()}
                </div>
                <div className="text-xs font-mono text-[#B88746] mt-0.5">
                  &asymp; ${netMonthlyProfit.toLocaleString()} Net Cashflow / Month
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#2D2823] text-xs font-mono">
                <div>
                  <div className="text-[#888277]">GROSS MARGIN</div>
                  <div className="text-sm font-bold text-emerald-400">{grossMarginPercent}% Retained</div>
                </div>
                <div>
                  <div className="text-[#888277]">TOTAL COGS</div>
                  <div className="text-sm font-bold text-[#F6F4EE]">${totalMonthlyCOGS}/mo</div>
                </div>
              </div>

              <button
                onClick={() => setBookingOpen(true)}
                className="w-full py-3.5 rounded-xl bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-bold text-xs uppercase font-mono tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request White-Label Partner Access</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: DestiX White-Label vs Building In-House vs SaaS Reseller */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-[#E2DDD1]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              STRATEGIC CHOICE
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              DestiX White-Label vs. In-House Engineering vs. Consumer SaaS
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#E2DDD1] text-xs font-mono uppercase text-[#888277]">
                  <th className="py-4 px-4 font-normal">Dimension</th>
                  <th className="py-4 px-4 bg-[#EDE8DC]/50 text-[#B88746] font-bold rounded-t-xl">
                    DestiX White-Label
                  </th>
                  <th className="py-4 px-4 font-normal">Building In-House</th>
                  <th className="py-4 px-4 font-normal">Consumer SaaS (Vapi / Retell)</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm divide-y divide-[#E2DDD1]">
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Time to Market</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-emerald-600">
                    &lt; 14 Days
                  </td>
                  <td className="py-4 px-4 text-rose-600">6 - 12 Months</td>
                  <td className="py-4 px-4 text-[#55514B]">1 - 2 Weeks</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Engineering Upfront Cost</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-emerald-600">
                    $0 Dev Payroll
                  </td>
                  <td className="py-4 px-4 text-rose-600">$180,000+ (2 Senior Voice Engineers)</td>
                  <td className="py-4 px-4 text-[#55514B]">$0 Dev Payroll</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Gross Margin Retained</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-[#B88746]">
                    80% - 90%
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">85% (After Dev Amortization)</td>
                  <td className="py-4 px-4 text-rose-600">25% - 35% (Crushed by markups)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Brand Protection</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-semibold text-[#181614]">
                    100% White-Label on Your Domain
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">Proprietary</td>
                  <td className="py-4 px-4 text-rose-600">Leaked in headers &amp; webhooks</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Audited Voice Latency</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-emerald-600">
                    435ms P50 SLA
                  </td>
                  <td className="py-4 px-4 text-rose-600">Requires endless tuning</td>
                  <td className="py-4 px-4 text-[#55514B]">900ms - 1500ms spikes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#F6F4EE] border-t border-[#E2DDD1]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8DC] border border-[#D8D2C4] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              Agency Partnership Architecture
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E2DDD1] bg-white overflow-hidden transition-all"
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
        initialService="White-Label Voice AI Infrastructure Partnership"
      />
    </div>
  );
}