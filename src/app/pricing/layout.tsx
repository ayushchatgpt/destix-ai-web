import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Scoping & Unit Economics | DestiX AI",
  description:
    "Transparent AI voice agent and 3D web pricing: One-time custom sprint engineering (₹35,000–₹1,50,000) and pass-through carrier SIP telephony (₹3.80–₹5.50/min at scale vs Decibel Labs ₹6/min & RapidX AI). Zero monthly software lock-in.",
  keywords: [
    "DestiX AI pricing",
    "AI voice agent cost India",
    "AI voice receptionist pricing Delhi",
    "Decibel Labs vs DestiX AI pricing",
    "RapidX AI vs DestiX AI pricing",
    "conversational AI telephony cost",
  ],
  alternates: {
    canonical: "https://ayush.company/pricing",
  },
  openGraph: {
    title: "Transparent Scoping & Unit Economics | DestiX AI",
    description:
      "Audited 120,000-minute annual TCO comparison: DestiX AI vs Decibel Labs vs RapidX AI. Wholesale telephony pass-through and 100% client IP ownership.",
    url: "https://ayush.company/pricing",
    siteName: "DestiX AI",
    type: "website",
    locale: "en_IN",
      images: [
      {
        url: "https://ayush.company/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "Transparent Scoping & Unit Economics",
      },
    ],
  },
};

export default function PricingLayout({
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
                    "name": "Transparent Pricing",
                    "item": "https://ayush.company/pricing",
                  },
                ],
              },
              {
                "@type": "PriceSpecification",
                "price": "35000",
                "priceCurrency": "INR",
                "description": "One-time custom sprint engineering with pass-through carrier telephony from ₹3.80 to ₹5.50 per minute at volume.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
