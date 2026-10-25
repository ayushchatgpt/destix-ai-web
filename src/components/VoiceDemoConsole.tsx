"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  PhoneOff,
  Volume2,
  Sparkles,
  Shield,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  Loader2,
  Building2,
  Stethoscope,
  Briefcase,
  Globe,
  Flame,
  Zap,
  MessageSquare,
  Calendar,
  UserCheck,
  AlertTriangle,
} from "lucide-react";
import { useDograhVoice } from "@/hooks/useDograhVoice";
import { LeadSummary, VoiceLanguage } from "@/types/dograh";

interface DialogueTurn {
  speaker: string;
  timestamp: string;
  text: string;
}

interface PersonaData {
  id: string;
  name: string;
  industry: string;
  role: string;
  latency: string;
  isLiveAgent: boolean;
  dialogue?: DialogueTurn[];
}

const PERSONAS: PersonaData[] = [
  {
    id: "dubai",
    name: "Dubai Property Specialist",
    industry: "Luxury Real Estate — UAE",
    role: "Autonomous Buyer Qualification & Tour Handoff",
    latency: "279ms",
    isLiveAgent: true,
  },
  {
    id: "clinic",
    name: "Medical Clinic Concierge",
    industry: "Healthcare & Aesthetics",
    role: "Inbound Patient Triage & Consult Handoff",
    latency: "340ms",
    isLiveAgent: false,
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Good afternoon. Thank you for calling Dr. Kapoor's Plastic Surgery & Aesthetics. How may I assist with your consultation today?",
      },
      {
        speaker: "Caller",
        timestamp: "00:05",
        text: "Hi, I wanted to inquire about recovery timelines for deep-plane facelift surgery and whether consultations are in-person.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:10",
        text: "Most patients plan for 10 to 14 days of social downtime before public appearances. Dr. Kapoor conducts all initial anatomical evaluations in our Mayfair clinic. Would Thursday at 4:30 PM suit your calendar?",
      },
      {
        speaker: "Caller",
        timestamp: "00:15",
        text: "Thursday at 4:30 PM works perfectly.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:19",
        text: "You are confirmed for 4:30 PM with Dr. Kapoor. I have dispatched the clinic location coordinates and preparation checklist straight to your phone. Have a wonderful day.",
      },
    ],
  },
  {
    id: "growth",
    name: "B2B Growth Qualifier",
    industry: "Enterprise Advisory & Tech",
    role: "Speed-to-Lead Outbound Interception",
    latency: "365ms",
    isLiveAgent: false,
    dialogue: [
      {
        speaker: "DestiX Agent",
        timestamp: "00:01",
        text: "Good morning Alex, this is DestiX from CloudScale AI. I noticed you just submitted an inquiry regarding enterprise ingestion pipelines. Do you have 30 seconds to confirm if this is for your AWS or Azure infrastructure?",
      },
      {
        speaker: "Caller",
        timestamp: "00:07",
        text: "Hello! Wow, that was an exceptionally fast callback. Yes, our engineering team is migrating 40TB of PostgreSQL databases on AWS this quarter.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:13",
        text: "That is precisely what our high-concurrency ingestion tier is architected for. Our principal cloud architect, Marcus, can walk you through our benchmark latency audit tomorrow at 10:00 AM EST. Does that align with your schedule?",
      },
      {
        speaker: "Caller",
        timestamp: "00:17",
        text: "Tomorrow at 10:00 AM EST works. Please send over the invitation.",
      },
      {
        speaker: "DestiX Agent",
        timestamp: "00:20",
        text: "The calendar invitation and architecture whitepaper have been dispatched to your inbox. Thank you Alex, speak tomorrow.",
      },
    ],
  },
];

