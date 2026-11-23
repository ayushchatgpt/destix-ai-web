import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Delhi NCR & North India | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Delhi NCR and North India with DestiX AI (HQ: Connaught Place, New Delhi). Native Hinglish, sub-45s speed-to-lead, audited 435ms P50 latency, and 100% compliant TRAI DLT 140/160 series carrier routing on Airtel & Jio PRI lines.",
  alternates: {
    canonical: "https://ayush.company/delhi",
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi",
    "geo.position": "28.6315;77.2167",
    "ICBM": "28.6315, 77.2167",
  },
  keywords: [
    "ai voice agent delhi",
    "best ai voice agent in delhi",
    "ai voice agent delhi ncr",
    "ai voice agent north india",
    "ai voice agent gurgaon",
    "ai voice agent noida",
    "hindi ai voice agent",
    "hinglish voice ai delhi",
    "ai calling agency delhi ncr",
    "destix ai delhi",
    "ayush meena delhi",
    "enterprise voice ai india",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Delhi NCR & North India | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for service companies, healthcare clinics, and high-ticket real estate across Delhi NCR and North India. Audited 435ms P50 latency and native Hinglish support.",
    url: "https://ayush.company/delhi",
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
                "@id": "https://ayush.company/delhi#service",
                "name": "AI Voice Agents in Delhi NCR & North India | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/delhi",
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
                    "name": "New Delhi"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Delhi NCR"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "North India"
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
                "@id": "https://ayush.company/delhi#breadcrumb",
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
                    "name": "Delhi NCR",
                    "item": "https://ayush.company/delhi"
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
