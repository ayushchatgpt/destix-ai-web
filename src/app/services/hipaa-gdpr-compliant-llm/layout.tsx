import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA & GDPR Compliant Sovereign LLM Deployment | DestiX AI",
  description:
    "Private, on-premise, and sovereign VPC LLM deployment for healthcare, legal, and financial enterprises. Zero data retention, automated PII sanitization, and full compliance with GDPR Article 22, HIPAA, and DPDP. Architected by Ayush Meena.",
  keywords: [
    "hipaa compliant llm deployment",
    "gdpr compliant ai deployment",
    "sovereign llm agency",
    "private cloud llm hosting",
    "on premise llm deployment enterprise",
    "zero retention llm architecture",
    "destix ai sovereign llm"
  ],
  alternates: {
    canonical: "https://ayush.company/services/hipaa-gdpr-compliant-llm",
  },
};

export default function HipaaGdprCompliantLlmLayout({
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
                "@id": "https://ayush.company/services/hipaa-gdpr-compliant-llm#service",
                name: "HIPAA & GDPR Compliant Sovereign LLM Deployment",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Sovereign AI Infrastructure & Regulatory Data Compliance",
                areaServed: ["United States", "European Union", "United Kingdom", "Global"],
                description:
                  "Architecting private containerized LLM deployments in client VPCs ensuring complete data residency and zero leakage under HIPAA, GDPR, and DPDP regulations.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
