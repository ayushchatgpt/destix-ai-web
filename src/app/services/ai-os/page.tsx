"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Workflow,
  CheckCircle2,
  Database,
  MessageSquare,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export default function AiOsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const modules = [
    {
      title: "Bi-Directional CRM Sync",
      desc: "Instantly update contact lifecycle stages, call recordings, sentiment score, and next steps in HubSpot, Salesforce, or GoHighLevel within 2 seconds of call completion.",
      tag: "HubSpot & Salesforce",
      icon: Database,
    },
    {
      title: "Autonomous WhatsApp Pipelines",
      desc: "Trigger high-converting WhatsApp messages while the lead is still on the phone. Deliver villa brochures, meeting calendar invites, or checkout links automatically.",
      tag: "WhatsApp Business API",
      icon: MessageSquare,
    },
    {
      title: "Multi-Step n8n & Python Orchestration",
      desc: "Complex logic flows connecting webhooks, ERP databases, inventory systems, and telephony triggers with 100% data privacy and self-healing error catchers.",
      tag: "Private Server Deployments",
      icon: Workflow,
    },
    {
      title: "Company Memory & Rules Engine",
      desc: "Give your AI persistent knowledge of company policies, pricing tiers, doctor availability, inventory limits, and legal disclaimers. Zero hallucination.",
      tag: "Vector Embeddings & RAG",
      icon: Cpu,
    },
  ];

  const workflowSteps = [
    { step: "01", name: "Inbound Lead / Webhook", detail: "Meta Ad Form, Google Lead, or Inbound Hotline Ring" },
    { step: "02", name: "Realtime Data Enrichment", detail: "Enrich phone, location, and past CRM history in 80ms" },
    { step: "03", name: "Voice Qualification Call", detail: "DestiX AI dials lead in < 45s, qualifies intent & budget" },
    { step: "04", name: "Instant WhatsApp & Calendar Sync", detail: "Calendar invite locked, brochure PDF dispatched" },
    { step: "05", name: "CRM Stage & Revenue Attribution", detail: "Deal created in pipeline with transcript & sentiment" },
  ];

  return (
    <div className="min-h-screen bg-[#08090C] bg-cyber-grid text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Capabilities</span>
            <span>/</span>
            <span>Enterprise AI Operating System</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-300">
              <Workflow className="size-3.5" />
              Autonomous Operations Layer
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              The unified brain for your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                leads, CRM, & workflows.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
              Stop stitching together disconnected SaaS tools with brittle zaps.
              DestiX AI engineers a custom AI Operating System with persistent memory, automated n8n pipelines,
              and native CRM syncing that runs your entire back-office without manual intervention.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary inline-flex items-center gap-3 px-8 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider"
              >
                <span>Install Your AI OS</span>
                <ArrowUpRight className="size-4" />
              </button>
              <Link
                href="/playbooks"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:border-cyan-400 hover:text-cyan-300"
              >
                <span>Explore Production Blueprints</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Workflow Pipeline Graphic Section */}
        <section className="mt-24 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-[#0E1017] p-8 md:p-14 text-white shadow-espresso">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
                  // Pipeline Topology
                </span>
                <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold text-white">
                  From cold click to booked revenue in 90 seconds.
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 text-xs text-cyan-300 font-mono">
                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                Live Pipeline State
              </span>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {workflowSteps.map((ws, idx) => (
                <div
                  key={ws.step}
                  className="glass-panel relative rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-cyan-400">{ws.step}</span>
                    <h4 className="mt-3 font-display text-lg font-bold text-white leading-snug">{ws.name}</h4>
                    <p className="mt-2 text-xs text-slate-400 font-light leading-relaxed">{ws.detail}</p>
                  </div>
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-cyan-400 font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Modules Grid */}
        <section className="mt-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              // Operating Modules
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-white">
              Four pillars of the DestiX Operating Layer.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <Icon className="size-6" />
                      </div>
                      <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                        {m.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold text-white">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light">{m.desc}</p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    <span>Included in Pilot & Scale Plans</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <FinalCtaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialService="Enterprise AI Operating System" />
    </div>
  );
}
