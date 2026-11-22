import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Enterprise AI Voice Agents in the United States | DestiX AI",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents across the USA. Sub-435ms voice latency, local US DIDs across 50 states, FCC/TCPA compliance, Twilio & Telnyx wholesale carrier interconnects, and private VPC deployment.",
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "geo.position": "37.0902;-95.7129",
    "ICBM": "37.0902, -95.7129",
  },
  keywords: [
    "AI voice agents US",
    "AI voice agents USA",
    "best AI voice agents United States",
    "enterprise AI voice US",
    "AI call center software US",
    "TCPA compliant AI voice",
    "DestiX AI US",
  ],
  alternates: {
    canonical: "https://ayush.company/us",
  },
  openGraph: {
    title: "Best Enterprise AI Voice Agents in the USA | DestiX AI",
    description:
      "Enterprise autonomous voice AI telephony across the US. Sub-435ms voice parity, wholesale carrier routing, and 100% client code ownership.",
    url: "https://ayush.company/us",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
};

export default function USRootLayout({
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
                "@id": "https://ayush.company/us/#service",
                "name": "Best Enterprise AI Voice Agent Agency in the USA | DestiX AI",
                "alternateName": [
                  "DestiX AI USA",
                  "AI Voice Agents USA",
                  "US AI Voice Agency"
                ],
                "url": "https://ayush.company/us",
                "telephone": "+918319699748",
                "email": "ayushmeenadestixai@gmail.com",
                "areaServed": {
                  "@type": "Country",
                  "name": "United States"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "28",
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
                "@id": "https://ayush.company/us/#breadcrumb",
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
                    "name": "USA",
                    "item": "https://ayush.company/us"
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
