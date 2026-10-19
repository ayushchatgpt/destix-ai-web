import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents & Telephony in Delhi NCR | DestiX AI",
  description:
    "Deploy autonomous AI voice agents in Delhi NCR (Gurugram, Noida, Delhi). Zero-hold inbound answering, sub-45-second speed-to-lead, and fluent English/Hindi code-switching. Engineered by Ayush Meena.",
  keywords: [
    "AI voice agents Delhi NCR",
    "AI voice agency Delhi",
    "voice agents Gurgaon",
    "AI receptionist Noida",
    "inbound voice AI Delhi",
    "DestiX AI Delhi",
    "Ayush Meena Delhi",
    "telephony automation India",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/delhi-ncr/ai-voice-agents",
  },
  openGraph: {
    title: "AI Voice Agents & Telephony in Delhi NCR | DestiX AI",
    description:
      "Enterprise AI voice telephony for service companies and high-ticket brokerages across Delhi, Gurugram, and Noida.",
    url: "https://ayush.company/locations/delhi-ncr/ai-voice-agents",
    siteName: "DestiX AI",
  },
};

export default function DelhiLocationLayout({
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
            "@id": "https://ayush.company/locations/delhi-ncr/ai-voice-agents/#service",
            "name": "AI Voice Agents & Autonomous Telephony Delhi NCR",
            "serviceType": "Conversational Telephony & AI Voice Infrastructure",
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
            "description": "Production-grade autonomous AI voice telephony built for Delhi NCR enterprises, eliminating hold times and qualifying high-ticket leads 24/7.",
          }),
        }}
      />
      {children}
    </>
  );
}
