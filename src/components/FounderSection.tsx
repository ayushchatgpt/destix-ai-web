"use client";

import React from "react";
import Image from "next/image";
import { Mail, MapPin, ShieldCheck, ArrowUpRight, Award, Flame, CheckCircle2 } from "lucide-react";

interface FounderSectionProps {
  onOpenBooking: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenBooking }) => {
  const badges = [
    { label: "Founder Led", desc: "Direct engineering access to the CEO" },
    { label: "Bootstrapped & Profitable", desc: "No investor pressure, 100% client aligned" },
    { label: "Hands-on Deployment", desc: "Every prompt & pipeline personally verified" },
    { label: "Zero Slideware", desc: "Production code, live voice agents, real ROI" },
  ];

  return (
    <section id="founder" className="relative bg-[#0A0C12] px-6 py-24 md:px-10 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left: Founder Dark Portrait Card */}
          <div className="group relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-white/10 bg-[#0E1017] shadow-espresso">
              <Image
                src="/images/ayush-meena-dark.jpg"
                alt="Ayush Meena, Founder & CEO of DestiX AI"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/20 to-transparent" />

              {/* Founder Tag on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold text-cyan-300 border border-cyan-500/30">
                  <Flame className="size-3.5 fill-current text-cyan-400" />
                  Founder & Principal Engineer
                </div>
                <h4 className="mt-2 font-display text-2xl font-bold text-white">Ayush Meena</h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <MapPin className="size-3.5 text-cyan-400" />
                  <span>Delhi NCR & Global Deployments</span>
                </div>
              </div>
            </div>

            {/* Decorative Stamp */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#131620] p-4 shadow-espresso text-xs backdrop-blur-md">
              <span className="block font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                Direct Accountability
              </span>
              <span className="font-semibold text-white">
                No junior account handoffs
              </span>
            </div>
          </div>

          {/* Right: Leadership Editorial Copy */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              // Engineering Leadership
            </span>

            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.05]">
              Ayush Meena,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Founder & CEO
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 font-light">
              Ayush leads DestiX AI, engineering autonomous systems that combine high-end creative design
              with autonomous AI phone operations. Bootstrapped, hands-on, and shipping real revenue-generating
              products without corporate bloat or offshore agency bureaucracy.
            </p>

            <blockquote className="mt-6 rounded-2xl border-l-2 border-cyan-400 bg-white/[0.03] p-5 border border-white/5 shadow-espresso">
              <p className="text-base text-slate-200 leading-relaxed font-light italic">
                "If the unit economics and conversion math don't clear a 5x return on our discovery call,
                I will personally decline the project. We don't build toys or robotic experiments. We build
                hardened phone operations and digital storefronts that print revenue."
              </p>
              <footer className="mt-3 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                — Ayush Meena, Founder & CEO
              </footer>
            </blockquote>

            {/* 4 Badges Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    <span className="font-semibold text-xs text-white">{badge.label}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400 font-light leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <button
                onClick={onOpenBooking}
                className="btn-primary group inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider"
              >
                <span>Book 30-min with Ayush</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="mailto:ayushmeenadestixai@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-colors"
              >
                <Mail className="size-4 text-cyan-400" />
                <span>ayushmeenadestixai@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
