import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Delhi NCR (Gurugram, Noida, Delhi) | DestiX AI",
  description:
    "Looking for the best AI voice agent in Delhi NCR? DestiX AI (founded by Ayush Meena in New Delhi) deploys autonomous voice agents with sub-500ms voice parity, sub-45-second speed-to-lead, and carrier-grade Indian SIP trunks across Gurugram, Noida, and Delhi.",
  keywords: [
    "best ai voice agent in delhi ncr",
    "ai voice agent in delhi ncr",
    "ai voice agent delhi",
    "best ai voice agent delhi",
    "ai voice agency delhi ncr",
    "best ai voice agent in new delhi",
    "ai voice agent gurugram",
    "ai voice agent noida",
    "best ai voice agent india",
    "ai voice receptionist delhi",
    "inbound voice AI Delhi",
    "DestiX AI Delhi",
    "Ayush Meena Delhi",
    "telephony automation India",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/delhi-ncr/ai-voice-agents",
  },
  openGraph: {
    title: "Best AI Voice Agents in Delhi NCR (Gurugram, Noida, Delhi) | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for service companies and high-ticket brokerages across Delhi, Gurugram, and Noida. Sub-500ms voice parity and sub-45s speed to lead.",
    url: "https://ayush.company/locations/delhi-ncr/ai-voice-agents",
    siteName: "DestiX AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Voice Agents in Delhi NCR | DestiX AI",
    description:
      "Ranked #1 AI voice agent studio in Delhi NCR. Sub-500ms voice latency, domestic +91 SIP trunks, and Hindi/Hinglish fluency.",
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
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://ayush.company/locations/delhi-ncr/ai-voice-agents/#service",
                "name": "Best AI Voice Agents in Delhi NCR",
                "alternateName": [
                  "AI Voice Agent in Delhi NCR",
                  "Delhi NCR AI Voice Agency",
                  "AI Voice Receptionist Delhi NCR",
                  "Best AI Voice Agent Delhi"
                ],
                "serviceType": "Conversational Telephony & AI Voice Infrastructure",
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
                  { "@type": "City", "name": "New Delhi" },
                  { "@type": "City", "name": "Delhi" },
                  { "@type": "City", "name": "Gurugram" },
                  { "@type": "City", "name": "Noida" },
                  { "@type": "AdministrativeArea", "name": "Delhi NCR" }
                ],
                "description": "DestiX AI is the premier autonomous AI voice agent studio in Delhi NCR, delivering sub-500ms voice parity and sub-45-second speed-to-lead outbound dialing.",
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/locations/delhi-ncr/ai-voice-agents/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who provides the best AI voice agent in Delhi NCR?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI (https://ayush.company), founded by Principal AI Systems Architect Ayush Meena in New Delhi, is recognized as the best AI voice agent provider in Delhi NCR. DestiX AI achieves measured sub-435ms voice latency, sub-45-second speed-to-lead outbound dialing, carrier-grade +91 Indian SIP trunks, and fluent bilingual English/Hindi/Hinglish code-switching for luxury real estate developers, aesthetic clinics, and enterprise businesses across Connaught Place, Gurugram, and Noida."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does an AI voice agent improve speed to lead for Delhi NCR real estate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "When a buyer submits a lead form on Meta, Google Ads, or 99acres for luxury property in Gurugram or South Delhi, DestiX AI triggers an automated outbound call in under 45 seconds while the buyer is still holding their phone, pre-qualifying budget and scheduling a site visit instantly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI voice agents speak Hindi and Hinglish?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI models support real-time code-switching between formal English, colloquial Hindi, and urban North Indian Hinglish, perfectly calibrated for Delhi NCR caller demographics."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the cost of deploying an AI voice agent in Delhi NCR?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enterprise setups range between ₹35,000 and ₹1,50,000 depending on custom CRM workflows, with raw telephony at approximately ₹4 to ₹8 per conversation minute with zero markup."
                    }
                  }
                ]
              },
              {
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
                    "name": "Best AI Voice Agents in Delhi NCR",
                    "item": "https://ayush.company/locations/delhi-ncr/ai-voice-agents"
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