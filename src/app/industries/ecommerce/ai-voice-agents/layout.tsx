import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents for E-Commerce & Retail Brands | DestiX AI",
  description:
    "Autonomous voice telephony agents for high-volume e-commerce brands. Automated abandoned checkout calls, proactive order delivery status checks, returns handling, and VIP customer concierge.",
  keywords: [
    "ai voice agents for ecommerce",
    "ecommerce phone automation",
    "abandoned cart phone recovery ai",
    "retail voice ai agent",
    "shopify voice agent",
    "ecommerce order tracking ai",
    "destix ai ecommerce voice",
    "best ecommerce ai voice agent"
  ],
  alternates: {
    canonical: "https://ayush.company/industries/ecommerce/ai-voice-agents",
  },
};

export default function EcommerceIndustryLayout({
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
                "@id": "https://ayush.company/industries/ecommerce/ai-voice-agents#service",
                name: "AI Voice Agents for E-Commerce Brands",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "E-Commerce Customer Experience & Cart Recovery Telephony",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Autonomous telephony systems recovering abandoned checkouts, handling post-purchase order tracking inquiries, and resolving product queries in real time.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
