"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { BookingModal } from "@/components/BookingModal";
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Activity,
} from "lucide-react";

export default function ClinicVoiceAgentPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const features = [
    {
      title: "24/7 Zero-Hold Patient Scheduling",
      desc: "Answers incoming clinic calls on the second ring, even during peak rush hours, lunch breaks, and late nights when reception desks are closed.",
      metric: "< 45s",
      tag: "SPEED TO CARE",
    },
    {
      title: "Confidential Procedure & Treatment Screening",
      desc: "Pre-qualifies patient enquiries for aesthetic dermatology, hair transplants, dental implants, and elective surgeries based on your clinic's protocols.",
      metric: "100%",
      tag: "TRIAGE PROTOCOL",
    },
    {
      title: "Direct Calendar Booking & WhatsApp Pass",
      desc: "Syncs directly into Google Calendar, Practo, or custom CRM and delivers an instant clinic map and appointment confirmation over WhatsApp.",
      metric: "Instant",
      tag: "APPOINTMENT PASS",
    },
    {
      title: "Dual English & Hindi Medical Vocabulary",
      desc: "Trained on medical terminology and treatment queries in natural English and conversational Hindi to keep patients comfortable.",
      metric: "Sub-450ms",
      tag: "BILINGUAL ACCURACY",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Activity className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">CLINICS • HEALTHCARE • DELHI NCR</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Agents for{" "}
            <span className="italic text-[#B88746]">Clinics in Delhi NCR.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B655C] leading-relaxed max-w-2xl mb-8">
            Never miss a patient consultation call again. DestiX AI installs autonomous voice receptionists that book appointments, triage incoming patient enquiries, and send WhatsApp directions 24/7 across Delhi, Gurugram, and Noida.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all shadow-md group"
            >
              <span>Deploy Clinic Voice Receptionist</span>
              <ArrowUpRight className="size-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/locations/delhi-ncr/ai-voice-agents"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#EFECE4] border border-[#E2DDD1] text-xs font-mono text-[#181614] transition-colors"
            >
              <MapPin className="size-3.5 text-[#B88746]" />
              <span>All Delhi NCR Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 border-t border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-[#B88746] font-semibold">
                      {item.tag}
                    </span>
                    <span className="font-['Instrument_Serif'] text-2xl text-[#181614] italic">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6B655C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
