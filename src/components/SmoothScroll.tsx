"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll: Luxury 120Hz Inertial Momentum Scroller.
 * Powered by Lenis (Studio Freight / Darkroom Engineering).
 * Replaces jerky browser steps with weighted, physical momentum.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Only initialize on desktop / capable devices with reduced motion preference checked
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
