import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents in Noida & Greater Noida | DestiX AI",
  description:
    "Deploy autonomous AI voice agents in Noida (Sector 62, Expressway, Sector 150). Sub-45-second speed to lead, automated inbound inquiry qualification, and instant WhatsApp booking passes.",
  keywords: [
    "AI voice agents Noida",
    "AI voice agency Noida Expressway",
    "voice bot Sector 62 Noida",
    "AI receptionist Greater Noida",
    "real estate voice agent Noida",
    "DestiX AI Noida",
    "Ayush Meena Noida",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/noida/ai-voice-agents",
  },
  openGraph: {
    title: "AI Voice Agents in Noida & Greater Noida | DestiX AI",
    description:
      "Enterprise autonomous voice telephony for developers, healthcare centers, and D2C brands across Noida, Greater Noida, and the Expressway.",
    url: "https://ayush.company/locations/noida/ai-voice-agents",
    siteName: "DestiX AI",
  },
};

export default function NoidaLocationLayout({
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
            "@id": "https://ayush.company/locations/noida/ai-voice-agents/#service",
            "name": "AI Voice Agents & Telephony Noida",
            "serviceType": "Autonomous Conversational Telephony & Inbound Qualification",
            "provider": {
              "@type": "Organization",
              "name": "DestiX AI",
              "url": "https://ayush.company",
            },
            "areaServed": [
              { "@type": "City", "name": "Noida" },
              { "@type": "City", "name": "Greater Noida" },
              { "@type": "AdministrativeArea", "name": "Delhi NCR" }
            ],
            "description": "Production AI voice telephony engineered for Noida Expressway real estate builders, commercial tech hubs, and diagnostic facilities.",
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
                "name": "AI Voice Agents Noida",
                "item": "https://ayush.company/locations/noida/ai-voice-agents"
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
