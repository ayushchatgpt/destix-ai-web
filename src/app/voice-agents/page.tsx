"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import { VoiceDemoConsole } from "@/components/VoiceDemoConsole";
import {
  PhoneCall,
  Zap,
  Mic,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  FileText,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function VoiceAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const capabilities = [
    {
      num: "01",
      title: "Sub-45s Lead Interception",
      tag: "SPEED TO LEAD",
      desc: "When a high-ticket prospect submits a form on your Meta ad or digital storefront, our outbound telephony engine triggers in under 45 seconds. Contacting buyers while intent is at its absolute peak lifts qualification rates by over 380% compared to traditional 4-hour sales callbacks.",
    },
    {
      num: "02",
      title: "Zero-Hold Inbound Answering",
      tag: "UNLIMITED CONCURRENCY",
      desc: "Every inbound inquiry is answered in under two rings. Our telephony carrier bridges handle unlimited concurrent callers simultaneously—eliminating busy signals, front-desk queues, and voicemail drop-offs day and night.",
    },
    {
      num: "03",
      title: "Sub-500ms Conversational Latency",
      tag: "ACOUSTIC PARITY",
      desc: "Trained with acoustic breath modeling, contextual pauses, and sub-200ms polite interruption handling. Our agents code-switch fluidly between English, Hindi, and regional dialects, sounding like your most senior account partner.",
    },
  ];

  const architectureSteps = [
    {
      step: "01",
      title: "Inbound or Ad Trigger",
      desc: "Incoming phone call or web form submitted on ad landing page",
      icon: PhoneCall,
    },
    {
      step: "02",
      title: "Autonomous Voice Agent",
      desc: "Sub-500ms conversational dialogue with emotional inflection",
      icon: Mic,
    },
    {
      step: "03",
      title: "Live Neural Transcription",
      desc: "Speech-to-text token stream analyzed for intent & budget",
      icon: FileText,
    },
    {
      step: "04",
      title: "Qualification Matrix",
      desc: "Deterministic criteria evaluated (budget, timeline, authority)",
      icon: ShieldCheck,
    },
    {
      step: "05",
      title: "Calendar + WhatsApp Sync",
      desc: "Executive appointment reserved + gate pass / lookbook sent",
      icon: Calendar,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-architectural-grid border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
              TELEPHONY INFRASTRUCTURE
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl leading-[0.96] text-[#181614] mb-8">
              Human-parity voice agents that answer, qualify, and book{" "}
              <span className="italic text-[#B88746]">24/7.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#55514B] leading-relaxed mb-10 font-normal">
              Most businesses lose 60% of their ad leads within five minutes of submission. DestiX AI installs autonomous voice infrastructure that answers inbound rings in under two seconds and dials web leads in 45 seconds flat.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm tracking-tight transition-all duration-300 shadow-sm"
              >
                <span>Book a 30-Min Diagnostic Call</span>
                <ArrowUpRight className="w-4 h-4 text-[#F6F4EE]" />
              </button>

              <a
                href="#demo-console"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#EDE8DC] border border-[#E2DDD1] text-xs font-['JetBrains_Mono'] text-[#181614] font-semibold transition-colors"
              >
                <span>Audition Voice Parity Below</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B88746]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Breakdown */}
      <section className="py-24 sm:py-32 bg-[#F6F4EE] border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] uppercase font-bold mb-3">
              CORE CAPABILITIES
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.0] mb-6">
              Engineered to sound like your{" "}
              <span className="italic text-[#B88746]">top sales executive.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#55514B] leading-relaxed">
              Robotic voice bots destroy high-ticket prestige. We tune every acoustic attribute for warmth, poise, and zero latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DDD1] hover:border-[#B88746]/50 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#B88746] px-2.5 py-1 rounded bg-[#EDE8DC] border border-[#E2DDD1]">
                      FEATURE {cap.num}
                    </span>
                    <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-4">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-[#55514B] leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Architecture Diagram */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] uppercase font-bold mb-3">
              SYSTEM CIRCUIT
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.0] mb-4">
              How the telephony circuit{" "}
              <span className="italic text-[#B88746]">executes.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#55514B]">
              From the instant a caller dials or submits an ad form, data moves seamlessly across our 5-stage qualification pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {architectureSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] flex flex-col justify-between relative group hover:border-[#B88746]/50 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase mb-1">
                      STAGE {step.step}
                    </div>
                    <h4 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#55514B] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Voice Demonstration Console */}
      <div id="demo-console">
        <VoiceDemoConsole />
      </div>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
