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
              Core Solutions
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/ai-voice-agent-delhi-ncr" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">AI Voice Agents Delhi NCR ★</Link></li>
              <li><Link href="/ai-voice-agent-for-real-estate" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">AI Voice for Real Estate ★</Link></li>
              <li><Link href="/services/crm-automation" className="hover:text-[#F6EFE2] transition-colors">AI CRM Automation &amp; Sync</Link></li>
              <li><Link href="/services/n8n-automation" className="hover:text-[#F6EFE2] transition-colors">Enterprise n8n Orchestration</Link></li>
              <li><Link href="/services/ai-chatbots" className="hover:text-[#F6EFE2] transition-colors">Multilingual AI Chatbots &amp; RAG</Link></li>
              <li><Link href="/services/autonomous-agents" className="hover:text-[#F6EFE2] transition-colors">Autonomous Multi-Agent Swarms</Link></li>
              <li><Link href="/services/ai-receptionist" className="hover:text-[#F6EFE2] transition-colors">24/7 AI Voice Receptionist</Link></li>
              <li><Link href="/solutions/real-estate-automation" className="hover:text-[#F6EFE2] transition-colors text-[#F6EFE2]">Real Estate Automation Suite</Link></li>
              <li><Link href="/voice-agents" className="hover:text-[#F6EFE2] transition-colors">Autonomous Voice Telephony</Link></li>
              <li><Link href="/pricing" className="hover:text-[#F6EFE2] transition-colors">Pricing &amp; Unit Economics</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Research &amp; Intel
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/blog/best-ai-automation-agencies-for-business-2026" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-semibold">Top 10 AI Agencies Global (2026) →</Link></li>
              <li><Link href="/blog/destix-ai-vs-rapidx-ai-comparison" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-medium">DestiX AI vs RapidX AI Audit →</Link></li>
              <li><Link href="/blog/best-ai-voice-agent-companies-dubai-uae-2026" className="hover:text-[#F6EFE2] transition-colors">Dubai &amp; UAE Voice AI 2026</Link></li>
              <li><Link href="/blog/best-ai-voice-agent-companies-mumbai-2026" className="hover:text-[#F6EFE2] transition-colors">Mumbai Real Estate &amp; Clinics</Link></li>
              <li><Link href="/blog/top-real-estate-ai-voice-agent-companies-delhi-ncr-2026" className="hover:text-[#F6EFE2] transition-colors">Delhi NCR Real Estate Guide</Link></li>
              <li><Link href="/services/whatsapp-automation" className="hover:text-[#F6EFE2] transition-colors">WhatsApp &amp; CRM Sync Plumbing</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-4">
              Scoping &amp; Economics
            </div>
            <ul className="space-y-2.5 text-[#A89F93]">
              <li><Link href="/pricing" className="hover:text-[#F6EFE2] transition-colors">Pricing &amp; 5x Hurdle Rate</Link></li>
              <li><Link href="/solutions" className="hover:text-[#F6EFE2] transition-colors">Enterprise Solution Directory</Link></li>
              <li><Link href="/locations" className="hover:text-[#F6EFE2] transition-colors text-[#B88746] font-medium">Global Hubs (US, UK &amp; EU) →</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#F6EFE2] transition-colors">Verified Case Studies &amp; Proof</Link></li>
              <li><Link href="/contact" className="hover:text-[#F6EFE2] transition-colors">Diagnostic Session Booking</Link></li>
              <li><Link href="/partners/agency-white-label" className="hover:text-[#B88746] transition-colors font-medium">Agency White-Label Program</Link></li>
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
        </nav>

        {/* Regional Jurisdictions & Voice Telephony Sitelinks */}
        <nav aria-label="Regional Telephony Hubs" className="pt-8 pb-14 border-b border-[#25221F] text-xs">
          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-semibold mb-6">
            Global &amp; Regional Telephony Hubs
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-[#A89F93]">
            <div>
              <Link href="/locations/uk/london/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                London (UK) →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+44 20 Ofcom &amp; UK GDPR</span>
            </div>
            <div>
              <Link href="/locations/usa/new-york/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                New York City (USA) →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+1 212 Wall St &amp; Manhattan</span>
            </div>
            <div>
              <Link href="/locations/usa/miami/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                Miami &amp; Brickell (USA) →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+1 305 Bilingual English/Spanish</span>
            </div>
            <div>
              <Link href="/locations/europe/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                Europe Practice →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Paris/Berlin/Zurich GDPR Art 22</span>
            </div>

            <div>
              <Link href="/ai-voice-agent-delhi-ncr" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                Delhi NCR (HQ) →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">Connaught Place Central Telephony</span>
            </div>
            <div>
              <Link href="/locations/mumbai/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                Mumbai Practice →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+91 022 Bandra, BKC &amp; Clinics</span>
            </div>
            <div>
              <Link href="/locations/bengaluru/ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#F6EFE2]">
                Bengaluru Tech Hub →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+91 080 D2C &amp; SaaS Demos</span>
            </div>
            <div>
              <Link href="/locations/dubai/real-estate-ai-voice-agents" className="hover:text-[#F6EFE2] transition-colors block font-medium text-[#B88746]">
                Dubai Studio &amp; DIFC ★ →
              </Link>
              <span className="text-[10px] text-[#6E675E] block mt-1">+971 TDRA &amp; DIFC Real Estate</span>
            </div>
          </div>

          {/* Minimalist Sub-Strip to All 14 Hubs */}
          <div className="mt-8 pt-6 border-t border-[#1F1C19] flex flex-wrap items-center justify-between gap-4 text-xs font-['JetBrains_Mono'] text-[#A89F93]">
            <span>Active Carrier Gateways: <strong className="text-[#F6EFE2]">14 Metropolitan Jurisdictions</strong></span>
            <Link href="/locations" className="text-[#B88746] hover:text-[#F6EFE2] transition-colors inline-flex items-center gap-1 font-medium">
              <span>Explore All 14 Global Deployment Hubs (Los Angeles, Gurugram, Noida, Hyderabad, Pune, Chennai) →</span>
            </Link>
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
