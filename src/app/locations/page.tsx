"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  PhoneCall,
  Building2,
  Cpu,
  Database,
  Car,
  Factory,
  Flag,
  Landmark,
  Sun,
  Film,
  Crown,
  Building,
  Globe,
  MapPin,
  ArrowUpRight,
  Radio,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export interface LocationItem {
  city: string;
  region: string;
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
  stats: string;
}

export interface MarketSection {
  name: string;
  badge: string;
  description: string;
  locations: LocationItem[];
}

export default function LocationsHubPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeMarket, setActiveMarket] = useState<string>("All");

  const sections: MarketSection[] = [
    {
      name: "India",
      badge: "National Telephony Grid • TRAI & DLT Compliant",
      description:
        "Sub-45s speed-to-lead and localized voice agents operating across Hindi, English, Tamil, Telugu, and Marathi.",
      locations: [
        {
          city: "Delhi NCR (HQ)",
          region: "National Capital Region (Connaught Place, South Delhi)",
          title: "Enterprise AI Voice Agents & Inbound Telephony",
          desc: "Autonomous voice systems replacing offshore call queues with sub-435ms P50 latency and sub-45-second inbound speed-to-lead for enterprise service companies and brokers.",
          href: "/delhi",
          icon: PhoneCall,
          stats: "HQ • 435ms P50 Latency",
        },
        {
          city: "Gurgaon",
          region: "Haryana (DLF Phase 1–5, Cyber City & Golf Course Rd)",
          title: "AI Voice Agents for Luxury Real Estate & Tech",
          desc: "Sub-435ms speed-to-lead voice qualification for high-ticket property brokers, NRI investors, and Cyber City technology enterprises.",
          href: "/gurgaon",
          icon: Building2,
          stats: "DLF & Cyber City Hub",
        },
        {
          city: "Noida",
          region: "Uttar Pradesh (Sector 62 IT Corridor & Greater Noida)",
          title: "AI Voice Agents for BPO & IT Enterprises",
          desc: "Automated front-desk triage, customer support call deflection, and outbound lead engagement for Noida IT corridor businesses.",
          href: "/noida",
          icon: Cpu,
          stats: "Sector 62 IT Corridor",
        },
        {
          city: "North India",
          region: "Regional Enterprise Network (Punjab, Haryana, Rajasthan, UP)",
          title: "Best AI Voice Agent for Business in North India",
          desc: "Sovereign voice telephony operating across English, pure Hindi, and conversational North Indian Hinglish with direct carrier PRI trunks.",
          href: "/north-india",
          icon: Landmark,
          stats: "North India Regional Grid",
        },
        {
          city: "Pan-India",
          region: "National Carrier Grid (Tata Tele, Airtel & Jio PRI)",
          title: "Enterprise AI Telephony Across India",
          desc: "Carrier-grade SIP trunking, TRAI DLT 140/160 compliance, and high-concurrency conversational voice agents across all 28 states.",
          href: "/india",
          icon: Globe,
          stats: "Pan-India Carrier Grid",
        },
        {
          city: "Chandigarh",
          region: "Tricity (Mohali, Panchkula & New Chandigarh)",
          title: "AI Voice Agents for NRI Real Estate & Immigration",
          desc: "Trilingual English, Hindi, and Punjabi voice agents handling 24/7 NRI luxury property management, visa intake, and private surgical clinic triage.",
          href: "/chandigarh",
          icon: Landmark,
          stats: "Tricity • NRI Diaspora Hub",
        },
        {
          city: "Jaipur",
          region: "Rajasthan (C-Scheme, Sitapura & Kukas)",
          title: "AI Voice Agents for Heritage Hospitality & Exports",
          desc: "Sub-435ms voice qualification for palace resorts, destination wedding bookings, and Sitapura gemstone export inquiries with dual-dialect modeling.",
          href: "/jaipur",
          icon: Crown,
          stats: "Hospitality & Gemstone Exports",
        },
        {
          city: "Lucknow",
          region: "Uttar Pradesh (Gomti Nagar & Shaheed Path)",
          title: "AI Voice Agents for Real Estate & Healthcare",
          desc: "Courteous Hindustani and English voice telephony for Gomti Nagar luxury real estate developers, super-specialty hospitals, and legal consultancies.",
          href: "/lucknow",
          icon: Building,
          stats: "Gomti Nagar Corridor",
        },
        {
          city: "Mumbai",
          region: "Maharashtra (BKC, South Mumbai & Bandra)",
          title: "AI Voice Agents for Real Estate & Healthcare",
          desc: "24/7 confidential patient triage, aesthetic treatment qualification, and direct calendar booking for top surgical and dental clinics.",
          href: "/mumbai",
          icon: Building2,
          stats: "BKC • Bandra • Clinics",
        },
        {
          city: "Bengaluru",
          region: "Karnataka (Koramangala, Indiranagar & Whitefield)",
          title: "AI Voice Agents for D2C, SaaS & Fintech",
          desc: "COD order verification, SaaS demo scheduling, and KYC voice automation for India's technology capital.",
          href: "/bengaluru",
          icon: Cpu,
          stats: "D2C COD & SaaS Hub",
        },
        {
          city: "Hyderabad",
          region: "Telangana (HITEC City & Gachibowli)",
          title: "AI Voice Agents for IT & Pharma",
          desc: "Enterprise voice orchestration for clinical trial patient intake, pharmaceutical supply chains, and IT service desk dispatch.",
          href: "/hyderabad",
          icon: Database,
          stats: "HITEC City Corridor",
        },
        {
          city: "Chennai",
          region: "Tamil Nadu (OMR Tech Corridor & Guindy)",
          title: "AI Voice Agents for IT & Automotive",
          desc: "Autonomous dealer test-drive coordination, parts supply hotline, and multi-tier IT support automation in Tamil and English.",
          href: "/chennai",
          icon: Car,
          stats: "OMR Tech Corridor",
        },
        {
          city: "Pune",
          region: "Maharashtra (Hinjewadi IT Hub & Chakan)",
          title: "AI Voice Agents for IT & Manufacturing",
          desc: "Automated factory vendor logistics, tier-1 industrial supply routing, and IT offshore engineering service desks with low latency.",
          href: "/pune",
          icon: Factory,
          stats: "Hinjewadi IT Hub",
        },
      ],
    },
    {
      name: "Middle East",
      badge: "GCC Financial Hub • Multilingual Arabic & English",
      description:
        "Sub-500ms voice parity, private family office call triage, and 3D WebGL portals for prime real estate brokerages and off-plan developers.",
      locations: [
        {
          city: "Dubai & Abu Dhabi",
          region: "United Arab Emirates (DIFC, Downtown & Palm Jumeirah)",
          title: "Luxury Real Estate AI Voice Agents & 3D WebGL",
          desc: "Tailored for prime brokerage firms, off-plan developers, and private family offices. Multilingual qualification with sub-500ms voice parity.",
          href: "/locations/dubai/real-estate-ai-voice-agents",
          icon: Building2,
          stats: "UAE Luxury Real Estate Advisory Verified",
        },
      ],
    },
    {
      name: "United States",
      badge: "Nationwide Infrastructure • TCPA & STIR/SHAKEN Certified",
      description:
        "Carrier-grade low-latency telephony and high-concurrency voice agents powering enterprise operations across major US metropolises.",
      locations: [
        {
          city: "United States",
          region: "Pan-USA Enterprise Telephony Network",
          title: "Enterprise AI Voice Agents Across America",
          desc: "Nationwide carrier-grade SIP trunking, TCPA/STIR/SHAKEN certified telephony, and high-concurrency voice agents across 10 major US metropolitan areas.",
          href: "/us",
          icon: Flag,
          stats: "10 Major Cities",
        },
        {
          city: "New York City",
          region: "New York (Manhattan, Midtown & Wall Street)",
          title: "AI Voice Agents in NYC",
          desc: "High-frequency voice intake for Wall Street wealth advisory, Manhattan luxury brokerage speed-to-lead, and legal practice client intake.",
          href: "/new-york",
          icon: Landmark,
          stats: "Manhattan • Wall Street",
        },
        {
          city: "Miami",
          region: "Florida (Brickell, South Beach & Coral Gables)",
          title: "AI Voice Agents in Miami & South Florida",
          desc: "Native bilingual Spanish and English voice agents converting Latin American real estate investors, luxury hospitality, and medical inquiries.",
          href: "/miami",
          icon: Sun,
          stats: "Bilingual Spanish/English",
        },
        {
          city: "Los Angeles",
          region: "California (Beverly Hills & Silicon Beach)",
          title: "AI Voice Agents in LA",
          desc: "Specialized AI voice infrastructure for entertainment production coordinators, Silicon Beach venture platforms, and premier California real estate firms.",
          href: "/locations/usa/los-angeles/ai-voice-agents",
          icon: Film,
          stats: "Beverly Hills • Silicon Beach",
        },
      ],
    },
    {
      name: "United Kingdom",
      badge: "British Telecom Network • FCA & Ofcom Certified",
      description:
        "Autonomous inbound qualification and calendar booking with localized British accent modeling and virtual 020 London DIDs.",
      locations: [
        {
          city: "United Kingdom",
          region: "National UK Coverage (England & Scotland)",
          title: "Enterprise AI Voice Agents Across the UK",
          desc: "FCA-compliant, Ofcom-registered autonomous telephony deployed across England and Scotland with multi-accent British vocal modeling and instant CRM sync.",
          href: "/uk",
          icon: Crown,
          stats: "London + 5 Cities",
        },
        {
          city: "London",
          region: "Greater London (Mayfair, Canary Wharf & City)",
          title: "AI Voice Agents in London",
          desc: "Sub-45s qualification for Canary Wharf financial institutions, Mayfair private wealth desks, and prime central London residential developments.",
          href: "/london",
          icon: Building,
          stats: "Mayfair • Canary Wharf",
        },
      ],
    },
    {
      name: "Europe",
      badge: "European Union & Switzerland • Sovereign Hosting",
      description:
        "Article 22 GDPR-compliant voice telephony spanning tier-1 European capitals with 8 languages and zero-data-retention capability.",
      locations: [
        {
          city: "Europe",
          region: "EU & Switzerland (Paris, Berlin, Zurich, Amsterdam)",
          title: "AI Voice Agents for European Enterprise",
          desc: "GDPR Article 22 compliant autonomous voice telephony across Paris, Berlin, Amsterdam, Zurich, Dublin, and Stockholm with carrier SIP trunking.",
          href: "/paris",
          icon: Globe,
          stats: "GDPR Compliant",
        },
      ],
    },
  ];

  const marketTabs = [
    { id: "All", label: "All Regions", count: 14 },
    { id: "India", label: "India", count: 6 },
    { id: "Middle East", label: "Middle East", count: 1 },
    { id: "United States", label: "United States", count: 4 },
    { id: "United Kingdom", label: "United Kingdom", count: 2 },
    { id: "Europe", label: "Europe", count: 1 },
  ];

  const filteredSections =
    activeMarket === "All"
      ? sections
      : sections.filter((s) => s.name === activeMarket);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-14 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-4xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Globe className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">GLOBAL DEPLOYMENT NETWORK</span>
          </div>

          {/* Hero Heading */}
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Global AI Voice Agent Deployment.
          </h1>

          {/* Subtext Highlight */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#B88746]/10 border border-[#B88746]/25 text-[#B88746] font-mono text-xs sm:text-sm font-semibold mb-6">
            <Radio className="size-3.5 animate-pulse text-[#B88746]" />
            <span>30+ Cities. 6 Continents.</span>
          </div>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            DestiX AI architects autonomous voice telephony, carrier bridges, and bespoke 3D platforms tuned specifically to regional compliance, cultural dialects, and local enterprise speed-to-lead requirements across 30+ global cities.
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 pb-2 border-t border-[#E2DDD1]">
            <div>
              <div className="text-2xl sm:text-3xl font-['Instrument_Serif'] text-[#181614]">
                30+ Cities
              </div>
              <div className="text-[11px] font-mono text-[#55514B] uppercase tracking-wider mt-0.5">
                Active Deployments
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-['Instrument_Serif'] text-[#181614]">
                6 Markets
              </div>
              <div className="text-[11px] font-mono text-[#55514B] uppercase tracking-wider mt-0.5">
                Global Footprint
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-['Instrument_Serif'] text-[#B88746]">
                &lt; 500ms
              </div>
              <div className="text-[11px] font-mono text-[#55514B] uppercase tracking-wider mt-0.5">
                Voice Roundtrip
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-['Instrument_Serif'] text-[#181614]">
                100% Inbound
              </div>
              <div className="text-[11px] font-mono text-[#55514B] uppercase tracking-wider mt-0.5">
                Zero Missed Calls
              </div>
            </div>
          </div>
        </div>

        {/* Region Filter Bar */}
        <div className="mt-12 flex flex-wrap items-center gap-2 pt-6 border-t border-[#E2DDD1]">
          {marketTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMarket(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-mono transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeMarket === tab.id
                  ? "bg-[#181614] text-[#F6F4EE] shadow-sm"
                  : "bg-white text-[#55514B] hover:text-[#181614] border border-[#E2DDD1] hover:border-[#B88746]/40"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeMarket === tab.id
                    ? "bg-[#B88746] text-[#181614] font-bold"
                    : "bg-[#F6F4EE] text-[#888277]"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Locations Sections */}
      <section className="pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="space-y-20">
          {filteredSections.map((section) => (
            <div
              key={section.name}
              id={section.name.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-32"
            >
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-5 mb-8 border-b border-[#E2DDD1]">
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
                      {section.name}
                    </h2>
                    <span className="text-[11px] font-mono text-[#B88746] bg-[#B88746]/10 border border-[#B88746]/20 px-2.5 py-0.5 rounded-full font-semibold">
                      {section.locations.length} {section.locations.length === 1 ? "Hub" : "Hubs"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-xl">
                    {section.description}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[#888277] uppercase tracking-wider shrink-0 bg-white px-3 py-1 rounded-full border border-[#E2DDD1]">
                  {section.badge}
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {section.locations.map((loc) => (
                  <Link
                    key={loc.city + loc.href}
                    href={loc.href}
                    className="group p-7 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs hover:shadow-xl hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header: Icon & Stats */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="size-12 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] group-hover:scale-105 group-hover:bg-[#B88746] group-hover:text-white transition-all duration-300 shadow-xs">
                          <loc.icon className="size-5" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold border border-[#B88746]/20">
                          {loc.stats}
                        </span>
                      </div>

                      {/* Region Label */}
                      <div className="flex items-center gap-1.5 text-xs text-[#55514B] mb-2 font-mono">
                        <MapPin className="size-3 text-[#B88746] shrink-0" />
                        <span className="truncate">{loc.region}</span>
                      </div>

                      {/* City Name */}
                      <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-1.5 group-hover:text-[#B88746] transition-colors leading-tight">
                        {loc.city}
                      </h3>

                      {/* Card Subtitle */}
                      <p className="text-[11px] font-mono uppercase font-semibold text-[#B88746] tracking-wider mb-3 leading-snug">
                        {loc.title}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                        {loc.desc}
                      </p>
                    </div>

                    {/* Card Footer Link */}
                    <div className="pt-4 border-t border-[#E2DDD1]/70 flex items-center justify-between text-xs font-semibold text-[#181614] group-hover:text-[#B88746] transition-colors">
                      <span>View Regional Blueprint</span>
                      <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Coverage Dark Banner */}
      <section className="py-16 bg-[#181614] text-[#F6F4EE] border-y border-[#33302B]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B88746] uppercase tracking-wider mb-2">
              <Radio className="size-3.5 animate-pulse text-[#00F5A0]" />
              <span>International SIP &amp; WebRTC Telephony</span>
            </div>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-white">
              Deploying Globally Across 30+ Cities &amp; 6 Markets
            </h2>
            <p className="text-sm text-[#BDBAA8] mt-2 max-w-xl">
              We provision low-latency local numbers, carrier-grade SIP trunks, and multi-region telephony redundancy across India, the Middle East, the United States, the United Kingdom, and Europe.
            </p>
          </div>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A359] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Deploy in Your Territory
          </button>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
