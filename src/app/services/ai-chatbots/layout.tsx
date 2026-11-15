import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Chatbots & Multilingual RAG Systems | DestiX AI",
  description:
    "Grounded, hallucination-free enterprise AI chatbots deployed across Meta WhatsApp Business API, Web embeds, and mobile apps. Hybrid vector search (Pinecone/pgvector), sub-800ms response time, 100% data privacy. Principal: Ayush Meena.",
  keywords: [
    "enterprise ai chatbot",
    "custom ai chatbot development",
    "whatsapp ai chatbot for business",
    "multilingual ai chatbot",
    "rag chatbot for enterprise",
    "grounded ai chatbot agency",
    "destix ai chatbots",
    "ayush meena ai chatbot",
    "ai customer support bot",
    "ai sales chatbot",
    "whatsapp business cloud api bot",
    "best ai chatbot company",
    "hybrid vector rag chatbot",
    "zero hallucination chatbot"
  ],
  alternates: {
    canonical: "https://ayush.company/services/ai-chatbots",
  },
  openGraph: {
    title: "Enterprise AI Chatbots & Multilingual RAG Systems | DestiX AI",
    description:
      "Deploy custom AI chatbots grounded strictly in your proprietary documentation, inventory, and enterprise knowledge bases with zero hallucinations.",
    url: "https://ayush.company/services/ai-chatbots",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise AI Chatbots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Chatbots & Multilingual RAG Systems | DestiX AI",
    description:
      "Enterprise conversational AI chatbots with hybrid vector search, instant human escalation, and multi-channel synchronization.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function AiChatbotsLayout({
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
                "@id": "https://ayush.company/services/ai-chatbots#service",
                "name": "Enterprise AI Chatbots & Multilingual RAG Systems",
                "serviceType": "Conversational AI Chatbots & Knowledge Retrieval",
                "provider": {
                  "@id": "https://ayush.company/#organization",
                },
                "url": "https://ayush.company/services/ai-chatbots",
                "description":
                  "Grounded enterprise chatbots powered by hybrid vector search (RAG) and multi-channel messaging across WhatsApp, WebGL portals, and internal knowledge bases.",
                "areaServed": [
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "Country", "name": "India" }
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/services/ai-chatbots#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ayush.company" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ayush.company/solutions" },
                  { "@type": "ListItem", "position": 3, "name": "AI Chatbots", "item": "https://ayush.company/services/ai-chatbots" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/services/ai-chatbots#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI prevent AI chatbot hallucinations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI builds hybrid RAG (Retrieval-Augmented Generation) pipelines that combine dense vector semantic search (Pinecone/pgvector) with sparse BM25 keyword matching, strict factual temperature controls (0.0 - 0.2), and deterministic guardrail layers. If information is not verified in company docs, the bot explicitly acknowledges it or routes to human support."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI chatbots hand over conversations to human agents?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. When complex edge cases, sensitive legal matters, or VIP high-ticket clients require human attention, the chatbot smoothly escalates the conversation to your team via Slack, Microsoft Teams, WhatsApp Business Inbox, or Zendesk with complete chat context."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which messaging channels are supported?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI chatbots run natively across Official Meta WhatsApp Business Cloud API, website embedded widgets, Instagram Direct Messages, Facebook Messenger, Telegram, and mobile SDKs."
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