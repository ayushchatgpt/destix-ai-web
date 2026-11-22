import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleurs Agents Vocaux IA en France | DestiX AI (Conforme RGPD & ARCEP)",
  description:
    "Déployez les agents vocaux IA leaders en France avec DestiX AI. Téléphonie d'entreprise souveraine, latence acoustique sub-400ms, numéros français +33, interconnects SIP sécurisés et conformité stricte RGPD / AI Act européen.",
  other: {
    "geo.region": "FR",
    "geo.placename": "France",
    "geo.position": "46.2276;2.2137",
    "ICBM": "46.2276, 2.2137",
  },
  keywords: [
    "agent vocal IA France",
    "agents vocaux IA France",
    "meilleurs agents vocaux IA France",
    "callbot IA France",
    "standardiste virtuel IA",
    "téléphonie IA France",
    "DestiX AI France",
  ],
  alternates: {
    canonical: "https://ayush.company/france",
  },
  openGraph: {
    title: "Meilleurs Agents Vocaux IA en France | DestiX AI",
    description:
      "Agents vocaux IA souverains et callbots intelligents en France. Latence record sub-400ms, hébergement souverain EU et conformité RGPD.",
    url: "https://ayush.company/france",
    siteName: "DestiX AI",
    locale: "fr_FR",
    type: "website",
  },
};

export default function FranceRootLayout({
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
                "@id": "https://ayush.company/france/#service",
                "name": "Meilleurs Agents Vocaux IA en France | DestiX AI",
                "alternateName": [
                  "DestiX AI France",
                  "Agent Vocal IA France",
                  "Callbot IA France"
                ],
                "url": "https://ayush.company/france",
                "telephone": "+918319699748",
                "email": "ayushmeenadestixai@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Champs-Élysées",
                  "addressLocality": "Paris",
                  "addressCountry": "FR"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "France"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "22",
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
                "@id": "https://ayush.company/france/#breadcrumb",
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
                    "name": "France",
                    "item": "https://ayush.company/france"
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
