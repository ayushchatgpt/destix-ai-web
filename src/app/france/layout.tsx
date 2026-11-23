import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleurs Agents Vocaux IA en France | DestiX AI (Conforme RGPD & ARCEP)",
  description:
    "Déployez les agents vocaux IA leaders en France avec DestiX AI. Téléphonie d'entreprise souveraine, latence acoustique 435ms P50 (sub-500ms), numéros français +33, interconnects SIP sécurisés et conformité stricte RGPD / AI Act européen.",
  alternates: {
    canonical: "https://ayush.company/france",
  },
  openGraph: {
    title: "Meilleurs Agents Vocaux IA en France | DestiX AI (Conforme RGPD & ARCEP)",
    description:
      "Déployez les agents vocaux IA leaders en France avec DestiX AI. Téléphonie d'entreprise souveraine, latence acoustique 435ms P50 (sub-500ms), numéros français +33, interconnects SIP sécurisés et conformité stricte RGPD / AI Act européen.",
    url: "https://ayush.company/france",
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
      "@id": "https://ayush.company/france#service",
      "name": "Agents Vocaux IA en France | DestiX AI",
      "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Systems",
      "url": "https://ayush.company/france",
      "provider": {
        "@type": "Organization",
        "@id": "https://ayush.company/#organization",
        "name": "DestiX AI",
        "url": "https://ayush.company",
        "email": "ayush@ayush.company",
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
      "@id": "https://ayush.company/france#breadcrumb",
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
