"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  PhoneCall,
  Zap,
  Globe,
  FileCode,
  Sparkles,
  Calculator,
  Workflow,
  Search,
  ChevronRight,
} from "lucide-react";

export default function LearnPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const modules = [
    {
      category: "voice",
      title: "5-Stage Voice Latency Deconstruction (Under 500ms)",
      desc: "Why single-token LLM latency is deceptive marketing. The full audio-to-audio pipeline: Silero VAD (80ms) + Deepgram Nova-3 (120ms) + Fast LLM (120ms) + Cartesia Sonic (90ms) + Domestic SIP (25ms).",
      readTime: "9 min deep-dive",
      badge: "Architecture Pillar",
      href: "/blog/best-ai-voice-agent-in-new-delhi",
      icon: Zap,
    },
    {
      category: "pricing",
      title: "The True Cost of AI Voice Agents in India (TCO Breakdown)",
      desc: "Complete mathematical breakdown of marginal per-minute costs (₹3.40 to ₹5.90/min) across STT, LLM tokens, neural TTS, and TRAI-compliant Indian SIP trunks. Zero hidden platform markups.",
      readTime: "8 min analysis",
      badge: "Cost Benchmark",
      href: "/blog/ai-voice-agent-cost-india",
      icon: Calculator,
    },
    {
      category: "telephony",
      title: "Indian Phone Numbers & SIP Trunking for Voice AI",
      desc: "How to provision real +91 Indian virtual DIDs, configure TLS/SRTP encrypted SIP trunks, ensure TRAI compliance, and prevent telecom carriers from throttling automated calls.",
      readTime: "7 min guide",
      badge: "Telephony Stack",
      href: "/blog/indian-phone-numbers-for-ai-voice-agents",
      icon: PhoneCall,
    },
    {
      category: "voice",
      title: "Dual-Stream Hinglish Code-Switching Architecture",
      desc: "Engineering conversational agents that seamlessly switch between formal Hindi and English mid-sentence without losing intent, context, or conversational momentum.",
      readTime: "6 min tutorial",
      badge: "Speech Synthesis",
      href: "/blog/how-to-build-inbound-hindi-ai-voice-agent",
      icon: Terminal,
    },
    {
      category: "automation",
      title: "Meta WhatsApp Cloud API & CRM Instant Handoff",
      desc: "Connecting LiveKit audio sessions directly to Meta's WhatsApp Cloud API and n8n webhooks. Delivering verified PDF brochures and booking calendar links within 5 seconds of hangup.",
      readTime: "5 min implementation",
      badge: "CRM Automation",
      href: "/services/whatsapp-automation",
      icon: Workflow,
    },
    {
      category: "agency",
      title: "Best AI Voice Agents in New Delhi NCR (2026 Competitive Audit)",
      desc: "Head-to-head comparison between DestiX AI, RapidX AI, AI Sapiens, and Decibel Labs. Latency benchmarks, custom code ownership vs SaaS vendor lock-in, and ROI audits.",
      readTime: "12 min benchmark",
      badge: "Market Matrix",
      href: "/blog/best-ai-voice-agent-in-new-delhi",
      icon: Layers,
    },
  ];

  const filteredModules =
    activeCategory === "all"
      ? modules
      : modules.filter((m) => m.category === activeCategory);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DestiX AI Technical Learning Archive & Engineering Guides",
    description:
      "Public engineering archive covering conversational voice agents, sub-500ms audio telemetry, domestic SIP telephony, and CRM automation architectures.",
    url: "https://ayush.company/learn",
    publisher: {
      "@type": "Organization",
      name: "DestiX AI",
      url: "https://ayush.company",
      founder: {
        "@type": "Person",
        name: "Ayush Meena",
        url: "https://ayush.company/about",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: modules.map((m, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: m.title,
        description: m.desc,
        url: `https://ayush.company${m.href}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#F6F4EE] text-[#131210] antialiased selection:bg-[#B88746]/20 selection:text-[#131210]">
        <Header onOpenBooking={() => setBookingOpen(true)} />

        <main className="pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            {/* Header Badge */}
            <div className="flex flex-col items-start mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE4] border border-[#DDD8CB] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] uppercase font-medium">
                <BookOpen className="w-3.5 h-3.5 text-[#B88746]" />
                PUBLIC ENGINEERING ARCHIVE
              </div>

              <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#131210] leading-[1.05] tracking-tight mt-6 max-w-4xl">
                Technical Architecture, <span className="italic text-[#B88746]">Field Playbooks</span> &amp; Voice Engineering Guides
              </h1>

              <p className="text-lg sm:text-xl text-[#5C564C] max-w-3xl leading-relaxed mt-6 font-normal">
                No superficial marketing fluff. This is DestiX AI&apos;s open technical vault—detailed latency deconstructions, domestic Indian telephony setups, transparent unit economics, and production-tested automation workflows.
              </p>
            </div>

            {/* Quick Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 py-4 border-y border-[#DDD8CB] my-10 text-xs font-['JetBrains_Mono']">
              <span className="text-[#888277] mr-2 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" /> Topic Filter:
              </span>
              {[
                { id: "all", label: "All Engineering Modules" },
                { id: "voice", label: "Voice Latency & Audio AI" },
                { id: "pricing", label: "Unit Economics & Pricing" },
                { id: "telephony", label: "Indian SIP & Telephony" },
                { id: "automation", label: "WhatsApp & n8n Workflows" },
                { id: "agency", label: "Market Audits" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-[#131210] text-[#F6EFE2] font-semibold shadow-sm"
                      : "bg-[#FFFFFF] text-[#5C564C] border border-[#DDD8CB] hover:bg-[#EFECE4]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              {filteredModules.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group rounded-2xl bg-[#FFFFFF] border border-[#DDD8CB] hover:border-[#B88746]/60 p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(24,22,20,0.06)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F4EE] border border-[#DDD8CB] text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746] font-semibold">
                          <IconComponent className="w-3 h-3 text-[#B88746]" />
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-['JetBrains_Mono'] text-[#888277]">
                          {item.readTime}
                        </span>
                      </div>

                      <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#131210] group-hover:text-[#B88746] transition-colors leading-tight mb-3">
                        {item.title}
                      </h2>

                      <p className="text-sm text-[#5C564C] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#F0ECE1] flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#131210] font-semibold group-hover:text-[#B88746] transition-colors">
                      <span>Read Engineering Dispatch</span>
                      <div className="w-6 h-6 rounded-full bg-[#F6F4EE] flex items-center justify-center group-hover:bg-[#B88746] group-hover:text-[#131210] transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Machine Learning / AI Agent Protocol Box */}
            <div className="rounded-3xl bg-[#131210] text-[#F6EFE2] p-8 sm:p-12 my-16 border border-[#25221F] relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1815] border border-[#3A332E] text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#B88746] mb-3">
                    <Terminal className="w-3 h-3 text-[#B88746]" />
                    PROGRAMMATIC CONTEXT PROTOCOL
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#F6EFE2]">
                    Built for Developers, Engineers, and AI Agents
                  </h3>
                </div>
                <Link
                  href="/api/mcp"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B88746] text-[#131210] font-bold text-xs tracking-tight hover:bg-[#C5A059] transition-colors"
                >
                  <span>Query MCP Endpoint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-sm sm:text-base text-[#C5BDB1] leading-relaxed mb-6 max-w-3xl">
                All DestiX AI architecture benchmarks, latency telemetries, and practice parameters are exposed via our public Model Context Protocol endpoint at <code className="font-['JetBrains_Mono'] text-[#B88746] bg-[#1A1815] px-2 py-0.5 rounded">/api/mcp</code> and plain-text <code className="font-['JetBrains_Mono'] text-[#B88746] bg-[#1A1815] px-2 py-0.5 rounded">/llms.txt</code> for instant grounding by ChatGPT, Claude, and Perplexity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#25221F] text-xs font-['JetBrains_Mono'] text-[#A89F93]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B88746]" />
                  <span>100% Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#B88746]" />
                  <span>435ms Measured Round-Trip</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#B88746]" />
                  <span>TRAI Compliant SIP Trunks</span>
                </div>
              </div>
            </div>

            {/* Diagnostic Invitation */}
            <div className="rounded-2xl bg-[#EFECE4] border border-[#DDD8CB] p-8 sm:p-12 text-center flex flex-col items-center">
              <span className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-3">
                Need Implementation Assistance?
              </span>
              <h3 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#131210] mb-4">
                Let Us Architect Your Voice Pipeline
              </h3>
              <p className="text-base text-[#5C564C] max-w-2xl mb-8">
                Skip months of trial and error with telephony providers, STT hallucinations, and prompt tuning. Book a diagnostic session with principal architect Ayush Meena.
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#131210] hover:bg-[#25221F] text-[#F6EFE2] font-semibold text-sm transition-all duration-300 shadow-md group"
              >
                <span>Book 30-Minute Architecture Session</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </main>

        <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />

        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      </div>
    </>
  );
}
