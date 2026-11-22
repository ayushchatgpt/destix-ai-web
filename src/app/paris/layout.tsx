import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleurs Agents Vocaux IA à Paris & France | DestiX AI (Sub-400ms)",
  description:
    "Déployez le #1 agent vocal IA souverain à Paris et en France. Téléphonie autonome pour maisons de luxe, cabinets médicaux et entreprises B2B. Latence acoustique sub-400ms, conformité intégrale RGPD & ARCEP, interconnects SIP Orange & Twilio EU.",
  other: {
    "geo.region": "FR-IDF",
    "geo.placename": "Paris",
    "geo.position": "48.8566;2.3522",
    "ICBM": "48.8566, 2.3522",
  },
  keywords: [
    "agent vocal IA Paris",
    "agents vocaux IA Paris",
    "meilleur agent vocal IA France",
    "callbot IA Paris",
    "standardiste IA Paris",
    "intelligence artificielle vocale France",
    "DestiX AI Paris",
    "agent téléphonique IA RGPD",
  ],
  alternates: {
    canonical: "https://ayush.company/paris",
  },
  openGraph: {
    title: "Meilleurs Agents Vocaux IA à Paris | DestiX AI",
    description:
      "Agents vocaux IA souverains et callbots intelligents à Paris et en France. Latence record sub-400ms, hébergement souverain EU et conformité RGPD.",
    url: "https://ayush.company/paris",
    siteName: "DestiX AI",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ParisRootLayout({
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
                "@id": "https://ayush.company/paris/#service",
                "name": "Meilleure Agence d'Agents Vocaux IA à Paris | DestiX AI",
                "alternateName": [
                  "DestiX AI Paris",
                  "Agent Vocal IA Paris",
                  "Callbot IA France",
                  "Standardiste IA Paris"
                ],
                "url": "https://ayush.company/paris",
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
                  "streetAddress": "Champs-Élysées",
                  "addressLocality": "Paris",
                  "postalCode": "75008",
                  "addressCountry": "FR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "48.8566",
                  "longitude": "2.3522"
                },
                "areaServed": [
                  { "@type": "City", "name": "Paris" },
                  { "@type": "AdministrativeArea", "name": "Île-de-France" },
                  { "@type": "Country", "name": "France" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "19",
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
                "@id": "https://ayush.company/paris/#breadcrumb",
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
                    "name": "Paris",
                    "item": "https://ayush.company/paris"
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
