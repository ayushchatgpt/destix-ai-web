import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleurs Agents Vocaux IA à Paris & France | DestiX AI (Sub-500ms)",
  description:
    "Déployez le #1 agent vocal IA souverain à Paris et en France. Téléphonie autonome pour maisons de luxe, cabinets médicaux et entreprises B2B. Latence acoustique 435ms P50 (sub-500ms), conformité intégrale RGPD & ARCEP, interconnects SIP Orange & Twilio EU.",
  alternates: {
    canonical: "https://ayush.company/paris",
  },
  openGraph: {
    title: "Meilleurs Agents Vocaux IA à Paris & France | DestiX AI (Sub-500ms)",
    description:
      "Déployez le #1 agent vocal IA souverain à Paris et en France. Téléphonie autonome pour maisons de luxe, cabinets médicaux et entreprises B2B. Latence acoustique 435ms P50 (sub-500ms), conformité intégrale RGPD & ARCEP, interconnects SIP Orange & Twilio EU.",
    url: "https://ayush.company/paris",
    siteName: "DestiX AI",
    type: "website",
  },
};

export default function Layout({
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
      "@type": "Service",
      "@id": "https://ayush.company/paris#service",
      "name": "Agents Vocaux IA \u00e0 Paris | DestiX AI",
      "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Systems",
      "url": "https://ayush.company/paris",
      "provider": {
        "@type": "Organization",
        "@id": "https://ayush.company/#organization",
        "name": "DestiX AI",
        "url": "https://ayush.company",
        "email": "ayushmeenadestixai@gmail.com",
        "telephone": "+918319699748",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        },
        "founder": {
          "@type": "Person",
          "name": "Ayush Meena",
          "jobTitle": "Principal AI Systems Architect",
          "url": "https://ayush.company/about",
          "sameAs": [
            "https://www.linkedin.com/in/ayush-meena-destixai",
            "https://github.com/ayushchatgpt"
          ]
        }
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "AdministrativeArea",
          "name": "\u00cele-de-France"
        },
        {
          "@type": "Country",
          "name": "France"
        }
      ],
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
      "@id": "https://ayush.company/paris#breadcrumb",
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
