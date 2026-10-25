"use client";

import React from "react";

/**
 * AmbientAtmosphere: Organic, slow-drifting warm champagne ambient light meshes.
 * Eliminates static, sterile flat backgrounds by introducing living architectural atmosphere.
 * Runs 100% on GPU compositor thread with will-change: transform.
 */
export function AmbientAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Top-Right Warm Champagne Aura */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] rounded-full blur-[120px] opacity-40 animate-aura-drift"
        style={{
          background: "radial-gradient(circle, rgba(184, 135, 70, 0.22) 0%, rgba(237, 232, 220, 0.4) 50%, transparent 70%)",
        }}
      />

      {/* Mid-Left Soft Linen Aura */}
      <div
        className="absolute top-[40%] -left-[10%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-30 animate-float-delayed"
        style={{
          background: "radial-gradient(circle, rgba(212, 163, 115, 0.18) 0%, rgba(246, 244, 238, 0.6) 60%, transparent 75%)",
        }}
      />

      {/* Bottom-Right Deep Warmth Aura */}
      <div
        className="absolute bottom-[5%] -right-[8%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-35 animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(184, 135, 70, 0.16) 0%, rgba(237, 232, 220, 0.3) 55%, transparent 70%)",
        }}
      />
    </div>
  );
}

export default AmbientAtmosphere;
