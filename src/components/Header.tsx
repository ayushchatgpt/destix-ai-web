"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
            ? "bg-[#FFFFFF]/90 backdrop-blur-xl border border-[#E2DDD1] shadow-[0_10px_35px_-10px_rgba(24,22,20,0.08)]"
            : "bg-[#FFFFFF]/75 backdrop-blur-md border border-[#E2DDD1]/80"
        }`}
      >
        {/* Logo: Desti (serif) + XAI (italic in warm cognac) + EST. 2026 // STUDIO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-['Instrument_Serif'] text-2xl font-bold tracking-tight text-[#181614]">
                Desti
              </span>
              <span className="font-['Instrument_Serif'] italic text-2xl font-bold text-[#B8652B]">
                XAI
              </span>
            </div>
            <span className="text-[9px] font-['JetBrains_Mono'] uppercase tracking-[0.22em] text-[#888277] -mt-1 font-semibold">
              EST. 2026 // STUDIO
            </span>
          </div>
        </Link>

        {/* Center Nav */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-['Plus_Jakarta_Sans'] font-medium text-[#55514B]">
          <a
            href="#how-we-build"
            className="hover:text-[#181614] transition-colors py-1 hover:border-b hover:border-[#B8652B]"
          >
            Capabilities
          </a>
          <a
            href="#playbooks"
            className="hover:text-[#181614] transition-colors py-1 hover:border-b hover:border-[#B8652B]"
          >
            Playbooks
          </a>
          <a
            href="#works"
            className="hover:text-[#181614] transition-colors py-1 hover:border-b hover:border-[#B8652B]"
          >
            Selected Work
          </a>
          <a
            href="#scoping-model"
            className="hover:text-[#181614] transition-colors py-1 hover:border-b hover:border-[#B8652B]"
          >
            The 5x Model
          </a>
          <a
            href="#leadership"
            className="hover:text-[#181614] transition-colors py-1 hover:border-b hover:border-[#B8652B]"
          >
            Leadership
          </a>
          <a
            href="#faq"
            className="hover:text-[#181614] transition-colors py-1 hover:border-b hover:border-[#B8652B]"
          >
            FAQ
          </a>
        </div>

        {/* Right: High-visibility pill button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#181614] hover:bg-[#B8652B] text-[#F6F4EE] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            <span>Book a Consultation</span>
            <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#55514B] hover:text-[#181614] transition-colors"
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
            href="#how-we-build"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181614] hover:text-[#B8652B] py-2 border-b border-[#E2DDD1]"
          >
            Capabilities
          </a>
          <a
            href="#playbooks"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181614] hover:text-[#B8652B] py-2 border-b border-[#E2DDD1]"
          >
            Playbooks
          </a>
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181614] hover:text-[#B8652B] py-2 border-b border-[#E2DDD1]"
          >
            Selected Work
          </a>
          <a
            href="#scoping-model"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181614] hover:text-[#B8652B] py-2 border-b border-[#E2DDD1]"
          >
            The 5x Model
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181614] hover:text-[#B8652B] py-2 border-b border-[#E2DDD1]"
          >
            Leadership
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#181614] hover:text-[#B8652B] py-2"
          >
            FAQ
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 py-3.5 rounded-xl bg-[#B8652B] text-[#F6F4EE] font-bold text-center flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
