"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import { ArrowUpRight, Globe, Layers, Sparkles, ShieldCheck, Zap, Gauge } from "lucide-react";

export default function WebsitesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const projects = [
    {
      num: "01",
      title: "Shade of Green — Japanese-Themed Luxury Villas",
      location: "Sarjapura, Bangalore",
      category: "Wabi-Sabi Spatial Architecture & High-Ticket Booking",
      desc: "Architectural digital storefront designed for luxury private villas. Features a 60 FPS interactive master plan viewer, floor plan switcher, gated WhatsApp brochure automation, and an autonomous voice agent that pre-screens buyer budgets and reserves private weekend site escorts.",
      stats: [
        { label: "Pipeline Generated", val: "₹18Cr+" },
        { label: "Site Visit Conversion", val: "3.4x" },
        { label: "Average Dwell Time", val: "4.8 mins" },
      ],
      tags: ["Master Plan Viewer", "Floor Plan Engine", "WhatsApp Integration", "Bespoke Next.js"],
      url: "https://ayush.company",
      domain: "Private Client Deployment",
    },
    {
      num: "02",
      title: "Luxury Editorial Brand Platform — Pranav Jha Studio",
      location: "Delhi NCR & Remote Global",
      category: "Swiss Editorial Typography & High-Trust Credibility",
      desc: "Category-defining digital portfolio built with tight typography grids, smooth scroll physics, and sub-second page transitions. Engineered to command high-ticket client authority and eliminate proposal price resistance.",
      stats: [
        { label: "PageSpeed Score", val: "99/100" },
        { label: "Cumulative Layout Shift", val: "0.00" },
        { label: "Inbound Contract Size", val: "+240%" },
      ],
      tags: ["Swiss Typography", "Kinetic Motion", "Tailwind CSS", "Editorial Layout"],
      url: "https://pranav-jha-portfolio.vercel.app",
      domain: "pranav-jha-portfolio.vercel.app",
    },
    {
      num: "03",
      title: "Spatial 3D Interactive Launch Platform — Digiirox Experience",
      location: "International Technology Studio",
      category: "Three.js WebGL Spatial Product Launch & Shaders",
      desc: "Immersive spatial WebGL interactive experience built for an international product unveiling. Featuring full 60 FPS Three.js viewport rendering, custom GLSL noise shaders, ambient spatial audio, and fluid micro-interactions.",
      stats: [
        { label: "Dwell Time Lift", val: "+340%" },
        { label: "WebGL FPS", val: "60 FPS" },
        { label: "Lead Capture Lift", val: "4.8x" },
      ],
      tags: ["Three.js WebGL", "GLSL Shaders", "Spatial Motion", "Interactive 3D"],
      url: "https://digiiroxinteractiveexperience.vercel.app",
      domain: "digiiroxinteractiveexperience.vercel.app",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-architectural-grid border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
              3D WEBGL &amp; DIGITAL ARCHITECTURE
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl leading-[0.96] text-[#181614] mb-8">
              Digital architectures that command{" "}
              <span className="italic text-[#B88746]">high-ticket authority.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#55514B] leading-relaxed mb-10 font-normal">
              Generic WordPress themes destroy buyer trust for ₹2.5 Cr+ luxury developments and elite practices. DestiX AI engineers bespoke Next.js and Three.js platforms that out-convert standard templates by 300%.
            </p>

            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm tracking-tight transition-all duration-300 shadow-sm"
            >
              <span>Commission a Digital Storefront</span>
              <ArrowUpRight className="w-4 h-4 text-[#F6F4EE]" />
            </button>
          </div>
        </div>
      </section>

      {/* Technical Standards Strip */}
      <section className="py-6 bg-[#131210] text-[#F6EFE2] border-b border-[#25221F]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-xs font-['JetBrains_Mono'] text-[#A89F93]">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#B88746]" />
            <span>95+ GOOGLE PAGESPEED</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#B88746]" />
            <span>SUB-1.2S GLOBAL CDN LOAD</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B88746]" />
            <span>ZERO VULNERABLE PLUGINS</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#B88746]" />
            <span>100% BESPOKE NEXT.JS &amp; THREE.JS</span>
          </div>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E2DDD1]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] uppercase font-bold mb-4">
            THE ARCHITECTURAL PHILOSOPHY
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.0] mb-8">
            Why WordPress templates destroy{" "}
            <span className="italic text-[#B88746]">buyer trust.</span>
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-[#55514B] leading-relaxed font-normal">
            <p>
              When an affluent buyer explores a ₹5 Crore villa or a ₹50,000 cosmetic medical procedure, they evaluate the digital interface within three seconds. Clunky page builders, slow plugins, layout shifts, and cookie-cutter designs signal an amateur organization.
            </p>
            <p>
              DestiX AI treats your website as high-value physical real estate. We engineer sub-second page performance, spatial 3D interactive model viewers, Swiss editorial typography, and seamless phone integration that converts curiosity browsers into committed private appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured In-Depth Case Studies */}
      <section className="py-24 sm:py-32 bg-[#F6F4EE] border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] uppercase font-bold mb-3">
              PRODUCTION CASEFILES
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.0] mb-6">
              Selected digital{" "}
              <span className="italic text-[#B88746]">architectures.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#55514B] leading-relaxed font-normal">
              Explore our live production storefronts engineered with Next.js App Router, Three.js, and GSAP motion.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((p) => (
              <div
                key={p.num}
                className="rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-12 hover:border-[#B88746]/50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#B88746] px-2.5 py-1 rounded bg-[#EDE8DC] border border-[#E2DDD1]">
                        CASEFILE {p.num}
                      </span>
                      <span className="text-xs font-['JetBrains_Mono'] text-[#888277]">
                        {p.location}
                      </span>
                    </div>

                    <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-2 leading-tight">
                      {p.title}
                    </h3>
                    <div className="text-xs font-['Plus_Jakarta_Sans'] font-semibold text-[#888277] uppercase tracking-wider mb-4">
                      {p.category}
                    </div>

                    <p className="text-sm sm:text-base text-[#55514B] leading-relaxed mb-6 font-normal">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] text-[#55514B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-semibold tracking-tight transition-all duration-300 shadow-xs group"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#B88746] group-hover:text-[#F6F4EE]" />
                      <span>Inspect Live: {p.domain}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <div className="lg:col-span-5 bg-[#F6F4EE] rounded-2xl border border-[#E2DDD1] p-6 sm:p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#888277] uppercase mb-6 flex items-center justify-between pb-3 border-b border-[#E2DDD1]">
                        <span>PERFORMANCE AUDIT</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {p.stats.map((s, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="font-['Instrument_Serif'] text-3xl font-bold text-[#181614]">
                              {s.val}
                            </div>
                            <div className="text-[11px] text-[#888277] font-['JetBrains_Mono'] leading-tight">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#E2DDD1] flex items-center justify-between text-xs text-[#888277] font-['JetBrains_Mono']">
                      <span>STACK: THREE.JS &amp; NEXT.JS</span>
                      <span className="text-[#B88746] font-semibold">100% BESPOKE</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
