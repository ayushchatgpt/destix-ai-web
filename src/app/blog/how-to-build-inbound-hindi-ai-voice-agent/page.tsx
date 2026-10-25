"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  PhoneCall,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  Languages,
  Code2,
} from "lucide-react";

export default function HindiVoiceGuidePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <article className="pt-36 sm:pt-44 pb-20 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8C8275] mb-6">
          <Link href="/blog" className="hover:text-[#B88746] transition-colors">
            Dispatches
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-[#B88746] font-semibold">Conversational AI Architecture</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
          <Languages className="size-3.5 text-[#B88746]" />
          <span className="font-semibold text-[#181614]">BILINGUAL TELEPHONY ENGINEERING</span>
        </div>

        <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-8">
          How to Build an Inbound Hindi &amp;{" "}
          <span className="italic text-[#B88746]">Hinglish AI Voice Agent.</span>
        </h1>

        {/* Quick Answer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-sm mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B88746] font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="size-4" />
            <span>THE PRODUCTION HINDI STACK</span>
          </div>
          <p className="text-base sm:text-lg text-[#181614] leading-relaxed">
            Building a production-ready Hindi voice agent requires avoiding pure textbook Devanagari Hindi. Real Indian callers speak <strong>Hinglish</strong> (mixing English business terms with colloquial Hindi verbs). The winning technical architecture uses <strong>Deepgram Nova-2 Multilingual</strong> for STT, <strong>Groq Llama-3.3 70B</strong> with bilingual system prompts, and <strong>Cartesia Sonic Multilingual</strong> for natural North Indian acoustic synthesis.
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none text-base sm:text-lg text-[#4A443B] leading-relaxed space-y-8 mb-16">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            1. The Problem with Pure Translation Pipelines
          </h2>
          <p>
            Most developers fail when building Hindi bots because they translate: English → Google Translate → Hindi TTS. This introduces a 1,500ms delay and produces robotic, unnaturally formal Hindi that confuses callers. A Delhi caller asking for an appointment doesn&apos;t say &ldquo;kripya meri nirdharit samay ko nishchit karein&rdquo; — they say &ldquo;mujhe doctor ka appointment book karna hai Friday shaam ko&rdquo;.
          </p>

          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            2. Code-Switching Prompt Engineering
          </h2>
          <p>
            DestiX AI calibrates LLM system prompts with phonetic token mapping:
          </p>
          <div className="p-6 rounded-2xl bg-[#181614] text-[#F6EFE2] font-mono text-xs sm:text-sm space-y-2">
            <div className="text-[#8C8275]">// Example System Prompt Guideline</div>
            <div>&ldquo;You are an autonomous front-desk coordinator in Delhi NCR. If the caller speaks Hindi or Hinglish, mirror their dialect naturally. Use polite urban Hindi phrases like &lsquo;Bilkul sir, main check kar leta hoon&rsquo; while keeping technical names in English.&rdquo;</div>
          </div>

          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            3. Deploying Inbound Hindi Voice Infrastructure
          </h2>
          <p>
            At DestiX AI, we build bespoke bilingual voice systems for clinics, luxury real estate developers, and corporate brokerages across Delhi, Gurugram, and Mumbai. Every agent is provisioned with zero robotic latency and instantaneous CRM summary logging.
          </p>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] text-center flex flex-col items-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Audition Our Hindi Voice Telemetry Live
          </h2>
          <p className="text-base text-[#6B655C] max-w-xl mb-8">
            Experience sub-500ms Hindi and Hinglish voice parity. Schedule a 30-minute demonstration call with Ayush Meena.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all shadow-md group"
          >
            <span>Book Live Demonstration Call</span>
            <ArrowUpRight className="size-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </article>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
