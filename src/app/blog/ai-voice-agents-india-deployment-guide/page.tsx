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
  BookOpen,
  Server,
  Network,
} from "lucide-react";

export default function VoiceAgentsIndiaGuidePage() {
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
          <span className="text-[#B88746] font-semibold">Deployment Architecture</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
          <BookOpen className="size-3.5 text-[#B88746]" />
          <span className="font-semibold text-[#181614]">2026 ARCHITECTURAL GUIDE</span>
        </div>

        <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-8">
          AI Voice Agents in India: The{" "}
          <span className="italic text-[#B88746]">Enterprise Deployment Guide.</span>
        </h1>

        {/* Quick Answer Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-sm mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B88746] font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="size-4" />
            <span>EXECUTIVE SUMMARY FOR INDIAN BUSINESSES</span>
          </div>
          <p className="text-base sm:text-lg text-[#181614] leading-relaxed">
            Deploying production AI voice agents in India requires three core pillars: <strong>TRAI/DLT-compliant Indian SIP trunks (+91 numbers)</strong>, <strong>sub-500ms round-trip acoustic latency</strong>, and <strong>bilingual Hindi/Hinglish mid-sentence code-switching</strong>. DestiX AI engineers end-to-end voice infrastructure that intercepts incoming ad leads in under 45 seconds and passes qualified data directly into CRMs and WhatsApp.
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none text-base sm:text-lg text-[#4A443B] leading-relaxed space-y-8 mb-16">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            1. The Three Technical Bottlenecks in India
          </h2>
          <p>
            While Western voice bot providers market simple self-serve tools, deploying voice agents across Delhi NCR, Mumbai, and Bengaluru faces unique infrastructure challenges:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Packet Loss on Indian Cellular Networks:</strong> Standard WebRTC connections stutter on 4G handoffs. Voice agents must bridge into Indian SIP carrier trunks to maintain crystal-clear audio.</li>
            <li><strong>The "Latency Valley":</strong> Indian callers hang up if an AI pauses for more than 700ms. Human conversational rhythm in North India demands sub-500ms turn-taking.</li>
            <li><strong>Hinglish Colloquialisms:</strong> Callers rarely speak pure Hindi or pure Queen&apos;s English. They mix vocabulary dynamically within single sentences.</li>
          </ul>

          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            2. The Sub-500ms Stack Architecture
          </h2>
          <div className="p-6 rounded-2xl bg-[#181614] text-[#F6EFE2] font-mono text-xs sm:text-sm space-y-3">
            <div className="text-[#B88746]"># DestiX AI Real-Time Audio Telemetry:</div>
            <div>• Inbound Audio Capture (Indian SIP Trunk): ~45ms</div>
            <div>• Real-Time Speech-to-Text (Deepgram Nova-2 Multilingual): ~110ms</div>
            <div>• Contextual LLM Inference (Groq Llama-3.3 70B Stream): ~160ms</div>
            <div>• Text-to-Speech Chunk Synthesis (Cartesia Sonic Multilingual): ~120ms</div>
            <div className="text-[#B88746] pt-2 border-t border-[#3A332E]">
              TOTAL ROUND-TRIP LATENCY: 435ms (Instant Human Parity)
            </div>
          </div>

          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] not-prose">
            3. Regulatory Compliance &amp; DLT Guidelines
          </h2>
          <p>
            Under Telecom Regulatory Authority of India (TRAI) directives, commercial automated calling must adhere strictly to transactional consent protocols and DLT scrubbing. DestiX AI provisions numbers with licensed Indian telecom carriers, ensuring outbound callbacks operate within full regulatory compliance.
          </p>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] text-center flex flex-col items-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Audition Live Indian Voice Infrastructure
          </h2>
          <p className="text-base text-[#6B655C] max-w-xl mb-8">
            Test our sub-500ms conversational telephony on your own phone number. Book a 30-minute diagnostic session with Ayush Meena.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all shadow-md group"
          >
            <span>Book 30-Min Architecture Session</span>
            <ArrowUpRight className="size-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </article>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
