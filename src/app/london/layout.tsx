import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in London & UK | DestiX AI (Sub-435ms)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in London with DestiX AI. Purpose-built for Mayfair, Knightsbridge & Kensington prime real estate, Canary Wharf fintech, and Harley Street clinics. Sub-435ms voice parity, +44 20 London DIDs, BT SIP trunking, and full Ofcom & UK GDPR compliance.",
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    "ICBM": "51.5074, -0.1278",
  },
  keywords: [
    "AI voice agents in London",
    "AI voice agents London",
    "AI voice agent London",
    "AI agency London",
    "AI receptionist London",
    "AI for London real estate",
    "AI for estate agents London",
    "Mayfair AI voice",
    "Canary Wharf AI",
    "City of London AI voice agent",
    "AI automation London",
    "DestiX AI London",
    "best AI voice agent London",
    "Ofcom compliant AI",
    "GDPR AI voice UK",
  ],
  alternates: {
    canonical: "https://ayush.company/london",
  },
  openGraph: {
    title: "Best AI Voice Agents in London | DestiX AI",
    description:
      "Enterprise autonomous voice AI telephony for London prime real estate, Canary Wharf fintech, Harley Street clinics, and Shoreditch SaaS. Sub-435ms voice parity, +44 20 DIDs, BT SIP trunking, and Ofcom/GDPR compliance.",
    url: "https://ayush.company/london",
    siteName: "DestiX AI",
    locale: "en_GB",
    type: "website",
  },
};

export default function LondonRootLayout({
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
                "@id": "https://ayush.company/london/#service",
                "name": "Best AI Voice Agent Agency in London | DestiX AI",
                "alternateName": [
                  "DestiX AI London",
                  "AI Voice Agent London",
                  "London AI Voice Agency",
                  "AI Voice Receptionist London",
                  "Mayfair & Canary Wharf AI Voice Telephony",
                  "Ofcom Compliant AI Voice UK"
                ],
                "url": "https://ayush.company/london",
                "telephone": "+918319699748",
                "email": "ayushmeenadestixai@gmail.com",
                "founder": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "url": "https://ayush.company/about",
                  "sameAs": [
                    "https://www.linkedin.com/in/ayush-meena-destixai",
                    "https://github.com/ayushchatgpt"
                  ]
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1 Canada Square, Canary Wharf",
                  "addressLocality": "London",
                  "postalCode": "E14 5AA",
                  "addressCountry": "GB"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "51.5074",
                  "longitude": "-0.1278"
                },
                "areaServed": [
                  { "@type": "City", "name": "London" },
                  { "@type": "AdministrativeArea", "name": "Greater London" },
                  { "@type": "Country", "name": "United Kingdom" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "24",
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
                "@id": "https://ayush.company/london/#breadcrumb",
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
                    "name": "London",
                    "item": "https://ayush.company/london"
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
