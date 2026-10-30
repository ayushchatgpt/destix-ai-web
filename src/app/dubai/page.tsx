"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
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
  Sparkles,
  Award,
  Globe,
  Plus,
  Minus,
} from "lucide-react";

export default function DubaiStudioPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const dubaiCapabilities = [
    {
      title: "AI Voice Agent for Dubai Real Estate",
      desc: "In Dubai's ultra-competitive prime market, luxury buyers submit inquiries at 11 PM from London, Moscow, or Mumbai. DestiX dials them within 45 seconds while buyer intent is at its peak.",
      metric: "< 45s",
      tag: "SPEED TO DEAL",
    },
    {
      title: "Autonomous Telephony for UAE Family Offices",
      desc: "Confidential inbound switchboard screening institutional capital, sovereign allocations, and high-net-worth inquiries before routing directly to managing partners in DIFC.",
      metric: "100%",
      tag: "HNW TRIAGE",
    },
    {
      title: "Arabic & English AI Voice Agent Dubai",
      desc: "Bilingual voice models supporting fluid mid-sentence code-switching between formal British English and Gulf Arabic cadences, perfectly suited for UAE domestic and international callers.",
      metric: "Sub-435ms",
      tag: "BILINGUAL TELEPHONY",
    },
    {
      title: "Lead Qualification for Palm Jebel Ali & Dubai Hills",
      desc: "Extracts configuration (villas vs penthouses), purchase budget (AED 5M to AED 50M+), and mortgage vs cash readiness before scheduling a private site walkthrough.",
      metric: "AED 5M+",
      tag: "PRIME ASSETS",
    },
    {
      title: "Bespoke 3D Web Design Agency Dubai",
      desc: "We pair your voice telephony with award-grade Three.js and WebGL digital storefronts, letting international HNW investors explore penthouses and master plans remotely at 60 FPS.",
      metric: "60 FPS",
      tag: "3D WEBGL ENGINE",
    },
    {
      title: "UAE TDRA Compliant Carrier Infrastructure",
      desc: "Provisioned on licensed UAE telecom SIP trunks (+971 Virtual DIDs) with full TRA/TDRA compliance, sub-50ms regional packet transmission, and instant WhatsApp dossier delivery.",
      metric: "+971 DIDs",
      tag: "REGULATORY COMPLIANT",
    },
  ];

  const faqs = [
    {
      q: "Why is DestiX AI the leading AI voice agent provider for Dubai real estate?",
      a: "DestiX AI delivers sub-435ms voice latency, sub-45-second speed-to-lead outbound dialing from Meta and Google ads, bilingual English and Gulf Arabic code-switching, and direct integration with UAE telecom SIP trunks (+971 DIDs). DestiX AI is verified in production for Alliance Capital Properties (ACP Dubai).",
    },
    {
      q: "Can DestiX AI voice agents qualify off-plan and luxury property buyers in Dubai?",
      a: "Yes. DestiX AI models screen prospective buyers for liquid capital (AED 5M+ to AED 50M+), nationality, residency status, and investment horizon across master projects like Palm Jebel Ali, Dubai Hills Estate, and Palm Jumeirah, dispatching instant WhatsApp dossiers and syncing with your CRM.",
    },
    {
      q: "Are DestiX AI telephony solutions compliant with UAE TDRA regulations?",
      a: "Yes. Telephony infrastructure is provisioned through licensed UAE telecom partners using official +971 virtual DIDs and registered caller IDs fully compliant with TDRA commercial communication requirements.",
    },
    {
      q: "Does DestiX AI build bespoke 3D WebGL websites for Dubai developers?",
      a: "Yes. DestiX AI engineers category-defining Next.js and Three.js 3D spatial platforms allowing international investors to explore luxury architectural developments remotely at 60 FPS, paired directly with autonomous voice qualification.",
    },
    {
      q: "What is the commercial setup cost for Dubai brokerages and developers?",
      a: "Turnkey Dubai implementations range between AED 15,000 and AED 85,000 depending on custom CRM workflows, 3D WebGL spatial assets, and multilingual telephony state machines, with wholesale per-minute voice usage passed through with zero platform markup.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <MapPin className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              DUBAI AI STUDIO &bull; DIFC &bull; PALM JEBEL ALI &bull; DUBAI HILLS
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Agents for{" "}
            <span className="italic text-[#B88746]">Dubai Real Estate.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            Engineered by Principal AI Systems Architect Ayush Meena. DestiX AI builds autonomous voice infrastructure and 3D WebGL platforms that capture high-velocity international capital for prime UAE developers, luxury brokerages, and DIFC family offices.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule Dubai Technical Briefing</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/#voice-console"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Audition Live Voice Parity
            </Link>
          </div>
        </div>

        {/* Featured Case Study: Alliance Capital Properties (ACP Dubai) */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[10px] font-mono text-[#B88746] uppercase tracking-wider font-semibold">
              <Award className="size-3.5 text-[#B88746]" />
              <span>Production Benchmark Case Study</span>
            </div>
            <span className="text-xs font-mono text-[#888277]">Dubai, UAE</span>
          </div>

          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-3">
            Alliance Capital Properties (ACP Dubai)
          </h2>
          <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-6">
            Verified autonomous lead qualification engine paired with a bespoke 3D WebGL property portal. Inbound inquiries for Palm Jebel Ali seafront residences are intercepted within 45 seconds, screened for AED 5M to AED 50M+ purchasing power, and delivered with instant WhatsApp digital brochures.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E2DDD1]/60 text-xs font-mono">
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">Speed to Lead</span>
              <span className="text-base font-bold text-[#181614]">&lt; 45 Seconds</span>
            </div>
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">Acoustic Latency</span>
              <span className="text-base font-bold text-[#B88746]">435ms Parity</span>
            </div>
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">Buyer Filter</span>
              <span className="text-base font-bold text-[#181614]">AED 5M – 50M+</span>
            </div>
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">Spatial Engine</span>
              <span className="text-base font-bold text-[#181614]">Three.js 60fps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Core Capabilities Grid */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Engineered for UAE Prime Markets
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Strategic AI Infrastructure for Dubai
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dubaiCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                      {item.tag}
                    </span>
                    <span className="font-mono text-sm font-semibold text-[#181614]">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2DDD1]/60 flex items-center gap-1.5 text-xs font-semibold text-[#181614]">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <span>Production Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized Dubai FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Frequently Asked Questions &bull; Dubai &amp; UAE
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            Everything you need to <span className="italic text-[#B88746]">know.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2DDD1] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-['Instrument_Serif'] text-2xl text-[#181614] group-hover:text-[#B88746] transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center shrink-0 text-[#181614]">
                    {isOpen ? <Minus className="w-4 h-4 text-[#B88746]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
