import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents for Real Estate | DestiX AI",
  description:
    "Autonomous voice telephony agents for high-velocity real estate developers and luxury property brokerages in Dubai, New York, London, and India. Sub-45s lead callbacks, automated site visit booking, and CRM synchronization.",
  keywords: [
    "ai voice agents for real estate",
    "real estate ai caller",
    "automated site visit booking",
    "real estate speed to lead",
    "dubai real estate ai agent",
    "property developer ai receptionist",
    "destix ai real estate voice",
    "best ai voice agent real estate"
  ],
  alternates: {
    canonical: "https://ayush.company/industries/real-estate/ai-voice-agents",
  },
};

export default function RealEstateIndustryLayout({
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
                "@id": "https://ayush.company/industries/real-estate/ai-voice-agents#service",
                name: "AI Voice Agents for Real Estate Developers & Brokerages",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Real Estate Telephony Automation & Site Visit Scheduling",
                areaServed: ["Dubai", "New York", "London", "Mumbai", "Delhi NCR"],
                description:
                  "Autonomous conversational telephony systems for luxury property developers. Ingests portal leads, qualifies budget & payment plan readiness, and books on-site viewings directly into CRM schedules.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
