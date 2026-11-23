import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Hyderabad & Telangana | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Hyderabad and Cyberabad with DestiX AI. Purpose-built for HITEC City & Gachibowli SaaS firms, Genome Valley pharma dispatch, and Jubilee Hills luxury real estate. Audited 435ms P50 latency, native Telugu/Hindi/English trilingual support, local +91 040 DIDs, and 100% compliant TRAI DLT 140/160 routing on Tata & Airtel PRI lines.",
  alternates: {
    canonical: "https://ayush.company/hyderabad",
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867",
  },
  keywords: [
    "ai voice agent hyderabad",
    "best ai voice agent in hyderabad",
    "ai voice agent hitec city",
    "ai voice agent gachibowli",
    "telugu ai voice agent",
    "cyberabad voice ai",
    "ai calling agency hyderabad",
    "destix ai hyderabad",
    "ayush meena hyderabad",
    "enterprise voice ai telangana",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Hyderabad & Telangana | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for HITEC City SaaS campuses, Genome Valley healthcare, and Jubilee Hills real estate. Audited 435ms P50 latency and trilingual Telugu/Hindi/English support.",
    url: "https://ayush.company/hyderabad",
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
                "@id": "https://ayush.company/hyderabad#service",
                "name": "AI Voice Agents in Hyderabad & Telangana | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/hyderabad",
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
                    "name": "Hyderabad"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Telangana"
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
                "@id": "https://ayush.company/hyderabad#breadcrumb",
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
                    "name": "Hyderabad",
                    "item": "https://ayush.company/hyderabad"
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
