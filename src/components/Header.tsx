"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  PhoneCall,
  Workflow,
  MonitorSmartphone,
  ChevronDown,
  Sparkles,
  Zap,
} from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#08090C]/85 backdrop-blur-xl border-b border-white/10 shadow-espresso py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* DestiX AI Brand Emblem & Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="DestiX AI Home"
        >
          {/* Cybernetic Geometric Emblem */}
          <div className="relative flex size-9 items-center justify-center rounded-xl bg-[#0E1017] border border-cyan-500/30 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400">
            <span className="font-mono text-base font-bold tracking-tight text-cyan-400">
              X
            </span>
            <span className="absolute -top-1 -right-1 flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Desti<span className="text-cyan-400">X</span>
              </span>
              <span className="rounded bg-cyan-950/70 border border-cyan-500/30 px-1.5 py-0.5 text-[9px] font-mono font-semibold tracking-wider text-cyan-300">
                AI
              </span>
            </div>
            <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-slate-400">
              Autonomous Systems
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Capabilities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                pathname.startsWith("/services")
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              <span>Capabilities</span>
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[420px] transition-all duration-300 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E1017]/95 backdrop-blur-xl shadow-2xl divide-y divide-white/5">
                <Link
                  href="/services/voice-agents"
                  onClick={() => setServicesOpen(false)}
                  className="group flex items-start gap-4 p-4 transition-colors hover:bg-white/[0.04]"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-black">
                    <PhoneCall className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-semibold text-sm text-white group-hover:text-cyan-300">
                      Autonomous AI Voice Agents
                      <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">
                      Sub-350ms turn-taking, multi-accent fluency, zero wait queues.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/ai-os"
                  onClick={() => setServicesOpen(false)}
                  className="group flex items-start gap-4 p-4 transition-colors hover:bg-white/[0.04]"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 transition-colors group-hover:bg-indigo-500 group-hover:text-white">
                    <Workflow className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-semibold text-sm text-white group-hover:text-indigo-300">
                      Enterprise AI Operating System
                      <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">
                      Automated n8n pipelines linking CRM, WhatsApp & operations.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/3d-web"
                  onClick={() => setServicesOpen(false)}
                  className="group flex items-start gap-4 p-4 transition-colors hover:bg-white/[0.04]"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                    <MonitorSmartphone className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-semibold text-sm text-white group-hover:text-violet-300">
                      Websites That Convert & 3D WebGL
                      <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">
                      Award-grade interactive digital storefronts that command 5x trust.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/playbooks"
            className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
              isActive("/playbooks") ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            Playbooks
          </Link>

          <Link
            href="/case-studies"
            className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
              isActive("/case-studies") ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            Case Studies
          </Link>

          <Link
            href="/pricing"
            className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
              isActive("/pricing") ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            Pricing & ROI
          </Link>

          <Link
            href="/about"
            className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
              isActive("/about") ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            About & Founder
          </Link>

          <Link
            href="/contact"
            className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
              isActive("/contact") ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="btn-primary group inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider uppercase font-semibold"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0E1017] px-6 py-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400">
              Capabilities
            </span>
            <Link
              href="/services/voice-agents"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-cyan-400"
            >
              Autonomous Voice Agents
            </Link>
            <Link
              href="/services/ai-os"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-cyan-400"
            >
              Enterprise AI Operating System
            </Link>
            <Link
              href="/services/3d-web"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-cyan-400"
            >
              Websites That Convert & 3D WebGL
            </Link>

            <span className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400">
              Platform Navigation
            </span>
            <Link
              href="/playbooks"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-300 hover:text-cyan-400"
            >
              Production Playbooks (6 Blueprints)
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-300 hover:text-cyan-400"
            >
              Verified Client Case Studies
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-300 hover:text-cyan-400"
            >
              Pricing & Minute ROI Engine
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-300 hover:text-cyan-400"
            >
              About DestiX & Founder Ayush Meena
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-300 hover:text-cyan-400"
            >
              Strategy Consultation & Contact
            </Link>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-primary py-3 text-xs uppercase tracking-wider font-semibold"
              >
                Book 30-min strategy
              </button>
              <p className="text-center text-xs text-slate-500 font-mono">
                ayushmeenadestixai@gmail.com • Delhi NCR & Global
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
