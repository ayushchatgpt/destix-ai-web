"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text" | "click">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device has touch primary
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instantly position the center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check for hover state on links/buttons or data-cursor elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("button, a, input, select, textarea, [data-cursor]");
      if (interactiveEl) {
        const customText = interactiveEl.getAttribute("data-cursor-text");
        if (customText) {
          setCursorText(customText);
          setCursorVariant("text");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const onMouseDown = () => setCursorVariant("click");
    const onMouseUp = () => setCursorVariant("hover");

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Spring/lerp interpolation loop for follower ring (60-120fps)
    const render = () => {
      // Lerp factor
      const speed = 0.16;
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[3px] -mt-[3px] w-[6px] h-[6px] rounded-full bg-[#181614] will-change-transform pointer-events-none transition-transform duration-75"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Fluid Trailing Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 will-change-transform pointer-events-none flex items-center justify-center transition-all duration-200 ease-out ${
          cursorVariant === "default"
            ? "-ml-4 -mt-4 w-8 h-8 rounded-full border border-[#B88746]/60 bg-[#B88746]/5 backdrop-blur-[0.5px]"
            : cursorVariant === "hover"
            ? "-ml-7 -mt-7 w-14 h-14 rounded-full border-2 border-[#B88746] bg-[#B88746]/15 backdrop-blur-[2px] scale-110 shadow-[0_0_20px_rgba(184,135,70,0.25)]"
            : cursorVariant === "text"
            ? "-ml-9 -mt-9 w-18 h-18 rounded-full border-2 border-[#181614] bg-[#181614] text-[#F6F4EE] scale-100 shadow-xl"
            : "-ml-3 -mt-3 w-6 h-6 rounded-full border border-[#B88746] bg-[#B88746]/40 scale-75"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        {cursorText && (
          <span
            ref={textRef}
            className="text-[9px] font-['JetBrains_Mono'] tracking-widest uppercase font-bold text-[#F6F4EE] select-none"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}

export default CustomCursor;
