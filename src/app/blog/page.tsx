"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import { ArrowUpRight, Award, Calendar, ChevronRight, Sparkles } from "lucide-react";

export default function BlogIndexPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const posts = [
    {
      slug: "best-ai-voice-agents-agency-delhi-ncr",
      category: "INDUSTRY AUDIT • 2026",
      date: "October 2026",
      readTime: "6 min read",
      title: "Best AI Voice Agent Agency in Delhi NCR (2026 Rankings & Benchmarks)",
      desc: "Comprehensive technical audit of conversational voice infrastructure for service firms, medical clinics, and luxury real estate across New Delhi, Gurugram, and Noida.",
      author: "Ayush Meena",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-36 sm:pt-44 pb-20 max-w-5xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Sparkles className="size-3.5 text-[#B88746]" />
            <span>TECHNICAL DISPATCHES &amp; INDUSTRY AUDITS</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl text-[#181614] leading-[0.95] mb-6">
            DestiX AI <span className="italic text-[#B88746]">Research Dossiers.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6B655C] leading-relaxed">
            In-depth technical evaluations, latency benchmarks, and conversational systems architecture engineered by Ayush Meena.
          </p>
        </div>

        {/* Post Grid */}
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${post.slug}`}
              className="block p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DDD1] hover:border-[#B88746]/60 transition-all shadow-xs group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono">
                <span className="text-[#B88746] font-semibold">{post.category}</span>
                <span className="text-[#8C8275]">{post.date} • {post.readTime}</span>
              </div>
              <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] group-hover:text-[#B88746] transition-colors mb-3 leading-tight">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-[#6B655C] leading-relaxed mb-6 max-w-3xl">
                {post.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#F0ECE2] text-xs font-mono">
                <span className="text-[#181614]">Author: <strong>{post.author}</strong></span>
                <div className="inline-flex items-center gap-1.5 text-[#B88746] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Full Audit</span>
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
