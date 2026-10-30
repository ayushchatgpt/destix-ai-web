"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  Phone,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Autonomous AI Voice Telephony",
    volume: "500 - 2,500 leads/mo",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/diagnostic-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: "Via Contact Form",
          selectedService: formData.service,
          selectedWindow: formData.volume,
          notes: formData.message,
          telemetry: {
            currentSection: "/contact",
            referrer: typeof document !== "undefined" ? document.referrer || "Direct" : "Direct",
            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "Unknown",
          },
        }),
      });
    } catch (err) {
      console.error("Contact intake dispatch error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#B88746", "#C5A059", "#181614", "#F6F4EE"],
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 bg-architectural-grid border-b border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
              PRIVATE DESK // INTAKE & SCHEDULING
            </div>

            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl leading-[0.96] text-[#181614] mb-8">
              Let AI do the heavy lifting.{" "}
              <span className="italic text-[#B88746]">You bank the revenue.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#55514B] leading-relaxed mb-10 font-normal">
              Schedule an unhurried 30-minute diagnostic session with Principal Ayush Meena or dispatch an operational intake dossier below. We audit your lead leakage against our strict 5x hurdle rate mandate.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#B88746] hover:bg-[#A37336] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm"
              >
                <span>Direct Calendar Booking</span>
                <Calendar className="w-4 h-4 text-[#F6F4EE]" />
              </button>

              <a
                href="mailto:ayushmeenadestixai@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#E2DDD1] bg-[#FFFFFF] hover:bg-[#EDE8DC] text-[#181614] font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#B88746]" />
                <span>ayushmeenadestixai@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Intake Form & Direct Channels Grid */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="bg-[#FFFFFF] border border-[#E2DDD1] rounded-3xl p-8 sm:p-12 shadow-[0_15px_45px_-15px_rgba(24,22,20,0.06)]">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#EDE8DC] text-[#B88746] border border-[#E2DDD1] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-3">
                  Operational Dossier Received
                </h3>
                <p className="text-sm font-['Plus_Jakarta_Sans'] text-[#55514B] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-[#181614]">{formData.name}</strong>. Ayush Meena will personally analyze your operational profile and respond to <strong className="text-[#B88746]">{formData.email}</strong> within 4 business hours.
                </p>
                <div className="space-y-3 max-w-sm mx-auto mb-6">
                  <a
                    href={`mailto:ayushmeenadestixai@gmail.com?subject=${encodeURIComponent(`[Operational Dossier] ${formData.name} - ${formData.company}`)}&body=${encodeURIComponent(`Hi Ayush,\n\nI submitted an inquiry via ayush.company:\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nVolume: ${formData.volume}\nNotes: ${formData.message}`)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#181614] hover:bg-[#B88746] text-white text-xs font-mono font-semibold transition-colors shadow-xs"
                  >
                    <Mail className="size-3.5" />
                    <span>Send Email Notification to Ayush</span>
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Hi Ayush, I just submitted an inquiry on ayush.company:\n\n• Name: ${formData.name}\n• Company: ${formData.company}\n• Service: ${formData.service}\n• Message: ${formData.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-mono font-semibold transition-colors shadow-xs"
                  >
                    <span>Ping Ayush on WhatsApp for Rapid Response</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B88746] text-[#F6F4EE] text-xs font-semibold hover:bg-[#A37438]"
                  >
                    <span>Add 30-min Call to Calendar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E2DDD1] text-[#181614] text-xs font-semibold hover:bg-[#EDE8DC]"
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#B88746] font-semibold mb-2">
                    CONFIDENTIAL INTAKE
                  </div>
                  <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-2">
                    Request an operational audit.
                  </h2>
                  <p className="text-xs font-['Plus_Jakarta_Sans'] text-[#888277]">
                    Strict confidentiality under standard mutual non-disclosure agreement.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#55514B] mb-2 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Vikram Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DDD1] bg-[#FDFCFB] px-4 py-3 text-sm text-[#181614] placeholder-[#888277] focus:border-[#B88746] focus:bg-[#FFFFFF] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#55514B] mb-2 font-semibold">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="vikram@luxuryestates.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DDD1] bg-[#FDFCFB] px-4 py-3 text-sm text-[#181614] placeholder-[#888277] focus:border-[#B88746] focus:bg-[#FFFFFF] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#55514B] mb-2 font-semibold">
                      Company Name / URL *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sovereign Living (sovereign.com)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DDD1] bg-[#FDFCFB] px-4 py-3 text-sm text-[#181614] placeholder-[#888277] focus:border-[#B88746] focus:bg-[#FFFFFF] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#55514B] mb-2 font-semibold">
                      Monthly Lead / Call Volume
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DDD1] bg-[#FDFCFB] px-4 py-3 text-sm text-[#181614] focus:border-[#B88746] focus:bg-[#FFFFFF] focus:outline-none transition-colors"
                    >
                      <option>&lt; 500 inquiries / month</option>
                      <option>500 - 2,500 inquiries / month</option>
                      <option>2,500 - 10,000 inquiries / month</option>
                      <option>10,000+ inquiries / month (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#55514B] mb-2 font-semibold">
                    Primary Strategic Focus *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-[#E2DDD1] bg-[#FDFCFB] px-4 py-3 text-sm text-[#181614] focus:border-[#B88746] focus:bg-[#FFFFFF] focus:outline-none transition-colors"
                  >
                    <option>Autonomous AI Voice Telephony (&lt;45s speed to lead)</option>
                    <option>Bespoke 3D WebGL Digital Architecture & Storefront</option>
                    <option>AI Operating System & Automated n8n CRM Pipelines</option>
                    <option>Complete Full-Circuit Conversion Overhaul</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#55514B] mb-2 font-semibold">
                    Current Operational Bottleneck / Challenge
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your current lead follow-up delays, receptionist overload, or 3D web requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-[#E2DDD1] bg-[#FDFCFB] px-4 py-3 text-sm text-[#181614] placeholder-[#888277] focus:border-[#B88746] focus:bg-[#FFFFFF] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full py-4 rounded-xl bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Submit Intake for Principal Review</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs font-['JetBrains_Mono'] text-[#888277]">
                  <ShieldCheck className="w-4 h-4 text-[#B88746]" />
                  <span>Guaranteed response within 4 hours by Ayush Meena</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Guarantee */}
          <div className="space-y-6">
            {/* Direct Email */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EDE8DC] text-[#B88746] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] font-semibold">
                    DIRECT FOUNDER DESK
                  </div>
                  <a
                    href="mailto:ayushmeenadestixai@gmail.com"
                    className="block font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#181614] hover:text-[#B88746] mt-1"
                  >
                    ayushmeenadestixai@gmail.com
                  </a>
                  <p className="text-xs font-['Plus_Jakarta_Sans'] text-[#55514B] mt-1">
                    Direct inbox of Principal Ayush Meena.
                  </p>
                  <div className="pt-2.5 mt-2.5 border-t border-[#E2DDD1]">
                    <a
                      href="https://www.linkedin.com/in/ayush-meena-065a89380/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] font-bold text-[#181614] hover:text-[#B88746] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-[#B88746]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      <span>Connect with Ayush on LinkedIn ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Headquarters */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EDE8DC] text-[#B88746] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] font-semibold">
                    STUDIO LOCATION & JURISDICTION
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#181614] mt-1">
                    Delhi NCR, India
                  </div>
                  <p className="text-xs font-['Plus_Jakarta_Sans'] text-[#55514B] mt-1">
                    Global deployments across London, Dubai, Singapore, and New York.
                  </p>
                </div>
              </div>
            </div>

            {/* SLA Response */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EDE8DC] text-[#B88746] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] font-semibold">
                    RESPONSE SLA GUARANTEE
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#181614] mt-1">
                    Under 4 Business Hours
                  </div>
                  <p className="text-xs font-['Plus_Jakarta_Sans'] text-[#55514B] mt-1">
                    Priority response on all operational diagnostic requests.
                  </p>
                </div>
              </div>
            </div>

            {/* Instant Calendar Widget Card */}
            <div className="p-7 rounded-2xl bg-[#EDE8DC] border border-[#E2DDD1]">
              <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#B88746] font-semibold mb-2">
                INSTANT SCHEDULING
              </div>
              <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                Prefer to pick a live calendar slot?
              </h3>
              <p className="text-xs font-['Plus_Jakarta_Sans'] text-[#55514B] leading-relaxed mb-5">
                Bypass the form and select an unhurried 30-minute diagnostic session directly on Ayush Meena's schedule.
              </p>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-3.5 rounded-xl bg-[#B88746] hover:bg-[#A37336] text-[#F6F4EE] font-semibold text-xs font-['Plus_Jakarta_Sans'] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Open 30-Min Calendar Picker</span>
                <Calendar className="w-4 h-4 text-[#F6F4EE]" />
              </button>
            </div>

            {/* 5x Hurdle Rate Espresso Box */}
            <div className="p-7 rounded-2xl bg-[#131210] text-[#F6F4EE] border border-[#2A2825]">
              <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#B88746] font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-[#B88746]" />
                THE 5X HURDLE RATE MANDATE
              </div>
              <p className="font-['Instrument_Serif'] text-lg text-[#F6F4EE] leading-snug mb-3">
                "If we cannot prove at least 5x the deployment cost in recovered revenue, we politely decline the engagement."
              </p>
              <p className="text-xs font-['Plus_Jakarta_Sans'] text-stone-400">
                You never risk capital on speculative experiments. Every engagement is strictly benchmarked against quantifiable unit economics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
