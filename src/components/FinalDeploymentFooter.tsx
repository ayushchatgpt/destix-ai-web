"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Globe } from "lucide-react";

interface FinalDeploymentFooterProps {
  onOpenBooking: () => void;
}

export function FinalDeploymentFooter({ onOpenBooking }: FinalDeploymentFooterProps) {
  return (
    <footer className="relative bg-[#141210] text-[#F6EFE2] pt-24 sm:pt-32 pb-12 overflow-hidden border-t border-[#25221F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Final Commissioning Invitation Box */}
        <div className="rounded-3xl bg-[#1C1916] border border-[#2D2824] p-8 sm:p-16 mb-24 relative overflow-hidden shadow-2xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25211D] border border-[#3A332E] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#B88746] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-beacon" />
            (10) INITIALIZE COMMISSION
          </div>

          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#F6EFE2] leading-[1.0] mb-6 max-w-3xl">
            Let AI do the <span className="italic text-[#B88746]">heavy lifting</span>. You take the credit.
          </h2>

          <p className="text-base sm:text-lg text-[#C5BDB1] leading-relaxed max-w-2xl mb-10 font-normal">
            Stop letting qualified high-ticket callers slip into voicemail or waiting hours for manual follow-up. Deploy an autonomous voice infrastructure and custom digital architecture that closes demand 24/7.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A373] text-[#141210] font-bold text-sm tracking-tight transition-all duration-300 shadow-md group"
            >
              <span>Schedule an Architecture Consultation</span>
              <div className="w-5 h-5 rounded-full bg-[#141210]/15 flex items-center justify-center group-hover:bg-[#141210]/25 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#141210] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>

            <a
              href="mailto:ayushmeenadestixai@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25211D] hover:bg-[#2F2A25] border border-[#3A332E] text-xs font-['JetBrains_Mono'] text-[#F6EFE2] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#B88746]" />
              <span>Direct Desk: ayushmeenadestixai@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Directory Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-[#25221F] text-xs">
          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Practice Domains
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><a href="#practice-areas" className="hover:text-[#F6EFE2] transition-colors">Autonomous Voice Telephony</a></li>
              <li><a href="#practice-areas" className="hover:text-[#F6EFE2] transition-colors">Enterprise AI Operating System</a></li>
              <li><a href="#practice-areas" className="hover:text-[#F6EFE2] transition-colors">Bespoke 3D WebGL Storefronts</a></li>
              <li><a href="#engagements" className="hover:text-[#F6EFE2] transition-colors">Speed-to-Lead Outbound Interception</a></li>
              <li><a href="#engagements" className="hover:text-[#F6EFE2] transition-colors">Automated WhatsApp Pipelines</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Selected Benchmarks
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><a href="#works" className="hover:text-[#F6EFE2] transition-colors">Shade of Green Bangalore Villas</a></li>
              <li><a href="#works" className="hover:text-[#F6EFE2] transition-colors">Pranav Jha Editorial Platform</a></li>
              <li><a href="#works" className="hover:text-[#F6EFE2] transition-colors">Digiirox 3D Spatial Experience</a></li>
              <li><a href="#works" className="hover:text-[#F6EFE2] transition-colors">BirchStays &amp; The Well CG Benchmarks</a></li>
              <li><a href="#voice-console" className="hover:text-[#F6EFE2] transition-colors">Voice Parity Audition Console</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Commercial Model
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><a href="#hurdle-rate" className="hover:text-[#F6EFE2] transition-colors">The 5x Hurdle Rate Mandate</a></li>
              <li><a href="#hurdle-rate" className="hover:text-[#F6EFE2] transition-colors">Tier 01: Pilot Sprint ($500)</a></li>
              <li><a href="#hurdle-rate" className="hover:text-[#F6EFE2] transition-colors">Tier 02: Full Deployment ($1,250)</a></li>
              <li><a href="#hurdle-rate" className="hover:text-[#F6EFE2] transition-colors">Tier 03: Architecture Partnership</a></li>
              <li><a href="#hurdle-rate" className="hover:text-[#F6EFE2] transition-colors">Interactive Volume ROI Modeler</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Practice Coordinates
            </div>
            <div className="space-y-2.5 text-[#A89F93] font-['JetBrains_Mono']">
              <div>Principal: <span className="text-[#F6EFE2]">Ayush Meena</span></div>
              <div>Domain: <span className="text-[#B88746]">ayush.company</span></div>
              <div>Desk: <a href="mailto:ayushmeenadestixai@gmail.com" className="text-[#F6EFE2] hover:text-[#B88746]">ayushmeenadestixai@gmail.com</a></div>
              <div>Base: <span className="text-[#F6EFE2]">Delhi NCR • Deploying Worldwide</span></div>
            </div>
          </div>
        </div>

        {/* Massive Architectural Base Brandmark */}
        <div className="py-14 sm:py-20 text-center select-none overflow-hidden">
          <div className="font-['Instrument_Serif'] text-6xl sm:text-9xl md:text-[140px] tracking-[0.18em] text-[#201D1A] hover:text-[#2A2622] transition-colors uppercase whitespace-nowrap">
            DestiX AI
          </div>
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
            <span>© {new Date().getFullYear()} DESTIX AI PRACTICE • PRINCIPAL: AYUSH MEENA</span>
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
