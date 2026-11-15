import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Converting AI Landing Page Design & 3D Web Experiences | DestiX AI",
  description:
    "Luxury 3D WebGL and editorial landing page design for high-ticket AI, real estate, and enterprise technology brands. Sub-second load speeds, warm paper aesthetics, and conversion rate optimization (CRO).",
  keywords: [
    "ai landing page design",
    "3d webgl landing pages",
    "b2b enterprise landing page agency",
    "high converting landing page design",
    "luxury web design studio",
    "conversion rate optimization ai",
    "three js landing page design",
    "destix ai landing page design",
    "best landing page design agency"
  ],
  alternates: {
    canonical: "https://ayush.company/services/landing-page-design",
  },
  openGraph: {
    title: "High-Converting AI Landing Page Design & 3D Web Experiences | DestiX AI",
    description:
      "Stand apart from generic cookie-cutter templates. We craft museum-grade typography, interactive 3D WebGL scenes, and conversion-optimized landing pages that close high-ticket clients.",
    url: "https://ayush.company/services/landing-page-design",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise Landing Page Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Converting AI Landing Page Design & 3D Web Experiences | DestiX AI",
    description:
      "Architectural typography, Three.js 3D WebGL, and high-conversion landing page engineering.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function LandingPageDesignLayout({
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
                "@id": "https://ayush.company/services/landing-page-design#service",
                name: "High-Converting AI Landing Page Design & 3D Web Experiences",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Conversion Rate Optimization & WebGL Interactive Design",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Designing and engineering bespoke 3D WebGL, Next.js 16 high-conversion landing pages for high-ticket real estate, AI agencies, and venture-backed SaaS.",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://ayush.company",
                  },
                  {
                    "@type": "Services",
                    position: 2,
                    name: "Services",
                    item: "https://ayush.company/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Landing Page Design",
                    item: "https://ayush.company/services/landing-page-design",
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
