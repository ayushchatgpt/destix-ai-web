import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate AI Calling System for Builders in Gurgaon & Noida | DestiX AI",
  description:
    "Autonomous real estate voice AI for builders and channel partners in Gurgaon (Golf Course Rd, Cyber City) and Noida (Sector 150). Instant 99acres & MagicBricks callback, Hinglish voice qualification, and site visit booking.",
  keywords: [
    "real estate voice ai gurgaon",
    "ai telecaller for builders noida",
    "property lead calling ai delhi",
    "99acres magicbricks instant ai callback",
    "hinglish voice ai for real estate brokers",
    "dlf gurgaon real estate ai calling system",
    "DestiX AI Gurgaon real estate",
    "Ayush Meena Noida voice AI",
  ],
  alternates: {
    canonical:
      "https://ayush.company/solutions/real-estate-ai-calling-gurgaon-noida",
  },
  openGraph: {
    title:
      "Real Estate AI Calling System for Builders in Gurgaon & Noida | DestiX AI",
    description:
      "Sub-45s speed to lead for Gurgaon and Noida developers. Instant ad callbacks, ₹4 Cr–₹25 Cr budget qualification, and automated site tour booking.",
    url: "https://ayush.company/solutions/real-estate-ai-calling-gurgaon-noida",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
      images: [
      {
        url: "https://ayush.company/api/og?title=Real%20Estate%20AI%20Calling%20System%20for%20Builders%20in%20Gurgao...&category=Real%20Estate%20AI&badge=Sub-435ms%20Parity",
        width: 1200,
        height: 630,
        alt: "Real Estate AI Calling System for Builders in Gurgao...",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Real Estate AI Calling System for Builders in Gurgaon & Noida | DestiX AI",
    description:
      "Autonomous AI telecallers for Gurgaon and Noida builders. Instant 99acres and Meta ad callbacks.",
      images: ["https://ayush.company/api/og?title=Real%20Estate%20AI%20Calling%20System%20for%20Builders%20in%20Gurgao...&category=Real%20Estate%20AI&badge=Sub-435ms%20Parity"],
  },
};

export default function GurgaonNoidaCallingLayout({
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
                    "name": "Solutions",
                    "item": "https://ayush.company/solutions",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Real Estate AI Calling Gurgaon & Noida",
                    "item":
                      "https://ayush.company/solutions/real-estate-ai-calling-gurgaon-noida",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://ayush.company/solutions/real-estate-ai-calling-gurgaon-noida#service",
                "name":
                  "Real Estate AI Calling System for Builders in Gurgaon & Noida",
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
                  { "@type": "City", "name": "Gurugram" },
                  { "@type": "City", "name": "Noida" },
                  { "@type": "AdministrativeArea", "name": "Delhi NCR" }
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
