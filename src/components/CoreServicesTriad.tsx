"use client";

import React from "react";
import {
  PhoneCall,
  Workflow,
  MonitorSmartphone,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

interface CoreServicesTriadProps {
  onOpenBooking: () => void;
}

export const CoreServicesTriad: React.FC<CoreServicesTriadProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#08090C] px-6 py-24 text-white md:px-10 md:py-36 border-t border-white/10"
    >
      {/* Background Cyan & Violet Mesh Glows */}
      <div
        className="pointer-events-none absolute -right-40 top-1/3 size-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-10 size-[500px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.35), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
            // Core Architecture Capabilities
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Three ways we install AI that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              pays for itself.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light leading-relaxed">
            We do not sell isolated chatbots or vague consulting hours. We deploy hardened,
            revenue-critical infrastructure across voice, operational pipelines, and conversion architecture.
          </p>
        </div>

        {/* 3 Deep Service Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: AI Voice Assistants */}
          <div className="glass-panel glass-panel-hover group relative flex flex-col justify-between rounded-2xl p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">01</span>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase text-cyan-300">
                  Autonomous Telephony
                </span>
              </div>

              <div className="mt-6 flex size-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <PhoneCall className="size-6" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                AI Voice Assistants
              </h3>
              <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                Human-sounding agents that answer every inbound ring and dial outbound ad leads in under 45 seconds.
              </p>

              {/* Animated Waveform Simulation Graphic */}
              <div className="mt-6 rounded-xl border border-white/10 bg-[#08090C] p-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>SPEECH LATENCY</span>
                  <span className="text-emerald-400 font-bold">340ms (Realtime)</span>
                </div>
                <div className="flex items-end gap-1 h-12 pt-2">
                  {[40, 75, 30, 90, 60, 100, 80, 45, 95, 65, 85, 35, 70, 50, 90, 60].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-full bg-gradient-to-t from-cyan-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-all"
                      style={{
                        height: `${h}%`,
                        animation: `eq-bounce-1 ${0.6 + (i % 4) * 0.2}s ease-in-out infinite alternate`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Sub-45s speed to lead on inbound form fills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Natural Hindi, English & regional dialect fluency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Direct integration with Cal.com & Google Calendar</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Deploy Voice Agent</span>
                <ArrowUpRight className="size-4" />
              </button>
              <span className="font-mono text-[10px] text-slate-400">$0.05/min Volume</span>
            </div>
          </div>

          {/* Card 2: AI Operating System */}
          <div className="glass-panel glass-panel-hover group relative flex flex-col justify-between rounded-2xl p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">02</span>
                <span className="rounded-full border border-indigo-500/30 bg-indigo-950/60 px-3 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase text-indigo-300">
                  Autonomous Operations
                </span>
              </div>

              <div className="mt-6 flex size-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Workflow className="size-6" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                AI Operating System
              </h3>
              <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                A unified operating layer for your business. Rules, memory, and automated n8n pipelines that run your back-office.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-[#08090C] p-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>N8N WORKFLOW STREAM</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
                    Active Pipeline
                  </span>
                </div>

                <div className="space-y-2 py-1 text-[11px] font-mono">
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5">
                    <span className="text-slate-400">Inbound Call Webhook</span>
                    <span className="text-emerald-400">Triggered</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5">
                    <span className="text-slate-400">Qualification Scoring</span>
                    <span className="text-cyan-400">Tier-1 HNI</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5">
                    <span className="text-slate-400">CRM + WhatsApp Sync</span>
                    <span className="text-emerald-400">Complete</span>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Custom n8n and Make.com multi-step orchestrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Two-way CRM syncing (HubSpot, Salesforce, GHL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Instant WhatsApp confirmation & brochure automation</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Install AI OS</span>
                <ArrowUpRight className="size-4" />
              </button>
              <span className="font-mono text-[10px] text-slate-400">14-Day Blueprint</span>
            </div>
          </div>

          {/* Card 3: Websites That Convert & 3D WebGL */}
          <div className="glass-panel glass-panel-hover group relative flex flex-col justify-between rounded-2xl p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">03</span>
                <span className="rounded-full border border-violet-500/30 bg-violet-950/60 px-3 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase text-violet-300">
                  Digital Architecture
                </span>
              </div>

              <div className="mt-6 flex size-12 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <MonitorSmartphone className="size-6" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                Websites That Convert
              </h3>
              <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                Award-grade 3D WebGL digital platforms built on Next.js, Three.js, and GSAP that drive real revenue.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-[#08090C] p-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>LIGHTHOUSE PERFORMANCE</span>
                  <span className="text-emerald-400 font-bold">100 / 100 Score</span>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
                    <span className="size-2 rounded-full bg-red-400" />
                    <span className="size-2 rounded-full bg-amber-400" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-mono text-[10px] text-slate-400">
                      ayush.company/3d-experience
                    </span>
                  </div>
                  <div className="pt-2 text-center text-xs text-cyan-400 font-mono">
                    WebGL 60FPS Interactive Showcase
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Next.js App Router with sub-second page loads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Three.js interactive 3D assets commanding 5x trust</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Direct-response conversion funnels & typography</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Commission 3D Platform</span>
                <ArrowUpRight className="size-4" />
              </button>
              <span className="font-mono text-[10px] text-slate-400">From $1,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
