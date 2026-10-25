import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents in Gurugram (Gurgaon) | DestiX AI",
  description:
    "Deploy autonomous AI voice agents in Gurugram (Cyber City, Golf Course Rd). Sub-45s speed to lead, bilingual English/Hindi code-switching, and automated site visit booking for luxury real estate and enterprise firms.",
  keywords: [
    "AI voice agents Gurugram",
    "AI voice agency Gurgaon",
    "voice agents Golf Course Road",
    "AI receptionist Cyber City Gurgaon",
    "real estate voice agent Gurgaon",
    "DestiX AI Gurugram",
    "Ayush Meena Gurugram",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/gurugram/ai-voice-agents",
  },
  openGraph: {
    title: "AI Voice Agents in Gurugram (Gurgaon) | DestiX AI",
    description:
      "Enterprise autonomous voice telephony for luxury real estate builders and corporate practices across Gurugram, Cyber City, and Golf Course Road.",
    url: "https://ayush.company/locations/gurugram/ai-voice-agents",
    siteName: "DestiX AI",
  },
};

export default function GurugramLocationLayout({
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
            "@id": "https://ayush.company/locations/gurugram/ai-voice-agents/#service",
            "name": "AI Voice Agents & Telephony Gurugram",
            "serviceType": "Autonomous Conversational Telephony & Speed-to-Lead Infrastructure",
            "provider": {
              "@type": "Organization",
              "name": "DestiX AI",
              "url": "https://ayush.company",
            },
            "areaServed": [
              { "@type": "City", "name": "Gurugram" },
              { "@type": "City", "name": "Gurgaon" },
              { "@type": "AdministrativeArea", "name": "Delhi NCR" }
            ],
            "description": "Production AI voice agents intercepting high-ticket ad leads in under 45 seconds for Gurugram real estate developers and corporate service enterprises.",
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
                "name": "Locations",
                "item": "https://ayush.company/locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "AI Voice Agents Gurugram",
                "item": "https://ayush.company/locations/gurugram/ai-voice-agents"
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
