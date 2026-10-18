"use client";

import React from "react";
import { Check, ArrowUpRight, Zap, Sparkles } from "lucide-react";

interface DeploymentSprintsProps {
  onOpenBooking: () => void;
}

export default function DeploymentSprints({ onOpenBooking }: DeploymentSprintsProps) {
  const sprints = [
    {
      id: "sprint-1",
      name: "Sprint 01: Single Voice Agent",
      badge: "RAPID DEPLOYMENT",
      tagline: "Ideal for inbound receptionist triage or instant outbound ad-lead follow-up.",
      price: "$500",
      period: "per month / or ₹42,000",
      isPopular: false,
      features: [
        "1 dedicated production voice agent (inbound or outbound)",
        "3,000+ call minutes included monthly ($0.07/min overage)",
        "Direct Google Calendar & Cal.com real-time sync",
        "Dedicated phone number & carrier SIP trunking",
        "Sub-380ms latency guarantee with natural human pauses",
        "14-day production delivery with full testing",
      ],
      ctaText: "Deploy Voice Agent",
    },
    {
      id: "sprint-2",
      name: "Sprint 02: Full 3D Spatial Web Platform",
      badge: "BESPOKE ARCHITECTURE",
      tagline: "Category-defining 3D WebGL digital storefront that commands instant market authority.",
      price: "$1,800",
      period: "one-time sprint delivery",
      isPopular: false,
      features: [
        "Custom 3D WebGL / Three.js spatial interactive model",
        "Next.js App Router with sub-second page performance",
        "GSAP & Framer motion physics and interactive shaders",
        "High-converting direct-response luxury editorial copywriting",
        "Complete CMS integration & full GitHub code repository handover",
        "Zero template code • 100% custom engineered",
      ],
      ctaText: "Commission 3D Platform",
    },
    {
      id: "sprint-3",
      name: "Sprint 03: The Complete DestiX Growth OS",
      badge: "MOST DEPLOYED • COMPLETE STACK",
      tagline: "Voice infrastructure + 3D WebGL architecture + WhatsApp & CRM OS.",
      price: "$1,250",
      period: "per month + deployment",
      isPopular: true,
      features: [
        "Unlimited concurrent calls across multiple phone numbers",
        "Includes bespoke 3D WebGL digital storefront platform",
        "Automated n8n & Make CRM pipelines (HubSpot, Salesforce, GHL)",
        "Instant WhatsApp automated brochure & calendar confirmation",
        "Multilingual: English, Hindi, and regional dialect fluency",
        "Weekly prompt reinforcement loops & conversion tuning",
        "Direct private Slack channel with founder Ayush Meena",
      ],
      ctaText: "Deploy Growth OS",
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111216] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            // 05 COMMERCIAL DEPLOYMENTS
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Transparent Deployment Sprints.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            No opaque consulting retainers. Defined scopes, guaranteed deployment timelines, and fixed deliverables. If the unit economics do not clear a 5x return on our discovery call, we politely decline the project.
          </p>
        </div>

        {/* 3 Sprint Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {sprints.map((sprint) => (
            <div
              key={sprint.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                sprint.isPopular
                  ? "bg-[#111216] border-2 border-[#00F5A0] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,245,160,0.2)] lg:-translate-y-2"
                  : "bg-[#111216] border border-white/10 hover:border-white/20"
              }`}
            >
              {sprint.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00F5A0] text-[#08080A] text-[10px] font-['JetBrains_Mono'] font-extrabold uppercase tracking-widest shadow-md">
                  {sprint.badge}
                </div>
              )}

              <div>
                {!sprint.isPopular && (
                  <div className="text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#7A7D87] uppercase mb-2">
                    {sprint.badge}
                  </div>
                )}

                <h3 className="font-['Syne'] font-bold text-2xl text-[#F4F4F6] mb-3">
                  {sprint.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {sprint.tagline}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-['Syne'] font-extrabold text-4xl sm:text-5xl text-[#F4F4F6]">
                      {sprint.price}
                    </span>
                    <span className="text-xs text-[#7A7D87] font-['JetBrains_Mono']">
                      {sprint.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {sprint.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#00F5A0]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#A1A5B2] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenBooking}
                className={`w-full py-4 rounded-full font-bold text-sm tracking-tight flex items-center justify-center gap-2 transition-all duration-300 ${
                  sprint.isPopular
                    ? "bg-[#00F5A0] hover:bg-[#34F8B3] text-[#08080A] shadow-[0_0_25px_rgba(0,245,160,0.4)]"
                    : "bg-[#16181F] hover:bg-[#1E222D] text-[#F4F4F6] border border-white/10 hover:border-[#00F5A0]/40"
                }`}
              >
                <span>{sprint.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
