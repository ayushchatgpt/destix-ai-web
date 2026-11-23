import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Gurgaon (Gurugram) | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Gurgaon & Cyber City with DestiX AI. Tailored for DLF Golf Course Road luxury real estate, fintech, and North India enterprise headquarters. Audited 435ms P50 voice parity, native Hinglish, and sub-45-second lead capture.",
  alternates: {
    canonical: "https://ayush.company/gurgaon",
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurugram",
    "geo.position": "28.4595;77.0266",
    "ICBM": "28.4595, 77.0266",
  },
  keywords: [
    "ai voice agent gurgaon",
    "ai voice agents gurugram",
    "best ai voice agent in gurgaon",
    "ai voice agents for real estate gurgaon",
    "cyber city ai voice calling",
    "destix ai gurgaon",
    "voice ai agency gurgaon",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Gurgaon | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for luxury real estate, tech firms, and clinics in Gurgaon (Gurugram). 435ms P50 latency and native Hinglish support.",
    url: "https://ayush.company/gurgaon",
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
                "@id": "https://ayush.company/gurgaon#service",
                "name": "AI Voice Agents in Gurgaon | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony for Enterprise & Real Estate",
                "url": "https://ayush.company/gurgaon",
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
                    "name": "Gurgaon"
                  },
                  {
                    "@type": "City",
                    "name": "Gurugram"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Delhi NCR"
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/gurgaon#breadcrumb",
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
                    "name": "Gurgaon",
                    "item": "https://ayush.company/gurgaon"
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
