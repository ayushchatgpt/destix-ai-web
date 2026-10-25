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
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  MessageSquare,
  Award,
} from "lucide-react";

export default function AiAgencyDelhiPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const pillars = [
    {
      step: "01",
      title: "Autonomous Conversational Voice Agents",
      desc: "Zero-hold 24/7 inbound call answering and sub-45s outbound lead qualification operating with measured 435ms latency over domestic Indian SIP trunks (+91 virtual DIDs).",
      href: "/voice-agents",
      icon: PhoneCall,
    },
    {
      step: "02",
      title: "Sub-45s Inbound Speed-to-Lead",
      desc: "When a buyer submits a Meta or Google Ad inquiry, our voice agent dials their phone in under 45 seconds, qualifies budget in fluent Hinglish, and books site visits.",
      href: "/blog/best-ai-voice-agent-in-new-delhi",
      icon: Clock,
    },
    {
      step: "03",
      title: "Official Meta WhatsApp Automation",
      desc: "Within 5 seconds of an AI call ending, a customized WhatsApp message delivers the exact PDF brochure, appointment confirmation, and clinic or project location pin.",
      href: "/services/whatsapp-automation",
      icon: MessageSquare,
    },
    {
      step: "04",
      title: "Spatial 3D WebGL Architecture",
      desc: "Category-defining 3D Three.js storefronts that captivate luxury real estate buyers and high-ticket service clients, verified in production for ACP Dubai.",
      href: "/websites",
      icon: Globe,
    },
  ];

  const localDistricts = [
    {
      area: "Connaught Place & Central Delhi",
      focus: "Headquarters & corporate AI voice infrastructure for financial and enterprise firms.",
    },
    {
      area: "South Delhi (GK, Defence Colony, Vasant Vihar)",
      focus: "Aesthetic clinics, dental chains, and high-ticket specialized medical consultations.",
    },
    {
      area: "Gurugram (Cyber City & Golf Course Road)",
      focus: "Luxury real estate developers (₹4 Cr – ₹25 Cr+), commercial leasing, and tech startups.",
    },
    {
      area: "Noida (Sector 62 & Expressway)",
      focus: "IT enterprise support desks, coaching institutions, and residential project speed-to-lead.",
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
            <span className="text-[#B88746]">AI Agency in Delhi</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746] mb-6">
            <MapPin className="size-3.5" />
            Headquarters: New Delhi 110001 • Founder-Led Engineering
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight leading-[1.08] text-[#131210] max-w-5xl mb-6">
            AI Agency in Delhi:{" "}
            <span className="italic font-normal text-[#7A756D]">
              Autonomous Telephony &amp; Spatial 3D Web Studio
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#5A554E] max-w-3xl leading-relaxed mb-8">
            DestiX AI is an enterprise autonomous systems studio headquartered in Central
            Delhi. We engineer production conversational AI voice receptionists,
            sub-45-second speed-to-lead pipelines, and bespoke 3D WebGL storefronts for
            market leaders across Delhi NCR, Mumbai, and Dubai.
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
              Explore Transparent Pricing
            </Link>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="mb-10">
            <span className="text-xs font-mono font-semibold text-[#B88746] uppercase tracking-wider">
              Production Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#131210] mt-2 mb-3">
              What We Build for Delhi NCR Enterprises
            </h2>
            <p className="text-sm text-[#5A554E] max-w-2xl">
              We do not sell generic chatbot templates or offshore wrappers. We build custom
              telephony and spatial architecture engineered for high-ticket revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  className="p-8 bg-white border border-[#E5E0D5] rounded-2xl shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-mono font-bold text-[#B88746]">
                        {p.step}
                      </span>
                      <div className="p-2.5 bg-[#F9F7F2] rounded-xl border border-[#E5E0D5]">
                        <Icon className="size-4 text-[#B88746]" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-medium text-[#131210] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#5A554E] leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#B88746] hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Architecture</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Delhi NCR Regional Corridors */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 bg-white border border-[#E5E0D5] rounded-3xl shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-mono font-semibold text-[#B88746] uppercase tracking-wider">
                Local Presence
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#131210] mt-2 mb-3">
                Serving Key Enterprise Corridors Across Delhi NCR
              </h2>
              <p className="text-xs sm:text-sm text-[#5A554E] max-w-2xl leading-relaxed">
                Unlike remote agencies that claim to serve Delhi while operating from Pune
                or Bengaluru, DestiX AI maintains active telephony routes and local
                interconnects across the National Capital Region:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {localDistricts.map((d) => (
                <div
                  key={d.area}
                  className="p-5 bg-[#F9F7F2] border border-[#E5E0D5] rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-2 font-display text-base font-semibold text-[#131210]">
                    <MapPin className="size-4 text-[#B88746]" />
                    <span>{d.area}</span>
                  </div>
                  <p className="text-xs text-[#5A554E] leading-relaxed">{d.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder & Telephony CTA */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="p-8 sm:p-14 bg-[#131210] text-[#F6F4EE] rounded-3xl border border-[#B88746]/40 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B88746]">
                Founder-Led Architecture • Central Delhi
              </span>

              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
                Work Directly with Principal Architect Ayush Meena
              </h2>

              <p className="mt-4 text-base text-neutral-300 leading-relaxed">
                We work with a select cohort of 4 enterprise clients per month to maintain
                rigorous engineering quality. Book a 30-minute diagnostic session to audit
                your lead pipeline and test a live telephony audition call.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="px-6 py-3.5 bg-[#B88746] text-[#131210] rounded-xl text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#C99857] transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
                >
                  <PhoneCall className="size-3.5" />
                  <span>Request Live Telephony Diagnostic</span>
                </button>

                <Link
                  href="/blog/best-ai-voice-agent-in-new-delhi"
                  className="px-6 py-3.5 bg-neutral-900 border border-neutral-700 text-neutral-200 rounded-xl text-xs font-mono uppercase tracking-wider hover:border-[#B88746] transition-colors"
                >
                  Read 2026 Delhi Comparison Audit
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
