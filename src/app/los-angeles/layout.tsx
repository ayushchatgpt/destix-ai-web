import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Los Angeles & Southern California | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Los Angeles with DestiX AI. Purpose-built for Beverly Hills & Westside trophy real estate, Hollywood studio client triage, Silicon Beach tech scale-ups, and Rodeo Drive aesthetic clinics. Audited 435ms P50 latency, +1 310, 213, 818 DIDs, STIR/SHAKEN Tier-A attestation, and wholesale Twilio SIP interconnects.",
  alternates: {
    canonical: "https://ayush.company/los-angeles",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Los Angeles",
    "geo.position": "34.0522;-118.2437",
    "ICBM": "34.0522, -118.2437",
  },
  keywords: [
    "ai voice agent los angeles",
    "best ai voice agent in los angeles",
    "ai voice agent beverly hills",
    "ai voice agent california",
    "entertainment ai voice agent la",
    "silicon beach voice ai",
    "ai calling agency los angeles",
    "destix ai los angeles",
    "ayush meena los angeles",
    "enterprise voice ai california",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Los Angeles & Southern California | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for Beverly Hills real estate, Hollywood studios, and Silicon Beach tech scaleups. Audited 435ms P50 latency.",
    url: "https://ayush.company/los-angeles",
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
                "@id": "https://ayush.company/los-angeles#service",
                "name": "AI Voice Agents in Los Angeles & Southern California | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/los-angeles",
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
                    "name": "Los Angeles"
                  },
                  {
                    "@type": "City",
                    "name": "Beverly Hills"
                  },
                  {
                    "@type": "City",
                    "name": "Santa Monica"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "California"
                  },
                  {
                    "@type": "Country",
                    "name": "United States"
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
                "@id": "https://ayush.company/los-angeles#breadcrumb",
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
                    "name": "Los Angeles",
                    "item": "https://ayush.company/los-angeles"
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
