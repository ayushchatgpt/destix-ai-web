import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Pune & Maharashtra | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Pune with DestiX AI. Purpose-built for Hinjewadi & Kharadi SaaS scale-ups, Baner luxury real estate, and Chakan automotive dispatch. Sub-500ms (435ms P50) voice latency, native Marathi/Hindi/English trilingual models, local +91 020 DIDs, and 100% compliant TRAI DLT 140/160 routing on Tata & Airtel PRI lines.",
  alternates: {
    canonical: "https://ayush.company/pune",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.5204;73.8567",
    "ICBM": "18.5204, 73.8567",
  },
  keywords: [
    "ai voice agent pune",
    "best ai voice agent in pune",
    "ai voice agent hinjewadi",
    "ai voice agent kharadi",
    "marathi ai voice agent",
    "saas speed to lead pune",
    "ai calling agency pune",
    "destix ai pune",
    "ayush meena pune",
    "enterprise voice ai maharashtra",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Pune & Maharashtra | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for Hinjewadi IT hubs, West Pune luxury real estate, and Chakan manufacturing plants. Audited 435ms P50 latency and trilingual Marathi/Hindi/English support.",
    url: "https://ayush.company/pune",
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
                "@id": "https://ayush.company/pune#service",
                "name": "AI Voice Agents in Pune & Maharashtra | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/pune",
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
                    "name": "Pune"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Maharashtra"
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
                "@id": "https://ayush.company/pune#breadcrumb",
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
                    "name": "Pune",
                    "item": "https://ayush.company/pune"
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
