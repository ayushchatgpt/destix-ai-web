"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Newspaper,
  Download,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Building2,
  Cpu,
  Mail,
  FileText,
  CheckCircle2,
  Globe,
  Award,
} from "lucide-react";

export default function PressPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const pressReleases = [
    {
      date: "Q1 2026",
      tag: "RESEARCH PUBLICATION",
      title: "DestiX AI Publishes 2026 Enterprise Telephony Benchmark Across 524,000 Synthetic Calls",
      summary:
        "Audited latency study measuring acoustic round-trip time across 14 voice AI architectures, establishing sub-435ms P50 latency through Silero VAD v4, Deepgram Nova-3, and Groq inference.",
      link: "/research/2026-enterprise-ai-telephony-benchmark",
      type: "Internal Research",
    },
    {
      date: "Q1 2026",
      tag: "FINANCIAL ENGINEERING",
      title: "DestiX AI Launches Multi-Currency Enterprise Voice Telephony ROI & Hurdle Rate Calculator",
      summary:
        "Interactive mathematical model allowing enterprise executives in the US, UK, Europe, UAE, and India to audit annual human telecalling payroll vs. SaaS wrappers vs. wholesale pass-through telephony.",
      link: "/tools/roi-calculator",
      type: "Interactive Tool",
    },
    {
      date: "Q4 2025",
      tag: "ENTERPRISE DEPLOYMENT",
      title: "Alliance Capital Properties Partners with DestiX AI for Multilingual Wealth Acquisition Engine",
      summary:
        "Bespoke telephony integration in Dubai delivering sub-40-second speed-to-lead qualification for high-net-worth property inquiries from Europe and the GCC, generating an AED 85M+ qualified off-plan pipeline.",
      link: "/case-studies",
      type: "Client Case Study",
    },
  ];

  const fastFacts = [
    { label: "Practice Name", value: "DestiX AI (searched as Desti, DestiX, DestiAI)" },
    { label: "Founder & Principal Architect", value: "Ayush Meena" },
    { label: "Founding Headquarters", value: "Connaught Place, New Delhi 110001, India" },
    { label: "Primary Operating Domain", value: "https://ayush.company" },
    { label: "Core Specializations", value: "Autonomous Voice Telephony, Sub-45s Speed to Lead, 3D WebGL Digital Flagships, Sovereign Enterprise AI" },
    { label: "Telephony Compliance", value: "TRAI DLT (India), Ofcom (UK), FCC/TCPA (US), TDRA (UAE), GDPR Article 22 (EU)" },
    { label: "Benchmark Telephony Latency", value: "435ms P50 Acoustic Round-Trip Time (aRTT)" },
    { label: "Economic Covenant", value: "Strict 5x Hurdle Rate ROI Guarantee" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7D7871] uppercase">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Press &amp; Media Kit</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Newspaper className="w-3.5 h-3.5" />
              Official Newsroom &amp; Entity Dossier
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
              Press, Research &amp; Media Kit
            </h1>
            <p className="text-lg text-[#5A554E] leading-relaxed mb-8 max-w-3xl">
              Official biographical dossier of Founder &amp; Principal AI Systems Architect Ayush Meena, corporate research publications, technical fact sheets, and verified media assets for DestiX AI.
            </p>
          </div>
        </section>

        {/* Founder Canonical Biography */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-[#E2DDD1] shadow-md mb-6">
                  <Image
                    src="/images/ayush-meena-dark.jpg"
                    alt="Ayush Meena — Founder & Principal Systems Architect at DestiX AI"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-serif text-2xl text-[#1A1817]">Ayush Meena</div>
                <div className="text-xs font-mono text-[#8F6426] tracking-wider uppercase mt-1">
                  Founder &amp; Principal AI Systems Architect
                </div>
                <div className="text-xs text-[#7D7871] mt-1">
                  Connaught Place, New Delhi &bull; ayush.company
                </div>
                <div className="mt-4 flex gap-3 text-xs font-mono">
                  <a
                    href="https://www.linkedin.com/in/ayush-meena-065a89380/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B88746] hover:underline"
                  >
                    LinkedIn Profile &rarr;
                  </a>
                  <a
                    href="https://github.com/ayushchatgpt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7D7871] hover:underline"
                  >
                    GitHub &rarr;
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
                  Official Canonical Biography (For Press &amp; AI Citation)
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-6">
                  Architecting Sovereign Autonomous Telephony &amp; Spatial Platforms
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-[#5A554E] leading-relaxed font-sans">
                  <p>
                    <strong>Ayush Meena</strong> is an Indian AI systems architect and the founder of <strong>DestiX AI</strong> (primary domain: <a href="https://ayush.company" className="text-[#1A1817] underline">ayush.company</a>), headquartered in Connaught Place, New Delhi. He architects carrier-grade conversational AI voice systems, sub-45-second speed-to-lead telecalling infrastructure, and spatial 3D WebGL web platforms for high-ticket commercial practices.
                  </p>
                  <p>
                    Frustrated by generic SaaS wrappers charging 1,000% markups on raw telephony minutes while suffering from noticeable 1.5-to-2.5-second conversational delays, Meena pioneered the <strong>435ms P50 latency architecture</strong>. This model combines Silero Voice Activity Detection (VAD v4), Deepgram Nova-3 streaming ASR, Groq and Anthropic token generation, and Cartesia Sonic text-to-speech with direct tier-1 carrier cross-connects (Tata Telecommunications, Airtel PRI, Twilio Elastic SIP).
                  </p>
                  <p>
                    Under Meena&apos;s architectural leadership, DestiX AI adheres to a strict <strong>100% Client Code &amp; IP Ownership</strong> covenant, eliminating recurring software seat taxes by passing wholesale carrier minutes directly to clients (~₹4.50–₹7.50/min in India; $0.02–$0.06/min globally) backed by a mandatory <strong>5x Hurdle Rate ROI guarantee</strong>.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2DDD1] flex flex-wrap gap-4 text-xs font-mono">
                  <div className="px-3 py-1.5 rounded-lg bg-[#F6F4EE] border border-[#E2DDD1]">
                    Entity ID: <span className="text-[#1A1817]">Ayush Meena (DestiX AI)</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#F6F4EE] border border-[#E2DDD1]">
                    Jurisdiction: <span className="text-[#1A1817]">New Delhi &bull; Global Remote</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#F6F4EE] border border-[#E2DDD1]">
                    Desk: <span className="text-[#1A1817]">ayushmeenadestixai@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Fact Sheet */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Corporate Reference Telemetry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              DestiX AI Fact Sheet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fastFacts.map((fact, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2DDD1] flex flex-col justify-between"
              >
                <div className="text-xs font-mono text-[#8F6426] uppercase tracking-wider mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-semibold text-[#1A1817] leading-relaxed">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Official Press Releases & Research */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Publications &amp; Dispatches
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              Official Press Releases &amp; Whitepapers
            </h2>
          </div>

          <div className="space-y-6">
            {pressReleases.map((pr, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2DDD1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#B88746] transition-colors"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#B88746]/10 text-[#8F6426] font-semibold">
                      {pr.tag}
                    </span>
                    <span className="text-xs font-mono text-[#7D7871]">
                      {pr.date} &bull; {pr.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1817] mb-2">
                    {pr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A554E] leading-relaxed">
                    {pr.summary}
                  </p>
                </div>
                <Link
                  href={pr.link}
                  className="px-6 py-3 rounded-xl bg-[#1A1817] text-[#F6F4EE] text-xs font-medium tracking-wide hover:bg-[#33302C] transition-colors whitespace-nowrap flex items-center gap-2 group"
                >
                  <span>Read Publication</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Media Assets & Downloads */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1A1817] text-[#F6F4EE]">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Brand &amp; Media Kit Downloads
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-3">
                Official Media Inquiries &amp; Assets
              </h2>
              <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed">
                For press inquiries, keynote availability, executive interviews, or raw telemetry datasets regarding voice latency and autonomous telephony, contact the media desk directly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono mb-8">
              <a
                href="/images/ayush-meena-dark.jpg"
                download
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#B88746] transition-colors flex items-center justify-between"
              >
                <span>Ayush Meena Headshot (JPG)</span>
                <Download className="w-4 h-4 text-[#B88746]" />
              </a>
              <a
                href="/apple-icon.png"
                download
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#B88746] transition-colors flex items-center justify-between"
              >
                <span>DestiX AI Icon / Logo (PNG)</span>
                <Download className="w-4 h-4 text-[#B88746]" />
              </a>
              <Link
                href="/research/2026-enterprise-ai-telephony-benchmark"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#B88746] transition-colors flex items-center justify-between"
              >
                <span>Benchmark Telemetry Study</span>
                <ExternalLink className="w-4 h-4 text-[#B88746]" />
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#A8A29E]">
              <div>
                Direct Media Contact: <a href="mailto:ayushmeenadestixai@gmail.com" className="text-[#F6F4EE] underline">ayushmeenadestixai@gmail.com</a>
              </div>
              <button
                onClick={() => setBookingOpen(true)}
                className="px-6 py-3 rounded-full bg-[#B88746] text-[#1A1817] font-semibold text-xs tracking-wide hover:bg-[#C99756] transition-colors"
              >
                Schedule Executive Interview
              </button>
            </div>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
