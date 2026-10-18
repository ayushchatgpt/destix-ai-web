"use client";

import React, { useState } from "react";
import { Play, ArrowUpRight, CheckCircle2, X, Sparkles, Volume2, ShieldCheck } from "lucide-react";

interface CaseStudyStory {
  id: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  title: string;
  quote: string;
  audioDuration: string;
  transcriptPreview: string;
  results: string[];
}

export const ClientProof: React.FC = () => {
  const [activeStory, setActiveStory] = useState<CaseStudyStory | null>(null);

  const stories: CaseStudyStory[] = [
    {
      id: "realty",
      client: "Meridian Villas & Estates",
      industry: "Luxury Real Estate • Mumbai & Dubai",
      metric: "34+",
      metricLabel: "Qualified site tours booked weekly",
      title: "Autopilot Buyer Qualification for ₹15Cr+ Properties",
      quote:
        "The DestiX agent handles affluent buyers in English and Hindi with extreme poise. It weeds out curiosity browsers and books actual HNIs right into our executive calendar.",
      audioDuration: "2m 14s",
      transcriptPreview:
        "Agent: 'Good afternoon, Mr. Singhania. I noticed you requested the brochure for the Seafront Penthouse. Would you be looking at this primarily as a private residence or an investment portfolio asset?' Caller: 'A weekend residence.' Agent: 'Understood. We have two private preview slots this Saturday...'",
      results: [
        "Zero leads waited longer than 40 seconds after filling Facebook/Instagram ads",
        "Direct calendar synchronization with senior partner brokers",
        "3.8x ROI within the first 30 days of deployment",
      ],
    },
    {
      id: "clinic",
      client: "Aesthetix Medspa & Surgery",
      industry: "Healthcare & Aesthetics • Delhi NCR",
      metric: "82%",
      metricLabel: "Front-desk call overload eliminated",
      title: "24/7 Triage & High-Ticket Consultation Dispatch",
      quote:
        "Our doctors were tired of missed after-hours calls. Now patients are greeted warmly at 2 AM, answered about recovery times, and booked into open calendar slots instantly.",
      audioDuration: "1m 48s",
      transcriptPreview:
        "Agent: 'Hello Priya, thank you for reaching out to Aesthetix. Are you inquiring about our laser rejuvenation or a consultation with Dr. Kapoor?' Caller: 'I want to ask about post-treatment downtime.' Agent: 'Most patients resume normal activities within 24 hours. Would you like me to reserve a 20-minute doctor consult?'",
      results: [
        "100% after-hours calls captured and resolved without overnight staff",
        "WhatsApp confirmation sent within 5 seconds with clinic directions",
        "Over 120 doctor appointments booked monthly through AI phone voice",
      ],
    },
    {
      id: "saas",
      client: "ScaleOps Enterprise Cloud",
      industry: "B2B Tech & Dev Tools • US & Remote",
      metric: "45s",
      metricLabel: "Average speed to lead booking",
      title: "Inbound ACV Pipeline Qualifier & Calendar Router",
      quote:
        "When an enterprise lead fills out a high-intent pricing inquiry, DestiX rings them immediately. By the time our competitors read the form, our demo is already confirmed.",
      audioDuration: "3m 02s",
      transcriptPreview:
        "Agent: 'Hi David, this is DestiX from ScaleOps. I saw you just reviewed our multi-region Kubernetes orchestrator. Are you managing over 50 nodes currently?' Caller: 'About 200 nodes.' Agent: 'Fantastic. Our enterprise architect specializes in 100+ node deployments. Let me open his calendar right now...'",
      results: [
        "Speed to lead dropped from 4 hours to 45 seconds flat",
        "ACV qualified pipeline surged by $420,000 in Quarter 1",
        "Two-way HubSpot and Slack webhook dispatch for enterprise reps",
      ],
    },
    {
      id: "d2c",
      client: "Aurum Couture & Lifestyle",
      industry: "High-Ticket D2C • Pan-India",
      metric: "32%",
      metricLabel: "COD cancellation & RTO rate reduced",
      title: "Autonomous Cash-on-Delivery Address & Order Validation",
      quote:
        "Return-to-origin was bleeding our margins. The DestiX voice agent calls every COD order within 3 minutes, verifies sizing and delivery readiness in natural Hindi/English.",
      audioDuration: "1m 15s",
      transcriptPreview:
        "Agent: 'Namaste Rahul ji, Aurum Couture se baat kar rahi hoon. Aapka handcrafted silk jacket ka order confirm karne ke liye call kiya hai. Kya delivery address Gurgaon Sector 54 hi confirm karein?' Caller: 'Haan bilkul, size 42 hi hai na?' Agent: 'Ji bilkul, size 42 pack ho chuka hai...'",
      results: [
        "Prevented 420+ bogus orders monthly before shipping costs accrued",
        "Instant address correction saved ₹6.8 Lakhs in courier logistics",
        "Customer satisfaction score rose to 94%",
      ],
    },
    {
      id: "database",
      client: "VentureScale Consulting",
      industry: "B2B Growth Advisory • Global",
      metric: "$380K",
      metricLabel: "Reactivated from dormant CRM leads",
      title: "Cold CRM Revival Campaign with Personalized Value Offers",
      quote:
        "We had 8,000 old leads sitting dead in HubSpot. DestiX deployed a revival campaign that dialed through them politely, uncovered 42 ready-to-buy clients in 10 days.",
      audioDuration: "2m 30s",
      transcriptPreview:
        "Agent: 'Hello Marcus, Ayush Meena asked me to follow up regarding our revenue audit from last quarter. We recently published a benchmark report for Series A founders. Would you be open to a 5-minute review?' Caller: 'Actually yes, our CAC spiked recently...'",
      results: [
        "Dormant contact list converted at 5.2% into scheduled audit calls",
        "Zero human sales team fatigue or repetitive dial burnout",
        "100% automated call logging directly into CRM records",
      ],
    },
  ];

  return (
    <section id="case-studies" className="relative bg-[#0A0C12] px-6 py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              // Client Outcomes & Field Audits
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              Real deployments.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Unscripted outcomes.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-400 font-light">
              Unscripted audio recordings and audited metrics from actual phone operations.
              Tap any deployment card to review call excerpts and architecture outcomes.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-2 text-xs font-mono text-cyan-300">
            <ShieldCheck className="size-4 text-cyan-400" />
            <span>Audited Production Telephony</span>
          </div>
        </div>

        {/* 5 Column Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              className="glass-panel glass-panel-hover group relative cursor-pointer overflow-hidden rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                {/* 9:14 Card Top */}
                <div className="relative aspect-[9/13] w-full overflow-hidden rounded-xl bg-[#08090C] p-4 text-white flex flex-col justify-between border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-cyan-950/20 to-transparent" />

                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded text-cyan-300">
                      Verified
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {story.audioDuration}
                    </span>
                  </div>

                  <div className="relative mx-auto flex size-12 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <Play className="size-5 fill-current pl-0.5" />
                  </div>

                  <div className="relative">
                    <div className="font-display text-3xl font-bold text-white">
                      {story.metric}
                    </div>
                    <div className="text-[10px] font-mono text-cyan-300/80 leading-snug">
                      {story.metricLabel}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 block">
                    {story.industry}
                  </span>
                  <h3 className="mt-1 font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>View Architecture</span>
                <ArrowUpRight className="size-3.5 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={() => setActiveStory(null)} />

          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#0E1017] p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                  {activeStory.industry}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">{activeStory.client}</h3>
              </div>
              <button
                onClick={() => setActiveStory(null)}
                className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between rounded-2xl bg-[#08090C] p-5 border border-cyan-500/30">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    Production Outcome
                  </div>
                  <div className="font-display text-4xl font-bold text-cyan-400 mt-1">
                    {activeStory.metric}
                  </div>
                  <div className="text-xs text-slate-300">{activeStory.metricLabel}</div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs text-cyan-300 font-mono">
                  <Volume2 className="size-4 animate-pulse text-cyan-400" />
                  <span>Audited Audio</span>
                </div>
              </div>

              <blockquote className="rounded-xl border-l-2 border-cyan-400 bg-white/[0.03] p-4 text-sm text-slate-300 italic">
                "{activeStory.quote}"
              </blockquote>

              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
                  Call Dialogue Excerpt
                </div>
                <div className="rounded-xl border border-white/10 bg-black/50 p-4 font-mono text-xs text-slate-300 leading-relaxed">
                  {activeStory.transcriptPreview}
                </div>
              </div>

              <div className="space-y-2">
                {activeStory.results.map((res, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveStory(null)}
                className="w-full btn-primary py-3 text-xs uppercase tracking-wider font-semibold"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
