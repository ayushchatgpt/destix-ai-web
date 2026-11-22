import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in the UK | DestiX AI (Ofcom & UK GDPR Compliant)",
  description:
    "Deploy the UK's leading enterprise autonomous AI voice agents with DestiX AI. Carrier-grade British RP voice telephony, +44 geographic DIDs, BT & Gamma SIP interconnects, TPS scrubbing, and sovereign UK data residency.",
  other: {
    "geo.region": "GB",
    "geo.placename": "United Kingdom",
    "geo.position": "55.3781;-3.4360",
    "ICBM": "55.3781, -3.4360",
  },
  keywords: [
    "AI voice agents UK",
    "AI voice agent UK",
    "best AI voice agents UK",
    "AI call center UK",
    "AI receptionist UK",
    "Ofcom compliant AI",
    "UK GDPR AI voice",
    "DestiX AI UK",
  ],
  alternates: {
    canonical: "https://ayush.company/uk",
  },
  openGraph: {
    title: "Best AI Voice Agents in the UK | DestiX AI",
    description:
      "Enterprise autonomous voice AI telephony across the UK. Sub-435ms voice parity, British English accents, BT interconnects, and full Ofcom compliance.",
    url: "https://ayush.company/uk",
    siteName: "DestiX AI",
    locale: "en_GB",
    type: "website",
  },
};

export default function UKRootLayout({
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
                "@type": "ProfessionalService",
                "@id": "https://ayush.company/uk/#service",
                "name": "Best AI Voice Agent Agency in the United Kingdom | DestiX AI",
                "alternateName": [
                  "DestiX AI UK",
                  "AI Voice Agents UK",
                  "UK AI Voice Agency"
                ],
                "url": "https://ayush.company/uk",
                "telephone": "+918319699748",
                "email": "ayushmeenadestixai@gmail.com",
                "areaServed": {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "25",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [
                    "h1",
                    ".aeo-direct-answer",
                    ".faq-lead-answer"
                  ]
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/uk/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "DestiX AI",
                    "item": "https://ayush.company"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "UK",
                    "item": "https://ayush.company/uk"
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
