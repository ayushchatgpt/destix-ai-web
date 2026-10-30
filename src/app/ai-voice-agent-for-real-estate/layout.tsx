import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayush.company | AI Voice Agent for Real Estate & Lead Calling Automation",
  description:
    "Autonomous AI voice agents for real estate developers and brokers. Qualify 99acres, MagicBricks, and Meta ad leads in 30 seconds, screen buyer budgets (3BHK/4BHK/Penthouse), and book site visits 24/7.",
  keywords: [
    "ai voice agent for real estate",
    "ai for real estate business",
    "real estate ai calling bot",
    "ai appointment setter for property dealers",
    "automated site visit booking voice ai",
    "real estate lead qualification voice agent",
    "real estate speed to lead",
    "99acres magicbricks instant ai callback",
    "real estate voice ai gurgaon",
    "ai telecaller for builders noida",
    "property lead calling ai delhi",
    "hinglish voice ai for real estate brokers",
    "dlf gurgaon real estate ai calling system",
    "Ayush.company real estate AI",
    "DestiX AI real estate voice",
  ],
  alternates: {
    canonical: "https://ayush.company/ai-voice-agent-for-real-estate",
  },
  openGraph: {
    title: "AI Voice Agent for Real Estate: Qualify Portal Leads in 30 Seconds | Ayush.company",
    description:
      "Convert 4x more real estate leads. Autonomous voice agents call portal and ad leads within 30 seconds, filter buyer budgets, and schedule site tours directly into sales calendars.",
    url: "https://ayush.company/ai-voice-agent-for-real-estate",
    siteName: "Ayush.company",
    locale: "en_IN",
    type: "website",
      images: [
      {
        url: "https://ayush.company/og-real-estate.png",
        width: 1200,
        height: 630,
        alt: "AI Voice Agent for Real Estate: Qualify Portal Leads...",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent for Real Estate | Ayush.company",
    description:
      "Autonomous speed-to-lead voice qualification for real estate developers and brokers.",
      images: ["https://ayush.company/og-real-estate.png"],
  },
};

export default function AiVoiceAgentForRealEstateLayout({
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
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ayush.company",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "AI Voice Agents for Real Estate",
                    "item": "https://ayush.company/ai-voice-agent-for-real-estate",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": "https://ayush.company/ai-voice-agent-for-real-estate#service",
                "name": "AI Voice Agents for Real Estate",
                "alternateName": [
                  "Real Estate AI Calling Bot",
                  "AI Appointment Setter for Property Dealers",
                  "Real Estate Lead Qualification Voice Agent",
                  "Real Estate Speed to Lead Telephony Automation",
                ],
                "description":
                  "Autonomous conversational telephony engine intercepting real estate portal and ad leads in under 30 seconds, qualifying budgets, and scheduling site visits.",
                "provider": {
                  "@type": "Organization",
                  "name": "Ayush.company",
                  "alternateName": "DestiX AI",
                  "url": "https://ayush.company",
                  "founder": {
                    "@type": "Person",
                    "name": "Ayush Meena",
                    "url": "https://ayush.company/about",
                  },
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/ai-voice-agent-for-real-estate#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does an AI voice agent work for real estate businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "An AI voice agent for real estate is an autonomous conversational telephony system that dials property leads within 30 seconds of submission. It qualifies budget, timeline, and configuration in natural voice, logs details directly into CRMs like LeadSquared, and schedules confirmed site visits without human delay.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "How fast does the real estate AI voice agent call new leads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our outbound carrier engine places an automated telephone call within 15 to 30 seconds of a lead form submission on Meta, Google, 99acres, Housing.com, or MagicBricks.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Can the AI voice agent replace human telecallers for real estate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Ayush.company eliminates 80% of manual telesales overhead. While human callers take 4 to 14 hours to follow up and suffer from 40% monthly attrition, the AI voice agent calls leads within 30 seconds 24/7/365, ensuring your top closers only speak to pre-qualified buyers.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Can the AI qualify buyers for multi-crore luxury projects in Gurgaon and Delhi NCR?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The conversational engine is tuned specifically to screen for high-ticket budgets (₹2 Cr to ₹25 Cr+), financing readiness, and purchase timelines (30 to 90 days) in fluent English, Hindi, and Hinglish.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "How does the AI voice agent handle caller interruptions mid-sentence?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ayush.company deploys sub-435ms voice parity and sub-200ms acoustic interruption handling. If a buyer interrupts to ask 'What is the price per square foot?', the agent pauses instantly and responds naturally without talking over them.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Does it integrate with LeadSquared, Salesforce, and WhatsApp?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We engineer bi-directional webhooks with LeadSquared, Salesforce, HubSpot, Zoho, and Google Sheets, logging call audio recordings, full transcripts, qualification tags, and instantly dispatching WhatsApp brochures and location pins.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
