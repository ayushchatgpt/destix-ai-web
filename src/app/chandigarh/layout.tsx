import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in Chandigarh & Tricity | DestiX AI (435ms P50)",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Chandigarh, Mohali, and Panchkula with DestiX AI. Fluent English, Hindi, and Punjabi trilingual dialect support, sub-45s speed-to-lead outbound dialing, audited 435ms P50 latency, and 100% compliant TRAI DLT 140/160 series carrier routing on Airtel & Tata PRI lines.",
  alternates: {
    canonical: "https://ayush.company/chandigarh",
  },
  other: {
    "geo.region": "IN-CH",
    "geo.placename": "Chandigarh",
    "geo.position": "30.7333;76.7794",
    "ICBM": "30.7333, 76.7794",
  },
  keywords: [
    "ai voice agent chandigarh",
    "best ai voice agent in chandigarh",
    "ai voice agent mohali",
    "ai voice agent panchkula",
    "ai voice agent tricity",
    "punjabi ai voice agent",
    "ai calling agency chandigarh",
    "destix ai chandigarh",
    "ayush meena chandigarh",
    "enterprise voice ai punjab",
  ],
  openGraph: {
    title: "Best AI Voice Agents in Chandigarh & Tricity | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for real estate, immigration consultancies, and surgical clinics across Chandigarh Tricity. Audited 435ms P50 latency and Punjabi/English/Hindi support.",
    url: "https://ayush.company/chandigarh",
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
                "@id": "https://ayush.company/chandigarh#service",
                "name": "AI Voice Agents in Chandigarh & Tricity | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Telephony",
                "url": "https://ayush.company/chandigarh",
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
                    "name": "Chandigarh"
                  },
                  {
                    "@type": "City",
                    "name": "Mohali"
                  },
                  {
                    "@type": "City",
                    "name": "Panchkula"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Punjab"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Haryana"
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
                "@id": "https://ayush.company/chandigarh#breadcrumb",
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
                    "name": "Chandigarh",
                    "item": "https://ayush.company/chandigarh"
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
