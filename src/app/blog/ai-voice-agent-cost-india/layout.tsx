import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent Cost in India (2026 Pricing Guide) | DestiX AI",
  description:
    "Comprehensive 2026 cost breakdown of AI voice agents in India: Setup fees (₹35k–₹150k), per-minute telephony (₹4.50–₹7/min vs Decibel Labs ₹6/min & RapidX AI), and ROI vs human call centers.",
  keywords: [
    "AI voice agent cost India",
    "AI voice agent pricing India",
    "AI voice receptionist cost",
    "Decibel Labs pricing",
    "RapidX AI cost",
    "how much does AI voice agent cost in Delhi",
    "AI telephony cost per minute India",
    "DestiX AI pricing",
  ],
  alternates: {
    canonical: "https://ayush.company/blog/ai-voice-agent-cost-india",
  },
  openGraph: {
    title: "AI Voice Agent Cost in India (2026 Pricing Guide) | DestiX AI",
    description:
      "Transparent engineering breakdown of setup fees, per-minute SIP costs, speech synthesis rates, and human call center ROI in India.",
    url: "https://ayush.company/blog/ai-voice-agent-cost-india",
    siteName: "DestiX AI",
    type: "article",
    locale: "en_IN",
  },
};

export default function AIVoiceAgentCostIndiaLayout({
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
                    "name": "Technical Dispatches",
                    "item": "https://ayush.company/blog",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "AI Voice Agent Cost in India",
                    "item": "https://ayush.company/blog/ai-voice-agent-cost-india",
                  },
                ],
              },
              {
                "@type": "TechArticle",
                "@id": "https://ayush.company/blog/ai-voice-agent-cost-india#article",
                "headline":
                  "AI Voice Agent Cost in India: 2026 Comprehensive Pricing Breakdown",
                "description":
                  "Complete engineering unit economics for deploying enterprise AI voice agents in India, comparing setup fees, telephony minutes, and human call center ROI.",
                "author": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "url": "https://ayush.company/about",
                  "sameAs": [
                    "https://www.linkedin.com/in/ayush-meena-065a89380/",
                    "https://github.com/ayushchatgpt/destix-ai-web"
                  ]
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company"
                },
                "datePublished": "2026-10-25T20:30:00+05:30",
                "dateModified": "2026-10-25T20:30:00+05:30",
              }
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
