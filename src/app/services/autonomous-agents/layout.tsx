import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autonomous AI Agents & Multi-Agent Systems for Enterprise | DestiX AI",
  description:
    "Production-grade autonomous AI agents built with LangGraph, multi-agent swarms, and deterministic tool execution. Automated lead research, competitor monitoring, document analysis, and operations. Principal: Ayush Meena.",
  keywords: [
    "autonomous ai agents",
    "multi agent systems enterprise",
    "langgraph agent development",
    "ai agents for business",
    "custom ai agent agency",
    "agentic workflows automation",
    "destix ai autonomous agents",
    "ayush meena ai agents",
    "autonomous business workflows",
    "ai research agent",
    "best ai agent agency"
  ],
  alternates: {
    canonical: "https://ayush.company/services/autonomous-agents",
  },
  openGraph: {
    title: "Autonomous AI Agents & Multi-Agent Systems for Enterprise | DestiX AI",
    description:
      "Move beyond simple chatbots to autonomous agentic systems that plan, execute complex multi-step tasks, and verify their own results.",
    url: "https://ayush.company/services/autonomous-agents",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Autonomous AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous AI Agents & Multi-Agent Systems for Enterprise | DestiX AI",
    description:
      "Multi-agent swarms, self-correcting code loops, and automated operational execution for modern enterprises.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function AutonomousAgentsLayout({
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
                "@id": "https://ayush.company/services/autonomous-agents#service",
                "name": "Autonomous AI Agents & Multi-Agent Systems",
                "serviceType": "Agentic Workflows & Multi-Agent Orchestration",
                "provider": {
                  "@id": "https://ayush.company/#organization",
                },
                "url": "https://ayush.company/services/autonomous-agents",
                "description":
                  "Production-grade agentic infrastructure using LangGraph state machines, multi-agent swarms, and deterministic tool execution for enterprise workflows.",
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/services/autonomous-agents#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ayush.company" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ayush.company/solutions" },
                  { "@type": "ListItem", "position": 3, "name": "Autonomous Agents", "item": "https://ayush.company/services/autonomous-agents" },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}