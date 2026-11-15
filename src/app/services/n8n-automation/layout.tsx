import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise n8n Workflow Automation & Self-Hosted Orchestration | DestiX AI",
  description:
    "Enterprise-grade n8n automation consultant and deployment practice. Private Docker/Kubernetes clusters, deterministic webhook orchestration, Zapier/Make migrations, and zero third-party data leaks. Principal: Ayush Meena.",
  keywords: [
    "n8n automation consultant",
    "enterprise n8n agency",
    "n8n workflow automation",
    "self hosted n8n deployment",
    "n8n vs zapier enterprise",
    "n8n vs make enterprise",
    "n8n webhook orchestration",
    "n8n voice ai pipeline",
    "ai automation agency n8n",
    "destix ai n8n consultant",
    "ayush meena n8n",
    "n8n private cluster",
    "autonomous workflow automation",
    "n8n crm integration",
    "enterprise ai operating system"
  ],
  alternates: {
    canonical: "https://ayush.company/services/n8n-automation",
  },
  openGraph: {
    title: "Enterprise n8n Workflow Automation & Self-Hosted Orchestration | DestiX AI",
    description:
      "Replace expensive Zapier/Make subscriptions with sovereign, self-hosted n8n private clusters that handle millions of deterministic enterprise webhooks with zero data leak.",
    url: "https://ayush.company/services/n8n-automation",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise n8n Workflow Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise n8n Workflow Automation & Self-Hosted Orchestration | DestiX AI",
    description:
      "Sovereign n8n private cluster deployment, self-healing webhooks, and complex multi-agent DAG execution.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function N8nAutomationLayout({
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
                "@id": "https://ayush.company/services/n8n-automation#service",
                "name": "Enterprise n8n Workflow Automation & Private Cluster Orchestration",
                "serviceType": "Enterprise Business Process & Workflow Automation",
                "provider": {
                  "@id": "https://ayush.company/#organization",
                },
                "url": "https://ayush.company/services/n8n-automation",
                "description":
                  "Sovereign self-hosted n8n orchestration, complex API webhooks, Zapier and Make migrations, and multi-agent AI execution pipelines for enterprise teams.",
                "areaServed": [
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "Country", "name": "India" }
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/services/n8n-automation#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ayush.company" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ayush.company/solutions" },
                  { "@type": "ListItem", "position": 3, "name": "n8n Automation", "item": "https://ayush.company/services/n8n-automation" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/services/n8n-automation#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why choose self-hosted n8n over Zapier or Make?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Self-hosted n8n runs entirely on your own private cloud (AWS, GCP, DigitalOcean, or on-premise Kubernetes), eliminating per-task SaaS markups (saving 80%+ on automation bills), ensuring zero third-party data leaks for strict GDPR/HIPAA compliance, and providing unlimited workflow executions with sub-50ms execution speed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI connect n8n to AI voice agents?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI connects telephony webhooks directly into private n8n DAGs. When an inbound or outbound call completes, n8n ingests the transcript, runs secondary structured data extraction via private LLMs, synchronizes CRM records, triggers WhatsApp brochures, and alerts executive calendars in real time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI migrate existing complex Zapier or Make workflows to n8n?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We execute turnkey migrations from Zapier, Make (Integromat), or custom legacy cron jobs into clean, modular, self-healing n8n pipelines with comprehensive error alerting and automated retry mechanisms."
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