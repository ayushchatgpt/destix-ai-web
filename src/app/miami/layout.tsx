import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Bilingual AI Voice Agents in Miami & South Florida | DestiX AI",
  description:
    "Deploy the #1 autonomous English-Spanish bilingual AI voice receptionists and outbound telephony in Miami, Brickell, Coral Gables, and Palm Beach. Sub-435ms streaming conversational agents for South Florida luxury real estate, aesthetic medical clinics, and wealth management practices.",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Miami",
    "geo.position": "25.7617;-80.1918",
    "ICBM": "25.7617, -80.1918",
  },
  keywords: [
    "AI voice agents in Miami",
    "AI voice agents Miami",
    "AI voice agent Miami",
    "bilingual AI voice agent Miami",
    "Spanish AI receptionist Miami",
    "Brickell AI agency",
    "Miami real estate AI voice agent",
    "Miami plastic surgery AI receptionist",
    "DestiX AI Miami",
    "best AI voice agent Miami Florida",
  ],
  alternates: {
    canonical: "https://ayush.company/miami",
  },
  openGraph: {
    title: "Best Bilingual AI Voice Agents in Miami & South Florida | DestiX AI",
    description:
      "Autonomous English-Spanish voice AI telephony for Miami luxury real estate, Brickell wealth desks, and aesthetic surgical centers. Sub-435ms latency and instant CRM booking.",
    url: "https://ayush.company/miami",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
};

export default function MiamiRootLayout({
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
                "@id": "https://ayush.company/miami/#service",
                "name": "Best Bilingual AI Voice Agent Agency in Miami | DestiX AI",
                "alternateName": [
                  "DestiX AI Miami",
                  "AI Voice Agent Miami",
                  "Miami Bilingual AI Receptionist",
                  "Brickell AI Voice Telephony"
                ],
                "url": "https://ayush.company/miami",
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
                  "streetAddress": "Brickell Avenue",
                  "addressLocality": "Miami",
                  "addressRegion": "FL",
                  "postalCode": "33131",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "25.7617",
                  "longitude": "-80.1918"
                },
                "areaServed": [
                  { "@type": "City", "name": "Miami" },
                  { "@type": "AdministrativeArea", "name": "South Florida" },
                  { "@type": "Country", "name": "United States" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "21",
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
                "@id": "https://ayush.company/miami/#breadcrumb",
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
                    "name": "Miami",
                    "item": "https://ayush.company/miami"
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
