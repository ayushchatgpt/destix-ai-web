import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Vocal IA Paris & France | DestiX AI (Sub-400ms & RGPD)",
  description:
    "Déployez le meilleur agent vocal IA d'entreprise en France. Standard téléphonique autonome, qualification de leads instantanée et prise de rendez-vous CRM 24/7. Latence record sub-400ms, numéros français +33 et conformité totale RGPD / ARCEP.",
  other: {
    "geo.region": "FR",
    "geo.placename": "France",
    "geo.position": "46.2276;2.2137",
    "ICBM": "46.2276, 2.2137",
  },
  keywords: [
    "agent vocal IA",
    "agents vocaux IA",
    "agent vocal IA Paris",
    "agent vocal IA France",
    "callbot entreprise France",
    "standardiste IA",
    "standard téléphonique IA",
    "DestiX AI France",
  ],
  alternates: {
    canonical: "https://ayush.company/fr/agent-vocal-ia",
  },
  openGraph: {
    title: "Agent Vocal IA Paris & France | DestiX AI",
    description:
      "Agents vocaux IA souverains et callbots intelligents à Paris et en France. Latence record sub-400ms, hébergement souverain EU et conformité RGPD.",
    url: "https://ayush.company/fr/agent-vocal-ia",
    siteName: "DestiX AI",
    locale: "fr_FR",
    type: "website",
  },
};

export default function FrenchAgentVocalLayout({
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
                "@id": "https://ayush.company/fr/agent-vocal-ia/#service",
                "name": "Meilleur Agent Vocal IA en France | DestiX AI",
                "alternateName": [
                  "DestiX AI France",
                  "Agent Vocal IA Paris",
                  "Callbot IA France",
                  "Standardiste IA"
                ],
                "url": "https://ayush.company/fr/agent-vocal-ia",
                "telephone": "+918319699748",
                "email": "ayushmeenadestixai@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Champs-Élysées",
                  "addressLocality": "Paris",
                  "postalCode": "75008",
                  "addressCountry": "FR"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "France"
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
                "@id": "https://ayush.company/fr/agent-vocal-ia/#breadcrumb",
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
                    "name": "Agent Vocal IA",
                    "item": "https://ayush.company/fr/agent-vocal-ia"
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
