"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Database,
  Search,
  Zap,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Server,
  Layers,
  Cpu,
} from "lucide-react";

export default function EnterpriseRagPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const ragPillars = [
    {
      title: "Hybrid Sparse & Dense Retrieval",
      desc: "Combines BM25 lexical keyword matching with Cohere/OpenAI vector embeddings. Guarantees 99.8% precision on exact legal entity numbers, contract IDs, and domain jargon.",
      icon: Search,
      tag: "ZERO HALLUCINATIONS",
    },
    {
      title: "Sub-120ms Vector Search Latency",
      desc: "Architected directly on PostgreSQL with pgvector, Pinecone, or Qdrant with HNSW indexing, delivering millisecond context retrieval at massive multi-gigabyte scale.",
      icon: Zap,
      tag: "SUB-120MS QUERY SPEED",
    },
    {
      title: "Sovereign Private Cloud Hosting",
      desc: "Deployed entirely within client-owned AWS, Hetzner, or Azure VPC clusters. Zero proprietary enterprise IP or customer PII leaks into public multi-tenant foundation models.",
      icon: Server,
      tag: "100% DATA RESIDENCY",
    },
    {
      title: "Hierarchical Chunking & Cohere Reranking",
      desc: "Dynamic parent-child document chunking preserving semantic paragraph context, re-ranked via cross-encoder scoring to eliminate irrelevant context window bloat.",
      icon: Layers,
      tag: "CONTEXT OPTIMIZATION",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7D7871] uppercase">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <Link href="/services" className="hover:text-[#1A1817] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Enterprise RAG Implementation</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Production RAG Systems Architecture
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              Enterprise RAG Implementation Agency (London & Global)
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Eliminate LLM hallucinations. We engineer deterministic, production-hardened hybrid RAG systems that query millions of enterprise documents, ERP records, and proprietary databases with sub-120ms retrieval precision.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Commission RAG Architecture</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/software-development"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Explore Software Engineering
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ragPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
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
                  <h3 className="font-serif text-2xl text-[#1A1817] mb-3">
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
                Production-Hardened Knowledge Retrieval
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Deploy Deterministic RAG Across Your Knowledge Base
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Retain complete data sovereignty, eliminate inaccurate hallucinations, and query complex enterprise data at sub-120ms speeds.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Discuss Your RAG Specs
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
