import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label AI Voice Agent Partner | Fractional AI Dev for Agencies | Ayush.company",
  description:
    "Partner with Ayush.company as your white-label AI voice agent and Next.js engineering practice. Deliver sub-450ms voice bots and bespoke WebGL web platforms to your agency clients at 25%–35% margins under strict NDA.",
  keywords: [
    "white label ai voice agent partner",
    "fractional ai engineer for digital agencies",
    "white label voice ai agency partner",
    "nextjs frontend ai backend partner",
    "retell vapi white label agency developer",
    "voice ai reseller agency",
    "white label conversational ai",
    "sub 500ms voice bot agency partner",
    "white label real estate ai",
    "agency white label automation partner",
  ],
  alternates: {
    canonical: "https://ayush.company/white-label-ai-partner",
  },
  openGraph: {
    title: "White Label AI Voice Agent Partner | Fractional AI Dev for Agencies | Ayush.company",
    description:
      "Deliver sub-450ms AI voice agents and bespoke Next.js/WebGL applications to your clients at 25%–35% margins. 100% white-labeled under your agency brand with strict NDA.",
    url: "https://ayush.company/white-label-ai-partner",
    siteName: "Ayush.company",
    locale: "en_US",
    type: "website",
      images: [
      {
        url: "https://ayush.company/api/og?title=White%20Label%20AI%20Voice%20Agent%20Partner&category=Agency%20Partner&badge=White-Label%20Studio",
        width: 1200,
        height: 630,
        alt: "White Label AI Voice Agent Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Label AI Voice Agent Partner | Ayush.company",
    description:
      "Fractional AI voice and frontend engineering for design, marketing, and enterprise consultancies.",
      images: ["https://ayush.company/api/og?title=White%20Label%20AI%20Voice%20Agent%20Partner&category=Agency%20Partner&badge=White-Label%20Studio"],
  },
};

export default function WhiteLabelAiPartnerLayout({
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
                    "name": "White Label AI Partner",
                    "item": "https://ayush.company/white-label-ai-partner",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": "https://ayush.company/white-label-ai-partner#service",
                "name": "White Label AI Voice Agent & Frontend Engineering Partner",
                "alternateName": [
                  "Fractional AI Engineer for Digital Agencies",
                  "White Label Voice AI Agency Partner",
                  "Next.js Frontend & AI Backend Execution Partner",
                ],
                "description":
                  "Bespoke white-label engineering partnership for digital, creative, and marketing agencies. We architect low-latency AI voice agents, CRM automation pipelines, and high-performance WebGL platforms under strict non-disclosure agreements.",
                "provider": {
                  "@type": "Organization",
                  "name": "Ayush.company",
                  "alternateName": "DestiX AI",
                  "url": "https://ayush.company",
                  "founder": {
                    "@type": "Person",
                    "name": "Ayush Meena",
                    "url": "https://ayush.company/about",
                  },
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/white-label-ai-partner#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does the white-label AI partnership work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Your agency sells high-ticket AI voice telephony, CRM automations, or 3D digital storefronts to your clients. Ayush.company acts as your stealth engineering department under strict NDA, architecting, deploying, and maintaining the systems while you maintain 100% client ownership and billing.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "What profit margins do partner agencies typically maintain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Agency partners maintain healthy 25% to 35%+ gross margins. We offer transparent wholesale sprint pricing or fractional monthly engineering retainers, allowing you to package turnkey AI solutions at premium market rates.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Which voice and telephony stacks do you support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We engineer on Retell AI, Vapi, Deepgram Nova-2, Cartesia Sonic, Twilio SIP Trunking, ElevenLabs, OpenAI Realtime, and custom WebSocket pipelines tuned to sub-450ms human conversational latency.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Will our clients ever see Ayush.company or DestiX AI branding?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Never. All client deliverables, telephony caller IDs, CRM webhooks, and administrative portals are 100% white-labeled with your agency's logo, domain, and branding.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Can you join client calls as our internal AI lead?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Ayush Meena and our technical leads can represent your agency as your fractional 'Head of AI Solutions' or 'Lead AI Telephony Architect' on high-ticket sales calls using your agency email address.",
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
