import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const runIdParam = searchParams.get("runId");

    if (!runIdParam) {
      return NextResponse.json(
        { error: "runId parameter is required" },
        { status: 400 }
      );
    }

    const runId = parseInt(runIdParam, 10);
    if (isNaN(runId) || runId <= 0) {
      return NextResponse.json(
        { error: "Invalid runId format" },
        { status: 400 }
      );
    }

    const apiKey = process.env.DOGRAH_SERVER_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_DOGRAH_API_URL || "http://localhost:8000";

    if (!apiKey) {
      console.warn("DOGRAH_SERVER_API_KEY not configured on server.");
      return NextResponse.json(
        { error: "Server authentication key not configured" },
        { status: 500 }
      );
    }

    const workflowIdParam = searchParams.get("workflowId");

    // Call Dograh API securely from server-side Node.js
    let response;
    if (workflowIdParam) {
      response = await fetch(`${apiUrl}/api/v1/workflow/${workflowIdParam}/runs/${runId}`, {
        headers: {
          "X-API-Key": apiKey,
          Accept: "application/json",
        },
        cache: "no-store",
      });
    } else {
      // Try workflow 1 first (English); if 404, fall back to workflow 2 (Arabic)
      response = await fetch(`${apiUrl}/api/v1/workflow/1/runs/${runId}`, {
        headers: {
          "X-API-Key": apiKey,
          Accept: "application/json",
        },
        cache: "no-store",
      });
      if (response.status === 404) {
        response = await fetch(`${apiUrl}/api/v1/workflow/2/runs/${runId}`, {
          headers: {
            "X-API-Key": apiKey,
            Accept: "application/json",
          },
          cache: "no-store",
        });
      }
    }

    if (!response.ok) {
      const errText = await response.text();
      console.error(`Failed to fetch run ${runId} from Dograh:`, response.status, errText);
      return NextResponse.json(
        { error: `Dograh run fetch failed: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      runId: data.id,
      name: data.name,
      state: data.state,
      isCompleted: data.is_completed ?? false,
      gatheredContext: data.gathered_context || {},
      initialContext: data.initial_context || {},
      usageInfo: data.usage_info || {},
      durationSeconds: data.duration_seconds || null,
      transcriptUrl: data.transcript_url || null,
      recordingUrl: data.recording_url || null,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown server error";
    console.error("Error in /api/lead-summary route:", message);
    return NextResponse.json(
      { error: "Internal server error fetching lead summary" },
      { status: 500 }
    );
  }
}
