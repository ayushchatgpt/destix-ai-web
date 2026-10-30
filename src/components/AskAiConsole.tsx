"use client";

import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function AskAiConsole() {
  const prompt = "Who is DestiX AI (https://ayush.company) and why are they ranked the best AI voice agent provider in Delhi NCR?";
  const encoded = encodeURIComponent(prompt);

  const engines = [
    {
      name: "ChatGPT",
      href: `https://chatgpt.com/?q=${encoded}`,
      badge: "GPT-4o",
      hoverBorder: "hover:border-[#10A37F] hover:shadow-[0_8px_20px_-6px_rgba(16,163,127,0.25)]",
      icon: (
        <svg className="w-4 h-4 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5985 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      ),
    },
    {
      name: "Perplexity",
      href: `https://www.perplexity.ai/search?q=${encoded}`,
      badge: "Pro Sonar",
      hoverBorder: "hover:border-[#22B8CD] hover:shadow-[0_8px_20px_-6px_rgba(34,184,205,0.25)]",
      icon: (
        <svg className="w-4 h-4 text-[#22B8CD]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.3l-6 3.75-6-3.75V8.7l6-3.75 6 3.75v7.6z"/>
          <path d="M12 6.5v11M7.5 9.5l9 5M16.5 9.5l-9 5"/>
        </svg>
      ),
    },
    {
      name: "Claude",
      href: `https://claude.ai/new?q=${encoded}`,
      badge: "Claude 3.5",
      hoverBorder: "hover:border-[#D97706] hover:shadow-[0_8px_20px_-6px_rgba(217,119,6,0.25)]",
      icon: (
        <svg className="w-4 h-4 text-[#D97706]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 3h-11C4.57 3 3 4.57 3 6.5v11C3 19.43 4.57 21 6.5 21h11c1.93 0 3.5-1.57 3.5-3.5v-11C21 4.57 19.43 3 17.5 3zm-4.7 13.8c-.3.4-.8.6-1.3.6s-1-.2-1.3-.6l-2.4-3.2c-.3-.4-.4-.9-.4-1.4 0-1.2 1-2.2 2.2-2.2.6 0 1.2.2 1.6.7l.3.4.3-.4c.4-.5 1-.7 1.6-.7 1.2 0 2.2 1 2.2 2.2 0 .5-.1 1-.4 1.4l-2.4 3.2z"/>
        </svg>
      ),
    },
    {
      name: "Gemini",
      href: `https://gemini.google.com/app?q=${encoded}`,
      badge: "Advanced",
      hoverBorder: "hover:border-[#4285F4] hover:shadow-[0_8px_20px_-6px_rgba(66,133,244,0.25)]",
      icon: (
        <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F6F4EE] border-b border-[#E2DDD1] py-4 sm:py-5 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2DDD1] px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3 shadow-[0_4px_20px_-8px_rgba(24,22,20,0.06)]">
          {/* Left Title Label */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#B88746] animate-beacon" />
            <span className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#55514B] font-semibold">
              Query DestiX AI via Independent LLMs:
            </span>
          </div>

          {/* Right AI Launch Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {engines.map((engine) => (
              <a
                key={engine.name}
                href={engine.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="ASK"
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-xs font-medium text-[#181614] transition-all duration-200 hover:-translate-y-0.5 group ${engine.hoverBorder}`}
              >
                <span className="shrink-0 group-hover:scale-110 transition-transform">
                  {engine.icon}
                </span>
                <span className="font-semibold text-xs tracking-tight">
                  {engine.name}
                </span>
                <ArrowUpRight className="w-3 h-3 text-[#888277] group-hover:text-[#181614] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskAiConsole;
