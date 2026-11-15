"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  MessageSquare,
  Bot,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Zap,
  Globe,
  Database,
  Lock,
  Sparkles,
  Users,
  Smartphone,
} from "lucide-react";

export default function AiChatbotsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const features = [
    {
      title: "Grounded Hybrid RAG Architecture",
      desc: "Combines dense vector embeddings with sparse keyword search and deterministic rule filters. Strictly zero hallucination—every response cites verified company SOPs and inventory.",
      tag: "ZERO HALLUCINATION",
      metric: "99.8% Accuracy",
    },
    {
      title: "Official Meta WhatsApp Cloud API",
      desc: "Native integration with green-tick verified WhatsApp business accounts. Sends dynamic media, PDFs, location pins, and interactive button menus with sub-500ms delivery.",
      tag: "WHATSAPP NATIVE",
      metric: "< 500ms Delivery",
    },
    {
      title: "Multilingual Code-Switching",
      desc: "Understands and responds fluently in English, Hindi, Hinglish, Arabic, Spanish, French, German, and 20+ languages with colloquial dialect recognition.",
      tag: "20+ LANGUAGES",
      metric: "Sub-Sentence Switching",
    },
    {
      title: "Seamless Human Desk Escalation",
      desc: "Detects caller frustration, sentiment drops, or high-intent enterprise requests and instantly hands off chat history to live human agents via Slack or Zendesk.",
      tag: "HUMAN-IN-THE-LOOP",
      metric: "< 2s Escalation",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/solutions" className="hover:text-[#181614] transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">AI Chatbots</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-6 shadow-2xs">
            <Bot className="size-3.5 text-[#B88746]" />
            <span>GROUNDED CONVERSATIONAL AI // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Grounded Enterprise{" "}
            <span className="italic text-[#B88746]">AI Chatbots.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-8">
            Engineered by Principal AI Systems Architect Ayush Meena. We deploy enterprise AI chatbots and WhatsApp agents strictly grounded in your proprietary documents, product catalogs, and databases—delivering instant 24/7 customer conversion with zero hallucinations.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule Chatbot Architecture Consultation</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Inspect Transparent Pricing
            </Link>
          </div>
        </header>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                    {feat.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#181614]">{feat.metric}</span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center gap-2 text-xs font-semibold text-[#181614]">
                <CheckCircle2 className="size-4 text-[#B88746]" />
                <span>Deterministic Enterprise Guardrails</span>
              </div>
            </div>
          ))}
        </section>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-white mb-4">
            Convert Every Chat Into Revenue.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Deploy grounded, multilingual AI chatbots that engage prospects in real time across WhatsApp and your website.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
          >
            Deploy Enterprise Chatbot
          </button>
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}