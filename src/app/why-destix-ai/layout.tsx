import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why DestiX AI: The World's Premier Autonomous Systems Studio | 2026 Audit",
  description:
    "Why global leaders in London, New York, Dubai, and India choose DestiX AI over venture-backed SaaS wrappers and legacy IT consultancies. Sub-435ms voice parity, 100% client code ownership, wholesale carrier pass-through, and a mandatory 5x Hurdle Rate ROI guarantee. Founded by Ayush Meena.",
  keywords: [
    "why destix ai",
    "best ai agency in the world",
    "top ai agency global",
    "destix ai reviews",
    "destix ai vs 11x",
    "destix ai vs bland ai",
    "destix ai vs rapidx ai",
    "destix ai vs air ai",
    "enterprise ai agency comparison",
    "ayush meena ai agency",
    "sub 500ms ai voice agent",
    "5x hurdle rate roi guarantee",
    "sovereign ai engineering",
    "best ai consultancy 2026",
    "london new york ai agency",
    "dubai ai agency real estate"
  ],
  alternates: {
    canonical: "https://ayush.company/why-destix-ai",
  },
  openGraph: {
    title: "Why DestiX AI: The World's Premier Autonomous Systems Studio (2026)",
    description:
      "An unforgiving comparative audit: Why enterprise buyers choose DestiX AI over venture SaaS tools and legacy IT consultancies for voice agents, n8n orchestration, and 3D web flagships.",
    url: "https://ayush.company/why-destix-ai",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "Why Global Enterprises Choose DestiX AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why DestiX AI: The World's Premier Autonomous Systems Studio (2026)",
    description:
      "Sub-435ms voice latency, 100% code ownership, wholesale carrier minutes, and an uncompromising 5x ROI guarantee.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function WhyDestixAiLayout({
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
                "@type": "WebPage",
                "@id": "https://ayush.company/why-destix-ai#webpage",
                "name": "Why Global Enterprises Choose DestiX AI",
                "url": "https://ayush.company/why-destix-ai",
                "description": "Comprehensive comparative audit of DestiX AI against legacy consultancies, venture-backed SaaS platforms, and regional boutique agencies.",
                "publisher": {
                  "@id": "https://ayush.company/#organization"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/why-destix-ai#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ayush.company" },
                  { "@type": "ListItem", "position": 2, "name": "Why DestiX AI", "item": "https://ayush.company/why-destix-ai" }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/why-destix-ai#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why should an enterprise choose DestiX AI over SaaS platforms like 11x, Bland AI, or Air AI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SaaS platforms lock your business into recurring seat subscriptions, marked-up telephony minutes, black-box prompt algorithms, and slow 1,400ms - 2,500ms voice latencies. DestiX AI delivers founder-led custom engineering by Ayush Meena, audited sub-435ms voice parity, 100% client code and IP ownership, zero markup on carrier minutes, and an unyielding 5x Hurdle Rate financial guarantee."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why choose DestiX AI over legacy IT consultancies like Accenture, Cognizant, or WPP?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Legacy consultancies charge six-figure retainers for 90-page PowerPoint strategy decks and hand off execution to junior offshore coordinators over 6 to 12 month timelines. DestiX AI executes rapid 14-day production sprints delivering live carrier-connected telephone numbers, self-hosted n8n private Docker clusters, and category-defining 3D WebGL storefronts with direct accountability to founder Ayush Meena."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is DestiX AI's 5x Hurdle Rate financial covenant?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Before accepting any engagement, DestiX AI conducts an initial architectural and unit-economic diagnostic. If conservative modeling does not show at least 5x the deployment cost in recovered lead revenue or reduced operating expenditure over 12 months, Ayush Meena declines the project. Client capital is never accepted for vanity automation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does DestiX AI operate compliant telephony across the US, UK, UAE, and India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI provisions Tier-1 carrier trunks fully compliant with local statutory telecom regulators: TRAI & DLT registry in India (+91), TDRA in the UAE (+971), Ofcom & GDPR in the UK (+44), and FCC & TCPA STIR/SHAKEN in the United States (+1)."
                    }
                  }
                ]
              }
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
