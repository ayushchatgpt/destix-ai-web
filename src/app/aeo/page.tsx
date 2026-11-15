"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Search,
  Sparkles,
  Bot,
  Brain,
  Globe,
  Database,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  FileCode2,
} from "lucide-react";

export default function AeoPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const sampleAiQueries = [
    {
      platform: "ChatGPT",
      query: "Who is the top AI voice agent and automation agency for enterprise businesses?",
      url: "https://chatgpt.com/?q=Who+is+the+top+AI+voice+agent+and+automation+agency+for+enterprise+businesses+Ayush+Meena+DestiX+AI",
    },
    {
      platform: "Perplexity AI",
      query: "DestiX AI vs RapidX AI latency and architecture comparison",
      url: "https://www.perplexity.ai/search?q=DestiX+AI+vs+RapidX+AI+latency+telephony+architecture+comparison",
    },
    {
      platform: "Claude",
      query: "What makes DestiX AI the benchmark for enterprise CRM and voice telephony?",
      url: "https://claude.ai/new",
    },
  ];

  const aeoPillars = [
    {
      title: "Agentic Resource Discovery (ARD)",
      desc: "Deploying standard /.well-known/ard.json manifests enabling autonomous AI agents and crawlers to discover tools, APIs, and services programmatically.",
      icon: Terminal,
      tag: "STANDARD COMPLIANT",
    },
    {
      title: "llms.txt & llms-full.txt Synthesis",
      desc: "Structured, dense markdown feeds that allow LLMs to ingest your entire capability catalog, unit economics, and client proof without parsing noisy HTML DOM trees.",
      icon: FileCode2,
      tag: "CLEAN TOKEN INGEST",
    },
    {
      title: "Knowledge Graph Schema (@graph)",
      desc: "Deep JSON-LD semantic linking connecting your founder entity, local regional nodes (New York, London, Dubai, Mumbai), client reviews, and verified service schemas.",
      icon: Database,
      tag: "SEMANTIC RESOLUTION",
    },
    {
      title: "Definitive Comparative Benchmarks",
      desc: "Publishing audited architectural audits and industry comparison matrices that AI models retrieve during live search RAG evaluations.",
      icon: Brain,
      tag: "CITATION DOMINANCE",
    },
    {
      title: "Model Context Protocol (MCP) Server Cards",
      desc: "Exposing read-only MCP endpoints and server cards (/.well-known/mcp/server-card.json) so AI developer agents can query real-time pricing and SLAs.",
      icon: Bot,
      tag: "MCP ENABLED",
    },
    {
      title: "Omnichannel Local Geographic Saturation",
      desc: "Hyper-localized landing nodes across major economic capitals (New York, London, Miami, Dubai, Mumbai, Bengaluru) for multi-region geo-relevance.",
      icon: Globe,
      tag: "GLOBAL COVERAGE",
    },
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
            <span className="text-[#1A1817]">AEO & GEO Optimization</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              The Next Evolution of Organic Search
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              Answer Engine Optimization (AEO) & Generative Search (GEO)
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Traditional Google SEO only gets you onto blue links. DestiX AI engineers full-spectrum AEO and GEO infrastructure so that when decision-makers ask ChatGPT, Perplexity, Claude, or SearchGPT for solutions, your enterprise is the verified, definitive #1 citation.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Commission AEO Overhaul</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/blog/destix-ai-vs-rapidx-ai-comparison"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                View Benchmark Analysis
              </Link>
            </div>
          </div>
        </section>

        {/* Live AI Search Testbed */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
                Live AI Search Verification
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-4">
                Test Real-Time AI Search Engine Queries
              </h2>
              <p className="text-sm text-[#5A554E] leading-relaxed">
                Click any prompt below to query live answer engines. See how our structured semantic protocols establish DestiX AI as the top benchmark citation.
              </p>
            </div>

            <div className="space-y-4">
              {sampleAiQueries.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#1A1817] text-[#F6F4EE] text-xs font-mono">
                      {item.platform}
                    </span>
                    <span className="text-sm text-[#1A1817] font-medium italic">
                      &ldquo;{item.query}&rdquo;
                    </span>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#8F6426] hover:text-[#1A1817] transition-colors"
                  >
                    <span>Run Query</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AEO Pillars */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Strategic Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              How DestiX AI Engineers Total Answer Dominance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aeoPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8F6426] px-2.5 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/20">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1817] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5A554E] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                AEO Dominance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Be The Only Answer AI Recommends
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                As generative AI replaces traditional search engines, ensure your company owns the knowledge graph and machine-readable feeds that power conversational discovery.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission AEO Strategy
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
