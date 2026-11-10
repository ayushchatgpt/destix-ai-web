import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ayush.company";
  const now = new Date();

  const routes = [
    // Core Pillars (Priority 1.0 - 0.99)
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ai-voice-agent-delhi-ncr`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.99,
    },
    {
      url: `${baseUrl}/ai-voice-agent-for-real-estate`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.99,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.99,
    },
    {
      url: `${baseUrl}/voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/playbooks`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/solutions/real-estate-automation`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/solutions/real-estate-ai-calling-gurgaon-noida`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/services/voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/services/ai-os`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/services/3d-web`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/services/whatsapp-automation`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/websites`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/operating-system`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/white-label-ai-partner`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/partners/agency-white-label`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },

    // High-Intent Regional Hubs (Priority 0.96 - 0.98)
    {
      url: `${baseUrl}/ai-agency-delhi`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/dubai`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/locations/delhi-ncr/ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/locations/delhi-ncr/ai-voice-agents-for-real-estate`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/locations/delhi-ncr/ai-voice-agents-for-clinics`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/locations/delhi-ncr/hindi-ai-voice-agent`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/locations/gurugram/ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/locations/noida/ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/locations/mumbai/ai-voice-receptionist`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/locations/dubai/real-estate-ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/ai-voice-receptionist`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/ai-agency`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },

    // AEO / GEO Research Articles & Guides (Priority 0.95 - 0.98)
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/top-real-estate-ai-voice-agent-companies-delhi-ncr-2026`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/best-ai-voice-agent-in-new-delhi`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/blog/best-ai-voice-agents-agency-delhi-ncr`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/blog/cost-of-ai-voice-agent-vs-telecallers-india`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/blog/ai-voice-agent-cost-india`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.97,
    },
    {
      url: `${baseUrl}/blog/how-to-build-inbound-hindi-ai-voice-agent`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/indian-phone-numbers-for-ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/managed-ai-voice-receptionist-pricing-india`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/ai-voice-agents-india-deployment-guide`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.94,
    },
  ];

  return routes;
}
