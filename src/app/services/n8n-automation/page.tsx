"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Workflow,
  Server,
  Lock,
  Zap,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  RefreshCw,
  GitMerge,
  AlertTriangle,
} from "lucide-react";

export default function N8nAutomationPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const capabilities = [
    {
      title: "Sovereign Private Cluster Hosting",
      desc: "Deployed directly on your private AWS, GCP, or DigitalOcean VPC inside Docker or Kubernetes. Zero third-party data exposure, 100% GDPR, HIPAA, and DPDP compliant.",
      tag: "PRIVATE VPC",
      metric: "100% Private",
    },
    {
      title: "Zapier & Make (Integromat) Migration",
      desc: "Slash recurring automation SaaS bills by 80% to 95%. Eliminate per-task penalty pricing and migrate to unlimited, deterministic execution on your own hardware.",
      tag: "COST EFFICIENCY",
      metric: "80%+ Savings",
    },
    {
      title: "AI Voice & WhatsApp Orchestration",
      desc: "Connects sub-500ms voice agent telephony directly with Meta WhatsApp Cloud APIs, Google Calendar, and enterprise databases with self-healing webhook queues.",
      tag: "REAL-TIME DAGS",
      metric: "< 80ms Latency",
    },
    {
      title: "Complex Multi-Agent State Machines",
      desc: "Multi-branch logic handling fallbacks, human handoffs, sentiment alerts, dead-letter queues, and automated incident notifications to Slack or Microsoft Teams.",
      tag: "FAULT TOLERANT",
      metric: "99.99% Uptime",
    },
  ];

  const comparisonPoints = [
    { feature: "Data Privacy & Data Residency", n8n: "100% On-Premise / Your Cloud VPC", zapier: "Third-party US Cloud multi-tenant" },
    { feature: "Per-Task Cost Structure", n8n: "Flat server cost (~$20-$80/mo unlimited)", zapier: "Scales to $1,000-$5,000+/mo on volume" },
    { feature: "Execution Speed & Latency", n8n: "Sub-50ms local execution", zapier: "1,000ms - 15,000ms queue latency" },
    { feature: "Custom Python & JavaScript Nodes", n8n: "Full native Node.js / Python support", zapier: "Restricted sandbox execution limits" },
    { feature: "AI & Vector DB Native Nodes", n8n: "Native LangChain, OpenAI, Pinecone, Qdrant", zapier: "Basic webhooks with high token markups" },
    { feature: "Code & Architecture Ownership", n8n: "100% Client-Owned Workflows (JSON)", zapier: "Locked inside vendor platform" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/solutions" className="hover:text-[#181614] transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">n8n Automation</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-6 shadow-2xs">
            <Workflow className="size-3.5 text-[#B88746]" />
            <span>SOVEREIGN ENTERPRISE ORCHESTRATION // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Enterprise n8n Workflow{" "}
            <span className="italic text-[#B88746]">Automation.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-8">
            Engineered by Principal AI Systems Architect Ayush Meena. We build private, self-hosted n8n infrastructure that connects your voice telephony, AI chatbots, CRMs, and databases into a sovereign operational engine—slashing SaaS task bills by 80% with zero data leaks.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule n8n Architecture Audit</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Review Transparent Unit Economics
            </Link>
          </div>
        </header>

        {/* Core Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                    {cap.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#181614]">{cap.metric}</span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                  {cap.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center gap-2 text-xs font-semibold text-[#181614]">
                <CheckCircle2 className="size-4 text-[#B88746]" />
                <span>Production-Hardened Docker/K8s Architecture</span>
              </div>
            </div>
          ))}
        </section>

        {/* n8n vs Zapier Matrix */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Architectural Benchmark
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mt-2">
              Self-Hosted n8n vs. Legacy SaaS Platforms
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-['Plus_Jakarta_Sans'] border-collapse">
              <thead>
                <tr className="border-b border-[#E2DDD1] text-xs font-mono text-[#888277] uppercase">
                  <th className="py-4 pr-6">Operational Vector</th>
                  <th className="py-4 px-6 text-[#B88746] font-bold">DestiX AI Private n8n</th>
                  <th className="py-4 pl-6 text-[#55514B]">Zapier / Make (SaaS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1]/60">
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F4EE]/50 transition-colors">
                    <td className="py-4 pr-6 font-semibold text-[#181614]">{row.feature}</td>
                    <td className="py-4 px-6 font-mono text-xs text-[#181614] font-medium bg-[#B88746]/5 rounded-lg">{row.n8n}</td>
                    <td className="py-4 pl-6 text-[#55514B]">{row.zapier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-white mb-4">
            Own Your Automation Infrastructure.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Migrate from fragile SaaS task billings to sovereign, self-hosted n8n pipelines with 100% client code ownership.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
          >
            Deploy Private n8n Cluster
          </button>
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}