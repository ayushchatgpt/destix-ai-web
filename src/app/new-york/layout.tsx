import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in New York City (NYC & Wall St) | DestiX AI",
  description:
    "Deploy the #1 enterprise AI voice agents in New York City. Engineered for Wall Street wealth advisory, Manhattan ultra-luxury real estate brokerages, and corporate legal desks. Local +1 212, 646 DIDs, sub-410ms latency, and SEC/FINRA compliant voice workflows.",
  other: {
    "geo.region": "US-NY",
    "geo.placename": "New York",
    "geo.position": "40.7128;-74.0060",
    "ICBM": "40.7128, -74.0060",
  },
  keywords: [
    "AI voice agents in New York",
    "AI voice agents NYC",
    "AI voice agent New York City",
    "Manhattan AI agency",
    "Wall Street voice AI",
    "NYC real estate AI voice agent",
    "DestiX AI New York",
  ],
  alternates: {
    canonical: "https://ayush.company/new-york",
  },
  openGraph: {
    title: "Best AI Voice Agents in New York City | DestiX AI",
    description:
      "Enterprise autonomous voice AI telephony for Manhattan prime real estate and Wall Street financial services. Sub-410ms voice parity and FINRA compliance.",
    url: "https://ayush.company/new-york",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
};

export default function NewYorkRootLayout({
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
                "@id": "https://ayush.company/new-york/#service",
                "name": "Best AI Voice Agent Agency in New York City | DestiX AI",
                "alternateName": [
                  "DestiX AI NYC",
                  "AI Voice Agents NYC",
                  "Manhattan AI Voice Agency"
                ],
                "url": "https://ayush.company/new-york",
                "telephone": "+918319699748",
                "email": "ayushmeenadestixai@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Wall Street",
                  "addressLocality": "New York",
                  "addressRegion": "NY",
                  "postalCode": "10005",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.7128",
                  "longitude": "-74.0060"
                },
                "areaServed": [
                  { "@type": "City", "name": "New York" },
                  { "@type": "AdministrativeArea", "name": "Manhattan" },
                  { "@type": "Country", "name": "United States" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "26",
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
                "@id": "https://ayush.company/new-york/#breadcrumb",
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
                    "name": "New York",
                    "item": "https://ayush.company/new-york"
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
