"use client";

import React from "react";

export function MarqueeTrack() {
  const items = [
    "Autonomous Telephony Infrastructure",
    "Bespoke 3D Web Architectures",
    "Sub-45s Lead Triage",
    "High-Net-Worth Real Estate & Clinic Systems",
    "Founder-Led Engineering",
    "The 5x Hurdle Rate Guarantee",
  ];

  return (
    <div
      aria-label="Practice capabilities track"
      className="overflow-hidden border-y border-[#25221F] bg-[#141210] py-5 sm:py-6"
    >
      <div className="flex w-max items-center">
        {/* Track duplicate 1 */}
        <div className="animate-marquee flex shrink-0 items-center">
          {items.map((item, idx) => (
            <div key={`track-1-${idx}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-['Instrument_Serif'] text-xl sm:text-2xl text-[#F6EFE2] font-normal tracking-wide">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="text-[#B88746] text-xs px-2"
              >
                ◆
              </span>
            </div>
          ))}
        </div>

        {/* Track duplicate 2 */}
        <div aria-hidden="true" className="animate-marquee flex shrink-0 items-center">
          {items.map((item, idx) => (
            <div key={`track-2-${idx}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-['Instrument_Serif'] text-xl sm:text-2xl text-[#F6EFE2] font-normal tracking-wide">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="text-[#B88746] text-xs px-2"
              >
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarqueeTrack;
