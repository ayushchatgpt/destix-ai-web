"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Download,
  Users,
  Clock,
} from "lucide-react";

export default function RoiCalculatorPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "GBP" | "EUR" | "AED" | "INR">("USD");
  const [monthlyMinutes, setMonthlyMinutes] = useState(25000);
  const [humanReps, setHumanReps] = useState(6);
  const [leadFormSubmitted, setLeadFormSubmitted] = useState(false);
  const [execEmail, setExecEmail] = useState("");

  const currencyConfig = {
    USD: { symbol: "$", rate: 1, humanSalaryPerRepYear: 42000, destixPerMin: 0.045, saasPerMin: 0.22 },
    GBP: { symbol: "£", rate: 0.82, humanSalaryPerRepYear: 32000, destixPerMin: 0.038, saasPerMin: 0.18 },
    EUR: { symbol: "€", rate: 0.95, humanSalaryPerRepYear: 38000, destixPerMin: 0.042, saasPerMin: 0.20 },
    AED: { symbol: "AED ", rate: 3.67, humanSalaryPerRepYear: 96000, destixPerMin: 0.16, saasPerMin: 0.80 },
    INR: { symbol: "₹", rate: 84.5, humanSalaryPerRepYear: 420000, destixPerMin: 4.8, saasPerMin: 18.5 },
  };

  const currentCfg = currencyConfig[currency];

  const calculations = useMemo(() => {
    const annualMinutes = monthlyMinutes * 12;
    const currentHumanCost = humanReps * currentCfg.humanSalaryPerRepYear;
    const genericSaasCost = annualMinutes * currentCfg.saasPerMin;
    const destixAnnualTelephony = annualMinutes * currentCfg.destixPerMin;
    const destixEstimatedImplementation = currency === "INR" ? 120000 : currency === "AED" ? 28000 : 8500 * currentCfg.rate;
    const destixTotalYear1Cost = destixAnnualTelephony + destixEstimatedImplementation;

    const annualSavingsVsHuman = Math.max(0, currentHumanCost - destixTotalYear1Cost);
    const annualSavingsVsSaas = Math.max(0, genericSaasCost - destixTotalYear1Cost);
    const roiMultiplier = destixTotalYear1Cost > 0 ? (currentHumanCost / destixTotalYear1Cost).toFixed(1) : "5.0";

    return {
      currentHumanCost,
      genericSaasCost,
      destixTotalYear1Cost,
      destixAnnualTelephony,
      annualSavingsVsHuman,
      annualSavingsVsSaas,
      roiMultiplier,
    };
  }, [monthlyMinutes, humanReps, currency, currentCfg]);

  const formatNumber = (num: number) => {
    return Math.round(num).toLocaleString();
  };

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
            <span className="text-[#7D7871]">Tools</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">AI ROI & Unit Cost Calculator</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Financial Engineering Asset
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
              Enterprise AI ROI & Telephony Unit Cost Calculator
            </h1>
            <p className="text-lg text-[#5A554E] leading-relaxed mb-8 max-w-3xl">
              Model the exact financial return of deploying sovereign, sub-435ms voice telephony. Compare full-time headcount and markups from US SaaS wrappers against DestiX AI wholesale pass-through economics.
            </p>

            {/* Currency Selector */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              {(["USD", "GBP", "EUR", "AED", "INR"] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                    currency === curr
                      ? "bg-[#1A1817] text-[#F6F4EE] shadow-xs"
                      : "text-[#7D7871] hover:text-[#1A1817]"
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Calculator Workspace */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Sliders */}
            <div className="lg:col-span-5 p-8 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#1A1817] mb-6">
                  Operational Parameters
                </h3>

                {/* Slider 1: Monthly Minutes */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#7D7871]">
                      Monthly Call Volume (Minutes)
                    </label>
                    <span className="text-lg font-serif text-[#1A1817] font-semibold">
                      {formatNumber(monthlyMinutes)} min
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={250000}
                    step={5000}
                    value={monthlyMinutes}
                    onChange={(e) => setMonthlyMinutes(Number(e.target.value))}
                    className="w-full accent-[#B88746] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#A8A29E] mt-1">
                    <span>5k</span>
                    <span>100k</span>
                    <span>250k+</span>
                  </div>
                </div>

                {/* Slider 2: Current Reps */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#7D7871]">
                      Current Telecallers / Support Reps
                    </label>
                    <span className="text-lg font-serif text-[#1A1817] font-semibold">
                      {humanReps} Full-Time Reps
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={40}
                    step={1}
                    value={humanReps}
                    onChange={(e) => setHumanReps(Number(e.target.value))}
                    className="w-full accent-[#B88746] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#A8A29E] mt-1">
                    <span>1 Rep</span>
                    <span>20 Reps</span>
                    <span>40 Reps</span>
                  </div>
                </div>

                {/* Assumptions Card */}
                <div className="p-4 rounded-xl border border-[#E2DDD1] bg-[#F6F4EE] space-y-2 text-xs text-[#5A554E]">
                  <div className="flex justify-between">
                    <span>DestiX AI Pass-Through Telephony:</span>
                    <span className="font-mono text-[#8F6426] font-semibold">
                      {currentCfg.symbol}{currentCfg.destixPerMin}/min
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Venture SaaS Average Markups:</span>
                    <span className="font-mono text-[#7D7871]">
                      {currentCfg.symbol}{currentCfg.saasPerMin}/min
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Annual Cost per Human Rep:</span>
                    <span className="font-mono text-[#7D7871]">
                      {currentCfg.symbol}{formatNumber(currentCfg.humanSalaryPerRepYear)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2DDD1]">
                <p className="text-xs text-[#7D7871] leading-relaxed">
                  * DestiX AI charges wholesale pass-through per-minute rates directly from telecom carriers with 0% software seat taxes.
                </p>
              </div>
            </div>

            {/* Live Financial Outputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Massive ROI Banner */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                      Projected Hurdle Rate
                    </span>
                    <div className="text-5xl sm:text-6xl font-serif text-[#F6F4EE]">
                      {calculations.roiMultiplier}x ROI
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#A8A29E] block mb-1">
                      Annual Net Savings
                    </span>
                    <div className="text-3xl sm:text-4xl font-serif text-[#B88746]">
                      {currentCfg.symbol}{formatNumber(calculations.annualSavingsVsHuman)}
                    </div>
                    <span className="text-[11px] font-mono text-[#A8A29E]">vs. current human telecalling payroll</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs">
                  <div>
                    <div className="text-[#A8A29E] font-mono mb-1">HUMAN PAYROLL / YR</div>
                    <div className="text-lg font-serif text-[#F6F4EE]">
                      {currentCfg.symbol}{formatNumber(calculations.currentHumanCost)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#A8A29E] font-mono mb-1">SAAS WRAPPERS / YR</div>
                    <div className="text-lg font-serif text-[#F6F4EE]">
                      {currentCfg.symbol}{formatNumber(calculations.genericSaasCost)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#B88746] font-mono mb-1">DESTIX AI TOTAL / YR</div>
                    <div className="text-lg font-serif text-[#B88746] font-semibold">
                      {currentCfg.symbol}{formatNumber(calculations.destixTotalYear1Cost)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Executive Lead Capture for Full Audit */}
              <div className="p-8 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
                <h4 className="font-serif text-xl text-[#1A1817] mb-2">
                  Request Custom Financial Model & Architecture Blueprint
                </h4>
                <p className="text-xs text-[#5A554E] leading-relaxed mb-6">
                  Receive a detailed 12-page executive summary comparing your exact SIP trunk topologies, CRM latency, and projected 12-month savings signed off by Principal Systems Architect Ayush Meena.
                </p>

                {leadFormSubmitted ? (
                  <div className="p-4 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 text-xs font-mono text-[#8F6426] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8F6426]" />
                    <span>Audit dispatched to {execEmail}. We will connect within 4 business hours.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (execEmail) setLeadFormSubmitted(true);
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter corporate executive email"
                      value={execEmail}
                      onChange={(e) => setExecEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl border border-[#E2DDD1] bg-[#F6F4EE] text-xs text-[#1A1817] focus:outline-hidden focus:border-[#B88746]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#1A1817] text-[#F6F4EE] rounded-xl text-xs font-medium tracking-wide hover:bg-[#33302C] transition-colors whitespace-nowrap"
                    >
                      Export Financial Audit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Validation Callout */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Contractual Guarantee
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                The Strict 5x Hurdle Rate Commitment
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                DestiX AI refuses engagements where a minimum 5x projected ROI cannot be modeled and validated prior to contract execution. We align purely on operational margin creation.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission Financial Review
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
