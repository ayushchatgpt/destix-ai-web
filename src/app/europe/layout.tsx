import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Sovereign AI Voice Agents in Europe & EU | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 sovereign autonomous AI voice agents in Europe with DestiX AI. Purpose-built for Paris luxury hospitality, Frankfurt fintech, and Amsterdam scaleups. Full GDPR Article 22 compliance, sub-500ms (435ms P50) acoustic parity, EU sovereign data residency (Frankfurt/Dublin), and direct European SIP gateways (+33, +49, +31, +41 DIDs).",
  alternates: {
    canonical: "https://ayush.company/europe",
  },
  other: {
    "geo.region": "EU",
    "geo.placename": "Europe",
  },
  keywords: [
    "ai voice agent europe",
    "best ai voice agent in europe",
    "sovereign ai voice agent eu",
    "gdpr compliant ai voice agent",
    "multilingual voice ai europe",
    "voice ai paris berlin amsterdam",
    "ai calling agency europe",
    "destix ai europe",
    "ayush meena europe",
    "enterprise voice ai eu",
  ],
  openGraph: {
    title: "Best Sovereign AI Voice Agents in Europe & EU | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony across Paris, Berlin, Amsterdam, Zurich, London, and Dublin. Audited 435ms P50 latency and GDPR Article 22 compliance.",
    url: "https://ayush.company/europe",
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
                "@id": "https://ayush.company/europe#service",
                "name": "Sovereign AI Voice Agents in Europe | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/europe",
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
                    "@type": "Continent",
                    "name": "Europe"
                  },
                  {
                    "@type": "Country",
                    "name": "France"
                  },
                  {
                    "@type": "Country",
                    "name": "Germany"
                  },
                  {
                    "@type": "Country",
                    "name": "Netherlands"
                  },
                  {
                    "@type": "Country",
                    "name": "Switzerland"
                  },
                  {
                    "@type": "Country",
                    "name": "United Kingdom"
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
                "@id": "https://ayush.company/europe#breadcrumb",
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
                    "name": "Europe",
                    "item": "https://ayush.company/europe"
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
