import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Bengaluru & Bangalore | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Bengaluru (Bangalore) with DestiX AI. Purpose-built for Koramangala, Indiranagar, and Whitefield B2B SaaS demo scheduling, D2C COD order verification, and fintech KYC. Audited 435ms P50 latency, native Kannada/English/Hindi multilingual support, and 100% compliant TRAI DLT 140/160 routing on Exotel & Airtel PRI lines.",
  alternates: {
    canonical: "https://ayush.company/bengaluru",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    "ICBM": "12.9716, 77.5946",
  },
  keywords: [
    "ai voice agent bengaluru",
    "ai voice agent bangalore",
    "best ai voice agent in bangalore",
    "best ai voice agent in bengaluru",
    "saas speed to lead bangalore",
    "d2c cod voice verification bengaluru",
    "kannada ai voice agent",
    "ai calling agency bangalore",
    "destix ai bengaluru",
    "ayush meena bangalore",
    "enterprise voice ai karnataka",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Bengaluru & Bangalore | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for SaaS scaleups, D2C brands, and fintech leaders across Bengaluru. Audited 435ms P50 latency and Kannada/English/Hindi support.",
    url: "https://ayush.company/bengaluru",
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
                "@id": "https://ayush.company/bengaluru#service",
                "name": "AI Voice Agents in Bengaluru & Bangalore | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/bengaluru",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://ayush.company/#organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "email": "ayush@ayush.company",
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
                    "url": "https://ayush.company/about",
                    "sameAs": [
                      "https://www.linkedin.com/in/ayush-meena-destixai",
                      "https://github.com/ayushchatgpt"
                    ]
                  }
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Bengaluru"
                  },
                  {
                    "@type": "City",
                    "name": "Bangalore"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Karnataka"
                  },
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
                "@id": "https://ayush.company/bengaluru#breadcrumb",
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
                    "name": "Bengaluru",
                    "item": "https://ayush.company/bengaluru"
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
