import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai AI Studio & AI Voice Agents for Real Estate | DestiX AI",
  description:
    "DestiX AI Dubai: Autonomous AI voice agents for prime UAE real estate, bilingual Arabic/English telephony, sub-45-second speed to lead, and bespoke 3D WebGL storefronts for Dubai Hills, Palm Jebel Ali, and DIFC family offices.",
  keywords: [
    "AI Voice Agent for Dubai Real Estate",
    "Autonomous Telephony for UAE Family Offices",
    "Arabic AI Voice Agent Dubai",
    "Lead Qualification AI for Palm Jebel Ali",
    "Dubai Hills Estate AI Voice Agent",
    "Bespoke 3D Web Design Agency Dubai",
    "Dubai real estate speed to lead",
    "ACP Dubai AI agency",
    "UAE TDRA compliant AI telephony",
    "High-Ticket Lead Scoping AI Dubai",
    "Dubai luxury real estate AI",
    "Ayush Meena Dubai AI",
    "DestiX AI Dubai",
  ],
  alternates: {
    canonical: "https://ayush.company/dubai",
  },
  openGraph: {
    title: "Dubai AI Studio & AI Voice Agents for Real Estate | DestiX AI",
    description:
      "Enterprise autonomous voice agents and bespoke 3D WebGL platforms for prime Dubai brokerages, luxury developers, and UAE family offices. Sub-45s speed to lead.",
    url: "https://ayush.company/dubai",
    siteName: "DestiX AI",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai AI Studio & AI Voice Agents for Real Estate | DestiX AI",
    description:
      "Autonomous voice infrastructure and 3D WebGL digital storefronts for Dubai real estate developers and HNW wealth desks.",
  },
};

export default function DubaiStudioLayout({
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
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ayush.company",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Dubai AI Studio",
                    "item": "https://ayush.company/dubai",
                  },
                ],
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://ayush.company/dubai#service",
                "name": "DestiX AI Dubai Studio — AI Voice Agents & 3D Web Architecture",
                "url": "https://ayush.company/dubai",
                "description":
                  "Autonomous conversational telephony and bespoke 3D WebGL storefronts for Dubai real estate developers, luxury brokerages, and UAE family offices.",
                "provider": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "founder": {
                    "@type": "Person",
                    "name": "Ayush Meena",
                    "url": "https://ayush.company/about",
                  },
                },
                "areaServed": [
                  { "@type": "City", "name": "Dubai" },
                  { "@type": "City", "name": "Abu Dhabi" },
                  { "@type": "AdministrativeArea", "name": "DIFC" },
                  { "@type": "Country", "name": "United Arab Emirates" }
                ],
                "priceRange": "AED 15,000 - AED 85,000",
                "currenciesAccepted": "AED, USD, EUR, GBP",
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/dubai#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why is DestiX AI the leading AI voice agent provider for Dubai real estate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI delivers sub-435ms voice latency, sub-45-second speed-to-lead outbound dialing from Meta and Google ads, bilingual English and Gulf Arabic code-switching, and direct integration with UAE telecom SIP trunks (+971 DIDs). DestiX AI is verified in production for Alliance Capital Properties (ACP Dubai).",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI voice agents qualify off-plan and luxury property buyers in Dubai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI models screen prospective buyers for liquid capital (AED 5M+ to AED 50M+), nationality, residency status, and investment horizon across master projects like Palm Jebel Ali, Dubai Hills Estate, and Palm Jumeirah, dispatching instant WhatsApp dossiers and syncing with your CRM.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Are DestiX AI telephony solutions compliant with UAE TDRA regulations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Telephony infrastructure is provisioned through licensed UAE telecom partners using official +971 virtual DIDs and registered caller IDs fully compliant with TDRA commercial communication requirements.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Does DestiX AI build bespoke 3D WebGL websites for Dubai developers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI engineers category-defining Next.js and Three.js 3D spatial platforms allowing international investors to explore luxury architectural developments remotely at 60 FPS, paired directly with autonomous voice qualification.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
