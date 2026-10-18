"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  User,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Autonomous AI Voice Agents",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#06B6D4", "#3B82F6", "#10B981", "#F8FAFC"],
    });
  };

  return (
    <div className="min-h-screen bg-[#08090C] bg-cyber-grid text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <section className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Private Consultation</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              <Mail className="size-3.5" />
              Direct Engagement
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Let's audit your operations.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Book 30-min with Ayush.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
              Strict 5x ROI model audit or we politely decline.
              Schedule a strategy call or send a direct inquiry to discuss your AI voice telephony,
              automated CRM workflows, or custom 3D WebGL storefront.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
            {/* Contact Form */}
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 shadow-espresso">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white">Inquiry Dispatched</h3>
                  <p className="mt-3 text-sm text-slate-300 max-w-md mx-auto font-light">
                    Thank you, {formData.name}. Ayush Meena will personally review your operational profile
                    and follow up at <strong className="text-cyan-300">{formData.email}</strong> within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-primary px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Your Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Singhania"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#08090C] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Work Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#08090C] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Company Name / Domain
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Acme Corp (acme.com)"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#08090C] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Primary Strategic Focus
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#08090C] px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option>Autonomous AI Voice Agents</option>
                        <option>Enterprise AI Operating System</option>
                        <option>Websites That Convert & 3D WebGL</option>
                        <option>White-Label Agency Partnership</option>
                        <option>Full Architecture Audit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Current Operational Challenge or Call Volume
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your monthly call volume, current lead drop-off rate, or specific systems to integrate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#08090C] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-xs font-mono font-semibold uppercase tracking-wider"
                  >
                    <span>Lock In Operational Audit</span>
                  </button>

                  <p className="text-center text-xs font-mono text-slate-500">
                    Direct consultation with Ayush Meena. Confidentiality guaranteed under standard NDA.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-6">
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Direct Founder Email
                    </span>
                    <a
                      href="mailto:ayushmeenadestixai@gmail.com"
                      className="block font-medium text-sm text-white hover:text-cyan-300 mt-0.5 font-mono"
                    >
                      ayushmeenadestixai@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Headquarters & Laboratory
                    </span>
                    <div className="font-medium text-sm text-white mt-0.5">
                      Delhi NCR, India & Remote Global Deployments
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Response SLA
                    </span>
                    <div className="font-medium text-sm text-white mt-0.5">
                      Within 4 business hours • Active 24/7 Phone Line
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/30 p-7 text-white shadow-espresso">
                <h4 className="font-display text-2xl font-bold text-white">Prefer instant calendar booking?</h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-light">
                  Skip the form and pick an available strategy slot directly on Ayush Meena's calendar.
                </p>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-5 btn-primary inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider"
                >
                  <span>Open Calendar Scheduler</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FinalCtaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
