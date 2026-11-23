import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Noida & Greater Noida | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Noida & Greater Noida with DestiX AI. Optimized for Sector 62 tech parks, Expressway BPOs, and North India customer contact centers. 435ms P50 voice latency, TRAI DLT compliance, and native Hinglish support.",
  alternates: {
    canonical: "https://ayush.company/noida",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
    "geo.position": "28.5355;77.3910",
    "ICBM": "28.5355, 77.3910",
  },
  keywords: [
    "ai voice agent noida",
    "best ai voice agent in noida",
    "ai voice agent greater noida",
    "bpo voice ai automation noida",
    "destix ai noida",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Noida | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for businesses in Noida and Greater Noida. 435ms P50 latency and sub-45-second lead capture.",
    url: "https://ayush.company/noida",
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
                "@id": "https://ayush.company/noida#service",
                "name": "AI Voice Agents in Noida | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Customer Service Automation",
                "url": "https://ayush.company/noida",
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
                    "name": "Noida"
                  },
                  {
                    "@type": "City",
                    "name": "Greater Noida"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Delhi NCR"
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/noida#breadcrumb",
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
                    "name": "Noida",
                    "item": "https://ayush.company/noida"
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
