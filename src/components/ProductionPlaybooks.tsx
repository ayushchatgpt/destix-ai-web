"use client";

import React, { useState } from "react";
import { Home, Stethoscope, Briefcase, Compass, ArrowRight, CheckCircle2 } from "lucide-react";

export function ProductionPlaybooks() {
  const [activeTab, setActiveTab] = useState(0);

  const playbooks = [
    {
      id: "real-estate",
      title: "Private Villa Estates & Developers",
      subtitle: "Automated HNI Buyer Screening & Private Site Escort Dispatch",
      icon: Home,
      trigger: "Inbound Meta / Google Ad form fill or inbound call to project line",
      workflow: [
        "Autonomous dialer calls buyer within 42 seconds of form submission",
        "Politely confirms intent: personal villa residence vs. institutional investment",
        "Screens for target budget range (₹10Cr+), possession timeline, and layout specifications",
        "Instantly checks executive managing partner's open slots and reserves private site escort",
        "Dispatches architectural lookbook & gate pass confirmation directly via WhatsApp",
      ],
      outcome: "Zero qualified buyer drop-off; calendar completely populated with vetted HNIs.",
    },
    {
      id: "healthcare",
      title: "Private Healthcare & Medspas",
      subtitle: "24/7 Confidential Patient Triage & Procedure Booking",
      icon: Stethoscope,
      trigger: "After-hours patient call or inquiry for surgical/aesthetic procedures",
      workflow: [
        "Instant answer within 2 rings at 2:00 AM or during peak front-desk queues",
        "Empathetic triage answering recovery timelines, prerequisites, and pricing ranges",
        "Filters curiosity seekers from high-intent procedure candidates",
        "Books consultation directly into doctor's Practo / clinic management software",
        "Dispatches SMS with preparation guidelines and clinic private parking directions",
      ],
      outcome: "+40% increase in high-ticket consultation bookings with zero overtime staff cost.",
    },
    {
      id: "advisory",
      title: "High-Ticket B2B & Agencies",
      subtitle: "Inbound ACV Pipeline Qualifier & Calendar Router",
      icon: Briefcase,
      trigger: "High-intent pricing inquiry or enterprise contact submission",
      workflow: [
        "Outbound dial initiates in 45 seconds while the lead is active on the proposal page",
        "Screens for company size, current monthly ad spend / revenue, and decision timeline",
        "Matches qualification threshold against senior partner calendar availability",
        "Directly reserves Zoom discovery slot and logs complete conversation transcript to CRM",
        "Synchronizes bi-directionally with HubSpot and Slack enterprise alerts",
      ],
      outcome: "Demo booking rate surges from 18% to 64%; deals close 3x faster.",
    },
    {
      id: "hospitality",
      title: "Luxury Hospitality & Resorts",
      subtitle: "Concierge Reservation Inquiries & VIP Guest Dispatch",
      icon: Compass,
      trigger: "Inbound reservation call or private buyout request",
      workflow: [
        "Answers in refined tone representing the property's bespoke luxury heritage",
        "Checks room inventory, bespoke dining availability, and helicopter transfer requests",
        "Collects guest dietary preferences, anniversary dates, and bespoke arrangements",
        "Coordinates with on-ground general manager and dispatches luxury itinerary preview",
        "Secures reservation hold and handles payment concierge link via WhatsApp",
      ],
      outcome: "Elite guest experience with zero unanswered rings, driving record guest satisfaction.",
    },
  ];

  return (
    <section id="playbooks" className="py-24 sm:py-32 bg-[#F6F4EE] relative border-b border-[#E2DDD1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8652B]" />
            (04) DEPLOYED PRODUCTION PLAYBOOKS
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#181614] leading-[1.0] mb-6">
            Hardened blueprints for{" "}
            <span className="italic text-[#B8652B]">high-ticket verticals.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#55514B] leading-relaxed font-normal">
            These are not theoretical conversation prompts. They are hardened operational state machines with deterministic guardrails, CRM webhooks, and calendar dispatch rules.
          </p>
        </div>

        {/* 4 Interactive Vertical Blueprints */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Selector Tabs (Left 4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            {playbooks.map((pb, idx) => {
              const IconComponent = pb.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={pb.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? "bg-white border-[#B8652B] shadow-md -translate-x-1"
                      : "bg-[#EDE8DC]/50 border-[#E2DDD1] hover:bg-white/80 hover:border-[#B8652B]/40"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? "bg-[#181614] text-[#F6F4EE]" : "bg-white text-[#55514B]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-['Instrument_Serif'] text-xl font-bold text-[#181614]">
                        {pb.title}
                      </div>
                      <div className="text-[11px] text-[#888277] font-['JetBrains_Mono']">
                        BLUEPRINT 0{idx + 1}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#B8652B] translate-x-1" : "text-[#888277]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Workflow Deep-Dive Card (Right 8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-white border border-[#E2DDD1] p-8 sm:p-12 shadow-xs">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2DDD1]">
              <div>
                <span className="text-[10px] font-['JetBrains_Mono'] text-[#B8652B] tracking-[0.2em] uppercase font-bold">
                  ACTIVE PRODUCTION BLUEPRINT
                </span>
                <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] mt-1">
                  {playbooks[activeTab].title}
                </h3>
              </div>
              <div className="text-xs font-['JetBrains_Mono'] text-[#888277] hidden sm:block">
                END-TO-END AUTONOMOUS CIRCUIT
              </div>
            </div>

            {/* Trigger Strip */}
            <div className="p-4 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] mb-8 flex items-center gap-3">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#B8652B] uppercase font-bold shrink-0">
                TRIGGER:
              </span>
              <span className="text-xs sm:text-sm text-[#55514B]">
                {playbooks[activeTab].trigger}
              </span>
            </div>

            {/* Step-by-Step Execution */}
            <div className="space-y-4 mb-8">
              <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] font-semibold">
                EXECUTION STATE MACHINE:
              </div>
              {playbooks[activeTab].workflow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-['JetBrains_Mono'] text-[#B8652B] font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-sm text-[#55514B] leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Outcome Strip */}
            <div className="p-4 rounded-xl bg-[#131210] text-[#F6EFE2] flex items-center gap-3 text-xs sm:text-sm font-['Plus_Jakarta_Sans']">
              <CheckCircle2 className="w-4 h-4 text-[#B8652B] shrink-0" />
              <span>
                <strong className="text-[#B8652B]">Conversion Outcome:</strong>{" "}
                {playbooks[activeTab].outcome}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductionPlaybooks;
