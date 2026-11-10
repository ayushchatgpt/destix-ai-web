import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Operating System & CRM Synchronization | DestiX AI",
  description:
    "Autonomous operational workflows connecting telephony, CRM (HubSpot, Salesforce, GoHighLevel), WhatsApp Business API, and database records into one synchronized pipeline.",
  keywords: [
    "enterprise ai os",
    "ai crm synchronization",
    "hubspot voice ai integration",
    "autonomous whatsapp sales pipeline",
    "destix ai automation",
  ],
  alternates: {
    canonical: "https://ayush.company/services/ai-os",
  },
  openGraph: {
    title: "Enterprise AI Operating System & CRM Synchronization | DestiX AI",
    description:
      "Full-stack operational plumbing: instant WhatsApp dispatch, 2-second CRM updates, and self-healing n8n orchestration.",
    url: "https://ayush.company/services/ai-os",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise AI Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Operating System & CRM Synchronization | DestiX AI",
    description:
      "Autonomous backend workflows connecting phone calls, CRMs, and messaging channels in real time.",
    images: ["https://ayush.company/opengraph-image.png"],
    creator: "@ayushmeena",
  },
};

export default function ServicesAiOsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ayush.company/services/ai-os/#service",
        "name": "Enterprise AI Operating System & CRM Sync",
        "serviceType": "Operational Workflow Automation",
        "provider": {
          "@id": "https://ayush.company/#organization",
        },
        "description": "Deterministic CRM integration, automated WhatsApp triggers, and vector knowledge memory for enterprise teams.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayush.company/services/ai-os/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ayush.company",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://ayush.company/solutions",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Operating System",
            "item": "https://ayush.company/services/ai-os",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
