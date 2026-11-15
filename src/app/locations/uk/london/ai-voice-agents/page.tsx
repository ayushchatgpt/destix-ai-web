"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Building2,
  Plus,
  Minus,
  Award,
  Server,
  Globe,
  TrendingUp,
  Stethoscope,
  Utensils,
  Landmark,
  Check,
  Lock,
  Scale,
  Headphones,
  Cpu,
  Layers,
} from "lucide-react";

export default function LondonVoiceAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Five London Verticals
  const londonVerticals = [
    {
      title: "Prime Central London Real Estate",
      badge: "MAYFAIR • KNIGHTSBRIDGE • CHELSEA • KENSINGTON",
      desc: "Autonomous conversational receptionists engineered for high-value brokerages in SW1, SW3, W1, and W8. Instantly qualifies ultra-high-net-worth (UHNW) buyers, verifies proof-of-funds criteria, checks leasehold terms, and books private accompanied viewings directly into Reapit, Alto, or Dezrez CRMs.",
      metric: "< 45s Speed to Lead",
      icon: Building2,
      tag: "LUXURY PROPERTY",
    },
    {
      title: "Canary Wharf Financial Services & Fintech",
      badge: "CANARY WHARF • BANK • LIVERPOOL STREET",
      desc: "FCA-aware inbound triage and outbound acceleration for wealth managers, alternative investment funds, and Shoreditch fintech scale-ups. Automates investor qualification, executes secure KYC voice verification, and routes institutional mandates directly to dedicated partners with encrypted audit trails.",
      metric: "99.9% KYC Integrity",
      icon: Landmark,
      tag: "FINTECH & BFSI",
    },
    {
      title: "Harley Street Medical & Private Dental",
      badge: "MARYLEBONE • HARLEY STREET • WIMPOLE STREET",
      desc: "Discreet, empathetic patient intake and appointment coordination for Marylebone private practices, cosmetic surgeons, and elite dental studios. Manages high-touch consultations, backfills short-notice cancellation slots, and integrates seamlessly with Dentally and Software of Excellence (SOE).",
      metric: "24/7 Intake",
      icon: Stethoscope,
      tag: "PRIVATE HEALTHCARE",
    },
    {
      title: "West End & Mayfair Luxury Hospitality",
      badge: "MAYFAIR • SOHO • COVENT GARDEN • ST JAMES'S",
      desc: "Flawless telephone concierge for Michelin-starred establishments, members' clubs, and luxury boutique hotels. Handles complex table reservations, private dining room (PDR) inquiries, dietary accommodations, and automated confirmation calls connected directly into SevenRooms or OpenTable.",
      metric: "Zero Dropped Calls",
      icon: Utensils,
      tag: "HOSPITALITY & DINING",
    },
    {
      title: "Tech City & Shoreditch B2B SaaS Scale-ups",
      badge: "OLD STREET • SHOREDITCH • KING'S CROSS",
      desc: "Outbound and inbound pipeline automation for venture-backed software firms across London's Silicon Roundabout. Dials inbound demo requests in under 30 seconds, verifies firmographic fit (ARR, tech stack, headcount), and schedules high-value discovery calls straight to AE calendars.",
      metric: "Sub-30s Dialout",
      icon: Cpu,
      tag: "TECH CITY SAAS",
    },
  ];

  // London Telephony Backbone Features
  const telephonyFeatures = [
    {
      title: "+44 20 Geographic London DIDs",
      desc: "Provision dedicated Central London (+44 20 7), Outer London (+44 20 8), and Greater London (+44 20 3) virtual numbers. Elevated local caller ID recognition drives pickup rates above 72% compared to suspicious international or unrecognised 0800 prefixes.",
      tag: "LOCAL CALLER TRUST",
    },
    {
      title: "BT & Gamma Telecom SIP Trunk Interconnects",
      desc: "Direct carrier interconnects with British Telecom (BT) and Gamma Telecom peering at Telehouse North (Docklands) and Equinix Slough. Guaranteed sub-30ms local packet transit and 99.99% carrier uptime with zero transcoding jitter.",
      tag: "TIER-1 TELECOM",
    },
    {
      title: "Full Ofcom General Conditions Compliance",
      desc: "Strict adherence to Ofcom regulations on persistent misuse, CLI presentation standards, and automated telephone dialling systems. Integrated Telephone Preference Service (TPS & CTPS) real-time registry scrubbing prevents nuisance call penalties.",
      tag: "OFCOM REGULATION",
    },
    {
      title: "UK GDPR & Sovereign AWS London Hosting",
      desc: "All audio streams, transcription data, and CRM metadata reside strictly within sovereign UK data centers (AWS eu-west-2 London). Encrypted at rest (AES-256) and in transit (TLS 1.3) with full ICO registration and right-to-be-forgotten compliance.",
      tag: "UK SOVEREIGNTY",
    },
  ];

  // Turnkey Pricing Packages: GBP 1,500 - 65,000
  const pricingTiers = [
    {
      name: "Pilot Sprint",
      badge: "BOUTIQUE & PROVING SPRINT",
      price: "£1,500 – £3,500",
      period: "One-time Turnkey Sprint",
      timeline: "14-Day Delivery",
      desc: "Single voice agent architecture tailored for single-location estate agencies, private clinics, or boutique hospitality venues looking to prove ROI.",
      features: [
        "1 Production AI Voice Agent (Inbound or Outbound)",
        "Dedicated +44 20 Local London DID",
        "Sub-500ms Voice Parity & Natural British RP Accent",
        "Google Calendar / Cal.com Automated Booking Sync",
        "Ofcom & UK GDPR Compliant Architecture",
        "Direct Wholesale Carrier Telephony (~£0.04–£0.07/min)",
      ],
      popular: false,
    },
    {
      name: "Turnkey Production Suite",
      badge: "MOST DEPLOYED IN LONDON",
      price: "£4,500 – £16,500",
      period: "One-time Engineering Commission",
      timeline: "21-Day Delivery",
      desc: "Comprehensive dual-channel inbound concierge and outbound speed-to-lead engine for high-transaction Mayfair brokerages, Canary Wharf fintechs, and medical practices.",
      features: [
        "Complete Inbound Concierge + Outbound Speed-to-Lead",
        "Multi-DID Pool (+44 20 7 Central London & +44 20 8)",
        "Deep CRM Integration (Reapit, Alto, Salesforce, HubSpot)",
        "Automated Human Warm Handoff & SIP Live Transfer",
        "TPS/CTPS Real-time Do-Not-Call Registry Scrubbing",
        "Multi-accent calibration (RP British, Transatlantic, French, Arabic)",
        "Wholesale Carrier Telephony with Zero Platform Markups",
      ],
      popular: true,
    },
    {
      name: "Sovereign Enterprise Architecture",
      badge: "FINANCIAL & HOSPITAL INSTITUTION",
      price: "£25,000 – £65,000",
      period: "Bespoke Enterprise Scope",
      timeline: "30–45 Day Delivery",
      desc: "Full bespoke multi-department conversational infrastructure for large property funds, Canary Wharf tier-2 institutions, and NHS/private clinic groups.",
      features: [
        "Multi-Tier Autonomous Voice Fleet across Departments",
        "Sovereign AWS London (eu-west-2) Isolated VPC Deployment",
        "Custom Fine-Tuned Domain LLM & Strict Compliance Guardrails",
        "Biometric Voice Verification & KYC Authentication Hooks",
        "Complex Multi-branch SIP Trunking via BT & Gamma Interconnects",
        "Dedicated Enterprise SLA, 24/7 Monitoring & Engineering Escalations",
        "Full Intellectual Property & Custom Source Code Assignment",
      ],
      popular: false,
    },
  ];

  // Comparison Matrix: DestiX AI vs London Agencies
  const comparisonData = [
    {
      metric: "Acoustic Response Parity",
      destix: "435ms (Sub-500ms human threshold)",
      londonAgencies: "1,200ms – 2,500ms (High robotic delay)",
      callCenters: "Human hesitation & staffing friction",
      usWrappers: "1,800ms+ (Transatlantic latency)",
    },
    {
      metric: "Local London Telephony",
      destix: "+44 20 BT / Gamma Direct SIP Interconnects",
      londonAgencies: "Generic third-party resellers",
      callCenters: "Traditional copper/PBX switchboards",
      usWrappers: "US Twilio numbers (Frequent spam blocks)",
    },
    {
      metric: "Voice Accent Authenticity",
      destix: "Native British RP & Contemporary London Accents",
      londonAgencies: "Generic synthesized American voices",
      callCenters: "Variable regional accents & fatigue",
      usWrappers: "Silicon Valley robotic monotone",
    },
    {
      metric: "Data Sovereignty & Privacy",
      destix: "100% UK Sovereign (AWS London eu-west-2, UK GDPR)",
      londonAgencies: "Data routed through US cloud vendors",
      callCenters: "Vulnerable to offshore data leakage",
      usWrappers: "Non-compliant US data transfers",
    },
    {
      metric: "Regulatory Compliance",
      destix: "Full Ofcom General Conditions & TPS Scrubbing",
      londonAgencies: "Unregulated automated dialers",
      callCenters: "Manual TPS checking checklists",
      usWrappers: "Ignorant of UK Ofcom / TPS laws",
    },
    {
      metric: "Commercial Model",
      destix: "One-time Turnkey Sprint (£1.5k–£65k) + Wholesale Pass-through",
      londonAgencies: "£3,000–£10,000/mo retainer lock-in",
      callCenters: "£2,800–£4,200/agent/mo + overheads",
      usWrappers: "£0.35+/min + high per-seat software taxes",
    },
  ];

  // Active Corridors in London
  const corridors = [
    {
      name: "Mayfair, Belgravia & Knightsbridge",
      postcodes: "W1, SW1X, SW1W, SW7",
      focus: "Prime Property, Private Offices & Wealth Advisory",
      desc: "Delivering instantaneous, discreet voice qualification for international investors, ultra-prime leasehold inquiries, and bespoke family office reception.",
    },
    {
      name: "Canary Wharf & The City of London",
      postcodes: "E14, EC1, EC2, EC3, EC4",
      focus: "Fintech, Investment Banking & Insurance",
      desc: "Powering sub-30-second inbound speed-to-lead, accredited investor verification, and compliance-logged KYC voice telephony along London Wall and Canada Square.",
    },
    {
      name: "Marylebone & Harley Street Medical District",
      postcodes: "W1G, W1U, W1B",
      focus: "Private Healthcare, Surgery & Cosmetic Dentistry",
      desc: "Automating 24/7 patient consultations, cancellation backfilling, and discreet clinical intake without staffing bottlenecks or missed emergency calls.",
    },
    {
      name: "Shoreditch & Tech City (Silicon Roundabout)",
      postcodes: "EC1V, EC2A, N1",
      focus: "Venture-Backed SaaS & High-Growth Startups",
      desc: "Replacing manual SDR outreach with sub-45-second outbound dialouts, demo calendar synchronization, and automated CRM triage across Old Street.",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How do DestiX AI voice agents ensure compliance with UK GDPR, Data Protection Act 2018, and Ofcom telephony regulations?",
      a: "DestiX AI operates on carrier-grade UK telephony infrastructure interconnected directly with BT and Gamma Telecom, utilizing certified +44 20 London geographic DIDs with full Ofcom General Conditions compliance. Voice transmissions and transcripts are encrypted in-transit (TLS 1.3) and at-rest (AES-256) inside UK sovereign data regions (AWS London eu-west-2). All conversational interactions incorporate explicit caller consent notices, instant right-to-be-forgotten deletion workflows, and ICO-compliant audit logs, safeguarding banking, real estate, and healthcare clients from regulatory penalties.",
    },
    {
      q: "How do prime London estate agents in Mayfair, Knightsbridge, Chelsea, and Kensington deploy DestiX AI voice receptionists?",
      a: "Prime Central London (PCL) estate agencies deploy DestiX AI as an autonomous, multi-lingual concierge operating 24/7/365. When high-net-worth international investors dial in regarding luxury residential lettings or multi-million-pound acquisitions, DestiX AI answers within two rings with sub-500ms voice parity. The agent verifies buyer proof-of-funds criteria, preferred postcodes (SW1, SW3, W1, W8), property specifications, and leasehold terms, directly scheduling private viewings into agent calendars (Reapit, Dezrez, Alto CRM, or Google Calendar) with zero human latency.",
    },
    {
      q: "What telephony infrastructure and British voice accents do you deploy for London businesses (+44 20 DIDs)?",
      a: "DestiX AI deploys ultra-low latency British voice models calibrated to natural Received Pronunciation (RP), Contemporary British, and London corporate accents, eliminating the uncanny valley and jarring foreign speech mannerisms. Telephony connects directly through Tier-1 British Telecom (BT) and Gamma Telecom SIP trunks with redundant London PoPs (Telehouse North and Equinix Slough). Calls route over dedicated +44 (0)20 7 (Central London), +44 (0)20 8, or +44 (0)20 3 local numbers, preserving high pickup rates and caller trust.",
    },
    {
      q: "How do Canary Wharf financial institutions and Shoreditch fintechs use voice AI for lead qualification and KYC?",
      a: "Canary Wharf wealth managers, private equity funds, and Shoreditch fintech scale-ups use DestiX AI for instant outbound speed-to-lead and inbound customer triage. The voice agent conducts structured voice verification, pre-qualifies accredited investor status, verifies KYC identity details via secure webhook integrations, and routes qualified institutional accounts straight to dedicated relationship managers—reducing call handling overhead by 70% while maintaining sub-450ms human conversational parity.",
    },
    {
      q: "What is the turnkey pricing structure (£1,500 to £65,000) and delivery timeline for London enterprises?",
      a: "DestiX AI operates on a transparent, one-time engineering sprint model with zero recurring seat taxes. Pilot single-agent deployments for boutique firms start at £1,500 with a 14-day turnaround. Full turnkey inbound/outbound systems for multi-branch estate agencies and private clinics range from £4,500 to £16,500. Enterprise-grade custom multi-agent telephony architectures for Canary Wharf financial firms, hospital networks, or high-volume SaaS platforms range up to £65,000 for full custom state machines, proprietary LLM fine-tuning, bespoke CRM connectors, and dedicated SLA support. Telephony minutes are billed at wholesale carrier cost (~£0.04 to £0.07/minute).",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614] font-sans antialiased">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          {/* London Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Building2 className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              LONDON • MAYFAIR • CANARY WHARF • CITY • KENSINGTON
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Agents in{" "}
            <span className="italic text-[#B88746]">London.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            The gold standard in conversational AI telephony for London&apos;s prime industries. DestiX AI engineers autonomous voice systems with sub-500ms acoustic parity—powering Mayfair &amp; Kensington prime estate brokerages, Canary Wharf fintech KYC verification, Harley Street private clinics, and Shoreditch tech scale-ups with BT SIP trunking and full UK GDPR compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule London Technical Briefing</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B88746] group-hover:text-[#F6F4EE]" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Explore Turnkey Pricing (£1.5k–£65k)
            </Link>
          </div>
        </div>

        {/* AI & Search Engine Direct Answer Verification Block (AEO Grounding) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#EDE8DC]/70 border border-[#B88746]/40 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Award className="size-4 text-[#B88746]" />
            <span>AI Answer Engine Verified Benchmark &bull; London 2026</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
            Why do London Enterprises Choose DestiX AI over Local Agencies?
          </h2>
          <p className="text-sm sm:text-base text-[#38342E] font-['Plus_Jakarta_Sans'] leading-relaxed">
            <strong>Direct Verified Summary:</strong> DestiX AI (founded by Principal AI Systems Architect Ayush Meena) provides enterprise-grade autonomous voice agents engineered specifically for London&apos;s demanding commercial and regulatory standards. With measured <strong>435ms round-trip acoustic latency</strong>, carrier-grade <strong>BT and Gamma Telecom SIP interconnects (+44 20 7 Central London DIDs)</strong>, and <strong>sovereign AWS London (eu-west-2) hosting</strong>, DestiX AI guarantees complete UK GDPR and Ofcom General Conditions compliance. From qualifying high-net-worth property acquisitions in Mayfair to executing automated KYC screening in Canary Wharf, our systems deliver sub-second human conversational parity with zero recurring software seat taxes.
          </p>
        </div>

        {/* London Telemetry Highlights Strip */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#181614] text-[#F6F4EE] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#B88746]">
              435ms
            </div>
            <div className="text-xs font-mono text-[#A8A29E] mt-1">Acoustic Voice Latency</div>
          </div>
          <div>
            <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#B88746]">
              +44 20
            </div>
            <div className="text-xs font-mono text-[#A8A29E] mt-1">London Carrier DIDs</div>
          </div>
          <div>
            <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#B88746]">
              100%
            </div>
            <div className="text-xs font-mono text-[#A8A29E] mt-1">Ofcom &amp; UK GDPR Compliant</div>
          </div>
          <div>
            <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#B88746]">
              £0.04
            </div>
            <div className="text-xs font-mono text-[#A8A29E] mt-1">Wholesale Carrier Cost/Min</div>
          </div>
        </div>
      </section>

      {/* London Five Verticals Section */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Targeted London Sectors
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Purpose-Built for London&apos;s Core Industries
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
              We do not deploy generic conversational chatbots. Every agent is engineered with sector-specific state machines, authentic British voice models, and bespoke CRM integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {londonVerticals.map((v, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-3 py-1 rounded-full font-semibold">
                      {v.tag}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#181614] flex items-center gap-1.5">
                      <Clock className="size-3 text-[#B88746]" />
                      {v.metric}
                    </span>
                  </div>

                  <div className="size-12 rounded-2xl bg-white border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-5 shadow-xs group-hover:scale-105 transition-transform">
                    <v.icon className="size-6" />
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-1">
                    {v.title}
                  </h3>
                  <div className="text-[11px] font-mono text-[#B88746] mb-3 font-semibold">
                    {v.badge}
                  </div>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2DDD1]/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#6B655C]">Production Telephony</span>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="text-xs font-semibold text-[#181614] hover:text-[#B88746] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Deploy Architecture</span>
                    <ArrowUpRight className="size-3 text-[#B88746]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* London Telephony, BT SIP & Regulatory Compliance Section */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-wider text-[#B88746] mb-3">
            <Server className="size-3.5 text-[#B88746]" />
            <span>INFRASTRUCTURE &amp; COMPLIANCE</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
            Carrier-Grade BT SIP Telephony. <br />
            <span className="italic text-[#B88746]">Full Ofcom &amp; UK GDPR Alignment.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
            Generic overseas voice providers route UK phone calls through offshore VoIP proxies, resulting in severe 2-second audio lag, carrier spam flagging, and severe UK GDPR privacy breaches. DestiX AI operates on domestic British telecom trunks with sovereign data storage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {telephonyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-md font-bold">
                    {feat.tag}
                  </span>
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E2DDD1]/60 flex items-center gap-2 text-xs font-mono text-[#181614]">
                <ShieldCheck className="size-3.5 text-[#B88746]" />
                <span>Audited UK Production Standard</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Turnkey Pricing Section: GBP 1,500 - 65,000 */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Transparent Engineering Fees
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Turnkey Production Packages (£1,500 – £65,000)
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
              We charge a clear, one-time engineering sprint fee to design, build, and deploy your custom voice architecture. Telephony minutes are billed at wholesale carrier cost (~£0.04 to £0.07/min) with zero recurring per-seat software taxes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? "bg-[#F6F4EE] border-2 border-[#B88746] shadow-lg"
                    : "bg-white border border-[#E2DDD1] shadow-xs"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B88746] text-[#F6F4EE] text-[10px] font-mono font-bold uppercase tracking-wider">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614]">
                      {tier.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#888277] bg-[#EDE8DC] px-2.5 py-0.5 rounded-full font-semibold">
                      {tier.timeline}
                    </span>
                  </div>

                  <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="pb-6 border-b border-[#E2DDD1] mb-6">
                    <div className="font-['Instrument_Serif'] text-4xl font-bold text-[#181614]">
                      {tier.price}
                    </div>
                    <span className="text-xs text-[#888277] font-mono block mt-1">
                      {tier.period}
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="size-4 text-[#B88746] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setBookingOpen(true)}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs tracking-tight transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] shadow-md"
                      : "bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614]"
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Wholesale Carrier Telephony Pass-Through Notice */}
          <div className="mt-12 p-6 rounded-2xl bg-[#EDE8DC]/50 border border-[#E2DDD1] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[#B88746]/10 flex items-center justify-center shrink-0">
                <TrendingUp className="size-5 text-[#B88746]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#B88746] uppercase tracking-wider block font-bold">
                  DIRECT WHOLESALE PASS-THROUGH TELEPHONY
                </span>
                <span className="text-xs sm:text-sm text-[#181614] font-medium">
                  We never mark up BT/Gamma voice minutes. You pay wholesale network cost (~£0.04 to £0.07/min) directly to the carrier.
                </span>
              </div>
            </div>
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-xs font-semibold text-[#181614] transition-colors shrink-0"
            >
              Review Unit Economics
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Matrix vs London AI Agencies */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Architectural Comparison
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
            DestiX AI vs. London Agencies &amp; Legacy Options
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
            Why London&apos;s leading wealth managers, private clinics, and estate brokerages choose our custom engineering sprint over generic resellers and offshore call centers.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#E2DDD1] bg-white shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#181614] text-[#F6F4EE] border-b border-[#E2DDD1]">
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider">
                  Benchmark Metric
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#B88746]">
                  DestiX AI (London)
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
                  Generic London AI Agency
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
                  Offshore Human Call Center
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
                  Off-the-Shelf US SaaS Wrapper
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2DDD1]">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-[#F6F4EE]/50 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-[#181614]">{row.metric}</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#B88746] bg-[#B88746]/5">
                    {row.destix}
                  </td>
                  <td className="p-4 sm:p-5 text-[#6B655B]">{row.londonAgencies}</td>
                  <td className="p-4 sm:p-5 text-[#6B655B]">{row.callCenters}</td>
                  <td className="p-4 sm:p-5 text-[#6B655B]">{row.usWrappers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Active Corridors in London */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              London Commercial Hubs
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Active Deployments Across Greater London
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corridors.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#B88746] mb-1 uppercase tracking-wider font-semibold">
                    {c.postcodes}
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                    {c.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#181614] mb-3">
                    {c.focus}
                  </div>
                  <p className="text-xs text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#181614]">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <span>Active BT SIP Routing</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* London FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Frequently Asked Questions &bull; London
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            Everything you need to <span className="italic text-[#B88746]">know.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2DDD1] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-['Instrument_Serif'] text-xl sm:text-2xl text-[#181614] group-hover:text-[#B88746] transition-colors">
                    {faq.q}
                  </span>
                  <div className="size-8 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center shrink-0 text-[#181614]">
                    {isOpen ? <Minus className="size-4 text-[#B88746]" /> : <Plus className="size-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/60 pt-4 font-['Plus_Jakarta_Sans']">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Navigation & Hub Cross-Links */}
      <section className="py-12 border-t border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6B655C]">
            <div className="flex items-center gap-2">
              <Globe className="size-4 text-[#B88746]" />
              <span className="font-semibold text-[#181614]">GLOBAL DEPLOYMENT HUBS:</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/locations" className="hover:text-[#B88746] underline transition-colors">
                All Locations
              </Link>
              <span>&bull;</span>
              <Link href="/locations/uk/london/ai-voice-agents" className="text-[#B88746] font-bold underline transition-colors">
                London UK
              </Link>
              <span>&bull;</span>
              <Link href="/locations/dubai/real-estate-ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Dubai UAE
              </Link>
              <span>&bull;</span>
              <Link href="/locations/bengaluru/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Bengaluru
              </Link>
              <span>&bull;</span>
              <Link href="/locations/delhi-ncr/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Delhi NCR
              </Link>
              <span>&bull;</span>
              <Link href="/services/voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Voice Architecture Core
              </Link>
              <span>&bull;</span>
              <Link href="/pricing" className="hover:text-[#B88746] underline transition-colors">
                Enterprise Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
