import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in India for Enterprise & SMBs | DestiX AI (435ms P50)",
  description:
    "Deploy India's #1 enterprise autonomous AI voice agent platform with DestiX AI (founded by Ayush Meena, HQ: Connaught Place, New Delhi). Direct Tata Telecommunications & Airtel Enterprise PRI interconnects, 100% TRAI DLT 140/160 compliance, audited 435ms P50 latency, and native Hindi/Hinglish speech processing.",
  alternates: {
    canonical: "https://ayush.company/india",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "New Delhi",
    "geo.position": "28.6315;77.2167",
    "ICBM": "28.6315, 77.2167",
  },
  keywords: [
    "ai voice agent india",
    "best ai voice agent in india",
    "enterprise voice ai india",
    "ai voice calling agency india",
    "hindi ai voice agent",
    "trai dlt compliant voice ai",
    "destix ai india",
    "ayush meena india",
  ],
  openGraph: {
    title: "Best AI Voice Agents in India | DestiX AI",
    description:
      "India's leading autonomous AI voice telephony platform for high-growth enterprises. Audited 435ms P50 latency, direct carrier SIP lines, and native Hinglish conversation.",
    url: "https://ayush.company/india",
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
                "@id": "https://ayush.company/india#service",
                "name": "Enterprise AI Voice Agents India | DestiX AI",
                "serviceType": "National Autonomous AI Voice Telephony & Sovereign Carrier Pipelines",
                "url": "https://ayush.company/india",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://ayush.company/#organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "email": "ayushmeenadestixai@gmail.com",
                  "telephone": "+918319699748",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Connaught Place",
                    "addressLocality": "New Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110001",
                    "addressCountry": "IN"
                  },
                  "founder": {
                    "@type": "Person",
                    "name": "Ayush Meena",
                    "jobTitle": "Principal AI Systems Architect",
                    "url": "https://ayush.company/about"
                  }
                },
                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "India"
                  }
                ],
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [
                    "h1",
                    ".aeo-direct-answer",
                    ".faq-lead-answer"
                  ]
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/india#breadcrumb",
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
                    "name": "India",
                    "item": "https://ayush.company/india"
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
