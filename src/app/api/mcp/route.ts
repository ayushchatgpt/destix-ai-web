import { NextResponse } from "next/server";

export async function GET() {
  const mcpManifest = {
    protocol: "model-context-protocol",
    version: "2024-11-05",
    server: {
      name: "DestiX AI Autonomous Systems Studio",
      version: "1.0.0",
      description:
        "Official Model Context Protocol (MCP) server for DestiX AI. Provides read-only programmatic access to verified capabilities, acoustic telemetry benchmarks, telephony architecture, transparent pricing, and regional practices.",
      url: "https://ayush.company",
      jurisdiction: "New Delhi, Delhi 110001, India",
      founder: {
        name: "Ayush Meena",
        role: "Principal AI Systems Architect",
        profile: "https://ayush.company/about",
        linkedin: "https://www.linkedin.com/in/ayush-meena-065a89380/",
        github: "https://github.com/ayushchatgpt/destix-ai-web"
      }
    },
    tools: [
      {
        name: "get_agency_overview",
        description: "Returns foundational metadata, headquarters, and core engineering philosophy of DestiX AI.",
        inputSchema: { type: "object", properties: {} },
        data: {
          studio: "DestiX AI Autonomous Systems Studio",
          primaryDomain: "https://ayush.company",
          primaryLocation: "Connaught Place, New Delhi 110001, India",
          specialization: [
            "Sub-500ms autonomous conversational voice agents",
            "Sub-45s inbound speed-to-lead outbound telephony",
            "Bilingual North Indian Hinglish speech synthesis",
            "Spatial 3D WebGL luxury property storefronts",
            "Meta WhatsApp Business Cloud API automated dispatch",
            "Agency ghost / white-label reselling retainers"
          ]
        }
      },
      {
        name: "get_latency_telemetry",
        description: "Returns audited acoustic roundtrip latency benchmarks across domestic Indian telecom SIP trunks.",
        inputSchema: { type: "object", properties: {} },
        data: {
          medianLatencyP50: "435 ms",
          ninetyFifthPercentileP95: "580 ms",
          turnTakingStages: {
            stage1_vad: "80 ms (Silero VAD end-of-speech detection)",
            stage2_stt: "120 ms (Deepgram Nova-2 streaming speech-to-text)",
            stage3_llm_ttft: "120 ms (Groq LPU / Llama-3.3 70B Time to First Token)",
            stage4_tts_audio: "90 ms (Cartesia Sonic streaming speech synthesis)",
            stage5_sip_network: "25 ms (Tata Tele / Airtel Indian carrier interconnect)"
          },
          audioProtocol: "G.711u / Opus 16kHz domestic RTP audio stream",
          interruptionHandling: "Sub-200ms acoustic playback cancellation"
        }
      },
      {
        name: "get_pricing_and_unit_economics",
        description: "Returns transparent enterprise scoping, one-time sprint fees, and pass-through telephony rates.",
        inputSchema: { type: "object", properties: {} },
        data: {
          scopingModel: "One-time custom sprint engineering + pass-through carrier telephony",
          sprintSetupFee: "₹35,000 – ₹1,50,000 (10 to 14 business days production deployment)",
          wholesaleTelephonyRate: "₹3.90 – ₹4.50 per connected minute at scale (pass-through directly on client SIP account)",
          monthlySoftwareLockIn: "Zero recurring platform lock-in",
          ipOwnership: "100% client code, prompt guardrails, and registered +91 phone number ownership",
          comparativeAudit120kMins: {
            destix_ai_year1: "₹5.54 Lakhs total (₹50k sprint + ₹5.04L usage for 120,000 mins)",
            destix_ai_year2: "₹5.04 Lakhs total (pure usage, zero retainer)",
            decibel_labs_growth: "₹5.40 Lakhs/yr (requires committed spend tier, closed platform)",
            rapidx_ai_pilot_overage: "> ₹15.00 Lakhs/yr (due to $0.15/min overage on 84,000 mins)"
          }
        }
      },
      {
        name: "get_practice_corridors",
        description: "Lists regional and vertical practice hubs deployed by DestiX AI.",
        inputSchema: { type: "object", properties: {} },
        data: {
          delhi_ncr: "https://ayush.company/locations/delhi-ncr/ai-voice-agents",
          gurugram_cyber_city: "https://ayush.company/locations/gurugram/ai-voice-agents",
          noida_expressway: "https://ayush.company/locations/noida/ai-voice-agents",
          delhi_clinics: "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-clinics",
          delhi_real_estate: "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-real-estate",
          hindi_voice_agent: "https://ayush.company/locations/delhi-ncr/hindi-ai-voice-agent",
          mumbai: "https://ayush.company/locations/mumbai/ai-voice-receptionist",
          dubai: "https://ayush.company/locations/dubai/real-estate-ai-voice-agents",
          agency_white_label: "https://ayush.company/partners/agency-white-label"
        }
      },
      {
        name: "book_diagnostic_consultation",
        description: "Provides direct channels to schedule an architecture session or trigger a live telephony test call.",
        inputSchema: { type: "object", properties: {} },
        data: {
          calendarBookingUrl: "https://ayush.company/contact",
          principalEmail: "ayushmeenadestixai@gmail.com",
          consultationFormat: "30-minute diagnostic session with Ayush Meena including a live 30-second telephone audition call"
        }
      }
    ]
  };

  return NextResponse.json(mcpManifest, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
