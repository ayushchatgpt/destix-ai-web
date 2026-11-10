import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Case Studies & Verified Deployment Audits | DestiX AI",
  description:
    "Explore audited operational case studies from DestiX AI: Alliance Capital Properties (AED 85M+ pipeline), Pranav Jha Studio, DigiiRox 3D, and Birch Stays luxury vacation network. Verified metrics with zero hypothetical claims.",
  keywords: [
    "destix ai case studies",
    "real estate voice agent case study",
    "ai voice agent deployment proof",
    "alliance capital properties dubai ai",
    "pranav jha studio",
    "birch stays voice agent",
    "ayush meena client proof",
  ],
  alternates: {
    canonical: "https://ayush.company/case-studies",
  },
  openGraph: {
    title: "Client Case Studies & Verified Deployment Audits | DestiX AI",
    description:
      "Real enterprise deployments and unscripted commercial outcomes across luxury real estate, healthcare triage, and spatial 3D WebGL.",
    url: "https://ayush.company/case-studies",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Verified Client Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Verified Deployment Audits | DestiX AI",
    description:
      "Real enterprise deployments and unscripted commercial outcomes. Verified metrics across real estate, hospitality, and web architecture.",
    images: ["https://ayush.company/opengraph-image.png"],
    creator: "@ayushmeena",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ayush.company/case-studies/#webpage",
        "url": "https://ayush.company/case-studies",
        "name": "DestiX AI Client Case Studies & Deployment Audits",
        "description": "Verified operational case studies and telemetry audits across luxury real estate, healthcare triage, and spatial WebGL architecture.",
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
              "name": "Case Studies",
              "item": "https://ayush.company/case-studies",
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
