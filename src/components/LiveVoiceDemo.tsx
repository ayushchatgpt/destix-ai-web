"use client";

import React, { useState } from "react";
import {
  Play,
  Square,
  Building2,
  Stethoscope,
  Briefcase,
  Utensils,
  Radio,
  Mic,
  PhoneOff,
  Loader2,
  AlertCircle,
  Sparkles,
  Check,
  Copy,
  Globe,
  Flame,
  Zap,
  Clock,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { useDograhVoice } from "@/hooks/useDograhVoice";
import { LeadSummary, VoiceLanguage } from "@/types/dograh";

interface AgentDemo {
  id: string;
  name: string;
  subtitle: string;
  role: string;
  voiceStyle: string;
  language: string;
  latency: string;
  isLive?: boolean;
  icon: any;
  lines: { speaker: "Agent" | "Caller"; text: string; time: string }[];
}

export const LiveVoiceDemo: React.FC = () => {
  const [selectedAgentIdx, setSelectedAgentIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const {
    status,
    error,
    callDuration,
    lastRunId,
    leadSummary,
    isLoadingSummary,
    language,
    setLanguage,
    startCall,
    endCall,
    retry,
    clearSummary,
  } = useDograhVoice("en");

  const isConnected = status === "connected";
  const isConnecting = status === "connecting";
  const isArabic =
    language === "ar" ||
    (language === "auto" &&
      typeof navigator !== "undefined" &&
      navigator.language?.toLowerCase().startsWith("ar"));

  const agents: AgentDemo[] = [
    {
      id: "real-estate",
      name: isArabic ? "مستشار عقارات دبي (إماراتي)" : "Dubai Property Specialist",
      subtitle: isArabic
        ? "تأهيل المستثمر والمشتري الصوتي بالكامل"
        : "Autonomous buyer qualification & villa tour triage",
      role: isArabic ? "مستشار عقاري فخم" : "Luxury Property Broker",
      voiceStyle: isArabic ? "لهجة إماراتية طبيعية ومهذبة" : "Warm, authoritative, conversational",
      language: isArabic ? "العربية — اللهجة الإماراتية" : "Conversational English",
      latency: "279ms",
      isLive: true,
      icon: Building2,
      lines: [
        {
          speaker: "Agent",
          text: isArabic
            ? "مرحبا الساع! حياك الله في ديستكس للعقارات. أقدر أساعدك تحدد العقار المناسب في دبي، سواء في نخلة جميرا أو تلال دبي. تفضل، تدور على شقة ولا فيلا؟"
            : "Hi there! I'm Sarah from DestiX AI. I'd love to help you find the right property in Dubai. Are you looking for an apartment or a villa?",
          time: "0:02",
        },
        {
          speaker: "Caller",
          text: isArabic
            ? "حياك الله، أدور على فيلا 4 غرف نوم في نخلة جميرا لعائلتي، مع إطلالة بحرية ومسبح خاص."
            : "Hi Sarah, we're looking for a private 4-bedroom villa in Palm Jumeirah or Dubai Hills with sea views.",
          time: "0:08",
        },
      ],
    },
    {
      id: "clinic",
      name: "Clinic Receptionist",
      subtitle: "24/7 Patient triage & emergency doctor booking",
      role: "Medical Front-Desk Lead",
      voiceStyle: "Empathetic, calm, reassuring",
      language: "English & Hindi",
      latency: "360ms",
      isLive: false,
      icon: Stethoscope,
      lines: [
        {
          speaker: "Agent",
          text: "Thank you for calling SkinMed Aesthetics & Surgical Clinic. I'm the clinical assistant. Are you calling regarding a cosmetic consultation or a follow-up with Dr. Verma?",
          time: "0:02",
        },
        {
          speaker: "Caller",
          text: "Hello, I wanted to inquire about downtime for fractional laser resurfacing. I have an event next week.",
          time: "0:08",
        },
      ],
    },
    {
      id: "b2b",
      name: "B2B Sales Qualifier",
      subtitle: "Speed-to-lead qualification in < 45 seconds",
      role: "Senior Pipeline Qualifier",
      voiceStyle: "Sharp, consultative, punchy",
      language: "English",
      latency: "320ms",
      isLive: false,
      icon: Briefcase,
      lines: [
        {
          speaker: "Agent",
          text: "Good morning! David from Nexus Cloud Solutions following up on your Kubernetes integration request. Does your engineering team manage this on AWS or bare-metal?",
          time: "0:03",
        },
        {
          speaker: "Caller",
          text: "Hey David, yes—we manage around 180 nodes on AWS, and our multi-cloud deployment is becoming really messy.",
          time: "0:09",
        },
      ],
    },
    {
      id: "hospitality",
      name: "Hospitality Concierge",
      subtitle: "Boutique resort reservations & dining triage",
      role: "Luxury Concierge",
      voiceStyle: "Polite, gracious, discreet",
      language: "English, Hindi & Global Nuances",
      latency: "350ms",
      isLive: false,
      icon: Utensils,
      lines: [
        {
          speaker: "Agent",
          text: "Good evening, you've reached The Oberoi Pavilion concierge. How may I assist you with your stay or dinner reservations tonight?",
          time: "0:02",
        },
        {
          speaker: "Caller",
          text: "Hi, I'm checking if you have a private candlelit table by the terrace for an anniversary dinner tonight for two people?",
          time: "0:08",
        },
      ],
    },
  ];

  const activeAgent = agents[selectedAgentIdx];

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCopySummary = (summary: LeadSummary) => {
    const text = isArabic
      ? [
          "ديستكس للذكاء الاصطناعي — ملف تأهيل المشتري",
          `نوع العقار: ${summary.property_type || "لم يُحدد"}`,
          `الموقع: ${Array.isArray(summary.preferred_locations) ? summary.preferred_locations.join("، ") : summary.preferred_locations || "لم يُحدد"}`,
          `الميزانية: ${summary.budget || "لم تُحدد"}`,
          `الإطار الزمني: ${summary.buying_timeline || "لم يُحدد"}`,
          `الهدف: ${summary.purchase_intent || "لم يُحدد"}`,
          `الغرف: ${summary.bedrooms || "لم يُحدد"}`,
          `طريقة الدفع: ${summary.financing_preference || "لم يُحدد"}`,
          `الخطوة التالية: ${summary.preferred_next_step || "لم يُحدد"}`,
          `متطلبات إضافية: ${summary.other_requirements || "لا يوجد"}`,
        ].join("\n")
      : JSON.stringify(summary, null, 2);

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="live-demo"
      className="relative overflow-hidden bg-[#0A0C12] px-6 py-24 text-white md:px-10 md:py-36 border-t border-white/10"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#B88746] mb-4">
            <Radio className="size-3.5 animate-pulse text-[#B88746]" />
            Real-Time Two-Way Telephony
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl md:text-6xl text-white tracking-tight">
            Live Voice Agent <span className="italic text-[#B88746]">Showcase</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/60 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Experience sub-second voice AI in action. Speak directly to our Dubai Real Estate agent via live WebRTC in English or Emirati Arabic.
          </p>
        </div>

        {/* Agent Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {agents.map((agent, idx) => {
            const Icon = agent.icon;
            const isSelected = selectedAgentIdx === idx;
            return (
              <button
                key={agent.id}
                onClick={() => {
                  if (isConnected) endCall();
                  setSelectedAgentIdx(idx);
                }}
                className={`p-4 md:p-5 rounded-2xl border text-left transition-all duration-300 relative ${
                  isSelected
                    ? "bg-white/10 border-[#B88746] shadow-lg shadow-[#B88746]/10"
                    : "bg-white/5 border-white/10 hover:border-white/20 text-white/60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isSelected
                        ? "bg-[#B88746]/20 border-[#B88746]/40 text-[#B88746]"
                        : "bg-white/5 border-white/10 text-white/40"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
                  {agent.isLive && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-mono border border-emerald-500/30">
                      LIVE
                    </span>
                  )}
                </div>
                <div className="font-semibold text-sm text-white mb-1 font-['Plus_Jakarta_Sans']">
                  {agent.name}
                </div>
                <div className="text-xs text-white/40 font-mono">{agent.latency} latency</div>
              </button>
            );
          })}
        </div>

        {/* Live Interface Box */}
        <div
          dir={isArabic && activeAgent.isLive ? "rtl" : "ltr"}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl"
        >
          {activeAgent.isLive ? (
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              {/* Language Switcher */}
              <div className="flex flex-col items-center gap-1.5 mb-2">
                <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                  <Globe className="w-3.5 h-3.5 text-[#B88746] ml-2" />
                  <button
                    onClick={() => setLanguage("auto")}
                    disabled={isConnected || isConnecting}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      language === "auto"
                        ? "bg-[#B88746] text-[#131210] font-bold"
                        : "text-white/60 hover:text-white"
                    } disabled:opacity-50`}
                  >
                    {isArabic ? "تلقائي (ثنائي اللغة)" : "Automatic (Bilingual)"}
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    disabled={isConnected || isConnecting}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      language === "en"
                        ? "bg-[#B88746] text-[#131210] font-bold"
                        : "text-white/60 hover:text-white"
                    } disabled:opacity-50`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("ar")}
                    disabled={isConnected || isConnecting}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      language === "ar"
                        ? "bg-[#B88746] text-[#131210] font-bold"
                        : "text-white/60 hover:text-white"
                    } disabled:opacity-50`}
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => setLanguage("hi")}
                    disabled={isConnected || isConnecting}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      language === "hi"
                        ? "bg-[#B88746] text-[#131210] font-bold"
                        : "text-white/60 hover:text-white"
                    } disabled:opacity-50`}
                  >
                    हिन्दी
                  </button>
                </div>
                <div className="text-[11px] font-mono text-[#B88746]/80 flex items-center gap-1">
                  <Sparkles className="size-3" />
                  {language === "auto"
                    ? isArabic
                      ? "كشف تلقائي مباشر: تحدث بالإنجليزية أو العربية أو اطلب التحويل أثناء المكالمة"
                      : "Live Auto-Detect: Speak in English, Arabic, or ask Sarah to switch mid-call"
                    : language === "ar"
                    ? "يبدأ بالترحيب الإماراتي ويدعم التبديل المباشر للإنجليزية إذا طلبت"
                    : language === "hi"
                    ? "Starts with polite Hindi greeting and dynamically adapts to code-switching"
                    : "Starts with English greeting and dynamically adapts to Arabic or mixed speech"}
                </div>
              </div>

              <div className="size-20 rounded-full border border-white/15 bg-white/5 flex items-center justify-center relative">
                {isConnected ? (
                  <>
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
                    <Mic className="size-8 text-emerald-400" />
                  </>
                ) : isConnecting ? (
                  <Loader2 className="size-8 text-[#B88746] animate-spin" />
                ) : (
                  <Mic className="size-8 text-white/40" />
                )}
              </div>

              <div>
                <h3 className="font-['Instrument_Serif'] text-3xl text-white mb-2">
                  {activeAgent.name}
                </h3>
                <p className="text-sm text-white/60 max-w-md">
                  {isConnected
                    ? isArabic
                      ? `المكالمة متصلة الآن (${formatDuration(callDuration)}) — تحدث بحرية لتأهيل طلبك العقاري`
                      : `Live Call Connected (${formatDuration(callDuration)}) — Speak to qualify your requirements`
                    : isConnecting
                    ? isArabic
                      ? "جاري إنشاء اتصال WebRTC الصوتي المباشر..."
                      : "Establishing WebRTC connection with local Dograh runtime..."
                    : isArabic
                    ? "تحدث مع المستشار العقاري بالصوت عبر الميكروفون بلهجة إماراتية طبيعية"
                    : "Connect your microphone to experience real-time two-way voice buyer qualification"}
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{error}</span>
                  <button onClick={retry} className="underline ml-2">
                    Retry
                  </button>
                </div>
              )}

              <div className="flex items-center gap-4">
                {!isConnected ? (
                  <button
                    onClick={startCall}
                    disabled={isConnecting}
                    className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A373] disabled:opacity-50 text-[#131210] font-bold text-sm flex items-center gap-2 shadow-xl transition-all hover:scale-105"
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>{isArabic ? "جاري الاتصال..." : "Connecting..."}</span>
                      </>
                    ) : (
                      <>
                        <Play className="size-4 fill-current" />
                        <span>{isArabic ? "بدء المحادثة الصوتية" : "Start Voice Session"}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={endCall}
                    className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center gap-2 shadow-xl transition-all hover:scale-105"
                  >
                    <PhoneOff className="size-4" />
                    <span>
                      {isArabic ? "إنهاء المكالمة" : "End Call"} ({formatDuration(callDuration)})
                    </span>
                  </button>
                )}
              </div>

              {/* Lead Dossier */}
              {leadSummary && (
                <div className="w-full mt-8 p-6 rounded-2xl bg-white/5 border border-[#B88746]/30 text-left">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono text-[#B88746] uppercase flex items-center gap-1.5">
                      <Sparkles className="size-4" />{" "}
                      {isArabic ? "ملف تأهيل المشتري المستخرج" : "Extracted Qualification Data"}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {isArabic
                        ? "نموذج تجريبي — لم يتم حجز موعد فعلي"
                        : "Sample Handoff — No Appointment Booked"}
                    </span>
                  </div>

                  {/* Lead Category Badge if available */}
                  {leadSummary.lead_category && (
                    <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {String(leadSummary.lead_category).toUpperCase().includes("HOT") ? (
                          <Flame className="size-4 text-red-400 animate-pulse" />
                        ) : String(leadSummary.lead_category).toUpperCase().includes("WARM") ? (
                          <Zap className="size-4 text-amber-400" />
                        ) : (
                          <Clock className="size-4 text-blue-400" />
                        )}
                        <span className="text-xs font-mono font-bold uppercase text-white">
                          {String(leadSummary.lead_category)}
                        </span>
                      </div>
                      {leadSummary.booking_status && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B88746]/20 text-[#E4C590] border border-[#B88746]/30">
                          {String(leadSummary.booking_status)}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                    <div>
                      <span className="text-white/40 block">
                        {isArabic ? "نوع العقار" : "Property Type"}
                      </span>
                      <span className="text-white font-medium">
                        {leadSummary.property_type || (isArabic ? "لم يُحدد" : "Unknown")}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block">
                        {isArabic ? "الموقع المفضل" : "Locations"}
                      </span>
                      <span className="text-white font-medium">
                        {Array.isArray(leadSummary.preferred_locations)
                          ? leadSummary.preferred_locations.join(isArabic ? "، " : ", ")
                          : leadSummary.preferred_locations || (isArabic ? "لم يُحدد" : "Unknown")}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block">
                        {isArabic ? "الميزانية" : "Budget"}
                      </span>
                      <span className="text-[#B88746] font-medium">
                        {leadSummary.budget || (isArabic ? "لم تُحدد" : "Unknown")}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block">
                        {isArabic ? "الإطار الزمني" : "Timeline"}
                      </span>
                      <span className="text-white font-medium">
                        {leadSummary.buying_timeline || (isArabic ? "لم يُحدد" : "Unknown")}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block">
                        {isArabic ? "الهدف من الشراء" : "Purchase Intent"}
                      </span>
                      <span className="text-white font-medium">
                        {leadSummary.purchase_intent || (isArabic ? "لم يُحدد" : "Unknown")}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block">
                        {isArabic ? "عدد الغرف" : "Bedrooms"}
                      </span>
                      <span className="text-white font-medium">
                        {leadSummary.bedrooms || (isArabic ? "لم يُحدد" : "Unknown")}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-white/40 font-mono">
                      Run ID: {lastRunId} • Verified
                    </span>
                    <button
                      onClick={() => handleCopySummary(leadSummary)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono text-white flex items-center gap-1.5 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="size-3.5 text-emerald-400" />
                          <span className="text-emerald-400">
                            {isArabic ? "تم النسخ" : "Copied"}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" />
                          <span>{isArabic ? "نسخ الملف" : "Copy Data"}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/40">
                <span>SIMULATED TRANSCRIPT</span>
                <span>{activeAgent.voiceStyle}</span>
              </div>
              <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2">
                {activeAgent.lines.map((line, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-bold font-mono ${
                          line.speaker === "Agent" ? "text-[#B88746]" : "text-white/60"
                        }`}
                      >
                        {line.speaker}
                      </span>
                      <span className="text-[10px] font-mono text-white/40">{line.time}</span>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed font-['Plus_Jakarta_Sans']">
                      {line.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveVoiceDemo;
