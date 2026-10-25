"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  MessageSquare,
  PhoneCall,
  CheckCircle2,
  Zap,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Send,
  FileText,
  Calendar,
  Database,
  Smartphone,
  Share2,
} from "lucide-react";

export default function WhatsAppAutomationPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const workflows = [
    {
      step: "01",
      title: "Sub-45s Inbound Telephony Intercept",
      desc: "Lead submits inquiry on Meta Ads, Google Ads, or luxury real estate portal. DestiX AI voice agent calls their phone in 38 seconds, qualifies budget and intent, and gains verbal consent.",
      icon: PhoneCall,
    },
    {
      step: "02",
      title: "Sub-5s WhatsApp Asset Dispatch",
      desc: "Within 5 seconds of the call ending, our webhook triggers an official WhatsApp message delivering the exact PDF brochure, site visit time, or aesthetic clinic location pin.",
      icon: Send,
    },
    {
      step: "03",
      title: "Contextual Bi-Directional Chat",
      desc: "When the lead replies on WhatsApp asking for parking details or pricing adjustments, the AI chat agent responds with full memory of the voice conversation. Zero repetitive questions.",
      icon: MessageSquare,
    },
    {
      step: "04",
      title: "Live CRM & Calendar Synchronization",
      desc: "Call audio recording, transcript, WhatsApp message history, and appointment confirmation sync bi-directionally into HubSpot, Salesforce, Zoho, or Google Sheets.",
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#131210] selection:bg-[#B88746]/20 selection:text-[#131210]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Breadcrumb Strip */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#7A756D]">
            <Link href="/" className="hover:text-[#131210] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <Link href="/voice-agents" className="hover:text-[#131210] transition-colors">
              Services
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-[#B88746]">WhatsApp Automation</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mb-6">
            <MessageSquare className="size-3.5" />
            Official Meta WhatsApp Business Cloud API Integration
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight leading-[1.08] text-[#131210] max-w-5xl mb-6">
            Voice AI + WhatsApp Automation:{" "}
            <span className="italic font-normal text-[#7A756D]">
              Sub-5-Second Post-Call Conversion Pipelines
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#5A554E] max-w-3xl leading-relaxed mb-8">
            Phone calls create emotional commitment; WhatsApp delivers instant execution.
            DestiX AI connects your voice telephony directly to official Meta WhatsApp
            Cloud APIs—dispatching brochures, calendar invites, and payment links the
            second your voice agent hangs up.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-6 py-3.5 bg-[#B88746] text-[#131210] rounded-xl text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#C99857] transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <PhoneCall className="size-3.5" />
              <span>Schedule Architecture Diagnostic</span>
            </button>

            <Link
              href="/pricing"
              className="px-6 py-3.5 bg-white border border-[#E5E0D5] text-[#131210] rounded-xl text-xs font-mono uppercase tracking-wider hover:border-[#B88746] transition-colors shadow-xs"
            >
              View Transparent Pricing
            </Link>
          </div>
        </section>

        {/* 4-Step Architecture Workflow */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="mb-10">
            <span className="text-xs font-mono font-semibold text-[#B88746] uppercase tracking-wider">
              Unified Conversion Plumbing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#131210] mt-2 mb-3">
              How the Voice-to-WhatsApp Funnel Converts at 38%
            </h2>
            <p className="text-sm text-[#5A554E] max-w-2xl">
              In India, email open rates hover below 15%. WhatsApp delivers 98% open rates
              within 3 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflows.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.step}
                  className="p-8 bg-white border border-[#E5E0D5] rounded-2xl shadow-xs"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-mono font-bold text-[#B88746]">
                      {w.step}
                    </span>
                    <div className="p-2.5 bg-[#F9F7F2] rounded-xl border border-[#E5E0D5]">
                      <Icon className="size-4 text-[#B88746]" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-medium text-[#131210] mb-2">
                    {w.title}
                  </h3>
                  <p className="text-xs text-[#5A554E] leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Capabilities Matrix */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 bg-white border border-[#E5E0D5] rounded-3xl shadow-sm">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#131210] mb-6">
              Official WhatsApp API Infrastructure Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#131210]">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Meta Cloud API Compliance</span>
                </div>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  Zero unofficial scraping or banned browser sessions. Deployed 100% on
                  Meta&apos;s enterprise cloud infrastructure with verified sender templates.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#131210]">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Dynamic PDF Brochure Generation</span>
                </div>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  Personalized project brochures and price breakdowns rendered on the fly
                  based on the specific apartment layout discussed on the call.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#131210]">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Google Calendar & CRM Sync</span>
                </div>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  Direct webhook dispatch into HubSpot, Salesforce, Zoho CRM, and executive
                  Google Calendars with zero manual data entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="p-8 sm:p-14 bg-[#131210] text-[#F6F4EE] rounded-3xl border border-[#B88746]/40 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746]">
                Turnkey Voice + Messaging Integration
              </span>

              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
                Connect Voice AI with WhatsApp Automation
              </h2>

              <p className="mt-4 text-base text-neutral-300 leading-relaxed">
                Stop losing high-intent ad leads between phone calls and missed follow-ups.
                Let us deploy an automated conversational voice and WhatsApp pipeline in
                10 to 14 business days.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="px-6 py-3.5 bg-[#B88746] text-[#131210] rounded-xl text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#C99857] transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
                >
                  <PhoneCall className="size-3.5" />
                  <span>Book Production Diagnostic</span>
                </button>

                <Link
                  href="/blog/best-ai-voice-agent-in-new-delhi"
                  className="px-6 py-3.5 bg-neutral-900 border border-neutral-700 text-neutral-200 rounded-xl text-xs font-mono uppercase tracking-wider hover:border-[#B88746] transition-colors"
                >
                  Read New Delhi Agency Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
