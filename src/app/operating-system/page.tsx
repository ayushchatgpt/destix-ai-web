"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  GitBranch,
  MessageSquare,
  Database,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Calendar,
  Share2,
} from "lucide-react";

export default function OperatingSystemPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const systems = [
    {
      num: "01",
      title: "Instant WhatsApp Business Bridge",
      tag: "AUTOMATED MESSAGING",
      desc: "Within 30 seconds of an inbound phone inquiry or ad form fill, our WhatsApp automation engine dispatches a personalized brochure, private villa gate pass, or Google Maps clinic coordinate pin directly to the prospect's chat.",
    },
    {
      num: "02",
      title: "CRM Bidirectional Synchronization",
      tag: "HUBSPOT & SALESFORCE",
      desc: "Eliminates manual CSV data entry. Every contact, qualification score, call transcript, and booked appointment is updated simultaneously across HubSpot, Salesforce, GoHighLevel, Zoho, or your custom PostgreSQL database.",
    },
    {
      num: "03",
      title: "Automated Data & Intent Enrichment",
      tag: "PURCHASE INTENT TAGGING",
      desc: "Our neural inference pipeline parses every spoken audio interaction. It extracts budget limits, purchase timelines, competitor mentions, and objection triggers, sending executive Slack alerts to your sales directors.",
    },
  ];

  const flowNodes = [
    {
      id: "ad-click",
      title: "01. First Touch / Ad Lead",
      desc: "Buyer submits high-intent Meta/Google form or calls private hotline",
      icon: Phone,
      output: "Triggers n8n instant webhook in <50ms",
    },
    {
      id: "voice-ai",
      title: "02. DestiX Telephony Agent",
      desc: "Dials lead in 45s; conducts natural conversational qualification",
      icon: GitBranch,
      output: "Extracts budget, timeline, and decision-maker status",
    },
    {
      id: "whatsapp",
      title: "03. Instant WhatsApp Dispatch",
      desc: "Dispatches PDF lookbook, gate pass, or prep guide while on line",
      icon: MessageSquare,
      output: "Opens 1-on-1 verified mobile communication channel",
    },
    {
      id: "crm-sync",
      title: "04. Bi-Directional CRM Sync",
      desc: "Logs audio recording, transcript, and intent tags to HubSpot/GHL",
      icon: Database,
      output: "Zero human data entry; status updated to 'Qualified'",
    },
    {
      id: "calendar",
      title: "05. Executive Calendar Hold",
      desc: "Locks site escort or doctor consultation into Cal.com / Google Cal",
      icon: Calendar,
      output: "Automated SMS reminder sequence initiated",
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
              THE AI OPERATING LAYER
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl leading-[0.96] text-[#181614] mb-8">
              The connective tissue between your phone line, CRM, and{" "}
              <span className="italic text-[#B88746]">calendar.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#55514B] leading-relaxed mb-10 font-normal">
              A voice agent without back-office automation is just a toy. DestiX AI builds the unified operational plumbing linking telephony, WhatsApp Business API, and your CRM into one autonomous revenue circuit.
            </p>

            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm tracking-tight transition-all duration-300 shadow-sm"
            >
              <span>Audit Your Operational Plumbing</span>
              <ArrowUpRight className="w-4 h-4 text-[#F6F4EE]" />
            </button>
          </div>
        </div>
      </section>

      {/* Core Systems Installed */}
      <section className="py-24 sm:py-32 bg-[#F6F4EE] border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] uppercase font-bold mb-3">
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.0] mb-6">
              Three sovereign automated{" "}
              <span className="italic text-[#B88746]">subsystems.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#55514B] leading-relaxed">
              Every workflow is custom-orchestrated on n8n and Make with self-healing retry logic, enterprise security, and audit trails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systems.map((sys) => (
              <div
                key={sys.num}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DDD1] hover:border-[#B88746]/50 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#B88746] px-2.5 py-1 rounded bg-[#EDE8DC] border border-[#E2DDD1]">
                      SYSTEM {sys.num}
                    </span>
                    <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider">
                      {sys.tag}
                    </span>
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-4">
                    {sys.title}
                  </h3>

                  <p className="text-sm text-[#55514B] leading-relaxed font-normal">
                    {sys.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workflow Flowchart */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] uppercase font-bold mb-3">
              INTERACTIVE PIPELINE DIAGRAM
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.0] mb-4">
              From first click to{" "}
              <span className="italic text-[#B88746]">booked revenue.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#55514B]">
              Tap any stage in the circuit to see how data flows in real-time through our autonomous operating layer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {flowNodes.map((node, idx) => {
              const IconComp = node.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl text-left border transition-all duration-300 ${
                    isSelected
                      ? "bg-[#181614] text-[#F6F4EE] border-[#B88746] shadow-lg -translate-y-1"
                      : "bg-[#F6F4EE] text-[#181614] border-[#E2DDD1] hover:border-[#B88746]/40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      isSelected ? "bg-[#B88746] text-[#131210]" : "bg-white text-[#B88746] border border-[#E2DDD1]"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-['Instrument_Serif'] text-xl mb-1">
                    {node.title}
                  </h4>
                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? "text-[#C5BDB1]" : "text-[#55514B]"
                    }`}
                  >
                    {node.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Output Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#EDE8DC] border border-[#E2DDD1] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#B88746] shrink-0" />
              <div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#888277] uppercase block">
                  SYSTEM OUTPUT // {flowNodes[activeStep].title}
                </span>
                <span className="font-['Instrument_Serif'] text-2xl text-[#181614] font-bold">
                  {flowNodes[activeStep].output}
                </span>
              </div>
            </div>

            <button
              onClick={() => setBookingOpen(true)}
              className="px-6 py-3 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-semibold tracking-tight transition-colors shrink-0"
            >
              Install This OS Pipeline ↗
            </button>
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
