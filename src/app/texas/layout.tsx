import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Enterprise AI Voice Agents in Texas (Austin, Dallas, Houston) | DestiX AI",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Texas with DestiX AI. Purpose-built for Austin tech scale-ups, Dallas healthcare systems, and Houston energy corridors. Sub-435ms voice latency, local +1 512, 214, 713 DIDs, wholesale SIP trunking, and full FCC / TCPA compliance.",
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Texas",
    "geo.position": "31.9686;-99.9018",
    "ICBM": "31.9686, -99.9018",
  },
  keywords: [
    "AI voice agents in Texas",
    "AI voice agents Texas",
    "AI voice agent Austin",
    "AI voice agent Dallas",
    "AI voice agent Houston",
    "Texas AI agency",
    "AI receptionist Texas",
    "TCPA compliant AI voice",
    "DestiX AI Texas",
  ],
  alternates: {
    canonical: "https://ayush.company/texas",
  },
  openGraph: {
    title: "Best Enterprise AI Voice Agents in Texas | DestiX AI",
    description:
      "Enterprise autonomous voice AI telephony for Austin tech, Dallas healthcare, and Houston commercial enterprises. Sub-435ms voice parity and TCPA compliance.",
    url: "https://ayush.company/texas",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
};

export default function TexasRootLayout({
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
                "@id": "https://ayush.company/texas/#service",
                "name": "Best Enterprise AI Voice Agent Agency in Texas | DestiX AI",
                "alternateName": [
                  "DestiX AI Texas",
                  "AI Voice Agent Texas",
                  "Austin AI Voice Agency",
                  "Dallas AI Voice Receptionist"
                ],
                "url": "https://ayush.company/texas",
                "telephone": "+918319699748",
                "email": "ayushmeenadestixai@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Austin",
                  "addressRegion": "TX",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "31.9686",
                  "longitude": "-99.9018"
                },
                "areaServed": [
                  { "@type": "State", "name": "Texas" },
                  { "@type": "City", "name": "Austin" },
                  { "@type": "City", "name": "Dallas" },
                  { "@type": "City", "name": "Houston" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "18",
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
                "@id": "https://ayush.company/texas/#breadcrumb",
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
                    "name": "Texas",
                    "item": "https://ayush.company/texas"
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
