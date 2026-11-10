"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Award,
  ArrowUpRight,
  ChevronRight,
  Globe,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Building2,
  Cpu,
  Layers,
  Database,
  Calendar,
} from "lucide-react";

export default function CaseStudiesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const caseStudies = [
    {
      id: "acp-dubai",
      num: "01",
      client: "Alliance Capital Properties (ACP Dubai)",
      category: "Luxury Real Estate & Private Capital",
      location: "Dubai, UAE — Prime Investment Corridors",
      headline: "Autonomous Telephony & Multilingual Wealth Acquisition Engine",
      summary:
        "Engineered an end-to-end capital advisory acquisition portal and autonomous voice qualification bridge for Alliance Capital Properties in Dubai. High-net-worth property inquiries arriving from Europe, India, and the GCC receive an immediate multilingual voice qualification callback within 40 seconds, extracting exact budget bands, investment timelines, and portfolio targets before scheduling a live Zoom advisory slot with senior partners.",
      metrics: [
        { label: "Qualified Deal Pipeline", value: "AED 85M+" },
        { label: "Consultation Show-Rate", value: "3.2x" },
        { label: "Lead Response Time", value: "< 40s" },
      ],
      stack: ["Next.js App Router", "Sub-450ms Voice AI", "HubSpot Enterprise", "WhatsApp Business API", "Tailwind CSS"],
      liveUrl: "https://acpdubai.com/",
      domain: "acpdubai.com",
      type: "Real Estate",
    },
    {
      id: "pranav-jha",
      num: "02",
      client: "Pranav Jha Studio",
      category: "Architectural & Interior Design Practice",
      location: "New Delhi & Gurugram, India",
      headline: "Swiss Editorial Authority Platform & Inbound Lead Qualification",
      summary:
        "Architected a category-defining digital presence and portfolio showcase for high-ticket residential and commercial architectural projects across Delhi NCR. Eliminated price shopping and elevated inbound consultation contract sizes through Swiss editorial typography, flawless 60 FPS page interactions, and an interactive lead triage system.",
      metrics: [
        { label: "Lighthouse Performance", value: "99/100" },
        { label: "Inbound Contract Size", value: "+240%" },
        { label: "Cumulative Layout Shift", value: "0.00" },
      ],
      stack: ["React 19", "Framer Motion", "Tailwind CSS", "Automated Lead Routing"],
      liveUrl: "https://pranav-jha-portfolio.vercel.app",
      domain: "pranav-jha-portfolio.vercel.app",
      type: "Web & Brand",
    },
    {
      id: "digiirox",
      num: "03",
      client: "DigiiRox Experience",
      category: "Spatial Tech & Interactive 3D",
      location: "Global Remote / Singapore & Delhi",
      headline: "Three.js WebGL Spatial Product Launch & Real-Time Shaders",
      summary:
        "Constructed a high-fidelity 3D WebGL product showcase allowing prospective buyers to inspect hardware, lighting shaders, and architectural assets in real-time space at 60 FPS without installing proprietary applications. Integrated directly with live demo scheduling and custom CRM pipeline triggers.",
      metrics: [
        { label: "Average Dwell Time", value: "4m 12s" },
        { label: "Shader Frame Rate", value: "60 FPS" },
        { label: "Conversion Lift", value: "+38%" },
      ],
      stack: ["Three.js", "WebGL Shaders", "Next.js", "TypeScript", "Vercel Edge"],
      liveUrl: "https://digiirox.vercel.app",
      domain: "digiirox.vercel.app",
      type: "Web & Brand",
    },
    {
      id: "birchstays",
      num: "04",
      client: "Birch Stays Luxury Network",
      category: "Hospitality & Vacation Villas",
      location: "Goa, Alibaug & Coorg, India",
      headline: "Autonomous Villa Inbound Booking & Instant WhatsApp Concierge",
      summary:
        "Deployed a 24/7 inbound voice agent and automated reservation pipeline for Birch Stays' portfolio of boutique luxury estates. Intercepts incoming guest inquiries regarding weekend availability, chef requirements, and pet policies, automatically sending dates, photo albums, and booking confirmations via WhatsApp.",
      metrics: [
        { label: "Direct Booking Share", value: "42%" },
        { label: "Night-Shift Response", value: "100%" },
        { label: "Reservation Speed", value: "Under 2 min" },
      ],
      stack: ["Deepgram Nova-2", "Cartesia Sonic", "Custom LLM Orchestration", "WhatsApp Cloud API"],
      liveUrl: "https://birchstays.com",
      domain: "birchstays.com",
      type: "Voice AI",
    },
    {
      id: "delhi-luxury-realty",
      num: "05",
      client: "Tier-1 Delhi NCR Property Brokerage",
      category: "Golf Course Road & Noida Expressways",
      location: "Gurugram & Noida, NCR",
      headline: "Hinglish Portal Lead Speed-to-Call (<45s) & Site Visit Booking",
      summary:
        "Integrated instant webhooks across 99acres and MagicBricks to trigger an autonomous, conversational Hinglish phone call within 45 seconds of lead submission. Disqualifies window shoppers, extracts budget thresholds (₹3 Cr to ₹15 Cr), and reserves chauffeur-driven site visit slots directly on sales directors' calendars.",
      metrics: [
        { label: "Lead Contact Rate", value: "78%" },
        { label: "Site Visits Scheduled", value: "310+ / Mo" },
        { label: "CAC Reduction", value: "-54%" },
      ],
      stack: ["Exotel PRI Trunks", "Sub-450ms Streaming AI", "Salesforce Sync", "DLT DND Compliance"],
      liveUrl: "/solutions/real-estate-ai-calling-gurgaon-noida",
      domain: "Private Client Deployment",
      type: "Voice AI",
    },
    {
      id: "telehealth-clinic",
      num: "06",
      client: "Specialized Healthcare & Dental Network",
      category: "Healthcare & Patient Triage",
      location: "South Delhi & Mumbai",
      headline: "24/7 Emergency Triage, Doctor Appointment Scheduling & Intake",
      summary:
        "Built a zero-hallucination medical triage voice receptionist that answers patient phone calls, gathers primary symptoms and urgency indicators, verifies insurance eligibility, and books consultation slots directly into the clinic's EHR management system.",
      metrics: [
        { label: "Zero Abandoned Calls", value: "100% Pick-Up" },
        { label: "Patient Show-Rate", value: "91%" },
        { label: "Front Desk Overhead", value: "-65%" },
      ],
      stack: ["HIPAA-Compliant Audio", "Doctor Cal Sync", "SMS Confirmations", "Custom Guardrails"],
      liveUrl: "/locations/delhi-ncr/ai-voice-agents-for-clinics",
      domain: "Healthcare Partner Deployment",
      type: "Voice AI",
    },
  ];

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.type === activeFilter);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614] font-sans antialiased">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">Client Proof &amp; Verified Audits</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD1] text-[10px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-4 shadow-2xs">
            <Award className="w-3 h-3 text-[#B88746]" />
            <span>VERIFIED OPERATIONAL AUDITS // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] tracking-tight leading-[1.08] mb-6">
            Real enterprise deployments. <br />
            <span className="italic text-[#B88746]">Unscripted commercial outcomes.</span>
          </h1>
          <p className="text-[#55514B] font-['Plus_Jakarta_Sans'] text-base sm:text-lg max-w-3xl leading-relaxed">
            We do not publish hypothetical case studies, generated mockups, or anonymized vanity metrics. Every deployment below was architected, written, and deployed into live business operations by Ayush Meena and DestiX AI.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8 pt-4 border-t border-[#E2DDD1]">
            {["All", "Voice AI", "Real Estate", "Web & Brand"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-['JetBrains_Mono'] transition-all ${
                  activeFilter === f
                    ? "bg-[#181614] text-[#F6F4EE] font-semibold shadow-xs"
                    : "bg-white border border-[#E2DDD1] text-[#55514B] hover:text-[#181614] hover:border-[#181614]"
                }`}
              >
                {f} ({f === "All" ? caseStudies.length : caseStudies.filter((cs) => cs.type === f).length})
              </button>
            ))}
          </div>
        </header>

        {/* Case Studies Grid */}
        <section className="space-y-8 sm:space-y-10 mb-20">
          {filtered.map((cs) => (
            <article
              key={cs.id}
              className="rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-10 shadow-xs hover:border-[#B88746]/50 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#E2DDD1]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#B88746]">
                      DEPLOYMENT {cs.num}
                    </span>
                    <span className="text-[#888277] text-xs">/</span>
                    <span className="text-xs font-mono text-[#888277] uppercase tracking-wider">
                      {cs.category}
                    </span>
                  </div>
                  <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl md:text-4xl text-[#181614] group-hover:text-[#B88746] transition-colors">
                    {cs.client}
                  </h2>
                  <p className="text-xs font-mono text-[#888277] mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {cs.location}
                  </p>
                </div>

                {cs.liveUrl.startsWith("http") ? (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F6F4EE] hover:bg-[#181614] text-[#181614] hover:text-[#F6F4EE] text-xs font-mono font-semibold transition-all shrink-0 self-start border border-[#E2DDD1]"
                  >
                    <span>Visit Live Infrastructure</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={cs.liveUrl}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F6F4EE] hover:bg-[#181614] text-[#181614] hover:text-[#F6F4EE] text-xs font-mono font-semibold transition-all shrink-0 self-start border border-[#E2DDD1]"
                  >
                    <span>Explore Architecture Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              <div className="mt-6">
                <h3 className="font-['Instrument_Serif'] text-xl text-[#181614] mb-3">
                  {cs.headline}
                </h3>
                <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-8 max-w-4xl">
                  {cs.summary}
                </p>

                {/* Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {cs.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#F6F4EE]/60 border border-[#E2DDD1] flex flex-col justify-between"
                    >
                      <span className="text-[11px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider mb-2 font-semibold">
                        {m.label}
                      </span>
                      <span className="font-['Instrument_Serif'] text-3xl sm:text-4xl font-bold text-[#181614]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E2DDD1]/60">
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider mr-2 font-bold">
                    PRODUCTION STACK:
                  </span>
                  {cs.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#EDE8DC] text-[11px] font-['JetBrains_Mono'] text-[#55514B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Verification Methodology Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#EDE8DC] border border-[#E2DDD1] mb-20 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] uppercase tracking-wider block mb-2 font-bold">
              // METHODOLOGY &amp; TRANSPARENCY
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-4">
              How We Verify Operational Performance
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
              Every client deployment includes an open observability dashboard. We measure time-to-first-token (TTFT), turn-taking latency, carrier connection completion, CRM update latency, and lead-to-calendar show rates in real time. We do not charge retainers on systems that fail to prove measurable financial lift.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#181614]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0" />
                <span>Deterministic CRM synchronization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0" />
                <span>Zero vendor lock-in; 100% client code ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0" />
                <span>Sub-500ms voice turn-taking on Indian cellular</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0" />
                <span>Guaranteed 5x Hurdle Rate economic commitment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#B88746] text-center shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-4">
            CONFIDENTIAL ARCHITECTURAL AUDIT
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto mb-8 leading-relaxed">
            Book a 30-minute diagnostic session directly with founder Ayush Meena. We will review your current telephony, website, and CRM infrastructure and architect a custom sprint roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all duration-300 shadow-sm"
            >
              Book 30-Min Diagnostic Call
            </button>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300"
            >
              Review Pricing &amp; Economics
            </Link>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="Case Study Audit Review"
      />
    </div>
  );
}
