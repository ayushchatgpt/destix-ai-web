import { NextResponse } from "next/server";

// In-memory rate limiting map (IP / Phone -> timestamp array)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(identifier) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(identifier, validTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, vertical, accent, countryCode, attribution } = body;

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "A valid phone number is required to trigger a live call demo." },
        { status: 400 }
      );
    }

    const cleanPhone = phone.trim().replace(/[^\d+]/g, "");
    const clientIp = request.headers.get("x-forwarded-for") || "127.0.0.1";

    // Rate Limiting Check
    if (isRateLimited(clientIp) || isRateLimited(cleanPhone)) {
      return NextResponse.json(
        {
          error:
            "Rate limit reached for this session (3 demos per hour). You can test the unedited audio player below or book a diagnostic directly.",
          rateLimited: true,
          fallbackAudioUrl: "/audio/destix-live-demo-435ms.mp3",
        },
        { status: 429 }
      );
    }

    const timestamp = new Date().toISOString();
    const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const demoPayload = {
      event: "LIVE_DEMO_CALL_TRIGGERED",
      timestamp,
      istTime,
      phone: cleanPhone,
      countryCode: countryCode || "+91",
      vertical: vertical || "Luxury Real Estate",
      accent: accent || "Indian English & Hinglish",
      attribution: attribution || {},
      status: "DISPATCHED_TO_ORCHESTRATION",
    };

    console.log("=================================================");
    console.log("⚡ [LIVE 435ms DEMO CALL TRIGGERED]");
    console.log(`📞 Phone:    ${demoPayload.phone}`);
    console.log(`🏢 Vertical: ${demoPayload.vertical}`);
    console.log(`🗣️ Accent:   ${demoPayload.accent}`);
    console.log(`🕒 IST Time: ${demoPayload.istTime}`);
    console.log(`📍 Channel:  ${demoPayload.attribution?.channel_source || "direct"}`);
    console.log("=================================================");

    // Web3Forms or n8n Webhook Dispatch
    const web3AccessKey = process.env.WEB3FORMS_ACCESS_KEY || "309b2462-e5a9-417a-b2e0-6f7402aab022";
    if (web3AccessKey) {
      const emailContent = `
⚡ LIVE DEMO CALL TRIGGERED ON AYUSH.COMPANY
--------------------------------------------------
• Destination Phone: ${demoPayload.phone}
• Vertical Profile: ${demoPayload.vertical}
• Selected Accent: ${demoPayload.accent}
• Attribution Channel: ${demoPayload.attribution?.channel_source || "direct"}
• AI Referrer: ${demoPayload.attribution?.ai_referrer || "none"}
• Landing Page: ${demoPayload.attribution?.landing_page || "/"}
• UTM Campaign: ${demoPayload.attribution?.utm_campaign || "none"}
• IST Timestamp: ${demoPayload.istTime}
--------------------------------------------------
Triggering automated n8n speed-to-lead sequence.
`;

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3AccessKey,
          subject: `⚡ Live Demo Call Request: ${demoPayload.phone} (${demoPayload.vertical})`,
          from_name: "DestiX AI Telephony Trigger",
          message: emailContent,
        }),
      }).catch((err) => console.error("Web3Forms demo trigger notification error:", err));
    }

    // Return instant success status with simulated carrier response & fallback audio stream
    return NextResponse.json({
      success: true,
      message: `Initiating carrier SIP interconnect to ${cleanPhone}. Your phone should ring within 30 to 45 seconds.`,
      circuit: {
        latency: "435ms P50",
        vad: "Silero v4 (120ms)",
        asr: "Deepgram Nova-3 (110ms)",
        llm: "Groq LPU (95ms TTFT)",
        tts: "Cartesia Sonic (90ms)",
        carrier: "Tier-1 Domestic Direct SIP",
      },
      fallbackAudio: {
        available: true,
        previewText: "Listen to the unedited 435ms live audio recording while your phone connects:",
        streamUrl: "/audio/destix-live-demo-435ms.mp3",
      },
    });
  } catch (error) {
    console.error("Error triggering demo call:", error);
    return NextResponse.json(
      { error: "Internal telephony gateway error. Please try again or test the audio preview." },
      { status: 500 }
    );
  }
}
