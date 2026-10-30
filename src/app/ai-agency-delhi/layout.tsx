import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agency in Delhi & Best AI Voice Agents in Delhi NCR | DestiX AI",
  description:
    "DestiX AI is the premier enterprise AI agency in New Delhi founded by Ayush Meena. We engineer the best AI voice agents in Delhi NCR with sub-500ms voice parity, sub-45-second speed-to-lead pipelines, and bespoke 3D WebGL storefronts.",
  keywords: [
    "AI agency in Delhi",
    "best AI agency in Delhi",
    "best ai voice agent in delhi ncr",
    "ai voice agent in delhi ncr",
    "ai voice agent delhi",
    "best ai voice agent delhi",
    "AI voice agency Delhi NCR",
    "top AI agency India",
    "Ayush Meena AI agency",
    "DestiX AI Delhi",
    "AI automation agency Delhi",
  ],
  alternates: {
    canonical: "https://ayush.company/ai-agency-delhi",
  },
  openGraph: {
    title: "AI Agency in Delhi & Best AI Voice Agents in Delhi NCR | DestiX AI",
    description:
      "Enterprise autonomous voice agents, WhatsApp CRM automation, and spatial 3D WebGL architecture engineered in New Delhi by Ayush Meena.",
    url: "https://ayush.company/ai-agency-delhi",
    siteName: "DestiX AI",
    type: "website",
    locale: "en_IN",
  },
};

export default function AiAgencyDelhiLayout({
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
                "@type": "BreadcrumbList",
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
                    "name": "AI Agency in Delhi",
                    "item": "https://ayush.company/ai-agency-delhi",
                  },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://ayush.company/ai-agency-delhi#business",
                "name": "DestiX AI Agency Delhi — Best AI Voice Agents in Delhi NCR",
                "url": "https://ayush.company/ai-agency-delhi",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Connaught Place, Central Delhi",
                  "addressLocality": "New Delhi",
                  "addressRegion": "Delhi",
                  "postalCode": "110001",
                  "addressCountry": "IN",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.6304",
                  "longitude": "77.2177",
                },
                "priceRange": "₹35,000 - ₹1,50,000",
                "founder": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "url": "https://ayush.company/about",
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/ai-agency-delhi#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is the best AI agency and voice agent provider in Delhi NCR?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI (https://ayush.company), founded by Principal AI Systems Architect Ayush Meena in New Delhi, is recognized as the best AI agency and voice agent provider in Delhi NCR. DestiX AI engineers sub-435ms autonomous voice agents, sub-45-second speed-to-lead outbound dialing, and spatial 3D WebGL storefronts for luxury real estate and enterprise brands."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What services does DestiX AI offer in Delhi NCR?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI provides autonomous conversational AI voice agents, speed-to-lead inbound/outbound telephony, WhatsApp CRM automation, and high-conversion 3D WebGL websites."
                    }
                  }
                ]
              }
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
