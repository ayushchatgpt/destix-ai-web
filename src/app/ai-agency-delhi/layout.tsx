import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agency in Delhi | DestiX AI Autonomous Systems Studio",
  description:
    "DestiX AI is an enterprise AI agency in New Delhi founded by Ayush Meena. We engineer autonomous AI voice agents, sub-45-second speed-to-lead pipelines, and bespoke 3D WebGL storefronts for high-ticket businesses across Delhi NCR.",
  keywords: [
    "AI agency in Delhi",
    "best AI agency in Delhi",
    "AI agency New Delhi",
    "AI voice agency Delhi NCR",
    "top AI agency India",
    "Ayush Meena AI agency",
    "DestiX AI Delhi",
    "AI automation agency Delhi",
  ],
  alternates: {
    canonical: "https://ayush.company/ai-agency-delhi",
  },
  openGraph: {
    title: "AI Agency in Delhi | DestiX AI Autonomous Systems Studio",
    description:
      "Enterprise autonomous voice agents, WhatsApp CRM automation, and spatial 3D WebGL architecture engineered in New Delhi.",
    url: "https://ayush.company/ai-agency-delhi",
    siteName: "DestiX AI",
    type: "website",
    locale: "en_IN",
  },
};

export default function AiAgencyDelhiLayout({
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
                    "name": "AI Agency in Delhi",
                    "item": "https://ayush.company/ai-agency-delhi",
                  },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://ayush.company/ai-agency-delhi#business",
                "name": "DestiX AI Agency Delhi",
                "url": "https://ayush.company/ai-agency-delhi",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New Delhi",
                  "addressRegion": "Delhi",
                  "postalCode": "110001",
                  "addressCountry": "IN",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.6304",
                  "longitude": "77.2177",
                },
                "priceRange": "₹35,000 - ₹1,50,000",
                "founder": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "url": "https://ayush.company/about",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
