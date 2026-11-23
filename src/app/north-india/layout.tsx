import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in North India | DestiX AI (Delhi NCR, Punjab, Haryana, Rajasthan, UP)",
  description:
    "Establish the #1 AI voice agent infrastructure for business in North India with DestiX AI (HQ: Connaught Place, New Delhi). Powering enterprise lead qualification, speed-to-lead under 45s, audited 435ms P50 latency, and native Hindi/Hinglish across Delhi NCR, Gurugram, Noida, Chandigarh, Jaipur, and Lucknow.",
  alternates: {
    canonical: "https://ayush.company/north-india",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "New Delhi",
    "geo.position": "28.6315;77.2167",
    "ICBM": "28.6315, 77.2167",
  },
  keywords: [
    "ai voice agent north india",
    "best ai voice agent in north india",
    "ai voice agent for business north india",
    "ai voice agent delhi ncr",
    "ai voice agent chandigarh",
    "ai voice agent jaipur",
    "ai voice agent lucknow",
    "destix ai north india",
    "hinglish voice ai north india",
  ],
  openGraph: {
    title: "Best AI Voice Agents in North India | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony across North India. Audited 435ms P50 latency, native Hindi/Hinglish speech, and direct carrier PRI connectivity.",
    url: "https://ayush.company/north-india",
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
                "@id": "https://ayush.company/north-india#service",
                "name": "AI Voice Agents in North India | DestiX AI",
                "serviceType": "Autonomous AI Voice Telephony for North Indian Enterprises",
                "url": "https://ayush.company/north-india",
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
                  }
                },
                "areaServed": [
                  {
                    "@type": "AdministrativeArea",
                    "name": "North India"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Delhi NCR"
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
                    "@type": "AdministrativeArea",
                    "name": "Rajasthan"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Uttar Pradesh"
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
                "@id": "https://ayush.company/north-india#breadcrumb",
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
                    "name": "North India",
                    "item": "https://ayush.company/north-india"
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
