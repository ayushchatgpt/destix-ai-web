import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Vocal IA Paris & France | DestiX AI (Sub-500ms & RGPD)",
  description:
    "Déployez le meilleur agent vocal IA d'entreprise en France. Standard téléphonique autonome, qualification de leads instantanée et prise de rendez-vous CRM 24/7. Latence record 435ms P50 (sub-500ms), numéros français +33 et conformité totale RGPD / ARCEP.",
  alternates: {
    canonical: "https://ayush.company/fr/agent-vocal-ia",
  },
  openGraph: {
    title: "Agent Vocal IA Paris & France | DestiX AI (Sub-500ms & RGPD)",
    description:
      "Déployez le meilleur agent vocal IA d'entreprise en France. Standard téléphonique autonome, qualification de leads instantanée et prise de rendez-vous CRM 24/7. Latence record 435ms P50 (sub-500ms), numéros français +33 et conformité totale RGPD / ARCEP.",
    url: "https://ayush.company/fr/agent-vocal-ia",
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
      "@id": "https://ayush.company/fr/agent-vocal-ia#service",
      "name": "Agent Vocal IA en France | DestiX AI",
      "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Systems",
      "url": "https://ayush.company/fr/agent-vocal-ia",
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
      "@id": "https://ayush.company/fr/agent-vocal-ia#breadcrumb",
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
