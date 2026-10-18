"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Globe, Terminal, ShieldCheck } from "lucide-react";

interface FinalDeploymentFooterProps {
  onOpenBooking: () => void;
}

export function FinalDeploymentFooter({ onOpenBooking }: FinalDeploymentFooterProps) {
  return (
    <footer className="relative bg-[#08080A] border-t border-white/10 pt-24 sm:pt-32 pb-12 overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#00F5A0]/10 via-[#3B82F6]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Final CTA Container */}
        <div className="rounded-3xl bg-[#111216] border border-white/10 p-8 sm:p-16 mb-24 relative overflow-hidden shadow-2xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181F] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-beacon" />
            // 08 INITIALIZE DEPLOYMENT
          </div>

          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-6 max-w-3xl">
            Ready to deploy an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#52F8BD] to-[#3B82F6]">
              autonomous growth engine?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mb-10 font-normal">
            Stop letting high-intent callers slip into voicemail or waiting 4 hours for reps to follow up. Deploy an autonomous voice agent and a 3D digital storefront that commands category leadership.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00F5A0] hover:bg-[#34F8B3] text-[#08080A] font-bold text-sm tracking-tight transition-all duration-300 shadow-[0_0_35px_-5px_rgba(0,245,160,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule Architecture Discovery</span>
              <ArrowUpRight className="w-4 h-4 text-[#08080A] stroke-[2.5]" />
            </button>

            <a
              href="mailto:ayushmeenadestixai@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#16181F] hover:bg-[#1E222D] border border-white/10 hover:border-[#00F5A0]/40 text-[#F4F4F6] text-sm font-semibold transition-all duration-300 shadow-lg"
            >
              <Mail className="w-4 h-4 text-[#00F5A0]" />
              <span>Direct: ayushmeenadestixai@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-white/5 text-xs">
          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#7A7D87] font-semibold mb-4">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-[#94A3B8]">
              <li><a href="#voice" className="hover:text-[#00F5A0] transition-colors">Autonomous Voice Agents</a></li>
              <li><a href="#spatial-core" className="hover:text-[#00F5A0] transition-colors">3D WebGL Storefronts</a></li>
              <li><a href="#capabilities" className="hover:text-[#00F5A0] transition-colors">Enterprise CRM / n8n OS</a></li>
              <li><a href="#capabilities" className="hover:text-[#00F5A0] transition-colors">Instant Lead Interception</a></li>
              <li><a href="#capabilities" className="hover:text-[#00F5A0] transition-colors">WhatsApp Automation</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#7A7D87] font-semibold mb-4">
              Architecture &amp; Proof
            </div>
            <ul className="space-y-2.5 text-[#94A3B8]">
              <li><a href="#showcase" className="hover:text-[#00F5A0] transition-colors">Digiirox Interactive 3D</a></li>
              <li><a href="#showcase" className="hover:text-[#00F5A0] transition-colors">Pranav Jha Studio</a></li>
              <li><a href="#showcase" className="hover:text-[#00F5A0] transition-colors">Luxury Real Estate Benchmark</a></li>
              <li><a href="#voice" className="hover:text-[#00F5A0] transition-colors">Audio Latency Console</a></li>
              <li><a href="#faq" className="hover:text-[#00F5A0] transition-colors">Deployment FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#7A7D87] font-semibold mb-4">
              Commercial Sprints
            </div>
            <ul className="space-y-2.5 text-[#94A3B8]">
              <li><a href="#pricing" className="hover:text-[#00F5A0] transition-colors">Sprint 01: Voice Agent ($500)</a></li>
              <li><a href="#pricing" className="hover:text-[#00F5A0] transition-colors">Sprint 02: 3D Platform ($1,800)</a></li>
              <li><a href="#pricing" className="hover:text-[#00F5A0] transition-colors">Sprint 03: Complete OS ($1,250)</a></li>
              <li><a href="#pricing" className="hover:text-[#00F5A0] transition-colors">Volume Minute Calculator</a></li>
              <li><a href="#pricing" className="hover:text-[#00F5A0] transition-colors">White-Label Agency Terms</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#7A7D87] font-semibold mb-4">
              Direct Coordinates
            </div>
            <div className="space-y-2.5 text-[#94A3B8] font-['JetBrains_Mono']">
              <div>Founder &amp; CEO: <span className="text-[#F4F4F6]">Ayush Meena</span></div>
              <div>Domain: <span className="text-[#00F5A0]">ayush.company</span></div>
              <div>Email: <a href="mailto:ayushmeenadestixai@gmail.com" className="text-[#F4F4F6] hover:text-[#00F5A0]">ayushmeenadestixai@gmail.com</a></div>
              <div>Base: <span className="text-[#F4F4F6]">Delhi NCR &amp; Global</span></div>
            </div>
          </div>
        </div>

        {/* Massive Minimalist Brandmark Typography */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <div className="font-['Syne'] font-extrabold text-5xl sm:text-8xl md:text-9xl tracking-[0.25em] text-[#16181F] hover:text-[#1E222D] transition-colors uppercase whitespace-nowrap">
            DestiX AI
          </div>
        </div>

        {/* Telemetry Status Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-['JetBrains_Mono'] text-[#7A7D87]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-beacon" />
            <span className="text-[#F4F4F6] font-semibold">ALL OPERATIONAL SYSTEMS NOMINAL</span>
            <span className="text-white/20">•</span>
            <span>ROUNDTRIP LATENCY: 380MS</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} DESTIX AI • FOUNDER AYUSH MEENA</span>
            <span>•</span>
            <span className="text-[#00F5A0]">AYUSH.COMPANY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const FinalCtaFooter = FinalDeploymentFooter;
export default FinalDeploymentFooter;
