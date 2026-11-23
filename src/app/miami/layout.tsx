import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Bilingual AI Voice Agents in Miami & South Florida | DestiX AI",
  description:
    "Deploy autonomous English-Spanish bilingual AI voice receptionists and outbound telephony in Miami, Brickell, Coral Gables, and Palm Beach. Sub-500ms (435ms P50) streaming conversational agents for South Florida luxury real estate, aesthetic medical clinics, and wealth management practices.",
  alternates: {
    canonical: "https://ayush.company/miami",
  },
  openGraph: {
    title: "Best Bilingual AI Voice Agents in Miami & South Florida | DestiX AI",
    description:
      "Deploy autonomous English-Spanish bilingual AI voice receptionists and outbound telephony in Miami, Brickell, Coral Gables, and Palm Beach. Sub-500ms (435ms P50) streaming conversational agents for South Florida luxury real estate, aesthetic medical clinics, and wealth management practices.",
    url: "https://ayush.company/miami",
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
      "@id": "https://ayush.company/miami#service",
      "name": "Bilingual AI Voice Agents in Miami | DestiX AI",
      "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Systems",
      "url": "https://ayush.company/miami",
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
          "@type": "City",
          "name": "Miami"
        },
        {
          "@type": "AdministrativeArea",
          "name": "South Florida"
        },
        {
          "@type": "Country",
          "name": "United States"
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
      "@id": "https://ayush.company/miami#breadcrumb",
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
