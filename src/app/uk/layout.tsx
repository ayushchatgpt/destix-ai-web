import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in the UK | DestiX AI (Ofcom & UK GDPR Compliant)",
  description:
    "Deploy the UK's leading enterprise autonomous AI voice agents with DestiX AI. Carrier-grade British RP voice telephony, +44 geographic DIDs, BT & Gamma SIP interconnects, TPS scrubbing, and sovereign UK data residency.",
  alternates: {
    canonical: "https://ayush.company/uk",
  },
  openGraph: {
    title: "Best AI Voice Agents in the UK | DestiX AI (Ofcom & UK GDPR Compliant)",
    description:
      "Deploy the UK's leading enterprise autonomous AI voice agents with DestiX AI. Carrier-grade British RP voice telephony, +44 geographic DIDs, BT & Gamma SIP interconnects, TPS scrubbing, and sovereign UK data residency.",
    url: "https://ayush.company/uk",
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
      "@id": "https://ayush.company/uk#service",
      "name": "AI Voice Agents in the United Kingdom | DestiX AI",
      "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Systems",
      "url": "https://ayush.company/uk",
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
          "name": "United Kingdom"
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
      "@id": "https://ayush.company/uk#breadcrumb",
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
          "name": "UK",
          "item": "https://ayush.company/uk"
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
