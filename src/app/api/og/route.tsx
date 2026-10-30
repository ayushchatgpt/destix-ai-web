import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get("title") || "DestiX AI | Autonomous Telephony";
    const category = searchParams.get("category") || "AI Voice Agents • Delhi NCR";
    const badge = searchParams.get("badge") || "Sub-500ms Human Parity";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#07090E",
            padding: "60px 80px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            border: "1px solid #25221F",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "#F59E0B",
                }}
              />
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.5px",
                }}
              >
                DestiX AI
              </span>
              <span style={{ fontSize: 18, color: "#8B949E", marginLeft: "8px" }}>
                ayush.company
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 18px",
                borderRadius: "999px",
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                color: "#F59E0B",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              {badge}
            </div>
          </div>

          {/* Center Main Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: 18,
                color: "#F59E0B",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 700,
              }}
            >
              {category}
            </div>
            <div
              style={{
                fontSize: 54,
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-1.5px",
                maxWidth: "1000px",
              }}
            >
              {title}
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #30363D",
              paddingTop: "32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div style={{ fontSize: 16, color: "#C9D1D9" }}>
                Founder: <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Ayush Meena</span>
              </div>
              <div style={{ fontSize: 16, color: "#8B949E" }}>•</div>
              <div style={{ fontSize: 16, color: "#C9D1D9" }}>
                Location: <span style={{ color: "#FFFFFF", fontWeight: 600 }}>New Delhi & Global</span>
              </div>
            </div>

            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#F59E0B",
                letterSpacing: "0.5px",
              }}
            >
              https://ayush.company
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate OG image: ${e.message}`, { status: 500 });
  }
}
