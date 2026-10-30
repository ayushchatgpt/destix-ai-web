import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindi AI Voice Agent for Delhi NCR | DestiX AI",
  description:
    "Deploy bilingual Hindi and Hinglish autonomous AI voice agents for Delhi NCR businesses. Natural accents, zero robotic delay, and instant WhatsApp CRM routing.",
  keywords: [
    "Hindi AI voice agent Delhi",
    "Hinglish AI voice agent Delhi NCR",
    "Hindi voice bot Gurgaon",
    "Hindi AI receptionist Noida",
    "conversational Hindi voice AI",
    "DestiX AI Hindi voice",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/delhi-ncr/hindi-ai-voice-agent",
  },
  openGraph: {
    title: "Hindi AI Voice Agent for Delhi NCR | DestiX AI",
    description:
      "Bilingual Hindi & Hinglish conversational AI voice agents for high-ticket businesses across Delhi, Gurugram, and Noida.",
    url: "https://ayush.company/locations/delhi-ncr/hindi-ai-voice-agent",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/og-delhi-ncr.png",
        width: 1200,
        height: 630,
        alt: "Hindi AI Voice Agent for Delhi NCR",
      },
    ],
  },
};

export default function HindiVoiceAgentLayout({
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
            "@type": "Service",
            "@id": "https://ayush.company/locations/delhi-ncr/hindi-ai-voice-agent/#service",
            "name": "Hindi AI Voice Agent for Delhi NCR",
            "serviceType": "Bilingual Hindi Conversational Telephony",
            "provider": {
              "@type": "Organization",
              "name": "DestiX AI",
              "url": "https://ayush.company",
            },
            "areaServed": [
              { "@type": "City", "name": "Delhi" },
              { "@type": "City", "name": "Gurugram" },
              { "@type": "City", "name": "Noida" },
              { "@type": "AdministrativeArea", "name": "Delhi NCR" }
            ],
            "description": "Enterprise bilingual Hindi and Hinglish AI voice agents with human acoustic parity, code-switching, and instantaneous CRM logging.",
          }),
        }}
      />
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ayush.company"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Delhi NCR",
                "item": "https://ayush.company/locations/delhi-ncr/ai-voice-agents"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Hindi AI Voice Agent for Delhi",
                "item": "https://ayush.company/locations/delhi-ncr/hindi-ai-voice-agent"
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
