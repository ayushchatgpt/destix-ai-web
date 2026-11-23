import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Jaipur & Rajasthan | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Jaipur and Rajasthan with DestiX AI. Purpose-built for luxury heritage hospitality, gemstone export houses, and aesthetic clinics. Audited 435ms P50 latency, sub-45s speed-to-lead outbound dialing, and 100% compliant TRAI DLT 140/160 series carrier routing on Airtel & Tata PRI lines.",
  alternates: {
    canonical: "https://ayush.company/jaipur",
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur",
    "geo.position": "26.9124;75.7873",
    "ICBM": "26.9124, 75.7873",
  },
  keywords: [
    "ai voice agent jaipur",
    "best ai voice agent in jaipur",
    "ai voice agent rajasthan",
    "hospitality ai voice agent jaipur",
    "luxury hotel ai caller jaipur",
    "ai calling agency jaipur",
    "destix ai jaipur",
    "ayush meena jaipur",
    "enterprise voice ai rajasthan",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Jaipur & Rajasthan | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for heritage hotels, export houses, and healthcare clinics across Jaipur and Rajasthan. Audited 435ms P50 latency and English/Hindi dialect support.",
    url: "https://ayush.company/jaipur",
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
                "@id": "https://ayush.company/jaipur#service",
                "name": "AI Voice Agents in Jaipur & Rajasthan | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/jaipur",
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
                    "name": "Jaipur"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Rajasthan"
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
                "@id": "https://ayush.company/jaipur#breadcrumb",
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
                    "name": "Jaipur",
                    "item": "https://ayush.company/jaipur"
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
