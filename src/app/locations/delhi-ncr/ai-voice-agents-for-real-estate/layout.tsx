import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents for Real Estate in Delhi NCR | DestiX AI",
  description:
    "Autonomous real estate voice agents for Delhi NCR brokers and builders. Speed-to-lead qualification in under 45 seconds, luxury property screening, and site visit booking.",
  keywords: [
    "AI voice agents for real estate Delhi",
    "real estate voice bot Gurgaon",
    "property lead qualification Noida",
    "real estate AI receptionist Delhi NCR",
    "speed to lead real estate AI India",
    "DestiX AI real estate voice",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-real-estate",
  },
  openGraph: {
    title: "AI Voice Agents for Real Estate in Delhi NCR | DestiX AI",
    description:
      "Instant lead capture, budget qualification, and automated site visit scheduling for luxury real estate developers and brokers across Delhi, Gurugram, and Noida.",
    url: "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-real-estate",
    siteName: "DestiX AI",
  },
};

export default function RealEstateVoiceAgentLayout({
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
            "@id": "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-real-estate/#service",
            "name": "AI Voice Agents for Real Estate in Delhi NCR",
            "serviceType": "Real Estate Telephony & Speed-to-Lead Qualification",
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
            "description": "High-velocity real estate AI voice agents intercepting property ad leads in under 45 seconds, qualifying buyer budget, and scheduling site visits.",
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
                "name": "AI Voice Agents for Real Estate",
                "item": "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-real-estate"
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
