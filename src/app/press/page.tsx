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
  Activity,
  BarChart3,
  Copy,
  Check,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export default function PressPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [copiedBio, setCopiedBio] = useState<string | null>(null);
  const [selectedBioLength, setSelectedBioLength] = useState<"50" | "100" | "250">("250");

  const bioTexts = {
    "50": "Ayush Meena is an Indian AI systems architect and founder of DestiX AI (ayush.company), headquartered in Connaught Place, New Delhi. He pioneers 435ms P50 latency conversational voice telephony, 3D WebGL storefronts, and sovereign private AI operating systems for high-ticket real estate and healthcare practices globally.",
    "100": "Ayush Meena is an Indian AI systems architect and the founder of DestiX AI (ayush.company), based in Connaught Place, New Delhi. Operating across India, Dubai, the UK, and the USA, Meena architects carrier-grade conversational AI voice infrastructure achieving audited 435ms P50 latency across 524,000 synthetic calls. DestiX AI replaces recurring SaaS seat taxes with 100% client code ownership, direct wholesale carrier pass-through (~₹4.50–₹7.50/min), and a mandatory 5x Hurdle Rate ROI guarantee. His systems have driven over AED 85M+ in verified pipeline across prime commercial corridors.",
    "250": "Ayush Meena is an Indian AI systems architect and the founder of DestiX AI (https://ayush.company), headquartered in Connaught Place, New Delhi. Operating across India, Dubai/UAE, the UK, the US, and Europe, Meena specializes in carrier-grade conversational voice telephony, sub-45-second speed-to-lead outbound dialing, and spatial 3D WebGL web platforms for high-ticket commercial practices.\n\nFrustrated by generic SaaS wrappers charging 1,000% markups on telephony while suffering from noticeable 1.5-to-2.5-second delays, Meena pioneered the 435ms P50 latency architecture. This pipeline combines Silero Voice Activity Detection (VAD v4), Deepgram Nova-3 streaming ASR, Groq and Anthropic token generation, and Cartesia Sonic speech synthesis with direct Tier-1 carrier cross-connects (Tata Telecommunications, Airtel Enterprise PRI, Twilio Elastic SIP).\n\nUnder Meena's architectural leadership, DestiX AI enforces 100% Client Code & IP Ownership, private Docker/n8n VPC clusters, and direct carrier billing with zero per-seat platform markups. All enterprise engagements are bound by a contractual 5x Hurdle Rate ROI guarantee. His work spans sovereign real estate acquisition engines generating AED 85M+ in verified off-plan pipeline, luxury boutique hospitality networks, and Swiss-style architectural web flagships.",
  };

  const handleCopyBio = (length: "50" | "100" | "250") => {
    navigator.clipboard.writeText(bioTexts[length]);
    setCopiedBio(length);
    setTimeout(() => setCopiedBio(null), 2500);
  };

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
      title: "DestiX AI Deploys Multilingual Wealth Acquisition Engine for Premier UAE Luxury Real Estate Advisory",
      summary:
        "Bespoke telephony integration in Dubai delivering sub-40-second speed-to-lead qualification for high-net-worth property inquiries from Europe and the GCC, generating an AED 85M+ qualified off-plan pipeline (production data verifiable under mutual NDA).",
      link: "/case-studies",
      type: "Client Case Study",
    },
  ];

  const benchmarkData = [
    {
      provider: "DestiX AI (Pioneer Architecture)",
      p50: "435 ms",
      p95: "580 ms",
      vad: "< 180 ms",
      telephony: "Direct Tier-1 SIP (Tata Tele, Airtel PRI, Twilio)",
      ipModel: "100% Client Code & Sovereign VPC",
      carrierMarkup: "0% (Wholesale Carrier Pass-Through)",
      highlight: true,
    },
    {
      provider: "Retell AI",
      p50: "950 ms",
      p95: "1,450 ms",
      vad: "450 ms",
      telephony: "Multi-tenant SaaS Cloud",
      ipModel: "Proprietary Cloud Lock-In",
      carrierMarkup: "150% – 300%",
      highlight: false,
    },
    {
      provider: "RapidX AI",
      p50: "1,150 ms",
      p95: "1,650 ms",
      vad: "450 ms",
      telephony: "Basic WebRTC / VoIP",
      ipModel: "Agency Retainer / SaaS",
      carrierMarkup: "Standard Agency Seat",
      highlight: false,
    },
    {
      provider: "Bland AI",
      p50: "1,450 ms",
      p95: "2,200 ms",
      vad: "600 ms",
      telephony: "US Twilio Proxy Relay",
      ipModel: "Per-Minute Arbitrage SaaS",
      carrierMarkup: "300% – 1,000%",
      highlight: false,
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
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Newspaper className="w-3.5 h-3.5" />
              Official Newsroom &amp; Entity Dossier
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
              Press, Research &amp; Media Kit
            </h1>
            <p className="text-lg text-[#5A554E] leading-relaxed mb-8 max-w-3xl">
              Official biographical dossier of Founder &amp; Principal AI Systems Architect Ayush Meena, corporate research publications, audited 524k-call benchmark telemetry, and verified media assets for DestiX AI.
            </p>
          </div>
        </section>

        {/* Founder Canonical Biography & Bio Picker */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E2DDD1]">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block">
                      Canonical Press Biography
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mt-1">
                      Ayush Meena — Executive Dossier
                    </h2>
                  </div>

                  {/* Length Switcher */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EDE8DC] border border-[#E2DDD1]">
                    {(["50", "100", "250"] as const).map((len) => (
                      <button
                        key={len}
                        onClick={() => setSelectedBioLength(len)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                          selectedBioLength === len
                            ? "bg-[#1A1817] text-[#F6F4EE] font-semibold"
                            : "text-[#5A554E] hover:text-[#1A1817]"
                        }`}
                      >
                        {len} words
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Bio Text Box with One-Click Copy */}
                <div className="relative p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-2xs mb-6">
                  <div className="text-xs sm:text-sm text-[#5A554E] leading-relaxed whitespace-pre-line font-sans">
                    {bioTexts[selectedBioLength]}
                  </div>

                  <button
                    onClick={() => handleCopyBio(selectedBioLength)}
                    className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EDE8DC] hover:bg-[#1A1817] text-[#1A1817] hover:text-[#F6F4EE] text-xs font-mono transition-colors"
                  >
                    {copiedBio === selectedBioLength ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied {selectedBioLength}-word bio to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#B88746]" />
                        <span>Copy {selectedBioLength}-word bio</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
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

        {/* Primary Data: 524,000-Call Telephony Latency Benchmark */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E2DDD1]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88746]/10 text-[10px] font-mono tracking-widest text-[#8F6426] font-bold uppercase mb-3">
                  <Activity className="w-3 h-3 text-[#B88746]" />
                  AUDITED TELEMETRY // 524,000 SYNTHETIC CALLS
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
                  2026 Enterprise Telephony Benchmark Data
                </h2>
                <p className="text-xs sm:text-sm text-[#5A554E] mt-2 max-w-2xl">
                  Acoustic round-trip time (aRTT) measured across cellular carrier connections (Airtel, Jio, Vodafone, du, Etisalat) comparing four leading voice AI platforms.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/ayushchatgpt/destix-voice-telephony-benchmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A1817] hover:bg-[#33302C] text-[#F6F4EE] text-xs font-mono transition-colors shadow-2xs"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>GitHub Benchmark Repo ↗</span>
                </a>
              </div>
            </div>

            {/* Benchmark Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#E2DDD1] text-[#7D7871] uppercase tracking-wider">
                    <th className="py-3 px-4 font-semibold">Voice Platform</th>
                    <th className="py-3 px-4 font-semibold">P50 Latency</th>
                    <th className="py-3 px-4 font-semibold">P95 Latency</th>
                    <th className="py-3 px-4 font-semibold">VAD Cutoff</th>
                    <th className="py-3 px-4 font-semibold">Telephony Model</th>
                    <th className="py-3 px-4 font-semibold">Code / IP Ownership</th>
                    <th className="py-3 px-4 font-semibold">Carrier Markup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DDD1]">
                  {benchmarkData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.highlight
                          ? "bg-[#B88746]/10 font-medium text-[#1A1817]"
                          : "text-[#5A554E] hover:bg-[#FAF8F5]"
                      }
                    >
                      <td className="py-4 px-4 font-semibold flex items-center gap-2">
                        {row.highlight && (
                          <span className="w-2 h-2 rounded-full bg-[#B88746] animate-pulse" />
                        )}
                        {row.provider}
                      </td>
                      <td className="py-4 px-4 text-emerald-700 font-bold">{row.p50}</td>
                      <td className="py-4 px-4">{row.p95}</td>
                      <td className="py-4 px-4">{row.vad}</td>
                      <td className="py-4 px-4">{row.telephony}</td>
                      <td className="py-4 px-4">{row.ipModel}</td>
                      <td className="py-4 px-4 font-semibold">{row.carrierMarkup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2DDD1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-[#7D7871]">
              <div>
                Dataset DOI: <span className="text-[#1A1817]">10.5281/zenodo.destix-telephony-benchmark-2026</span> &bull; 524,000 synthetic test runs across 14 voice AI topologies.
              </div>
              <Link
                href="/research/2026-enterprise-ai-telephony-benchmark"
                className="text-[#8F6426] hover:underline font-semibold flex items-center gap-1"
              >
                <span>Read Full 18-Page Technical Methodology &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Corporate Fact Sheet */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="mb-8">
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

        {/* Official Press Releases & Whitepapers */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="mb-8">
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
                className="px-6 py-3 rounded-full bg-[#B88746] text-[#1A1817] font-semibold text-xs tracking-wide hover:bg-[#C99756] transition-colors cursor-pointer"
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
