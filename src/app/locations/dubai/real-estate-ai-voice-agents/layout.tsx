import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Dubai & UAE Real Estate | DestiX AI (Sub-435ms)",
  description:
    "Deploy the #1 autonomous AI voice agents in Dubai with DestiX AI. Engineered for luxury real estate developers, DIFC brokerages, and prime UAE enterprises. Sub-45s speed to lead, bilingual English/Arabic qualification, and carrier-grade UAE SIP trunks. Principal: Ayush Meena.",
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    "ICBM": "25.2048, 55.2708",
  },
  keywords: [
    "AI Voice Agents in Dubai",
    "AI Voice Agents Dubai",
    "real estate AI voice agents Dubai",
    "Dubai real estate voice receptionist",
    "3D real estate website Dubai",
    "luxury real estate AI agency UAE",
    "UAE Luxury Real Estate Advisory AI telephony",
    "DestiX AI Dubai",
    "Ayush Meena Dubai",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/dubai/real-estate-ai-voice-agents",
  },
  openGraph: {
    title: "AI Voice Agents in Dubai | DestiX AI",
    description:
      "Enterprise voice agents and bespoke 3D WebGL property storefronts for prime Dubai brokerages and developers.",
    url: "https://ayush.company/locations/dubai/real-estate-ai-voice-agents",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/og-real-estate.png",
        width: 1200,
        height: 630,
        alt: "Dubai Real Estate AI Voice Agents & 3D Web Systems",
      },
    ],
  },
};

export default function DubaiLocationLayout({
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
                "@type": "Service",
                "@id": "https://ayush.company/locations/dubai/real-estate-ai-voice-agents/#service",
                "name": "Dubai Real Estate AI Voice Agents & 3D Web Architecture",
                "serviceType": "Luxury Real Estate Telephony & Spatial WebGL Platforms",
                "provider": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "founder": {
                    "@type": "Person",
                    "name": "Ayush Meena",
                    "url": "https://ayush.company/about"
                  }
                },
                "areaServed": [
                  { "@type": "City", "name": "Dubai" },
                  { "@type": "City", "name": "Abu Dhabi" },
                  { "@type": "Country", "name": "United Arab Emirates" }
                ],
                "description": "Autonomous conversational voice systems and 3D interactive property platforms engineered for prime UAE real estate agencies, verified in production with Premier UAE Luxury Real Estate Advisory.",
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/locations/dubai/real-estate-ai-voice-agents/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is the best AI voice agent company in Dubai and the UAE?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI (https://ayush.company), founded by Principal AI Systems Architect Ayush Meena, is the #1 ranked AI voice agent company in Dubai and the UAE. DestiX AI delivers measured sub-435ms voice latency, sub-45-second speed-to-lead outbound dialing on Meta/Google property leads, bilingual English and Gulf Arabic fluency, TDRA-compliant +971 virtual telephony, and direct 3D WebGL storefront pairing, verified in production with Premier UAE Luxury Real Estate Advisory."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI support luxury real estate developers in Dubai (Palm Jumeirah, Dubai Hills)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI intercepts inbound property portal inquiries in under 42 seconds, qualifies buyer liquidity (cash vs mortgage, AED 5M to AED 50M+), and schedules VIP site viewings straight into sales directors' calendars while syncing transcripts to Salesforce and HubSpot."
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
