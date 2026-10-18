"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, Star, Cpu, Zap, Activity } from "lucide-react";
import { Interactive3DHero } from "./Interactive3DHero";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const rotatingWords = [
    "answer every high-ticket call",
    "qualify ad leads in 45 seconds",
    "automate CRM & WhatsApp workflows",
    "scale revenue without headcount",
    "command category authority",
  ];

  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIdx((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section className="relative overflow-hidden bg-[#08090C] bg-cyber-grid px-6 pt-36 pb-20 md:px-10 md:pt-48 md:pb-28">
      {/* 3D Cyan & Indigo Mathematical Wave Canvas */}
      <Interactive3DHero />

      {/* Cyber Radial Glow Accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-[15%] -top-[20%] size-[60vw] rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-[20%] -right-[15%] size-[55vw] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Futuristic Status Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <span className="flex size-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-300 uppercase">
            Kernel v2.5 Telephony Stream
          </span>
          <span className="text-white/20">|</span>
          <span className="text-xs text-slate-300 font-medium">
            Installed to{" "}
            <span
              className={`font-semibold text-cyan-400 transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {rotatingWords[currentWordIdx]}
            </span>
          </span>
        </div>

        {/* Display Heading - Modern High-Tech Architecture */}
        <h1
          id="hero-tagline"
          className="mt-2 max-w-5xl text-balance font-display text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[1.02] tracking-tight text-white"
        >
          Engineering autonomous AI phone operations that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            scale revenue.
          </span>
        </h1>

        {/* High-Tech Trust Signals */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
          <div className="flex items-center gap-2 font-medium text-white">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span>4.9/5 verified client outcome score</span>
          </div>

          <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />

          <div className="flex items-center gap-1.5 font-medium text-slate-300">
            <CheckCircle2 className="size-4 text-emerald-400" />
            <span>100% money-back deployment guarantee</span>
          </div>

          <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />

          <div className="flex items-center gap-1.5 font-medium text-slate-300">
            <ShieldCheck className="size-4 text-cyan-400" />
            <span>Direct engineering under CEO Ayush Meena</span>
          </div>
        </div>

        {/* Subparagraph and Action Buttons */}
        <div className="mt-10 flex flex-col gap-10 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-slate-300 font-light">
            AI does the qualification, you book the revenue. DestiX AI installs human-sounding voice agents
            (<span className="text-cyan-400 font-mono font-medium">&lt;350ms</span> latency), a complete AI operating system,
            and category-defining 3D interactive web platforms that turn traffic into booked revenue 24/7.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className="btn-primary group inline-flex items-center gap-3 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Secondary Action Button with Equalizer Bars */}
            <a
              href="#live-demo"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/30 hover:text-cyan-300"
            >
              <span className="flex items-end gap-0.5 h-4" aria-hidden="true">
                <span className="w-0.5 rounded-full bg-cyan-400 eq-bar-1" />
                <span className="w-0.5 rounded-full bg-cyan-400 eq-bar-2" />
                <span className="w-0.5 rounded-full bg-cyan-400 eq-bar-3" />
                <span className="w-0.5 rounded-full bg-cyan-400 eq-bar-4" />
              </span>
              <span>Test Voice Agent Live</span>
            </a>
          </div>
        </div>

        {/* 4-Stat Metrics Grid (Cyber Glass Panels) */}
        <dl className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10">
            <dd className="font-display text-4xl text-white font-bold md:text-5xl">
              10<span className="text-cyan-400">x</span>
            </dd>
            <dt className="mt-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              Revenue potential unlocked
            </dt>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10">
            <dd className="font-display text-4xl text-white font-bold md:text-5xl">
              90<span className="text-cyan-400">%*</span>
            </dd>
            <dt className="mt-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              Operational lead drop-off eliminated
            </dt>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10">
            <dd className="font-display text-4xl text-white font-bold md:text-5xl">
              $1M<span className="text-cyan-400">+</span>
            </dd>
            <dt className="mt-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              Pipeline generated by architectures
            </dt>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10">
            <dd className="font-display text-4xl text-white font-bold md:text-5xl">
              24<span className="text-cyan-400">/7</span>
            </dd>
            <dt className="mt-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              Instant voice & WhatsApp qualification
            </dt>
          </div>
        </dl>

        <p className="mt-4 text-xs font-mono text-slate-500">
          *Results vary by business model. Metrics based on client audits and production phone deployments.
        </p>
      </div>
    </section>
  );
};