const UI_STRINGS = {
  en: {
    badge: "(06) REAL-TIME VOICE TELEMETRY CONSOLE",
    headerTitle: "Audition the conversational parity",
    headerAccent: "in real-time.",
    headerDesc:
      "Click below to start a genuine two-way voice call with our Dubai Property Assistant. Speak into your microphone naturally, test buyer qualification questions, and review your structured lead dossier afterward.",
    langLabel: "Conversation Language:",
    langAuto: "Automatic",
    langEn: "English",
    langAr: "العربية",
    langHi: "हिन्दी",
    pipelineBadge: "Live Two-Way Audio Stream (Deepgram Nova-3 + Groq Qwen-27B + Aura-2 / Edge Fatima)",
    webrtcChannel: "WebRTC Audio Telemetry Channel",
    startVoiceBtn: "Start Voice Conversation",
    connectingBtn: "Connecting Audio...",
    endVoiceBtn: "End Conversation",
    hintListening: "LISTENING • SPEAK INTO YOUR MICROPHONE FREELY",
    hintConnecting: "GRANT MICROPHONE PERMISSION WHEN PROMPTED",
    hintIdle: "CLICK BUTTON TO INITIATE LIVE SPOKEN BUYER QUALIFICATION",
    dossierTitle: "Structured Buyer Qualification Dossier",
    dossierSubtitle: "Extracted in real-time from conversational speech context",
    sampleHandoffTag: "Sample Handoff — No Appointment Booked",
    extractingMsg: "Extracting structured conversation variables from Dograh runtime...",
    runIdLabel: "Run ID:",
    verifiedSchemaTag: "Verified against Dograh Extraction Schema",
    copyBtn: "Copy Lead Dossier",
    copiedBtn: "Dossier Copied!",
    disclaimerText:
      "This conversation is an interactive technical audition demonstrating real-time voice intelligence. No external calendar invitations, broker dispatches, or CRM records were created.",
    statusReady: "AGENT READY FOR LIVE CALL",
    statusConnecting: "ESTABLISHING WEBRTC...",
    statusConnected: "LIVE CALL ACTIVE",
    statusEnded: "CALL COMPLETED & QUALIFIED",
    resetSession: "Reset Session",
    fields: {
      property_type: "Property Type",
      preferred_locations: "Target Geography / Sector",
      budget: "Purchasing Budget & Currency",
      buying_timeline: "Target Acquisition Timeline",
      purchase_intent: "Primary Use Intent",
      bedrooms: "Bedrooms & Layout",
      financing_preference: "Financing Preference",
      preferred_next_step: "Preferred Next Action",
      other_requirements: "Bespoke Lifestyle Criteria",
    },
    leadPriorityTitle: "Lead Priority Assessment",
    leadRationaleTitle: "Qualification Rationale",
    leadHotTag: "HOT LEAD • HIGH CONVERSION READINESS",
    leadWarmTag: "WARM LEAD • ACTIVE EVALUATION",
    leadNurtureTag: "NURTURE LEAD • EARLY RESEARCH",
    whatsappShortlistTitle: "Shortlist Request — WhatsApp Follow-Up Pending",
    whatsappShortlistDesc: "Curated shortlist requested for 3-4 verified properties with floor plans. Queued for licensed advisor dispatch.",
    viewingTitle: "Appointment Request — Confirmation Pending",
    viewingDesc: "Private walkthrough or advisory consultation requested. A licensed DestiX advisor will confirm the schedule.",
    contactDetailsTitle: "Contact & Booking Details",
    missingCriteriaTitle: "Pending Criteria for Full Qualification",
    notSpecified: "Not specified",
    noneNoted: "None noted",
    footerPipeline: "PIPELINE: DEEPGRAM NOVA-3 STT → GROQ QWEN-27B → DEEPGRAM AURA TTS",
    footerRuntime: "DOGRAH HOSTED WEBRTC RUNTIME",
  },
  ar: {
    badge: "(06) لوحة القياس الصوتي في الوقت الفعلي",
    headerTitle: "استمع إلى المحادثة الصوتية الطبيعية",
    headerAccent: "باللهجة الإماراتية.",
    headerDesc:
      "اضغط أدناه لبدء محادثة صوتية تفاعلية حقيقية مع مستشار عقارات دبي الذكي بلهجة إماراتية خليجية طبيعية. تحدث عبر الميكروفون بحرية، اسأل عن فلل نخلة جميرا وشقق تلال دبي، واستعرض ملف التأهيل الفوري بعدها.",
    langLabel: "لغة المحادثة الصوتية:",
    langAuto: "تلقائي",
    langEn: "English",
    langAr: "العربية",
    langHi: "हिन्दी",
    pipelineBadge: "بث صوتي عصبي ثنائي الاتجاه (ديبغرام Nova-3 + جروك كوين + صوت فاطمة العصبي)",
    webrtcChannel: "قناة الاتصال الصوتي عبر بروتوكول WebRTC المباشر",
    startVoiceBtn: "بدء المحادثة الصوتية",
    connectingBtn: "جاري الاتصال الصوتي...",
    endVoiceBtn: "إنهاء المحادثة",
    hintListening: "المستشار يستمع إليك الآن • تحدث بحرية عبر الميكروفون",
    hintConnecting: "يرجى منح إذن استخدام الميكروفون في المتصفح",
    hintIdle: "اضغط على الزر لبدء محادثة تأهيل المشتري الصوتية الحقيقية",
    dossierTitle: "ملف تأهيل المشتري والمستثمر العقاري",
    dossierSubtitle: "تم استخراج البيانات آلياً من سياق المحادثة الصوتية الفعلية",
    sampleHandoffTag: "نموذج تسليم تجريبي — لم يتم حجز موعد فعلي",
    extractingMsg: "جاري استخراج متغيرات المحادثة من خادم Dograh...",
    runIdLabel: "رقم الجلسة:",
    verifiedSchemaTag: "مُحقق وفق نموذج استخراج البيانات في منصة Dograh",
    copyBtn: "نسخ ملف التأهيل العقاري",
    copiedBtn: "تم النسخ للحافظة بنجاح!",
    disclaimerText:
      "هذه المحادثة هي تجربة تقنية تفاعلية لإثبات قدرات الذكاء الاصطناعي الصوتي في قطاع العقارات. لم يتم جدولة موعد خارجي أو تسجيل بياناتك في نظام خارجي.",
    statusReady: "المستشار جاهز للمحادثة الصوتية",
    statusConnecting: "جاري إنشاء الاتصال المباشر...",
    statusConnected: "مكالمة صوتية نشطة ومباشرة",
    statusEnded: "تم إنهاء المكالمة وتأهيل المتطلبات بنجاح",
    resetSession: "إعادة ضبط الجلسة",
    fields: {
      property_type: "نوع العقار المطلوب",
      preferred_locations: "المنطقة / الموقع المفضل في دبي",
      budget: "الميزانية المخصصة للشراء والعملة",
      buying_timeline: "الإطار الزمني المستهدف للشراء",
      purchase_intent: "الهدف من الشراء (سكن / استثمار)",
      bedrooms: "عدد غرف النوم والمساحة",
      financing_preference: "طريقة السداد والتمويل",
      preferred_next_step: "الخطوة التالية المفضلة",
      other_requirements: "المتطلبات والمواصفات الخاصة",
    },
    leadPriorityTitle: "تقييم أولوية المشتري والتأهيل",
    leadRationaleTitle: "مبرر تصنيف العميل",
    leadHotTag: "أولوية قصوى (HOT) • جاهزية شراء مؤكدة",
    leadWarmTag: "عميل نشط (WARM) • تقييم واختيار العقارات",
    leadNurtureTag: "عميل متابعة (NURTURE) • استكشاف وبحث أولي",
    whatsappShortlistTitle: "طلب قائمة عقارات مختارة — متابعة واتساب قيد الإعداد",
    whatsappShortlistDesc: "طلب العميل قائمة 3-4 عقارات مع المخططات عبر الواتساب. تم تحويل الطلب لمراجعة المستشار المرخص.",
    viewingTitle: "طلب حجز موعد معاينة — بانتظار التأكيد",
    viewingDesc: "تم تسجيل موعد المعاينة أو الاستشارة المقترحة. سيتواصل المستشار العقاري لتأكيد الموعد النهائي.",
    contactDetailsTitle: "بيانات التواصل والموعد",
    missingCriteriaTitle: "البيانات المتبقية لاكتمال التأهيل",
    notSpecified: "لم يُحدد بعد",
    noneNoted: "لا توجد متطلبات إضافية",
    footerPipeline: "البنية: ديبغرام NOVA-3 (عربي) ← جروك QWEN-27B ← صوت إماراتي عصبي",
    footerRuntime: "خادم DOGRAH المستضاف محلياً عبر WEBRTC",
  },
};

