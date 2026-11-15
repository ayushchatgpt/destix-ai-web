"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Database,
  Workflow,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Layers,
  Server,
  Lock,
  RefreshCw,
  GitBranch,
  PhoneCall,
  Clock,
  Sparkles,
} from "lucide-react";

export default function CrmAutomationPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const crmSystems = [
    {
      name: "Salesforce Enterprise & Health Cloud",
      desc: "Custom Apex triggers and bidirectional REST endpoints. Ingests call recordings, contact entity fields, and opportunity stage transitions with full audit trails.",
      tag: "ENTERPRISE TIER",
    },
    {
      name: "HubSpot Sales Hub & Marketing Pro",
      desc: "Sub-2-second contact timeline updates, custom deal properties, automated task creation, and instant enrollment in smart email & WhatsApp sequences.",
      tag: "REAL-TIME SYNC",
    },
    {
      name: "Zoho CRM & Bigin",
      desc: "Seamless synchronization for mid-market and global enterprises. Auto-allocates leads to regional sales reps based on caller intent and budget qualification.",
      tag: "PAN-INDIA & UAE",
    },
    {
      name: "LeadSquared Real Estate & Healthcare",
      desc: "Engineered specifically for high-velocity property developers and diagnostic clinic chains. Instantly updates lead activity logs and schedules site visits.",
      tag: "HIGH VELOCITY",
    },
    {
      name: "GoHighLevel (GHL) & Follow Up Boss",
      desc: "Complete agency and brokerage automation: custom webhook triggers, sub-45-second speed-to-lead outbound callbacks, and multi-channel pipeline stages.",
      tag: "BROKERAGE SUITE",
    },
    {
      name: "Custom Postgres, Snowflake & Supabase",
      desc: "Direct database write pipelines for sovereign enterprise stacks that refuse third-party SaaS data silos. 100% private Docker-hosted synchronization.",
      tag: "SOVEREIGN DATA",
    },
  ];

  const pipelineStages = [
    {
      step: "01",
      title: "Webhook Ingestion & Identity Enrichment",
      detail: "Lead created via Meta Ads, Google Ads, portal form, or incoming phone call. DestiX AI parses phone numbers, checks DND/DLT registry, and enriches prior CRM history in 85ms.",
    },
    {
      step: "02",
      title: "Sub-45s Autonomous Voice Engagement",
      detail: "AI voice agent dials lead with sub-435ms conversational parity, confirms buyer intent, extracts liquid budget, timeframes, and specific service needs.",
    },
    {
      step: "03",
      title: "Verbatim Audio & Entity Extraction",
      detail: "Speech stream is transcribed, summarized with strict factual constraints, and mapped to custom CRM fields (Budget_Range__c, Site_Visit_Date__c, Intent_Score__c).",
    },
    {
      step: "04",
      title: "Deal Advancement & Multi-Channel Dispatch",
      detail: "Deal automatically advances to 'Meeting Scheduled'. Instant WhatsApp brochure PDF is dispatched, calendar invite locked, and Slack alert sent to sales director.",
    },
  ];

  const faqs = [
    {
      q: "How does DestiX AI eliminate manual CRM data entry for sales teams?",
      a: "Every phone call handled by DestiX AI is automatically transcribed, analyzed for intent and qualification variables (budget, timeline, requirements), and written directly into your CRM contact and deal records within 2 seconds. Sales reps never spend hours logging notes again.",
    },
    {
      q: "Can DestiX AI trigger calls when a lead fills a form on our website or Facebook ad?",
      a: "Yes. Using real-time webhooks, DestiX AI detects the new lead submission within milliseconds and dials the prospect's phone in under 45 seconds while their purchase intent is peak. Speed-to-lead improves from hours to seconds.",
    },
    {
      q: "Is client CRM data private and compliant with GDPR / DPDP / HIPAA?",
      a: "Yes. DestiX AI supports zero-data-retention pipelines and private self-hosted middleware (via Dockerized n8n on your own AWS/GCP virtual private cloud). Data flows directly between your telephony trunk and your CRM with end-to-end TLS 1.3 encryption.",
    },
    {
      q: "How long does a custom CRM telephony deployment take?",
      a: "Turnkey CRM integration is deployed within 5 to 10 business days as part of our founder-led sprint led by Ayush Meena, complete with test sandbox verification and sales team onboarding.",
    },
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
          <span className="text-[#181614] font-semibold">AI CRM Automation</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-6 shadow-2xs">
            <Database className="size-3.5 text-[#B88746]" />
            <span>ENTERPRISE CRM PIPELINES // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            CRM Integration &amp;{" "}
            <span className="italic text-[#B88746]">Automated Telephony.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-8">
            Engineered by Principal AI Systems Architect Ayush Meena. We bridge the gap between phone calls, WhatsApp messages, and your revenue pipeline—instantly syncing audio recordings, intent scores, and calendar appointments into Salesforce, HubSpot, Zoho, and GoHighLevel in under two seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule CRM Architecture Review</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Inspect Transparent Unit Economics
            </Link>
          </div>
        </header>

        {/* CRM Ecosystem Grid */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Supported Platforms &amp; Connectors
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mt-2">
              Every CRM. Every Pipeline. Zero Latency.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmSystems.map((crm, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                      {crm.tag}
                    </span>
                    <RefreshCw className="size-4 text-[#888277]" />
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3">
                    {crm.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {crm.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center gap-2 text-xs font-semibold text-[#181614]">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <span>Sub-2-Second Bi-Directional Sync</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Stage Telephony Pipeline */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Deterministic Architecture
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mt-2">
              How the Telephony-CRM Pipeline Executes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineStages.map((stage, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F6F4EE]/60 border border-[#E2DDD1] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#B88746] font-bold block mb-2">{stage.step}</span>
                  <h3 className="font-['Instrument_Serif'] text-xl text-[#181614] mb-2">{stage.title}</h3>
                  <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">{stage.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mt-2">
              Engineering Details &amp; Integration
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2DDD1]">
                <h3 className="font-['Instrument_Serif'] text-xl sm:text-2xl text-[#181614] mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-white mb-4">
            Eliminate Manual Lead Entry Forever.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Connect your telephony and WhatsApp pipelines directly into your CRM with sub-2-second sync and zero data loss.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
          >
            Schedule Technical Integration Call
          </button>
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}