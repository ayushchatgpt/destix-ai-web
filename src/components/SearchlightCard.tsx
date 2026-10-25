"use client";

import React, { useRef, useState, useCallback } from "react";

interface SearchlightCardProps {
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
  showBlueprint?: boolean;
  spec?: string;
  coords?: string;
  status?: string;
  dimensions?: string;
  withScanline?: boolean;
  onClick?: () => void;
  dataCursorText?: string;
}

/**
 * SearchlightCard: Architectural physical surface with cursor-following spotlight
 * and precision CAD blueprint crosshairs.
 * Pure 60fps GPU performance, zero state re-renders on mousemove.
 */
export function SearchlightCard({
  children,
  className = "",
  theme = "light",
  showBlueprint = false,
  spec = "01",
  coords = "28.6139° N, 77.2090° E",
  status = "ACTIVE",
  dimensions = "100% × AUTO",
  withScanline = false,
  onClick,
  dataCursorText,
}: SearchlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      data-cursor-text={dataCursorText}
      className={`group relative rounded-3xl overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-[#181614] border border-[#2D2824] hover:border-[#B88746]/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
          : "bg-white border border-[#E2DDD1] hover:border-[#B88746]/60 shadow-sm hover:shadow-[0_20px_45px_-15px_rgba(24,22,20,0.08)]"
      } ${className}`}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* 1. Cursor-Tracking Spotlight Beam */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(550px circle at var(--mouse-x) var(--mouse-y), rgba(184, 135, 70, 0.18), transparent 65%)"
            : "radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(184, 135, 70, 0.09), transparent 65%)",
        }}
      />

      {/* 2. Optional Architectural Scanline */}
      {withScanline && (
        <div
          className={`pointer-events-none absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B88746]/40 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100 animate-scanline" : "opacity-0"
          }`}
        />
      )}

      {/* 3. Blueprint Dimensions HUD Overlay */}
      {showBlueprint && (
        <div
          className={`pointer-events-none absolute inset-0 p-4 sm:p-5 flex flex-col justify-between select-none transition-opacity duration-300 font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.22em] ${
            isHovered
              ? "opacity-90 text-[#B88746]"
              : isDark
              ? "opacity-20 text-[#888277]"
              : "opacity-25 text-[#888277]"
          }`}
        >
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 font-semibold">
              <span className="text-[#B88746]">+</span> [SPEC // {spec}]
            </span>
            <span className="flex items-center gap-1 font-semibold">
              COORD: {coords}
            </span>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 font-semibold">
              <span className="text-[#B88746]">+</span> STATUS: {status}
            </span>
            <span className="flex items-center gap-1 font-semibold">
              DIM: {dimensions}
            </span>
          </div>
        </div>
      )}

      {/* 4. Content Container */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
