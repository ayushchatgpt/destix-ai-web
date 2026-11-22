import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Enterprise AI Voice Agents in the United States | DestiX AI",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents across the USA. Sub-500ms (435ms P50) voice latency, local US DIDs across 50 states, FCC/TCPA compliance, Twilio & Telnyx wholesale carrier interconnects, and private VPC deployment.",
  alternates: {
    canonical: "https://ayush.company/us",
  },
  openGraph: {
    title: "Best Enterprise AI Voice Agents in the United States | DestiX AI",
    description:
      "Deploy the #1 enterprise autonomous AI voice agents across the USA. Sub-500ms (435ms P50) voice latency, local US DIDs across 50 states, FCC/TCPA compliance, Twilio & Telnyx wholesale carrier interconnects, and private VPC deployment.",
    url: "https://ayush.company/us",
    siteName: "DestiX AI",
    type: "website",
  },
};

export default function Layout({
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
      "@id": "https://ayush.company/us#service",
      "name": "Enterprise AI Voice Agents in the USA | DestiX AI",
      "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Systems",
      "url": "https://ayush.company/us",
      "provider": {
        "@type": "Organization",
        "@id": "https://ayush.company/#organization",
        "name": "DestiX AI",
        "url": "https://ayush.company",
        "email": "ayushmeenadestixai@gmail.com",
        "telephone": "+918319699748",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        },
        "founder": {
          "@type": "Person",
          "name": "Ayush Meena",
          "jobTitle": "Principal AI Systems Architect",
          "url": "https://ayush.company/about",
          "sameAs": [
            "https://www.linkedin.com/in/ayush-meena-destixai",
            "https://github.com/ayushchatgpt"
          ]
        }
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "United States"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".aeo-direct-answer",
          ".faq-lead-answer"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ayush.company/us#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "DestiX AI",
          "item": "https://ayush.company"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "USA",
          "item": "https://ayush.company/us"
        }
      ]
    }
  ]
}),
        }}
      />
      {children}
    </>
  );
}
