import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DestiX AI vs Yellow.ai, Jio Haptik, Exotel & Gnani.ai (2026 Audit) | DestiX AI",
  description:
    "Architectural comparison of DestiX AI against enterprise platforms Yellow.ai (Nexus VOX), Jio Haptik, Exotel, and Gnani.ai. Benchmarking sub-435ms speech streaming, colloquial Hinglish/Arabic, and unit economics.",
  keywords: [
    "destix ai vs yellow ai",
    "yellow ai nexus vox alternative",
    "destix ai vs jio haptik",
    "destix ai vs exotel",
    "destix ai vs gnani ai",
    "conversational ai platforms india comparison",
    "enterprise voice ai india",
    "sub 500ms voice agent india",
  ],
  alternates: {
    canonical: "https://ayush.company/blog/destix-ai-vs-yellow-ai-haptik-exotel-gnani",
  },
  openGraph: {
    title: "DestiX AI vs Yellow.ai, Jio Haptik, Exotel & Gnani.ai: 2026 Enterprise Audit",
    description:
      "Enterprise evaluation comparing native speech-to-speech custom engineering against funded chatbot platforms across latency, language nuance, and annual software seat contracts.",
    url: "https://ayush.company/blog/destix-ai-vs-yellow-ai-haptik-exotel-gnani",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-02-05T00:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    authors: ["https://ayush.company/about"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DestiX AI vs Yellow.ai, Jio Haptik, Exotel & Gnani.ai (2026 Audit)",
    description:
      "Enterprise comparison of custom sovereign voice architecture vs. funded conversational bot platforms.",
  },
};

export default function YellowHaptikExotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://ayush.company/blog/destix-ai-vs-yellow-ai-haptik-exotel-gnani/#article",
        "isPartOf": {
          "@id": "https://ayush.company/#website",
        },
        "headline": "DestiX AI vs Yellow.ai, Jio Haptik, Exotel & Gnani.ai: 2026 Enterprise Architecture Audit",
        "description": "Comparative technical evaluation of native speech-to-speech engineering vs enterprise omnichannel chatbot platforms in India and global markets.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://ayush.company/blog/destix-ai-vs-yellow-ai-haptik-exotel-gnani",
        "datePublished": "2026-02-05T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "author": {
          "@type": "Person",
          "@id": "https://ayush.company/#person",
          "name": "Ayush Meena",
          "jobTitle": "Principal AI Systems Architect",
          "url": "https://ayush.company/about",
          "sameAs": "https://www.wikidata.org/wiki/Q142174891",
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://ayush.company/#organization",
          "name": "DestiX AI",
          "url": "https://ayush.company",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayush.company/blog/destix-ai-vs-yellow-ai-haptik-exotel-gnani/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ayush.company",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Research & Blog",
            "item": "https://ayush.company/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "DestiX AI vs Yellow.ai, Haptik, Exotel & Gnani.ai",
            "item": "https://ayush.company/blog/destix-ai-vs-yellow-ai-haptik-exotel-gnani",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ayush.company/blog/destix-ai-vs-yellow-ai-haptik-exotel-gnani/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does DestiX AI compare to Yellow.ai and Jio Haptik?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yellow.ai and Jio Haptik were architected as text-first omnichannel chatbot platforms that later added voice layers, resulting in 1,200ms to 2,500ms conversational turnaround latency and requiring $35,000 to $100,000+ annual software seat licenses. DestiX AI was built from day one as a native streaming speech-to-speech voice core, delivering an audited 435ms P50 latency with wholesale pass-through telephony (~₹4.50–₹7.50/min) and zero recurring software seat taxes.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the difference between DestiX AI and Exotel or Ameyo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Exotel and Ameyo are telecommunications and cloud contact center infrastructure providers providing virtual numbers, SIP lines, and basic IVR routing. They are not specialized AI voice agent developers. DestiX AI partners directly with Tier-1 carriers like Exotel, Tata Tele, and Airtel for underlying PRI trunks, while engineering the sub-435ms conversational reasoning, Silero VAD, and CRM state machine layer on top.",
            },
          },
          {
            "@type": "Question",
            "name": "How does DestiX AI handle Indian languages compared to Gnani.ai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gnani.ai provides speech recognition APIs across multiple Indian languages. DestiX AI builds turnkey end-to-end conversational pipelines that handle real-world colloquial code-switching (such as North Indian Hinglish, Tanglish, and Marathi) paired with instant portal webhook triggers (<45s) and automated WhatsApp confirmation passes.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
