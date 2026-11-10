import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D WebGL & High-Performance Web Development | DestiX AI",
  description:
    "Next.js 15 App Router architecture, 60 FPS Three.js WebGL spatial experiences, kinetic Swiss typography, and sub-second page transitions engineered to convert high-ticket clients.",
  keywords: [
    "three js web development",
    "webgl agency delhi",
    "next js luxury real estate website",
    "high performance web development",
    "destix ai web architecture",
  ],
  alternates: {
    canonical: "https://ayush.company/services/3d-web",
  },
  openGraph: {
    title: "3D WebGL & High-Performance Web Development | DestiX AI",
    description:
      "100/100 Lighthouse performance, real-time WebGL shaders, and high-converting acquisition storefronts.",
    url: "https://ayush.company/services/3d-web",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI 3D WebGL & High-Performance Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D WebGL & High-Performance Web Development | DestiX AI",
    description:
      "Category-defining web flagships with sub-second page loads and tactile 3D spatial models.",
    images: ["https://ayush.company/opengraph-image.png"],
    creator: "@ayushmeena",
  },
};

export default function Services3DWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ayush.company/services/3d-web/#service",
        "name": "3D WebGL & High-Performance Web Architecture",
        "serviceType": "Next.js & WebGL Spatial Engineering",
        "provider": {
          "@id": "https://ayush.company/#organization",
        },
        "description": "High-performance digital storefronts built on Next.js 15, Three.js shaders, and conversion-engineered typography.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayush.company/services/3d-web/#breadcrumb",
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
            "name": "Services",
            "item": "https://ayush.company/solutions",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "3D Web & Performance",
            "item": "https://ayush.company/services/3d-web",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
