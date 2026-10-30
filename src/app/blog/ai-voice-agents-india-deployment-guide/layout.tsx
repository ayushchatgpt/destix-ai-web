import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents in India: Enterprise Deployment Guide (2026) | DestiX AI",
  description:
    "The complete 2026 enterprise deployment guide for AI voice agents in India. Telecom regulations (TRAI/DLT), sub-500ms latency, Indian SIP carrier routing, and bilingual Hinglish code-switching.",
  keywords: [
    "AI voice agents in India",
    "deploy AI voice agent India",
    "conversational AI India",
    "Indian telecom AI voice",
    "voice bot deployment India",
    "DestiX AI deployment guide",
    "Ayush Meena AI voice India",
  ],
  alternates: {
    canonical: "https://ayush.company/blog/ai-voice-agents-india-deployment-guide",
  },
  openGraph: {
    title: "AI Voice Agents in India: Enterprise Deployment Guide (2026) | DestiX AI",
    description:
      "Architecture, telecom compliance, Indian SIP trunks, and latency optimization for deploying production AI voice agents in India.",
    url: "https://ayush.company/blog/ai-voice-agents-india-deployment-guide",
    siteName: "DestiX AI",
    type: "article",
      images: [
      {
        url: "https://ayush.company/api/og?title=AI%20Voice%20Agents%20in%20India%3A%20Enterprise%20Deployment%20Guid...&category=Intel%20%26%20Strategy&badge=2026%20Verified",
        width: 1200,
        height: 630,
        alt: "AI Voice Agents in India: Enterprise Deployment Guid...",
      },
    ],
  },
};

export default function VoiceAgentsIndiaGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://ayush.company/blog/ai-voice-agents-india-deployment-guide/#article",
                "headline": "AI Voice Agents in India: The Complete 2026 Enterprise Deployment Guide",
                "description": "Production architecture, carrier-grade SIP routing, TRAI telecom guidelines, and sub-500ms voice parity for Indian commercial enterprises.",
                "inLanguage": "en-US",
                "datePublished": "2026-10-25T10:00:00+05:30",
                "dateModified": "2026-10-25T18:30:00+05:30",
                "author": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "url": "https://ayush.company/about"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/blog/ai-voice-agents-india-deployment-guide/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can AI voice agents operate on Indian phone numbers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Enterprise AI voice agents can be provisioned on standard Indian +91 10-digit virtual mobile numbers, landline DIDs, or toll-free (1800) numbers through licensed telecom carrier SIP trunks compliant with TRAI regulations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What latency is required for a natural AI voice agent in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For human parity, round-trip conversational latency must stay strictly below 500 milliseconds (comprising Speech-to-Text under 120ms, LLM inference under 180ms, and Text-to-Speech stream synthesis under 150ms)."
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
