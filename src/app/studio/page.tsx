"use client";

import React, { useState } from "react";
import Link from "next/link";
import VoiceDemoConsole from "@/components/VoiceDemoConsole";
import BookingModal from "@/components/BookingModal";
import { ArrowLeft, Sparkles, Shield, Cpu, Zap } from "lucide-react";

export default function StudioPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C0A09] text-[#F6EFE2] flex flex-col font-sans selection:bg-[#B88746]/20">
      {/* Studio Top Navigation Bar */}
      <header className="h-16 border-b border-[#2D2824] bg-[#131210]/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-[#888277] hover:text-[#F6EFE2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to DestiX AI</span>
          </Link>
          <div className="h-4 w-[1px] bg-[#2D2824]" />
          <div className="flex items-center gap-2 font-serif text-sm font-bold text-[#F6EFE2]">
            <span>DestiX Voice Agent Studio</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1917] border border-[#2D2824] text-[#B88746] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Engine: Deepgram Aura-2 + Nova-3 + Groq LPU</span>
          </div>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B88746] to-[#D4A373] text-[#0C0A09] font-bold text-xs hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
          >
            Deploy For Your Business
          </button>
        </div>
      </header>

      {/* Embedded Full Studio Console matching Website Style */}
      <div className="flex-1">
        <VoiceDemoConsole onOpenBooking={() => setBookingOpen(true)} />
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
