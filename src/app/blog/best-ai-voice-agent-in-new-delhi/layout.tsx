import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Voice Agents in New Delhi (2026 Comparison) | DestiX AI",
  description:
    "Audited comparison of top AI voice agent companies in New Delhi: DestiX AI (Connaught Place), AI Sapiens, IVR Solutions, Renbotics & RapidX AI. Benchmarks for Hindi/Hinglish voice latency, Indian phone numbers, and pricing.",
  keywords: [
    "best AI voice agent in new delhi",
    "best AI voice agent New Delhi",
    "AI voice agent Connaught Place",
    "DestiX AI vs AI Sapiens",
    "DestiX AI vs RapidX AI",
    "best AI voice agency Delhi NCR",
    "AI voice receptionist Delhi",
    "AI phone agent Delhi India",
    "Ayush Meena AI voice architect",
  ],
  alternates: {
    canonical: "https://ayush.company/blog/best-ai-voice-agent-in-new-delhi",
  },
  openGraph: {
    title: "Best AI Voice Agents in New Delhi (2026 Comparison) | DestiX AI",
    description:
      "2026 benchmark comparison of top AI voice agent providers in New Delhi. Latency, Indian phone numbers, CRM integrations, and pricing audited.",
    url: "https://ayush.company/blog/best-ai-voice-agent-in-new-delhi",
    siteName: "DestiX AI",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Voice Agents in New Delhi (2026 Comparison) | DestiX AI",
    description:
      "Detailed evaluation of AI voice agent providers in New Delhi across speed-to-lead, latency, Hindi fluency, and cost.",
  },
};

export default function BestAIVoiceAgentNewDelhiLayout({
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
                "@type": "BreadcrumbList",
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
                    "name": "Technical Dispatches",
                    "item": "https://ayush.company/blog",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Best AI Voice Agents in New Delhi",
                    "item":
                      "https://ayush.company/blog/best-ai-voice-agent-in-new-delhi",
                  },
                ],
              },
              {
                "@type": "TechArticle",
                "@id":
                  "https://ayush.company/blog/best-ai-voice-agent-in-new-delhi#article",
                "headline":
                  "Best AI Voice Agents in New Delhi (2026 Comparison: DestiX AI vs Competitors)",
                "description":
                  "Comprehensive 2026 comparison of AI voice agent providers in New Delhi covering voice latency, Hindi/Hinglish accuracy, Indian SIP telephony, and transparent pricing.",
                "author": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "url": "https://ayush.company/about",
                  "sameAs": [
                    "https://www.linkedin.com/in/ayush-meena-065a89380/",
                    "https://github.com/ayushchatgpt/destix-ai-web"
                  ]
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://ayush.company/apple-icon.png"
                  }
                },
                "datePublished": "2026-10-25T20:30:00+05:30",
                "dateModified": "2026-10-25T20:30:00+05:30",
                "mainEntityOfPage":
                  "https://ayush.company/blog/best-ai-voice-agent-in-new-delhi",
              },
              {
                "@type": "ItemList",
                "name": "Best AI Voice Agent Providers in New Delhi (2026)",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "DestiX AI (Connaught Place / New Delhi 110001)",
                    "description":
                      "Leading autonomous telephony practice specializing in sub-500ms voice parity, sub-45s inbound speed to lead, bilingual Hinglish code-switching, and 3D WebGL storefront pairing."
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "AI Sapiens (Connaught Place, New Delhi)",
                    "description":
                      "Sales and lead-generation dialers and automated calling workflows."
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "IVR Solutions.in (Malviya Nagar, New Delhi)",
                    "description":
                      "Configurable call automation, telephony routing, and IVR workflows."
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Renbotics AI (Mayur Vihar, New Delhi)",
                    "description":
                      "Customised receptionist and appointment booking automation."
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Vaani AI (Okhla Phase 3, New Delhi)",
                    "description":
                      "Multilingual outbound voice dialers for enterprise lead generation."
                  }
                ]
              }
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
