"use client";

import React from "react";

export const MarqueeTrack: React.FC = () => {
  const items = [
    "Sub-350ms Autonomous Voice Infrastructure",
    "Bespoke 3D WebGL Conversion Platforms",
    "45-Second Speed to Lead Outbound",
    "Automated n8n & CRM Integration Pipelines",
    "Bootstrapped & Founder-Led by Ayush Meena",
    "100% Custom Telephony Architecture",
    "$1M+ Client Pipeline Driven",
    "24/7 Multi-Dialect Phone Qualification",
  ];

  return (
    <section
      aria-label="Track record"
      className="overflow-hidden border-y border-white/10 bg-[#0A0C12] py-4 sm:py-5"
    >
      <div className="flex w-max items-center">
        {/* Track duplicate 1 */}
        <ul className="animate-marquee flex shrink-0 items-center">
          {items.map((item, idx) => (
            <li key={`track-1-${idx}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-display text-lg tracking-wide uppercase text-slate-200 md:text-xl font-medium">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]"
              />
            </li>
          ))}
        </ul>

        {/* Track duplicate 2 */}
        <ul aria-hidden="true" className="animate-marquee flex shrink-0 items-center">
          {items.map((item, idx) => (
            <li key={`track-2-${idx}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-display text-lg tracking-wide uppercase text-slate-200 md:text-xl font-medium">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
