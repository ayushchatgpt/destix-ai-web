"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

interface FinalDeploymentFooterProps {
  onOpenBooking?: () => void;
}

export function FinalDeploymentFooter({ onOpenBooking }: FinalDeploymentFooterProps) {
  return (
    <footer className="relative bg-[#131210] text-[#F6EFE2] pt-24 sm:pt-32 pb-12 overflow-hidden border-t border-[#25221F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Final High-Conversion Invitation Box */}
        <div className="rounded-3xl bg-[#1A1815] border border-[#2D2824] p-8 sm:p-16 mb-24 relative overflow-hidden shadow-2xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23201C] border border-[#3A332E] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
            INITIALIZE COMMISSION
          </div>

          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#F6EFE2] leading-[1.0] mb-6 max-w-3xl">
            Let AI do the <span className="italic text-[#B88746]">heavy lifting</span>. You take the credit.
          </h2>

          <p className="text-base sm:text-lg text-[#C5BDB1] leading-relaxed max-w-2xl mb-10 font-normal">
            Book a 30-minute architecture session. We&apos;ll map your lead leaks, run your numbers, and show you the exact system.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                data-cursor-text="BOOK"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-bold text-sm tracking-tight transition-all duration-300 shadow-md group"
              >
                <span>Book Your 30-Min Diagnostic Call</span>
                <div className="w-5 h-5 rounded-full bg-[#131210]/15 flex items-center justify-center group-hover:bg-[#131210]/25 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#131210] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            ) : (
              <Link
                href="/contact"
                data-cursor-text="BOOK"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-bold text-sm tracking-tight transition-all duration-300 shadow-md group"
              >
                <span>Book Your 30-Min Diagnostic Call</span>
                <div className="w-5 h-5 rounded-full bg-[#131210]/15 flex items-center justify-center group-hover:bg-[#131210]/25 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#131210] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            )}

            <a
              href="mailto:ayushmeenadestixai@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#23201C] hover:bg-[#2D2824] border border-[#3A332E] text-xs font-['JetBrains_Mono'] text-[#F6EFE2] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#B88746]" />
              <span>Direct Desk: ayushmeenadestixai@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Directory Navigation */}
        <nav aria-label="Footer Navigation" className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-[#25221F] text-xs">
          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Core Enterprise Solutions
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/services/voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">Autonomous Voice Telephony ★</Link></li>
              <li><Link href="/ai-voice-agent-for-real-estate" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">AI Voice for Real Estate ★</Link></li>
              <li><Link href="/services/enterprise-rag-implementation" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">Enterprise Vector RAG Systems</Link></li>
              <li><Link href="/services/custom-ai-agents-fintech" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">FinTech KYC Voice Agents</Link></li>
              <li><Link href="/services/hipaa-gdpr-compliant-llm" className="hover:text-[#F6EFE2] transition-colors">HIPAA &amp; GDPR Sovereign LLMs</Link></li>
              <li><Link href="/services/crm-automation" className="hover:text-[#F6EFE2] transition-colors">AI CRM Automation &amp; Sync</Link></li>
              <li><Link href="/services/n8n-automation" className="hover:text-[#F6EFE2] transition-colors">Enterprise n8n Orchestration</Link></li>
              <li><Link href="/services/ai-receptionist" className="hover:text-[#F6EFE2] transition-colors">24/7 AI Voice Receptionist</Link></li>
              <li><Link href="/services/3d-web" className="hover:text-[#F6EFE2] transition-colors">Spatial 3D WebGL Digital Flagships</Link></li>
              <li><Link href="/pricing" className="hover:text-[#F6EFE2] transition-colors">Wholesale Pass-Through Pricing</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Global Telephony Hubs (US, UK &amp; EU)
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/locations/uk/london/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">London AI Voice Agents (UK) ★</Link></li>
              <li><Link href="/locations/uk/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">United Kingdom Practice (+44)</Link></li>
              <li><Link href="/locations/usa/new-york/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">New York AI Voice Agents (NYC) ★</Link></li>
              <li><Link href="/locations/usa/miami/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">Miami &amp; Brickell Bilingual Agents</Link></li>
              <li><Link href="/locations/usa/los-angeles/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors">Los Angeles AI Voice Practice</Link></li>
              <li><Link href="/locations/usa/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors">United States Practice (+1 DIDs)</Link></li>
              <li><Link href="/locations/europe/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#B88746]">Europe Enterprise Practice (GDPR)</Link></li>
              <li><Link href="/locations/dubai/real-estate-ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">Dubai &amp; UAE Real Estate Studio</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              India Regional Telephony Hubs
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/ai-voice-agent-delhi-ncr" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">Delhi NCR Enterprise Telephony ★</Link></li>
              <li><Link href="/locations/mumbai/ai-voice-receptionist" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">Mumbai Real Estate &amp; Clinics (022) ★</Link></li>
              <li><Link href="/locations/bengaluru/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">Bengaluru D2C COD &amp; SaaS Hub</Link></li>
              <li><Link href="/locations/gurugram/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors">Gurugram Cyber City Corridors</Link></li>
              <li><Link href="/locations/noida/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors">Noida Expressway Hub</Link></li>
              <li><Link href="/locations/hyderabad/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors">Hyderabad Tech Telephony</Link></li>
              <li><Link href="/locations/chennai/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors">Chennai &amp; Tamil Nadu Practice</Link></li>
              <li><Link href="/locations/pune/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors">Pune Enterprise Telephony Hub</Link></li>
              <li><Link href="/locations/india/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">Pan-India TRAI/DLT Telephony</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Research, Intel &amp; Tools
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/research/2026-enterprise-ai-telephony-benchmark" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">2026 Telephony Latency Benchmark →</Link></li>
              <li><Link href="/tools/roi-calculator" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">Interactive ROI &amp; Savings Calculator →</Link></li>
              <li><Link href="/tools/ai-readiness-diagnostic" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">Enterprise AI Readiness Diagnostic</Link></li>
              <li><Link href="/press" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">Press &amp; Executive Media Kit</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#F6EFE2] transition-colors">Verified Case Studies &amp; Telemetry</Link></li>
              <li><Link href="/aeo" className="hover:text-[#F6EFE2] transition-colors">Answer Engine Optimization (AEO)</Link></li>
              <li><Link href="/blog/destix-ai-vs-rapidx-ai-comparison" className="hover:text-[#F6EFE2] transition-colors">DestiX AI vs RapidX AI Audit</Link></li>
              <li><Link href="/partners/agency-white-label" className="hover:text-[#B88746] transition-colors font-medium">Agency White-Label Program</Link></li>
              <li><Link href="/about" className="hover:text-[#F6EFE2] transition-colors">Principal Architect Dossier</Link></li>
            </ul>
          </div>
        </nav>

        {/* Regional Jurisdictions & Voice Telephony Sitelinks */}
        <nav aria-label="Regional Telephony Hubs" className="pt-8 pb-14 border-b border-[#25221F] text-xs">
          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-5">
            Key Global &amp; National Enterprise Telephony Gateways
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-[#A89F93]">
            <div>
              <Link href="/locations/uk/london/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                London (UK) →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+44 20 Ofcom &amp; UK GDPR</span>
            </div>
            <div>
              <Link href="/locations/usa/new-york/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                New York (USA) →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+1 212 Wall St &amp; Real Estate</span>
            </div>
            <div>
              <Link href="/locations/usa/miami/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                Miami (USA) →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+1 305 Brickell &amp; Bilingual</span>
            </div>
            <div>
              <Link href="/locations/europe/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                Europe Practice →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Frankfurt/Paris/Dublin GDPR</span>
            </div>
            <div>
              <Link href="/locations/mumbai/ai-voice-receptionist" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                Mumbai Hub →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+91 022 Bandra, BKC &amp; Worli</span>
            </div>
            <div>
              <Link href="/locations/dubai/real-estate-ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#B88746]">
                Dubai &amp; UAE ★ →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+971 TDRA &amp; DIFC Real Estate</span>
            </div>
          </div>
        </nav>

        {/* Massive Architectural Base Brandmark */}
        <div className="py-14 sm:py-20 text-center select-none overflow-hidden">
          <h2 className="font-['Instrument_Serif'] text-6xl sm:text-9xl md:text-[140px] tracking-[0.18em] text-[#1E1C19] hover:text-[#282420] transition-colors uppercase whitespace-nowrap">
            DestiX AI
          </h2>
        </div>

        {/* Status Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-['JetBrains_Mono'] text-[#888277]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B88746] animate-beacon" />
            <span className="text-[#F6EFE2] font-semibold">ALL OPERATIONAL SYSTEMS NOMINAL</span>
            <span className="text-white/20">•</span>
            <span>JURISDICTION: DELHI NCR &amp; GLOBAL</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} DESTIX AI STUDIO • PRINCIPAL: AYUSH MEENA</span>
            <span>•</span>
            <span className="text-[#B88746]">AYUSH.COMPANY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const FinalCtaFooter = FinalDeploymentFooter;
export default FinalDeploymentFooter;
