"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Globe,
  Cpu,
  Layers,
} from "lucide-react";

export default function AiAgencyPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const agencyServices = [
    {
      num: "01",
      title: "Autonomous Voice Agent Architecture",
      desc: "Inbound zero-hold receptionists and outbound sub-45s qualification agents that capture, vet, and book high-ticket prospects directly to your senior sales team.",
      href: "/voice-agents",
    },
    {
      num: "02",
      title: "3D Spatial WebGL Digital Platforms",
      desc: "Custom Next.js & Three.js digital architectures built to command instant prestige, establish unquestioned authority, and eliminate proposal price resistance.",
      href: "/websites",
    },
    {
      num: "03",
      title: "Unified AI Operating Systems (n8n & CRM)",
      desc: "Webhook-connected operational nervous systems synchronizing WhatsApp Business API, voice telephony recordings, and enterprise CRMs (HubSpot, Salesforce, GoHighLevel).",
      href: "/operating-system",
    },
    {
      num: "04",
      title: "Luxury Real Estate & Advisory Playbooks",
      desc: "Proven revenue architectures deployed for prime real estate advisories like Alliance Capital Properties (acpdubai.com) driving verified eight-figure pipeline growth.",
      href: "/use-cases",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-20 border-b border-[#E2DDD1] bg-architectural-grid relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
              DESTIX AI (MEENA AI) // PRIVATE PRACTICE
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
              The AI agency that builds{" "}
              <span className="italic text-[#B88746]">revenue engines</span>, not chatbots.
            </h1>

            <p className="text-lg sm:text-xl text-[#55514B] leading-relaxed mb-10 font-normal">
              DestiX AI (founded by Ayush Meena) is a boutique systems practice engineering autonomous conversational infrastructure and bespoke 3D digital storefronts for high-ticket market leaders worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                data-cursor-text="BOOK"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm group"
              >
                <span>Commission Studio Engagement</span>
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#EDE8DC] border border-[#E2DDD1] text-[#181614] text-sm font-semibold transition-all duration-300"
              >
                <span>Read Founder Dossier</span>
                <ArrowUpRight className="w-4 h-4 text-[#888277]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#888277] mb-2 font-semibold">
              CORE CAPABILITIES
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
              What we build for category leaders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agencyServices.map((srv, idx) => (
              <Link
                key={idx}
                href={srv.href}
                className="group rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-10 flex flex-col justify-between hover:border-[#B88746]/60 transition-all duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2DDD1]">
                    <span className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#B88746] font-semibold uppercase">
                      PRACTICE {srv.num}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#888277] group-hover:text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3 group-hover:text-[#B88746] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#55514B] leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} initialService="AI Agency Consultation" />
    </div>
  );
}
