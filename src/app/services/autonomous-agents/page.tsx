"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  GitBranch,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function AutonomousAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const capabilities = [
    {
      title: "LangGraph State Machines",
      desc: "Deterministic cyclic graphs that plan, execute, evaluate, and self-correct across multi-step enterprise workflows with comprehensive state persistence.",
      tag: "CYCLIC GRAPHS",
    },
    {
      title: "Multi-Agent Specialist Swarms",
      desc: "Specialized agent collectives: researcher agents, validation agents, compliance auditors, and execution agents collaborating through structured messaging.",
      tag: "AGENTIC SWARMS",
    },
    {
      title: "Autonomous Tool & API Execution",
      desc: "Agents equipped with strictly sandboxed browser automation, SQL querying, REST API execution, and CRM manipulation tools with human approval gates.",
      tag: "SECURE SANDBOX",
    },
    {
      title: "Self-Correction & Reflection Loops",
      desc: "Agents review their own outputs against predefined schemas and quality metrics before presenting final deliverables to human executives.",
      tag: "AUTO-VERIFICATION",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <Link href="/solutions" className="hover:text-[#181614] transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">Autonomous Agents</span>
        </nav>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-6 shadow-2xs">
            <Cpu className="size-3.5 text-[#B88746]" />
            <span>AGENTIC SYSTEMS PRACTICE // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Autonomous AI Agents &amp;{" "}
            <span className="italic text-[#B88746]">Agentic Swarms.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-8">
            Engineered by Principal AI Systems Architect Ayush Meena. We architect autonomous agentic systems that move beyond static prompts into dynamic, self-correcting task execution across APIs, databases, and enterprise software.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule Agent Architecture Briefing</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Review Commercial Models
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold block w-fit mb-4">
                  {cap.tag}
                </span>
                <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                  {cap.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center gap-2 text-xs font-semibold text-[#181614]">
                <CheckCircle2 className="size-4 text-[#B88746]" />
                <span>Deterministic Enterprise State Machine</span>
              </div>
            </div>
          ))}
        </section>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#181614] text-[#F6F4EE] border border-[#33302B] text-center">
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-white mb-4">
            Build Your Autonomous Workforce.
          </h2>
          <p className="text-sm sm:text-base text-[#BDBAA8] max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Deploy production-ready LangGraph multi-agent swarms engineered for revenue-critical enterprise execution.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer"
          >
            Deploy Autonomous Agents
          </button>
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}