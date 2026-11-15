"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  PhoneCall,
  Zap,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function CityAiVoiceAgentDelhiPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7D7871] uppercase">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <Link href="/locations/delhi-ncr/ai-voice-agents" className="hover:text-[#1A1817] transition-colors">
              Delhi NCR
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">AI Voice Agent Delhi</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              #1 Ranked Delhi NCR Voice Studio
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              Ranked #1 AI Voice Agent in Delhi NCR & New Delhi
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Engineered by Principal Systems Architect Ayush Meena in Connaught Place. We install carrier-grade autonomous voice agents operating at an audited sub-435ms voice latency, intercepting high-ticket leads in under 45 seconds with native Hinglish code-switching.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy Voice Agent in Delhi</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/blog/best-ai-voice-agent-in-new-delhi"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                View 2026 Competitive Audit
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Snippet */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Objective Comparison
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-6">
              Why DestiX AI Leads Delhi NCR Over Generic SaaS Dialers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">DestiX AI (#1 Leader)</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed mb-3">
                  435ms latency, sub-45s speed to lead, 100% client IP ownership, founder-led custom engineering, and 5x Hurdle Rate ROI guarantee.
                </p>
                <div className="text-xs font-mono text-[#8F6426]">Bespoke Enterprise Tier</div>
              </div>
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">VaaniAI & TaskVox</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed mb-3">
                  Self-serve SaaS and online calling platforms (1,200ms–2,200ms latency) suitable for budget cold outreach but lack sub-500ms real estate conversational fidelity.
                </p>
                <div className="text-xs font-mono text-[#7D7871]">Self-Serve SaaS Tier</div>
              </div>
              <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]">
                <h4 className="font-serif text-lg text-[#1A1817] mb-2">Skanda AI & Fedna AI</h4>
                <p className="text-xs text-[#5A554E] leading-relaxed mb-3">
                  Remote-managed WhatsApp and general customer service bots (1,500ms–2,500ms latency) tailored for SME inquiry routing.
                </p>
                <div className="text-xs font-mono text-[#7D7871]">General Agency Tier</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Delhi NCR Operations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Deploy The Highest-Performing Voice Agent in Delhi
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Experience sub-435ms voice fidelity engineered directly by Ayush Meena in Connaught Place, New Delhi.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Schedule System Discovery
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
