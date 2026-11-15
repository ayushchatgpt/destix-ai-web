import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise RAG Implementation Agency (London & Global) | DestiX AI",
  description:
    "Production-grade hybrid Retrieval-Augmented Generation (RAG) architecture for enterprise knowledge retrieval. Zero hallucinations, sub-120ms vector search (pgvector, Pinecone, Qdrant), and sovereign private VPC hosting. Engineered by Ayush Meena.",
  keywords: [
    "enterprise rag implementation agency",
    "enterprise rag agency london",
    "custom rag development",
    "hybrid vector search agency",
    "deterministic rag systems",
    "pgvector enterprise implementation",
    "destix ai rag agency"
  ],
  alternates: {
    canonical: "https://ayush.company/services/enterprise-rag-implementation",
  },
};

export default function EnterpriseRagLayout({
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
                "@id": "https://ayush.company/services/enterprise-rag-implementation#service",
                name: "Enterprise RAG Implementation & Hybrid Vector Engineering",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Enterprise RAG Architecture & Vector Database Engineering",
                areaServed: ["London", "New York", "Europe", "Global"],
                description:
                  "Architecting deterministic, zero-hallucination hybrid RAG systems over millions of enterprise documents, ERP data pipelines, and internal knowledge stores.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
