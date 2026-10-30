import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ayush.company";
  const now = new Date();

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
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
      url: `${baseUrl}/ai-agency-delhi`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/locations/delhi-ncr/ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/best-ai-voice-agent-in-new-delhi`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.96,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/ai-voice-receptionist`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/ai-agency`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/websites`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/operating-system`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/playbooks`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/dubai/real-estate-ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/locations/mumbai/ai-voice-receptionist`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/locations/delhi-ncr/hindi-ai-voice-agent`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/locations/delhi-ncr/ai-voice-agents-for-clinics`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/locations/delhi-ncr/ai-voice-agents-for-real-estate`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-ai-voice-agents-agency-delhi-ncr`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/locations/gurugram/ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/locations/noida/ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/partners/agency-white-label`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/blog/ai-voice-agents-india-deployment-guide`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/blog/indian-phone-numbers-for-ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/blog/how-to-build-inbound-hindi-ai-voice-agent`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/blog/managed-ai-voice-receptionist-pricing-india`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/blog/ai-voice-agent-cost-india`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.94,
    },
    {
      url: `${baseUrl}/services/whatsapp-automation`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
  ];

  return routes;
}
