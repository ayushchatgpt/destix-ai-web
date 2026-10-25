"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface ScrambleTextProps {
  text: string;
  triggerOnHover?: boolean;
  triggerOnView?: boolean;
  className?: string;
  glyphs?: string;
  speedMs?: number;
}

const DEFAULT_GLYPHS = "01X/#_><:-*+";

/**
 * ScrambleText: High-precision monospace character scramble reveal.
 * Mimics high-frequency telemetry deciphering in real time.
 * Zero layout shifts because all characters occupy monospace width.
 */
export function ScrambleText({
  text,
  triggerOnHover = true,
  triggerOnView = true,
  className = "",
  glyphs = DEFAULT_GLYPHS,
  speedMs = 28,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);

  const startScramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            // Keep whitespace as space
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("");
      });

      iteration += 1 / 2; // Each letter takes ~2 frames to resolve

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speedMs);
  }, [text, glyphs, speedMs, isScrambling]);

  useEffect(() => {
    if (!triggerOnView) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startScramble();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startScramble, triggerOnView]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
      className={`font-['JetBrains_Mono'] tabular-nums tracking-wide ${className}`}
      data-cursor-text={triggerOnHover ? "DECODE" : undefined}
    >
      {displayText}
    </span>
  );
}
