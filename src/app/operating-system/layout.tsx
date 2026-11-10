import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DestiX Operating System | Full-Stack Enterprise Voice & CRM Automation",
  description:
    "Explore the DestiX Autonomous Operating System: Telephony Carrier Layer, Realtime Conversational Engine, Deterministic CRM Synchronization, and Autonomous WhatsApp Dispatch.",
  keywords: [
    "destix operating system",
    "ai voice operating system",
    "realtime telephony infrastructure",
    "voice crm architecture",
    "ayush meena destix ai",
  ],
  alternates: {
    canonical: "https://ayush.company/operating-system",
  },
  openGraph: {
    title: "DestiX Operating System | Full-Stack Enterprise Voice & CRM Automation",
    description:
      "The complete architectural blueprint connecting phone lines, AI speech inference, and enterprise CRM records.",
    url: "https://ayush.company/operating-system",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX Operating System Blueprint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DestiX Operating System | Enterprise AI Telephony & Automation",
    description:
      "Complete technical architecture: carrier routes, sub-500ms audio streaming, and bidirectional CRM syncing.",
    images: ["https://ayush.company/opengraph-image.png"],
    creator: "@ayushmeena",
  },
};

export default function OperatingSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://ayush.company/operating-system/#software",
        "name": "DestiX Autonomous Operating System",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud-Native / Linux / Vercel Edge",
        "provider": {
          "@id": "https://ayush.company/#organization",
        },
        "description": "Full-stack enterprise AI telephony and CRM synchronization operating system engineered by DestiX AI.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayush.company/operating-system/#breadcrumb",
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
            "name": "Operating System",
            "item": "https://ayush.company/operating-system",
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
