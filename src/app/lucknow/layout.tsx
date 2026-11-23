import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Lucknow & Uttar Pradesh | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Lucknow and Uttar Pradesh with DestiX AI. Purpose-built for Gomti Nagar luxury real estate, healthcare centers, and corporate practices. Audited 435ms P50 latency, sub-45s speed-to-lead outbound dialing, and 100% compliant TRAI DLT 140/160 series carrier routing on Airtel & Tata PRI lines.",
  alternates: {
    canonical: "https://ayush.company/lucknow",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Lucknow",
    "geo.position": "26.8467;80.9462",
    "ICBM": "26.8467, 80.9462",
  },
  keywords: [
    "ai voice agent lucknow",
    "best ai voice agent in lucknow",
    "ai voice agent uttar pradesh",
    "real estate ai voice agent lucknow",
    "gomti nagar voice ai",
    "ai calling agency lucknow",
    "destix ai lucknow",
    "ayush meena lucknow",
    "enterprise voice ai up",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Lucknow & Uttar Pradesh | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for luxury real estate, super-specialty hospitals, and legal consultancies across Lucknow and Uttar Pradesh. Audited 435ms P50 latency.",
    url: "https://ayush.company/lucknow",
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
                "@id": "https://ayush.company/lucknow#service",
                "name": "AI Voice Agents in Lucknow & Uttar Pradesh | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/lucknow",
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
                    "name": "Lucknow"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Uttar Pradesh"
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
                "@id": "https://ayush.company/lucknow#breadcrumb",
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
                    "name": "Lucknow",
                    "item": "https://ayush.company/lucknow"
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
