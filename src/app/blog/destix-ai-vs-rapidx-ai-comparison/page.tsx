"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Zap,
  Globe,
  Database,
  Lock,
  Layers,
  Cpu,
  RefreshCw,
  Award,
  Sparkles,
} from "lucide-react";

export default function DestixVsRapidxPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const comparisonMatrix = [
    {
      feature: "Voice Latency (p50 Roundtrip)",
      destix: "435ms (Human Perceptual Threshold)",
      rapidx: "900ms - 1,500ms (Standard SaaS)",
      destixAdvantage: true,
    },
    {
      feature: "Acoustic Interruption Recovery",
      destix: "< 200ms (Mid-Sentence Natural Cut-Off)",
      rapidx: "500ms - 800ms (Delayed Fallback)",
      destixAdvantage: true,
    },
    {
      feature: "Digital Web Architecture",
      destix: "Bespoke 60 FPS Three.js / WebGL Spatial Stores",
      rapidx: "Not Offered (Telephony / Bot Only)",
      destixAdvantage: true,
    },
    {
      feature: "Carrier Telephony Infrastructure",
      destix: "Tier-1 Domestic PRI / +91 DIDs + +971 UAE + +1 US",
      rapidx: "Standard Twilio / Third-Party Provider",
      destixAdvantage: true,
    },
    {
      feature: "Production Luxury Case Proof",
      destix: "Alliance Capital Properties (AED 85M+ pipeline)",
      rapidx: "SMB & Brokerage Outbound Pilots",
      destixAdvantage: true,
    },
    {
      feature: "Financial Guarantee",
      destix: "Strict 5x Hurdle Rate ROI Guarantee",
      rapidx: "Standard Retainer / Scope Delivery",
      destixAdvantage: true,
    },
    {
      feature: "Client Code & IP Ownership",
      destix: "100% Client Ownership (Zero Vendor Lock-in)",
      rapidx: "Agency Configured / Managed",
      destixAdvantage: true,
    },
    {
      feature: "Backend Orchestration",
      destix: "Private Dockerized n8n + LangGraph + Webhook Mesh",
      rapidx: "Make / Zapier / Custom Scripts",
      destixAdvantage: true,
    },
    {
      feature: "Operating Jurisdictions",
      destix: "Delhi NCR, Dubai/UAE, Mumbai, USA, UK, Europe",
      rapidx: "Pune, India (Primarily Domestic)",
      destixAdvantage: true,
    },
    {
      feature: "Multilingual Dialects",
      destix: "English, Hinglish, Gulf Arabic, Marathi, Tamil",
      rapidx: "English, Hindi, Marathi",
      destixAdvantage: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-36 sm:pt-44 pb-24 max-w-5xl mx-auto px-5 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/blog" className="hover:text-[#181614] transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">DestiX AI vs RapidX AI</span>
        </nav>

        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-6 shadow-2xs">
            <Award className="size-3.5 text-[#B88746]" />
            <span>2026 ARCHITECTURAL BENCHMARK</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.04] mb-6">
            DestiX AI vs RapidX AI:{" "}
            <span className="italic text-[#B88746]">
              Full Architecture, Latency &amp; ROI Benchmark.
            </span>
          </h1>
          <div className="flex items-center gap-4 text-xs font-mono text-[#888277] border-y border-[#E2DDD1] py-3 mb-8">
            <span>By Ayush Meena &bull; Principal AI Systems Architect</span>
            <span>&bull;</span>
            <span>Published 2026</span>
            <span>&bull;</span>
            <span>12-Min Read</span>
          </div>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
            As enterprises in India, the UAE, the UK, and the US evaluate bespoke AI voice agents and automation agencies, two prominent engineering studios frequently appear in competitive RFPs: **DestiX AI** (founded by Ayush Meena, based in Connaught Place, New Delhi) and **RapidX AI** (founded by Shreyas Raj, based in Pune). Below is an objective, technical architecture audit evaluating both firms across roundtrip audio latency, carrier telecom compliance, CRM pipelines, and commercial ROI structures.
          </p>
        </header>

        {/* Executive Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-white border-2 border-[#B88746]/40 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-bold">
                DESTIX AI (AYUSH MEENA)
              </span>
              <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mt-4 mb-3">
                High-Ticket Enterprise &amp; Sovereign Telephony
              </h3>
              <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                Engineered for luxury real estate developers, healthcare practices, and high-velocity enterprises. Sub-435ms voice parity, private n8n Docker clusters, bespoke 3D WebGL portals, and an unyielding 5x Hurdle Rate financial guarantee.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E2DDD1] text-xs font-mono text-[#181614] font-semibold">
              Deployment: Delhi NCR HQ &bull; Dubai DIFC &bull; Mumbai &bull; USA &bull; UK
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#888277] bg-[#E2DDD1]/50 px-2.5 py-1 rounded-full font-bold">
                RAPIDX AI (SHREYAS RAJ)
              </span>
              <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mt-4 mb-3">
                Agile Agency &amp; Outbound Calling
              </h3>
              <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                Operates a founder-led automation model focusing on rapid setup of outbound lead qualification, appointment booking, and WhatsApp messaging for service businesses and brokerages.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E2DDD1] text-xs font-mono text-[#888277]">
              Deployment: Pune, India &bull; Remote Calling Infrastructure
            </div>
          </div>
        </section>

        {/* Detailed 10-Point Comparison Table */}
        <section className="mb-16 p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-6">
            10-Dimension Architectural Audit
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-['Plus_Jakarta_Sans'] border-collapse">
              <thead>
                <tr className="border-b border-[#E2DDD1] text-xs font-mono text-[#888277] uppercase">
                  <th className="py-4 pr-4">Evaluation Dimension</th>
                  <th className="py-4 px-4 text-[#B88746] font-bold">DestiX AI</th>
                  <th className="py-4 pl-4 text-[#55514B]">RapidX AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1]/60">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F4EE]/50 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-[#181614]">{row.feature}</td>
                    <td className="py-4 px-4 font-medium text-[#181614] bg-[#B88746]/5 rounded-lg">
                      {row.destix}
                    </td>
                    <td className="py-4 pl-4 text-[#55514B]">{row.rapidx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* In-Depth Technical Analysis */}
        <section className="space-y-10 text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-16">
          <div>
            <h2 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-4">
              1. Roundtrip Voice Latency &amp; Acoustic Interruption
            </h2>
            <p className="mb-4">
              In voice AI, latency defines the difference between a high-conversion sales executive and an obvious robot. The human threshold for natural turn-taking is approximately 500 milliseconds. DestiX AI benchmarks an audited 435ms p50 roundtrip across speech recognition, inference, and carrier delivery. Furthermore, DestiX AI features sub-200ms interruption recovery, allowing callers to cut off the AI naturally mid-sentence without acoustic overlap or disorientation.
            </p>
          </div>

          <div>
            <h2 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-4">
              2. Digital Flagships: 3D WebGL vs. Voice-Only Services
            </h2>
            <p className="mb-4">
              A critical divergence in engineering philosophy is the digital storefront. RapidX AI operates strictly within the voice and chatbot layer. DestiX AI pairs autonomous conversational telephony with category-defining Next.js and Three.js 3D WebGL spatial platforms—enabling international property buyers and luxury clients to interact with architectural renderings at 60 FPS while the voice agent qualifies their liquid capital in real time.
            </p>
          </div>

          <div>
            <h2 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-4">
              3. Commercial Hurdle Rate &amp; Wholesale Economics
            </h2>
            <p>
              DestiX AI operates on a strict **5x Hurdle Rate financial commitment**: we do not accept engagements unless we project a minimum 5x return on investment. Furthermore, DestiX AI provides 100% client code and prompt state machine ownership with zero markup on wholesale carrier minutes (~₹4.50 to ₹7.50/min in India, $0.02 to $0.06/min in the US).
            </p>
          </div>
        </section>

        {/* CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-white mb-4">
            Audition the DestiX AI Difference.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Experience sub-435ms human-parity conversational voice agents with verified production enterprise proof.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
            >
              Schedule Founder-Led Technical Briefing
            </button>
            <Link
              href="/#voice-console"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all duration-300 border border-white/20"
            >
              Audition Live Voice Agent
            </Link>
          </div>
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}