"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Radio } from "lucide-react";

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
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#111216]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_-5px_rgba(0,245,160,0.1)]"
            : "bg-[#111216]/60 backdrop-blur-md border border-white/5"
        }`}
      >
        {/* Left: DestiX.AI Logo with live pulsating emerald beacon */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#16181F] border border-white/10 group-hover:border-[#00F5A0]/40 transition-colors">
            <span className="font-['Syne'] font-extrabold text-sm text-[#00F5A0] tracking-tighter">
              DX
            </span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00F5A0] animate-beacon" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00F5A0]" />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-['Syne'] font-bold text-lg tracking-tight text-[#F4F4F6] group-hover:text-white transition-colors">
              DestiX<span className="text-[#00F5A0]">.AI</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/25 text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#00F5A0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
              Live
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#7A7D87]">
          <a
            href="#voice"
            className="hover:text-[#F4F4F6] transition-colors py-1 hover:border-b hover:border-[#00F5A0]"
          >
            Autonomous Voice
          </a>
          <a
            href="#spatial-core"
            className="hover:text-[#F4F4F6] transition-colors py-1 hover:border-b hover:border-[#00F5A0]"
          >
            3D WebGL Architecture
          </a>
          <a
            href="#capabilities"
            className="hover:text-[#F4F4F6] transition-colors py-1 hover:border-b hover:border-[#00F5A0]"
          >
            Enterprise OS
          </a>
          <a
            href="#showcase"
            className="hover:text-[#F4F4F6] transition-colors py-1 hover:border-b hover:border-[#00F5A0]"
          >
            Case Studies
          </a>
          <a
            href="#pricing"
            className="hover:text-[#F4F4F6] transition-colors py-1 hover:border-b hover:border-[#00F5A0]"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-[#F4F4F6] transition-colors py-1 hover:border-b hover:border-[#00F5A0]"
          >
            FAQ
          </a>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#16181F]/90 hover:bg-[#1C202B] border border-white/10 hover:border-[#00F5A0]/50 text-xs sm:text-sm font-semibold text-[#F4F4F6] transition-all duration-300 shadow-[0_0_15px_-3px_rgba(0,245,160,0.15)] hover:shadow-[0_0_25px_-2px_rgba(0,245,160,0.35)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
            <span>Deploy an Agent</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00F5A0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#7A7D87] hover:text-[#F4F4F6] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#111216]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-sm font-medium z-50">
          <a
            href="#voice"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F4F4F6] hover:text-[#00F5A0] py-2 border-b border-white/5"
          >
            Autonomous Voice
          </a>
          <a
            href="#spatial-core"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F4F4F6] hover:text-[#00F5A0] py-2 border-b border-white/5"
          >
            3D WebGL Architecture
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F4F4F6] hover:text-[#00F5A0] py-2 border-b border-white/5"
          >
            Enterprise OS
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F4F4F6] hover:text-[#00F5A0] py-2 border-b border-white/5"
          >
            Case Studies
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F4F4F6] hover:text-[#00F5A0] py-2 border-b border-white/5"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F4F4F6] hover:text-[#00F5A0] py-2"
          >
            FAQ
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-[#00F5A0] text-[#08080A] font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,160,0.3)]"
          >
            <span>Deploy an Agent</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
