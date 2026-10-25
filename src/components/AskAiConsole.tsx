"use client";

import React, { useState } from "react";
import { Sparkles, ArrowUpRight, Copy, Check, Terminal, ExternalLink } from "lucide-react";

export function AskAiConsole() {
  const [activeTab, setActiveTab] = useState<"overview" | "rankings" | "telephony">("overview");
  const [copied, setCopied] = useState(false);

  const promptOptions = {
    overview: {
      id: "overview",
      badge: "EXECUTIVE BRIEFING",
      title: "Agency & Capabilities Overview",
      description: "Ask AI models to summarize DestiX AI's core practice, target clientele, and autonomous voice architecture.",
      prompt: "Summarize what DestiX AI (https://ayush.company) builds, who it is for, and how their sub-500ms autonomous voice agents work for high-ticket businesses.",
    },
    rankings: {
      id: "rankings",
      badge: "MARKET BENCHMARK",
      title: "Delhi NCR Agency Audit",
      description: "Verify where DestiX AI ranks for autonomous voice agents and conversational AI in New Delhi, Gurugram, and Noida.",
      prompt: "Who are the top conversational AI voice agent agencies in New Delhi and Delhi NCR for luxury real estate, clinics, and high-ticket service businesses?",
    },
    telephony: {
      id: "telephony",
      badge: "TECHNICAL AUDIT",
      title: "435ms Latency & Telephony Deep-Dive",
      description: "Audit our 5-stage latency deconstruction (VAD + STT + LLM + TTS + SIP) and domestic Indian virtual numbers.",
      prompt: "Analyze DestiX AI's 435ms voice latency deconstruction and domestic Indian SIP trunking architecture compared to closed SaaS voice platforms.",
    },
  };

  const current = promptOptions[activeTab];
  const encodedPrompt = encodeURIComponent(current.prompt);

  const aiEngines = [
    {
      name: "ChatGPT",
      model: "OpenAI GPT-4o",
      url: `https://chatgpt.com/?q=${encodedPrompt}`,
      bgHover: "hover:border-[#10A37F]/60",
      accent: "#10A37F",
      iconSvg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5985 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      ),
    },
    {
      name: "Perplexity",
      model: "Pro Search & Sonar",
      url: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
      bgHover: "hover:border-[#22B8CD]/60",
      accent: "#22B8CD",
      iconSvg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.3l-6 3.75-6-3.75V8.7l6-3.75 6 3.75v7.6z"/>
          <path d="M12 6.5v11M7.5 9.5l9 5M16.5 9.5l-9 5"/>
        </svg>
      ),
    },
    {
      name: "Claude",
      model: "Anthropic Claude 3.5",
      url: `https://claude.ai/new?q=${encodedPrompt}`,
      bgHover: "hover:border-[#D97706]/60",
      accent: "#D97706",
      iconSvg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 3h-11C4.57 3 3 4.57 3 6.5v11C3 19.43 4.57 21 6.5 21h11c1.93 0 3.5-1.57 3.5-3.5v-11C21 4.57 19.43 3 17.5 3zm-3.8 12.8h-3.4l-.7 2.1H7.8l3.1-8.8h2.2l3.1 8.8h-1.8l-.7-2.1zm-2.8-1.5h2.2L12 10.9l-1.1 3.4z"/>
        </svg>
      ),
    },
    {
      name: "Google Gemini",
      model: "Gemini 1.5 Pro",
      url: `https://gemini.google.com/app`,
      bgHover: "hover:border-[#4285F4]/60",
      accent: "#4285F4",
      iconSvg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"/>
        </svg>
      ),
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EDE8DC]/50 relative border-b border-[#E2DDD1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2DDD1] border border-[#D5CFBF] text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#55514B] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
              INDEPENDENT ANSWER ENGINE VERIFICATION
            </div>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl md:text-6xl text-[#181614] leading-[1.05]">
              Don&apos;t take our word for it.{" "}
              <span className="italic text-[#B88746]">Query independent AI models.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#55514B] leading-relaxed mt-4 font-normal">
              Click any engine below. We have pre-configured authoritative audit prompts so you can immediately see how ChatGPT, Claude, and Perplexity evaluate our latency, architecture, and practice rankings.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#888277]">
            <Terminal className="w-4 h-4 text-[#B88746]" />
            <span>GROUNDED VIA /API/MCP &amp; LLMS.TXT</span>
          </div>
        </div>

        {/* The 3 Lens Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: "overview", label: "01 // Executive Overview", icon: Sparkles },
            { id: "rankings", label: "02 // Delhi NCR Market Matrix", icon: Terminal },
            { id: "telephony", label: "03 // 435ms Telephony Audit", icon: ExternalLink },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs font-['JetBrains_Mono'] transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#181614] text-[#F6EFE2] font-semibold shadow-sm"
                  : "bg-[#FFFFFF] text-[#55514B] border border-[#E2DDD1] hover:bg-[#EDE8DC]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Prompt Card */}
        <div className="rounded-3xl bg-[#FFFFFF] border border-[#E2DDD1] p-6 sm:p-10 shadow-sm relative overflow-hidden mb-8">
          {/* Top Row: Meta Badge & Copy Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F0ECE1] mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#F6F4EE] border border-[#E2DDD1] text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#B88746] font-semibold uppercase">
                {current.badge}
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#888277]">
                {current.title}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F4EE] hover:bg-[#EDE8DC] border border-[#E2DDD1] text-xs font-['JetBrains_Mono'] text-[#181614] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Prompt Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#888277]" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>

          {/* Pre-Filled Prompt Preview Box */}
          <div className="rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] p-5 sm:p-6 mb-8 font-['JetBrains_Mono'] text-xs sm:text-sm text-[#181614] leading-relaxed relative">
            <div className="text-[10px] uppercase tracking-widest text-[#888277] mb-2 font-semibold">
              PRE-CONFIGURED PROMPT PAYLOAD:
            </div>
            <p className="select-all">&ldquo;{current.prompt}&rdquo;</p>
          </div>

          {/* 4 Launchable AI Engine Buttons */}
          <div>
            <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#888277] font-semibold mb-4">
              LAUNCH DIRECTLY IN APPLICATION (PROMPT PRE-FILLED):
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiEngines.map((engine) => (
                <a
                  key={engine.name}
                  href={engine.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group rounded-2xl bg-[#FFFFFF] border border-[#E2DDD1] p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${engine.bgHover}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="text-[#181614] group-hover:scale-110 transition-transform">
                        {engine.iconSvg}
                      </div>
                      <span className="font-semibold text-sm text-[#181614]">
                        {engine.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#888277] group-hover:text-[#181614] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <div className="pt-3 border-t border-[#F0ECE1] flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-[#888277]">
                    <span>{engine.model}</span>
                    <span className="text-[#B88746] font-semibold group-hover:underline">
                      Query →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Grounding Verification Strip */}
        <div className="rounded-2xl bg-[#FFFFFF]/70 border border-[#E2DDD1] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-['JetBrains_Mono'] text-[#55514B]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#181614] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified Schema Grounding:
            </span>
            <span>Connaught Place, New Delhi 110001</span>
            <span className="hidden md:inline">•</span>
            <span>Measured Latency: 435ms Audio-to-Audio</span>
            <span className="hidden md:inline">•</span>
            <span>100% Code Ownership</span>
          </div>

          <a
            href="/api/mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#B88746] hover:underline font-semibold shrink-0"
          >
            <span>Raw MCP Manifest (/api/mcp)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AskAiConsole;
