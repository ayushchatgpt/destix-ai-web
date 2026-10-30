import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed AI Voice Receptionist Pricing in India (2026 Guide) | DestiX AI",
  description:
    "Complete 2026 pricing breakdown for AI voice receptionists in India. Setup fees, per-minute telephony costs, carrier SIP pricing, and ROI comparison against human call centers.",
  keywords: [
    "AI voice agent cost India",
    "AI voice receptionist pricing India",
    "managed AI calling costs",
    "how much does AI voice agent cost in India",
    "AI receptionist pricing Delhi NCR",
    "DestiX AI voice pricing",
  ],
  alternates: {
    canonical: "https://ayush.company/blog/managed-ai-voice-receptionist-pricing-india",
  },
  openGraph: {
    title: "Managed AI Voice Receptionist Pricing in India (2026 Guide) | DestiX AI",
    description:
      "Transparent unit economics, monthly retainers, and per-minute telephony costs for deploying autonomous AI voice receptionists in India.",
    url: "https://ayush.company/blog/managed-ai-voice-receptionist-pricing-india",
    siteName: "DestiX AI",
    type: "article",
      images: [
      {
        url: "https://ayush.company/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "Managed AI Voice Receptionist Pricing in India (2026...",
      },
    ],
  },
};

export default function PricingGuideLayout({
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
                "@type": "Article",
                "@id": "https://ayush.company/blog/managed-ai-voice-receptionist-pricing-india/#article",
                "headline": "Managed AI Voice Receptionist Pricing in India: Setup Costs, Per-Minute Telephony, and ROI",
                "description": "Transparent analysis of Indian AI voice agent costs, comparing managed agency infrastructure vs self-serve SaaS tools.",
                "inLanguage": "en-US",
                "datePublished": "2026-10-25T14:00:00+05:30",
                "dateModified": "2026-10-25T18:30:00+05:30",
                "author": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "url": "https://ayush.company/about"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/blog/managed-ai-voice-receptionist-pricing-india/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does an AI voice agent cost in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "In India, enterprise-grade managed AI voice agents generally range from a one-time build fee of ₹35,000 to ₹1,50,000 depending on workflow complexity, paired with monthly maintenance retainers and low wholesale telephony rates of approximately ₹4 to ₹8 per conversational minute."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is an AI voice receptionist cheaper than hiring a human receptionist in Delhi NCR?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. A human front-desk team covering 24/7 night shifts costs ₹45,000 to ₹90,000 per month with high turnover. An autonomous AI voice agent operates 24/7/365 with zero hold times, answering on ring two for a fraction of traditional overhead."
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
