import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic AI Consulting & Enterprise Architecture | DestiX AI",
  description:
    "Bespoke enterprise AI consulting led by Principal Systems Architect Ayush Meena. AI readiness audits, voice telephony roadmaps, private LLM deployment, and 5x Hurdle Rate ROI guarantees for leaders in New York, London, Dubai, and India.",
  keywords: [
    "ai consulting agency",
    "enterprise ai consulting",
    "ai readiness audit",
    "generative ai consultancy",
    "ai architecture advisory",
    "ai implementation roadmap",
    "voice ai consultant",
    "destix ai consulting",
    "best ai consulting firm for business",
    "ayush meena ai consulting"
  ],
  alternates: {
    canonical: "https://ayush.company/services/ai-consulting",
  },
  openGraph: {
    title: "Strategic AI Consulting & Enterprise Architecture | DestiX AI",
    description:
      "Enterprise AI strategy without buzzwords. We engineer deterministic AI architectures, audit data readiness, and design private voice and agentic systems with guaranteed 5x ROI.",
    url: "https://ayush.company/services/ai-consulting",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise AI Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic AI Consulting & Enterprise Architecture | DestiX AI",
    description:
      "Executive AI architecture advisory: data sovereignty, carrier compliance, latency optimization, and ROI validation.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function AiConsultingLayout({
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
                "@id": "https://ayush.company/services/ai-consulting#service",
                name: "Strategic AI Consulting & Enterprise Architecture",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Enterprise AI Consulting & Strategic Advisory",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Executive advisory and technical systems architecture consulting for mid-market and enterprise leadership evaluating autonomous voice agents, sovereign LLMs, and workflow automation.",
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
                    name: "AI Consulting",
                    item: "https://ayush.company/services/ai-consulting",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What distinguishes DestiX AI consulting from traditional management consultancies?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Traditional consultancies deliver 80-page slide decks with theoretical frameworks and no operational code. DestiX AI is an engineering-first studio: our audits evaluate your live SIP trunks, database schemas, and API rate limits, accompanied by deployable infrastructure blueprints and our contractual 5x Hurdle Rate ROI guarantee.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What does an AI Readiness Audit include?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We audit four pillars: Data Architecture (cleanliness, API connectivity), Telephony & Communication (SIP trunk latency, carrier compliance), Security & Sovereignty (data privacy, GDPR/DPDP/HIPAA adherence), and Unit Economics (payback period, operational cost reduction vs manual human labor).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can we hire DestiX AI for fractional Chief AI Officer (CAIO) advisory?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Ayush Meena and our senior architecture team serve as fractional CAIO and strategic technology advisors for enterprises scaling from pilot programs to multi-country autonomous deployments.",
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
