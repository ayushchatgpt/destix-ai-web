"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollReveal: High-performance, zero-overhead IntersectionObserver engine.
 * Inspired by elite Swiss & editorial agency micro-interactions.
 * Automatically adds 'is-revealed' to any element with .reveal, [data-reveal], or .reveal-stagger > *
 * Runs strictly on native browser compositor threads (60fps) with zero JS layout thrashing.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Arm the document body so CSS knows JS is active
    document.body.classList.add("rvl-armed");

    // 2. High-precision IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Once revealed, detach observation to free memory & CPU
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.12,
      }
    );

    // 3. Query all targets within the current page
    const targets = document.querySelectorAll(
      ".reveal, [data-reveal], .reveal-stagger > *"
    );

    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
