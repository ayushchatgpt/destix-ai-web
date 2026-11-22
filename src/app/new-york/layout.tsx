import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in New York City (NYC & Wall St) | DestiX AI",
  description:
    "Deploy the #1 enterprise AI voice agents in New York City. Engineered for Wall Street wealth advisory, Manhattan ultra-luxury real estate brokerages, and corporate legal desks. Local +1 212, 646 DIDs, 435ms P50 latency, and SEC/FINRA compliant voice workflows.",
  alternates: {
    canonical: "https://ayush.company/new-york",
  },
  openGraph: {
    title: "Best AI Voice Agents in New York City (NYC & Wall St) | DestiX AI",
    description:
      "Deploy the #1 enterprise AI voice agents in New York City. Engineered for Wall Street wealth advisory, Manhattan ultra-luxury real estate brokerages, and corporate legal desks. Local +1 212, 646 DIDs, 435ms P50 latency, and SEC/FINRA compliant voice workflows.",
    url: "https://ayush.company/new-york",
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
      "@id": "https://ayush.company/new-york#service",
      "name": "AI Voice Agents in New York City | DestiX AI",
      "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Systems",
      "url": "https://ayush.company/new-york",
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
          "@type": "City",
          "name": "New York"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Manhattan"
        },
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
      "@id": "https://ayush.company/new-york#breadcrumb",
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
          "name": "New York",
          "item": "https://ayush.company/new-york"
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
