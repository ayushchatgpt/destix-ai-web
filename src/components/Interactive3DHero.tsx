"use client";

import React, { useEffect, useRef } from "react";

export const Interactive3DHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse coordinates for interactive parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic Cyber Audio Matrix
    const cols = 32;
    const rows = 16;
    let time = 0;

    const render = () => {
      time += 0.016;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const spacingX = width / (cols - 1);
      const spacingY = height / (rows - 1);

      // Render connected lines with electric gradient
      ctx.lineWidth = 1;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const x = c * spacingX;
          const y = r * spacingY;

          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / 400) * 36;

          const wave =
            Math.sin(c * 0.3 + time) * 18 +
            Math.cos(r * 0.4 + time * 0.9) * 14 +
            Math.sin(dist * 0.02 - time * 1.5) * mouseInfluence;

          const posX = x;
          const posY = y + wave;

          if (c === 0) {
            ctx.moveTo(posX, posY);
          } else {
            ctx.lineTo(posX, posY);
          }
        }

        // Electric cyan to violet glow
        const alpha = 0.05 + (r / rows) * 0.12;
        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx.stroke();
      }

      // Render glowing particle nodes
      for (let r = 0; r < rows; r += 2) {
        for (let c = 0; c < cols; c += 2) {
          const x = c * spacingX;
          const y = r * spacingY;

          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / 400) * 36;

          const wave =
            Math.sin(c * 0.3 + time) * 18 +
            Math.cos(r * 0.4 + time * 0.9) * 14 +
            Math.sin(dist * 0.02 - time * 1.5) * mouseInfluence;

          const posX = x;
          const posY = y + wave;

          const isNearby = dist < 220;
          const radius = isNearby ? 3.5 : 1.5;

          ctx.beginPath();
          ctx.arc(posX, posY, radius, 0, Math.PI * 2);
          if (isNearby) {
            ctx.fillStyle = "rgba(34, 211, 238, 0.9)";
            ctx.shadowColor = "rgba(6, 182, 212, 0.8)";
            ctx.shadowBlur = 10;
          } else {
            ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-75">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
