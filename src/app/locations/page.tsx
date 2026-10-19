"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  MapPin,
  ArrowUpRight,
  PhoneCall,
  Building2,
  Stethoscope,
  Globe,
  Radio,
  CheckCircle2,
} from "lucide-react";

export default function LocationsHubPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const locations = [
    {
      city: "Delhi NCR",
      region: "India (Gurugram, Noida, Delhi)",
      title: "Enterprise AI Voice Agents & Inbound Telephony",
      desc: "Autonomous voice systems replacing offshore call queues with sub-45-second inbound speed-to-lead for enterprise service companies and brokers.",
      href: "/locations/delhi-ncr/ai-voice-agents",
      icon: PhoneCall,
      stats: "Sub-45s Speed to Lead",
    },
    {
      city: "Dubai & Abu Dhabi",
      region: "United Arab Emirates",
      title: "Luxury Real Estate AI Voice Agents & 3D WebGL Portals",
      desc: "Tailored for prime brokerage firms, off-plan developers, and private family offices. Multilingual qualification with sub-500ms voice parity.",
      href: "/locations/dubai/real-estate-ai-voice-agents",
      icon: Building2,
      stats: "Verified with ACP Dubai",
    },
    {
      city: "Mumbai",
      region: "Maharashtra, India",
      title: "AI Voice Receptionist & Clinic Phone Automation",
      desc: "24/7 confidential patient triage, aesthetic treatment qualification, and direct calendar booking for top surgical and dental clinics.",
      href: "/locations/mumbai/ai-voice-receptionist",
      icon: Stethoscope,
      stats: "Zero Missed Calls",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Globe className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">GLOBAL DEPLOYMENT TERRITORIES</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Regional Telephony Infrastructure.{" "}
            <span className="italic text-[#B88746]">Engineered Locally.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            DestiX AI architects autonomous voice telephony, carrier bridges, and bespoke 3D platforms tuned specifically to regional compliance, cultural dialects, and local buyer behaviors.
          </p>
        </div>

        {/* Territory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {locations.map((loc) => (
            <Link
              key={loc.city}
              href={loc.href}
              className="group p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-sm hover:shadow-md hover:border-[#B88746]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] group-hover:scale-105 transition-transform">
                    <loc.icon className="size-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full">
                    {loc.stats}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#55514B] mb-1 font-mono">
                  <MapPin className="size-3 text-[#B88746]" />
                  <span>{loc.region}</span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3 group-hover:text-[#B88746] transition-colors">
                  {loc.city}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                  {loc.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center justify-between text-xs font-semibold text-[#181614] group-hover:text-[#B88746] transition-colors">
                <span>View Regional Blueprint</span>
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Global Coverage Banner */}
      <section className="py-16 bg-[#181614] text-[#F6F4EE] border-y border-[#33302B]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B88746] uppercase tracking-wider mb-2">
              <Radio className="size-3.5 animate-pulse text-[#00F5A0]" />
              <span>International SIP &amp; WebRTC Telephony</span>
            </div>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-white">
              Deploying Globally Across 14 Countries
            </h2>
            <p className="text-sm text-[#BDBAA8] mt-2 max-w-xl">
              We provision low-latency local numbers and multi-carrier redundancy across the US, UK, UAE, India, Singapore, and Europe.
            </p>
          </div>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg whitespace-nowrap"
          >
            Deploy in Your Territory
          </button>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
