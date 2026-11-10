import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Playbooks & Architecture Blueprints | DestiX AI",
  description:
    "Explore 6 field-tested production blueprints for autonomous AI voice agents: Real Estate HNI Screening, Healthcare Patient Triage, High-Ticket B2B Sales, Luxury Hospitality, Abandoned Cart Recovery, and Agency White-Label.",
  keywords: [
    "ai voice agent playbooks",
    "voice agent prompt scripts",
    "real estate calling blueprint",
    "clinic voice triage workflow",
    "b2b inbound sales qualifier",
    "destix ai architecture blueprints",
  ],
  alternates: {
    canonical: "https://ayush.company/playbooks",
  },
  openGraph: {
    title: "Production Playbooks & Architecture Blueprints | DestiX AI",
    description:
      "Six production blueprints that drive measurable revenue. Full operational workflows, verbatim conversation transcripts, and CRM synchronization schemas.",
    url: "https://ayush.company/playbooks",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Production Playbooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Playbooks & Architecture Blueprints | DestiX AI",
    description:
      "Six field-tested voice agent workflows for real estate, healthcare, B2B advisory, and luxury hospitality.",
    images: ["https://ayush.company/opengraph-image.png"],
    creator: "@ayushmeena",
  },
};

export default function PlaybooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ayush.company/playbooks/#webpage",
        "url": "https://ayush.company/playbooks",
        "name": "DestiX AI Production Voice Playbooks & Blueprints",
        "description": "Six verified commercial voice agent architectures with live dialog transcripts and CRM schemas.",
        "isPartOf": {
          "@id": "https://ayush.company/#website",
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
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
              "name": "Playbooks & Blueprints",
              "item": "https://ayush.company/playbooks",
            },
          ],
        },
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
