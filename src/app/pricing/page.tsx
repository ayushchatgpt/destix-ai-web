"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { BookingModal } from "@/components/BookingModal";
import { PricingCalculator } from "@/components/PricingCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Calculator } from "lucide-react";

export default function PricingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090C] bg-cyber-grid text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="pt-32 pb-16">
        <section className="px-6 md:px-10 max-w-7xl mx-auto mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Transparent Pricing</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              <Calculator className="size-3.5" />
              ROI-Guaranteed Investment
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Transparent pricing.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Guaranteed unit economics.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
              No hidden platform fees, no predatory minutes markups.
              We price based on production throughput with clear ROI modeling before writing a single line of code.
            </p>
          </div>
        </section>

        {/* Pricing Calculator Component */}
        <PricingCalculator onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Pricing FAQs */}
        <FaqSection />
      </main>

      <FinalCtaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialService="Custom Pricing & Volume Sizing" />
    </div>
  );
}
