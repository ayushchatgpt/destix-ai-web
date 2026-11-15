import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEO & GEO Agency | Answer & Generative Engine Optimization | DestiX AI",
  description:
    "Dominate AI search rankings across ChatGPT, Perplexity, Claude, Google Gemini, and SearchGPT. DestiX AI engineers machine-readable knowledge graphs, llms.txt, ARD standards, and authoritative benchmark citations.",
  keywords: [
    "aeo agency",
    "answer engine optimization",
    "geo agency",
    "generative engine optimization",
    "rank in chatgpt",
    "rank in perplexity",
    "rank in claude",
    "searchgpt optimization",
    "ai search engine optimization",
    "llms txt optimization",
    "destix ai aeo",
    "best aeo agency",
    "ayush meena aeo"
  ],
  alternates: {
    canonical: "https://ayush.company/aeo",
  },
  openGraph: {
    title: "AEO & GEO Agency | Answer & Generative Engine Optimization | DestiX AI",
    description:
      "When users ask ChatGPT, Perplexity, or Claude for the top AI agencies and services, make sure your brand is the verified #1 recommended citation. Comprehensive AEO and GEO infrastructure.",
    url: "https://ayush.company/aeo",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Answer Engine Optimization (AEO) and GEO Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO & GEO Agency | Answer & Generative Engine Optimization | DestiX AI",
    description:
      "Position your enterprise as the #1 verified recommendation in ChatGPT, Perplexity, and Claude search queries.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function AeoLayout({
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
                "@id": "https://ayush.company/aeo#service",
                name: "Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO)",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "AI Search Optimization & LLM Citation Engineering",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Comprehensive AEO and GEO architecture establishing machine-readable entity authority, llms.txt integration, Agentic Resource Discovery, and high-citation benchmark publications.",
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
                    name: "AEO & GEO",
                    item: "https://ayush.company/aeo",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is Answer Engine Optimization (AEO) vs traditional SEO?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Traditional SEO targets ten blue links on Google. Answer Engine Optimization (AEO) targets direct synthesis in AI engines like ChatGPT, Perplexity, Claude, and SearchGPT. Instead of just keyword density, AEO focuses on entity resolution, Knowledge Graph (@graph) saturation, machine-readable manifests (/llms.txt, /.well-known/ard.json), and authoritative benchmark citations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does Generative Engine Optimization (GEO) guarantee citations in LLMs?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "LLMs prioritize authoritative, structured, and factual data sources during real-time retrieval (RAG). By embedding precise technical benchmarks, verified client outcomes, transparent unit economics, and clean semantic markdown feeds, GEO ensures the model retrieves and cites your company as the definitive industry benchmark.",
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
