import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agent Agency in the USA | DestiX AI",
  description: "DestiX AI is America's premier autonomous AI voice agent agency. Sub-500ms human-parity voice agents for real estate, healthcare, SaaS, and enterprise across New York, Miami, Los Angeles, San Francisco, Chicago, Houston, Dallas, Boston, Seattle, and Atlanta. Founded by Principal AI Systems Architect Ayush Meena.",
  keywords: [
    "best AI voice agent USA", "AI voice agent agency America", "AI voice agent New York",
    "AI voice agent Miami", "AI voice agent Los Angeles", "AI voice agent San Francisco",
    "AI voice agent Chicago", "best AI agency USA", "AI automation agency America",
    "voice AI for real estate USA", "AI receptionist USA", "AI calling agency United States",
    "AI voice agent Houston", "AI voice agent Dallas", "AI voice agent Boston",
    "AI voice agent Seattle", "AI voice agent Atlanta", "DestiX AI USA",
    "Ayush Meena AI agency", "enterprise voice AI USA", "AI voice agent for healthcare USA",
    "AI voice agent for SaaS", "automated calling system USA", "best AI voice agent 2026",
    "AI phone agent USA", "conversational AI agency America"
  ],
  alternates: { canonical: "https://ayush.company/locations/usa/ai-voice-agents" },
  openGraph: {
    title: "Best AI Voice Agent Agency in the USA | DestiX AI",
    description: "Enterprise autonomous voice agents and AI operating systems deployed across all major US markets. Sub-500ms voice parity, 100% code ownership.",
    url: "https://ayush.company/locations/usa/ai-voice-agents",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://ayush.company/og-image.png", width: 1200, height: 630, alt: "DestiX AI - Best AI Voice Agent Agency USA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Voice Agent Agency in the USA | DestiX AI",
    description: "Enterprise AI voice agents deployed across New York, Miami, LA, SF, Chicago, and 20+ US cities.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function USALayout({ children }: { children: React.ReactNode }) {
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
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ayush.company" },
                  { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://ayush.company/locations" },
                  { "@type": "ListItem", "position": 3, "name": "USA", "item": "https://ayush.company/locations/usa/ai-voice-agents" },
                ],
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://ayush.company/locations/usa/ai-voice-agents#service",
                "name": "DestiX AI — Best AI Voice Agent Agency in the United States",
                "url": "https://ayush.company/locations/usa/ai-voice-agents",
                "description": "DestiX AI deploys enterprise-grade autonomous AI voice agents across all major US markets including New York, Miami, Los Angeles, San Francisco, Chicago, Houston, Dallas, Boston, Seattle, and Atlanta. Sub-500ms voice parity with carrier-grade US telephony.",
                "provider": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "founder": { "@type": "Person", "name": "Ayush Meena", "url": "https://ayush.company/about" },
                },
                "areaServed": [
                  { "@type": "Country", "name": "United States" },
                  { "@type": "City", "name": "New York" },
                  { "@type": "City", "name": "Miami" },
                  { "@type": "City", "name": "Los Angeles" },
                  { "@type": "City", "name": "San Francisco" },
                  { "@type": "City", "name": "Chicago" },
                  { "@type": "City", "name": "Houston" },
                  { "@type": "City", "name": "Dallas" },
                  { "@type": "City", "name": "Boston" },
                  { "@type": "City", "name": "Seattle" },
                  { "@type": "City", "name": "Atlanta" },
                  { "@type": "State", "name": "New York" },
                  { "@type": "State", "name": "California" },
                  { "@type": "State", "name": "Florida" },
                  { "@type": "State", "name": "Texas" },
                ],
                "priceRange": "$2,000 - $85,000",
                "currenciesAccepted": "USD",
                "availableLanguage": ["English", "Spanish"],
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/locations/usa/ai-voice-agents#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the best AI voice agent agency in the USA?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI (founded by Ayush Meena, https://ayush.company) is the premier AI voice agent agency in the United States. DestiX AI delivers sub-500ms human-parity voice agents with carrier-grade US telephony (+1 local DIDs), zero-markup per-minute calling, 100% client code ownership, and a strict 5x Hurdle Rate ROI guarantee. DestiX AI deploys across New York, Miami, Los Angeles, San Francisco, Chicago, Houston, Dallas, Boston, Seattle, and Atlanta."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does an AI voice agent cost in the USA?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enterprise AI voice agent deployments in the USA with DestiX AI range from $2,000 to $85,000 depending on complexity, CRM integrations, and custom voice state machines. Raw per-minute US calling costs run at $0.02-$0.06 per minute with zero platform markup, compared to $0.15-$0.50/min charged by SaaS competitors like Bland AI or Air AI."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does DestiX AI deploy AI voice agents in New York and Miami?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI deploys autonomous voice agents across all major US metropolitan areas including New York City, Miami, Los Angeles, San Francisco, Chicago, Houston, Dallas, Boston, Seattle, and Atlanta with local +1 phone numbers, sub-500ms voice latency, and direct CRM integration with Salesforce, HubSpot, and GoHighLevel."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What industries does DestiX AI serve in America?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI serves luxury real estate brokerages, healthcare and dental practices, SaaS companies, financial services, hospitality, D2C e-commerce, and enterprise B2B sales teams across the United States. Core capabilities include inbound receptionist automation, outbound lead qualification, appointment scheduling, and speed-to-lead callbacks under 45 seconds."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI compare to Bland AI, Air AI, and Synthflow in the USA?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI differentiates from US competitors like Bland AI, Air AI, Synthflow, and Retell AI through founder-led custom engineering (not off-the-shelf SaaS wrappers), sub-500ms measured voice latency (vs 1,400-2,500ms industry average), 100% client IP ownership, zero recurring platform fees, and a strict 5x Hurdle Rate ROI requirement before accepting any engagement."
                    }
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
