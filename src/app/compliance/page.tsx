"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { ShieldCheck, Lock, Globe, Server, CheckCircle2, ArrowUpRight, Scale, FileText } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] flex flex-col selection:bg-[#B88746]/20">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-5 sm:px-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE6DD] border border-[#DCD6C9] text-xs font-['JetBrains_Mono'] text-[#B88746] font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-[#B88746]" />
            Regulatory Dossier // Sovereign Telephony Architecture
          </div>

          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] tracking-tight leading-[1.05] mb-6">
            Enterprise Telephony Compliance &amp; <span className="italic text-[#B88746]">Data Sovereignty</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#55514B] max-w-3xl leading-relaxed font-normal mb-8">
            DestiX AI engineers carrier-grade conversational voice systems designed for regulated enterprise environments. Unlike multi-tenant SaaS wrappers that route sensitive customer audio through shared black-box infrastructure, DestiX AI guarantees 100% client code ownership, direct carrier billing pass-through, and verifiable regulatory compliance across all 14 global deployment hubs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#EDE9E0] border border-[#DDD7CB] text-xs font-['JetBrains_Mono']">
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">TRAI / DLT Status</span>
              <strong className="text-[#181614] text-sm">140/160 Series Compliant</strong>
            </div>
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">US FCC / TCPA</span>
              <strong className="text-[#181614] text-sm">STIR/SHAKEN Level A</strong>
            </div>
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">UK &amp; EU GDPR</span>
              <strong className="text-[#181614] text-sm">Article 22 Sovereign</strong>
            </div>
            <div>
              <span className="text-[#888277] block text-[10px] uppercase">IP &amp; Code Ownership</span>
              <strong className="text-[#181614] text-sm">100% Client Retained</strong>
            </div>
          </div>
        </section>

        {/* Core Sovereignty Principles */}
        <section className="max-w-5xl mx-auto px-5 sm:px-6 mb-20">
          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
            01 // Data &amp; Infrastructure Sovereignty
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-8">
            Why Enterprise Architects Reject SaaS Voice Wrappers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-[#181614]">Zero Persistent Audio Storage</h3>
              <p className="text-xs text-[#55514B] leading-relaxed">
                Call audio is streamed ephemerally through in-memory WebRTC/WebSocket pipelines. Speech-to-text transcripts are processed in zero-data-retention containers and delivered directly into your sovereign CRM. No raw audio is retained by intermediate third-party brokers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-[#181614]">Direct Carrier Account Billing</h3>
              <p className="text-xs text-[#55514B] leading-relaxed">
                Telephony trunks are provisioned directly under your organization&apos;s corporate accounts (Tata Tele, Airtel, Twilio, Telnyx, Gamma Telecom). You pay raw carrier rates (~₹4.50-₹7.50/min India; $0.02-$0.06/min US/UK) with zero markup and zero SaaS lock-in.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-[#181614]">100% Client Code &amp; IP Ownership</h3>
              <p className="text-xs text-[#55514B] leading-relaxed">
                Every prompt state machine, n8n orchestration workflow, vector index schema, and telephony webhook is transferred directly to your organization upon delivery. If you ever discontinue working with us, your phone agents remain 100% operational on your own cloud.
              </p>
            </div>
          </div>
        </section>

        {/* Global Jurisdictional Matrix */}
        <section className="max-w-5xl mx-auto px-5 sm:px-6 mb-20">
          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
            02 // Multi-Jurisdiction Regulatory Matrix
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-8">
            Carrier Compliance Across 14 Deployment Hubs
          </h2>

          <div className="space-y-6">
            {/* India */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E2DDD1] gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-bold text-[#181614]">India (New Delhi HQ, Gurugram, Noida, Mumbai, Bengaluru, Hyderabad, Chennai, Pune)</h3>
                </div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] font-semibold">TRAI &amp; DoT Framework</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#55514B] leading-relaxed">
                <div>
                  <strong className="text-[#181614] block mb-1">Telephony Registration &amp; Numbering:</strong>
                  Full compliance with Telecom Regulatory Authority of India (TRAI) Telecom Commercial Communications Customer Preference Regulations (TCCCPR 2018). Provisioning of compliant 140-series (telemarketing) and 160-series (service/transactional) DIDs via Tier-1 carriers (Tata Telecommunications, Airtel Enterprise PRI, Jio SIP).
                </div>
                <div>
                  <strong className="text-[#181614] block mb-1">DLT Scrubbing &amp; Consent:</strong>
                  Automated Distributed Ledger Technology (DLT) entity, header, and template registration with national DND (Do Not Disturb) registry scrubbing before triggering any outbound promotional dialing. Zero spoofing, strict CLI integrity.
                </div>
              </div>
            </div>

            {/* UAE */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E2DDD1] gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-bold text-[#181614]">United Arab Emirates (Dubai, Abu Dhabi, DIFC)</h3>
                </div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] font-semibold">TDRA Regulatory Standard</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#55514B] leading-relaxed">
                <div>
                  <strong className="text-[#181614] block mb-1">Carrier Interconnect:</strong>
                  Provisioning of registered +971 virtual landline and toll-free DIDs through du and e&amp; (Etisalat) compliant SIP gateways under Telecommunications and Digital Government Regulatory Authority (TDRA) guidelines.
                </div>
                <div>
                  <strong className="text-[#181614] block mb-1">Real Estate &amp; DIFC Financial Compliance:</strong>
                  Direct alignment with Dubai Land Department (DLD) and Real Estate Regulatory Agency (RERA) advertisement permit verification, ensuring voice qualification scripts comply with UAE privacy laws and consumer protection decrees.
                </div>
              </div>
            </div>

            {/* United Kingdom */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E2DDD1] gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-bold text-[#181614]">United Kingdom (London, Manchester, Edinburgh)</h3>
                </div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] font-semibold">Ofcom &amp; UK GDPR</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#55514B] leading-relaxed">
                <div>
                  <strong className="text-[#181614] block mb-1">Ofcom Compliance &amp; CLI:</strong>
                  Full compliance with Ofcom rules on persistent misuse and silent calls. +44 20 London geographic DIDs and 0800 numbers provisioned via BT and Gamma Telecom with valid Presentation Numbers and Calling Line Identity (CLI).
                </div>
                <div>
                  <strong className="text-[#181614] block mb-1">TPS Scrubbing &amp; UK GDPR Article 22:</strong>
                  Automated Telephone Preference Service (TPS/CTPS) registry filtering. Strict adherence to UK GDPR Article 22 requirements regarding automated decision-making and human escalation safeguards.
                </div>
              </div>
            </div>

            {/* United States */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E2DDD1] gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-bold text-[#181614]">United States (New York, Miami, Los Angeles, Chicago, San Francisco)</h3>
                </div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] font-semibold">FCC / TCPA &amp; STIR/SHAKEN</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#55514B] leading-relaxed">
                <div>
                  <strong className="text-[#181614] block mb-1">TCPA &amp; TSR Adherence:</strong>
                  Outbound calling operates under strict Telephone Consumer Protection Act (TCPA) and Telemarketing Sales Rule (TSR) parameters: calling time windows (8 AM - 9 PM local), immediate opt-out / DNC honoring, and consent-gated webhooks.
                </div>
                <div>
                  <strong className="text-[#181614] block mb-1">STIR/SHAKEN Level A Attestation:</strong>
                  Robocall mitigation architecture utilizing Full (A-level) STIR/SHAKEN attestation on all outbound DIDs (+1 212, +1 305, +1 310) to prevent carrier spam tagging or call blocking. CCPA compliant consumer privacy controls.
                </div>
              </div>
            </div>

            {/* Europe */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E2DDD1] gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-bold text-[#181614]">European Union (Paris, Berlin, Zurich, Dublin, Amsterdam)</h3>
                </div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#B88746] font-semibold">EU AI Act &amp; GDPR</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#55514B] leading-relaxed">
                <div>
                  <strong className="text-[#181614] block mb-1">EU AI Act Transparency:</strong>
                  Immediate disclosure upon call connection identifying the agent as an artificial intelligence system, fully compliant with Article 50 of the EU Artificial Intelligence Act.
                </div>
                <div>
                  <strong className="text-[#181614] block mb-1">Sovereign Cloud Data Residency:</strong>
                  Option for zero-egress EU data residency hosted within AWS/GCP Frankfurt (eu-central-1) or Dublin (eu-west-1). Strict GDPR Article 22 human-in-the-loop fallback mechanisms for any binding transaction.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Verification Callout */}
        <section className="max-w-5xl mx-auto px-5 sm:px-6 mb-16">
          <div className="p-8 rounded-3xl bg-[#181614] text-[#F6EFE2] relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-['JetBrains_Mono'] text-[#B88746] mb-4">
                <Scale className="w-3.5 h-3.5 text-[#B88746]" />
                Audit Protocol
              </div>
              <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#F6EFE2] mb-4">
                Request an Architecture &amp; Compliance Review
              </h2>
              <p className="text-sm sm:text-base text-[#C5BDB1] max-w-2xl mb-8 leading-relaxed">
                Need a formal Data Processing Agreement (DPA), vendor security review, or custom STIR/SHAKEN carrier attestation report for your enterprise legal team?
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-bold text-sm transition-all"
                >
                  <span>Schedule Technical Review</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:ayushmeenadestixai@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-['JetBrains_Mono'] text-[#F6EFE2] transition-colors"
                >
                  <span>Desk: ayushmeenadestixai@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
    </div>
  );
}
