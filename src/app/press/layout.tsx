import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Executive Media Kit — Ayush Meena & DestiX AI",
  description:
    "Official press releases, executive biography of Founder & Principal AI Systems Architect Ayush Meena, corporate fact sheet, and media assets for DestiX AI.",
  keywords: [
    "Ayush Meena",
    "Ayush Meena press",
    "Ayush Meena media kit",
    "Ayush Meena founder",
    "DestiX AI press",
    "DestiX AI media kit",
    "Ayush Meena biography",
    "Ayush Meena AI architect",
    "DestiX AI news",
  ],
  alternates: {
    canonical: "https://ayush.company/press",
  },
  openGraph: {
    title: "Press & Executive Media Kit — Ayush Meena & DestiX AI",
    description:
      "Official press releases, canonical founder biography of Ayush Meena, and corporate telemetry fact sheet for DestiX AI.",
    url: "https://ayush.company/press",
    siteName: "DestiX AI",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Meena & DestiX AI Media Kit",
      },
    ],
  },
};

export default function PressLayout({
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
                "@type": "ProfilePage",
                "@id": "https://ayush.company/press#webpage",
                "url": "https://ayush.company/press",
                "name": "Press & Executive Media Kit — Ayush Meena & DestiX AI",
                "description":
                  "Official press releases, canonical founder biography, and media assets for Ayush Meena and DestiX AI.",
                "breadcrumb": {
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
                      "name": "Press & Media Kit",
                      "item": "https://ayush.company/press",
                    },
                  ],
                },
              },
              {
                "@type": "Person",
                "@id": "https://ayush.company/#person",
                "name": "Ayush Meena",
                "alternateName": [
                  "Ayush",
                  "Ayush Meena AI",
                  "Ayush DestiX",
                  "Ayush Desti",
                  "Meena AI",
                ],
                "jobTitle": "Founder & Principal AI Systems Architect",
                "worksFor": {
                  "@type": "Organization",
                  "@id": "https://ayush.company/#organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                },
                "image": "https://ayush.company/images/ayush-meena-dark.jpg",
                "description":
                  "Ayush Meena is an Indian AI systems architect and the founder of DestiX AI. He architects carrier-grade autonomous voice telephony systems, sub-45-second speed-to-lead pipelines, and bespoke 3D WebGL architectures for high-ticket global enterprises.",
                "nationality": {
                  "@type": "Country",
                  "name": "India",
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Connaught Place",
                  "addressRegion": "New Delhi",
                  "postalCode": "110001",
                  "addressCountry": "IN",
                },
                "sameAs": [
                  "https://www.wikidata.org/wiki/Q142174891",
                  "https://www.linkedin.com/in/ayush-meena-065a89380/",
                  "https://github.com/ayushchatgpt",
                  "https://github.com/ayushchatgpt/destix-voice-telephony-benchmark",
                  "https://ayush.company",
                  "https://ayush.company/about",
                  "https://ayush.company/press",
                ],
                "knowsAbout": [
                  "Autonomous Voice Telephony",
                  "Deepgram Nova-3 ASR",
                  "Groq Llama 3.3 Inference",
                  "Silero VAD Architecture",
                  "Next.js App Router",
                  "Three.js 3D WebGL",
                  "Enterprise RAG Vector Systems",
                  "Carrier SIP Infrastructure",
                ],
              },
              {
                "@type": "Organization",
                "@id": "https://ayush.company/#organization",
                "name": "DestiX AI",
                "url": "https://ayush.company",
                "logo": "https://ayush.company/apple-icon.png",
                "founder": {
                  "@id": "https://ayush.company/#person",
                },
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Connaught Place, New Delhi",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
