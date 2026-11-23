"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, ShieldCheck, PhoneCall, Building2, Landmark, Sun, Crown, CheckCircle2 } from "lucide-react";

interface Gateway {
  city: string;
  country: string;
  badge: string;
  focus: string;
  did: string;
  telecom: string;
  compliance: string;
  href: string;
  icon: React.ElementType;
}

export function GlobalTelephonyGateways() {
  const gateways: Gateway[] = [
    {
      city: "London",
      country: "United Kingdom",
      badge: "British Telecom Interconnect",
      focus: "Mayfair Family Offices, Canary Wharf Fintech, Prime Central London Property",
      did: "+44 (20) London Local DIDs",
      telecom: "BT & Gamma SIP Trunking • Sub-450ms",
      compliance: "Ofcom Registered • UK GDPR Sovereign",
      href: "/london",
      icon: Crown,
    },
    {
      city: "New York City",
      country: "United States",
      badge: "Wall Street & Manhattan Grid",
      focus: "Manhattan Luxury Real Estate (Douglas Elliman, Compass), Wealth Advisory & B2B SaaS",
      did: "+1 (212) / (917) Manhattan DIDs",
      telecom: "Twilio & Bandwidth Interconnects",
      compliance: "FCC / TCPA Certified • SOC2 Type II",
      href: "/new-york",
      icon: Landmark,
    },
    {
      city: "Miami",
      country: "United States",
      badge: "LATAM & Brickell Gateway",
      focus: "Brickell Private Wealth, Latin American Real Estate Investors, Bilingual Hospitality",
      did: "+1 (305) Miami / South Florida",
      telecom: "Bilingual English & Spanish Dual-Agent",
      compliance: "TCPA / STIR/SHAKEN Certified",
      href: "/miami",
      icon: Sun,
    },
    {
      city: "Europe Practice",
      country: "EU & Switzerland",
      badge: "Sovereign GDPR Telephony",
      focus: "Paris, Berlin, Zurich & Amsterdam Commercial Practice, Luxury Hospitality, Enterprise B2B",
      did: "+33 (1) / +49 (30) / +41 (44)",
      telecom: "Sovereign European Voice Cloud",
      compliance: "EU AI Act • GDPR Article 22 Zero-Retention",
      href: "/paris",
      icon: Globe,
    },
    {
      city: "Dubai & Abu Dhabi",
      country: "United Arab Emirates",
      badge: "GCC Financial Practice",
      focus: "DIFC Family Offices, Palm Jumeirah & Dubai Hills Prime Off-Plan Developments",
      did: "+971 (4) Dubai Local DIDs",
      telecom: "Sub-500ms English & Arabic Dual-Stream",
      compliance: "TDRA Registered • UAE Luxury Real Estate Advisory Verified",
      href: "/locations/dubai/real-estate-ai-voice-agents",
      icon: Building2,
    },
    {
      city: "Delhi NCR (HQ) & North India",
      country: "India Practice (HQ)",
      badge: "National Core Infrastructure",
      focus: "Connaught Place HQ Telephony, Gurgaon Cyber City, Noida Sector 62 IT, Luxury Real Estate & Healthcare",
      did: "+91 (11) Delhi / +91 (124) Gurgaon",
      telecom: "Airtel Enterprise PRI & Jio SIP Lines • 435ms P50 Latency",
      compliance: "TRAI 140/160 • DLT Registered",
      href: "/delhi",
      icon: PhoneCall,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F6F4EE] border-b border-[#E2DDD1] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-widest text-[#B88746] mb-5 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#B88746]" />
              <span>GLOBAL CARRIER TELEPHONY INTERCONNECTS</span>
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[0.98]">
              Engineered for the world&apos;s <span className="italic text-[#B88746]">highest-ticket</span> markets.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#55514B] font-normal leading-relaxed">
              Autonomous voice agents deployed on dedicated Tier-1 SIP trunking with localized accents, native regulatory compliance, and sub-500ms human turn-taking parity across North America, the UK, Europe, the GCC, and India.
            </p>
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-2 self-start md:self-end px-6 py-3.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-semibold tracking-tight transition-all duration-300 shadow-sm group shrink-0"
          >
            <span>View All 14 Global Deployment Hubs</span>
            <ArrowUpRight className="w-4 h-4 text-[#F6F4EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 6-Grid of Core Global Gateways */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gateways.map((g) => {
            const Icon = g.icon;
            return (
              <Link
                key={g.city}
                href={g.href}
                className="group p-8 rounded-3xl bg-white border border-[#E2DDD1] hover:border-[#B88746]/60 transition-all duration-300 hover:shadow-[0_12px_40px_-15px_rgba(24,22,20,0.08)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Badge + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] bg-[#F6F4EE] px-2.5 py-1 rounded-full border border-[#E2DDD1]">
                      {g.badge}
                    </span>
                    <div className="w-9 h-9 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center group-hover:bg-[#B88746] transition-colors">
                      <Icon className="w-4 h-4 text-[#181614] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* City & Country */}
                  <div className="mb-3">
                    <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277]">
                      {g.country}
                    </div>
                    <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] group-hover:text-[#B88746] transition-colors">
                      {g.city}
                    </h3>
                  </div>

                  {/* Target Focus Description */}
                  <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed mb-6 font-normal">
                    {g.focus}
                  </p>
                </div>

                {/* Technical Specifications Strip */}
                <div className="pt-5 border-t border-[#F0EBE0] space-y-2 text-[11px] font-['JetBrains_Mono'] text-[#6E675E]">
                  <div className="flex items-center justify-between">
                    <span>Telephony:</span>
                    <strong className="text-[#181614] font-medium">{g.did}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Compliance:</span>
                    <span className="text-[#181614] inline-flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3 h-3 text-[#B88746]" />
                      {g.compliance}
                    </span>
                  </div>
                  <div className="pt-2 flex items-center gap-1 text-[#B88746] font-semibold group-hover:underline text-xs">
                    <span>Explore {g.city} Infrastructure</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GlobalTelephonyGateways;
