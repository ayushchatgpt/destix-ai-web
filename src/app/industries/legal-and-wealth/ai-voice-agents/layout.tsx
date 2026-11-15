import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents for Law Firms & Wealth Management | DestiX AI",
  description:
    "Confidential, high-precision AI voice intake agents for elite law firms, private wealth managers, family offices, and financial advisory practices in New York, London, and Dubai.",
  keywords: [
    "ai voice agents for law firms",
    "legal intake ai receptionist",
    "wealth management ai phone agent",
    "family office ai voice receptionist",
    "attorney client privilege ai",
    "financial advisor ai caller",
    "destix ai legal voice",
    "best legal voice ai agent"
  ],
  alternates: {
    canonical: "https://ayush.company/industries/legal-and-wealth/ai-voice-agents",
  },
};

export default function LegalWealthIndustryLayout({
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
                "@id": "https://ayush.company/industries/legal-and-wealth/ai-voice-agents#service",
                name: "AI Voice Intake Agents for Legal & Wealth Advisory",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Legal Intake Automation & Private Wealth Client Qualification",
                areaServed: ["New York", "London", "Dubai", "Global"],
                description:
                  "Autonomous legal and wealth management telephony conducting structured conflict checks, qualifying prospective case values, and protecting partner billing time.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
