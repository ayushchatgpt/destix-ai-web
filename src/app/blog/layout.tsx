import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Intelligence & Operational Engineering Blog | DestiX AI",
  description:
    "Engineering insights, telephony benchmark audits, pricing analyses, and deployment guides for autonomous AI voice agents and CRM automation in India and globally.",
  keywords: [
    "ai voice agent blog",
    "voice ai engineering insights",
    "delhi ncr ai telecalling guides",
    "real estate voice agent benchmarks",
    "destix ai intelligence",
  ],
  alternates: {
    canonical: "https://ayush.company/blog",
  },
  openGraph: {
    title: "AI Voice Intelligence & Operational Engineering Blog | DestiX AI",
    description:
      "Field-tested engineering telemetry, cost comparisons, and deployment blueprints from DestiX AI private practice.",
    url: "https://ayush.company/blog",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Research & Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Intelligence & Operational Engineering Blog | DestiX AI",
    description:
      "Deep technical audits, pricing breakdowns, and real estate telephony guides from DestiX AI.",
    images: ["https://ayush.company/opengraph-image.png"],
    creator: "@ayushmeena",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://ayush.company/blog/#blog",
        "name": "DestiX AI Research & Intelligence",
        "description": "Technical field guides, operational cost models, and voice latency audits for enterprise AI systems.",
        "publisher": {
          "@id": "https://ayush.company/#organization",
        },
        "inLanguage": "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayush.company/blog/#breadcrumb",
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
            "name": "Blog & Intelligence",
            "item": "https://ayush.company/blog",
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
