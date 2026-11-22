"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import LiveCallDemoTrigger from "@/components/LiveCallDemoTrigger";
import { initAttribution } from "@/lib/attribution";
import {
  HeartPulse,
  PhoneCall,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Award,
  ChevronDown,
  Stethoscope,
  Activity,
  UserCheck,
  Lock,
  Moon,
  AlertTriangle,
  Check,
} from "lucide-react";

export default function ClinicsLandingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Clinic Revenue Loss Calculator State
  const [weeklyMissedCalls, setWeeklyMissedCalls] = useState<number>(22);
  const [avgProcedureValue, setAvgProcedureValue] = useState<number>(1800);
  const [conversionRate, setConversionRate] = useState<number>(30); // %

  useEffect(() => {
    initAttribution();
  }, []);

  // Financial calculations
  // Voicemail conversion is ~3.8%. DestiX conversion is user-selected (e.g. 30%).
  const monthlyMissedCalls = weeklyMissedCalls * 4.3;
  const recoveredPatientsPerMonth = Math.round(monthlyMissedCalls * (conversionRate / 100));
  const monthlyRecoveredRevenue = recoveredPatientsPerMonth * avgProcedureValue;
  const annualRecoveredRevenue = monthlyRecoveredRevenue * 12;

  const faqs = [
    {
      q: "How does DestiX Clinical Voice handle complex medical triage and post-op emergencies?",
      a: "Our clinical voice architecture includes a deterministic triage decision engine. If a caller reports acute symptoms, bleeding, sudden pain, or post-surgical distress, the agent immediately flags emergency status, provides pre-approved clinical reassurance, and dials your on-call physician's direct mobile number via warm SIP transfer within 4 seconds.",
    },
    {
      q: "Is patient voice and consultation data HIPAA and GDPR compliant?",
      a: "Yes. Telephony traffic is encrypted via TLS 1.3 and SRTP. We maintain strict zero-data-retention options where audio recordings are processed in ephemeral RAM without being stored on third-party public AI clouds. All consultation records and appointment notes are dispatched directly into your encrypted EHR/EMR with automated audit logs.",
    },
    {
      q: "Can the AI voice receptionist integrate directly with our practice management software?",
      a: "DestiX integrates natively with Jane App, Cliniko, Nextech, Kareo, Practo, Google Calendar, and Cal.com via secure bi-directional REST webhooks. The agent can check real-time provider availability across multiple treatment rooms, schedule consults, and dispatch instant SMS/WhatsApp calendar invites with pre-care instructions.",
    },
    {
      q: "How does the AI sound when speaking to anxious or hesitant patients?",
      a: "Unlike generic robotic IVR menus, our acoustic models use Cartesia Sonic neural voice engines with natural breath cadences, empathetic tone modulation, and conversational warmth. In blind testing across 800+ patient calls, over 89% of patients believed they were speaking directly with an in-clinic patient coordinator.",
    },
    {
      q: "What happens if a patient asks pricing questions or requires custom protocol quotes?",
      a: "The voice agent is loaded with your exact pricing guardrails, package inclusions, financing options (e.g., CareCredit or installment plans), and consultation fee policies. If a bespoke medical quote requires physician assessment, the agent smoothly explains the diagnostic process and books the baseline clinical evaluation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2DDD1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2DDD1] shadow-xs text-xs font-mono tracking-wider uppercase text-[#B88746]">
              <Moon className="w-3.5 h-3.5 text-[#B88746]" />
              <span>24/7 AUTONOMOUS CLINICAL VOICE RECEPTIONIST</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-[#181614]">
              Never lose an after-hours patient inquiry to a{" "}
              <span className="italic text-[#B88746]">lifeless voicemail</span>.
            </h1>
            <p className="text-base sm:text-xl text-[#55514B] font-normal leading-relaxed max-w-2xl mx-auto">
              62% of high-ticket elective procedure calls occur between 6 PM and 11 PM. DestiX AI answers in under 2 rings, triages patient concerns, and books consultations directly into your EHR 24 hours a day.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
            <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#B88746]">100%</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">After-Hours Answer Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#181614]">&lt; 1.2s</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Answer Speed</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#181614]">+42%</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Elective Consults Booked</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] text-center shadow-xs">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#B88746]">HIPAA</div>
              <div className="text-[11px] font-mono text-[#888277] uppercase mt-1">Encrypted Telephony</div>
            </div>
          </div>

          {/* Embedded Live Call Demo Widget */}
          <div className="max-w-3xl mx-auto mb-16">
            <LiveCallDemoTrigger
              defaultVertical="Private Clinics & Medspas"
              defaultAccent="Indian English & Hinglish"
              headline="Test The Clinical Voice AI On Your Personal Phone"
              subheadline="Enter your direct phone number below. Our healthcare voice receptionist will dial you in 30 seconds so you can test conversational triage, empathy, and appointment booking."
              theme="dark"
            />
          </div>

          {/* Social Proof / Anonymized Verified Case Dossier */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#EDE8DC] border border-[#D8D2C4] max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#B88746] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#B88746]" />
                  <span>Verified Clinical Case Dossier // Mutual NDA</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181614]">
                  Premier Aesthetic &amp; Dermatology Network
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B]">
                  Multi-Location Delhi NCR &amp; Dubai Clinics &bull; Captured 340+ after-hours elective inquiries per month with zero missed calls.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="px-4 py-2.5 rounded-xl bg-white border border-[#D8D2C4] text-center">
                  <div className="text-lg font-mono font-bold text-[#B88746]">$280k</div>
                  <div className="text-[10px] font-mono text-[#888277] uppercase">Added Annualized Rev</div>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white border border-[#D8D2C4] text-center">
                  <div className="text-lg font-mono font-bold text-[#181614]">0</div>
                  <div className="text-[10px] font-mono text-[#888277] uppercase">Missed Patient Calls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Crisis of After-Hours Missed Calls */}
      <section className="py-20 px-4 sm:px-6 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              THE AFTER-HOURS REVENUE DRAIN
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] leading-tight mb-4">
              When the clinic closes at 6 PM, your highest-value patients start searching
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] leading-relaxed">
              Prospective patients with discretionary income (working executives, parents, business owners) make personal medical decisions after dinner. If you don&apos;t answer live, they book the next clinic on Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 font-mono font-bold text-sm">
                01
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                Voicemails Don&apos;t Convert
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                Over 87% of patients hang up immediately when routed to voicemail. Those who do leave a message convert at under 4% by the time front-desk staff returns the call the next morning.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 font-mono font-bold text-sm">
                02
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                Front-Desk Chaos
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                During operating hours, your staff is juggling in-person patient check-ins, insurance processing, and payments. Inbound phone calls ring out while staff attends to patients at the counter.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="w-10 h-10 rounded-2xl bg-[#EDE8DC] border border-[#D8D2C4] flex items-center justify-center text-[#B88746] mb-4 font-mono font-bold text-sm">
                03
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181614] mb-2">
                Traditional Call Centers Fail
              </h4>
              <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed">
                Outsourced answering services know nothing about your clinical protocols, have no access to real-time doctor schedules, and take inaccurate scribbled messages that frustrate patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Clinic Revenue Recovery Calculator */}
      <section className="py-20 px-4 sm:px-6 bg-[#F6F4EE]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8DC] border border-[#D8D2C4] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              PRACTICE REVENUE AUDIT
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              Calculate the revenue lost to after-hours missed calls
            </h2>
            <p className="text-sm sm:text-base text-[#55514B]">
              Discover how much additional treatment revenue your practice could capture with 24/7 autonomous phone triage.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">ESTIMATED MISSED CALLS PER WEEK</span>
                  <span className="text-[#B88746] font-bold text-sm">
                    {weeklyMissedCalls} Calls/Week (~{Math.round(monthlyMissedCalls)}/mo)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="1"
                  value={weeklyMissedCalls}
                  onChange={(e) => setWeeklyMissedCalls(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>5 calls</span>
                  <span>40 calls</span>
                  <span>80+ calls/wk</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">AVERAGE TREATMENT / PROCEDURE VALUE</span>
                  <span className="text-[#181614] font-bold text-sm">
                    ${avgProcedureValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="8000"
                  step="100"
                  value={avgProcedureValue}
                  onChange={(e) => setAvgProcedureValue(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>$300 (Dental/Skin)</span>
                  <span>$3,500 (Aesthetic)</span>
                  <span>$8,000+ (Surgical)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                  <span className="text-[#55514B]">ESTIMATED INQUIRY-TO-BOOKING CONVERSION</span>
                  <span className="text-emerald-600 font-bold text-sm">
                    {conversionRate}% Booking Rate
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#EDE8DC] rounded-lg appearance-none cursor-pointer accent-[#B88746]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888277] mt-1">
                  <span>10% (Conservative)</span>
                  <span>30% (Standard)</span>
                  <span>60% (High-Intent)</span>
                </div>
              </div>
            </div>

            {/* Calculations Outcome (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#131210] text-[#F6F4EE] border border-[#2D2823] space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#B88746]">
                ANNUALIZED REVENUE CAPTURE ESTIMATE
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#888277]">NEW ANNUALIZED CLINICAL REVENUE</div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#F6F4EE]">
                  ${annualRecoveredRevenue.toLocaleString()}
                </div>
                <div className="text-xs font-mono text-[#B88746] mt-0.5">
                  &asymp; ${monthlyRecoveredRevenue.toLocaleString()} Net Added per Month
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#2D2823] text-xs font-mono">
                <div>
                  <div className="text-[#888277]">PATIENTS RECOVERED</div>
                  <div className="text-sm font-bold text-emerald-400">+{recoveredPatientsPerMonth} patients/mo</div>
                </div>
                <div>
                  <div className="text-[#888277]">FRONT-DESK TIME</div>
                  <div className="text-sm font-bold text-[#F6F4EE]">~35 hrs/mo saved</div>
                </div>
              </div>

              <button
                onClick={() => setBookingOpen(true)}
                className="w-full py-3.5 rounded-xl bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-bold text-xs uppercase font-mono tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Deploy 24/7 Clinical Voice AI</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: DestiX Clinical AI vs Answering Bureau vs Voicemail */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-[#E2DDD1]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              HEAD-TO-HEAD COMPARISON
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              How DestiX Clinical Voice outperforms traditional answering methods
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#E2DDD1] text-xs font-mono uppercase text-[#888277]">
                  <th className="py-4 px-4 font-normal">Feature</th>
                  <th className="py-4 px-4 bg-[#EDE8DC]/50 text-[#B88746] font-bold rounded-t-xl">
                    DestiX Clinical Voice AI
                  </th>
                  <th className="py-4 px-4 font-normal">Third-Party Answering Service</th>
                  <th className="py-4 px-4 font-normal">Clinic Voicemail</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm divide-y divide-[#E2DDD1]">
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Availability</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-emerald-600">
                    24/7/365 Zero Rings
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">Limited shifts / Hold queues</td>
                  <td className="py-4 px-4 text-rose-600">Passive (No Interaction)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">EHR Calendar Integration</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-emerald-600">
                    Direct Bi-Directional Sync
                  </td>
                  <td className="py-4 px-4 text-rose-600">Cannot book; sends email notes</td>
                  <td className="py-4 px-4 text-rose-600">Zero integration</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Emergency Protocol Triage</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-bold text-[#181614]">
                    Deterministic Warm Transfer (&lt;4s)
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">Slow manual paging</td>
                  <td className="py-4 px-4 text-rose-600">Dangerous delay for patients</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Procedure Knowledge</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-semibold text-[#181614]">
                    Custom Clinic Protocols Loaded
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">Generic script readers</td>
                  <td className="py-4 px-4 text-rose-600">None</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#181614]">Cost Structure</td>
                  <td className="py-4 px-4 bg-[#EDE8DC]/30 font-mono font-semibold text-[#B88746]">
                    Zero per-minute SaaS tax
                  </td>
                  <td className="py-4 px-4 text-[#55514B]">$1.50 - $2.50 per minute billed</td>
                  <td className="py-4 px-4 text-rose-600">Massive opportunity loss</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#F6F4EE] border-t border-[#E2DDD1]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8DC] border border-[#D8D2C4] text-[11px] font-mono text-[#B88746] uppercase tracking-wider mb-3">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181614] mb-4">
              Clinical Voice AI Deployment Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E2DDD1] bg-white overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#181614] hover:text-[#B88746] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B88746] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Deployment Footer */}
      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService="24/7 Autonomous Clinical Voice AI Receptionist"
      />
    </div>
  );
}