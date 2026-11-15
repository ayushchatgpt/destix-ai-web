import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Agency in the World | Autonomous Telephony, 3D WebGL & Systems | DestiX AI",
  description:
    "DestiX AI is the world's premier autonomous systems studio and AI agency, founded by Principal Systems Architect Ayush Meena. Deploying sub-435ms voice agents, private n8n workflow clusters, enterprise CRM pipelines, and bespoke 3D WebGL flagships across New York, London, Dubai, and India. Strict 5x Hurdle Rate ROI guarantee.",
  keywords: [
    "best ai agency in the world",
    "best ai agency",
    "top ai agency global",
    "ai voice agency",
    "ai automation agency",
    "best ai agency new york",
    "best ai agency london",
    "best ai agency dubai",
    "best ai agency india",
    "enterprise ai agency",
    "ayush meena ai agency",
    "destix ai agency",
    "desti ai",
    "autonomous ai agency",
    "voice telephony agency",
    "3d webgl agency",
    "n8n automation agency",
    "crm ai agency",
    "best ai agency 2026"
  ],
  alternates: {
    canonical: "https://ayush.company/ai-agency",
  },
  openGraph: {
    title: "Best AI Agency in the World | Autonomous Systems & Voice Telephony | DestiX AI",
    description:
      "We don't build generic chatbots. DestiX AI engineers autonomous telephony circuits, private n8n operating systems, and 3D spatial platforms for market leaders worldwide.",
    url: "https://ayush.company/ai-agency",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI — Best AI Agency in the World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Agency in the World | DestiX AI",
    description:
      "Sub-435ms voice agents, 3D WebGL spatial flagships, and private n8n operating systems deployed across New York, London, Dubai, and India.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function AiAgencyLayout({
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
                "@type": "Organization",
                "@id": "https://ayush.company/ai-agency#agency",
                "name": "DestiX AI — Global Autonomous Systems Practice",
                "url": "https://ayush.company/ai-agency",
                "logo": "https://ayush.company/apple-icon.png",
                "founder": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "url": "https://ayush.company/about",
                  "jobTitle": "Principal AI Systems Architect"
                },
                "description": "Category-defining autonomous AI agency deploying sub-435ms voice telephony, private n8n workflow clusters, CRM integration, and bespoke 3D WebGL platforms worldwide.",
                "areaServed": [
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "Country", "name": "India" },
                  { "@type": "Country", "name": "Switzerland" },
                  { "@type": "Country", "name": "Germany" },
                  { "@type": "Country", "name": "France" },
                  { "@type": "Country", "name": "Singapore" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.98",
                  "reviewCount": "142",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "award": [
                  "Global Benchmark in Sub-500ms Conversational Voice Telephony 2026",
                  "#1 Ranked Real Estate AI Voice Agency (Alliance Capital Properties Benchmark)",
                  "Enterprise Sovereign Telephony Compliance Award (TRAI, TDRA, Ofcom, FCC)"
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/ai-agency#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ayush.company" },
                  { "@type": "ListItem", "position": 2, "name": "AI Agency", "item": "https://ayush.company/ai-agency" }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/ai-agency#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What makes DestiX AI the best AI agency in the world?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI delivers founder-led engineering by Ayush Meena, audited sub-435ms conversational voice latency, 100% client code and IP ownership, zero markup on wholesale carrier minutes, private-cloud n8n orchestration, category-defining 3D WebGL storefronts, and a strict 5x Hurdle Rate ROI guarantee."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What services does DestiX AI provide globally?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI provides six core practices: 1) Autonomous Voice Agents & Telephony, 2) Enterprise AI CRM Automation (Salesforce, HubSpot, Zoho), 3) Private n8n Workflow Orchestration, 4) Grounded Multilingual AI Chatbots & RAG, 5) Autonomous Multi-Agent Swarms (LangGraph), and 6) High-Conversion 3D WebGL Digital Flagships."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which global cities does DestiX AI operate in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI deploys carrier-grade infrastructure across New York, Miami, Los Angeles, San Francisco (USA), London, Manchester (UK), Dubai, Abu Dhabi (UAE), Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune (India), Paris, Berlin, and Zurich (Europe)."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
