import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { leadData, telemetry, transcript } = body;

    const timestamp = new Date().toISOString();
    const report = {
      event: "CONCIERGE_LEAD_DISPATCH",
      timestamp,
      lead: {
        name: leadData?.name || "Anonymous Executive",
        contact: leadData?.contact || "Not provided",
        vertical: leadData?.vertical || "General High-Ticket",
        callVolume: leadData?.callVolume || "Unspecified",
        notes: leadData?.notes || "",
      },
      activityTrail: {
        currentSection: telemetry?.currentSection || "Homepage",
        visitedSections: telemetry?.visitedSections || [],
        dwellTimeSeconds: telemetry?.dwellTimeSeconds || 0,
        scrollDepthPercent: telemetry?.scrollDepthPercent || 0,
        referrer: telemetry?.referrer || "Direct",
        userAgent: telemetry?.userAgent || "Unknown Device",
      },
      transcriptSummary: transcript?.map((t: { sender: string; text: string; timestamp: string }) => `[${t.timestamp}] ${t.sender.toUpperCase()}: ${t.text}`).join("\n") || "No dialogue recorded.",
    };

    // 1. Log to server audit log
    console.log("=================================================");
    console.log("🚨 [DESTIX CONCIERGE TELEMETRY REPORT]");
    console.log(JSON.stringify(report, null, 2));
    console.log("=================================================");

    // 2. Dispatch to external webhook if configured (n8n, Make, Slack, or Discord)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.N8N_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(report),
        });
      } catch (webhookErr) {
        console.error("Failed to forward lead to external webhook:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead telemetry recorded and dispatched to studio principal.",
      receivedAt: timestamp,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in /api/concierge-lead:", message);
    return NextResponse.json(
      { error: "Failed to process concierge telemetry lead" },
      { status: 500 }
    );
  }
}
