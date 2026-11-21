import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AI_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
  "CCBot",
  "Meta-ExternalAgent",
  "Googlebot",
  "Bingbot",
];

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const userAgent = request.headers.get("user-agent") || "";
  const pathname = request.nextUrl.pathname;

  // Lightweight Edge Telemetry for AI Crawlers & Search Engines
  for (const bot of AI_BOTS) {
    if (userAgent.toLowerCase().includes(bot.toLowerCase())) {
      console.log(
        `[AI CRAWLER HIT] ${new Date().toISOString()} | Bot: ${bot} | Path: ${pathname} | IP: ${
          request.headers.get("x-forwarded-for") || "unknown"
        }`
      );
      break;
    }
  }

  // If accessed via any *.vercel.app domain or www.ayush.company, 301 permanently redirect to https://ayush.company
  if (host.includes(".vercel.app") || host === "www.ayush.company") {
    const url = request.nextUrl.clone();
    url.host = "ayush.company";
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg, etc.
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.svg).*)",
  ],
};
