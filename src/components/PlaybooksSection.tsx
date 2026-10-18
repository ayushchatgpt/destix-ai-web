"use client";

import React, { useState } from "react";
import {
  Building2,
  Database,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Sparkles,
} from "lucide-react";

interface PlaybooksSectionProps {
  onOpenBooking: () => void;
}

export const PlaybooksSection: React.FC<PlaybooksSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const playbooks = [
    {
      id: "real-estate",
      category: "real-estate",
      title: "Luxury Real Estate",
      badge: "High-Ticket Inbound & Outbound",
      agentName: "Buyer Qualification & Private Villa Tour Booking Agent",
      metric: "34+ Weekly Visits",
      metricDesc: "High-net-worth buyers qualified and booked on autopilot",
      icon: Building2,
      trigger: "Ad lead form submitted on Meta / Google or inbound call to project hotline",
      dialogue:
        "'Hello! I saw you were looking at the 4BHK Seafront Penthouse. To ensure our architect prepares the proper plans, are you planning this as a primary residence or luxury rental?'",
      qualification: "Budget verification (> ₹10Cr+), possession timeline, pre-approved financing",
      outcomeAction: "Instant Google Meet / private site escort booked + WhatsApp brochure dispatch",
    },
    {
      id: "database-revival",
      category: "b2b",
      title: "Cold Database Revival",
      badge: "Pure Found Revenue",
      agentName: "Automated Past Lead Reactivation & Offer Presentation Agent",
      metric: "$380K Pipeline",
      metricDesc: "Unlocked from dormant CRM contacts without sales rep fatigue",
      icon: Database,
      trigger: "CRM leads untouched for > 90 days triggered in batched n8n sequence",
      dialogue:
        "'Hi Rohit, Ayush from DestiX AI. We helped similar B2B teams reduce inbound call drop-off by 90% last month. We put together a 3-minute executive audit for you—should I send that over?'",
      qualification: "Current team size, operational bottlenecks, willingness to review audit",
      outcomeAction: "Bi-directional status update in HubSpot + automated executive calendar reservation",
    },
    {
      id: "ecommerce-d2c",
      category: "ecommerce",
      title: "E-Commerce & D2C",
      badge: "Margin Defense",
      agentName: "Instant COD Confirmation & Cart Recovery Agent",
      metric: "32% RTO Drop",
      metricDesc: "Eliminates bogus orders and saves courier freight charges",
      icon: ShoppingBag,
      trigger: "Order placed with Cash on Delivery option on Shopify / WooCommerce",
      dialogue:
        "'Namaste Ananya ji, calling from Studio Lux to verify your bespoke jacket order. We want to ensure delivery to Bangalore happens smoothly this Thursday. Can you confirm the pincode?'",
      qualification: "Address verification, size confirmation, active availability on delivery date",
      outcomeAction: "Auto-tags order as 'Verified' in Shopify API or cancels false orders before packing",
    },
    {
      id: "medspa-health",
      category: "healthcare",
      title: "Healthcare & Medspa",
      badge: "24/7 Patient Care",
      agentName: "Front-Desk Triage & Doctor Appointment Booking Agent",
      metric: "82% Call Load Cut",
      metricDesc: "Doctors and receptionists freed from repetitive phone queues",
      icon: Stethoscope,
      trigger: "Inbound call to clinic phone line outside office hours or during peak queue",
      dialogue:
        "'Thank you for calling SkinMed Clinic. Are you calling regarding a cosmetic consultation, laser session, or post-operative questions with Dr. Verma?'",
      qualification: "Symptom urgency, preferred doctor, medical history notes, insurance preference",
      outcomeAction: "Syncs directly into Practo / clinic management software + sends SMS directions",
    },
    {
      id: "b2b-agency",
      category: "b2b",
      title: "B2B Tech & Agencies",
      badge: "Speed to Lead",
      agentName: "Inbound Demo Qualifier & Calendar Router Agent",
      metric: "45-Second Calls",
      metricDesc: "Instant connection before high-intent buyers leave your pricing page",
      icon: Briefcase,
      trigger: "Contact form submitted on high-ticket B2B website",
      dialogue:
        "'Hi Alex! DestiX AI calling on behalf of CloudScale. I saw you just checked our pricing tier. Are you currently handling over 50k monthly events?'",
      qualification: "Annual contract value potential, decision-making timeline, current tech stack",
      outcomeAction: "Routes qualified leads directly into senior sales rep's calendar in under 60 seconds",
    },
    {
      id: "home-services",
      category: "services",
      title: "Home Services & Contracting",
      badge: "Emergency Dispatch",
      agentName: "After-Hours Emergency Dispatch & Estimator Agent",
      metric: "Zero Missed Leads",
      metricDesc: "Captures emergency repair jobs while competitors sleep",
      icon: Wrench,
      trigger: "Inbound emergency call after 7 PM or on weekends",
      dialogue:
        "'Emergency HVAC & Electrical dispatch. We have technicians on standby. Is this an active leak or total cooling failure at your residential property?'",
      qualification: "Emergency severity, service address, authorization for call-out fee",
      outcomeAction: "Sends instant SMS alert to on-duty technician with call audio recording & transcription",
    },
  ];

  const categories = [
    { id: "all", label: "All 6 Blueprints" },
    { id: "real-estate", label: "Real Estate" },
    { id: "b2b", label: "B2B & Tech" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "healthcare", label: "Healthcare" },
    { id: "services", label: "Services" },
  ];

  const filtered =
    activeCategory === "all"
      ? playbooks
      : playbooks.filter((p) => p.category === activeCategory);

  return (
    <section id="playbooks" className="relative bg-[#0A0C12] px-6 py-24 md:px-10 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              // Deployed Blueprints
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              Voice agents engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                real phone operations.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-400 font-light leading-relaxed">
              Battle-tested prompt workflows, edge-case guardrails, and CRM integrations.
              These are not conceptual demos; they are hardened operational units shipping revenue today.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === c.id
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-500/40 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Blueprint Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="size-5" />
                    </div>
                    <span className="rounded-full bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase text-cyan-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-xs text-slate-400 font-light">
                    {item.agentName}
                  </div>

                  <div className="mt-5 rounded-xl bg-[#08090C] p-4 border border-white/5">
                    <div className="font-display text-2xl text-cyan-400 font-bold">
                      {item.metric}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {item.metricDesc}
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 text-xs">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 block">
                        Trigger:
                      </span>
                      <p className="text-slate-300 mt-0.5 font-light">{item.trigger}</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 font-mono text-[11px] leading-relaxed text-slate-300 italic">
                      {item.dialogue}
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 block">
                        Autonomous Action:
                      </span>
                      <p className="text-slate-300 mt-0.5 font-light">{item.outcomeAction}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Deploy Blueprint</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-slate-500">7-14 Days Live</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
