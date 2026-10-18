"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  ShieldCheck,
  CheckCircle2,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Layers,
  Award,
  Lock,
} from "lucide-react";

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const studioMandates = [
    {
      num: "01",
      title: "The 5x Hurdle Rate Mandate",
      tag: "FINANCIAL ALIGNMENT",
      desc: "If our initial discovery diagnostic does not demonstrate at least 5x the deployment cost in recovered lead leakage or reduced operating overhead, Ayush Meena will personally decline the engagement. We do not accept client capital for vanity projects.",
    },
    {
      num: "02",
      title: "No Junior Account Hand-Offs",
      tag: "SENIOR PRINCIPAL LEVEL",
      desc: "You will never be handed off to an inexperienced junior coordinator or offshore freelancer. Every telephony routing topology, prompt state machine, and WebGL shader is directly architected and tested by Ayush Meena.",
    },
    {
      num: "03",
      title: "Zero Slideware. Only Production Code.",
      tag: "HARDENED INFRASTRUCTURE",
      desc: "We do not charge tens of thousands of dollars for 90-page strategy decks that sit idle in Google Drive. We deploy live SIP telephone numbers, sub-500ms voice agents, and verified n8n automation pipelines that capture revenue from day one.",
    },
    {
      num: "04",
      title: "Sovereign Engineering & Data Ownership",
      tag: "ZERO PLATFORM LOCK-IN",
      desc: "You retain full sovereign ownership over your telephony carrier accounts, prompt topologies, CRM webhooks, and 3D web codebases. No artificial vendor lock-in; everything is built on open, industrial-grade protocols.",
    },
  ];

  const credentials = [
    { label: "Practice Headquarters", val: "Delhi NCR, India", sub: "Global remote deployments" },
    { label: "Conversational Latency", val: "<500ms", sub: "Human acoustic parity" },
    { label: "Outbound Dial SLA", val: "<45s", sub: "Speed-to-lead standard" },
    { label: "Client Return Benchmark", val: "5x Minimum", sub: "Mandatory hurdle rate" },
  ];

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 bg-architectural-grid border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
              FOUNDER DOSSIER & STUDIO CHARTER
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl leading-[0.96] text-[#181614] mb-8">
              Ayush Meena — Principal &{" "}
              <span className="italic text-[#B88746]">Systems Architect.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#55514B] leading-relaxed mb-10 font-normal">
              DestiX AI was founded as an uncompromising private practice. We engineer the complete conversion circuit: human-sounding autonomous voice agents paired with category-defining 3D digital storefronts for high-ticket operations.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#B88746] hover:bg-[#A37336] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm"
              >
                <span>Book 30-Min Diagnostic Call</span>
                <ArrowUpRight className="w-4 h-4 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="mailto:ayushmeenadestixai@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#E2DDD1] bg-[#FFFFFF] hover:bg-[#EDE8DC] text-[#181614] font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#B88746]" />
                <span>ayushmeenadestixai@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Dossier Grid */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-[#E2DDD1] bg-[#181614] shadow-[0_20px_50px_-20px_rgba(24,22,20,0.15)] group">
              <Image
                src="/images/ayush-meena.jpg"
                alt="Ayush Meena, Principal & Systems Architect at DestiX AI"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131210] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 text-[#F6F4EE]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B88746] animate-beacon" />
                  <span className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] uppercase text-[#C5A059] font-bold">
                    FOUNDER & PRINCIPAL
                  </span>
                </div>
                <div className="font-['Instrument_Serif'] text-3xl font-bold">Ayush Meena</div>
                <div className="text-xs font-['Plus_Jakarta_Sans'] text-stone-300 mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>Delhi NCR, India • Deploying Globally</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-[#EDE8DC] border border-[#E2DDD1] text-center max-w-md mx-auto">
              <span className="text-xs font-['JetBrains_Mono'] text-[#55514B]">
                Direct Desk:{" "}
                <a
                  href="mailto:ayushmeenadestixai@gmail.com"
                  className="font-bold text-[#181614] hover:text-[#B88746] underline decoration-[#B88746]"
                >
                  ayushmeenadestixai@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* Letter & Memorandum */}
          <div className="space-y-6 text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed text-base">
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.22em] text-[#B88746] font-semibold">
              // PRINCIPAL'S MEMORANDUM
            </div>

            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] leading-[1.08]">
              "We don't build software experiments. We engineer cashflow pipelines."
            </h2>

            <p className="text-base sm:text-lg text-[#181614] font-medium leading-relaxed">
              When an ultra-high-net-worth client dials your office or inspects a multi-million-dollar development, every second of phone delay and every cookie-cutter web template destroys your authority.
            </p>

            <p>
              DestiX AI was founded as an uncompromising private practice. We deploy the complete acquisition circuit: human-sounding autonomous voice agents answering under two seconds, paired with category-defining 3D WebGL storefronts that turn cold traffic into committed revenue.
            </p>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] shadow-sm my-4">
              <p className="font-['Instrument_Serif'] italic text-2xl text-[#181614] mb-2 leading-snug">
                "We remain hands-on, bootstrapped, and client-aligned. When you partner with DestiX AI, you get my direct phone number and absolute personal accountability."
              </p>
              <div className="text-xs font-['JetBrains_Mono'] tracking-wider text-[#B88746] font-bold uppercase">
                — Ayush Meena, Principal &amp; Systems Architect
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2DDD1]">
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-1">
                  01 // TELEPHONY
                </div>
                <div className="text-xs font-semibold text-[#181614]">
                  Sub-45s outbound speed-to-lead
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2DDD1]">
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-1">
                  02 // SPATIAL WEB
                </div>
                <div className="text-xs font-semibold text-[#181614]">
                  60 FPS Three.js architectural twins
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2DDD1]">
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-1">
                  03 // PIPELINE
                </div>
                <div className="text-xs font-semibold text-[#181614]">
                  Instant WhatsApp &amp; CRM sync
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-semibold transition-all shadow-sm"
              >
                <span>Schedule Strategic Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credential Metrics Strip */}
      <section className="py-12 bg-[#EDE8DC] border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {credentials.map((cred, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-1">
                  {cred.val}
                </div>
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#181614] font-semibold">
                  {cred.label}
                </div>
                <div className="text-xs font-['Plus_Jakarta_Sans'] text-[#55514B] mt-0.5">
                  {cred.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Studio Mandates */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.22em] text-[#B88746] font-semibold mb-2">
            OPERATING CHARTER
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mb-4">
            The four mandates of DestiX engineering.
          </h2>
          <p className="text-base text-[#55514B] font-['Plus_Jakarta_Sans']">
            Our practice is governed by strict operational principles designed to protect your balance sheet and brand reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {studioMandates.map((m) => (
            <div
              key={m.num}
              className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2DDD1] shadow-[0_10px_35px_-10px_rgba(24,22,20,0.06)] hover:border-[#B88746]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#EDE8DC] text-[#181614] flex items-center justify-center text-xs font-['JetBrains_Mono'] font-bold">
                  {m.num}
                </span>
                <span className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746] font-semibold px-3 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1]">
                  {m.tag}
                </span>
              </div>
              <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                {m.title}
              </h3>
              <p className="text-sm font-['Plus_Jakarta_Sans'] text-[#55514B] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Scoping Diagnostic CTA Strip */}
      <section className="py-20 bg-[#131210] text-[#F6F4EE] border-t border-[#2A2825]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.22em] text-[#B88746] font-semibold mb-3">
            PRIVATE ENGAGEMENT
          </div>

          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#F6F4EE] mb-6">
            Work directly with the principal.
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto leading-relaxed mb-8">
            Every engagement begins with an unhurried, rigorous 30-minute diagnostic session with Ayush Meena. We review your current telephony latency, ad lead drop-off rate, and conversion architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#A37336] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm"
            >
              <span>Book Diagnostic Session with Ayush</span>
              <ArrowUpRight className="w-4 h-4 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stone-700 bg-stone-900/60 hover:bg-stone-800 text-[#F6F4EE] font-semibold text-sm transition-all"
            >
              <span>Direct Desk & Address</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
