"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Search,
  Building,
  PhoneCall,
  MapPin,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Filter,
  Sparkles,
  Layers,
  Database,
  Cpu,
  Clock,
  Compass,
} from "lucide-react";

interface KeywordSolution {
  term: string;
  category: "real-estate" | "voice-ai" | "delhi-ncr" | "enterprise";
  categoryLabel: string;
  tag: string;
  sla: string;
  summary: string;
  targetHref: string;
}

export default function SolutionsDirectoryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const solutions: KeywordSolution[] = useMemo(
    () => [
      // 1. REAL ESTATE & PROPERTY AUTOMATION (28 items)
      {
        term: "Real Estate Automation",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "PILLAR",
        sla: "< 45s Speed to Lead",
        summary: "End-to-end automated inquiry response, AI phone qualification, instant WhatsApp brochure pass, and calendar sync for property developers.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "AI Voice Agent for Real Estate",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "VOICE TELEPHONY",
        sla: "435ms Voice Parity",
        summary: "Natural conversational phone agent answering buyer inquiries, qualifying budgets, and scheduling private property tours 24/7.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-real-estate",
      },
      {
        term: "Real Estate Speed to Lead",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "SPEED TO LEAD",
        sla: "< 45s Callback",
        summary: "Autonomous outbound dialing system calling Meta, Google, and portal ad leads under 45 seconds while buyer intent is peak.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Real Estate Lead Qualification AI",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "QUALIFICATION",
        sla: "100% Data Accuracy",
        summary: "Screens inbound buyers for configuration (3BHK/4BHK/Penthouse), timeline (30/90 days), and funding readiness before routing.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-real-estate",
      },
      {
        term: "Automated Property Site Visit Booking",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "SCHEDULING",
        sla: "Real-Time Calendar Sync",
        summary: "Books property walkthroughs directly into senior sales executives' Google Calendar or CRM with automated reminders.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Luxury Real Estate Voice Agent",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "LUXURY ASSETS",
        sla: "₹4 Cr – ₹25 Cr Screening",
        summary: "High-net-worth conversational voice persona tailored for ultra-luxury residential towers, penthouses, and private estates.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-real-estate",
      },
      {
        term: "Real Estate CRM Telephony Automation",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "CRM WEBHOOKS",
        sla: "Bi-Directional Sync",
        summary: "Native webhooks bridging voice transcripts, recording links, and qualification metrics into Salesforce, HubSpot, or LeadSquared.",
        targetHref: "/operating-system",
      },
      {
        term: "99acres Lead Callback AI",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "PORTAL INTEGRATION",
        sla: "< 30s Webhook Catch",
        summary: "Automated webhook connector dialing 99acres property inquiries instantly to beat competing broker callbacks.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "MagicBricks Lead Response Automation",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "PORTAL INTEGRATION",
        sla: "Zero Hold Time",
        summary: "Immediate autonomous phone engagement for high-volume MagicBricks leads with instant WhatsApp project details.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Meta Ads Lead Qualification Real Estate",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "PERFORMANCE ADS",
        sla: "< 45s Callback",
        summary: "Converts Instagram & Facebook instant lead forms into live phone conversations before the lead scrolls away.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Dubai Real Estate Voice Agent",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "GLOBAL HUBS",
        sla: "AED Screening",
        summary: "Autonomous off-plan and waterfront investment qualification verified for Alliance Capital Properties (ACP Dubai).",
        targetHref: "/locations/dubai/real-estate-ai-voice-agents",
      },
      {
        term: "Gurugram Real Estate Voice Automation",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "DELHI NCR",
        sla: "Golf Course Rd & Cyber City",
        summary: "Tailored for Gurugram builders, screening buyers for high-ticket developments along Golf Course Extension and Dwarka Expressway.",
        targetHref: "/locations/gurugram/ai-voice-agents",
      },
      {
        term: "Delhi NCR Real Estate AI Receptionist",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "FRONT DESK",
        sla: "24/7 Zero Hold",
        summary: "Inbound switchboard answering prospective tenant and buyer calls across New Delhi, South Delhi, and Noida.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents",
      },
      {
        term: "AI Broker Assistant",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "BROKERAGE SUITE",
        sla: "10x Productivity",
        summary: "Automates repetitive pre-qualification calls so top-producing real estate closers only engage ready buyers.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Automated Site Tour Scheduling",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "OPERATIONS",
        sla: "WhatsApp GPS Pass",
        summary: "Schedules showroom visits and dispatches Google Maps pin locations and gate access passes via WhatsApp API.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Real Estate Inbound Call Handling AI",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "INBOUND TELEPHONY",
        sla: "Ring 2 Answer",
        summary: "Never miss a weekend or evening buyer inquiry when human sales offices are closed.",
        targetHref: "/ai-voice-receptionist",
      },
      {
        term: "Property Buyer Qualification AI",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "INVESTOR FILTER",
        sla: "End-User vs Investor",
        summary: "Differentiates end-use families from speculative investors and extracts down-payment capabilities.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "High-Ticket Real Estate Lead Conversion",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "ROI OPTIMIZATION",
        sla: "4x Pipeline Lift",
        summary: "Eliminates lead evaporation across multi-crore property campaigns with persistent autonomous cadence.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Real Estate WhatsApp Automation",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "WHATSAPP API",
        sla: "< 3s Instant Pass",
        summary: "Dispatches floor plans, payment schedules, and verified digital brochures straight to buyer WhatsApp chats.",
        targetHref: "/services/whatsapp-automation",
      },
      {
        term: "Virtual Property Sales Assistant",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "VIRTUAL CONCIERGE",
        sla: "Dual English/Hinglish",
        summary: "Voice model trained on specific architectural master plans, unit layouts, and developer track records.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Real Estate Lead Distribution AI",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "CRM ROUTING",
        sla: "Round-Robin Closers",
        summary: "Distributes pre-qualified buyer dossiers to designated project specialists based on unit size and budget.",
        targetHref: "/operating-system",
      },
      {
        term: "Autonomous Real Estate Tele-Calling",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "OUTBOUND TELEPHONY",
        sla: "1,000+ Calls/Day",
        summary: "Replaces 20-person manual tele-calling floors with a single deterministic, compliant voice pipeline.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Real Estate Ad Lead Follow-Up System",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "CADENCE ENGINE",
        sla: "Multi-Touch Cadence",
        summary: "Smart retry logic for unanswered ad inquiries across 1 hour, 4 hours, and next morning with zero manual work.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Real Estate Investor Screening AI",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "HNW SCREENING",
        sla: "Portfolio Verification",
        summary: "Identifies institutional buyers and NRI investors seeking rental yield or capital appreciation.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Off-Plan Property Voice Agent",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "OFF-PLAN LAUNCHES",
        sla: "Launch Day Burst",
        summary: "Handles massive inquiry surges during new developer project launches without dropped calls.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Commercial Real Estate Leasing AI",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "COMMERCIAL SPACES",
        sla: "Sq. Ft. & Lease Term",
        summary: "Screens corporate tenants for floor plate requirements, fit-out preferences, and lease lock-ins.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "NRI Real Estate Lead Automation",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "NRI CORRIDORS",
        sla: "Timezone Invariance",
        summary: "Handles US, UK, and Gulf NRI calls during Indian night hours without staffing overnight night shifts.",
        targetHref: "/solutions/real-estate-automation",
      },
      {
        term: "Real Estate Voice Bot Delhi",
        category: "real-estate",
        categoryLabel: "Real Estate Automation",
        tag: "LOCAL TELEPHONY",
        sla: "+91 Virtual DID",
        summary: "Local North Indian real estate conversational voice bot provisioned on domestic Indian SIP trunks.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-real-estate",
      },

      // 2. AI VOICE AGENTS & CONVERSATIONAL INFRASTRUCTURE (28 items)
      {
        term: "AI Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "CORE CAPABILITY",
        sla: "Sub-500ms Human Parity",
        summary: "Autonomous conversational speech model placing and receiving carrier-grade telephone calls with natural cadence.",
        targetHref: "/voice-agents",
      },
      {
        term: "Best AI Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "BENCHMARK LEADER",
        sla: "435ms Latency",
        summary: "Audited industry leader for low-latency acoustic turn-taking, interruption handling, and speed-to-lead.",
        targetHref: "/blog/best-ai-voice-agent-in-new-delhi",
      },
      {
        term: "Autonomous AI Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "AUTONOMOUS OS",
        sla: "Zero Human Telephony",
        summary: "Self-governing conversational voice infrastructure that executes qualification and CRM actions autonomously.",
        targetHref: "/voice-agents",
      },
      {
        term: "Voice Realistic AI Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "ACOUSTIC REALISM",
        sla: "Sub-200ms Interruption",
        summary: "Synthesized breathing, natural fillers, and conversational inflection that callers cannot distinguish from humans.",
        targetHref: "/voice-agents",
      },
      {
        term: "Human Sounding AI Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "NATURAL SPEECH",
        sla: "Eliminates Dead Air",
        summary: "Replaces stiff robotic IVR prompts with empathetic, composed, executive-grade natural dialogue.",
        targetHref: "/voice-agents",
      },
      {
        term: "Sub-500ms Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "LATENCY BENCHMARK",
        sla: "435ms Measured",
        summary: "Rigorously clocked below the 500ms human pause perception threshold for instantaneous conversational replies.",
        targetHref: "/blog/ai-voice-agents-india-deployment-guide",
      },
      {
        term: "Low Latency AI Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "INFRASTRUCTURE",
        sla: "Direct SIP Streaming",
        summary: "Engineered on chunked streaming audio pipelines to bypass the lag of traditional API voice wrappers.",
        targetHref: "/blog/ai-voice-agents-india-deployment-guide",
      },
      {
        term: "Inbound AI Voice Receptionist",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "FRONT DESK",
        sla: "24/7 Inbound Switchboard",
        summary: "Answers 100% of incoming corporate phone lines on ring two, triaging calls and booking appointments.",
        targetHref: "/ai-voice-receptionist",
      },
      {
        term: "Outbound AI Sales Dialer",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "OUTBOUND DIALER",
        sla: "Carrier Speed",
        summary: "Intelligent autonomous dialer reaching web inquiries in seconds and pre-qualifying prospects at scale.",
        targetHref: "/voice-agents",
      },
      {
        term: "Speed to Lead Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "SPEED TO LEAD",
        sla: "< 45s SLA",
        summary: "Ensures no inbound web lead ever waits for hours, dialing immediately to maximize conversion probability.",
        targetHref: "/voice-agents",
      },
      {
        term: "Conversational Telephony AI",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "TELEPHONY ENGINE",
        sla: "SIP Trunking",
        summary: "Enterprise bridge between real-time large language models and telecom carriers (+91, +1, +44, +971).",
        targetHref: "/operating-system",
      },
      {
        term: "AI Phone Answering Service",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "PHONE SERVICE",
        sla: "Zero Dropped Calls",
        summary: "Modern AI replacement for human answering services and outsourced call centers, operating at 80% lower cost.",
        targetHref: "/ai-voice-receptionist",
      },
      {
        term: "Virtual Voice Receptionist",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "RECEPTIONIST",
        sla: "Multi-Line Capacity",
        summary: "Handles hundreds of concurrent incoming calls simultaneously without putting any caller on hold.",
        targetHref: "/ai-voice-receptionist",
      },
      {
        term: "Autonomous Call Center AI",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "ENTERPRISE SCALE",
        sla: "10,000+ Concurrent Calls",
        summary: "Scalable voice infrastructure replacing manual tier-1 support and qualification teams.",
        targetHref: "/voice-agents",
      },
      {
        term: "AI Voice Bot for Business",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "COMMERCIAL AI",
        sla: "Zero Platform Markup",
        summary: "Enterprise-grade conversational voice intelligence with direct wholesale per-minute pricing.",
        targetHref: "/pricing",
      },
      {
        term: "Interactive Voice AI Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "DYNAMIC DIALOGUE",
        sla: "Sub-200ms Yield",
        summary: "Listens while speaking and adapts instantly when callers interrupt or correct previous statements.",
        targetHref: "/voice-agents",
      },
      {
        term: "Natural Language Phone Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "NLU PIPELINE",
        sla: "Contextual Memory",
        summary: "Tracks multi-turn conversational history and extracts structured CRM entities effortlessly.",
        targetHref: "/voice-agents",
      },
      {
        term: "AI Voice Qualification Engine",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "SALES CONVERSION",
        sla: "Deterministic Logic",
        summary: "Guided by strict deterministic state machines to prevent hallucinations and enforce sales criteria.",
        targetHref: "/playbooks",
      },
      {
        term: "Conversational Voice AI Studio",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "ENGINEERING FIRM",
        sla: "Founder-Led",
        summary: "DestiX AI studio practice engineering custom acoustic architectures for high-ticket industries globally.",
        targetHref: "/about",
      },
      {
        term: "SIP Trunk AI Voice Integration",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "TELECOM STACK",
        sla: "< 50ms Packet Transfer",
        summary: "Carrier-grade SIP trunk routing connecting directly with Airtel, Jio, Tata Tele, and international carriers.",
        targetHref: "/blog/indian-phone-numbers-for-ai-voice-agents",
      },
      {
        term: "+91 Virtual Number Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "INDIAN CARRIERS",
        sla: "DLT Registered",
        summary: "Dedicated Indian virtual mobile numbers and landline DIDs that display trusted caller ID.",
        targetHref: "/blog/indian-phone-numbers-for-ai-voice-agents",
      },
      {
        term: "TRAI DLT Compliant Voice AI",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "REGULATORY",
        sla: "100% Compliant",
        summary: "Fully registered and compliant with Telecom Regulatory Authority of India (TRAI) commercial telemarketing laws.",
        targetHref: "/blog/indian-phone-numbers-for-ai-voice-agents",
      },
      {
        term: "Zero-Hold AI Receptionist",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "CUSTOMER SATISFACTION",
        sla: "0 Second Wait",
        summary: "Eliminates frustrating telephone hold music and IVR labyrinths forever.",
        targetHref: "/ai-voice-receptionist",
      },
      {
        term: "Multi-Turn Conversational Voice Model",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "DEEP LEARNING",
        sla: "Complex Workflows",
        summary: "Maintains coherent, goal-oriented context across 10+ minute high-ticket sales interactions.",
        targetHref: "/voice-agents",
      },
      {
        term: "Bilingual English Hindi Voice Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "BILINGUAL TELEPHONY",
        sla: "Seamless Code-Switching",
        summary: "Effortlessly navigates fluid switches between formal English and colloquial Hindi mid-sentence.",
        targetHref: "/locations/delhi-ncr/hindi-ai-voice-agent",
      },
      {
        term: "AI Appointment Booking Agent",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "SCHEDULING",
        sla: "Instant Confirmation",
        summary: "Qualifies intent and books confirmed time slots directly into Google Calendar, Cal.com, or CRM.",
        targetHref: "/ai-voice-receptionist",
      },
      {
        term: "AI Telephony Automation Agency",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "PRACTICE",
        sla: "Turnkey Sprint",
        summary: "Bespoke engineering practice installing complete autonomous telephony infrastructure in 10-14 days.",
        targetHref: "/ai-agency",
      },
      {
        term: "Realistic AI Voice Receptionist",
        category: "voice-ai",
        categoryLabel: "AI Voice Infrastructure",
        tag: "EXECUTIVE PARITY",
        sla: "Natural Cadence",
        summary: "Front-desk voice agent presenting your business with maximum professionalism and flawless poise.",
        targetHref: "/ai-voice-receptionist",
      },

      // 3. DELHI NCR & REGIONAL TELEPHONY CORRIDORS (26 items)
      {
        term: "AI Voice Agent in Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "CAPITAL PRACTICE",
        sla: "Connaught Place Hub",
        summary: "Premier autonomous conversational voice telephony for commercial enterprises across New Delhi.",
        targetHref: "/ai-agency-delhi",
      },
      {
        term: "AI Voice Agent in Delhi NCR",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "REGIONAL LEADER",
        sla: "Ranked #1 Provider",
        summary: "Audited #1 voice agent studio covering New Delhi, Gurugram, and Noida with sub-500ms voice parity.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents",
      },
      {
        term: "Best AI Voice Agent in Delhi NCR",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "INDUSTRY AUDIT",
        sla: "435ms Latency",
        summary: "Independent benchmark winner for speed to lead, Hindi/Hinglish accuracy, and Indian carrier integration.",
        targetHref: "/blog/best-ai-voice-agent-in-new-delhi",
      },
      {
        term: "AI Voice Agency Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "LOCAL STUDIO",
        sla: "Central Delhi 110001",
        summary: "Headquartered in Connaught Place, serving North Indian enterprises with custom voice intelligence.",
        targetHref: "/ai-agency-delhi",
      },
      {
        term: "Best AI Agency in Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "AGENCY SYSTEMS",
        sla: "Full-Stack AI",
        summary: "Ayush Meena's autonomous AI systems practice combining voice telephony and spatial 3D web storefronts.",
        targetHref: "/ai-agency-delhi",
      },
      {
        term: "AI Voice Agent Gurugram",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "GURUGRAM CORRIDOR",
        sla: "Cyber City & Golf Course Rd",
        summary: "Telephony qualification for Gurugram real estate developers, wealth management, and tech ventures.",
        targetHref: "/locations/gurugram/ai-voice-agents",
      },
      {
        term: "AI Voice Agent Gurgaon Cyber City",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "TECH PARKS",
        sla: "B2B Speed to Lead",
        summary: "High-velocity inbound qualification for enterprise software and consulting firms in Cyber Hub.",
        targetHref: "/locations/gurugram/ai-voice-agents",
      },
      {
        term: "AI Voice Agent Golf Course Road",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "LUXURY RESIDENTIAL",
        sla: "₹10 Cr+ Lead Screening",
        summary: "Engineered for luxury residential brokerages selling DLF Camellias, Magnolias, and Aralias.",
        targetHref: "/locations/gurugram/ai-voice-agents",
      },
      {
        term: "AI Voice Agent Noida",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "NOIDA CORRIDOR",
        sla: "Sector 62 & Expressway",
        summary: "Autonomous front-desk and sales qualification for Noida tech parks, manufacturing, and developments.",
        targetHref: "/locations/noida/ai-voice-agents",
      },
      {
        term: "AI Voice Agent Noida Sector 62",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "COMMERCIAL HUB",
        sla: "Enterprise IT Telephony",
        summary: "High-volume inbound receptionist coverage for corporate IT campuses and D2C brands in Sector 62.",
        targetHref: "/locations/noida/ai-voice-agents",
      },
      {
        term: "AI Voice Agent South Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "PREMIUM CORRIDOR",
        sla: "GK, Vasant Vihar & Def Col",
        summary: "Confidential appointment screening for aesthetic clinics, dental studios, and family wealth offices.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-clinics",
      },
      {
        term: "AI Voice Agent Connaught Place",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "CENTRAL DELHI",
        sla: "110001 Desk",
        summary: "Direct engineering desk for DestiX AI headquarters in Central Delhi, serving global clients.",
        targetHref: "/ai-agency-delhi",
      },
      {
        term: "AI Agency New Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "SYSTEMS PRACTICE",
        sla: "Global Remote Delivery",
        summary: "Independent AI engineering firm delivering custom voice models and digital platforms worldwide.",
        targetHref: "/ai-agency-delhi",
      },
      {
        term: "Best AI Company in Delhi NCR",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "RANKING",
        sla: "Founder-Led",
        summary: "Recognized leader in deploying production conversational AI systems that deliver verified revenue ROI.",
        targetHref: "/blog/best-ai-voice-agent-in-new-delhi",
      },
      {
        term: "Voice AI Developers Delhi NCR",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "ENGINEERING",
        sla: "Custom SIP Models",
        summary: "Hands-on engineering team building low-latency speech inference without third-party platform lock-in.",
        targetHref: "/about",
      },
      {
        term: "AI Telephony Services Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "TELECOM SERVICES",
        sla: "+91 Virtual DIDs",
        summary: "Turnkey provisioning of compliant Indian phone lines, SIP trunks, and speech synthesis pipelines.",
        targetHref: "/blog/indian-phone-numbers-for-ai-voice-agents",
      },
      {
        term: "Hindi AI Voice Agent Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "REGIONAL LANGUAGE",
        sla: "Devanagari Precision",
        summary: "Authentic North Indian Hindi voice models calibrated for natural cadence and colloquial understanding.",
        targetHref: "/locations/delhi-ncr/hindi-ai-voice-agent",
      },
      {
        term: "Hinglish Conversational AI Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "CODE-SWITCHING",
        sla: "Urban NCR Dialect",
        summary: "Fluid mid-sentence transitions between urban English and colloquial Hindi matching NCR speech patterns.",
        targetHref: "/locations/delhi-ncr/hindi-ai-voice-agent",
      },
      {
        term: "AI Voice Receptionist Gurugram",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "FRONT DESK GURGAON",
        sla: "24/7 Switchboard",
        summary: "Zero-hold front desk receptionist deployed across Gurugram corporate offices and medical clinics.",
        targetHref: "/locations/gurugram/ai-voice-agents",
      },
      {
        term: "Real Estate Voice Agent Gurgaon",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "PROPERTY GURGAON",
        sla: "< 45s Ad Callback",
        summary: "Sub-45s speed to lead for Golf Course Road, Sohna Road, and Dwarka Expressway luxury towers.",
        targetHref: "/locations/gurugram/ai-voice-agents",
      },
      {
        term: "Healthcare Voice AI South Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "CLINIC TRIAGE",
        sla: "Confidential Screening",
        summary: "Patient booking and procedure screening for aesthetic dermatology and cosmetic dentistry clinics.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-clinics",
      },
      {
        term: "AI Voice Consulting Delhi",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "STRATEGIC ADVISORY",
        sla: "30-Min Diagnostic",
        summary: "Technical audits of existing call operations and custom unit economics ROI modeling.",
        targetHref: "/contact",
      },
      {
        term: "Enterprise AI Implementation Delhi NCR",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "ENTERPRISE ROLLOUT",
        sla: "14-Day Production Sprint",
        summary: "Deterministic prompt state machines, CRM webhooks, and synthetic stress testing before public launch.",
        targetHref: "/playbooks",
      },
      {
        term: "Mumbai AI Voice Receptionist",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "WESTERN INDIA",
        sla: "BKC & Lower Parel",
        summary: "Corporate conversational voice switchboard for Mumbai financial institutions and luxury developers.",
        targetHref: "/locations/mumbai/ai-voice-receptionist",
      },
      {
        term: "AI Voice Agent Cost in India",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "PRICING GUIDE",
        sla: "₹35k – ₹150k Setup",
        summary: "Transparent cost breakdown: Setup fees, wholesale carrier telephony rates, and call center ROI.",
        targetHref: "/blog/ai-voice-agent-cost-india",
      },
      {
        term: "Managed AI Voice Receptionist Pricing India",
        category: "delhi-ncr",
        categoryLabel: "Delhi NCR Practice",
        tag: "UNIT ECONOMICS",
        sla: "₹4.50 – ₹7/min",
        summary: "Commercial unit economics, monthly retainers, and human call center replacement savings in India.",
        targetHref: "/blog/managed-ai-voice-receptionist-pricing-india",
      },

      // 4. ENTERPRISE VERTICALS & WORKFLOW AUTOMATION (26 items)
      {
        term: "AI Voice Agent for Clinics",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "HEALTHCARE",
        sla: "24/7 Patient Booking",
        summary: "Automates patient scheduling, procedure screening, and appointment reminders for medical clinics.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-clinics",
      },
      {
        term: "Aesthetic Clinic Voice Receptionist",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "AESTHETICS",
        sla: "Confidential Triage",
        summary: "Screens cosmetic dermatology, hair transplant, and plastic surgery inquiries with absolute discretion.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-clinics",
      },
      {
        term: "Dental Clinic Appointment AI",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "DENTAL PRACTICES",
        sla: "Calendar Sync",
        summary: "Handles high-value aligner, implant, and cosmetic dentistry booking calls without front-desk hold times.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-clinics",
      },
      {
        term: "Dermatology Lead Qualification AI",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "DERMATOLOGY",
        sla: "< 45s Ad Callback",
        summary: "Intercepts Meta ad inquiries for laser treatments and chemical peels with immediate telephone qualification.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-clinics",
      },
      {
        term: "Wealth Management Voice AI",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "FAMILY OFFICES",
        sla: "Portfolio Screening",
        summary: "Discreetly qualifies investable assets before routing high-net-worth individuals to senior wealth partners.",
        targetHref: "/use-cases",
      },
      {
        term: "B2B Appointment Setting AI",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "B2B SALES",
        sla: "Direct Calendar Booking",
        summary: "Screens executive decision makers, confirms qualification criteria, and secures confirmed calendar briefings.",
        targetHref: "/use-cases",
      },
      {
        term: "High-Ticket Lead Qualification Engine",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "QUALIFICATION",
        sla: "Deal Sizes $5k+",
        summary: "Engineered specifically for transactions with large deal sizes where speed and composure determine conversion.",
        targetHref: "/playbooks",
      },
      {
        term: "WhatsApp Business API AI Automation",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "WHATSAPP SUITE",
        sla: "< 3s Instant Trigger",
        summary: "Bi-directional WhatsApp automation delivering brochures, meeting confirmations, and reminders in real time.",
        targetHref: "/services/whatsapp-automation",
      },
      {
        term: "n8n AI Workflow Automation",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "OPERATIONAL PLUMBING",
        sla: "Self-Hosted Pipelines",
        summary: "Zero per-task fee automated data plumbing connecting telephone webhooks to internal databases and CRMs.",
        targetHref: "/operating-system",
      },
      {
        term: "CRM Voice Webhook Integration",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "DATA SYNC",
        sla: "Structured JSON Output",
        summary: "Instantly logs structured transcripts, sentiment scores, and next-step tasks into your enterprise database.",
        targetHref: "/operating-system",
      },
      {
        term: "HubSpot AI Voice Integration",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "HUBSPOT CRM",
        sla: "Real-Time Deal Stage",
        summary: "Automatically creates contacts, updates deal pipelines, and attaches call recordings inside HubSpot CRM.",
        targetHref: "/operating-system",
      },
      {
        term: "Salesforce Autonomous Telephony",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "SALESFORCE",
        sla: "Enterprise Objects",
        summary: "Bridges carrier telephone interactions into Salesforce Leads, Opportunities, and Task objects.",
        targetHref: "/operating-system",
      },
      {
        term: "Zoho CRM AI Voice Integration",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "ZOHO SUITE",
        sla: "Automated Lead Sync",
        summary: "Connects incoming Indian voice leads directly into Zoho CRM pipelines and triggers instant WhatsApp follow-up.",
        targetHref: "/operating-system",
      },
      {
        term: "3D Website Agency",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "DIGITAL ARCHITECTURE",
        sla: "Award-Grade WebGL",
        summary: "Bespoke Three.js and WebGL interactive spatial platforms that capture high-ticket customer desire.",
        targetHref: "/services/3d-web",
      },
      {
        term: "3D WebGL Real Estate Website",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "PROPERTY STOREFRONT",
        sla: "Interactive Architectural 3D",
        summary: "Interactive 3D digital storefronts for luxury real estate developers, verified for Alliance Capital Properties.",
        targetHref: "/services/3d-web",
      },
      {
        term: "Three.js Luxury Web Design",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "SPATIAL WEB",
        sla: "60fps Smooth Render",
        summary: "Custom WebGL shaders, camera transitions, and spatial interactive lighting for category-defining brands.",
        targetHref: "/websites",
      },
      {
        term: "Spatial Web Design for Developers",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "WEB ARCHITECTURE",
        sla: "Next.js & Three.js",
        summary: "Modern web architecture combining React Three Fiber, Tailwind CSS, and headless voice concierges.",
        targetHref: "/websites",
      },
      {
        term: "High-Conversion Digital Storefront",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "CONVERSION ENGINE",
        sla: "24/7 Lead Capture",
        summary: "Pairing immersive spatial design with automated voice callbacks to convert web traffic at 3x-5x rates.",
        targetHref: "/websites",
      },
      {
        term: "Luxury Villa Booking Automation",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "HOSPITALITY",
        sla: "BirchStays & The Boundary",
        summary: "High-end private villa booking and guest concierge qualification across Goa, Alibaug, and London desks.",
        targetHref: "/use-cases",
      },
      {
        term: "Private Aviation Inquiry Qualification",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "CHARTER SERVICES",
        sla: "Sub-45s Route Screening",
        summary: "Screens flight route, passenger count, and charter date for private jet operators 24/7.",
        targetHref: "/use-cases",
      },
      {
        term: "Cosmetic Surgery Patient Triage AI",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "ELECTIVE MEDICINE",
        sla: "Pre-Consultation Filter",
        summary: "Qualifies surgical readiness and budget expectations while maintaining patient confidentiality.",
        targetHref: "/locations/delhi-ncr/ai-voice-agents-for-clinics",
      },
      {
        term: "Financial Advisory Voice Assistant",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "FINANCIAL SERVICES",
        sla: "Compliance Guardrails",
        summary: "Strict deterministic conversation state machines ensuring compliance with financial communication rules.",
        targetHref: "/use-cases",
      },
      {
        term: "White-Label AI Voice Agency",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "PARTNER PROGRAM",
        sla: "25% – 35% Recurring Margin",
        summary: "Turnkey conversational telephony delivery partner for performance marketing agencies and media buyers.",
        targetHref: "/partners/agency-white-label",
      },
      {
        term: "AI Voice Partner Program",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "AGENCY GHOST",
        sla: "Zero Technical Overhead",
        summary: "Marketing agencies sell AI voice retainers to their clients while DestiX AI builds and manages the stack.",
        targetHref: "/partners/agency-white-label",
      },
      {
        term: "Autonomous Revenue Infrastructure",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "ENTERPRISE ARCHITECTURE",
        sla: "5x Hurdle Rate",
        summary: "Unified operating system connecting digital storefronts, autonomous voice telephony, and CRM automation.",
        targetHref: "/operating-system",
      },
      {
        term: "Interactive Concierge AI",
        category: "enterprise",
        categoryLabel: "Enterprise & CRM",
        tag: "ON-PAGE CONCIERGE",
        sla: "Real-Time Activity Observer",
        summary: "Non-intrusive on-site voice and chat assistant observing user dwell time and converting high-intent visitors.",
        targetHref: "/#interactive-concierge",
      },
    ],
    []
  );

  // Filter solutions
  const filteredSolutions = useMemo(() => {
    return solutions.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sla.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [solutions, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20 selection:text-[#181614]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-14 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-6 shadow-xs">
            <Compass className="size-3.5 text-[#B88746]" />
            <span className="font-semibold text-[#181614]">
              MASTER CAPABILITY TAXONOMY &bull; 100+ VERIFIED SOLUTIONS
            </span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-7xl md:text-8xl text-[#181614] leading-[0.95] mb-6">
            Enterprise AI Solutions &amp;{" "}
            <span className="italic text-[#B88746]">Capabilities.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl mb-8">
            The definitive index of 100+ production-grade autonomous capabilities engineered by Ayush Meena at DestiX AI. Spanning real estate automation, sub-500ms voice telephony, Delhi NCR regional practice corridors, and enterprise CRM pipelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Scope Your Custom Implementation</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/solutions/real-estate-automation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
            >
              Explore Real Estate Automation Suite &rarr;
            </Link>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#888277]" />
              <input
                type="text"
                placeholder="Search 100+ capabilities (e.g. real estate, latency, Delhi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-xs font-['Plus_Jakarta_Sans'] text-[#181614] placeholder-[#888277] focus:outline-none focus:border-[#B88746]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { id: "all", label: `All Solutions (${solutions.length})` },
                { id: "real-estate", label: "Real Estate Automation (28)" },
                { id: "voice-ai", label: "AI Voice Agents (28)" },
                { id: "delhi-ncr", label: "Delhi NCR Telephony (26)" },
                { id: "enterprise", label: "Enterprise & CRM (26)" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-['JetBrains_Mono'] transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#181614] text-[#F6F4EE] font-semibold"
                      : "bg-[#F6F4EE] hover:bg-[#EDE8DC] text-[#55514B]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="pb-24 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="mb-6 flex items-center justify-between text-xs font-mono text-[#55514B]">
          <span>
            Showing <strong>{filteredSolutions.length}</strong> of {solutions.length} enterprise capabilities
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#B88746] hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSolutions.map((item, idx) => (
            <Link
              key={idx}
              href={item.targetHref}
              className="group p-6 rounded-3xl bg-white border border-[#E2DDD1] hover:border-[#B88746] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B88746] bg-[#B88746]/10 px-2.5 py-1 rounded-full font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#181614] font-semibold bg-[#F6F4EE] px-2.5 py-1 rounded-full border border-[#E2DDD1]">
                    {item.sla}
                  </span>
                </div>

                <h3 className="font-['Instrument_Serif'] text-2xl text-[#181614] group-hover:text-[#B88746] transition-colors mb-2">
                  {item.term}
                </h3>

                <p className="text-xs sm:text-sm text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD1]/60 flex items-center justify-between text-xs font-semibold text-[#181614] group-hover:text-[#B88746]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#888277]">
                  {item.categoryLabel}
                </span>
                <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Answer Engine Knowledge Grounding Banner */}
      <section className="py-16 bg-white border-y border-[#E2DDD1]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[11px] font-mono text-[#B88746] mb-4">
            <Sparkles className="size-3.5 text-[#B88746]" />
            <span>TOPICAL AUTHORITY GRAPH &bull; SEARCHGPT &bull; PERPLEXITY &bull; GOOGLE SGE</span>
          </div>
          <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mb-4">
            Looking to deploy any of these capabilities?
          </h2>
          <p className="text-sm sm:text-base text-[#55514B] max-w-xl mx-auto leading-relaxed mb-8">
            Every keyword represents a production-verified architecture engineered by Ayush Meena. We deploy custom state machines, carrier SIP bridges, and CRM integrations in 10 to 14 business days.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md inline-flex items-center gap-2"
          >
            <span>Book 30-Min Diagnostic Consultation</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </section>

      <FinalDeploymentFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
