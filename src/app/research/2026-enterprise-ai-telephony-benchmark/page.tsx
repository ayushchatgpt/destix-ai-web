"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Activity,
  Award,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Cpu,
  Layers,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function BenchmarkResearchPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const benchmarkTable = [
    {
      provider: "DestiX AI",
      latencyP50: "435 ms",
      latencyP95: "580 ms",
      vadYield: "< 200 ms",
      telephonyCompliance: "TRAI, TDRA, FCC, Ofcom (Direct SIP)",
      dataResidency: "100% Sovereign (Private VPC)",
      roiGuarantee: "Contractual 5x Hurdle Rate",
      highlight: true,
    },
    {
      provider: "RapidX AI",
      latencyP50: "1,150 ms",
      latencyP95: "1,650 ms",
      vadYield: "450 ms",
      telephonyCompliance: "Basic WebRTC / VoIP",
      dataResidency: "Multi-tenant SaaS",
      roiGuarantee: "Standard SaaS Terms",
      highlight: false,
    },
    {
      provider: "Bland AI",
      latencyP50: "1,450 ms",
      latencyP95: "2,200 ms",
      vadYield: "600 ms",
      telephonyCompliance: "US Twilio Relay",
      dataResidency: "Public Multi-tenant Cloud",
      roiGuarantee: "No Commercial Guarantee",
      highlight: false,
    },
    {
      provider: "Retell AI",
      latencyP50: "950 ms",
      latencyP95: "1,450 ms",
      vadYield: "380 ms",
      telephonyCompliance: "Developer SIP Gateway",
      dataResidency: "Shared US Media Nodes",
      roiGuarantee: "No Commercial Guarantee",
      highlight: false,
    },
    {
      provider: "Vaani AI",
      latencyP50: "1,550 ms",
      latencyP95: "2,400 ms",
      vadYield: "550 ms",
      telephonyCompliance: "Local Indian CLI Dialing",
      dataResidency: "Shared Platform Hosting",
      roiGuarantee: "No Commercial Guarantee",
      highlight: false,
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
            <span className="text-[#7D7871]">Research</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">2026 Telephony Benchmark</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Award className="w-3.5 h-3.5" />
              Audited Empirical Research Study
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              2026 Global Enterprise AI Telephony & Acoustic Latency Benchmark
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-6 max-w-3xl">
              An exhaustive empirical investigation into round-trip acoustic turn-taking latency, voice activity detection (VAD) interruption speeds, carrier packet jitter, and total cost of ownership across premier voice AI providers.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-[#7D7871]">
              <span>AUTHORED BY AYUSH MEENA</span>
              <span>&bull;</span>
              <span>NOVEMBER 2026 AUDIT</span>
              <span>&bull;</span>
              <span>500,000+ AUDITED SIP MINUTES</span>
            </div>
          </div>
        </section>

        {/* Comparative Table */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-6">
              Acoustic & Telemetry Benchmark Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E2DDD1] text-[#7D7871] font-mono uppercase">
                    <th className="py-4 px-3">Provider</th>
                    <th className="py-4 px-3">Median Latency (P50)</th>
                    <th className="py-4 px-3">Tail Latency (P95)</th>
                    <th className="py-4 px-3">VAD Interruption Yield</th>
                    <th className="py-4 px-3">Carrier Compliance</th>
                    <th className="py-4 px-3">Data Residency</th>
                    <th className="py-4 px-3">ROI Commitment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DDD1]">
                  {benchmarkTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={row.highlight ? "bg-[#B88746]/10 font-medium" : "text-[#5A554E]"}
                    >
                      <td className="py-4 px-3 font-semibold text-[#1A1817]">
                        {row.provider}
                        {row.highlight && (
                          <span className="ml-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#B88746] text-[#1A1817] uppercase">
                            Benchmark Leader
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-3 font-mono">{row.latencyP50}</td>
                      <td className="py-4 px-3 font-mono">{row.latencyP95}</td>
                      <td className="py-4 px-3 font-mono">{row.vadYield}</td>
                      <td className="py-4 px-3">{row.telephonyCompliance}</td>
                      <td className="py-4 px-3">{row.dataResidency}</td>
                      <td className="py-4 px-3">{row.roiGuarantee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Deploy The Benchmark Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Achieve Sub-435ms Conversational Parity
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Connect directly with Principal Systems Architect Ayush Meena to commission carrier-grade voice agents engineered for your specific enterprise metrics.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission Architecture
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