export function VoiceDemoConsole() {
  const [selectedPersona, setSelectedPersona] = useState<PersonaData>(PERSONAS[0]);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Hook into Dograh Live Voice Engine with bilingual capability
  const {
    status,
    isReady,
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
  } = useDograhVoice("auto");

  const isLive = selectedPersona.isLiveAgent;
  const isConnected = status === "connected";
  const isConnecting = status === "connecting";
  const isArabic =
    language === "ar" ||
    (language === "auto" &&
      typeof navigator !== "undefined" &&
      navigator.language?.toLowerCase().startsWith("ar"));
  const t = isArabic ? UI_STRINGS.ar : UI_STRINGS.en;

  // Audio spectrum visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      phase += isConnected ? 0.12 : 0.02;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barCount = 38;
      const barWidth = 3;
      const gap = (canvas.width - barCount * barWidth) / (barCount - 1);

      for (let i = 0; i < barCount; i++) {
        let height = 4;
        if (isConnected) {
          const sinVal = Math.sin(phase + i * 0.35);
          const cosVal = Math.cos(phase * 1.5 + i * 0.2);
          height = Math.max(4, Math.abs(sinVal * cosVal) * 44 + 6);
        } else if (isConnecting) {
          height = Math.max(4, (Math.sin(phase * 3 + i * 0.2) + 1) * 12 + 4);
        }

        const x = i * (barWidth + gap);
        const y = (canvas.height - height) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, "#B88746");
        gradient.addColorStop(1, "#D4A373");

        ctx.fillStyle = isConnected || isConnecting ? gradient : "rgba(246, 239, 226, 0.2)";
        ctx.fillRect(x, y, barWidth, height);
      }
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isConnected, isConnecting]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const generateHandoffText = (summary: LeadSummary, lang: VoiceLanguage) => {
    if (lang === "ar") {
      return [
        "ديستكس للذكاء الاصطناعي — ملف تأهيل المشتري والمستثمر (عقارات دبي)",
        "=======================================================",
        `تصنيف المشتري:         ${summary.lead_category || "قيد التقييم"}`,
        `مبرر التصنيف:          ${summary.lead_category_rationale || "غير متوفر"}`,
        `نوع العقار:           ${summary.property_type || "لم يُحدد"}`,
        `الموقع المفضل:       ${Array.isArray(summary.preferred_locations) ? summary.preferred_locations.join("، ") : (summary.preferred_locations || "لم يُحدد")}`,
        `الميزانية والعملة:    ${summary.budget || "لم تُحدد"}`,
        `الإطار الزمني للشراء:  ${summary.buying_timeline || "لم يُحدد"}`,
        `الهدف من الشراء:      ${summary.purchase_intent || "لم يُحدد"}`,
        `عدد الغرف / المساحة:  ${summary.bedrooms || "لم يُحدد"}`,
        `طريقة الدفع / التمويل: ${summary.financing_preference || "لم تُحدد"}`,
        `الخطوة التالية المفضلة: ${summary.preferred_next_step || "لم تُحدد"}`,
        `حالة المتابعة / الحجز: ${summary.booking_status || "طلب استشارة"}`,
        `اسم المشتري:          ${summary.contact_name || "لم يُذكر"}`,
        `رقم التواصل / واتساب: ${summary.contact_phone || "لم يُذكر"}`,
        `تفاصيل الموعد المطلوب: ${summary.requested_appointment_details || "لا يوجد"}`,
        `متطلبات خاصة:        ${summary.other_requirements || "لا يوجد"}`,
        `البيانات المعلقة:      ${summary.missing_fields || "مكتمل التأهيل"}`,
        "=======================================================",
        "الحالة: نموذج تسليم استشاري — بانتظار مراجعة وتأكيد المستشار العقاري",
      ].join("\n");
    }
    return [
      "DESTIX AI — DUBAI BUYER QUALIFICATION & CONSULTING DOSSIER",
      "===========================================================",
      `Lead Category:        ${summary.lead_category || "Under Evaluation"}`,
      `Category Rationale:   ${summary.lead_category_rationale || "N/A"}`,
      `Property Type:        ${summary.property_type || "Not specified"}`,
      `Preferred Location:   ${Array.isArray(summary.preferred_locations) ? summary.preferred_locations.join(", ") : (summary.preferred_locations || "Not specified")}`,
      `Budget & Currency:    ${summary.budget || "Not specified"}`,
      `Buying Timeline:      ${summary.buying_timeline || "Not specified"}`,
      `Purchase Intent:      ${summary.purchase_intent || "Not specified"}`,
      `Bedrooms / Size:      ${summary.bedrooms || "Not specified"}`,
      `Financing Preference: ${summary.financing_preference || "Not specified"}`,
      `Next Step Preferred:  ${summary.preferred_next_step || "Not specified"}`,
      `Handoff / Booking:    ${summary.booking_status || "Consultation Request"}`,
      `Contact Name:         ${summary.contact_name || "Not provided"}`,
      `Contact Phone:        ${summary.contact_phone || "Not provided"}`,
      `Appointment Details:  ${summary.requested_appointment_details || "None"}`,
      `Other Requirements:   ${summary.other_requirements || "None noted"}`,
      `Pending Details:      ${summary.missing_fields || "None - fully qualified"}`,
      "===========================================================",
      "STATUS: Qualification Complete — Pending Licensed Advisor Review",
    ].join("\n");
  };

  const handleCopySummary = (summary: LeadSummary) => {
    const text = generateHandoffText(summary, language);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="voice-console" className="py-24 sm:py-32 bg-[#131210] text-[#F6EFE2] relative border-b border-[#25221F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1C19] border border-[#332E29] text-[11px] font-mono tracking-[0.2em] text-[#B88746] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
            {t.badge}
          </div>
          <h2 className="font-['Instrument_Serif'] text-4xl sm:text-6xl md:text-7xl text-[#F6EFE2] leading-[1.0] mb-6">
            {t.headerTitle}{" "}
            <span className="italic text-[#B88746]">{t.headerAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C5BDB1] leading-relaxed font-normal">
            {t.headerDesc}
          </p>
        </div>

        {/* 3 Industry Preset Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {PERSONAS.map((persona) => {
            const isSelected = selectedPersona.id === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => {
                  if (isConnected) endCall();
                  setSelectedPersona(persona);
                }}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 relative ${
                  isSelected
                    ? "bg-[#201D1A] border-[#B88746] shadow-lg"
                    : "bg-[#181614] border-[#2D2824] hover:border-[#3D3732] text-[#888277]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    {persona.id === "dubai" ? (
                      <Building2 className="w-4 h-4 text-[#B88746]" />
                    ) : persona.id === "clinic" ? (
                      <Stethoscope className="w-4 h-4 text-[#888277]" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-[#888277]" />
                    )}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#888277]">
                      {persona.industry}
                    </span>
                  </div>
                  {persona.isLiveAgent && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Voice
                    </span>
                  )}
                </div>
                <div className="font-semibold text-base text-[#F6EFE2] mb-1">
                  {persona.name}
                </div>
                <div className="text-xs text-[#888277] line-clamp-1">{persona.role}</div>
              </button>
            );
          })}
        </div>

        {/* Active Console Card */}
        <div
          dir={isArabic && isLive ? "rtl" : "ltr"}
          className="bg-[#181614] border border-[#2D2824] rounded-3xl p-6 sm:p-10 relative overflow-hidden transition-all duration-300"
        >
          {/* Top Telemetry Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#2D2824] gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  isConnected
                    ? "bg-emerald-400 animate-pulse"
                    : isConnecting
                    ? "bg-amber-400 animate-ping"
                    : "bg-[#888277]"
                }`}
              />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F6EFE2] font-semibold">
                {isConnected
                  ? `${t.statusConnected} (${formatDuration(callDuration)})`
                  : isConnecting
                  ? t.statusConnecting
                  : status === "ended"
                  ? t.statusEnded
                  : t.statusReady}
              </span>
            </div>

            {/* Language Switcher for Live Dubai Agent */}
            {isLive ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#888277] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>{t.langLabel}</span>
                </span>
                <div className="inline-flex rounded-full bg-[#131210] p-1 border border-[#2D2824]">
                  <button
                    onClick={() => setLanguage("auto")}
                    disabled={isConnected || isConnecting}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      language === "auto"
                        ? "bg-[#B88746] text-[#131210] font-bold shadow-xs"
                        : "text-[#888277] hover:text-[#F6EFE2]"
                    } disabled:opacity-50`}
                  >
                    {t.langAuto}
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    disabled={isConnected || isConnecting}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      language === "en"
                        ? "bg-[#B88746] text-[#131210] font-bold shadow-xs"
                        : "text-[#888277] hover:text-[#F6EFE2]"
                    } disabled:opacity-50`}
                  >
                    {t.langEn}
                  </button>
                  <button
                    onClick={() => setLanguage("ar")}
                    disabled={isConnected || isConnecting}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      language === "ar"
                        ? "bg-[#B88746] text-[#131210] font-bold shadow-xs"
                        : "text-[#888277] hover:text-[#F6EFE2]"
                    } disabled:opacity-50`}
                  >
                    {t.langAr}
                  </button>
                  <button
                    onClick={() => setLanguage("hi")}
                    disabled={isConnected || isConnecting}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      language === "hi"
                        ? "bg-[#B88746] text-[#131210] font-bold shadow-xs"
                        : "text-[#888277] hover:text-[#F6EFE2]"
                    } disabled:opacity-50`}
                  >
                    {t.langHi}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-xs font-mono text-[#888277]">
                <span>PRESET INTERACTIVE TRANSCRIPT</span>
              </div>
            )}
          </div>

          {/* Error Banner */}
          {error && isLive && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs font-mono flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
              <button
                onClick={retry}
                className="px-3 py-1 rounded bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-white transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Central Workspace: Live Controls or Static Script */}
          {isLive ? (
            <div className="space-y-8">
              {/* Audio Visualizer & Call Trigger */}
              <div className="bg-[#131210] border border-[#2D2824] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                <div className="text-[10px] font-mono tracking-widest text-[#888277] uppercase mb-4">
                  {isConnected ? t.pipelineBadge : t.webrtcChannel}
                </div>

                {/* Spectrum Canvas */}
                <canvas
                  ref={canvasRef}
                  width={340}
                  height={64}
                  className="w-full max-w-[320px] h-16 mb-6"
                />

                {/* Primary Call Controls */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {!isConnected ? (
                    <button
                      onClick={startCall}
                      disabled={isConnecting}
                      className="px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#D4A373] disabled:opacity-50 text-[#131210] font-bold text-sm flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105"
                    >
                      {isConnecting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>{t.connectingBtn}</span>
                        </>
                      ) : (
                        <>
                          <Mic className="w-5 h-5" />
                          <span>{t.startVoiceBtn}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={endCall}
                      className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105"
                    >
                      <PhoneOff className="w-5 h-5" />
                      <span>
                        {t.endVoiceBtn} ({formatDuration(callDuration)})
                      </span>
                    </button>
                  )}

                  {status === "ended" && (
                    <button
                      onClick={clearSummary}
                      className="p-3 rounded-full bg-[#1E1C19] hover:bg-[#2A2622] border border-[#3A332E] text-[#888277] hover:text-[#F6EFE2] transition-colors"
                      title={t.resetSession}
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="text-xs text-[#888277] mt-4 font-mono">
                  {isConnected ? t.hintListening : isConnecting ? t.hintConnecting : t.hintIdle}
                </div>
              </div>

              {/* Lead Qualification Summary Panel */}
              {(leadSummary || isLoadingSummary) && (
                <div className="rounded-2xl bg-[#141311] border border-[#B88746]/40 p-6 sm:p-8 space-y-6">
                  {/* Panel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2D2824] gap-3">
                    <div className="flex items-center gap-2 text-[#B88746]">
                      <Sparkles className="w-5 h-5" />
                      <div>
                        <h4 className="font-['Instrument_Serif'] text-2xl text-[#F6EFE2]">
                          {t.dossierTitle}
                        </h4>
                        <p className="text-xs text-[#888277] font-mono mt-0.5">
                          {t.dossierSubtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase tracking-widest">
                      {t.sampleHandoffTag}
                    </span>
                  </div>

                  {isLoadingSummary ? (
                    <div className="py-8 flex flex-col items-center justify-center text-center gap-3 text-xs font-mono text-[#888277]">
                      <Loader2 className="w-6 h-6 animate-spin text-[#B88746]" />
                      <span>{t.extractingMsg}</span>
                    </div>
                  ) : leadSummary ? (
                    <>
                      {/* Lead Priority Score Card */}
                      {leadSummary.lead_category && (
                        <div
                          className={`p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                            String(leadSummary.lead_category).toUpperCase().includes("HOT")
                              ? "bg-red-500/10 border-red-500/40 text-red-200"
                              : String(leadSummary.lead_category).toUpperCase().includes("WARM")
                              ? "bg-amber-500/10 border-amber-500/40 text-amber-200"
                              : "bg-blue-500/10 border-blue-500/40 text-blue-200"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2.5 rounded-lg ${
                                String(leadSummary.lead_category).toUpperCase().includes("HOT")
                                  ? "bg-red-500/20 text-red-400"
                                  : String(leadSummary.lead_category).toUpperCase().includes("WARM")
                                  ? "bg-amber-500/20 text-amber-400"
                                  : "bg-blue-500/20 text-blue-400"
                              }`}
                            >
                              {String(leadSummary.lead_category).toUpperCase().includes("HOT") ? (
                                <Flame className="w-5 h-5 animate-pulse" />
                              ) : String(leadSummary.lead_category).toUpperCase().includes("WARM") ? (
                                <Zap className="w-5 h-5" />
                              ) : (
                                <Clock className="w-5 h-5" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                                  {String(leadSummary.lead_category).toUpperCase().includes("HOT")
                                    ? t.leadHotTag
                                    : String(leadSummary.lead_category).toUpperCase().includes("WARM")
                                    ? t.leadWarmTag
                                    : t.leadNurtureTag}
                                </span>
                              </div>
                              {leadSummary.lead_category_rationale && (
                                <p className="text-xs text-[#C5BDB1] font-mono mt-1 leading-relaxed">
                                  {leadSummary.lead_category_rationale}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Handoff: WhatsApp Shortlist or Viewing */}
                      {(leadSummary.whatsapp_shortlist_requested === "true" ||
                        leadSummary.whatsapp_shortlist_requested === true ||
                        leadSummary.requested_appointment_details ||
                        leadSummary.booking_status) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {(leadSummary.whatsapp_shortlist_requested === "true" ||
                            leadSummary.whatsapp_shortlist_requested === true ||
                            (leadSummary.booking_status &&
                              String(leadSummary.booking_status).includes("WhatsApp"))) && (
                            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                              <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-semibold text-xs font-mono">
                                <MessageSquare className="w-4 h-4" />
                                <span>{t.whatsappShortlistTitle}</span>
                              </div>
                              <p className="text-[11px] text-[#A3B899] font-mono leading-relaxed mb-2">
                                {t.whatsappShortlistDesc}
                              </p>
                              {(leadSummary.contact_name || leadSummary.contact_phone) && (
                                <div className="text-xs font-mono text-emerald-300 bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/20">
                                  <span className="text-[#888277]">Target: </span>
                                  <span className="font-bold text-white">
                                    {leadSummary.contact_name || "Buyer"}
                                  </span>{" "}
                                  • {leadSummary.contact_phone || "Phone pending"}
                                </div>
                              )}
                            </div>
                          )}

                          {((leadSummary.requested_appointment_details &&
                            leadSummary.requested_appointment_details !== "None") ||
                            (leadSummary.booking_status &&
                              String(leadSummary.booking_status).includes("Appointment"))) && (
                            <div className="p-4 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 text-[#F6EFE2]">
                              <div className="flex items-center gap-2 mb-1.5 text-[#B88746] font-semibold text-xs font-mono">
                                <Calendar className="w-4 h-4" />
                                <span>{t.viewingTitle}</span>
                              </div>
                              <p className="text-[11px] text-[#C5BDB1] font-mono leading-relaxed mb-2">
                                {t.viewingDesc}
                              </p>
                              <div className="text-xs font-mono text-[#E4C590] bg-[#1E1C19] p-2 rounded-lg border border-[#B88746]/20">
                                <span className="text-[#888277]">Schedule: </span>
                                <span className="font-semibold text-white">
                                  {leadSummary.requested_appointment_details ||
                                    "Consultant Callback (Dubai GST)"}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Missing Criteria Warning if any */}
                      {leadSummary.missing_fields &&
                        leadSummary.missing_fields !== "None" &&
                        leadSummary.missing_fields !== "None - fully qualified" &&
                        leadSummary.missing_fields !== "مكتمل التأهيل" && (
                          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-xs font-mono text-amber-300">
                            <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-400" />
                            <span>
                              <strong className="text-amber-200">{t.missingCriteriaTitle}: </strong>
                              {leadSummary.missing_fields}
                            </span>
                          </div>
                        )}

                      {/* 9 Extraction Variables Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.property_type}
                          </span>
                          <span className="text-sm font-semibold text-[#F6EFE2]">
                            {leadSummary.property_type || t.notSpecified}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.preferred_locations}
                          </span>
                          <span className="text-sm font-semibold text-[#F6EFE2]">
                            {Array.isArray(leadSummary.preferred_locations)
                              ? leadSummary.preferred_locations.join(isArabic ? "، " : ", ")
                              : leadSummary.preferred_locations || t.notSpecified}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.budget}
                          </span>
                          <span className="text-sm font-semibold text-[#B88746]">
                            {leadSummary.budget || t.notSpecified}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.buying_timeline}
                          </span>
                          <span className="text-sm font-semibold text-[#F6EFE2]">
                            {leadSummary.buying_timeline || t.notSpecified}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.purchase_intent}
                          </span>
                          <span className="text-sm font-semibold text-[#F6EFE2]">
                            {leadSummary.purchase_intent || t.notSpecified}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.bedrooms}
                          </span>
                          <span className="text-sm font-semibold text-[#F6EFE2]">
                            {leadSummary.bedrooms || t.notSpecified}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.financing_preference}
                          </span>
                          <span className="text-sm font-semibold text-[#F6EFE2]">
                            {leadSummary.financing_preference || t.notSpecified}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.preferred_next_step}
                          </span>
                          <span className="text-sm font-semibold text-[#F6EFE2]">
                            {leadSummary.preferred_next_step || t.notSpecified}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1D1B18] border border-[#2D2824]">
                          <span className="text-[10px] font-mono text-[#888277] uppercase block mb-1">
                            {t.fields.other_requirements}
                          </span>
                          <span className="text-sm font-semibold text-[#F6EFE2] truncate block">
                            {leadSummary.other_requirements || t.noneNoted}
                          </span>
                        </div>
                      </div>

                      {/* Action Handoff Bar */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                        <span className="text-xs text-[#888277] font-mono">
                          {t.runIdLabel} {lastRunId} • {t.verifiedSchemaTag}
                        </span>
                        <button
                          onClick={() => handleCopySummary(leadSummary)}
                          className="px-5 py-2.5 rounded-full bg-[#1E1C19] hover:bg-[#2A2622] border border-[#3A332E] text-xs font-mono text-[#F6EFE2] flex items-center gap-2 transition-colors"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">{t.copiedBtn}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>{t.copyBtn}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Disclaimer banner */}
                      <div className="p-3 rounded-xl bg-[#12110F] border border-[#262320] text-[11px] font-mono text-[#888277] leading-relaxed">
                        <span className="text-amber-400 font-bold block mb-0.5">
                          {t.sampleHandoffTag}
                        </span>
                        {t.disclaimerText}
                      </div>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          ) : (
            /* Reference Preset Script for Clinic & B2B */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-5 bg-[#131210] border border-[#2D2824] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <div className="text-[10px] font-mono tracking-widest text-[#888277] uppercase mb-4">
                  Reference Conversational Flow
                </div>

                <canvas
                  ref={canvasRef}
                  width={300}
                  height={64}
                  className="w-full max-w-[260px] h-16 mb-6"
                />

                <div className="text-xs text-[#888277] font-mono">
                  STEP-BY-STEP DIALOGUE FLOW
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#888277] pb-2 border-b border-[#2D2824]">
                  <span>CONVERSATIONAL TRANSCRIPT</span>
                  <span>PRESET SCRIPT</span>
                </div>

                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {selectedPersona.dialogue?.map((turn, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border bg-[#131210]/60 border-[#2D2824]"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-xs font-bold font-mono ${
                            turn.speaker === "DestiX Agent" ? "text-[#B88746]" : "text-[#D4A373]"
                          }`}
                        >
                          {turn.speaker}
                        </span>
                        <span className="text-[10px] font-mono text-[#888277]">
                          {turn.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-[#A89F93] leading-relaxed">
                        {turn.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Outcome Footer */}
          <div className="mt-8 bg-[#131210] rounded-xl p-4 border border-[#2D2824] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#B88746]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{isLive ? t.footerPipeline : "SIMULATED REFERENCE PRESET"}</span>
            </div>
            <div className="text-[#888277]">
              {isLive ? t.footerRuntime : "PRESET SCRIPT"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VoiceDemoConsole;
