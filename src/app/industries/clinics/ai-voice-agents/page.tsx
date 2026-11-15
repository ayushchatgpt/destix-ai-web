"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  HeartPulse,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Bell,
} from "lucide-react";

export default function ClinicsIndustryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const clinicFeatures = [
    {
      title: "Sub-2 Rings Answering (Zero Missed Patients)",
      desc: "Answers simultaneous incoming calls instantly during peak morning rush. Patients never encounter busy tones or lengthy 10-minute hold queues.",
      icon: PhoneCall,
      tag: "ZERO WAIT TIME",
    },
    {
      title: "Calendar Booking & Doctor Slot Allocation",
      desc: "Connects directly with clinic management software (Practo, Kareo, AthenaHealth, Dentrix). Books consultations by specialty and doctor availability.",
      icon: Calendar,
      tag: "EHR / EMR SYNC",
    },
    {
      title: "Automated WhatsApp Reminders (-44% No-Shows)",
      desc: "Sends instant appointment confirmation and fasting/preparation guidelines. Follows up 24h prior, allowing patients to confirm or reschedule effortlessly.",
      icon: Bell,
      tag: "44% LOWER NO-SHOWS",
    },
    {
      title: "Pre-Visit Triage & Symptom Intake",
      desc: "Gathers preliminary reason for visit, symptom duration, and existing medication lists to brief doctors prior to patient arrival.",
      icon: HeartPulse,
      tag: "CLINICAL TRIAGE",
    },
    {
      title: "HIPAA & DPDP Sovereign Compliance",
      desc: "Strict cryptographic data redaction. Audio streams and transcripts are processed in private memory without persistent storage on unauthorized third-party servers.",
      icon: ShieldCheck,
      tag: "DATA PRIVACY",
    },
    {
      title: "After-Hours & Emergency Routing",
      desc: "Distinguishes routine appointment requests from acute emergencies. Instantly triggers priority transfers to on-call duty medical officers.",
      icon: Clock,
      tag: "24/7 TRIAGE",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7D7871] uppercase">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#7D7871]">Industries</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Clinics & Healthcare</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Healthcare Telephony
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              AI Voice Receptionists for Clinics & Medical Centers
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Eliminate patient hold times and front-desk overload. DestiX AI deploys empathetic, HIPAA-compliant voice receptionists answering under 2 rings, coordinating doctor schedules, and drastically cutting no-shows.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy Clinic Receptionist</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/ai-receptionist"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                AI Receptionist Specs
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <feat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8F6426] px-2.5 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/20">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1817] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#5A554E] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Healthcare Practice Growth
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Provide 24/7 Responsive Patient Care
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Empower your clinical staff to focus on in-person patient treatment while DestiX AI manages your incoming phone lines with clinical precision.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission Clinic System
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
