import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autonomous AI Voice Agents & Low-Latency Telephony | DestiX AI",
  description:
    "Custom enterprise voice agents with sub-350ms conversational latency, bilingual English/Hindi Hinglish fluency, direct domestic +91 carrier interconnects, and automated CRM synchronization.",
  keywords: [
    "autonomous ai voice agents",
    "low latency voice ai",
    "sub 500ms voice agent",
    "hinglish voice agent developer",
    "delhi ncr voice ai infrastructure",
    "destix ai telephony",
  ],
  alternates: {
    canonical: "https://ayush.company/services/voice-agents",
  },
  openGraph: {
    title: "Autonomous AI Voice Agents & Low-Latency Telephony | DestiX AI",
    description:
      "Sub-350ms turn-taking latency, natural Hinglish cadence, and deterministic CRM synchronization for enterprise operations.",
    url: "https://ayush.company/services/voice-agents",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Voice Telephony Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous AI Voice Agents & Telephony Infrastructure | DestiX AI",
    description:
      "Enterprise voice agents with sub-350ms latency, native Indian telephony routes, and zero recurring SaaS seat markups.",
    images: ["https://ayush.company/opengraph-image.png"],
    creator: "@ayushmeena",
  },
};

export default function ServicesVoiceAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ayush.company/services/voice-agents/#service",
        "name": "Autonomous AI Voice Agents & Telephony Infrastructure",
        "serviceType": "Conversational Voice AI Engineering",
        "provider": {
          "@id": "https://ayush.company/#organization",
        },
        "areaServed": ["Delhi NCR", "India", "Dubai", "Global Remote"],
        "description": "Custom enterprise voice agents with sub-350ms turn-taking latency, domestic Indian phone lines, and automated CRM pipeline synchronization.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayush.company/services/voice-agents/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ayush.company",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://ayush.company/solutions",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Autonomous Voice Agents",
            "item": "https://ayush.company/services/voice-agents",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
