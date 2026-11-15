import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Readiness Diagnostic & Architectural Scorecard | DestiX AI",
  description:
    "Interactive 5-minute architectural diagnostic evaluating enterprise telephony, CRM integration maturity, data sovereignty, and speed-to-lead readiness. Built for CTOs, VPs of Engineering, and COOs.",
  keywords: [
    "ai readiness diagnostic",
    "enterprise ai audit",
    "ai voice agent readiness assessment",
    "telephony architecture diagnostic",
    "enterprise conversational ai readiness",
    "destix ai readiness tool"
  ],
  alternates: {
    canonical: "https://ayush.company/tools/ai-readiness-diagnostic",
  },
  openGraph: {
    title: "Enterprise AI Readiness Diagnostic & Architectural Scorecard | DestiX AI",
    description:
      "Audit your enterprise readiness for autonomous voice agents, CRM automation, and sovereign LLM workflows in 5 minutes.",
    url: "https://ayush.company/tools/ai-readiness-diagnostic",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise AI Readiness Diagnostic",
      },
    ],
  },
};

export default function AiReadinessLayout({
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
                "@type": "SoftwareApplication",
                "@id": "https://ayush.company/tools/ai-readiness-diagnostic#app",
                name: "DestiX AI Enterprise Readiness Diagnostic Tool",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                creator: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                description:
                  "Interactive engineering scorecard measuring CRM readiness, SIP trunking capabilities, compliance frameworks, and voice automation potential.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
