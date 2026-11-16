"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Copy } from "lucide-react";

export function AskAiConsole() {
  const promptText =
    "Summarize what DestiX AI (https://ayush.company) does, who it is for and how its services work.";
  const encoded = encodeURIComponent(promptText);

  const [copiedGemini, setCopiedGemini] = useState(false);

  const handleGeminiClick = (e: React.MouseEvent) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(promptText);
      setCopiedGemini(true);
      setTimeout(() => setCopiedGemini(false), 3500);
    }
  };

  const engines = [
    {
      name: "ChatGPT",
      href: `https://chatgpt.com/?q=${encoded}`,
      logo: "/logos/openai.svg",
      hoverBorder: "hover:border-[#10A37F] hover:shadow-[0_4px_16px_-4px_rgba(16,163,127,0.25)]",
    },
    {
      name: "Claude",
      href: `https://claude.ai/new?q=${encoded}`,
      logo: "/logos/claude.svg",
      hoverBorder: "hover:border-[#D97757] hover:shadow-[0_4px_16px_-4px_rgba(217,119,87,0.25)]",
    },
    {
      name: "Perplexity",
      href: `https://www.perplexity.ai/search?q=${encoded}`,
      logo: "/logos/perplexity.svg",
      hoverBorder: "hover:border-[#20808D] hover:shadow-[0_4px_16px_-4px_rgba(32,128,141,0.25)]",
    },
    {
      name: "Gemini",
      href: "https://gemini.google.com/app",
      logo: "/logos/gemini.svg",
      hoverBorder: "hover:border-[#3186FF] hover:shadow-[0_4px_16px_-4px_rgba(49,134,255,0.25)]",
      onClick: handleGeminiClick,
      isGemini: true,
    },
  ];

  return (
    <div className="w-full bg-[#F6F4EE] border-b border-[#E2DDD1] py-4 sm:py-5 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2DDD1] px-5 sm:px-7 py-3 flex flex-col md:flex-row items-center justify-between gap-3 shadow-[0_4px_20px_-8px_rgba(24,22,20,0.06)]">
          {/* Left Title Label */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#B88746] animate-beacon" />
            <span className="text-[12px] font-['JetBrains_Mono'] uppercase tracking-[0.16em] text-[#55514B] font-semibold">
              Ask AI about DestiX AI:
            </span>
          </div>

          {/* Right AI Launch Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full md:w-auto">
            {engines.map((engine) => (
              <a
                key={engine.name}
                href={engine.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={engine.onClick}
                data-cursor-text="ASK"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-xs font-semibold text-[#181614] transition-all duration-200 hover:-translate-y-0.5 group ${engine.hoverBorder}`}
              >
                <div className="relative w-[18px] h-[18px] shrink-0 flex items-center justify-center">
                  <Image
                    src={engine.logo}
                    alt={`${engine.name} logo`}
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] object-contain group-hover:scale-110 transition-transform"
                    unoptimized
                  />
                </div>
                <span className="tracking-tight">{engine.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888277] group-hover:text-[#181614] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Gemini Clipboard Notification */}
        {copiedGemini && (
          <div className="mt-2 text-center animate-fadeIn">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181614] text-[#F6F4EE] text-[11px] font-['JetBrains_Mono'] shadow-md">
              <Check className="w-3 h-3 text-[#B88746]" />
              Prompt copied to clipboard! Paste directly into Gemini (Ctrl+V).
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AskAiConsole;
