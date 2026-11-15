import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI CRM Integration & Automated Telephony Pipelines | DestiX AI",
  description:
    "Enterprise AI CRM automation connecting HubSpot, Salesforce, Zoho, LeadSquared, and GoHighLevel to sub-500ms voice agents and WhatsApp pipelines. Zero manual lead entry, sub-2s sync. Principal: Ayush Meena.",
  keywords: [
    "ai crm automation",
    "ai crm integration",
    "hubspot voice ai integration",
    "salesforce ai voice agent",
    "crm telephony pipeline",
    "zoho ai voice automation",
    "leadsquared ai voice caller",
    "gohighlevel ai voice agent",
    "automated lead scoring ai",
    "speed to lead crm automation",
    "destix ai crm integration",
    "best ai crm agency",
    "crm workflow automation",
    "bi directional crm voice sync",
    "ayush meena ai crm"
  ],
  alternates: {
    canonical: "https://ayush.company/services/crm-automation",
  },
  openGraph: {
    title: "AI CRM Integration & Automated Telephony Pipelines | DestiX AI",
    description:
      "Connect every phone call, WhatsApp exchange, and ad inquiry directly into your CRM with sub-2s bi-directional synchronization and automated deal progression.",
    url: "https://ayush.company/services/crm-automation",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise AI CRM Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI CRM Integration & Automated Telephony Pipelines | DestiX AI",
    description:
      "Deterministic CRM telephony pipelines: instant call transcripts, sentiment scores, and automated deal advancement in Salesforce, HubSpot, and Zoho.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function CrmAutomationLayout({
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
                "@id": "https://ayush.company/services/crm-automation#service",
                "name": "Enterprise AI CRM Automation & Telephony Pipelines",
                "serviceType": "CRM Telephony Integration & Workflow Automation",
                "provider": {
                  "@id": "https://ayush.company/#organization",
                },
                "url": "https://ayush.company/services/crm-automation",
                "description":
                  "Turnkey AI telephony pipelines connecting phone calls, audio recordings, structured transcripts, and intent scoring directly to Salesforce, HubSpot, Zoho, and GoHighLevel in under 2 seconds.",
                "areaServed": [
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "Country", "name": "India" }
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/services/crm-automation#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ayush.company" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ayush.company/solutions" },
                  { "@type": "ListItem", "position": 3, "name": "CRM Automation", "item": "https://ayush.company/services/crm-automation" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/services/crm-automation#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI integrate voice agents with enterprise CRMs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI builds custom webhook pipelines and REST/GraphQL connectors that ingest call metadata, MP3 audio recordings, verbatim transcripts, extracted qualification variables (budget, timeline, intent), and sentiment scores into HubSpot, Salesforce, Zoho, LeadSquared, or GoHighLevel within 2 seconds of call completion."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI trigger automated outbound calls directly from CRM status changes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. When a deal stage changes, an ad lead is created, or a contact is moved to 'Callback Required', DestiX AI's telephony engine initiates an autonomous outbound call in under 45 seconds, qualifies the lead, and updates the contact record in real time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which CRMs are natively supported by DestiX AI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI natively supports Salesforce, HubSpot, Zoho CRM, LeadSquared, Pipedrive, Follow Up Boss, GoHighLevel (GHL), Monday.com, and custom PostgreSQL/MySQL enterprise databases."
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