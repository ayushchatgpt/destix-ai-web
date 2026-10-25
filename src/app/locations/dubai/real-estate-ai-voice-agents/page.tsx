"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import VoiceDemoConsole from "@/components/VoiceDemoConsole";
import {
  Building2,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Users,
  Compass,
} from "lucide-react";

export default function DubaiRealEstateVoicePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const pillars = [
    {
      title: "Sub-45s Inbound Speed-to-Lead",
      desc: "In Dubai's ultra-competitive prime market, buyer attention is measured in seconds. Our autonomous voice agents answer portal and social ad inquiries in under 45 seconds.",
      metric: "< 45s",
      tag: "SPEED TO DEAL",
    },
    {
      title: "Luxury Buyer Budget Qualification",
      desc: "Screens off-plan investors and secondary buyers for AED 5M+ liquid purchasing capability, passport nationality, and investment horizon before private broker dispatch.",
      metric: "100%",
      tag: "INVESTOR TRIAGE",
    },
    {
      title: "Interactive 3D Spatial Walkthroughs",
      desc: "Pairs your voice telephony with bespoke Next.js and Three.js digital storefronts, letting international HNW buyers explore penthouses remotely with zero lag.",
      metric: "60 FPS",
      tag: "3D WEBGL ENGINE",
    },
    {
      title: "Automated WhatsApp Dossier Delivery",
      desc: "Instantly sends architectural brochures, floorplans, and booking confirmations to the buyer's WhatsApp while simultaneously syncing with your CRM.",
      metric: "Instant",
      tag: "WHATSAPP SYNC",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <MapPin className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">DUBAI • ABU DHABI • DIFC • PALM JUMEIRAH</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Real Estate AI Voice Agents in{" "}
            <span className="italic text-[#B88746]">Dubai.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Engineered by Ayush Meena. DestiX AI builds autonomous voice infrastructure and 3D WebGL platforms that capture international capital for prime UAE brokerages and developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule Dubai Architectural Consultation</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("voice-console");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center cursor-pointer"
            >
              Audition Live Voice Agent
            </button>
          </div>
        </div>
      </section>

      {/* Case Proof Banner */}
      <section className="py-12 bg-[#181614] text-[#F6F4EE] border-y border-[#33302B]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[11px] font-mono text-[#B88746] uppercase tracking-widest mb-1">
              Production Proof • Alliance Capital Properties
            </div>
            <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-white">
              Verified with Alliance Capital Properties (ACP Dubai)
            </h3>
            <p className="text-xs sm:text-sm text-[#BDBAA8] mt-1 max-w-xl">
              Delivered sub-45-second inbound voice response and high-conversion 3D digital architectural platform for ultra-luxury Palm Jumeirah and Downtown listings.
            </p>
          </div>
          <Link
            href="/services/3d-web"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider transition-colors border border-white/20 whitespace-nowrap"
          >
            Inspect 3D Architecture &rarr;
          </Link>
        </div>
      </section>

      {/* Real Live Voice Telemetry Console */}
      <VoiceDemoConsole />

      {/* Pillars Grid */}
      <section className="py-20 bg-white border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Bespoke Telephony &amp; Spatial Web
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              The Sovereign System for Dubai Brokerages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#181614]">
                    {p.metric}
                  </span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
