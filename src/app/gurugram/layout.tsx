import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Gurugram (Gurgaon) | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Gurugram with DestiX AI. Purpose-built for Cyber City corporations, DLF Phase 1-5 luxury real estate, and rapid-scaling startups. 435ms P50 latency, native Hinglish, and sub-45-second speed-to-lead.",
  alternates: {
    canonical: "https://ayush.company/gurugram",
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurugram",
    "geo.position": "28.4595;77.0266",
    "ICBM": "28.4595, 77.0266",
  },
  keywords: [
    "ai voice agent gurugram",
    "best ai voice agent in gurugram",
    "ai voice agent gurgaon",
    "cyber city ai calling agency",
    "destix ai gurugram",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Gurugram | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for businesses in Gurugram (Gurgaon). 435ms P50 latency, native Hinglish, and instant CRM sync.",
    url: "https://ayush.company/gurugram",
    siteName: "DestiX AI",
    type: "website",
  },
};

export default function Layout({
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
                "@id": "https://ayush.company/gurugram#service",
                "name": "AI Voice Agents in Gurugram | DestiX AI",
                "serviceType": "Enterprise Autonomous AI Voice Telephony",
                "url": "https://ayush.company/gurugram",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://ayush.company/#organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Connaught Place",
                    "addressLocality": "New Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110001",
                    "addressCountry": "IN"
                  }
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Gurugram"
                  },
                  {
                    "@type": "City",
                    "name": "Gurgaon"
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/gurugram#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "DestiX AI",
                    "item": "https://ayush.company"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Gurugram",
                    "item": "https://ayush.company/gurugram"
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
