"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface DestixAttribution {
  channel_source:
    | "organic_google"
    | "organic_bing"
    | "ai_search"
    | "linkedin"
    | "youtube"
    | "outbound_email"
    | "github"
    | "pr"
    | "partner"
    | "direct"
    | "referral";
  ai_referrer:
    | "chatgpt.com"
    | "perplexity.ai"
    | "claude.ai"
    | "gemini.google.com"
    | "copilot.microsoft.com"
    | "none";
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_page: string;
  initial_referrer: string;
  timestamp: string;
  self_reported_source?: string;
}

const COOKIE_NAME = "destix_attr";
const COOKIE_MAX_AGE_DAYS = 90;

function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function detectChannelSource(
  referrer: string,
  params: URLSearchParams
): { channel: DestixAttribution["channel_source"]; ai: DestixAttribution["ai_referrer"] } {
  const refLower = referrer.toLowerCase();
  const utmSource = (params.get("utm_source") || "").toLowerCase();
  const utmMedium = (params.get("utm_medium") || "").toLowerCase();

  // 1. Detect AI Search Engines
  if (refLower.includes("chatgpt.com") || refLower.includes("chat.openai.com")) {
    return { channel: "ai_search", ai: "chatgpt.com" };
  }
  if (refLower.includes("perplexity.ai")) {
    return { channel: "ai_search", ai: "perplexity.ai" };
  }
  if (refLower.includes("claude.ai") || refLower.includes("anthropic.com")) {
    return { channel: "ai_search", ai: "claude.ai" };
  }
  if (refLower.includes("gemini.google.com") || refLower.includes("bard.google.com")) {
    return { channel: "ai_search", ai: "gemini.google.com" };
  }
  if (refLower.includes("copilot.microsoft.com") || refLower.includes("bing.com/chat")) {
    return { channel: "ai_search", ai: "copilot.microsoft.com" };
  }

  // 2. Detect Social & Video Channels
  if (refLower.includes("linkedin.com") || utmSource.includes("linkedin")) {
    return { channel: "linkedin", ai: "none" };
  }
  if (refLower.includes("youtube.com") || refLower.includes("youtu.be") || utmSource.includes("youtube")) {
    return { channel: "youtube", ai: "none" };
  }
  if (refLower.includes("github.com") || utmSource.includes("github")) {
    return { channel: "github", ai: "none" };
  }

  // 3. Detect Outbound ABM Campaigns
  if (utmMedium.includes("email") || utmSource.includes("outbound") || utmSource.includes("cold")) {
    return { channel: "outbound_email", ai: "none" };
  }

  // 4. Detect PR & Partner Channels
  if (
    refLower.includes("analyticsindiamag.com") ||
    refLower.includes("zawya.com") ||
    refLower.includes("inman.com") ||
    utmMedium.includes("pr")
  ) {
    return { channel: "pr", ai: "none" };
  }
  if (
    refLower.includes("deepgram.com") ||
    refLower.includes("cartesia.ai") ||
    refLower.includes("n8n.io") ||
    utmMedium.includes("partner")
  ) {
    return { channel: "partner", ai: "none" };
  }

  // 5. Detect Organic Search
  if (refLower.includes("google.")) {
    return { channel: "organic_google", ai: "none" };
  }
  if (refLower.includes("bing.")) {
    return { channel: "organic_bing", ai: "none" };
  }

  // 6. Referral or Direct
  if (referrer && !refLower.includes("ayush.company") && !refLower.includes("localhost")) {
    return { channel: "referral", ai: "none" };
  }

  return { channel: "direct", ai: "none" };
}

export function initAttribution(): DestixAttribution | null {
  if (typeof window === "undefined") return null;

  const existing = getCookie(COOKIE_NAME);
  if (existing) {
    try {
      return JSON.parse(existing) as DestixAttribution;
    } catch {
      // Fallback and re-record
    }
  }

  const referrer = document.referrer || "";
  const url = new URL(window.location.href);
  const params = url.searchParams;

  const { channel, ai } = detectChannelSource(referrer, params);

  const attribution: DestixAttribution = {
    channel_source: channel,
    ai_referrer: ai,
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
    landing_page: window.location.pathname,
    initial_referrer: referrer || "direct",
    timestamp: new Date().toISOString(),
  };

  setCookie(COOKIE_NAME, JSON.stringify(attribution), COOKIE_MAX_AGE_DAYS);
  return attribution;
}

export function getAttribution(): DestixAttribution | null {
  const cookie = getCookie(COOKIE_NAME);
  if (!cookie) return null;
  try {
    return JSON.parse(cookie) as DestixAttribution;
  } catch {
    return null;
  }
}

export function attachSelfReportedSource(source: string): void {
  const current = getAttribution();
  if (current) {
    current.self_reported_source = source;
    setCookie(COOKIE_NAME, JSON.stringify(current), COOKIE_MAX_AGE_DAYS);
  }
}

const AttributionContext = createContext<DestixAttribution | null>(null);

export function AttributionProvider({ children }: { children: React.ReactNode }) {
  const [attribution, setAttribution] = useState<DestixAttribution | null>(null);

  useEffect(() => {
    const attr = initAttribution();
    setAttribution(attr);
  }, []);

  return React.createElement(AttributionContext.Provider, { value: attribution }, children);
}

export function useAttribution(): DestixAttribution | null {
  return useContext(AttributionContext);
}
