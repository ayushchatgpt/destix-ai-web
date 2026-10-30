"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  PhoneCall,
  Code2,
  Lock,
  Layers,
  BarChart3,
  Users,
  Cpu,
  Laptop,
  Check,
  Plus,
  Minus,
} from "lucide-react";

export default function WhiteLabelAiPartnerPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Lead submission state for white label partner application
  const [agencyName, setAgencyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [clientType, setClientType] = useState("Performance Marketing");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Agency margin calculator state
  const [clientCount, setClientCount] = useState<number>(3);
  const [selectedTier, setSelectedTier] = useState<"voice" | "telephony_crm" | "full_stack">("telephony_crm");

  const tierPricing = {
    voice: { name: "AI Voice Concierge", retailPerClient: 150000, wholesalePerClient: 95000 },
    telephony_crm: { name: "Autonomous Telephony + CRM", retailPerClient: 320000, wholesalePerClient: 210000 },
    full_stack: { name: "Spatial 3D Web + Enterprise Voice", retailPerClient: 650000, wholesalePerClient: 420000 },
  };

  const currentTier = tierPricing[selectedTier];
  const totalRetail = currentTier.retailPerClient * clientCount;
  const totalWholesale = currentTier.wholesalePerClient * clientCount;
  const totalProfit = totalRetail - totalWholesale;
  const marginPercent = Math.round((totalProfit / totalRetail) * 100);

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agencyName || !contactEmail) return;
    setSubmitting(true);

    try {
      await fetch("/api/concierge-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadData: {
            name: agencyName,
            contact: contactEmail,
            vertical: `White-Label Agency Partner (${clientType})`,
            callVolume: `${clientCount} clients/month tier: ${selectedTier}`,
            notes: `White-label agency partner application from /white-label-ai-partner. Estimated agency margin: ₹${totalProfit.toLocaleString('en-IN')}`,
          },
          telemetry: {
            currentSection: "/white-label-ai-partner",
            referrer: "Organic Search / Direct",
            dwellTimeSeconds: 45,
          },
        }),
      });
      setSubmitSuccess(true);
    } catch (err) {
      console.error("Partner application submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const capabilities = [
    {
      icon: PhoneCall,
      title: "Sub-450ms Voice Agents",
      desc: "Engineered on Retell AI, Vapi, Deepgram, and custom SIP trunks. Flawless turn-taking, acoustic interruption handling, and natural Hinglish/English/Arabic cadences.",
      badge: "TELEPHONY R&D",
    },
    {
      icon: Code2,
      title: "High-Performance Next.js & 3D WebGL",
      desc: "Architected with Next.js 15, Tailwind CSS, and Three.js. Category-defining spatial web experiences that win design awards and convert premium buyers.",
      badge: "CREATIVE FRONTEND",
    },
    {
      icon: Layers,
      title: "CRM & n8n Automation Workflows",
      desc: "Bi-directional syncing to HubSpot, LeadSquared, Salesforce, GoHighLevel, and Slack. Zero manual lead handling for your agency's end clients.",
      badge: "INFRASTRUCTURE",
    },
    {
      icon: Lock,
      title: "100% White-Label & Strict NDA",
      desc: "No Ayush.company or DestiX AI branding ever appears. Custom white-labeled client portals, dedicated SIP caller IDs, and ironclad mutual non-disclosure.",
      badge: "Stealth Execution",
    },
    {
      icon: Users,
      title: "Fractional AI Principal on Pitch Calls",
      desc: "Ayush Meena and senior systems engineers join high-ticket enterprise sales calls as your agency's fractional 'Head of AI' to close deals on your behalf.",
      badge: "PRE-SALES CLOSING",
    },
    {
      icon: BarChart3,
      title: "Guaranteed 25%–35%+ Gross Margin",
      desc: "Wholesale sprint rates or predictable monthly retainers. Package turnkey conversational AI into your agency retainers at industry-leading profit margins.",
      badge: "PROFIT ASSURANCE",
    },
  ];

  const comparisonData = [
    {
      metric: "Time to First Deployment",
      inHouse: "3 to 6 months (recruiting + trial)",
      generic: "4 to 8 weeks (fragmented code)",
      ayush: "Under 7 Days (Production Ready)",
    },
    {
      metric: "Telephony Voice Latency",
      inHouse: "1,500ms – 2,500ms (high drop-off)",
      generic: "1,200ms – 2,000ms",
      ayush: "Sub-450ms Human Conversational Parity",
    },
    {
      metric: "Pre-Sales Pitch Support",
      inHouse: "None (internal dev only)",
      generic: "None",
      ayush: "Fractional AI Architect on Zoom Calls",
    },
    {
      metric: "Acoustic Interruption Handling",
      inHouse: "Rudimentary VAD",
      generic: "Often breaks mid-call",
      ayush: "Sub-200ms Instant Speech Barging",
    },
    {
      metric: "White-Label Brand Integrity",
      inHouse: "Internal",
      generic: "Freelancers reuse public repos",
      ayush: "100% Client-Branded & Strict NDA",
    },
    {
      metric: "Net Agency Margin",
      inHouse: "Negative until high scale",
      generic: "Unpredictable rework costs",
      ayush: "Guaranteed 25% to 35%+ Margin",
    },
  ];

  const faqs = [
    {
      q: "How does the white-label AI partnership work?",
      a: "Your agency sells high-ticket AI voice telephony, CRM automations, or 3D digital storefronts to your clients. Ayush.company acts as your stealth engineering department under strict NDA, architecting, deploying, and maintaining the systems while you maintain 100% client ownership and billing.",
    },
    {
      q: "What profit margins do partner agencies typically maintain?",
      a: "Agency partners maintain healthy 25% to 35%+ gross margins. We offer transparent wholesale sprint pricing or fractional monthly engineering retainers, allowing you to package turnkey AI solutions at premium market rates.",
    },
    {
      q: "Which voice and telephony stacks do you support?",
      a: "We engineer on Retell AI, Vapi, Deepgram Nova-2, Cartesia Sonic, Twilio SIP Trunking, ElevenLabs, OpenAI Realtime, and custom WebSocket pipelines tuned to sub-450ms human conversational latency.",
    },
    {
      q: "Will our clients ever see Ayush.company or DestiX AI branding?",
      a: "Never. All client deliverables, telephony caller IDs, CRM webhooks, and administrative portals are 100% white-labeled with your agency's logo, domain, and branding.",
    },
    {
      q: "Can you join client calls as our internal AI lead?",
      a: "Yes. Ayush Meena and our technical leads can represent your agency as your fractional 'Head of AI Solutions' or 'Lead AI Telephony Architect' on high-ticket sales calls using your agency email address.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Sparkles className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              WHITE-LABEL AI VOICE & NEXT.JS ENGINEERING PRACTICE
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Your Agency&apos;s White-Label{" "}
            <span className="italic text-[#B88746]">AI Engineering Practice.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Offer sub-450ms autonomous voice agents, bespoke Next.js storefronts, and deep CRM automations to your clients without hiring a costly internal R&D team. 100% white-labeled under your brand with guaranteed 25%–35%+ gross margins.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Apply for Agency Partnership</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="#margin-calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Calculate Agency Margin
            </a>
          </div>
        </div>

        {/* Quick Trust Highlights */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="size-4 text-[#B88746] shrink-0" />
            <span className="text-[#181614]">Strict Mutual NDA</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Zap className="size-4 text-[#B88746] shrink-0" />
            <span className="text-[#181614]">Sub-450ms Voice Latency</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Users className="size-4 text-[#B88746] shrink-0" />
            <span className="text-[#181614]">Pre-Sales Pitch Support</span>
          </div>
          <div className="flex items-center gap-2.5">
            <BarChart3 className="size-4 text-[#B88746] shrink-0" />
            <span className="text-[#181614]">25%–35%+ Agency Margins</span>
          </div>
        </div>
      </section>

      {/* Agency Margin Interactive Calculator */}
      <section id="margin-calculator" className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Financial Modeling
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Interactive Agency Margin Calculator
            </h2>
            <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] mt-2">
              Model your recurring gross profit when packaging our white-label AI voice and engineering deliverables into your agency client contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-2xl bg-[#F6F4EE]/60 border border-[#E2DDD1]">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#181614] mb-3">
                  1. Select Solution Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(["voice", "telephony_crm", "full_stack"] as const).map((tierKey) => {
                    const item = tierPricing[tierKey];
                    const active = selectedTier === tierKey;
                    return (
                      <button
                        key={tierKey}
                        onClick={() => setSelectedTier(tierKey)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          active
                            ? "bg-[#181614] text-[#F6F4EE] border-[#181614] shadow-sm"
                            : "bg-white text-[#181614] border-[#E2DDD1] hover:border-[#B88746]"
                        }`}
                      >
                        <div className="text-xs font-semibold mb-1">{item.name}</div>
                        <div className={`text-[11px] font-mono ${active ? "text-[#E2DDD1]" : "text-[#55514B]"}`}>
                          ₹{(item.retailPerClient / 100000).toFixed(1)}L / client
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F4EE]/60 border border-[#E2DDD1]">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#181614]">
                    2. Active Client Volume Per Month
                  </label>
                  <span className="font-mono text-base font-bold text-[#B88746]">
                    {clientCount} Clients
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full accent-[#B88746] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#888277] mt-2">
                  <span>1 client (pilot)</span>
                  <span>5 clients</span>
                  <span>10 clients</span>
                  <span>15+ clients</span>
                </div>
              </div>

              {/* Partner Quick Application Form */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#181614] text-[#F6F4EE]">
                <h3 className="font-['Instrument_Serif'] text-2xl mb-2 text-[#F6F4EE]">
                  Apply for Stealth Agency Whitelist
                </h3>
                <p className="text-xs text-[#E2DDD1] font-['Plus_Jakarta_Sans'] mb-6">
                  We limit white-label agency partnerships to 5 vetted agencies per region to prevent market saturation.
                </p>

                {submitSuccess ? (
                  <div className="p-4 rounded-xl bg-[#25221F] border border-[#B88746] text-[#F6F4EE] text-xs font-mono flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-[#B88746] shrink-0" />
                    <span>Application received! Studio founder Ayush Meena will contact you within 4 hours.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitLead} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-[#E2DDD1] mb-1">
                          Agency Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Digital Media"
                          value={agencyName}
                          onChange={(e) => setAgencyName(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-lg bg-[#25221F] border border-[#3E3832] text-sm text-[#F6F4EE] focus:outline-none focus:border-[#B88746]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-[#E2DDD1] mb-1">
                          Founder / Partner Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="founder@acmedigital.com"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-lg bg-[#25221F] border border-[#3E3832] text-sm text-[#F6F4EE] focus:outline-none focus:border-[#B88746]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <select
                        value={clientType}
                        onChange={(e) => setClientType(e.target.value)}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#25221F] border border-[#3E3832] text-xs text-[#F6F4EE] font-mono focus:outline-none focus:border-[#B88746]"
                      >
                        <option value="Performance Marketing">Performance Marketing Agency</option>
                        <option value="Creative / Branding Studio">Creative & Branding Studio</option>
                        <option value="CRM & GoHighLevel Partner">CRM & GoHighLevel Partner</option>
                        <option value="Enterprise IT Consultancy">Enterprise IT Consultancy</option>
                      </select>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#B88746] hover:bg-[#A37438] text-white font-semibold text-xs transition-colors shrink-0 flex items-center justify-center gap-2"
                      >
                        {submitting ? "Submitting..." : "Submit NDA & Partnership Dossier"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Live Financial Breakdown Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1] shadow-xs">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                FINANCIAL SUMMARY
              </span>
              <h3 className="font-['Instrument_Serif'] text-3xl text-[#181614] mt-4 mb-6">
                Your Monthly Agency Return
              </h3>

              <div className="space-y-4 font-mono text-xs border-b border-[#E2DDD1] pb-6">
                <div className="flex justify-between items-center text-[#55514B]">
                  <span>Suggested Client Retail:</span>
                  <span className="text-[#181614] font-semibold">₹{totalRetail.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center text-[#55514B]">
                  <span>Wholesale Engineering Cost:</span>
                  <span className="text-[#181614] font-semibold">₹{totalWholesale.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center text-[#55514B]">
                  <span>Estimated Gross Margin:</span>
                  <span className="text-[#B88746] font-bold">{marginPercent}%</span>
                </div>
              </div>

              <div className="pt-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#55514B] mb-1">
                  Net Agency Profit / Month
                </div>
                <div className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
                  ₹{totalProfit.toLocaleString("en-IN")}
                </div>
                <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
                  Earned with zero in-house developer hiring, zero infrastructure maintenance, and 100% white-label client protection.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2DDD1]">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="w-full py-3.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-xs font-mono transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Book Private Whitelist Intro</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Turnkey Infrastructure
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
            What Your Agency Can Sell Tomorrow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E2DDD1] hover:border-[#B88746]/50 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center text-[#B88746]">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Table: In-House vs Freelancer vs Ayush.company */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Strategic Comparison
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Why Top Agencies Don&apos;t Hire In-House AI Engineers
            </h2>
            <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] mt-2">
              Building an internal AI voice and spatial graphics department requires ₹60L+ annual payroll, ongoing SIP maintenance, and deep audio engineering expertise.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2DDD1] bg-[#F6F4EE]/60 font-mono text-[11px] text-[#181614]">
                  <th className="py-4 px-4 sm:px-6">Dimension</th>
                  <th className="py-4 px-4 sm:px-6 text-[#55514B]">In-House AI Developer</th>
                  <th className="py-4 px-4 sm:px-6 text-[#55514B]">Upwork Freelancer</th>
                  <th className="py-4 px-4 sm:px-6 text-[#B88746] font-bold">Ayush.company Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1] font-['Plus_Jakarta_Sans']">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F4EE]/30 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-[#181614] font-mono text-xs">
                      {row.metric}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#55514B]">
                      {row.inHouse}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#55514B]">
                      {row.generic}
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

      {/* FAQ Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Partnership Details
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            White-Label Agency <span className="italic text-[#B88746]">FAQ.</span>
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
