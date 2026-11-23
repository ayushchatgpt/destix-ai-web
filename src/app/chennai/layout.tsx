import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Chennai & Tamil Nadu | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Chennai with DestiX AI. Purpose-built for OMR IT corridor SaaS qualification, Sriperumbudur automotive dispatch, and luxury coastal real estate. Audited 435ms P50 latency, native Tamil/Tanglish/English bilingual models, local +91 044 DIDs, and 100% compliant TRAI DLT 140/160 routing on Airtel & Tata PRI lines.",
  alternates: {
    canonical: "https://ayush.company/chennai",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
  keywords: [
    "ai voice agent chennai",
    "best ai voice agent in chennai",
    "ai voice agent omr",
    "tamil ai voice agent",
    "tanglish voice ai chennai",
    "automotive dispatch ai chennai",
    "ai calling agency chennai",
    "destix ai chennai",
    "ayush meena chennai",
    "enterprise voice ai tamil nadu",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Chennai & Tamil Nadu | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for OMR tech parks, automotive manufacturers, and healthcare clinics across Chennai. Audited 435ms P50 latency and Tamil/English support.",
    url: "https://ayush.company/chennai",
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
                "@id": "https://ayush.company/chennai#service",
                "name": "AI Voice Agents in Chennai & Tamil Nadu | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/chennai",
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
                    "name": "Chennai"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Tamil Nadu"
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
                "@id": "https://ayush.company/chennai#breadcrumb",
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
                    "name": "Chennai",
                    "item": "https://ayush.company/chennai"
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
