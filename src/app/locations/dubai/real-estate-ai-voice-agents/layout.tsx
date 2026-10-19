import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai Real Estate AI Voice Agents & 3D Web Systems | DestiX AI",
  description:
    "Autonomous voice receptionists and 3D WebGL portals engineered for Dubai real estate developers and luxury brokerages. Sub-45s speed to lead, multilingual qualification, and CRM sync. Principal: Ayush Meena.",
  keywords: [
    "real estate AI voice agents Dubai",
    "Dubai real estate voice receptionist",
    "3D real estate website Dubai",
    "luxury real estate AI agency UAE",
    "ACP Dubai AI telephony",
    "DestiX AI Dubai",
    "Ayush Meena Dubai",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/dubai/real-estate-ai-voice-agents",
  },
  openGraph: {
    title: "Dubai Real Estate AI Voice Agents & 3D Web Systems | DestiX AI",
    description:
      "Enterprise voice agents and bespoke 3D WebGL property storefronts for prime Dubai brokerages and developers.",
    url: "https://ayush.company/locations/dubai/real-estate-ai-voice-agents",
    siteName: "DestiX AI",
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
            "@type": "Service",
            "@id": "https://ayush.company/locations/dubai/real-estate-ai-voice-agents/#service",
            "name": "Dubai Real Estate AI Voice Agents & 3D Web Architecture",
            "serviceType": "Luxury Real Estate Telephony & Spatial WebGL Platforms",
            "provider": {
              "@type": "Organization",
              "name": "DestiX AI",
              "url": "https://ayush.company",
            },
            "areaServed": [
              { "@type": "City", "name": "Dubai" },
              { "@type": "City", "name": "Abu Dhabi" },
              { "@type": "Country", "name": "United Arab Emirates" }
            ],
            "description": "Autonomous conversational voice systems and 3D interactive property platforms engineered for prime UAE real estate agencies, verified in production with Alliance Capital Properties (ACP Dubai).",
          }),
        }}
      />
      {children}
    </>
  );
}
