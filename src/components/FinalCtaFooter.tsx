"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";

interface FinalCtaFooterProps {
  onOpenBooking: () => void;
}

export const FinalCtaFooter: React.FC<FinalCtaFooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="relative bg-[#050608] text-white overflow-hidden pt-24 pb-12 border-t border-white/10">
      {/* Cyber Mesh Glow Accents */}
      <div
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 size-[650px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Massive Call to Action Card */}
        <div className="glass-panel rounded-3xl p-10 md:p-16 text-center border border-white/10 shadow-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-cyan-300">
            <Sparkles className="size-3.5" />
            Direct Engagement with Founder Ayush Meena
          </span>

          <h2 className="mt-8 text-balance font-display text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Let AI do the heavy lifting.{" "}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              You take the credit.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300 font-light">
            Stop letting high-intent callers slip into voicemail or waiting 4 hours for reps to follow up.
            Deploy an autonomous phone system and custom WebGL digital storefront that prints revenue 24/7.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="btn-primary group inline-flex items-center gap-3 px-8 py-4 text-xs font-mono font-semibold uppercase tracking-wider"
            >
              <span>Book a 30-Minute Consultation</span>
              <ArrowUpRight className="size-4" />
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-xs font-mono font-semibold uppercase tracking-wider text-white transition-all hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
            >
              <Mail className="size-4 text-cyan-400" />
              <span>Contact Ayush Directly</span>
            </Link>
          </div>

          <div className="mt-8 text-xs font-mono text-slate-500">
            100% money-back deployment guarantee • Strictly verified 5x ROI model audit
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-white/10 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block font-display text-2xl font-bold tracking-tight text-white">
              Desti<span className="text-cyan-400">X</span> AI
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-slate-400 font-light">
              Engineered by Ayush Meena. Autonomous phone operations, custom enterprise AI operating systems,
              and category-defining 3D WebGL architectures.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="size-4 text-cyan-400" />
              <span>Delhi NCR, India & Remote Global</span>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Capabilities
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/voice-agents" className="hover:text-cyan-400 transition-colors">
                  Autonomous AI Voice Agents
                </Link>
              </li>
              <li>
                <Link href="/services/ai-os" className="hover:text-cyan-400 transition-colors">
                  Enterprise AI Operating System
                </Link>
              </li>
              <li>
                <Link href="/services/3d-web" className="hover:text-cyan-400 transition-colors">
                  Websites That Convert & 3D WebGL
                </Link>
              </li>
              <li>
                <Link href="/playbooks" className="hover:text-cyan-400 transition-colors">
                  Cold Database Revival Pipelines
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                  White-Label Agency Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/playbooks" className="hover:text-cyan-400 transition-colors">
                  Production Playbooks (6 Blueprints)
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-cyan-400 transition-colors">
                  Client Proof & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#live-demo" className="hover:text-cyan-400 transition-colors">
                  Live Voice Agent Console
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                  Transparent Pricing & Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  Founder & Leadership (Ayush Meena)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Private Consultation & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Direct Inquiries
            </h4>
            <div className="mt-4 space-y-3 text-xs text-slate-400 font-light">
              <p>
                Founder & CEO: <br />
                <strong className="text-white font-medium">Ayush Meena</strong>
              </p>
              <p>
                Email: <br />
                <a
                  href="mailto:ayushmeenadestixai@gmail.com"
                  className="text-cyan-400 hover:underline font-mono"
                >
                  ayushmeenadestixai@gmail.com
                </a>
              </p>
              <p>
                Production Domain: <br />
                <span className="text-white font-mono">ayush.company</span>
              </p>
            </div>
          </div>
        </div>

        {/* Base Giant Typography */}
        <div className="mt-20 border-t border-white/10 pt-12 pb-6 text-center select-none overflow-hidden">
          <h2 className="font-display text-[clamp(2.5rem,11.5vw,9.5rem)] font-bold tracking-[0.2em] text-white/[0.04] uppercase whitespace-nowrap leading-none transition-colors hover:text-cyan-400/[0.08]">
            D e s t i X A I
          </h2>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} DestiX AI (ayush.company). All rights reserved. Founded by Ayush Meena.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Delhi NCR & Global</span>
            <span>•</span>
            <span className="text-emerald-400">Sub-350ms Telephony Kernel</span>
            <span>•</span>
            <span>100% Custom Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
