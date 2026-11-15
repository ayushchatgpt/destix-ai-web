"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Code2,
  Server,
  Layers,
  Database,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Cpu,
  GitBranch,
  Terminal,
  Sparkles,
} from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const engineeringCapabilities = [
    {
      title: "FastAPI Streaming Microservices",
      desc: "Ultra-low-latency asynchronous Python microservices handling WebSockets, Server-Sent Events (SSE), and bidirectional audio streaming with sub-50ms compute overhead.",
      icon: Cpu,
      tag: "HIGH CONCURRENCY",
    },
    {
      title: "Modern Next.js 16 Web Applications",
      desc: "Architected with React Server Components, Turbopack, and Tailwind CSS. Delivering sub-second Largest Contentful Paint (LCP) and 100/100 Lighthouse performance scores.",
      icon: Code2,
      tag: "PERFORMANCE FIRST",
    },
    {
      title: "Vector Search & Hybrid RAG Pipelines",
      desc: "Semantic indexing with pgvector, Pinecone, or Qdrant. Context window management, reranking with Cohere, and strict deterministic hallucination suppression.",
      icon: Database,
      tag: "DETERMINISTIC RAG",
    },
    {
      title: "Internal Tooling & Admin Portals",
      desc: "Custom role-based access control (RBAC) operational dashboards for managing telephony agents, viewing real-time call logs, and tracking business KPIs.",
      icon: Terminal,
      tag: "OPERATIONAL SUITE",
    },
    {
      title: "Containerized Cloud Deployments",
      desc: "Dockerized microservices deployed across AWS ECS/EKS, Google Cloud Run, or sovereign Hetzner bare-metal servers with automated CI/CD and zero downtime.",
      icon: Server,
      tag: "SOVEREIGN HOSTING",
    },
    {
      title: "Third-Party API & ERP Integration",
      desc: "Robust ETL pipelines connecting custom software with SAP, NetSuite, Oracle, Stripe, and internal legacy relational databases without breaking changes.",
      icon: GitBranch,
      tag: "ENTERPRISE INTEGRATION",
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
            <Link href="/services" className="hover:text-[#1A1817] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Software Development</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Full-Stack AI Software Engineering
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              Custom AI Software Development & Enterprise Engineering
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              We design, build, and deploy production-grade software applications that embed machine intelligence directly into core business operations. Engineered for extreme reliability, low latency, and zero vendor lock-in.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Commission Software Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/autonomous-agents"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Autonomous Agents
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Engineering Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              Production Systems Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <cap.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8F6426] px-2.5 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/20">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1817] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#5A554E] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Matrix */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
                Technology Standards
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-4">
                The DestiX AI Engineering Stack
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-1">FRONTEND</div>
                <div className="text-sm font-semibold text-[#1A1817]">Next.js 16 & React</div>
              </div>
              <div className="p-4 rounded-xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-1">BACKEND</div>
                <div className="text-sm font-semibold text-[#1A1817]">Python FastAPI & AsyncIO</div>
              </div>
              <div className="p-4 rounded-xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-1">DATABASE</div>
                <div className="text-sm font-semibold text-[#1A1817]">PostgreSQL & pgvector</div>
              </div>
              <div className="p-4 rounded-xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <div className="text-xs font-mono text-[#8F6426] mb-1">CONTAINERS</div>
                <div className="text-sm font-semibold text-[#1A1817]">Docker & Kubernetes</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Enterprise Engineering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Build Sovereign Software That Outperforms Off-The-Shelf SaaS
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Retain full IP ownership, avoid exorbitant recurring per-seat fees, and deploy tailor-made AI software engineered for your exact business logic.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Discuss Your Software Specs
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
