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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-[#25221F] text-xs">
          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Core Ecosystem
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/voice-agents" className="hover:text-[#F6EFE2] transition-colors">Autonomous Voice Agents</Link></li>
              <li><Link href="/websites" className="hover:text-[#F6EFE2] transition-colors">3D WebGL &amp; Digital Architecture</Link></li>
              <li><Link href="/operating-system" className="hover:text-[#F6EFE2] transition-colors">AI Operating System &amp; n8n</Link></li>
              <li><Link href="/use-cases" className="hover:text-[#F6EFE2] transition-colors">Industry Production Playbooks</Link></li>
              <li><Link href="/about" className="hover:text-[#F6EFE2] transition-colors">Founder Dossier &amp; Philosophy</Link></li>
              <li><Link href="/blog/best-ai-voice-agent-in-new-delhi" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">Best AI Voice Agents New Delhi (2026 Audit) →</Link></li>
              <li><Link href="/blog/ai-voice-agent-cost-india" className="hover:text-[#F6EFE2] transition-colors text-[#B88746]">AI Voice Agent Cost in India (Pricing Guide)</Link></li>
              <li><Link href="/services/whatsapp-automation" className="hover:text-[#F6EFE2] transition-colors text-[#B88746]">WhatsApp Automation &amp; CRM Sync</Link></li>
              <li><Link href="/blog/best-ai-voice-agents-agency-delhi-ncr" className="hover:text-[#F6EFE2] transition-colors text-[#A89F93]">Delhi NCR Agency Rankings &amp; Matrix</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Interactive Benchmarks
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/websites" className="hover:text-[#F6EFE2] transition-colors">Alliance Capital Properties (acpdubai.com)</Link></li>
              <li><Link href="/websites" className="hover:text-[#F6EFE2] transition-colors">Pranav Jha Editorial Platform</Link></li>
              <li><Link href="/websites" className="hover:text-[#F6EFE2] transition-colors">Digiirox 3D Spatial Experience</Link></li>
              <li><Link href="/voice-agents" className="hover:text-[#F6EFE2] transition-colors">Voice Parity Audition Console</Link></li>
              <li><Link href="/contact" className="hover:text-[#F6EFE2] transition-colors">Diagnostic Session Booking</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              The 5x Scoping Model
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><a href="/#scoping-model" className="hover:text-[#F6EFE2] transition-colors">The 5x Hurdle Rate Mandate</a></li>
              <li><a href="/#scoping-model" className="hover:text-[#F6EFE2] transition-colors">Interactive Volume Modeler</a></li>
              <li><a href="/#scoping-model" className="hover:text-[#F6EFE2] transition-colors">No SaaS Tiers Policy</a></li>
              <li><Link href="/contact" className="hover:text-[#F6EFE2] transition-colors">Custom Unit Economics Audit</Link></li>
              <li><Link href="/contact" className="hover:text-[#F6EFE2] transition-colors">White-Label Studio Retainers</Link></li>
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
              <div>Network: <a href="https://www.linkedin.com/in/ayush-meena-065a89380/" target="_blank" rel="noopener noreferrer" className="text-[#F6EFE2] hover:text-[#B88746]">Founder LinkedIn ↗</a></div>
              <div>Company: <a href="https://www.linkedin.com/company/destix-ai/" target="_blank" rel="noopener noreferrer" className="text-[#B88746] hover:underline">DestiX AI LinkedIn ↗</a></div>
              <div>Base: <span className="text-[#F6EFE2]">Delhi NCR &amp; Global Remote</span></div>
            </div>
          </div>
        </div>

        {/* Regional Jurisdictions & Voice Telephony Sitelinks */}
        <div className="pt-8 pb-14 border-b border-[#25221F] text-xs">
          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-5">
            Regional Jurisdictions &amp; Telephony Hubs
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-[#A89F93]">
            <div>
              <Link href="/locations/delhi-ncr/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium">
                AI Voice Services in Delhi NCR
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Gurugram &amp; Noida Telephony</span>
            </div>
            <div>
              <Link href="/locations/delhi-ncr/hindi-ai-voice-agent" className="hover:text-[#F6EFE2] transition-colors block font-medium">
                Hindi AI Voice Agent for Delhi
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Bilingual Code-Switching</span>
            </div>
            <div>
              <Link href="/locations/delhi-ncr/ai-voice-agents-for-clinics" className="hover:text-[#F6EFE2] transition-colors block font-medium">
                AI Voice Agents for Clinics
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">24/7 Patient Scheduling</span>
            </div>
            <div>
              <Link href="/locations/delhi-ncr/ai-voice-agents-for-real-estate" className="hover:text-[#F6EFE2] transition-colors block font-medium">
                AI Voice Agents for Real Estate
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Delhi NCR Speed to Lead</span>
            </div>
            <div>
              <Link href="/locations/dubai/real-estate-ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium">
                Dubai Real Estate Voice Agents
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Luxury Broker Qualification</span>
            </div>
            <div>
              <Link href="/locations" className="hover:text-[#F6EFE2] transition-colors block font-medium">
                AI Voice Agent Service Areas
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Global Remote Deployment</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 mt-6 border-t border-[#25221F]/60 text-[#A89F93]">
            <div>
              <Link href="/locations/gurugram/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                AI Voice Agents Gurugram (Gurgaon) →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Cyber City &amp; Golf Course Road Luxury Telephony</span>
            </div>
            <div>
              <Link href="/locations/noida/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                AI Voice Agents Noida &amp; Greater Noida →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Sector 62 &amp; Expressway Speed-to-Lead</span>
            </div>
            <div>
              <Link href="/partners/agency-white-label" className="hover:text-[#B88746] transition-colors block font-medium text-[#B88746]">
                Agency White-Label / Ghost Partner Program →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Resell AI Voice Retainers under Your Brand</span>
            </div>
          </div>
        </div>

        {/* Massive Architectural Base Brandmark */}
        <div className="py-14 sm:py-20 text-center select-none overflow-hidden">
          <div className="font-['Instrument_Serif'] text-6xl sm:text-9xl md:text-[140px] tracking-[0.18em] text-[#1E1C19] hover:text-[#282420] transition-colors uppercase whitespace-nowrap">
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
