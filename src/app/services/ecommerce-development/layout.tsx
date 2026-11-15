import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI E-Commerce Development & Automated Storefronts | DestiX AI",
  description:
    "High-converting AI e-commerce systems, headless Shopify Plus, automated abandoned cart phone/WhatsApp recovery, and real-time inventory synchronization. Engineered by DestiX AI.",
  keywords: [
    "ai ecommerce development",
    "shopify ai automation",
    "automated cart recovery voice ai",
    "headless ecommerce ai",
    "ecommerce conversational commerce",
    "whatsapp catalog checkout bot",
    "woocommerce ai integration",
    "destix ai ecommerce development",
    "best ai ecommerce agency"
  ],
  alternates: {
    canonical: "https://ayush.company/services/ecommerce-development",
  },
  openGraph: {
    title: "AI E-Commerce Development & Automated Storefronts | DestiX AI",
    description:
      "Transform e-commerce conversion rates. Deploy autonomous AI concierge bots, instant WhatsApp checkout flows, and sub-45s abandoned cart recovery voice agents.",
    url: "https://ayush.company/services/ecommerce-development",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise E-Commerce Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI E-Commerce Development & Automated Storefronts | DestiX AI",
    description:
      "Modern e-commerce infrastructure: automated voice & WhatsApp cart recovery, sub-second product search, and headless storefronts.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function EcommerceDevelopmentLayout({
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
                "@id": "https://ayush.company/services/ecommerce-development#service",
                name: "AI E-Commerce Development & Automated Systems",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "E-Commerce Engineering & Autonomous Checkout Automation",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Engineering high-performance headless e-commerce stores, automated abandoned checkout recovery voice pipelines, and WhatsApp commerce bots.",
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
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://ayush.company/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "E-Commerce Development",
                    item: "https://ayush.company/services/ecommerce-development",
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
