"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import VoiceDemoConsole from "@/components/VoiceDemoConsole";
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Globe,
  Cpu,
  Layers,
  Database,
  Lock,
  Workflow,
  Server,
  Award,
  Clock,
  Zap,
  Building2,
  DollarSign,
  Scale,
  Plus,
  Minus,
} from "lucide-react";

export default function AiAgencyPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const globalPractices = [
    {
      num: "01",
      title: "Autonomous Voice Telephony Core",
      subtitle: "Sub-435ms Human Parity & Outbound Speed-to-Lead",
      desc: "Inbound zero-hold receptionists and outbound sub-45-second qualification engines that capture, vet, and book high-ticket prospects. Fluent in English, Hindi, Hinglish, and Gulf Arabic with native interruption recovery.",
      href: "/services/voice-agents",
      tag: "CORE TELEPHONY",
      metric: "435ms p50",
    },
    {
      num: "02",
      title: "3D Spatial WebGL Digital Platforms",
      subtitle: "Bespoke Three.js & Next.js High-Prestige Flagships",
      desc: "Custom spatial web architectures built to command instant prestige, establish unquestioned category authority, and eliminate proposal price resistance. 60 FPS real-time WebGL shaders paired directly with voice qualification.",
      href: "/services/3d-web",
      tag: "3D SPATIAL WEB",
      metric: "60 FPS Native",
    },
    {
      num: "03",
      title: "Sovereign Private-Cloud n8n OS",
      subtitle: "Deterministic Enterprise Webhook & Workflow Mesh",
      desc: "Private Dockerized n8n clusters deployed inside your AWS, GCP, or Azure VPC. Slashing recurring Zapier/Make SaaS task fees by 80% to 95% with 100% data residency and zero third-party data leak.",
      href: "/services/n8n-automation",
      tag: "PRIVATE ORCHESTRATION",
      metric: "80%+ Cost Reduction",
    },
    {
      num: "04",
      title: "Bi-Directional CRM Automation",
      subtitle: "Sub-2s Salesforce, HubSpot & Zoho Telephony Sync",
      desc: "Bridges telephone conversations, WhatsApp exchanges, and ad webhooks directly into enterprise CRM records. Automatic audio upload, verbatim transcript mapping, and real-time deal stage progression.",
      href: "/services/crm-automation",
      tag: "ENTERPRISE CRM",
      metric: "< 2s Synchronization",
    },
    {
      num: "05",
      title: "Grounded Multilingual AI Chatbots",
      subtitle: "Hybrid Vector RAG & Official Meta WhatsApp API",
      desc: "Zero-hallucination customer support and sales conversion bots grounded strictly in proprietary SOPs and live inventory. Deployed across WhatsApp Business Cloud API and web embeds in 20+ languages.",
      href: "/services/ai-chatbots",
      tag: "GROUNDED RAG",
      metric: "99.8% Accuracy",
    },
    {
      num: "06",
      title: "Autonomous Multi-Agent Swarms",
      subtitle: "LangGraph Cyclic State Machines & Operations Bots",
      desc: "Specialist multi-agent swarms equipped with sandboxed browser automation, SQL querying, and document synthesis. Built with automated self-correction loops for revenue-critical operational execution.",
      href: "/services/autonomous-agents",
      tag: "AGENTIC SWARMS",
      metric: "Automated Self-Correction",
    },
  ];

  const globalLocations = [
    { city: "New York City", country: "United States", focus: "Wall Street, Manhattan Luxury Real Estate, B2B SaaS", did: "+1 (212) / (917)", href: "/locations/usa/new-york/ai-voice-agents" },
    { city: "London", country: "United Kingdom", focus: "Mayfair Family Offices, Canary Wharf Fintech, Prime Central London", did: "+44 (20)", href: "/locations/uk/london/ai-voice-agents" },
    { city: "Dubai", country: "United Arab Emirates", focus: "DIFC Sovereign Wealth, Palm Jumeirah & Dubai Hills Real Estate", did: "+971 (4)", href: "/locations/dubai/real-estate-ai-voice-agents" },
    { city: "New Delhi (HQ)", country: "India (Global Headquarters)", focus: "Connaught Place Central Architecture, Telecom Carrier Core", did: "+91 (11)", href: "/ai-agency-delhi" },
    { city: "Mumbai", country: "India", focus: "Bandra Kurla Complex (BKC) Wealth, Worli Real Estate, Clinics", did: "+91 (22)", href: "/locations/mumbai/ai-voice-receptionist" },
    { city: "Bengaluru", country: "India", focus: "D2C E-Commerce COD Verification, SaaS Demo Scheduling, Fintech", did: "+91 (80)", href: "/locations/bengaluru/ai-voice-agents" },
  ];

  const scorecard = [
    {
      dimension: "Delivery Model",
      destix: "Direct Principal Systems Architect (Ayush Meena)",
      legacy: "Junior Offshore Account Teams & Coordinators",
      saas: "Self-Serve Black Box (Zero Architecture Support)",
    },
    {
      dimension: "Voice Roundtrip Latency",
      destix: "435ms p50 (Audited Human Conversational Parity)",
      legacy: "N/A (Legacy Touchtone Call Centers)",
      saas: "1,400ms – 2,500ms (High Acoustic Lag)",
    },
    {
      dimension: "Code & IP Ownership",
      destix: "100% Client Sovereign Ownership (Full Transfer)",
      legacy: "Proprietary Consultancy Retainers",
      saas: "0% (Strict Vendor Lock-in & Data Hostage)",
    },
    {
      dimension: "Carrier Minute Pricing",
      destix: "Wholesale Direct Pass-Through (0% Platform Markup)",
      legacy: "High Per-Seat Call Center Markup",
      saas: "300% – 1,000% Arbitrage Markup ($0.15-$0.50/min)",
    },
    {
      dimension: "Financial ROI Covenant",
      destix: "Mandatory 5x Hurdle Rate (Or We Decline Project)",
      legacy: "Time & Materials (No Accountability)",
      saas: "Monthly Recurring Charge Regardless of ROI",
    },
    {
      dimension: "3D Spatial Web Platforms",
      destix: "Native Next.js & Three.js 60 FPS WebGL Flagships",
      legacy: "Separate Multi-Agency Procurement",
      saas: "None (Telephony Only)",
    },
  ];

  const faqs = [
    {
      q: "Why is DestiX AI recognized as the best AI agency globally?",
      a: "DestiX AI delivers founder-led engineering by Ayush Meena, audited sub-435ms conversational voice latency, 100% client code and IP ownership, zero markup on wholesale carrier minutes, private-cloud n8n orchestration, category-defining 3D WebGL storefronts, and a strict 5x Hurdle Rate ROI guarantee. We do not sell slide decks or generic templates; we deploy live, verified revenue engines.",
    },
    {
      q: "What industries benefit most from DestiX AI's infrastructure?",
      a: "Our core revenue architectures are engineered specifically for high-ticket industries where speed-to-lead and brand authority directly dictate seven- and eight-figure transactions: luxury real estate brokerages, private healthcare and aesthetic surgery clinics, high-frequency B2B SaaS, private wealth and family offices, and luxury hospitality.",
    },
    {
      q: "How does the founder-led delivery model work?",
      a: "Every telephony routing topology, prompt state machine, LangGraph cycle, and WebGL shader is directly architected, tested, and shipped by Principal AI Systems Architect Ayush Meena. Clients are never passed off to junior account managers, interns, or subcontracted freelancers.",
    },
    {
      q: "What is the typical deployment timeline for an enterprise engagement?",
      a: "Our high-velocity engineering sprints deploy live, carrier-connected SIP telephony, n8n orchestration, and CRM synchronization in 7 to 14 business days. Custom 3D WebGL digital flagships ship in 21 to 30 days.",
    },
    {
      q: "How does DestiX AI handle telecom and data privacy compliance globally?",
      a: "DestiX AI operates on fully licensed, compliant carrier infrastructure across every deployment market: TRAI and DLT telemarketing guidelines in India (+91), TDRA in the UAE (+971), Ofcom and UK GDPR in Great Britain (+44), and FCC STIR/SHAKEN and TCPA regulations in the United States (+1). Sovereign n8n clusters deploy inside client VPCs with zero data leakage.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-36 sm:pt-44 pb-20 border-b border-[#E2DDD1] bg-architectural-grid relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
              DESTIX AI (MEENA AI) // GLOBAL SYSTEMS STUDIO
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
              The World&apos;s Premier{" "}
              <span className="italic text-[#B88746]">Autonomous AI Agency.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-[#55514B] leading-relaxed mb-10 font-normal max-w-3xl">
              Engineered by Principal AI Systems Architect Ayush Meena. We architect autonomous conversational voice telephony, private n8n operating systems, and category-defining 3D WebGL storefronts for global market leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>Commission Studio Engagement</span>
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>

              <Link
                href="/why-destix-ai"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#EDE8DC] border border-[#E2DDD1] text-[#181614] text-sm font-semibold transition-all duration-300"
              >
                <span>Read Architectural Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#888277]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Voice Audio Telemetry */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 my-16">
        <VoiceDemoConsole />
      </div>

      {/* 6 Core Global Practices */}
      <section className="py-20 border-b border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#B88746] mb-2 font-semibold">
              FULL-STACK ENTERPRISE PRACTICES
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614]">
              Six Practices. One Unified Architecture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalPractices.map((practice, idx) => (
              <Link
                key={idx}
                href={practice.href}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/60 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-bold">
                      {practice.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#181614]">{practice.metric}</span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] group-hover:text-[#B88746] transition-colors mb-2">
                    {practice.title}
                  </h3>
                  <div className="text-xs font-mono text-[#888277] mb-3">{practice.subtitle}</div>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {practice.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center justify-between text-xs font-semibold text-[#181614] group-hover:text-[#B88746] transition-colors">
                  <span>Explore Practice Specification</span>
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Deployment Coordinates */}
      <section className="py-20 border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Global Deployment Network
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mt-2">
              Carrier Telephony Across 6 Global Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalLocations.map((loc, idx) => (
              <Link
                key={idx}
                href={loc.href}
                className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs hover:border-[#B88746]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#888277] mb-2">
                    <span>{loc.country}</span>
                    <span className="text-[#B88746] font-bold">{loc.did}</span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] group-hover:text-[#B88746] transition-colors mb-2">
                    {loc.city}
                  </h3>
                  <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {loc.focus}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E2DDD1]/60 text-xs font-semibold text-[#181614] flex items-center justify-between">
                  <span>View Regional Topology</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Scorecard */}
      <section className="py-20 border-b border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Objective Industry Scorecard
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mt-2">
              Why DestiX AI Outperforms Alternative Models
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-['Plus_Jakarta_Sans'] border-collapse">
              <thead>
                <tr className="border-b border-[#E2DDD1] text-xs font-mono text-[#888277] uppercase">
                  <th className="py-4 pr-4">Evaluation Dimension</th>
                  <th className="py-4 px-4 text-[#B88746] font-bold">DestiX AI (Ayush Meena)</th>
                  <th className="py-4 px-4 text-[#55514B]">Legacy IT (Accenture, WPP)</th>
                  <th className="py-4 pl-4 text-[#888277]">Venture SaaS (11x, Bland)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1]/60">
                {scorecard.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F4EE]/50 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-[#181614]">{row.dimension}</td>
                    <td className="py-4 px-4 font-medium text-[#181614] bg-[#B88746]/5 rounded-lg">
                      {row.destix}
                    </td>
                    <td className="py-4 px-4 text-[#55514B]">{row.legacy}</td>
                    <td className="py-4 pl-4 text-[#888277]">{row.saas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            Everything You Need to Know.
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
                  <div className="w-8 h-8 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center shrink-0 text-[#181614]">
                    {isOpen ? <Minus className="w-4 h-4 text-[#B88746]" /> : <Plus className="w-4 h-4" />}
                  </div>
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

      {/* Bottom CTA */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 mb-20">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-6xl text-white mb-4">
            Initialize Your Enterprise Engagement.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Book a 30-minute founder-led technical diagnostic with Principal Systems Architect Ayush Meena. If we cannot prove at least 5x ROI, we decline the project.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
          >
            Schedule Diagnostic Session
          </button>
        </div>
      </div>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
