"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { BookingModal } from "@/components/BookingModal";
import { LiveVoiceDemo } from "@/components/LiveVoiceDemo";
import {
  PhoneCall,
  CheckCircle2,
  Zap,
  Languages,
  ShieldAlert,
  Server,
  ArrowUpRight,
} from "lucide-react";

export default function VoiceAgentsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const architectureLayers = [
    {
      num: "01",
      title: "Telephony Carrier & SIP Trunking",
      desc: "Direct integration with Twilio, Plivo, and Telnyx with multi-region redundancy across India, US, and EU. Sub-50ms packet delivery with zero jitter.",
      icon: Server,
    },
    {
      num: "02",
      title: "Speech-to-Speech Realtime Engine",
      desc: "Ultra-low latency streaming architecture. Turn-taking threshold tuned to 340ms, eliminating robotic pauses and awkward over-talk interruptions.",
      icon: Zap,
    },
    {
      num: "03",
      title: "Multi-Dialect Accent & Tone Calibration",
      desc: "Bilingual English and Hindi fluency with natural Hinglish colloquialisms. Callers never get jarred by foreign synthesized accents.",
      icon: Languages,
    },
    {
      num: "04",
      title: "Deterministic Guardrails & Escalation",
      desc: "Strict adherence to company compliance. Immediate warm SIP transfer to human executive or instant WhatsApp dispatch on escalation.",
      icon: ShieldAlert,
    },
  ];

  const benchmarks = [
    { metric: "< 350ms", label: "End-to-end voice latency", vs: "vs 1,200ms industry average" },
    { metric: "99.8%", label: "Carrier connection uptime", vs: "Multi-carrier redundant failover" },
    { metric: "45s", label: "Speed to lead outbound dial", vs: "Instant CRM webhook trigger" },
    { metric: "100%", label: "Audited call transcription", vs: "Real-time sentiment scoring" },
  ];

  return (
    <div className="min-h-screen bg-[#08090C] bg-cyber-grid text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Page Header */}
        <section className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Capabilities</span>
            <span>/</span>
            <span>Autonomous AI Voice Agents</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              <PhoneCall className="size-3.5" />
              Telephony Infrastructure
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Autonomous voice agents that talk like your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                best sales partner.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
              Zero hold times. Sub-45 second speed to lead. Fluid bilingual conversation.
              DestiX AI builds voice agents engineered for real high-ticket phone operations—qualifying buyers,
              resolving objections, and booking calendar revenue around the clock.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary inline-flex items-center gap-3 px-8 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider"
              >
                <span>Deploy a Voice Agent</span>
                <ArrowUpRight className="size-4" />
              </button>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:border-cyan-400 hover:text-cyan-300"
              >
                <span>Test Live Voice Station</span>
              </a>
            </div>
          </div>

          {/* Benchmark Ribbon */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {benchmarks.map((b, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6">
                <div className="font-display text-3xl md:text-4xl text-cyan-400 font-bold">{b.metric}</div>
                <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-semibold">{b.label}</div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">{b.vs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Telephony Architecture Section */}
        <section className="mt-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/10 pt-20">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              // Technical Telephony Architecture
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-white">
              The 4-layer low latency telephony stack.
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed font-light">
              Why do generic chatbots fail on phone calls? High latency and clumsy turn-taking.
              DestiX AI bypasses traditional middleware bottlenecks with direct WebSocket streaming.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.num}
                  className="glass-panel glass-panel-hover rounded-2xl p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500">{layer.num}</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-white">{layer.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light">{layer.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Audio Console */}
        <div id="demo" className="mt-28">
          <LiveVoiceDemo />
        </div>
      </main>

      <FinalCtaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialService="Autonomous AI Voice Agents" />
    </div>
  );
}
