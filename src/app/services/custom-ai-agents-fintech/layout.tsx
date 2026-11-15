import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Agent Development for FinTech & Banking | DestiX AI",
  description:
    "Autonomous conversational telephony and multi-agent workflows for FinTech scale-ups, wealth managers, and private banks in London, New York, Zurich, and Dubai. FCA, FINRA, and SOC 2 Type II compliant voice KYC, accredited investor qualification, and fraud triage.",
  keywords: [
    "custom ai agent development fintech",
    "fintech ai voice agent",
    "ai agents for banking",
    "fca compliant voice ai",
    "finra ai voice telephony",
    "wealth management ai agent",
    "destix ai fintech"
  ],
  alternates: {
    canonical: "https://ayush.company/services/custom-ai-agents-fintech",
  },
};

export default function CustomAiAgentsFintechLayout({
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
                "@id": "https://ayush.company/services/custom-ai-agents-fintech#service",
                name: "Custom AI Agent Development for FinTech & Banking",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "FinTech Conversational AI & Autonomous Financial Telephony",
                areaServed: ["London", "New York", "Zurich", "Dubai", "Global"],
                description:
                  "Engineering secure, FCA/FINRA-compliant autonomous voice agents for financial institutions, hedge funds, and fintech scale-ups.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
