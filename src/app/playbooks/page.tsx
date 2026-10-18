"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { BookingModal } from "@/components/BookingModal";
import { PlaybooksSection } from "@/components/PlaybooksSection";
import { BookOpen } from "lucide-react";

export default function PlaybooksPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090C] bg-cyber-grid text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="pt-32 pb-16">
        <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Production Blueprints</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              <BookOpen className="size-3.5" />
              Verified Architecture Library
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Six production blueprints that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                generate real revenue.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
              Each blueprint is a complete operational package: custom voice prompt scripts,
              interruption handling rules, bi-directional CRM syncing, and automated WhatsApp follow-ups.
              Deployed and tested in real business operations.
            </p>
          </div>
        </section>

        {/* 6 Blueprints Interactive Component */}
        <PlaybooksSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      <FinalCtaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialService="Production AI Voice Playbooks" />
    </div>
  );
}
