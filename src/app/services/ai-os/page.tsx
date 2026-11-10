"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Workflow,
  CheckCircle2,
  Database,
  MessageSquare,
  Cpu,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  Lock,
  Server,
  Layers,
} from "lucide-react";

export default function AiOsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const modules = [
    {
      title: "Bi-Directional CRM Synchronization",
      desc: "Instantly update contact lifecycle stages, call recordings, audio transcripts, sentiment scores, and next action tasks in HubSpot, Salesforce, or GoHighLevel within 2 seconds of call completion.",
      tag: "HubSpot & Salesforce Enterprise",
      icon: Database,
    },
    {
      title: "Autonomous WhatsApp Pipelines",
      desc: "Trigger high-converting WhatsApp messages while the lead is still on the phone. Deliver villa lookbooks, meeting calendar invites, or payment links with zero human delay.",
      tag: "WhatsApp Business API",
      icon: MessageSquare,
    },
    {
      title: "Multi-Step n8n & Python Orchestration",
      desc: "Complex logic flows connecting webhooks, ERP databases, inventory systems, and telephony triggers with 100% data privacy and self-healing error catchers.",
      tag: "Private Docker / Cloud Deployments",
      icon: Workflow,
    },
    {
      title: "Company Memory & Rules Engine",
      desc: "Give your AI persistent knowledge of company policies, pricing tiers, doctor availability, inventory limits, and legal disclaimers. Strictly zero hallucination.",
      tag: "Vector Embeddings & Hybrid RAG",
      icon: Cpu,
    },
  ];

  const workflowSteps = [
    { step: "01", name: "Inbound Lead / Webhook", detail: "Meta Ad Form, Google Lead, or Inbound Phone Hotline" },
    { step: "02", name: "Realtime Data Enrichment", detail: "Enrich phone, location, and past CRM history in 80ms" },
    { step: "03", name: "Voice Qualification Call", detail: "DestiX AI dials lead in < 45s, qualifies intent & budget" },
    { step: "04", name: "Instant WhatsApp & Calendar Sync", detail: "Calendar invite locked, brochure PDF dispatched" },
    { step: "05", name: "CRM Stage & Revenue Attribution", detail: "Deal created in pipeline with transcript & sentiment" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614] font-sans antialiased">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/operating-system" className="hover:text-[#181614] transition-colors">Operating System</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">Enterprise AI OS</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD1] text-[10px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-4 shadow-2xs">
            <Workflow className="w-3 h-3 text-[#B88746]" />
            <span>OPERATIONAL INFRASTRUCTURE // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] tracking-tight leading-[1.08] mb-6">
            Autonomous workflows that connect <br />
            <span className="italic text-[#B88746]">voice calls, CRM, and revenue.</span>
          </h1>
          <p className="text-[#55514B] font-['Plus_Jakarta_Sans'] text-base sm:text-lg max-w-3xl leading-relaxed">
            A voice agent without backend automation is just an expensive toy. We build full-stack enterprise operating systems that connect your phones, CRMs, WhatsApp channels, and database records into one synchronized pipeline.
          </p>
        </header>

        {/* 4 Core Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#B88746]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#EDE8DC] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#B88746]" />
                    </div>
                    <span className="text-[10px] font-['JetBrains_Mono'] px-2.5 py-1 rounded-md bg-[#F6F4EE] border border-[#E2DDD1] text-[#888277]">
                      {module.tag}
                    </span>
                  </div>
                  <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                    {module.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {module.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* 5-Step Execution Sequence */}
        <section className="rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-10 shadow-xs mb-16">
          <div className="mb-8">
            <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-1 font-bold">
              // END-TO-END DATA PIPELINE
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              How Information Moves in Under 45 Seconds
            </h2>
          </div>

          <div className="space-y-4">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#F6F4EE]/60 border border-[#E2DDD1] gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-['JetBrains_Mono'] text-sm font-bold text-[#B88746] w-8">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-[#181614]">
                      {step.name}
                    </h3>
                    <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] mt-0.5">
                      {step.detail}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-[#888277] uppercase tracking-wider">
                    Automated
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Security Box */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#EDE8DC] border border-[#E2DDD1] mb-16 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#B88746]" />
                <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider font-bold">
                  SECURITY &amp; SOVEREIGNTY
                </span>
              </div>
              <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-2">
                Your Data Never Trains Public LLM Models
              </h2>
              <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                All client call audio, transcripts, and CRM contacts are isolated in dedicated virtual private environments. Enterprise zero-retention policies and strict SOC-2 compliant encryption in transit and at rest.
              </p>
            </div>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-mono font-semibold transition-all shrink-0 self-start md:self-center shadow-xs"
            >
              Explore Turnkey Pricing
            </Link>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#B88746] text-center shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-4">
            INTEGRATED AUTOMATION SPRINT
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Connect Your Telephony &amp; CRM in 14 Days
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto mb-8 leading-relaxed">
            Eliminate manual data entry, missed lead handoffs, and delayed follow-ups. Schedule a 30-minute scoping diagnostic directly with founder Ayush Meena.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all duration-300 shadow-sm"
            >
              Book 30-Min Diagnostic Call
            </button>
            <Link
              href="/operating-system"
              className="px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300"
            >
              Explore Operating System
            </Link>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="Enterprise AI OS & Automation"
      />
    </div>
  );
}
