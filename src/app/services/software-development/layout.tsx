import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Software Development & Full-Stack Systems | DestiX AI",
  description:
    "Full-stack custom AI application development. Next.js 16, Python FastAPI, streaming WebSockets, LLM vector search (pgvector/Pinecone), and private containerized cloud deployments. Engineered by Ayush Meena.",
  keywords: [
    "ai software development agency",
    "custom ai application development",
    "enterprise ai software engineering",
    "llm application development",
    "python fastapi ai engineering",
    "nextjs full stack ai agency",
    "custom rag systems development",
    "destix ai software development",
    "best custom ai development agency"
  ],
  alternates: {
    canonical: "https://ayush.company/services/software-development",
  },
  openGraph: {
    title: "Custom AI Software Development & Full-Stack Systems | DestiX AI",
    description:
      "From high-throughput FastAPI streaming microservices to responsive Next.js architectures. We build robust, production-hardened AI software that scales to millions of requests.",
    url: "https://ayush.company/services/software-development",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise AI Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Software Development & Full-Stack Systems | DestiX AI",
    description:
      "Enterprise custom AI software development: low-latency streaming endpoints, sovereign data architecture, and modern full-stack web applications.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function SoftwareDevelopmentLayout({
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
                "@id": "https://ayush.company/services/software-development#service",
                name: "Custom AI Software Development & Engineering",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Full-Stack Software Engineering & AI Applications",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Architecting and developing custom enterprise software, AI microservices, streaming web platforms, and internal operational tooling.",
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
                    name: "Software Development",
                    item: "https://ayush.company/services/software-development",
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
