import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents & AI Receptionist in Mumbai | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Mumbai and Maharashtra with DestiX AI. Purpose-built for BKC financial wealth advisors, Bandra luxury real estate, and Lower Parel clinics. Sub-500ms (435ms P50) voice latency, native Marathi/Hindi/English trilingual models, local +91 022 DIDs, and 100% compliant TRAI DLT 140/160 routing on Tata & Airtel PRI lines.",
  alternates: {
    canonical: "https://ayush.company/mumbai",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
  },
  keywords: [
    "ai voice agent mumbai",
    "best ai voice agent in mumbai",
    "ai voice receptionist mumbai",
    "ai voice agent bkc",
    "ai voice agent bandra",
    "real estate ai voice agent mumbai",
    "ai calling agency mumbai",
    "destix ai mumbai",
    "ayush meena mumbai",
    "enterprise voice ai maharashtra",
  ],
  openGraph: {
    title: "Best AI Voice Agents & AI Receptionist in Mumbai | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for BKC finance, luxury real estate developers, and cosmetic clinics across Mumbai. Audited 435ms P50 latency and Marathi/Hindi/English support.",
    url: "https://ayush.company/mumbai",
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
                "@id": "https://ayush.company/mumbai#service",
                "name": "AI Voice Agents in Mumbai | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/mumbai",
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
                    "name": "Mumbai"
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
                "@id": "https://ayush.company/mumbai#breadcrumb",
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
                    "name": "Mumbai",
                    "item": "https://ayush.company/mumbai"
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
