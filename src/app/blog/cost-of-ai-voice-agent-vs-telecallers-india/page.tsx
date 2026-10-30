"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Calculator,
  TrendingDown,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  ShieldAlert,
  Award,
  Zap,
} from "lucide-react";

export default function CostVsTelecallersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const costComparison = [
    {
      expense: "Monthly Salary / Operating Cost",
      human: "₹1,25,000 (₹25k × 5 representatives)",
      ai: "₹25,000 – ₹35,000 (Wholesale minutes)",
      savings: "72% lower",
    },
    {
      expense: "EPABX Dialer & Software Seats",
      human: "₹15,000 (₹3k × 5 CRM & dialer seats)",
      ai: "₹0 (Built-in SIP trunk webhooks)",
      savings: "100% saved",
    },
    {
      expense: "Team Lead & Quality Manager Overhead",
      human: "₹45,000 (1 manager auditing calls)",
      ai: "₹0 (Automated LLM call summaries)",
      savings: "100% saved",
    },
    {
      expense: "Recruitment & Onboarding Churn",
      human: "₹30,000 (Replacing 2 reps every 60 days)",
      ai: "₹0 (Deterministic state machine)",
      savings: "Zero churn",
    },
    {
      expense: "Total Monthly Outflow",
      human: "₹2,15,000 / month",
      ai: "₹35,000 / month (Approx.)",
      savings: "83.7% Net Savings",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
          <Calculator className="size-3.5 text-[#B88746]" />
          <span>FINANCIAL AUDIT &bull; UNIT ECONOMICS 2026</span>
        </div>

        <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[0.98] mb-6">
          Cost of AI Voice Agent vs. Human Telecallers in India{" "}
          <span className="italic text-[#B88746]">(2026 ROI Breakdown).</span>
        </h1>

        <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-8">
          By Ayush Meena (Principal AI Systems Architect at DestiX AI). How high-ticket real estate developers and service firms in Delhi NCR replace 5 human telecallers with one autonomous AI voice model at an 83% cost reduction while lifting qualification rates by 300%.
        </p>

        {/* Executive Summary Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs mb-14">
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
            The Mathematical Bottom Line
          </h2>
          <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Running a traditional 5-person telecalling floor in Delhi, Gurgaon, or Noida costs a minimum of <strong>₹2,15,000 per month</strong> when factoring in salaries, dialer seats, team lead overhead, and constant hiring churn. An autonomous AI voice agent handles identical or higher call volume for approximately <strong>₹35,000 per month</strong> on wholesale pass-through telephony.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono pt-4 border-t border-[#E2DDD1]/60">
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">Human Floor Cost</span>
              <span className="text-base font-bold text-red-600">₹2.15L / mo</span>
            </div>
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">DestiX AI Cost</span>
              <span className="text-base font-bold text-emerald-600">~₹35k / mo</span>
            </div>
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">Annual Net Savings</span>
              <span className="text-base font-bold text-[#B88746]">₹21.6 Lakhs</span>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Table */}
        <div className="mb-16">
          <h3 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-6">
            Direct Line-Item Cost Comparison
          </h3>

          <div className="overflow-x-auto rounded-3xl border border-[#E2DDD1] bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#181614] text-[#F6EFE2] border-b border-[#E2DDD1]">
                  <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider">Line Item</th>
                  <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">5 Human Telecallers</th>
                  <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#B88746]">1 DestiX AI Voice Agent</th>
                  <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-emerald-400">Net Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD1]">
                {costComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F4EE]/50 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-[#181614]">{row.expense}</td>
                    <td className="p-4 sm:p-5 text-[#6B655B]">{row.human}</td>
                    <td className="p-4 sm:p-5 font-semibold text-[#B88746] bg-[#B88746]/5">{row.ai}</td>
                    <td className="p-4 sm:p-5 font-semibold text-emerald-700">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* The Non-Monetary Advantages */}
        <div className="space-y-6 mb-16 text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
          <h3 className="font-['Instrument_Serif'] text-3xl text-[#181614]">
            Beyond the Balance Sheet: The Conversion Multipliers
          </h3>
          <p>
            The real cost of human telecallers is not just their monthly salary—it is the <strong>lost revenue from delayed callbacks</strong>:
          </p>
          <ul className="space-y-3 pl-4 border-l-2 border-[#B88746]">
            <li>
              <strong>Sub-45s Speed to Lead:</strong> Human callers take an average of 4 to 14 hours to follow up on ad leads. DestiX AI dials in under 45 seconds while the buyer is still holding their device.
            </li>
            <li>
              <strong>Zero Script Drift:</strong> Human callers forget qualification questions or skip objections when tired. DestiX AI adheres strictly to deterministic state machines with 100% compliance.
            </li>
            <li>
              <strong>Instant CRM &amp; WhatsApp Pass:</strong> While human callers spend 15 minutes manually updating spreadsheets, DestiX logs structured data and dispatches WhatsApp brochures in 3 seconds.
            </li>
          </ul>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-[#181614] text-[#F6EFE2] text-center">
          <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl mb-3">
            Ready to Model Your Specific Telecalling ROI?
          </h3>
          <p className="text-xs sm:text-sm text-[#C5BDB1] max-w-xl mx-auto mb-6">
            Book a 30-minute diagnostic session. We will audit your monthly call minutes, lead acquisition costs, and build your exact unit economics model.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#C5A059] text-[#181614] font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>Book 30-Min Diagnostic Audit</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
