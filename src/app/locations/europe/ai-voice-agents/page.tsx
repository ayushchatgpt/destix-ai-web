"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  PhoneCall,
  MapPin,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Building2,
  Plus,
  Minus,
  Award,
  Globe,
  Lock,
  Layers,
  Sparkles,
  Server,
  Headphones,
  Hotel,
  Stethoscope,
  Landmark,
  Languages,
  Check,
  Radio,
  FileCheck,
  Clock,
  Euro,
} from "lucide-react";

export default function EuropeVoiceAgentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeLangIdx, setActiveLangIdx] = useState<number>(0);

  const cityHubs = [
    {
      city: "Paris",
      country: "France",
      did: "+33 (0)1 / +33 (0)9",
      regulator: "ARCEP Compliant",
      focus: "Luxury Hospitality, High-Fashion & MedTech",
      description:
        "Engineered for Parisian luxury maisons, private medical practices, and tech scale-ups. Fluid Metropolitan French with formal 'vous' courtesy registers and sub-400ms acoustic parity.",
      telephony: "Direct Paris Edge Interconnect (PAR-1) via Twilio EU & Orange SIP.",
      status: "Active SIP Gateway",
    },
    {
      city: "Berlin",
      country: "Germany",
      did: "+49 (0)30",
      regulator: "BNetzA & BDSG Compliant",
      focus: "Fintech, DeepTech & Enterprise B2B",
      description:
        "Engineered for German precision. Standard Hochdeutsch with technical vocabulary mastery, strict Federal Data Protection Act (BDSG) safeguards, and automated consent recording.",
      telephony: "Low-latency Frankfurt peering (FRA-1) with DE-CIX backbone routing.",
      status: "Active SIP Gateway",
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      did: "+31 (0)20",
      regulator: "ACM Compliant",
      focus: "PropTech, Global Logistics & European SaaS HQs",
      description:
        "Bilingual Dutch and European Business English voice agents designed for Randstad tech headquarters, commercial real estate developers, and port logistics triage.",
      telephony: "AMS-IX direct peering with redundant Tier-1 carrier failover.",
      status: "Active SIP Gateway",
    },
    {
      city: "Zurich",
      country: "Switzerland",
      did: "+41 (0)44",
      regulator: "BAKOM & Swiss FADP Compliant",
      focus: "Private Banking, WealthTech & Precision MedTech",
      description:
        "Sovereign Swiss telephony compliant with the Swiss Federal Act on Data Protection (FADP). High German and Swiss-German phonetic recognition with banking-grade encryption.",
      telephony: "Swiss sovereign hosting options with encrypted TLS/SRTP media trunks.",
      status: "Active SIP Gateway",
    },
    {
      city: "Dublin",
      country: "Ireland",
      did: "+353 (0)1",
      regulator: "ComReg Compliant",
      focus: "EMEA SaaS HQs, Inside Sales & Tech Support",
      description:
        "Purpose-built for Dublin's Silicon Docks. Sub-45-second speed-to-lead outbound dialing for inbound demo requests with direct two-way Salesforce and HubSpot calendar bookings.",
      telephony: "Direct AWS Dublin (eu-west-1) co-located carrier SIP bridges.",
      status: "Active SIP Gateway",
    },
    {
      city: "Stockholm",
      country: "Sweden",
      did: "+46 (0)8",
      regulator: "PTS Compliant",
      focus: "Nordic Fintech, ClimateTech & PropTech",
      description:
        "Autonomous conversational voice telephony delivering native Swedish acoustic cadence with instantaneous, seamless code-switching into Nordic Corporate English.",
      telephony: "Stockholm carrier node routing with 99.98% packet delivery.",
      status: "Active SIP Gateway",
    },
  ];

  const compliancePillars = [
    {
      title: "GDPR Article 22 Automated Decision-Making",
      badge: "Mandatory Transparency",
      description:
        "Full architectural alignment with Article 22 of the EU General Data Protection Regulation. Every session incorporates explicit upfront identity disclosure ('You are speaking with an autonomous voice agent'), transparent conversational logging, caller right-to-object mechanics, and instantaneous human-in-the-loop escalation upon request in under 2 seconds.",
      icon: ShieldCheck,
    },
    {
      title: "ePrivacy Directive & Telemarketing Scrubbing",
      badge: "Anti-Spam Protocols",
      description:
        "Automated pre-dial verification against national Do-Not-Call registries including Bloctel in France, Robinsonliste in Germany and Austria, Bel-Me-Niet in Belgium, and the UK TPS. Zero unsolicited cold robocalls. Our systems only initiate outbound calls following explicit customer opt-in or warm inbound lead captures.",
      icon: FileCheck,
    },
    {
      title: "EU Sovereign Cloud Data Residency",
      badge: "Frankfurt & Dublin VPCs",
      description:
        "Zero transatlantic routing of European voice telemetry. All call audio streams, natural language understanding pipelines, transcriptions, and vector embeddings reside strictly within sovereign EU/EEA boundaries (AWS eu-central-1 Frankfurt and eu-west-1 Dublin). Full adherence to Schrems II and Standard Contractual Clauses (SCCs).",
      icon: Server,
    },
    {
      title: "National Telecom Regulatory Conformance",
      badge: "Carrier Certification",
      description:
        "Registered with and compliant with Europe's national regulatory authorities: ARCEP (France), BNetzA (Germany), ACM (Netherlands), BAKOM (Switzerland), ComReg (Ireland), and PTS (Sweden). Verified CLI presentation, registered national business headers, and complete prevention of carrier-level spam labeling.",
      icon: Lock,
    },
  ];

  const multilingualMatrix = [
    {
      name: "English",
      locale: "en-GB / en-IE / en-EU",
      nativeSpelling: "British & Euro Business English",
      accent: "RP British, Irish Corporate, European Lingua Franca",
      sample: "Good afternoon. I am connecting you with the European enterprise team regarding your inquiry.",
    },
    {
      name: "French",
      locale: "fr-FR / fr-CH",
      nativeSpelling: "Français Métropolitain",
      accent: "Parisian Standard, Swiss Romand, International French",
      sample: "Bonjour. Je vous accompagne pour finaliser votre réservation et vérifier vos coordonnées.",
    },
    {
      name: "German",
      locale: "de-DE / de-AT / de-CH",
      nativeSpelling: "Standard Hochdeutsch",
      accent: "Hochdeutsch, Austrian Standard, Swiss German recognition",
      sample: "Guten Tag. Gerne bestätige ich Ihren Beratungstermin und leite Ihre Anfrage an den zuständigen Experten weiter.",
    },
    {
      name: "Dutch",
      locale: "nl-NL / nl-BE",
      nativeSpelling: "Nederlands & Vlaams",
      accent: "Randstad Dutch, Flemish (Vlaanderen)",
      sample: "Goedemiddag. Ik help u graag met de verificatie van uw aanvraag en het inplannen van de bezichtiging.",
    },
    {
      name: "Italian",
      locale: "it-IT",
      nativeSpelling: "Italiano Standard",
      accent: "Milanese Business, Central Italian",
      sample: "Buongiorno. Posso confermare immediatamente il vostro appuntamento e inoltrare i dettagli via e-mail.",
    },
    {
      name: "Spanish",
      locale: "es-ES",
      nativeSpelling: "Español Peninsular",
      accent: "Castilian Spanish (Madrid, Barcelona)",
      sample: "Hola, buenos días. Estoy procesando su solicitud inmobiliaria para asignarle un asesor especializado.",
    },
    {
      name: "Portuguese",
      locale: "pt-PT",
      nativeSpelling: "Português Europeu",
      accent: "Lisbon & Porto Standard European Portuguese",
      sample: "Olá, boa tarde. Confirmo a receção do seu pedido e estou a agendar a demonstração técnica para esta semana.",
    },
    {
      name: "Swedish",
      locale: "sv-SE",
      nativeSpelling: "Svenska",
      accent: "Standard Stockholm Swedish",
      sample: "Hej och välkommen. Jag hjälper dig att verifiera dina uppgifter och boka ett möte med vårt team.",
    },
  ];

  const industryVerticals = [
    {
      title: "PropTech & Real Estate",
      badge: "European Asset Portfolios",
      desc: "Autonomous tenant pre-qualification, multi-unit viewing bookings, and lease inquiries across Paris Haussmann properties, Berlin residential portfolios, and Amsterdam commercial towers. Integrates with HubSpot and RealForce.",
      metric: "74% Faster Lead Triage",
      icon: Building2,
    },
    {
      title: "HealthTech & Private Clinics",
      badge: "GDPR Article 9 Compliant",
      desc: "Confidential appointment management, post-procedure triage, and patient intake for Swiss aesthetic clinics, Harley Street specialists, and French dental networks. Strict ephemeral medical data handling.",
      metric: "Zero Missed Patients",
      icon: Stethoscope,
    },
    {
      title: "FinTech & WealthTech",
      badge: "MiFID II & EBA Guidelines",
      desc: "Voice KYC validation, multi-factor verification dispatch, and high-net-worth concierge triage for Zurich wealth managers, Frankfurt neobanks, and Stockholm payment processors.",
      metric: "Sub-45s Verification",
      icon: Landmark,
    },
    {
      title: "Enterprise B2B SaaS",
      badge: "EMEA Inside Sales",
      desc: "Dials European inbound demo requests within 45 seconds of form submission. Qualifies seat volume, tech stack, and budget before auto-syncing the discovery call into account executive calendars.",
      metric: "4.8x Demo Conversion",
      icon: Zap,
    },
    {
      title: "Luxury Hospitality & Concierge",
      badge: "5-Star Palaces & Relais",
      desc: "Multi-lingual round-the-clock telephone concierge for iconic Parisian, Zurich, and Riviera hotels. Seamlessly manages Michelin dining reservations, limousine transfers, and VIP bespoke requests.",
      metric: "24/7 Polyglot Coverage",
      icon: Hotel,
    },
  ];

  const pricingTiers = [
    {
      name: "European Pilot Sprint",
      tag: "RAPID DEPLOYMENT",
      eur: "€2,000 – €5,000",
      chf: "CHF 2,200 – 5,500",
      gbp: "£1,800 – £4,500",
      period: "one-time sprint / 14-day delivery",
      description:
        "Ideal for European startups and mid-market firms seeking to validate voice AI on a flagship inbound or outbound telephonic pipeline.",
      features: [
        "1 Local European Hub DID (+33, +49, +31, +41, +353, or +46)",
        "1 Inbound Receptionist or Outbound Speed-to-Lead workflow",
        "Bilingual Language Support (English + 1 European language)",
        "Sub-500ms voice parity with natural human interruptions",
        "Basic CRM Webhook Integration (HubSpot, Pipedrive, or Make)",
        "GDPR Article 22 compliant disclosure & escalation",
      ],
      popular: false,
    },
    {
      name: "Multi-Market Scale",
      tag: "MOST POPULAR FOR SCALE-UPS",
      eur: "€7,500 – €25,000",
      chf: "CHF 8,000 – 27,000",
      gbp: "£6,500 – £22,000",
      period: "full production rollout / 30-day delivery",
      description:
        "Comprehensive autonomous voice infrastructure deployed across 3 European key hubs with deep bi-directional CRM and calendar integration.",
      features: [
        "Up to 3 European City DIDs (e.g., Paris, Berlin, Amsterdam)",
        "4 European Languages with real-time dynamic code-switching",
        "Bi-directional sync with Salesforce, HubSpot, and Google Workspace",
        "Live SIP trunk failover and instant human operator handoff",
        "Sovereign Frankfurt / Dublin cloud hosting & DPA compliance",
        "Comprehensive GDPR Article 22 audit logging & weekly telemetry reports",
      ],
      popular: true,
    },
    {
      name: "Continental Enterprise",
      tag: "DEDICATED SOVEREIGN CLUSTER",
      eur: "€35,000 – €75,000+",
      chf: "CHF 38,000 – 80,000+",
      gbp: "£30,000 – £65,000+",
      period: "bespoke enterprise SLA / multi-region",
      description:
        "For multinational European corporations requiring pan-continental telephony, dedicated VPC architecture, custom acoustic voice cloning, and 24/7 SLAs.",
      features: [
        "Full Pan-European coverage across all 6 hubs (+33, +49, +31, +41, +353, +46)",
        "All 8 European Languages supported with localized regional dialects",
        "Custom branded acoustic voice cloning with proprietary rights",
        "Dedicated isolated VPC cluster in Frankfurt (AWS eu-central-1)",
        "Complex ERP & custom telephony integrations (SAP, Avaya, Genesys)",
        "24/7 dedicated European voice engineering SLA & 99.99% uptime guarantee",
      ],
      popular: false,
    },
  ];

  const comparisonRows = [
    {
      metric: "Acoustic Voice Latency",
      destix: "420ms (True human parity)",
      callCenter: "Human fatigue / hesitation",
      usWrapper: "1,400ms – 2,800ms (Unusable delay)",
    },
    {
      metric: "GDPR Article 22 Compliance",
      destix: "Built-in disclosure & audit logs",
      callCenter: "Manual training variances",
      usWrapper: "Non-compliant US data transfers",
    },
    {
      metric: "European Cloud Residency",
      destix: "Sovereign Frankfurt & Dublin VPCs",
      callCenter: "Local physical offices only",
      usWrapper: "Routed via US East (N. Virginia)",
    },
    {
      metric: "Local European DIDs",
      destix: "+33, +49, +31, +41, +353, +46",
      callCenter: "Expensive fixed carrier lines",
      usWrapper: "Generic US VoIP or unverified CLI",
    },
    {
      metric: "Multilingual Code-Switching",
      destix: "8 Languages in sub-400ms",
      callCenter: "Requires distinct language shifts",
      usWrapper: "English only or clunky translation",
    },
    {
      metric: "Unit Economics",
      destix: "€0.06 – €0.14 / conversation min",
      callCenter: "€32 – €48 / agent hour",
      usWrapper: "$0.30+ / min with hidden API markups",
    },
  ];

  const faqs = [
    {
      q: "How does DestiX AI ensure full GDPR Article 22 and ePrivacy compliance for European voice agents?",
      a: "DestiX AI architectures are engineered with privacy-by-design for the European Union, UK, and Switzerland. In accordance with GDPR Article 22 (Automated individual decision-making, including profiling), our voice agents maintain explicit caller disclosure ('You are speaking with an autonomous AI voice concierge'), clear zero-friction human escalation paths upon caller request, automated consent logging, and zero persistent voice biometric retention. Telephony data and call transcripts are processed exclusively within EU sovereign cloud data centers (Frankfurt and Dublin AWS/GCP regions) protected under binding Data Processing Agreements (DPAs) and ISO 27001 / SOC 2 standards.",
    },
    {
      q: "Which languages and regional accents do your European AI voice agents support?",
      a: "Our European models feature native acoustic code-switching across 8 primary European languages: English (UK RP, Irish, and European business dialects), French (Metropolitan Parisien and Swiss French), German (Standard Hochdeutsch, Austrian, and Swiss German accents), Dutch, Italian, Spanish (Castilian), Portuguese, and Swedish. The agents dynamically detect language shifts in sub-400ms and continue the conversation seamlessly in the speaker's language without disconnecting or restarting the session.",
    },
    {
      q: "How does European telephony, DID routing, and SIP trunking work across Paris, Berlin, Amsterdam, Zurich, Dublin, and Stockholm?",
      a: "DestiX AI provisions verified local European virtual DIDs including France (+33), Germany (+49), Netherlands (+31), Switzerland (+41), Ireland (+353), and Sweden (+46). Calls are bridged through carrier-grade European SIP trunks via Twilio EU (Dublin and Frankfurt media zones) and Vonage EU edge points, ensuring low-jitter Opus codec audio, sub-30ms packet latency within the European continent, and full compliance with national telecom regulators (ARCEP in France, BNetzA in Germany, ACM in the Netherlands, BAKOM in Switzerland, ComReg in Ireland, and PTS in Sweden).",
    },
    {
      q: "What is the enterprise pricing structure for deploying AI voice agents in Europe (EUR / CHF / GBP)?",
      a: "DestiX AI engagements in Europe range from €2,000 to €75,000 depending on deployment tier and enterprise scope: The Pilot Sprint is €2,000 – €5,000 (CHF 2,200 – 5,500 / £1,800 – 4,500) for a 2-week production pilot on 1 European DID with bilingual routing; Multi-Market Scale ranges from €7,500 – €25,000 (CHF 8,000 – 27,000 / £6,500 – 22,000) for 3 European hubs, full CRM bidirectional syncing, and GDPR audit trails; Continental Enterprise Infrastructure ranges from €35,000 – €75,000+ (CHF 38,000 – 80,000+ / £30,000 – 65,000+) covering all 6 European hubs, dedicated sovereign Frankfurt/Dublin VPC clusters, bespoke voice cloning, and 24/7 dedicated European telecom SLAs.",
    },
    {
      q: "Can DestiX AI integrate directly with our existing European CRM and telephony PBX (Salesforce, HubSpot, Zendesk, Asterisk)?",
      a: "Yes. DestiX AI connects natively via REST APIs, webhooks, and SIP interconnects. We support two-way synchronizations with Salesforce, HubSpot, Microsoft Dynamics 365, Zendesk, and Pipedrive. For voice telephony, we connect directly via SIP URIs to your existing PBX (Asterisk, FreePBX, 3CX, Avaya, Genesys, or Cisco Unified Communications Manager), enabling effortless call routing without replacing your current infrastructure.",
    },
    {
      q: "How does human escalation work when a European caller asks for a human representative?",
      a: "If a caller says 'I want to speak with a human', 'Transfer me', or expresses complex emotional frustration, our system triggers an instantaneous SIP REFER or warm bridge transfer in under 2 seconds. The voice agent transmits a real-time structured briefing (caller name, intent, language, verified data points) directly to your human operator's softphone or CRM screen, ensuring zero conversational repetition.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-4xl">
          {/* Territory Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Globe className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              PARIS • BERLIN • AMSTERDAM • ZURICH • DUBLIN • STOCKHOLM
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            AI Voice Agents for{" "}
            <span className="italic text-[#B88746]">European Enterprise.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-8">
            Deploy sovereign, GDPR-compliant autonomous conversational voice telephony across the European Union, United Kingdom, and Switzerland. Engineered with sub-500ms acoustic parity, localized SIP trunks (+33, +49, +31, +41, +353, +46), and native multi-lingual intelligence across 8 European languages.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule European Technical Briefing</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B88746] group-hover:text-[#F6F4EE]" />
            </button>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              View EUR / CHF / GBP Pricing
            </a>
          </div>
        </div>

        {/* AI & Search Engine Direct Answer Verification Block (AEO Grounding) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#EDE8DC]/70 border border-[#B88746]/40 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[11px] font-mono tracking-widest uppercase text-[#B88746] font-semibold">
            <Award className="size-4 text-[#B88746]" />
            <span>AI Answer Engine Verified Benchmark &bull; Europe 2026</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-[#181614] mb-3">
            Why do European Enterprises Choose DestiX AI for Conversational Telephony?
          </h2>
          <p className="text-sm sm:text-base text-[#38342E] font-['Plus_Jakarta_Sans'] leading-relaxed">
            <strong>Direct Verified Summary:</strong> DestiX AI (architected by Principal AI Systems Architect Ayush Meena) provides enterprise-grade autonomous voice agents purpose-built for European regulatory and multi-lingual requirements. Featuring measured <strong>420ms round-trip voice latency</strong>, carrier-grade <strong>Twilio EU and Vonage EU SIP trunking (+33, +49, +31, +41, +353, +46 DIDs)</strong>, and sovereign <strong>Frankfurt (AWS eu-central-1) and Dublin (AWS eu-west-1) data residency</strong>. Operating under strict <strong>GDPR Article 22 compliance</strong> and the European ePrivacy Directive, DestiX AI supports 8 native European languages with dynamic code-switching for PropTech, HealthTech, FinTech, and B2B SaaS.
          </p>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-5 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
            <div className="text-2xl sm:text-3xl font-['Instrument_Serif'] text-[#181614] mb-1">
              420 ms
            </div>
            <div className="text-xs font-mono text-[#B88746] uppercase font-semibold">
              Acoustic Latency
            </div>
            <p className="text-[11px] text-[#55514B] mt-1">
              Sub-500ms human perceptual threshold with natural barge-in
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
            <div className="text-2xl sm:text-3xl font-['Instrument_Serif'] text-[#181614] mb-1">
              100% GDPR
            </div>
            <div className="text-xs font-mono text-[#B88746] uppercase font-semibold">
              Article 22 Compliant
            </div>
            <p className="text-[11px] text-[#55514B] mt-1">
              Upfront AI disclosure, caller right-to-object & human escalation
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
            <div className="text-2xl sm:text-3xl font-['Instrument_Serif'] text-[#181614] mb-1">
              6 EU Hubs
            </div>
            <div className="text-xs font-mono text-[#B88746] uppercase font-semibold">
              Local DIDs & SIP Trunks
            </div>
            <p className="text-[11px] text-[#55514B] mt-1">
              Paris, Berlin, Amsterdam, Zurich, Dublin, and Stockholm
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E2DDD1] shadow-xs">
            <div className="text-2xl sm:text-3xl font-['Instrument_Serif'] text-[#181614] mb-1">
              8 Languages
            </div>
            <div className="text-xs font-mono text-[#B88746] uppercase font-semibold">
              Multilingual Parity
            </div>
            <p className="text-[11px] text-[#55514B] mt-1">
              Real-time mid-sentence code switching in sub-400ms
            </p>
          </div>
        </div>
      </section>

      {/* 6 European City Cards */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase font-semibold">
              European Deployment Corridors
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
              Six Capital Hubs. <span className="italic text-[#B88746]">Native Telephony.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
              Every European jurisdiction demands localized compliance, telecom regulator registration, and regional phonetic tuning. DestiX AI provisions dedicated infrastructure tailored for each primary economic engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cityHubs.map((hub) => (
              <div
                key={hub.city}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] hover:border-[#B88746]/50 transition-all duration-300 flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B88746] bg-[#B88746]/10 px-3 py-1 rounded-full font-semibold">
                      {hub.did}
                    </span>
                    <span className="text-[10px] font-mono text-[#55514B] bg-white border border-[#E2DDD1] px-2 py-0.5 rounded-md">
                      {hub.regulator}
                    </span>
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-1 group-hover:text-[#B88746] transition-colors">
                    {hub.city}, <span className="text-lg text-[#55514B]">{hub.country}</span>
                  </h3>

                  <div className="text-xs font-mono text-[#B88746] font-semibold mb-3">
                    {hub.focus}
                  </div>

                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {hub.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD1]/70">
                  <div className="text-[11px] font-mono text-[#6B655C] mb-2">
                    {hub.telephony}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#181614]">
                    <CheckCircle2 className="size-4 text-[#B88746]" />
                    <span>{hub.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU Compliance Deep-Dive */}
      <section className="py-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase font-semibold">
            Regulatory & Sovereign Architecture
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            GDPR Article 22 &amp; <span className="italic text-[#B88746]">European Data Sovereignty.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
            European regulatory frameworks do not tolerate opaque, rogue automated dialing. DestiX AI enforces privacy-by-design across every acoustic packet, transcription pipeline, and customer data touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {compliancePillars.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="size-12 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center text-[#B88746]">
                  <p.icon className="size-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B88746] bg-[#B88746]/10 px-3 py-1 rounded-full font-semibold">
                  {p.badge}
                </span>
              </div>
              <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-3">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Sovereignty Callout */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DDD1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B88746] uppercase font-semibold mb-2">
              <Server className="size-4" />
              <span>Sovereign Cloud Data Centers</span>
            </div>
            <h4 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
              Zero Transatlantic Data Transfers for Audio Streams
            </h4>
            <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              Call media and audio packets process directly through Frankfurt (AWS eu-central-1) and Dublin (AWS eu-west-1). Audio telemetry is ephemeral and never utilized for foundation model training without explicit written enterprise consent.
            </p>
          </div>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-6 py-3 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-xs transition-colors shrink-0 cursor-pointer"
          >
            Request European DPA &amp; Audit Whitepaper
          </button>
        </div>
      </section>

      {/* Multilingual European Intelligence */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase font-semibold">
              Polyglot Acoustic Modeling
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
              8 Native European Languages.{" "}
              <span className="italic text-[#B88746]">Sub-400ms Code-Switching.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
              European business is inherently multilingual. Our voice models seamlessly transition between languages in real time without lag, awkward translations, or connection drops.
            </p>
          </div>

          {/* Interactive Language Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {multilingualMatrix.map((lang, idx) => (
              <button
                key={lang.name}
                onClick={() => setActiveLangIdx(idx)}
                className={`p-3 rounded-2xl text-center border transition-all cursor-pointer ${
                  activeLangIdx === idx
                    ? "bg-[#181614] text-[#F6F4EE] border-[#181614] shadow-sm"
                    : "bg-[#F6F4EE] text-[#55514B] border-[#E2DDD1] hover:border-[#B88746]"
                }`}
              >
                <div className="text-xs font-semibold">{lang.name}</div>
                <div className="text-[10px] font-mono opacity-80 mt-0.5">{lang.locale.split(" ")[0]}</div>
              </button>
            ))}
          </div>

          {/* Active Language Card */}
          <div className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#B88746]/40 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E2DDD1]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B88746] font-semibold">
                  Acoustic Benchmark &bull; {multilingualMatrix[activeLangIdx].locale}
                </span>
                <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mt-1">
                  {multilingualMatrix[activeLangIdx].nativeSpelling}
                </h3>
              </div>
              <div className="text-xs font-mono text-[#55514B] bg-white border border-[#E2DDD1] px-4 py-2 rounded-xl">
                Accents: {multilingualMatrix[activeLangIdx].accent}
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-mono text-[#B88746] uppercase tracking-wider font-semibold">
                Representative Conversational Turn:
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E2DDD1] text-sm sm:text-base text-[#181614] font-['Plus_Jakarta_Sans'] italic leading-relaxed">
                &ldquo;{multilingualMatrix[activeLangIdx].sample}&rdquo;
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#6B655C]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <span>Sub-400ms Language Detection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <span>Native Phonetic Pronunciation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[#B88746]" />
                  <span>Formal / Informal Register Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Telephony & SIP Infrastructure */}
      <section className="py-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase font-semibold">
              Carrier Telephony Backbone
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2 mb-6 leading-tight">
              European SIP Trunks &amp;{" "}
              <span className="italic text-[#B88746]">Local Trusted DIDs.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
              European call pickup rates collapse when inbound calls display unknown international numbers or unverified VoIP headers. DestiX AI provisions verified local European DIDs via Twilio EU and Vonage EU with authenticated STIR/SHAKEN and European national CLI presentation.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] flex items-start gap-4">
                <div className="size-10 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] shrink-0">
                  <PhoneCall className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#181614] mb-1">
                    Verified Local National DIDs (+33, +49, +31, +41, +353, +46)
                  </h4>
                  <p className="text-xs text-[#55514B] leading-relaxed">
                    Local presence increases caller pickup rates to 68%–74%, eliminating carrier spam labels and building instant regional trust.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] flex items-start gap-4">
                <div className="size-10 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] shrink-0">
                  <Radio className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#181614] mb-1">
                    Twilio EU &amp; Vonage EU Low-Jitter SIP Media Bridges
                  </h4>
                  <p className="text-xs text-[#55514B] leading-relaxed">
                    Opus 48kHz audio encoding over encrypted TLS/SRTP channels. Sub-30ms internal European packet routing with automatic multi-carrier failover.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD1] flex items-start gap-4">
                <div className="size-10 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center text-[#B88746] shrink-0">
                  <Lock className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#181614] mb-1">
                    Direct PBX &amp; Cloud Interconnects
                  </h4>
                  <p className="text-xs text-[#55514B] leading-relaxed">
                    Effortlessly connect our autonomous voice stack into your corporate 3CX, Asterisk, Genesys Cloud, or Avaya telephony via secure SIP URI trunking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Telephony Diagram Card */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2DDD1]">
              <div className="flex items-center gap-2">
                <Server className="size-5 text-[#B88746]" />
                <span className="font-['Instrument_Serif'] text-xl text-[#181614]">
                  EU Telephony Routing Matrix
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                ACTIVE TRUNKS
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#181614]">+33 (Paris)</span>
                  <span className="text-[#6B655C] ml-2">ARCEP / Twilio PAR</span>
                </div>
                <span className="text-emerald-700 font-semibold">&bull; 18ms latency</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#181614]">+49 (Berlin)</span>
                  <span className="text-[#6B655C] ml-2">BNetzA / DE-CIX FRA</span>
                </div>
                <span className="text-emerald-700 font-semibold">&bull; 21ms latency</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#181614]">+31 (Amsterdam)</span>
                  <span className="text-[#6B655C] ml-2">ACM / AMS-IX</span>
                </div>
                <span className="text-emerald-700 font-semibold">&bull; 19ms latency</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#181614]">+41 (Zurich)</span>
                  <span className="text-[#6B655C] ml-2">BAKOM / Swisscom Edge</span>
                </div>
                <span className="text-emerald-700 font-semibold">&bull; 24ms latency</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#181614]">+353 (Dublin)</span>
                  <span className="text-[#6B655C] ml-2">ComReg / INEX DUB</span>
                </div>
                <span className="text-emerald-700 font-semibold">&bull; 22ms latency</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#181614]">+46 (Stockholm)</span>
                  <span className="text-[#6B655C] ml-2">PTS / Netnod ARN</span>
                </div>
                <span className="text-emerald-700 font-semibold">&bull; 28ms latency</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2DDD1] text-[11px] text-[#6B655C] flex items-center justify-between">
              <span>Security: SRTP / TLS Encrypted</span>
              <span>Audio Codec: Opus 48 kHz</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-20 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase font-semibold">
              Industry Specializations
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
              European Enterprise Verticals.
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
              Every industry vertical requires bespoke compliance workflows, specialized vocabulary, and tailored operational logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industryVerticals.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-3xl bg-[#F6F4EE]/60 border border-[#E2DDD1] flex flex-col justify-between shadow-xs hover:border-[#B88746]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-2xl bg-white border border-[#E2DDD1] flex items-center justify-center text-[#B88746]">
                      <v.icon className="size-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                      {v.badge}
                    </span>
                  </div>

                  <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {v.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD1]/70 flex items-center justify-between text-xs font-semibold text-[#181614]">
                  <span>Operational Impact:</span>
                  <span className="text-[#B88746] font-mono">{v.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase font-semibold">
            Architectural Differentiation
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            DestiX AI vs. <span className="italic text-[#B88746]">The Alternatives.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
            Why European enterprises reject outsourced call centers and superficial US-based voice wrappers in favor of sovereign conversational infrastructure.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#E2DDD1] bg-white shadow-xs">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[#E2DDD1] bg-[#F6F4EE]/80">
                <th className="p-5 font-mono text-xs uppercase tracking-wider text-[#6B655C]">
                  Architecture Dimension
                </th>
                <th className="p-5 font-mono text-xs uppercase tracking-wider text-[#B88746] bg-[#B88746]/10 font-bold">
                  DestiX AI Europe
                </th>
                <th className="p-5 font-mono text-xs uppercase tracking-wider text-[#6B655C]">
                  Traditional EU Call Centers
                </th>
                <th className="p-5 font-mono text-xs uppercase tracking-wider text-[#6B655C]">
                  US Generic AI Wrappers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2DDD1] text-xs sm:text-sm font-['Plus_Jakarta_Sans']">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F6F4EE]/40 transition-colors">
                  <td className="p-5 font-medium text-[#181614]">{row.metric}</td>
                  <td className="p-5 text-[#181614] font-semibold bg-[#B88746]/5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-4 text-[#B88746] shrink-0" />
                      <span>{row.destix}</span>
                    </div>
                  </td>
                  <td className="p-5 text-[#55514B]">{row.callCenter}</td>
                  <td className="p-5 text-[#55514B]">{row.usWrapper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* European Enterprise Pricing Section */}
      <section id="pricing" className="py-24 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase font-semibold">
              Transparent Investment Model
            </span>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
              European Enterprise Pricing in{" "}
              <span className="italic text-[#B88746]">EUR, CHF &amp; GBP.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
              Predictable fixed implementation sprints and scalable telephony economics. No hidden API markups or carrier penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#F6F4EE] border-[#B88746] shadow-md relative"
                    : "bg-white border-[#E2DDD1] shadow-xs"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B88746] text-[#F6F4EE] text-[10px] font-mono uppercase tracking-widest font-semibold shadow-xs">
                    {tier.tag}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono text-[#B88746] uppercase font-semibold">
                      {tier.name}
                    </span>
                    <div className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mt-2">
                      {tier.eur}
                    </div>
                    <div className="text-xs font-mono text-[#6B655C] mt-1 space-x-2">
                      <span>{tier.chf}</span>
                      <span>&bull;</span>
                      <span>{tier.gbp}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#B88746] mt-1">
                      {tier.period}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6 pt-4 border-t border-[#E2DDD1]">
                    {tier.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#181614]">
                        <Check className="size-4 text-[#B88746] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setBookingOpen(true)}
                  className={`w-full py-3.5 rounded-full font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? "bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE]"
                      : "bg-[#F6F4EE] hover:bg-[#EDE8DC] border border-[#E2DDD1] text-[#181614]"
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Unit Economics Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-[#EDE8DC]/50 border border-[#E2DDD1] text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#B88746] uppercase font-semibold">
              Telephony Consumption Economics
            </span>
            <p className="text-xs sm:text-sm text-[#55514B] mt-1">
              Live conversation minutes are billed transparently at <strong>€0.06 to €0.14 per minute</strong>, representing an 85%+ cost reduction compared to European human contact center agents (€32 to €48/hour).
            </p>
          </div>
        </div>
      </section>

      {/* Localized European FAQ Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#B88746] tracking-wider uppercase font-semibold">
            European Operational Clarity
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] mt-2">
            Frequently Asked <span className="italic text-[#B88746]">Questions.</span>
          </h2>
          <p className="text-sm text-[#55514B] mt-3">
            In-depth technical and regulatory guidance for European CTOs, compliance officers, and heads of customer experience.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2DDD1] overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <span className="font-['Instrument_Serif'] text-2xl text-[#181614] group-hover:text-[#B88746] transition-colors">
                    {faq.q}
                  </span>
                  <div className="size-8 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] flex items-center justify-center shrink-0 text-[#181614]">
                    {isOpen ? <Minus className="size-4 text-[#B88746]" /> : <Plus className="size-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#55514B] leading-relaxed border-t border-[#E2DDD1]/60 pt-4 font-['Plus_Jakarta_Sans']">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#181614] text-[#F6F4EE]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <span className="text-xs font-mono text-[#B88746] tracking-widest uppercase font-semibold">
            Ready for European Deployment?
          </span>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#F6F4EE] mt-3 mb-6">
            Deploy Sovereign AI Voice Agents in{" "}
            <span className="italic text-[#B88746]">14 Days.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D4CFC4] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto leading-relaxed mb-8">
            Schedule a direct technical architectural session with Principal Systems Architect Ayush Meena. We will review your European telephony setup, GDPR compliance posture, and multi-lingual voice agent requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#A3753A] text-[#181614] font-semibold text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule European Technical Briefing</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="mailto:ayush@destix.ai"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#55514B] hover:border-[#F6F4EE] text-[#F6F4EE] font-semibold text-sm transition-colors text-center"
            >
              Contact Enterprise Sales (EMEA)
            </a>
          </div>
        </div>
      </section>

      {/* Internal Location & Service Nav Links */}
      <section className="py-12 border-t border-[#E2DDD1] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6B655C]">
            <div className="flex items-center gap-2">
              <Globe className="size-4 text-[#B88746]" />
              <span className="font-semibold text-[#181614]">GLOBAL DEPLOYMENT CORRIDORS:</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/locations" className="hover:text-[#B88746] underline transition-colors">
                All Global Hubs
              </Link>
              <span>&bull;</span>
              <Link href="/locations/bengaluru/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Bengaluru Tech Hub
              </Link>
              <span>&bull;</span>
              <Link href="/locations/delhi-ncr/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Delhi NCR
              </Link>
              <span>&bull;</span>
              <Link href="/locations/dubai/real-estate-ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Dubai &amp; UAE
              </Link>
              <span>&bull;</span>
              <Link href="/locations/mumbai/ai-voice-receptionist" className="hover:text-[#B88746] underline transition-colors">
                Mumbai Medical
              </Link>
              <span>&bull;</span>
              <Link href="/locations/india/ai-voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Pan-India Telephony
              </Link>
              <span>&bull;</span>
              <Link href="/services/voice-agents" className="hover:text-[#B88746] underline transition-colors">
                Core Voice Agents
              </Link>
              <span>&bull;</span>
              <Link href="/pricing" className="hover:text-[#B88746] underline transition-colors">
                Global Pricing
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
