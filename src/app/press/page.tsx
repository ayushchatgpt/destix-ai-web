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
  PhoneCall,
  Calendar,
  Code2,
} from "lucide-react";

export default function PressPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [copiedBio, setCopiedBio] = useState<string | null>(null);
  const [selectedBioLength, setSelectedBioLength] = useState<"50" | "100" | "200">("200");
  const [copiedEmbed, setCopiedEmbed] = useState(false);
  const [factSheetModal, setFactSheetModal] = useState(false);

  const bioTexts = {
    "50": "Ayush Meena is an Indian AI systems architect and founder of DestiX AI (ayush.company), headquartered in Connaught Place, New Delhi. He architects carrier-grade 435ms P50 latency voice telephony, 3D WebGL storefronts, and sovereign private AI operating systems for high-ticket commercial practices across India, the UAE, UK, US, and Europe.",
    "100": "Ayush Meena is an Indian AI systems architect and the founder of DestiX AI (https://ayush.company), headquartered in Connaught Place, New Delhi. Operating internationally across India, Dubai, London, NYC, and Miami, Meena designs carrier-grade conversational AI voice telephony achieving audited 435ms P50 latency across 524,000 synthetic calls and 14 architectures. DestiX AI replaces recurring SaaS seat markups with 100% client code ownership, direct wholesale carrier pass-through (~₹4.50–₹7.50/min), and a contractual 5x Hurdle Rate ROI guarantee. His systems have qualified over AED 85M+ in verified off-plan pipeline across prime commercial corridors.",
    "200": "Ayush Meena is an Indian AI systems architect and the founder of DestiX AI (https://ayush.company), headquartered in Connaught Place, New Delhi. Operating globally across India, the UAE, UK, US, and Europe, Meena specializes in carrier-grade conversational voice telephony, sub-45-second speed-to-lead outbound dialing, and spatial 3D WebGL web platforms for high-ticket enterprise practices.\n\nRejecting generic SaaS wrappers that impose 300% to 1,000% markups on telephony while suffering from noticeable 1.5-to-2.5-second turn-taking delays, Meena engineered the sovereign 435ms P50 latency architecture. This pipeline integrates Silero Voice Activity Detection (VAD v4), Deepgram Nova-3 streaming ASR, Groq Llama-3 inference, and Cartesia Sonic speech synthesis directly through Tier-1 telecom cross-connects (Tata Telecommunications, Airtel Enterprise PRI, and Twilio Elastic SIP).\n\nUnder Meena's architectural leadership, DestiX AI enforces 100% Client Code & IP Ownership, private Docker/n8n VPC clusters, and direct wholesale carrier pass-through pricing with zero per-seat fees. Every enterprise engagement is contractually bound to a 5x Hurdle Rate ROI covenant. His deployments span luxury real estate advisory pipelines qualifying AED 85M+ in off-plan inventory, high-ticket private surgical clinics, and Swiss-inspired architectural flagships.",
  };

  const handleCopyBio = (length: "50" | "100" | "200") => {
    navigator.clipboard.writeText(bioTexts[length]);
    setCopiedBio(length);
    setTimeout(() => setCopiedBio(null), 2500);
  };

  const embedSvgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360" width="100%" height="100%" style="background:#FAF8F5;border-radius:16px;font-family:system-ui,-apple-system,sans-serif">
  <rect width="800" height="360" fill="#FAF8F5" rx="16"/>
  <text x="32" y="44" font-size="18" font-weight="700" fill="#1A1817">Enterprise Voice AI Latency Benchmark (aRTT)</text>
  <text x="32" y="68" font-size="12" fill="#7D7871">524,000 Synthetic Calls Audited Across 14 Topologies (Source: DestiX AI / ayush.company)</text>
  
  <!-- DestiX AI -->
  <text x="32" y="120" font-size="13" font-weight="600" fill="#1A1817">DestiX AI Sovereign Pipeline (435ms P50)</text>
  <rect x="32" y="132" width="232" height="28" rx="6" fill="#1A1817"/>
  <text x="42" y="151" font-size="11" font-weight="600" fill="#F6F4EE">435ms (Silero 180ms + Deepgram 120ms + Groq 65ms + Cartesia 70ms)</text>
  
  <!-- Retell AI -->
  <text x="32" y="190" font-size="13" font-weight="600" fill="#5A554E">Retell AI Multi-Tenant SaaS (950ms P50)</text>
  <rect x="32" y="202" width="507" height="28" rx="6" fill="#D6C7B2"/>
  <text x="42" y="221" font-size="11" font-weight="500" fill="#1A1817">950ms (+118% Latency Overhead)</text>
  
  <!-- Bland AI / Legacy Wrapper -->
  <text x="32" y="260" font-size="13" font-weight="600" fill="#5A554E">Standard SaaS Wrapper / Bland AI (1,450ms P50)</text>
  <rect x="32" y="272" width="736" height="28" rx="6" fill="#E2DDD1"/>
  <text x="42" y="291" font-size="11" font-weight="500" fill="#7D7871">1,450ms (+233% Latency Overhead // Noticeable Human Lag)</text>
  
  <line x1="32" y1="324" x2="768" y2="324" stroke="#E2DDD1" stroke-width="1"/>
  <text x="32" y="342" font-size="10" fill="#8F6426" font-family="monospace">DestiX AI Architecture Guarantee: Direct Tier-1 SIP + Zero SaaS Per-Seat Markup + 5x Hurdle Rate ROI</text>
</svg>`;

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedSvgCode);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2500);
  };

  const handleDownloadFactSheet = () => {
    const textContent = `# DESTIX AI (AYUSH.COMPANY) — 2026 OFFICIAL ENTERPRISE FACT SHEET
Principal AI Systems Architect: Ayush Meena
Founding Headquarters: Connaught Place, New Delhi 110001, India
Operating Corridors: India, UAE (Dubai), UK (London), USA (NYC, Miami, LA, Texas), Europe (Paris, Berlin, Zurich, Amsterdam)
Primary Canonical Domain: https://ayush.company

## CORE TELEMETRY & SPECIFICATIONS
- Acoustic Round-Trip Time (aRTT): 435ms P50 (sub-500ms) audited across 524,000 synthetic calls and 14 voice AI topologies.
- Architectural Stack: Silero VAD v4 (turn detection <180ms) + Deepgram Nova-3 (streaming ASR 120ms) + Groq Llama-3 (65ms first-token) + Cartesia Sonic (70ms chunk synthesis).
- Telephony & Carriers: Direct Tier-1 cross-connects (Tata Telecommunications SIP, Airtel Enterprise PRI, Twilio Elastic SIP).
- Client Economics: 100% Client Code & IP Ownership. 0% SaaS seat markup. Direct wholesale carrier pass-through (~₹4.50–₹7.50/min or $0.02–$0.04/min).
- Commercial Guarantee: Mandatory 5x Hurdle Rate ROI guarantee on enterprise deployments.
- Sovereign Infrastructure: Self-hosted Docker / n8n workflow clusters deployed in client's own AWS/GCP/Azure Virtual Private Cloud (VPC).
- Verified Production Proof: AED 85M+ verified off-plan pipeline qualified for premier UAE luxury real estate advisory with sub-40-second speed-to-lead callback.

## GLOBAL TELECOM & REGULATORY COMPLIANCE
- India: TRAI Commercial Communications Customer Preference Regulations (DLT Principal Entity registration).
- UAE: TDRA regulatory guidelines and local VoIP peering.
- United Kingdom: Ofcom CLI Presentation Standards and TPS/CTPS do-not-call scrubbing.
- United States: FCC STIR/SHAKEN A-Level attestation and TCPA consent compliance.
- European Union: EU AI Act High-Risk / Transparency Articles and GDPR Article 22 automated decision safeguards.

## MEDIA CONTACT & EXECUTIVE SCHEDULING
- Press Inquiries & Keynotes: ayushmeenadestixai@gmail.com
- Schedule 30-Minute Diagnostic: https://ayush.company/contact
- Dataset Citation: Zenodo 10.5281/zenodo.24435851`;

    const blob = new Blob([textContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "destix-ai-enterprise-factsheet-2026.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const pressReleases = [
    {
      date: "Q1 2026",
      tag: "RESEARCH PUBLICATION",
      title: "DestiX AI Publishes 2026 Enterprise Telephony Benchmark Across 524,000 Synthetic Calls",
      summary:
        "Audited latency study measuring acoustic round-trip time across 14 voice AI architectures, establishing sub-500ms (435ms P50) latency through Silero VAD v4, Deepgram Nova-3, Groq inference, and Cartesia Sonic synthesis.",
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
    { label: "Telephony Compliance", value: "TRAI DLT (India), Ofcom (UK), FCC/TCPA (US), TDRA (UAE), GDPR Article 22 & EU AI Act (EU)" },
    { label: "Benchmark Telephony Latency", value: "435ms P50 Acoustic Round-Trip Time (aRTT)" },
    { label: "Economic Covenant", value: "Strict 5x Hurdle Rate ROI Guarantee & 100% Client Code Ownership" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7D7871] uppercase">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Press &amp; Media Kit</span>
          </nav>
        </div>

        {/* ABOVE-THE-FOLD HIGH-CONVERTING INQUIRY BAR */}
        <section className="max-w-7xl mx-auto px-6 mb-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#1A1817] text-[#F6F4EE] border border-[#B88746]/40 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#B88746]/20 border border-[#B88746]/40 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 text-[#B88746] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#B88746] text-[#1A1817] font-bold">
                    LIVE 435ms TELEPHONY AUDIT
                  </span>
                  <span className="text-xs font-mono text-[#A8A29E] hidden sm:inline">
                    P50 Audited across 524k synthetic calls
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F6F4EE] mt-0.5 font-medium">
                  Hear human-parity conversational voice AI live in under 45 seconds or book a confidential 30-minute architectural diagnostic.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
              <Link
                href="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#B88746] hover:bg-[#C99756] text-[#1A1817] font-semibold text-xs font-mono transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#1A1817]" />
                <span>Book 30-Min Diagnostic (/contact)</span>
              </Link>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#F6F4EE] text-xs font-mono border border-white/10 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#B88746]" />
                <span>Hear 435ms Demo</span>
              </button>
            </div>
          </div>
        </section>

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
            <p className="text-lg text-[#5A554E] leading-relaxed mb-6 max-w-3xl">
              Official biographical dossier of Founder &amp; Principal AI Systems Architect Ayush Meena, corporate research publications, audited 524k-call benchmark telemetry, and verified media assets for DestiX AI.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <button
                onClick={handleDownloadFactSheet}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#E2DDD1] hover:border-[#B88746] text-[#1A1817] font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#B88746]" />
                <span>Download 1-Page Fact Sheet (Markdown)</span>
              </button>
              <a
                href="#latency-chart"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#E2DDD1] hover:border-[#B88746] text-[#1A1817] font-medium transition-colors"
              >
                <BarChart3 className="w-3.5 h-3.5 text-[#B88746]" />
                <span>View &amp; Embed 435ms Latency Chart</span>
              </a>
            </div>
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
                    {(["50", "100", "200"] as const).map((len) => (
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

        {/* EMBEDDABLE 435MS VS. 1,200MS LATENCY SVG CHART */}
        <section id="latency-chart" className="max-w-7xl mx-auto px-6 mb-20 scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E2DDD1]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88746]/10 text-[10px] font-mono tracking-widest text-[#8F6426] font-bold uppercase mb-3">
                  <Activity className="w-3 h-3 text-[#B88746]" />
                  EMBEDDABLE MEDIA ASSET // AUDITED BENCHMARK
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
                  435ms vs. 1,200ms+ Latency Visual Breakdown
                </h2>
                <p className="text-xs sm:text-sm text-[#5A554E] mt-2 max-w-2xl">
                  Acoustic round-trip time (aRTT) measured across cellular carrier connections. DestiX AI sovereign direct-SIP pipeline vs. multi-tenant SaaS wrappers. Free to embed for journalists, researchers, and tech publications.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleCopyEmbed}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A1817] hover:bg-[#33302C] text-[#F6F4EE] text-xs font-mono transition-colors shadow-2xs"
                >
                  {copiedEmbed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied Embed SVG Code!</span>
                    </>
                  ) : (
                    <>
                      <Code2 className="w-3.5 h-3.5 text-[#B88746]" />
                      <span>Copy Embed SVG Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Rendered Live Visual Comparison Chart */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2DDD1] mb-6">
              <div className="space-y-6">
                {/* DestiX AI Sovereign Pipeline */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-bold text-[#1A1817] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      DestiX AI Sovereign Pipeline (Audited 435ms P50)
                    </span>
                    <span className="font-bold text-emerald-700">435 ms aRTT</span>
                  </div>
                  <div className="w-full bg-[#E2DDD1] rounded-xl h-10 overflow-hidden flex shadow-inner">
                    <div style={{ width: "41%" }} className="bg-[#1A1817] text-[#F6F4EE] text-[10px] font-mono flex items-center justify-center font-medium px-2">
                      VAD 180ms
                    </div>
                    <div style={{ width: "27%" }} className="bg-[#33302C] text-[#F6F4EE] text-[10px] font-mono flex items-center justify-center font-medium px-2">
                      ASR 120ms
                    </div>
                    <div style={{ width: "15%" }} className="bg-[#8F6426] text-[#F6F4EE] text-[10px] font-mono flex items-center justify-center font-medium px-1">
                      LLM 65ms
                    </div>
                    <div style={{ width: "17%" }} className="bg-[#B88746] text-[#1A1817] text-[10px] font-mono flex items-center justify-center font-bold px-1">
                      TTS 70ms
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#7D7871] mt-1.5">
                    <span>Silero VAD v4 &bull; Deepgram Nova-3 &bull; Groq Llama-3 &bull; Cartesia Sonic</span>
                    <span className="text-emerald-700 font-semibold">Sub-human perceptual threshold (&lt;500ms)</span>
                  </div>
                </div>

                {/* Retell AI */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-medium text-[#5A554E]">Retell AI Multi-Tenant SaaS (950ms P50)</span>
                    <span className="font-semibold text-amber-700">950 ms aRTT (+118% lag)</span>
                  </div>
                  <div className="w-full bg-[#E2DDD1] rounded-xl h-9 overflow-hidden flex shadow-inner opacity-80">
                    <div style={{ width: "80%" }} className="bg-[#A8A29E] text-[#1A1817] text-[10px] font-mono flex items-center justify-center font-medium px-2">
                      950ms Multi-Tenant Cloud Proxy Overhead
                    </div>
                  </div>
                </div>

                {/* Standard SaaS Wrapper / Bland AI */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-medium text-[#5A554E]">Standard SaaS Wrapper / Bland AI (1,450ms P50)</span>
                    <span className="font-semibold text-red-700">1,450 ms aRTT (+233% lag)</span>
                  </div>
                  <div className="w-full bg-[#E2DDD1] rounded-xl h-9 overflow-hidden flex shadow-inner opacity-60">
                    <div style={{ width: "100%" }} className="bg-[#D6C7B2] text-[#1A1817] text-[10px] font-mono flex items-center justify-center font-medium px-2">
                      1,450ms–2,200ms Noticeable Conversational Gap (Causes Constant Audio Collisions)
                    </div>
                  </div>
                </div>
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
                Dataset DOI: <span className="text-[#1A1817]">10.5281/zenodo.24435851</span> &bull; 524,000 synthetic test runs across 14 voice AI topologies.
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
                Corporate Reference Telemetry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
                DestiX AI Fact Sheet
              </h2>
            </div>
            <button
              onClick={handleDownloadFactSheet}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A1817] text-[#F6F4EE] text-xs font-mono hover:bg-[#33302C] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#B88746]" />
              <span>Download Fact Sheet</span>
            </button>
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
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F6F4EE] font-medium text-xs tracking-wide transition-colors"
                >
                  Book 30-Min Diagnostic
                </Link>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="px-6 py-2.5 rounded-full bg-[#B88746] text-[#1A1817] font-semibold text-xs tracking-wide hover:bg-[#C99756] transition-colors cursor-pointer"
                >
                  Schedule Executive Interview
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
