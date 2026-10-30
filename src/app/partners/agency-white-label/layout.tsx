import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency White-Label AI Voice Partner Program | DestiX AI",
  description:
    "Resell enterprise AI voice agents and 3D websites under your agency's brand. DestiX AI engineers and manages the telephony infrastructure while you retain 100% of the client relationship and 25-35% monthly margins.",
  keywords: [
    "white label AI voice agents",
    "agency white label AI",
    "resell AI voice agents India",
    "white label conversational AI",
    "AI voice agent partner program",
    "DestiX AI agency partner",
  ],
  alternates: {
    canonical: "https://ayush.company/partners/agency-white-label",
  },
  openGraph: {
    title: "Agency White-Label AI Voice Partner Program | DestiX AI",
    description:
      "Turnkey white-label AI voice telephony for performance marketing agencies, media buyers, and web studios.",
    url: "https://ayush.company/partners/agency-white-label",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/api/og?title=Agency%20White-Label%20AI%20Voice%20Partner%20Program&category=Agency%20Partner&badge=White-Label%20Studio",
        width: 1200,
        height: 630,
        alt: "Agency White-Label AI Voice Partner Program",
      },
    ],
  },
};

export default function AgencyPartnerLayout({
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
            "@type": "Service",
            "@id": "https://ayush.company/partners/agency-white-label/#service",
            "name": "White-Label AI Voice Agency Partner Program",
            "serviceType": "Turnkey White-Label Conversational Infrastructure",
            "provider": {
              "@type": "Organization",
              "name": "DestiX AI",
              "url": "https://ayush.company",
            },
            "description": "White-label AI voice telephony infrastructure allowing digital marketing agencies and media buyers to resell enterprise conversational bots under their own brand.",
          }),
        }}
      />
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ayush.company"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Partners",
                "item": "https://ayush.company"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Agency White-Label Partner Program",
                "item": "https://ayush.company/partners/agency-white-label"
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
