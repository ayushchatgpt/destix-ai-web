"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  BookOpen,
  ArrowUpRight,
  ChevronRight,
  Home,
  Stethoscope,
  Briefcase,
  Compass,
  ShoppingCart,
  Users,
  CheckCircle2,
  Clock,
  PhoneCall,
  MessageSquare,
  Database,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function PlaybooksPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const playbooks = [
    {
      id: "real-estate",
      title: "Real Estate & Luxury Developments",
      tagline: "Instant Portal Lead Speed-to-Call (<45s) & Site Visit Escort Scheduling",
      icon: Home,
      trigger: "Portal webhook arrival (99acres, MagicBricks, Meta Lead Ads, Google Ads)",
      responseWindow: "< 42 seconds from lead submission",
      targetMetrics: ["78% Contact Rate", "3.2x Site-Visit Booking Lift", "-54% Cost-per-Acquisition"],
      workflow: [
        "Inbound webhook fires telephony trunk within 42 seconds of web form submission.",
        "Greets prospect by name in fluent English or conversational Hinglish.",
        "Confirms buyer intent: self-use primary residence vs. capital appreciation investment.",
        "Screens for budget threshold (₹3 Cr to ₹25 Cr+), preferred BHK layout, and possession horizon.",
        "Offers 2 specific open time-slots for a private sales gallery tour or chauffeur-assisted visit.",
        "Synchronizes complete call recording, qualification tag, and site visit booking to Salesforce / HubSpot.",
        "Pushes PDF architectural brochure and GPS pin confirmation to prospect's WhatsApp immediately.",
      ],
      sampleDialog: [
        { role: "Agent", text: "Namaste Mr. Sharma, this is Rhea calling from The Aralias Sales Pavilion. I noticed you just enquired about our 4-BHK duplex penthouses on Golf Course Road. Did I catch you at an okay time for a quick 60-second briefing?" },
        { role: "Buyer", text: "Haan Rhea, I wanted to understand if units are ready to move or under construction?" },
        { role: "Agent", text: "Phase 1 is fully ready for possession with OC received, and Phase 2 handover begins in Q3 next year. Are you looking for your personal family residence or exploring an investment return?" },
        { role: "Buyer", text: "Looking for family residence, moving from South Delhi next spring." },
        { role: "Agent", text: "Perfect. We have our director of sales hosting private penthouse previews this Saturday at 11:30 AM and 3:00 PM. Would the morning or afternoon suit you better?" },
      ],
      crmSync: "Salesforce / HubSpot: Contact Lifecycle -> Sales Qualified Lead; Opportunity Created; Task: Site Visit Scheduled; WhatsApp Template Dispatched.",
    },
    {
      id: "healthcare",
      title: "Clinics, Medspas & Private Hospitals",
      tagline: "24/7 Patient Triage, Emergency Screening & EHR Consultation Booking",
      icon: Stethoscope,
      trigger: "Inbound phone call during peak clinic queues or after-hours emergency calls (2:00 AM)",
      responseWindow: "Zero waiting queue (answers within 2 rings)",
      targetMetrics: ["100% Call Recovery", "+40% Procedure Intake", "Zero Front-Desk Burnout"],
      workflow: [
        "Answers inbound patient call within 2 rings, day or night.",
        "Conducts empathetic medical intake asking primary symptoms, severity, and previous treatments.",
        "Applies strict clinical safety guardrails: escalates acute chest pain/breathlessness to emergency hotline.",
        "Answers pre-op preparation guidelines, procedure pricing ranges, and insurance panel queries.",
        "Checks doctor availability across Practo / Kareo / custom EHR and books appointment.",
        "Dispatches SMS calendar confirmation with digital intake form and clinic parking directions.",
      ],
      sampleDialog: [
        { role: "Agent", text: "Thank you for calling Apex Specialty Dermatology. I am Priya, the clinical intake assistant. How may I assist your care today?" },
        { role: "Patient", text: "Hi, I have severe skin rash on my forearms since yesterday, looking for Dr. Kapoor." },
        { role: "Agent", text: "I understand that must be very uncomfortable. Are you experiencing any swelling of your lips or difficulty breathing?" },
        { role: "Patient", text: "No, nothing like that, just itching and redness." },
        { role: "Agent", text: "Understood. Dr. Kapoor has a clinic slot today at 4:45 PM or tomorrow morning at 10:15 AM. Which would you prefer to reserve?" },
      ],
      crmSync: "Practo / EHR: Patient Record Created; Symptoms Logged; Doctor Slot Locked; WhatsApp Location & Intake Link Dispatched.",
    },
    {
      id: "advisory",
      title: "High-Ticket B2B & Executive Advisory",
      tagline: "Inbound Pipeline Qualification & Strategic Discovery Calendar Locking",
      icon: Briefcase,
      trigger: "High-intent pricing inquiry, whitepaper download, or enterprise contact submission",
      responseWindow: "< 45 seconds while buyer is still active on webpage",
      targetMetrics: ["64% Demo Show-Rate", "3x Faster Close Cycle", "100% CRM Pipeline Hygiene"],
      workflow: [
        "Initiates outbound call while prospect is still viewing pricing / proposal page.",
        "Validates firmographic qualifiers: annual contract value (ACV), team headcount, and software budget.",
        "Identifies current technical bottlenecks and primary implementation goals.",
        "Matches qualification criteria against senior solutions architect calendar.",
        "Directly reserves 30-minute Zoom architecture briefing slot.",
        "Enriches lead record in HubSpot with LinkedIn profile, company revenue, and meeting notes.",
      ],
      sampleDialog: [
        { role: "Agent", text: "Hello Rohan, this is Kabir from DestiX AI. I saw your inquiry regarding our turnkey voice infrastructure. Do you have two minutes to verify technical alignment?" },
        { role: "Buyer", text: "Yes, we are evaluating voice agents to handle around 40,000 inbound minutes a month." },
        { role: "Agent", text: "Understood. What telephony provider are you currently running on — Twilio, Exotel, or on-premise SIP trunks?" },
        { role: "Buyer", text: "We are currently on Exotel and using HubSpot for all lead tracking." },
        { role: "Agent", text: "That is native to our stack with zero proxy hops. I can connect you directly with Ayush Meena tomorrow at 2 PM to review the telephony architecture. Does that work for you?" },
      ],
      crmSync: "HubSpot Enterprise: Pipeline Stage -> Diagnostic Booked; ACV: $24,000; SLA Met: Yes; Slack Alert sent to Solutions Desk.",
    },
    {
      id: "hospitality",
      title: "Luxury Hospitality & Private Estates",
      tagline: "VIP Guest Inbound Reservation Desk & Instant WhatsApp Concierge",
      icon: Compass,
      trigger: "Inbound call to villa reception or resort reservation desk",
      responseWindow: "Immediate answer within 2 rings",
      targetMetrics: ["42% Direct Booking Lift", "Zero Lost Night Bookings", "1.8 Min Reservation Cycle"],
      workflow: [
        "Immediate answer to guest telephone calls regarding estate availability and buyout terms.",
        "Extracts check-in dates, guest party size, chef/dietary preferences, and pet accommodations.",
        "Provides exact rate quotes and availability from property management system (PMS).",
        "Dispatches curated estate photo deck and instant reservation payment link via WhatsApp.",
        "Follows up automatically if checkout is not completed within 20 minutes.",
      ],
      sampleDialog: [
        { role: "Agent", text: "Good afternoon, thank you for calling Birch Stays Luxury Escapes. This is Maya. Are you planning a getaway for an upcoming weekend?" },
        { role: "Guest", text: "Hi Maya, looking for a 5-bedroom private villa in North Goa for next weekend with private pool." },
        { role: "Agent", text: "Our Estate Villa Morjim is available for those dates. It features an infinity pool, private chef, and accommodates up to 12 guests. Would you like me to send the walkthrough video and pricing to this WhatsApp number?" },
        { role: "Guest", text: "Yes please, send it right away." },
      ],
      crmSync: "PMS Sync: Dates Reserved; Quote Created; WhatsApp Brochure & Razorpay Link Sent.",
    },
    {
      id: "ecommerce",
      title: "High-Volume D2C & E-Commerce",
      tagline: "Abandoned Checkout Recovery & Cash-on-Delivery (COD) Order Verification",
      icon: ShoppingCart,
      trigger: "Abandoned checkout webhook or new COD order flagged for high return risk (RTO)",
      responseWindow: "Under 3 minutes post-abandonment",
      targetMetrics: ["18% Abandoned Cart Recovery", "-42% RTO Losses", "+32% COD-to-Prepaid Conversion"],
      workflow: [
        "Monitors Shopify / WooCommerce webhooks for abandoned carts exceeding target threshold.",
        "Triggers conversational verification call: confirms shipping address and buyer identity.",
        "Offers targeted instant payment discount (e.g. 10% off for instant UPI payment) to eliminate COD risk.",
        "If buyer confirms COD, marks order verified in warehouse ERP for instant fulfillment.",
        "Dispatches tracking link and customer care contact via WhatsApp immediately.",
      ],
      sampleDialog: [
        { role: "Agent", text: "Hi Priya, this is Rohit from Auric Lifestyle. We received your order for the Silk Cashmere Shawl. I just wanted to verify if 42 Golf Links is the best delivery address?" },
        { role: "Buyer", text: "Yes, that is correct." },
        { role: "Agent", text: "Wonderful. Since this was placed as Cash on Delivery, if you would like to complete it via UPI right now, we can apply an instant 10% prepaid discount and dispatch via priority air shipping." },
        { role: "Buyer", text: "Oh nice, send me the UPI link on WhatsApp." },
      ],
      crmSync: "Shopify / ERP: Tagged 'COD Verified'; Shipping Label Generated; WhatsApp Payment Gateway Triggered.",
    },
    {
      id: "white-label",
      title: "Agency White-Label Infrastructure",
      tagline: "Multi-Tenant Voice Core for Marketing Agencies & Growth Consultancies",
      icon: Users,
      trigger: "Agency client onboarding or expansion into recurring AI calling retainers",
      responseWindow: "Turnkey provisioning in under 7 business days",
      targetMetrics: ["85% Gross Margins", "Zero Engineering Overhead", "100% Client Retention"],
      workflow: [
        "Agency provisions client accounts under their own brand, custom domain, and white-label portal.",
        "DestiX AI delivers turnkey prompts, telephony carriers, and CRM webhook configurations.",
        "Agency bills end-clients $1,500 to $4,000 monthly retainers plus per-minute markups.",
        "Multi-tenant isolation ensures client data security and strict SOC-2 compliance.",
        "Dedicated Tier-3 engineering escalations handled directly by DestiX AI private practice.",
      ],
      sampleDialog: [
        { role: "Agent", text: "System ready. Multitenant isolation active across 14 agency sub-accounts. Domestic +91 PRI interconnect operational with zero SIP proxy latency." },
      ],
      crmSync: "White-Label Portal: Agency Brand Enforced; Client Billing Automated; Dedicated SIP Trunks Configured.",
    },
  ];

  const current = playbooks[activeTab];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614] font-sans antialiased">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative pt-36 sm:pt-44 pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#888277] mb-8">
          <Link href="/" className="hover:text-[#181614] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
          <span className="text-[#181614] font-semibold">Production Blueprints</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD1] text-[10px] font-mono tracking-widest text-[#B88746] font-bold uppercase mb-4 shadow-2xs">
            <BookOpen className="w-3 h-3 text-[#B88746]" />
            <span>FIELD-TESTED PRODUCTION BLUEPRINTS // DESTIX AI</span>
          </div>
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] tracking-tight leading-[1.08] mb-6">
            Six production blueprints that <br />
            <span className="italic text-[#B88746]">drive measurable revenue.</span>
          </h1>
          <p className="text-[#55514B] font-['Plus_Jakarta_Sans'] text-base sm:text-lg max-w-3xl leading-relaxed">
            Each playbook below is an active commercial system: real telephony routing rules, interruption handling thresholds, bi-directional CRM schemas, and automated WhatsApp follow-ups. Deployed and verified in live business environments.
          </p>
        </header>

        {/* Playbook Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 pb-4 border-b border-[#E2DDD1]">
          {playbooks.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-['JetBrains_Mono'] transition-all ${
                  isActive
                    ? "bg-[#181614] text-[#F6F4EE] font-semibold shadow-xs"
                    : "bg-white border border-[#E2DDD1] text-[#55514B] hover:text-[#181614] hover:border-[#181614]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#B88746]" : "text-[#888277]"}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Playbook Showcase Card */}
        <article className="rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-10 shadow-xs mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#E2DDD1]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#B88746]">
                  PLAYBOOK 0{activeTab + 1}
                </span>
                <span className="text-[#888277] text-xs">/</span>
                <span className="text-xs font-mono text-[#888277] uppercase tracking-wider">
                  PRODUCTION SYSTEM
                </span>
              </div>
              <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614]">
                {current.title}
              </h2>
              <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] mt-2">
                {current.tagline}
              </p>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] text-xs font-mono font-semibold transition-all shrink-0 self-start shadow-xs"
            >
              <span>Deploy This Playbook</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Trigger & Metrics Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 p-5 rounded-2xl bg-[#F6F4EE]/70 border border-[#E2DDD1]">
            <div>
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider block mb-1 font-bold">
                OPERATIONAL TRIGGER:
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#181614]">{current.trigger}</p>
            </div>
            <div>
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider block mb-1 font-bold">
                RESPONSE TIME SLA:
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#B88746] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {current.responseWindow}
              </p>
            </div>
          </div>

          {/* Target Impact Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {current.targetMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E2DDD1] flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#EDE8DC] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-[#B88746]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#181614] font-['Plus_Jakarta_Sans']">
                  {metric}
                </span>
              </div>
            ))}
          </div>

          {/* Turn-by-Turn Architecture Flow */}
          <div className="mb-10">
            <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-4 flex items-center gap-2">
              <span>Turn-by-Turn Execution Sequence</span>
            </h3>
            <div className="space-y-3">
              {current.workflow.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F6F4EE]/40 border border-[#E2DDD1]/80"
                >
                  <span className="w-6 h-6 rounded-full bg-[#181614] text-[#F6F4EE] text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Live Conversation Snippet */}
          <div className="mb-10">
            <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] mb-4 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-[#B88746]" />
              <span>Verbatim Audio Transcript Sample</span>
            </h3>
            <div className="p-6 rounded-2xl bg-[#EDE8DC] border border-[#E2DDD1] space-y-4 font-['Plus_Jakarta_Sans']">
              {current.sampleDialog.map((line, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 mt-0.5 ${
                      line.role === "Agent"
                        ? "bg-[#181614] text-[#F6F4EE]"
                        : "bg-white border border-[#E2DDD1] text-[#181614]"
                    }`}
                  >
                    {line.role}
                  </span>
                  <p className="text-[#181614] leading-relaxed">
                    &ldquo;{line.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CRM Schema Synchronization */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2DDD1]">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-[#B88746]" />
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#888277] uppercase tracking-wider font-bold">
                DETERMINISTIC CRM DATA WRITE:
              </span>
            </div>
            <p className="text-xs font-mono text-[#55514B] bg-[#F6F4EE] p-3 rounded-lg border border-[#E2DDD1]">
              {current.crmSync}
            </p>
          </div>
        </article>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#B88746] text-center shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] text-[10px] font-['JetBrains_Mono'] text-[#B88746] font-bold uppercase mb-4">
            TURNKEY DEPLOYMENT SPRINT
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#181614] mb-4">
            Need One of These Blueprints Live in 14 Days?
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto mb-8 leading-relaxed">
            Every blueprint includes custom prompt engineering, Hindi/Hinglish telephony carriers, CRM synchronization, and a strict 5x Hurdle Rate financial guarantee.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-bold text-sm tracking-tight transition-all duration-300 shadow-sm"
            >
              Book 30-Min Diagnostic Call
            </button>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300"
            >
              Review Pricing &amp; Economics
            </Link>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="Production Blueprint Deployment"
      />
    </div>
  );
}
