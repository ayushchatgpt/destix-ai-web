import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents for Clinics in Delhi NCR | DestiX AI",
  description:
    "Autonomous medical & aesthetic clinic AI voice receptionist for Delhi, Gurugram, and Noida. Instant 24/7 appointment scheduling, WhatsApp confirmations, and patient pre-screening.",
  keywords: [
    "AI voice agents for clinics Delhi",
    "clinic AI receptionist Delhi NCR",
    "dental clinic voice bot Gurgaon",
    "aesthetic clinic AI receptionist Noida",
    "healthcare AI answering service Delhi",
    "DestiX AI clinic voice",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-clinics",
  },
  openGraph: {
    title: "AI Voice Agents for Clinics in Delhi NCR | DestiX AI",
    description:
      "24/7 patient booking, consultation screening, and autonomous telephony for aesthetic, dental, and medical clinics across Delhi NCR.",
    url: "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-clinics",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/api/og?title=AI%20Voice%20Agents%20for%20Clinics%20in%20Delhi%20NCR&category=Delhi%20NCR%20AI&badge=Connaught%20Place%20HQ",
        width: 1200,
        height: 630,
        alt: "AI Voice Agents for Clinics in Delhi NCR",
      },
    ],
  },
};

export default function ClinicVoiceAgentLayout({
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
            "@id": "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-clinics/#service",
            "name": "AI Voice Agents for Clinics in Delhi NCR",
            "serviceType": "Healthcare & Clinic AI Telephony Infrastructure",
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
            "description": "HIPAA-conscious autonomous AI voice receptionist for Delhi NCR clinics, booking consultations 24/7 and routing patient data directly to your calendar.",
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
                "name": "AI Voice Agents for Clinics",
                "item": "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-clinics"
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
