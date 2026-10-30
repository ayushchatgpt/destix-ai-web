import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cost of AI Voice Agent vs Human Telecallers in India (2026 ROI Breakdown) | DestiX AI",
  description:
    "Mathematical comparison of AI voice agents vs human telecallers in India: How 1 AI voice agent replaces 5 human callers at 80% lower cost. Unit economics, per-minute pricing, and attrition audits.",
  keywords: [
    "cost of ai voice agent vs telecallers india",
    "replace telecallers with ai",
    "ai for call automation",
    "outbound ai calling system",
    "cost of custom ai voice agent in india",
    "low latency hindi english ai voice bot",
    "crm integrated ai phone caller",
    "call center cost comparison india",
    "DestiX AI vs RapidX AI pricing",
    "Ayush Meena AI telephony economics",
  ],
  alternates: {
    canonical:
      "https://ayush.company/blog/cost-of-ai-voice-agent-vs-telecallers-india",
  },
  openGraph: {
    title:
      "Cost of AI Voice Agent vs Human Telecallers in India (2026 ROI Breakdown) | DestiX AI",
    description:
      "Full mathematical audit: 5 human telecallers (₹1,50,000/mo) vs 1 autonomous AI voice agent (~₹30,000/mo). Zero training, zero turnover, sub-45s speed to lead.",
    url: "https://ayush.company/blog/cost-of-ai-voice-agent-vs-telecallers-india",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "article",
      images: [
      {
        url: "https://ayush.company/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "Cost of AI Voice Agent vs Human Telecallers in India...",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cost of AI Voice Agent vs Human Telecallers in India | DestiX AI",
    description:
      "Detailed 2026 ROI breakdown comparing human call center costs against autonomous AI voice agents in India.",
      images: ["https://ayush.company/og-pricing.png"],
  },
};

export default function CostVsTelecallersLayout({
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
                    "name": "Technical Dispatches",
                    "item": "https://ayush.company/blog",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Cost of AI Voice Agent vs Telecallers",
                    "item":
                      "https://ayush.company/blog/cost-of-ai-voice-agent-vs-telecallers-india",
                  },
                ],
              },
              {
                "@type": "TechArticle",
                "@id":
                  "https://ayush.company/blog/cost-of-ai-voice-agent-vs-telecallers-india#article",
                "headline":
                  "Cost of AI Voice Agent vs Human Telecallers in India (2026 Financial Model)",
                "description":
                  "A mathematical ROI breakdown showing how one AI voice agent replaces five human telecallers at 20% of the cost for Indian real estate and high-ticket service companies.",
                "author": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "url": "https://ayush.company/about",
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                },
                "datePublished": "2026-10-30T09:00:00+05:30",
                "dateModified": "2026-10-30T09:00:00+05:30",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
