"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Flame,
  ShieldCheck,
  CheckCircle2,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const values = [
    {
      num: "01",
      title: "Zero Slideware. Only Production Code.",
      desc: "We don't sell 80-page strategic roadmaps that gather dust in your Google Drive. We deploy working phone numbers, live voice agents, and connected n8n pipelines that book revenue in days, not quarters.",
    },
    {
      num: "02",
      title: "Bootstrapped & Fully Client-Aligned.",
      desc: "We have no venture capital overlords demanding artificial software multiples. We are profitable, founder-owned, and 100% focused on maximizing our clients' net cash collection.",
    },
    {
      num: "03",
      title: "Strict 5x ROI Threshold.",
      desc: "If our initial discovery audit does not uncover at least 5x the deployment cost in recovered lead leakage or reduced overhead, Ayush Meena will personally decline the engagement.",
    },
    {
      num: "04",
      title: "Direct Founder Engineering Access.",
      desc: "You never get handed off to a junior account manager in another timezone. Every prompt architecture, telephony SIP trunk, and WebGL asset is overseen by Ayush Meena directly.",
    },
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
            <span className="text-cyan-400">About DestiX AI</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              <Flame className="size-3.5" />
              Philosophy & Leadership
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Built on craftsmanship,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                not agency fluff.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
              DestiX AI was created by Ayush Meena to solve a glaring problem in the technology landscape:
              businesses were being flooded with robotic chatbots and hollow AI hype that annoyed callers
              and produced zero measurable ROI. We build hardened phone operations that print revenue.
            </p>
          </div>
        </section>

        {/* Founder Dark Portrait & Story Grid */}
        <section className="mt-20 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-white/10 bg-[#0E1017] shadow-espresso">
                <Image
                  src="/images/ayush-meena-dark.jpg"
                  alt="Ayush Meena, Founder & CEO of DestiX AI"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-display text-3xl font-bold">Ayush Meena</div>
                  <div className="text-xs text-cyan-400 font-mono font-semibold uppercase tracking-wider mt-0.5">
                    Founder, CEO & Principal AI Engineer
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 font-mono">
                    <MapPin className="size-3.5 text-cyan-400" />
                    <span>Delhi NCR, India • Remote Global</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed text-base font-light">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold block">
                // The Founder's Note
              </span>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                "We don't build software experiments. We engineer cashflow pipelines."
              </h2>

              <p>
                As founder and CEO, I view AI not as a gimmick or marketing novelty, but as an indispensable
                operational foundation. When a high-ticket customer calls your business, every second of hold
                time and every robotic mispronunciation degrades your brand equity.
              </p>

              <p>
                At DestiX AI, we engineer voice synthesis that is virtually indistinguishable from your sharpest
                sales executive. We back this with automated n8n pipelines that ensure your CRM is always synced,
                your WhatsApp confirmations are instantaneous, and your calendar is packed with qualified appointments.
              </p>

              <blockquote className="rounded-2xl border-l-2 border-cyan-400 bg-white/[0.03] p-5 border border-white/5 shadow-espresso text-base text-slate-200 italic">
                "We remain hands-on, bootstrapped, and uncompromising on engineering quality.
                When you partner with DestiX AI, you get my direct phone number and direct accountability."
              </blockquote>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3 text-xs font-mono font-semibold uppercase tracking-wider"
                >
                  <span>Book Private Consultation</span>
                  <ArrowUpRight className="size-4" />
                </button>
                <a
                  href="mailto:ayushmeenadestixai@gmail.com"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="size-4 text-cyan-400" />
                  <span>ayushmeenadestixai@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="mt-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              // Operating Principles
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-white">
              The four laws of DestiX engineering.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.num}
                className="glass-panel glass-panel-hover rounded-2xl p-8"
              >
                <span className="font-mono text-xs text-cyan-400 font-semibold">{v.num}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FinalCtaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialService="Executive Partnership Strategy" />
    </div>
  );
}
