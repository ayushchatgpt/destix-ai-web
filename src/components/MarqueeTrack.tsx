"use client";

import React from "react";

export function MarqueeTrack() {
  const items = [
    "Sub-380ms Autonomous Voice Infrastructure",
    "Bespoke 3D WebGL Conversion Platforms",
    "45-Second Speed to Lead Outbound",
    "Automated n8n & CRM Integration Pipelines",
    "Bootstrapped & Founder-Led by Ayush Meena",
    "100% Custom Telephony Architecture",
    "$1M+ Client Pipeline Driven",
    "24/7 Multi-Dialect Phone Qualification",
  ];

  return (
    <div
      aria-label="Track record"
      className="overflow-hidden border-y border-white/5 bg-[#08080A] py-4"
    >
      <div className="flex w-max items-center">
        {/* Track duplicate 1 */}
        <div className="animate-marquee flex shrink-0 items-center">
          {items.map((item, idx) => (
            <div key={`track-1-${idx}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-['Syne'] text-sm sm:text-base tracking-wider uppercase text-[#A1A5B2] font-semibold">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_8px_rgba(0,245,160,0.8)]"
              />
            </div>
          ))}
        </div>

        {/* Track duplicate 2 */}
        <div aria-hidden="true" className="animate-marquee flex shrink-0 items-center">
          {items.map((item, idx) => (
            <div key={`track-2-${idx}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-['Syne'] text-sm sm:text-base tracking-wider uppercase text-[#A1A5B2] font-semibold">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_8px_rgba(0,245,160,0.8)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarqueeTrack;
