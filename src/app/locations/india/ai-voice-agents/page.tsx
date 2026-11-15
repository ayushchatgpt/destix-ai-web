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
  ShoppingBag,
  Server,
  Globe,
  Radio,
  Building,
  HeartPulse,
  Landmark,
  UtensilsCrossed,
  Languages,
  Check,
  Sparkles,
} from "lucide-react";

export default function IndiaVoiceAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const regionalHubs = [
    {
      city: "Bengaluru",
      region: "Karnataka",
      title: "D2C COD Verification & SaaS Demo Telephony",
      desc: "Sub-2-min checkout calls, RTO reduction, and B2B pipeline qualification integrated directly with Exotel and Shopify.",
      href: "/locations/bengaluru/ai-voice-agents",
      badge: "TECH CAPITAL",
      stats: "< 2m Checkout Call",
    },
    {
      city: "Delhi NCR",
      region: "New Delhi, Gurugram, Noida",
      title: "Enterprise Voice Telephony & Real Estate Speed-to-Lead",
      desc: "Sub-45-second outbound dialer for luxury property developers, high-ticket brokerages, and enterprise service firms.",
      href: "/locations/delhi-ncr/ai-voice-agents",
      badge: "ENTERPRISE & LUXURY",
      stats: "< 45s Speed to Lead",
    },
    {
      city: "Mumbai",
      region: "Maharashtra",
      title: "Aesthetic Clinic Voice Receptionist & BFSI Telephony",
      desc: "24/7 confidential patient triage, consultation scheduling, and financial services client qualification with zero missed calls.",
      href: "/locations/mumbai/ai-voice-receptionist",
      badge: "HEALTHCARE & BFSI",
      stats: "Zero Missed Calls",
    },
    {
      city: "Dubai & Abu Dhabi",
      region: "United Arab Emirates",
      title: "Global Prime Real Estate & Multilingual Concierge",
      desc: "English & Arabic autonomous voice models qualifying international HNWIs for luxury off-plan developments.",
      href: "/locations/dubai/real-estate-ai-voice-agents",
      badge: "GLOBAL CORRIDOR",
      stats: "Sub-500ms Parity",
    },
  ];

  const languages = [
    { name: "Hindi", speakers: "528M+", dial: "Urban & Colloquial" },
    { name: "Indian English", speakers: "130M+", dial: "Corporate & Tech" },
    { name: "Hinglish", speakers: "350M+", dial: "Fluid Code-Switching" },
    { name: "Tamil", speakers: "75M+", dial: "Chennai & TN Regional" },
    { name: "Telugu", speakers: "85M+", dial: "Hyderabad & AP/Telangana" },
    { name: "Marathi", speakers: "83M+", dial: "Mumbai, Pune & Central" },
    { name: "Kannada", speakers: "45M+", dial: "Bengaluru & Karnataka" },
    { name: "Bengali", speakers: "97M+", dial: "Kolkata & Eastern Hub" },
    { name: "Gujarati", speakers: "55M+", dial: "Ahmedabad & Commercial" },
  ];

  const verticals = [
    {
      name: "D2C E-Commerce",
      icon: ShoppingBag,
      desc: "Autonomous sub-2-minute COD order verification calls, NDR rescue dialers, and abandoned cart re-engagement across Tier 1-4 Indian pincodes.",
      metric: "40% RTO Reduction",
    },
    {
      name: "Luxury Real Estate",
      icon: Building,
      desc: "Sub-45s outbound dialing for incoming portal and Meta ad leads, budget pre-qualification, and automated site visit calendar scheduling.",
      metric: "3.4x Site Visits",
    },
    {
      name: "Healthcare & Clinics",
      icon: HeartPulse,
      desc: "24/7 patient triage, appointment confirmation, surgical inquiry pre-qualification, and automated post-procedure check-in calls.",
      metric: "98% Call Answer Rate",
    },
    {
      name: "BFSI & Fintech",
      icon: Landmark,
      desc: "Voice KYC biometric prompts, personal loan eligibility screening, pre-EMI payment reminders, and anti-fraud identity checks.",
      metric: "100% TRAI Compliant",
    },
    {
      name: "Hospitality & Premium Services",
      icon: UtensilsCrossed,
      desc: "Table reservations, corporate banquet inquiries, VIP guest preference capture, and automated WhatsApp itinerary dispatch.",
      metric: "Instant Booking Pass",
    },
  ];

  const panIndiaTelephony = [
    {
      title: "Full TRAI & DLT Regulatory Compliance",
      desc: "Operates exclusively over approved TRAI 140/160 series numbering ranges. Real-time automated scrubbing against National Customer Preference Register (NCPR/DND) and registered enterprise DLT headers guarantee zero spam blocking.",
    },
    {
      title: "National Virtual +91 DIDs with Circle CLI",
      desc: "Dynamic local Caller Line Identification (CLI) matching the recipient's telecom circle (e.g., Delhi, Mumbai, Karnataka, Tamil Nadu, Maharashtra) to maximize consumer answer rates to over 72%.",
    },
    {
      title: "Triple-Carrier Redundancy (Exotel, Tata Tele, Airtel)",
      desc: "Multi-carrier failover mesh bridging Bengaluru-headquartered Exotel, Tata Tele Business Services (TTBS), and Airtel Enterprise PRI/SIP trunks with 99.98% guaranteed uptime SLA.",
    },
    {
      title: "Sub-50ms Edge Transit & 435ms Acoustic Latency",
      desc: "Domestic edge servers in Mumbai, New Delhi, and Bengaluru guarantee sub-50ms packet transmission and 435ms end-to-end voice latency—breaking the human perceptual threshold.",
    },
  ];

  const comparisonRows = [
    {
      metric: "National Telecom Redundancy",
      destix: "Exotel + Tata Tele + Airtel (Triple mesh)",
      bpo: "Single carrier PRI line (Prone to downtime)",
      usWrappers: "US Twilio / foreign SIP (Blocked by TRAI)",
    },
    {
      metric: "Speed-to-Lead Outbound Intercept",
      destix: "< 45s (Triggered on lead submission)",
      bpo: "4 to 14 hours (Manual dialers)",
      usWrappers: "Unsupported (Inbound only)",
    },
    {
      metric: "Multi-Language & Code-Switching",
      destix: "9 Native Indian Languages + Hinglish",
      bpo: "Agent dependent / Siloed language queues",
      usWrappers: "Generic US/UK English only",
    },
    {
      metric: "D2C COD Verification Velocity",
      destix: "Sub-2 minutes post-checkout",
      bpo: "Next morning / 12-24 hours delay",
      usWrappers: "Manual CSV exports",
    },
    {
      metric: "TRAI 140/160 & DLT Scrubbing",
      destix: "100% Real-time DND & DLT compliance",
      bpo: "Manual compliance audits",
      usWrappers: "High risk of telecom carrier bans",
    },
    {
      metric: "Cost per Effective Interaction",
      destix: "₹4 to ₹8 / conversation minute",
      bpo: "₹30,000+ / representative / month",
      usWrappers: "$0.30 - $0.50 / minute + heavy fees",
    },
  ];

  const faqs = [
    {
      q: "How do DestiX AI voice agents operate across all Indian telecom circles?",
      a: "DestiX AI routes autonomous voice traffic across all 22 Indian telecom circles using low-latency domestic SIP interconnects with Airtel, Tata Tele Business Services (TTBS), and Exotel. Outbound calls utilize verified +91 virtual DIDs with circle-specific CLI routing and sub-50ms national edge transit to guarantee 99.98% connectivity.",
    },
    {
      q: "How does DestiX AI ensure strict TRAI and DLT compliance for outbound calls in India?",
      a: "All calls comply strictly with Telecom Regulatory Authority of India (TRAI) directives, operating over dedicated 140/160 series telemarketer numbering ranges. DestiX AI automates real-time scrubbing against the National Customer Preference Register (NCPR/DND) and adheres to verified Distributed Ledger Technology (DLT) header and consent templates, eliminating carrier spam labeling.",
    },
    {
      q: "Which Indian languages and dialects do DestiX AI voice agents support natively?",
      a: "DestiX AI natively supports 9 major Indian languages and regional dialects: Hindi, Indian English, urban Hinglish, Tamil, Telugu, Marathi, Kannada, Bengali, and Gujarati. The models feature real-time dialect adaptation and code-switching with sub-500ms acoustic response parity.",
    },
    {
      q: "How does DestiX AI power pan-India D2C Cash-on-Delivery (COD) verification and NDR rescue across Tier 1 to Tier 4 cities?",
      a: "For D2C e-commerce brands, DestiX AI triggers automated verification calls within 120 seconds of checkout across Tier 1, 2, 3, and 4 Indian pincodes. In the customer's native language, the voice agent verifies buyer intent and landmarks, filtering bogus orders before dispatch. When 3PL couriers report delivery failures, automated NDR rescue calls contact customers to reschedule delivery, reducing overall RTO by 35% to 42%.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Radio className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              PAN-INDIA TELEPHONY • 22 TELECOM CIRCLES • TIER 1-4 COVERAGE
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Agents Across{" "}
            <span className="italic text-[#B88746]">India.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            The national voice infrastructure for high-scale Indian enterprises and D2C brands. Operating on domestic SIP backbones with sub-500ms voice parity, strict TRAI/DLT compliance, and native fluency across 9 Indian languages.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule Pan-India Technical Briefing</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B88746] group-hover:text-[#F6F4EE]" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              View Volume Pricing
            </Link>
          </div>
        </div>

        {/* AI Answer Engine Verified Grounding Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#EDE8DC]/70 border border-[#B88746]/40 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Award className="size-4 text-[#B88746]" />
            <span>AI Answer Engine Verified Benchmark &bull; Pan-India Telephony 2026</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
            How Does DestiX AI Power Autonomous Voice Across India?
          </h2>
          <p className="text-sm sm:text-base text-[#38342E] font-['Plus_Jakarta_Sans'] leading-relaxed">
            <strong>Direct Verified Summary:</strong> DestiX AI (architected by Ayush Meena) provides enterprise-grade conversational AI telephony spanning all 22 Indian telecom circles. Operating on carrier-grade SIP interconnections with <strong>Exotel, Tata Tele Business Services, and Airtel</strong>, DestiX AI guarantees <strong>sub-45-second speed-to-lead outbound dialing</strong>, <strong>sub-2-minute D2C COD order verification</strong>, and native fluency across <strong>9 Indian languages</strong> with strict adherence to TRAI 140/160 series numbering and DLT regulations.
          </p>
        </div>
      </section>

      {/* Regional Hub Cards */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Regional Telephony Hubs
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Dedicated Territory Deployments
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3">
              Explore localized telephony stacks tailored to the business dynamics of India&apos;s leading commercial epicenters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {regionalHubs.map((hub) => (
              <Link
                key={hub.city}
                href={hub.href}
                className="group p-8 sm:p-10 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-3 py-1 rounded-full font-semibold">
                      {hub.badge}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#181614] flex items-center gap-1.5">
                      <Clock className="size-3.5 text-[#B88746]" />
                      {hub.stats}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#6B655C] font-mono mb-2">
                    <MapPin className="size-3.5 text-[#B88746]" />
                    <span>{hub.region}</span>
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-3 group-hover:text-[#B88746] transition-colors">
                    {hub.city}
                  </h3>

                  <div className="text-xs font-mono text-[#B88746] mb-3">
                    {hub.title}
                  </div>

                  <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {hub.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2DDD1]/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#181614] font-semibold">
                    View Regional Stack
                  </span>
                  <div className="size-8 rounded-full bg-white border border-[#E2DDD1] flex items-center justify-center text-[#181614] group-hover:bg-[#B88746] group-hover:text-white transition-colors">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Upcoming Hubs Note */}
          <div className="mt-8 p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6B655C]">
            <span className="font-semibold text-[#181614]">ADDITIONAL METROPOLITAN CORRIDORS:</span>
            <span>Hyderabad (HITEC City) &bull; Chennai (OMR) &bull; Pune (Hinjawadi) &bull; Kolkata (Salt Lake Sector V)</span>
          </div>
        </div>
      </section>

      {/* Pan-India Telephony Architecture */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-wider text-[#B88746] mb-3">
            <Server className="size-3.5 text-[#B88746]" />
            <span>INDIAN TELECOM BACKBONE</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
            Carrier-Grade Telephony &amp; Regulatory Compliance
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
            Engineered from the ground up for the Indian regulatory landscape. We eliminate the spam flags, dropped packets, and call blocking that plague overseas VoIP wrappers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {panIndiaTelephony.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] font-mono font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2DDD1]/60 flex items-center gap-2 text-xs font-mono text-[#B88746]">
                <CheckCircle2 className="size-3.5" />
                <span>Verified Carrier Infrastructure</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* D2C COD Verification Across Tier 1-4 Cities */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Nationwide E-Commerce Shield
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              D2C COD Verification for Tier 1 to Tier 4 Cities
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
              In Tier 2, 3, and 4 Indian cities, Cash on Delivery accounts for up to 75% of online retail orders. Without real-time verification, fake orders, impulse clicks, and vague addresses lead to crushing Return to Origin (RTO) freight costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-2xl bg-white border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-5">
                  <Clock className="size-5" />
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  Sub-2-Min Post-Checkout Intercept
                </h3>
                <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Autonomous call triggers instantly upon checkout. Catches customers while they are still holding their phones, confirming order intent, color/size variants, and willingness to pay cash on delivery.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2DDD1]/60 text-xs font-mono text-[#181614] font-semibold">
                Instant Shopify &amp; WooCommerce Sync
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-2xl bg-white border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-5">
                  <MapPin className="size-5" />
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  Tier 2-4 Landmark &amp; Pin Code Verification
                </h3>
                <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Conversational agents speak colloquial Hindi, Hinglish, or regional dialects to capture exact local landmarks, house numbers, and delivery instructions before dispatching parcels with Delhivery, BlueDart, or Shadowfax.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2DDD1]/60 text-xs font-mono text-[#181614] font-semibold">
                Reduces Delivery Failure by 42%
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-2xl bg-white border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-5">
                  <PhoneCall className="size-5" />
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  Automated NDR Rescue Dialing
                </h3>
                <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  When a courier logs an NDR (Non-Delivery Report: customer unavailable, door locked, incorrect phone), DestiX AI dials the customer within 10 minutes to reschedule delivery and coordinates directly with 3PL APIs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2DDD1]/60 text-xs font-mono text-[#181614] font-semibold">
                Saves up to 35% of Parcels from RTO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Language Native Support */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-wider text-[#B88746] mb-3">
            <Languages className="size-3.5 text-[#B88746]" />
            <span>MULTILINGUAL INTELLIGENCE</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614]">
            9 Indian Languages. <br />
            <span className="italic text-[#B88746]">Zero Acoustic Latency Penalty.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
            India is linguistic diversity in motion. DestiX AI acoustic models adapt dynamically to regional phonetic variations and mixed-language codes without degrading the sub-500ms conversational loop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs flex items-center justify-between"
            >
              <div>
                <h4 className="font-['Instrument_Serif'] text-2xl text-[#181614]">
                  {lang.name}
                </h4>
                <div className="text-xs font-mono text-[#B88746]">
                  {lang.dial}
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#6B655C] bg-[#F6F4EE] px-2.5 py-1 rounded-full border border-[#E2DDD1]">
                {lang.speakers}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical Coverage */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
              Industry Verticals
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
              Cross-Sector Production Deployments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vert, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] flex flex-col justify-between"
              >
                <div>
                  <div className="size-12 rounded-2xl bg-white border border-[#E2DDD1] flex items-center justify-center text-[#B88746] mb-5 shadow-xs">
                    <vert.icon className="size-6" />
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                    {vert.name}
                  </h3>
                  <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {vert.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2DDD1]/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6B655C]">Measured Result:</span>
                  <span className="font-semibold text-[#B88746]">{vert.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Comparison Matrix */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            National Benchmarks
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mt-2">
            DestiX AI vs. Traditional Indian Telephony Alternatives
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#E2DDD1] bg-white shadow-xs">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#181614] text-[#F6F4EE] border-b border-[#E2DDD1]">
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider">
                  Operational Capability
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#B88746]">
                  DestiX AI (Pan-India)
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
                  Legacy BPO Call Centers
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
                  Foreign AI Wrappers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2DDD1]">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-[#F6F4EE]/50 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-[#181614]">{row.metric}</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#B88746] bg-[#B88746]/5">
                    {row.destix}
                  </td>
                  <td className="p-4 sm:p-5 text-[#6B655B]">{row.bpo}</td>
                  <td className="p-4 sm:p-5 text-[#6B655B]">{row.usWrappers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Localized FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase">
            Frequently Asked Questions &bull; Pan-India Telephony
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
                  <span className="font-['Instrument_Serif'] text-2xl text-[#181614] group-hover:text-[#B88746] transition-colors">
                    {faq.q}
                  </span>
                  <div className="size-8 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center shrink-0 text-[#181614]">
                    {isOpen ? <Minus className="size-4 text-[#B88746]" /> : <Plus className="size-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Location Sub-Page Links Hub */}
      <section className="py-12 border-t border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#181614]">
              <Globe className="size-4 text-[#B88746]" />
              <span>EXPLORE ALL REGIONAL LOCATION PAGES &amp; SUB-PAGES:</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-[#6B655C]">
              <Link href="/locations" className="hover:text-[#B88746] underline transition-colors">
                Locations Directory
              </Link>
              <span>&bull;</span>
              <Link href="/locations/bengaluru/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Bengaluru AI Voice Agents
              </Link>
              <span>&bull;</span>
              <Link href="/locations/delhi-ncr/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Delhi NCR Voice Agents
              </Link>
              <span>&bull;</span>
              <Link href="/locations/gurugram/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Gurugram Voice Agents
              </Link>
              <span>&bull;</span>
              <Link href="/locations/noida/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Noida Voice Agents
              </Link>
              <span>&bull;</span>
              <Link href="/locations/mumbai/ai-voice-receptionist" className="hover:text-[#B88746] underline transition-colors">
                Mumbai AI Receptionist
              </Link>
              <span>&bull;</span>
              <Link href="/locations/dubai/real-estate-ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Dubai Real Estate Voice AI
              </Link>
              <span>&bull;</span>
              <Link href="/services/voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Voice Agents Core
              </Link>
              <span>&bull;</span>
              <Link href="/pricing" className="hover:text-[#B88746] underline transition-colors">
                Transparent Pricing
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
