"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  MapPin,
  Building2,
  Stethoscope,
  Landmark,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Users,
  PhoneCall,
  Plus,
  Minus,
  Sparkles,
  Award,
  Send,
  FileText,
  BadgeCheck,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function MumbaiVoiceReceptionistPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // SECTION 1: Real Estate Capability Cards
  const realEstateCapabilities = [
    {
      title: "Sub-45s Speed-to-Lead for MagicBricks & 99acres",
      desc: "Instantly ingests webhooks from MagicBricks, 99acres, Housing.com, and Meta ads to dial inbound leads in under 45 seconds while the buyer is actively inspecting floor plans.",
      metric: "< 45s Callback",
      tag: "SPEED TO LEAD",
      icon: Zap,
    },
    {
      title: "Budget Qualification (₹1 Cr to ₹25 Cr+)",
      desc: "Conversational qualification assessing purchase horizons, configuration appetite (2BHK, 3BHK, luxury penthouses), ready capital vs pre-sanctioned loans, and end-user vs investor profiles.",
      metric: "₹1Cr - ₹25Cr+",
      tag: "HIGH-TICKET QUALIFICATION",
      icon: ShieldCheck,
    },
    {
      title: "Site Visit Scheduling for Bandra & Worli Showflats",
      desc: "Autonomously checks relationship manager calendars, locks in private sample flat walkthroughs, and synchronizes slots directly into LeadSquared, Salesforce, or Google Calendar.",
      metric: "Direct Slot Locking",
      tag: "SITE TOUR BOOKING",
      icon: Calendar,
    },
    {
      title: "Instant WhatsApp Brochure & Floor Plan Delivery",
      desc: "Dispatches high-resolution RERA project brochures, unit layout PDFs, cost sheets, and showflat location pins via official WhatsApp Business API immediately post-call.",
      metric: "Sub-60s Dispatch",
      tag: "WHATSAPP PIPELINE",
      icon: Send,
    },
  ];

  // SECTION 1: Developer Coverage
  const developers = [
    {
      name: "Lodha (Macrotech)",
      flagships: "Lodha World Towers, Lodha Park (Worli), Lodha Bellissimo, New Cuffe Parade",
      highlight: "Tuned for HNW sea-deck viewings, NRI portfolio inquiries, and luxury penthouse screening.",
    },
    {
      name: "Oberoi Realty",
      flagships: "Oberoi 360 West (Worli), Oberoi Sky City (Borivali), Oberoi Elysian (Goregaon)",
      highlight: "Polished, dignified English & Hinglish cadence matching Oberoi's signature ultra-luxury stature.",
    },
    {
      name: "Godrej Properties",
      flagships: "Godrej Horizon (Wadala), Godrej Bayview (Vashi), Godrej Reserve (Kandivali)",
      highlight: "High-volume speed-to-lead dialing for rapid launch sellouts and investor allocation.",
    },
    {
      name: "Piramal Realty",
      flagships: "Piramal Mahalaxmi, Piramal Aranya (Byculla), Piramal Revanta (Mulund)",
      highlight: "Racecourse and harbor-facing unit filters, payment plan walkthroughs, and executive follow-up.",
    },
    {
      name: "Rustomjee",
      flagships: "Rustomjee Crown (Prabhadevi), Rustomjee Seasons (BKC Annexe), Rustomjee Paramount (Bandra)",
      highlight: "Gated luxury community screening with bespoke booking confirmations for Bandra elite.",
    },
    {
      name: "Hiranandani",
      flagships: "Hiranandani Gardens (Powai), Hiranandani Estate (Thane), Regent Hill",
      highlight: "Township lifestyle qualification, corporate CXO relocation triage, and sample villa tours.",
    },
  ];

  // SECTION 1: Micro-Market Coverage
  const microMarkets = [
    {
      market: "Bandra West",
      locations: "Pali Hill, Carter Road, Perry Cross Road",
      desc: "Seafront luxury developments, Bollywood & corporate elite corridors, discreet HNWI/NRI call handling.",
    },
    {
      market: "Worli Sea Face & South Mumbai",
      locations: "Worli, Lower Parel, Mahalaxmi, Pedder Road",
      desc: "Ultra-luxury penthouses (₹15 Cr to ₹50 Cr+), coastal road connectivity, duplex and sky villa buyer screening.",
    },
    {
      market: "Lower Parel",
      locations: "Senapati Bapat Marg, Currey Road, Phoenix Corridor",
      desc: "Corporate CXO residential towers, walk-to-work lifestyle positioning, ready-possession luxury inventory.",
    },
    {
      market: "Bandra Kurla Complex (BKC)",
      locations: "G Block, BKC Connector, Kalanagar Annexe",
      desc: "Global banking executives, consulate directors, and premium commercial office leasing callers.",
    },
    {
      market: "Powai",
      locations: "Hiranandani Gardens, Powai Lake Promenade",
      desc: "Tech leadership, startup founders, and high-density luxury gated communities seeking family homes.",
    },
    {
      market: "Thane",
      locations: "Ghodbunder Road, Majiwada, Pokhran Road",
      desc: "High-velocity residential launches (₹1.2 Cr to ₹4 Cr), township buyer triage, weekend site visits.",
    },
    {
      market: "Navi Mumbai",
      locations: "Palm Beach Road, Kharghar, Dronagiri",
      desc: "Sea-facing luxury high-rises and international airport investment corridor pre-qualification.",
    },
  ];

  // SECTION 2: Healthcare Specialties
  const healthcareSpecialties = [
    {
      specialty: "Cosmetic Surgery & Aesthetics",
      focus: "Rhinoplasty, Liposuction, Facelifts, Non-Surgical Body Contouring",
      details: "Warm, confidential triage handling delicate aesthetic inquiries, surgical downtime questions, and specialist consultation booking.",
    },
    {
      specialty: "Dermatology & Trichology",
      focus: "Laser Skin Treatments, Hair Restoration, Acne Revision, Anti-Aging",
      details: "Screens skin concerns, explains treatment consultation structures, and fills high-ticket procedure calendar slots.",
    },
    {
      specialty: "Advanced Dental & Implantology",
      focus: "Full-Mouth Rehabilitation, Invisalign, Dental Implants, Porcelain Veneers",
      details: "Triages emergency dental pain versus elective smile makeover consults, coordinating dental operatory schedules.",
    },
    {
      specialty: "Ophthalmology & Refractive Suites",
      focus: "SMILE, Contoura Vision LASIK, Robotic Cataracts, Premium IOL Consults",
      details: "Pre-screens candidate visual parameters, coordinates diagnostic workup slots, and sends pre-procedure WhatsApp guidance.",
    },
    {
      specialty: "IVF & Fertility Centers",
      focus: "Confidential Fertility Workups, Egg Freezing, IUI/IVF Cycle Planning",
      details: "Empathetic, discreet caller intake protecting patient privacy, answering protocol timelines, and booking senior reproductive endocrinologist consultations.",
    },
  ];

  // SECTION 2: Healthcare Operational Pillars
  const clinicPillars = [
    {
      title: "Direct EMR & Practo Integration",
      desc: "Schedules consultations directly into your clinic management software (Practo, Clinicea, Google Calendar) with zero double-booking and custom buffer windows.",
      tag: "SYSTEM SYNC",
      metric: "Real-Time Sync",
    },
    {
      title: "Confidential Patient Intake & Triage",
      desc: "Answers callers within two rings, determines treatment urgency, gathers medical history notes securely, and complies with healthcare data privacy protocols.",
      tag: "PATIENT TRIAGE",
      metric: "< 2 Rings",
    },
    {
      title: "Automated WhatsApp No-Show Reduction",
      desc: "Delivers two-way WhatsApp confirmation cards, automated pre-consultation reminders, clinic directions, and one-tap rescheduling options.",
      tag: "ATTENDANCE RECOVERY",
      metric: "< 12% No-Shows",
    },
  ];

  // SECTION 3: BFSI Cards
  const bfsiCards = [
    {
      title: "BKC Wealth Managers & Family Offices",
      desc: "Discreet inbound screening for ultra-HNW clients, concierge routing to dedicated relationship managers, and automated calendar scheduling for quarterly portfolio reviews.",
      tag: "WEALTH ADVISORY",
      metric: "Discreet Screening",
    },
    {
      title: "Mutual Fund Distributors & PMS Firms",
      desc: "Automated SIP renewal reminders, mandate verification calls, KYC re-submission alerts, and investment advisory calendar coordination across Mumbai financial desks.",
      tag: "ASSET MANAGEMENT",
      metric: "Automated Mandates",
    },
    {
      title: "Insurance & Loan Verification Telephony",
      desc: "Instant contact for inbound term and health insurance inquiries, CIBIL eligibility pre-qualification screening, and complete TRAI-compliant audio audit logging.",
      tag: "UNDERWRITING TRIAGE",
      metric: "TRAI Compliant",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How quickly does DestiX AI call property buyers registered on 99acres or MagicBricks in Mumbai?",
      a: "DestiX AI connects via direct webhook to MagicBricks, 99acres, Housing.com, Meta Ads, and your developer landing pages. When a prospect submits their contact info, our voice agent dials them within 45 seconds while they are still browsing the property listing. This instantaneous response eliminates lead decay and typically triples contact rates compared to human telecallers.",
    },
    {
      q: "Can DestiX AI screen luxury property buyers for ₹5 Cr to ₹25 Cr+ ticket sizes without sounding aggressive?",
      a: "Yes. Our conversation models are calibrated for high-ticket discretion in Mumbai's luxury corridors like Worli, Bandra, and Lower Parel. Instead of interrogating prospects, the agent engages in a polite, consultative dialogue—inquiring whether they are seeking a home for personal residence or investment, checking their preferred configuration, and verifying readiness before confirming a private showflat preview.",
    },
    {
      q: "How does the AI voice receptionist handle confidential patient inquiries for cosmetic, IVF, or dental clinics?",
      a: "Medical calls are handled with specialized empathy and complete data privacy. The voice receptionist answers patient questions regarding doctor consultation timings, treatment availability, procedure downtime expectations, and clinic location. It records patient details into your secure EMR without human listening bias and coordinates private appointments 24/7.",
    },
    {
      q: "Does the voice agent understand Mumbai accents, local Marathi terms, and colloquial Hinglish?",
      a: "Yes. DestiX AI models are trained on authentic Mumbai speech cadences. The agent effortlessly understands and code-switches between Indian English, conversational Hindi, and local Marathi expressions. It operates with a sub-450ms voice latency, ensuring seamless, natural interruptions and zero awkward pauses.",
    },
    {
      q: "Can DestiX AI integrate directly with our CRM (LeadSquared, Salesforce) and healthcare EMR (Practo)?",
      a: "Yes. We deploy bi-directional webhooks and API connectors for real estate CRMs (LeadSquared, Salesforce, HubSpot, Zoho, Sell.Do) and medical software (Practo, Clinicea, Google Calendar). Qualification notes, call recordings, sentiment analysis, and confirmed booking slots appear in your dashboard instantly.",
    },
    {
      q: "What compliance standards does DestiX AI follow for financial services (BFSI) and TRAI calling regulations in Mumbai?",
      a: "Our telephony infrastructure adheres strictly to TRAI calling hours (9 AM to 8 PM for outbound commercial calls), National Customer Preference Register (NCPR / DND) scrubbing, and 100% encrypted call recordings. Inbound telephony operates 24/7/365 with complete audit logging for regulatory compliance.",
    },
    {
      q: "How long does it take to deploy a custom Mumbai voice agent for our brokerage or clinic?",
      a: "Production deployment takes 7 to 10 business days. This sprint includes knowledge base ingestion (project brochures, medical consultation protocols, pricing rules), telephony trunk configuration (022 Mumbai virtual numbers or national SIP), CRM/EMR integrations, and exhaustive multi-turn stress testing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-4xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <MapPin className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              MUMBAI • BANDRA • BKC • WORLI • SOUTH MUMBAI • THANE
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Agents in{" "}
            <span className="italic text-[#B88746]">Mumbai.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-xl text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-4">
            Engineered by Ayush Meena. DestiX AI deploys autonomous conversational telephony for Mumbai&apos;s highest-stakes enterprises. From sub-45-second speed-to-lead qualification for luxury real estate brokerages in Worli and Bandra to 24/7 confidential patient triage for elite South Mumbai clinics and BKC financial desks.
          </p>

          <p className="text-sm text-[#888277] font-mono mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Sub-450ms Latency • Dual-Vertical Telephony • Instant WhatsApp Dispatch</span>
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule Mumbai Architecture Audit</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              View Transparent Pricing Tiers
            </Link>
            <Link
              href="/services/voice-agents"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-transparent hover:bg-black/5 text-[#55514B] hover:text-[#181614] font-semibold text-sm transition-colors text-center"
            >
              Explore Voice Architecture &rarr;
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#888277]">Speed to Lead</div>
              <div className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mt-0.5">&lt; 45s</div>
              <div className="text-[11px] text-[#55514B]">MagicBricks / 99acres</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#888277]">Speech Cadence</div>
              <div className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mt-0.5">Sub-450ms</div>
              <div className="text-[11px] text-[#55514B]">Natural Hinglish &amp; English</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#888277]">Budget Screening</div>
              <div className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mt-0.5">₹1Cr - ₹25Cr+</div>
              <div className="text-[11px] text-[#55514B]">Luxury HNW Qualification</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#888277]">Clinic No-Shows</div>
              <div className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mt-0.5">&lt; 12%</div>
              <div className="text-[11px] text-[#55514B]">Via WhatsApp Confirmations</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Mumbai Luxury Real Estate */}
      <section id="real-estate" className="py-24 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88746]/10 text-[#B88746] text-xs font-mono tracking-wider uppercase mb-3">
              <Building2 className="size-3.5" />
              <span>Section 1 • Mumbai Luxury Real Estate</span>
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.05] mb-4">
              Sub-45s Speed-to-Lead for Mumbai&apos;s Ultra-Luxury Corridors
            </h2>
            <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              In Mumbai&apos;s hyper-competitive property market, cost-per-lead on Meta, Google, MagicBricks, and 99acres easily exceeds ₹3,500 to ₹7,000. When an HNW buyer registers an inquiry for a 3BHK or penthouse at 10:30 PM, waiting until 11 AM the next morning results in an 82% contact decay rate. DestiX AI activates within 45 seconds while the buyer is still engaged, conversationalizes in polished English or fluent Hinglish, and qualifies intent before booking a private showflat tour.
            </p>
          </div>

          {/* 4 Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {realEstateCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-9 rounded-3xl bg-[#F6F4EE]/70 border border-[#E2DDD1] hover:border-[#B88746]/60 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-[#E2DDD1] flex items-center justify-center text-[#B88746] group-hover:scale-105 transition-transform">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#B88746] bg-[#B88746]/10 px-3 py-1 rounded-full">
                        {cap.metric}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#888277] uppercase block mb-1">
                      {cap.tag}
                    </span>
                    <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#E2DDD1]/60 flex items-center justify-between text-xs font-medium text-[#181614]">
                    <span>Automated Pipeline Hook</span>
                    <span className="text-[#B88746]">&bull; Integrated</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Developer Coverage Spotlight */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#181614] text-[#F6EFE2] mb-16 shadow-xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-[#B88746] tracking-widest uppercase block mb-2">
                Developer &amp; Channel Partner Coverage
              </span>
              <h3 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#F6EFE2] mb-3">
                Calibrated for Mumbai&apos;s Marquee Developers
              </h3>
              <p className="text-sm sm:text-base text-[#C5BDB1] leading-relaxed">
                DestiX AI voice personas are customized for brokerages and channel partners representing Tier-1 builders. The system knows exact tower heights, unit configurations, RERA milestones, and possession schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developers.map((dev, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#23201C] border border-[#3A332E] hover:border-[#B88746]/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="size-4 text-[#B88746]" />
                    <h4 className="font-semibold text-base text-[#F6EFE2]">{dev.name}</h4>
                  </div>
                  <div className="text-xs font-mono text-[#B88746] mb-3 leading-snug">
                    {dev.flagships}
                  </div>
                  <p className="text-xs text-[#A8A196] leading-relaxed">
                    {dev.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Micro-Market Coverage */}
          <div>
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono text-[#B88746] tracking-widest uppercase block mb-1">
                Geographic Granularity
              </span>
              <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
                Mumbai Micro-Market Telephony Tuning
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {microMarkets.map((mm, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="size-3.5 text-[#B88746]" />
                    <span className="font-semibold text-sm text-[#181614]">{mm.market}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#888277] mb-2">{mm.locations}</div>
                  <p className="text-xs text-[#55514B] leading-relaxed">{mm.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Healthcare & Clinics */}
      <section id="healthcare" className="py-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88746]/10 text-[#B88746] text-xs font-mono tracking-wider uppercase mb-3">
            <Stethoscope className="size-3.5" />
            <span>Section 2 • Mumbai Healthcare &amp; Clinics</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.05] mb-4">
            24/7 Patient Triage &amp; Telephony for Mumbai Practices
          </h2>
          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
            Private practices and boutique healthcare clinics across South Mumbai and Bandra face front-desk bottlenecks during operating hours and lose high-value consultations after 8 PM. DestiX AI installs an autonomous clinic voice receptionist that answers on the second ring, handles confidential inquiries with medical composure, and eliminates no-shows.
          </p>
        </div>

        {/* 3 Clinic Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {clinicPillars.map((cp, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-[#E2DDD1] hover:border-[#B88746]/60 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full">
                    {cp.tag}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#181614]">
                    {cp.metric}
                  </span>
                </div>
                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                  {cp.title}
                </h3>
                <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {cp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Specialties Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DDD1] mb-12 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-[#B88746] tracking-widest uppercase block mb-1">
              Clinical Specializations
            </span>
            <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
              High-Ticket Aesthetic &amp; Surgical Consultation Intake
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthcareSpecialties.map((spec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F6F4EE]/60 border border-[#E2DDD1]/80 hover:border-[#B88746]/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <h4 className="font-semibold text-base text-[#181614]">{spec.specialty}</h4>
                </div>
                <div className="text-xs font-mono text-[#B88746] mb-2 leading-snug">
                  {spec.focus}
                </div>
                <p className="text-xs text-[#55514B] leading-relaxed">{spec.details}</p>
              </div>
            ))}
          </div>

          {/* Regional Clinic Footprint */}
          <div className="mt-8 pt-8 border-t border-[#E2DDD1] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#F6F4EE]">
              <div className="font-semibold text-[#181614] mb-1">South Mumbai Private Practices</div>
              <p className="text-[#55514B]">Pedder Road, Kemps Corner, Breach Candy, Marine Lines, and Altamount Road specialist clinics.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F4EE]">
              <div className="font-semibold text-[#181614] mb-1">Bandra Elite Wellness Hubs</div>
              <p className="text-[#55514B]">Linking Road, Pali Hill, and Waterfield Road cosmetic surgery suites and dental studios.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F4EE]">
              <div className="font-semibold text-[#181614] mb-1">BKC Medical Suites</div>
              <p className="text-[#55514B]">Executive health centers, corporate diagnostic suites, and multidisciplinary outpatient offices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Mumbai Financial Services */}
      <section id="bfsi" className="py-24 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88746]/10 text-[#B88746] text-xs font-mono tracking-wider uppercase mb-3">
              <Landmark className="size-3.5" />
              <span>Section 3 • Mumbai Financial Services (BFSI)</span>
            </div>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] leading-[1.05] mb-4">
              Voice Agents for BKC Wealth Managers &amp; BFSI
            </h2>
            <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              Mumbai is India&apos;s financial capital. For wealth managers in BKC, Nariman Point asset management firms, and insurance underwriters in Lower Parel, phone interactions require impeccable discretion, strict TRAI compliance, and instant coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bfsiCards.map((bfsi, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F6F4EE]/70 border border-[#E2DDD1] hover:border-[#B88746]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full">
                      {bfsi.tag}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#181614]">
                      {bfsi.metric}
                    </span>
                  </div>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3">
                    {bfsi.title}
                  </h3>
                  <p className="text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {bfsi.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E2DDD1]/60 text-xs text-[#888277] font-mono">
                  Compliant with TRAI &amp; RBI IT Guidelines
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links & Benchmark Intelligence Banner */}
      <section className="py-16 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#EDE8DC] border border-[#E2DDD1] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#B88746] mb-2 font-semibold">
              <Sparkles className="size-3.5" />
              <span>Independent 2026 Mumbai Market Research</span>
            </div>
            <h3 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-2">
              Evaluating Voice AI Providers in Mumbai?
            </h3>
            <p className="text-sm text-[#55514B] leading-relaxed">
              Read our technical benchmark comparing 10 voice telephony platforms across sub-450ms latency, Hinglish/Marathi code-switching, speed-to-lead execution, and clinic booking integrations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/blog/best-ai-voice-agent-companies-mumbai-2026"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Read 2026 Mumbai Benchmark Audit</span>
              <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mumbai Enterprise Technical Due Diligence & 14-Day Pilot Protocol */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-white shadow-xs">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase block mb-2">
              Mumbai Enterprise Technical Due Diligence
            </span>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-3">
              Audited Architecture, Marathi &amp; Hindi Audio, &amp; 14-Day Pilot
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              We eliminate vendor marketing ambiguity by publishing our complete technical stack, verified case telemetry, and an unambiguous 14-day production pilot SLA for Mumbai enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs mb-10">
            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="font-mono text-[#8F6426] font-semibold mb-2 uppercase">01 / Live Interactive Demos</div>
              <p className="text-[#55514B] leading-relaxed mb-3">
                Test real-time conversation 24/7 on our live acoustic console. Evaluates authentic Marathi, Hindi, and Mumbai English turn-taking with mid-sentence interruptions.
              </p>
              <div className="flex gap-2 font-mono text-[11px]">
                <Link href="/call/rhea" className="text-[#B88746] hover:underline">
                  Inbound Concierge &rarr;
                </Link>
                <span className="text-[#A8A29E]">&bull;</span>
                <Link href="/call/sarah" className="text-[#B88746] hover:underline">
                  Outbound Lead Dialer &rarr;
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="font-mono text-[#8F6426] font-semibold mb-2 uppercase">02 / Audited Architecture Plan</div>
              <p className="text-[#55514B] leading-relaxed mb-3">
                Deepgram Nova-3 ASR + Groq Llama 3.3 / Claude 3.5 Sonnet + Cartesia Sonic + Silero VAD v4. 435ms P50 latency budget on Tata/Airtel 022 PRI trunks.
              </p>
              <Link href="/research/2026-enterprise-ai-telephony-benchmark" className="font-mono text-[11px] text-[#B88746] hover:underline">
                View 524,000-Call Latency Study &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="font-mono text-[#8F6426] font-semibold mb-2 uppercase">03 / Verified Client Telemetry</div>
              <p className="text-[#55514B] leading-relaxed mb-3">
                UAE Luxury Real Estate Advisory: AED 85M+ pipeline, speed to lead cut from 4.2h to 38s. Boutique Luxury Villa Network (Client Under NDA) (Goa/Alibaug): 42% direct booking share via WhatsApp + voice sync.
              </p>
              <Link href="/case-studies" className="font-mono text-[11px] text-[#B88746] hover:underline">
                Read Verified Case Studies &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="font-mono text-[#8F6426] font-semibold mb-2 uppercase">04 / 14-Day Production Pilot</div>
              <p className="text-[#55514B] leading-relaxed mb-2">
                2-week paid production pilot on your live CRM (LeadSquared, Salesforce, HubSpot). Agreed KPIs: &ge;98% answer rate, &lt;45s speed to lead, &ge;70% qualification rate.
              </p>
              <span className="text-[11px] font-mono text-[#181614] bg-white px-2 py-0.5 rounded border border-[#E2DDD1]">
                Full Money-Back SLA
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="font-mono text-[#8F6426] font-semibold mb-2 uppercase">05 / 100% Code &amp; Asset Ownership</div>
              <p className="text-[#55514B] leading-relaxed">
                You retain complete legal ownership of prompt state machines, n8n JSON workflows, PostgreSQL vector schemas, and provisioned +91 022 virtual DIDs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1]">
              <div className="font-mono text-[#8F6426] font-semibold mb-2 uppercase">06 / TRAI &amp; RBI IT Compliance</div>
              <p className="text-[#55514B] leading-relaxed">
                Full enterprise TRAI DLT registration, explicit call-recording consent prompts, real-time DND registry scrubbing, and zero audio PII retention.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#181614] text-[#F6F4EE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-['Instrument_Serif'] text-xl text-[#F6F4EE]">
                Ready to review our technical blueprints for your Mumbai operations?
              </div>
              <div className="text-xs text-[#A8A29E] font-mono mt-1">
                Direct consultation with Principal Systems Architect Ayush Meena.
              </div>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-6 py-3 bg-[#B88746] text-[#181614] rounded-full text-xs font-semibold hover:bg-[#C99756] transition-colors whitespace-nowrap"
            >
              Request Architecture Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Expandable FAQ Section */}
      <section className="py-20 bg-white border-t border-[#E2DDD1]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-[#B88746] tracking-widest uppercase block mb-2">
              Architecture &amp; Deployment FAQ
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-[#181614] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#55514B]">
              Key technical and operational details on deploying DestiX AI voice agents across Mumbai real estate, healthcare, and BFSI operations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E2DDD1] bg-[#F6F4EE]/50 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#EDE8DC]/50 transition-colors"
                  >
                    <span className="font-semibold text-base sm:text-lg text-[#181614]">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#E2DDD1] flex items-center justify-center shrink-0 text-[#181614]">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed border-t border-[#E2DDD1]/50 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Call to Action Section */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="rounded-3xl bg-[#181614] text-[#F6EFE2] p-8 sm:p-16 text-center flex flex-col items-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23201C] border border-[#3A332E] text-[11px] font-mono tracking-widest text-[#B88746] mb-6">
            <Sparkles className="size-3.5 text-[#B88746]" />
            DEPLOY MUMBAI VOICE INFRASTRUCTURE
          </div>

          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#F6EFE2] leading-[1.05] mb-6 max-w-3xl">
            Never lose another <span className="italic text-[#B88746]">multi-crore</span> lead or clinic consultation.
          </h2>

          <p className="text-base sm:text-lg text-[#C5BDB1] leading-relaxed max-w-2xl mb-10">
            Book a 30-minute architecture session with founder Ayush Meena. We will analyze your inbound call drop-off, test our Mumbai voice persona with your team, and map out your CRM integration.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-bold text-sm tracking-tight transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F6EFE2] font-semibold text-sm transition-colors text-center border border-white/10"
            >
              Explore Monthly Retainer Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer and Booking Modal */}
      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
