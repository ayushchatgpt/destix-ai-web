"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Server,
  Activity,
  Layers,
  Database,
  PhoneCall,
  Clock,
} from "lucide-react";

export default function AiReadinessPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      title: "1. Speed to Lead & Response Pipeline",
      desc: "How rapidly does your organization currently phone or contact an inbound web inquiry or ad lead?",
      options: [
        { label: "Under 60 seconds (Instant callback)", score: 25 },
        { label: "15 to 30 minutes", score: 18 },
        { label: "2 to 4 hours", score: 10 },
        { label: "Next day or spreadsheet batching (12h+)", score: 2 },
      ],
    },
    {
      title: "2. CRM & Telephony Infrastructure",
      desc: "What is the primary customer data repository and telephony system currently in production?",
      options: [
        { label: "Modern CRM with REST webhooks (Salesforce, HubSpot, LeadSquared)", score: 25 },
        { label: "Mid-market CRM with partial API access (Zoho, Bigin, GHL)", score: 20 },
        { label: "Traditional PBX / On-Premise telecom with manual call logs", score: 8 },
        { label: "Disparate spreadsheets, Google Sheets & manual dialing", score: 2 },
      ],
    },
    {
      title: "3. Conversational Latency & Language Needs",
      desc: "What acoustic turn-taking speed and dialect code-switching does your market demand?",
      options: [
        { label: "Sub-500ms conversational parity with regional code-switching (Hinglish/Arabic/Spanish)", score: 25 },
        { label: "Standard English with tolerance for 1-2s cloud delays", score: 15 },
        { label: "Basic IVR tree or pre-recorded prompts", score: 5 },
      ],
    },
    {
      title: "4. Data Sovereignty & Regulatory Compliance",
      desc: "What data security standard governs your client conversations and database writes?",
      options: [
        { label: "Strict sovereign compliance (GDPR Article 22, HIPAA, TRAI DLT, or TDRA whitelist)", score: 25 },
        { label: "Standard enterprise data privacy requirements", score: 20 },
        { label: "Basic public cloud terms of service", score: 10 },
      ],
    },
  ];

  const handleSelect = (optionScore: number) => {
    const updated = { ...answers, [step]: optionScore };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

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
            <span className="text-[#7D7871]">Tools</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">AI Readiness Diagnostic</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Architectural Diagnostic Framework
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
              Enterprise AI Readiness Diagnostic
            </h1>
            <p className="text-lg text-[#5A554E] leading-relaxed mb-8 max-w-3xl">
              Audit your enterprise telemetry, CRM schema maturity, and data sovereignty posture in under 3 minutes. Receive an instant architectural maturity score and implementation blueprint.
            </p>
          </div>
        </section>

        {/* Diagnostic Card */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            {!showResults ? (
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2DDD1]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8F6426]">
                    STAGE 0{step + 1} OF 0{questions.length}
                  </span>
                  <div className="flex gap-1.5">
                    {questions.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-8 h-1.5 rounded-full transition-colors ${
                          idx <= step ? "bg-[#B88746]" : "bg-[#E2DDD1]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-3">
                  {questions[step].title}
                </h3>
                <p className="text-sm text-[#5A554E] leading-relaxed mb-8">
                  {questions[step].desc}
                </p>

                <div className="space-y-4">
                  {questions[step].options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(opt.score)}
                      className="w-full p-5 rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE] hover:border-[#B88746] hover:bg-white text-left transition-all flex items-center justify-between group"
                    >
                      <span className="text-sm text-[#1A1817] font-medium group-hover:text-[#8F6426] transition-colors">
                        {opt.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#B88746] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center max-w-xl mx-auto mb-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
                    Diagnostic Outcome
                  </span>
                  <div className="text-6xl font-serif text-[#1A1817] mb-3">
                    {totalScore}/100
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1817] mb-3">
                    {totalScore >= 80
                      ? "High Architectural Readiness (Tier-1 Deployment Candidate)"
                      : totalScore >= 50
                      ? "Moderate Readiness (Requires Telephony & CRM Hardening)"
                      : "Foundational Phase (Pre-Requisite Infrastructure Sprint Needed)"}
                  </h3>
                  <p className="text-sm text-[#5A554E] leading-relaxed">
                    {totalScore >= 80
                      ? "Your organization possesses the necessary API hooks and volume velocity to achieve full production deployment in under 14 days with an audited 5x+ Hurdle Rate ROI."
                      : "Your systems have viable automation pathways, but require sovereign SIP interconnects and webhook hygiene before launching high-throughput autonomous dialers."}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-[#E2DDD1]">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all flex items-center gap-2"
                  >
                    <span>Schedule Executive Review</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
                  </button>
                  <button
                    onClick={() => {
                      setStep(0);
                      setAnswers({});
                      setShowResults(false);
                    }}
                    className="px-6 py-4 border border-[#E2DDD1] bg-[#F6F4EE] text-[#1A1817] rounded-full text-sm font-medium hover:border-[#B88746] transition-colors"
                  >
                    Restart Diagnostic
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
