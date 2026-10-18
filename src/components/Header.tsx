"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFFFF]/90 backdrop-blur-xl border border-[#E2DDD1] shadow-[0_10px_35px_-10px_rgba(20,18,16,0.08)]"
            : "bg-[#FFFFFF]/70 backdrop-blur-md border border-[#E2DDD1]/80"
        }`}
      >
        {/* Brandmark: Desti + XAI in antique bronze + tiny monospace studio label */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-['Instrument_Serif'] text-2xl font-bold tracking-tight text-[#181512]">
                Desti
              </span>
              <span className="font-['Instrument_Serif'] italic text-2xl font-bold text-[#B88746]">
                XAI
              </span>
            </div>
            <span className="text-[9px] font-['JetBrains_Mono'] uppercase tracking-[0.22em] text-[#888277] -mt-1 font-semibold">
              EST. 2026 // STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-['Plus_Jakarta_Sans'] font-medium text-[#55514B]">
          <a
            href="#practice-areas"
            className="hover:text-[#181512] transition-colors py-1 hover:border-b hover:border-[#B88746]"
          >
            Practice Areas
          </a>
          <a
            href="#engagements"
            className="hover:text-[#181512] transition-colors py-1 hover:border-b hover:border-[#B88746]"
          >
            Engagements
          </a>
          <a
            href="#works"
            className="hover:text-[#181512] transition-colors py-1 hover:border-b hover:border-[#B88746]"
          >
            Selected Works
          </a>
          <a
            href="#hurdle-rate"
            className="hover:text-[#181512] transition-colors py-1 hover:border-b hover:border-[#B88746]"
          >
            The Hurdle Rate
          </a>
          <a
            href="#leadership"
            className="hover:text-[#181512] transition-colors py-1 hover:border-b hover:border-[#B88746]"
          >
            Leadership
          </a>
          <a
            href="#inquiries"
            className="hover:text-[#181512] transition-colors py-1 hover:border-b hover:border-[#B88746]"
          >
            Inquiries
          </a>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* Telemetry Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] text-[#55514B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-pulse" />
            <span className="font-medium">Inbound Network Active</span>
          </div>

          {/* Request Consultation Pill Button */}
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181512] hover:bg-[#B88746] text-[#F6F4EE] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            <span>Request a Consultation</span>
            <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <ArrowUpRight className="w-3 h-3 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#55514B] hover:text-[#181512] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#FFFFFF] border border-[#E2DDD1] rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-sm font-medium z-50 animate-fadeIn">
          <a
            href="#practice-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181512] hover:text-[#B88746] py-2 border-b border-[#E2DDD1]"
          >
            Practice Areas
          </a>
          <a
            href="#engagements"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181512] hover:text-[#B88746] py-2 border-b border-[#E2DDD1]"
          >
            Engagements
          </a>
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181512] hover:text-[#B88746] py-2 border-b border-[#E2DDD1]"
          >
            Selected Works
          </a>
          <a
            href="#hurdle-rate"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181512] hover:text-[#B88746] py-2 border-b border-[#E2DDD1]"
          >
            The Hurdle Rate
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181512] hover:text-[#B88746] py-2 border-b border-[#E2DDD1]"
          >
            Leadership
          </a>
          <a
            href="#inquiries"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181512] hover:text-[#B88746] py-2"
          >
            Inquiries
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-[#181512] text-[#F6F4EE] font-bold text-center flex items-center justify-center gap-2"
          >
            <span>Request a Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
