import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions & Keyword Directory (100+ Enterprise Capabilities) | DestiX AI",
  description:
    "Master capability taxonomy covering 100+ autonomous AI voice, real estate automation, Delhi NCR telephony, and CRM workflow solutions engineered by Ayush Meena at DestiX AI.",
  keywords: [
    "real estate automation",
    "ai voice agent",
    "ai voice agent for real estate",
    "ai voice agent in delhi",
    "ai voice agent in delhi ncr",
    "best ai voice agent",
    "speed to lead real estate",
    "real estate lead qualification ai",
    "autonomous voice agent",
    "ai phone answering service",
    "voice receptionist delhi",
    "clinic appointment ai",
    "whatsapp crm automation",
    "sub-500ms voice ai",
    "destix ai capabilities",
  ],
  alternates: {
    canonical: "https://ayush.company/solutions",
  },
  openGraph: {
    title: "AI Solutions & Keyword Directory (100+ Enterprise Capabilities) | DestiX AI",
    description:
      "Explore 100+ production-grade AI solutions across real estate automation, low-latency voice telephony, Delhi NCR regional corridors, and high-ticket CRM workflows.",
    url: "https://ayush.company/solutions",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
      images: [
      {
        url: "https://ayush.company/api/og?title=AI%20Solutions%20%26%20Keyword%20Directory%20%28100%2B%20Enterprise%20Ca...&category=Autonomous%20Voice&badge=Enterprise%20Parity",
        width: 1200,
        height: 630,
        alt: "AI Solutions & Keyword Directory (100+ Enterprise Ca...",
      },
    ],
  },
};

export default function SolutionsLayout({
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
                    "name": "Solutions Directory",
                    "item": "https://ayush.company/solutions",
                  },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": "https://ayush.company/solutions#collection",
                "name": "DestiX AI Enterprise Solutions & Capability Taxonomy",
                "url": "https://ayush.company/solutions",
                "description":
                  "Comprehensive index of 100+ verified conversational AI, real estate automation, and regional telephony capabilities delivered by DestiX AI.",
                "publisher": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "founder": {
                    "@type": "Person",
                    "name": "Ayush Meena",
                    "url": "https://ayush.company/about",
                  },
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
