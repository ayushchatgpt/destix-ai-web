"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Copy, AlertCircle } from "lucide-react";

export function AskAiConsole() {
  const promptText =
    "Summarize what DestiX AI (https://ayush.company) does, who it is for and how its services work.";
  const encoded = encodeURIComponent(promptText);

  // Claude requires a web search query first before fetching URLs to prevent tool security blocks
  const claudePrompt =
    "Use web search for 'DestiX AI ayush.company' and summarize what DestiX AI does, who it is for and how its services work.";
  const encodedClaude = encodeURIComponent(claudePrompt);

  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [showGeminiNotice, setShowGeminiNotice] = useState(false);

  const handleCopyPrompt = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(promptText);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 3000);
    }
  };

  const handleGeminiClick = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(promptText);
      setShowGeminiNotice(true);
      setTimeout(() => setShowGeminiNotice(false), 6000);
    }
  };

  const engines = [
    {
      name: "ChatGPT",
      href: `https://chatgpt.com/?q=${encoded}`,
      logo: "/logos/openai.svg",
      hoverBorder: "hover:border-[#10A37F] hover:shadow-[0_4px_16px_-4px_rgba(16,163,127,0.25)]",
      note: "Auto-fills prompt",
    },
    {
      name: "Claude",
      href: `https://claude.ai/new?q=${encodedClaude}`,
      logo: "/logos/claude.svg",
      hoverBorder: "hover:border-[#D97757] hover:shadow-[0_4px_16px_-4px_rgba(217,119,87,0.25)]",
      note: "Auto-runs web search query",
    },
    {
      name: "Perplexity",
      href: `https://www.perplexity.ai/search?q=${encoded}`,
      logo: "/logos/perplexity.svg",
      hoverBorder: "hover:border-[#20808D] hover:shadow-[0_4px_16px_-4px_rgba(32,128,141,0.25)]",
      note: "Auto-runs search",
    },
    {
      name: "Google AI",
      href: `https://www.google.com/search?q=${encoded}`,
      logo: "/logos/gemini.svg",
      hoverBorder: "hover:border-[#4285F4] hover:shadow-[0_4px_16px_-4px_rgba(66,133,244,0.25)]",
      note: "Auto-generates Gemini AI Overview",
      isGoogleAI: true,
    },
    {
      name: "Gemini App",
      href: `https://gemini.google.com/app?q=${encoded}`,
      logo: "/logos/gemini.svg",
      hoverBorder: "hover:border-[#3186FF] hover:shadow-[0_4px_16px_-4px_rgba(49,134,255,0.25)]",
      onClick: handleGeminiClick,
      note: "Copies prompt to paste",
    },
  ];

  return (
    <div className="w-full bg-[#F6F4EE] border-b border-[#E2DDD1] py-4 sm:py-5 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2DDD1] px-5 sm:px-7 py-3 flex flex-col lg:flex-row items-center justify-between gap-3 shadow-[0_4px_20px_-8px_rgba(24,22,20,0.06)]">
          {/* Left Title Label */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#B88746] animate-beacon" />
            <span className="text-[12px] font-['JetBrains_Mono'] uppercase tracking-[0.16em] text-[#55514B] font-semibold">
              Ask AI about DestiX AI:
            </span>
          </div>

          {/* Center/Right AI Launch Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
            {engines.map((engine) => (
              <a
                key={engine.name}
                href={engine.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={engine.onClick}
                data-cursor-text="ASK"
                title={engine.note}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-xs font-semibold text-[#181614] transition-all duration-200 hover:-translate-y-0.5 group ${engine.hoverBorder}`}
              >
                <div className="relative w-[16px] h-[16px] shrink-0 flex items-center justify-center">
                  <Image
                    src={engine.logo}
                    alt={`${engine.name} logo`}
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] object-contain group-hover:scale-110 transition-transform"
                    unoptimized
                  />
                </div>
                <span className="tracking-tight">{engine.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#888277] group-hover:text-[#181614] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}

            {/* Quick Copy Prompt Button */}
            <button
              onClick={handleCopyPrompt}
              data-cursor-text="COPY"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#EDE8DC] border border-[#E2DDD1] text-xs font-['JetBrains_Mono'] text-[#55514B] hover:text-[#181614] transition-colors"
              title="Copy the exact summary prompt"
            >
              {copiedPrompt ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#B88746]" />
                  <span className="text-[#B88746] font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#888277]" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Gemini Notice Bar */}
        {showGeminiNotice && (
          <div className="mt-2.5 text-center animate-fadeIn">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181614] text-[#F6F4EE] text-xs font-['JetBrains_Mono'] shadow-lg">
              <Check className="w-3.5 h-3.5 text-[#B88746]" />
              <span>Prompt copied to clipboard! In Gemini, press <strong>Ctrl+V</strong> (Paste) &amp; Enter.</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AskAiConsole;
