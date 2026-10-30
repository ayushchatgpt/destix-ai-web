import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents for Real Estate | Qualify Portal Leads in 30s | DestiX AI",
  description:
    "AI voice agents for real estate brokers and developers. Qualify 99acres, MagicBricks, and Meta ad leads in 30 seconds, screen buyer budgets (3BHK/4BHK/Penthouse), and book site visits 24/7.",
  keywords: [
    "ai voice agent for real estate",
    "ai for real estate business",
    "real estate ai calling bot",
    "ai appointment setter for property dealers",
    "automated site visit booking voice ai",
    "real estate lead qualification voice agent",
    "real estate speed to lead",
    "99acres magicbricks instant ai callback",
    "DestiX AI real estate voice",
    "Ayush Meena real estate AI",
  ],
  alternates: {
    canonical: "https://ayush.company/ai-voice-agent-for-real-estate",
  },
  openGraph: {
    title: "AI Voice Agents for Real Estate: Qualify Portal Leads in 30 Seconds & Book Site Visits 24/7 | DestiX AI",
    description:
      "Convert 4x more real estate leads. Autonomous voice agents call portal and ad leads within 30 seconds, filter buyer budgets, and schedule site tours directly into sales calendars.",
    url: "https://ayush.company/ai-voice-agent-for-real-estate",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents for Real Estate | DestiX AI",
    description:
      "Autonomous speed-to-lead voice qualification for real estate developers and brokers.",
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
                ],
                "description":
                  "Autonomous conversational telephony engine intercepting real estate portal and ad leads in under 30 seconds, qualifying budgets, and scheduling site visits.",
                "provider": {
                  "@type": "Organization",
                  "name": "DestiX AI",
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
                      "text": "When a buyer submits an inquiry on Meta Ads, Google Ads, 99acres, or MagicBricks, DestiX AI triggers an automated outbound carrier call in under 30 seconds. The voice agent converses in natural English, Hindi, or Hinglish, qualifies their budget (e.g. ₹4 Cr to ₹25 Cr), configuration (3BHK/4BHK/Penthouse), and timeline, and books a site visit directly into your sales team's calendar.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Can the AI voice agent replace human telecallers for real estate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI eliminates 80% of manual telesales overhead. While human callers take 4 to 14 hours to follow up and suffer from 40% monthly attrition, DestiX AI calls leads within 30 seconds 24/7/365, ensuring your top-producing closers only speak to qualified, high-intent buyers.",
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
