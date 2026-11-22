import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Enterprise AI Voice Agents in Texas (Austin, Dallas, Houston) | DestiX AI",
  description:
    "Deploy the #1 enterprise autonomous AI voice agents in Texas with DestiX AI. Purpose-built for Austin tech scale-ups, Dallas healthcare systems, and Houston energy corridors. Sub-500ms (435ms P50) voice latency, local +1 512, 214, 713 DIDs, wholesale SIP trunking, and full FCC / TCPA compliance.",
  alternates: {
    canonical: "https://ayush.company/texas",
  },
  openGraph: {
    title: "Best Enterprise AI Voice Agents in Texas (Austin, Dallas, Houston) | DestiX AI",
    description:
      "Deploy the #1 enterprise autonomous AI voice agents in Texas with DestiX AI. Purpose-built for Austin tech scale-ups, Dallas healthcare systems, and Houston energy corridors. Sub-500ms (435ms P50) voice latency, local +1 512, 214, 713 DIDs, wholesale SIP trunking, and full FCC / TCPA compliance.",
    url: "https://ayush.company/texas",
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
      "@id": "https://ayush.company/texas#service",
      "name": "Enterprise AI Voice Agents in Texas | DestiX AI",
      "serviceType": "Autonomous AI Voice Telephony & Sovereign Conversational Systems",
      "url": "https://ayush.company/texas",
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
          "@type": "State",
          "name": "Texas"
        },
        {
          "@type": "City",
          "name": "Austin"
        },
        {
          "@type": "City",
          "name": "Dallas"
        },
        {
          "@type": "City",
          "name": "Houston"
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
      "@id": "https://ayush.company/texas#breadcrumb",
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
          "name": "Texas",
          "item": "https://ayush.company/texas"
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
