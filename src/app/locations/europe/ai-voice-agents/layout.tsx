import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent Agency for Europe | Paris, Berlin, Amsterdam, Zurich | DestiX AI",
  description:
    "Enterprise autonomous AI voice agent agency for European markets. Deploy sub-500ms voice telephony across Paris, Berlin, Amsterdam, Zurich, Dublin, and Stockholm. Full GDPR Article 22 compliance, ePrivacy compliance, sovereign EU cloud infrastructure, multilingual support in 8 European languages, and local SIP trunking (+33, +49, +31, +41, +353, +46).",
  keywords: [
    "AI voice agent Europe",
    "AI agency Paris",
    "AI voice agent Berlin",
    "AI automation Europe",
    "AI voice agent Amsterdam",
    "AI agency Zurich",
    "enterprise AI Europe",
    "GDPR compliant AI voice",
    "multilingual AI voice agent Europe",
    "AI for European real estate",
    "DestiX AI Europe",
    "AI voice agent Dublin",
    "AI voice agent Stockholm",
    "European AI telephony agency",
    "AI voice agent Switzerland",
    "ePrivacy compliant voice bot",
    "EU SIP trunking AI agents",
    "PropTech AI voice agents Europe",
    "Fintech voice KYC Europe",
    "Healthcare AI voice receptionist Europe",
    "French German Dutch Italian AI voice agent",
    "Article 22 GDPR automated voice agent",
    "European enterprise conversational AI",
    "Ayush Meena DestiX AI Europe",
    "Twilio Vonage EU SIP trunking",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/europe/ai-voice-agents",
  },
  openGraph: {
    title: "AI Voice Agent Agency for Europe | Paris, Berlin, Amsterdam, Zurich | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony across Paris, Berlin, Amsterdam, Zurich, Dublin, and Stockholm. GDPR-compliant, sub-500ms acoustic latency, 8 European languages, and European carrier SIP trunking.",
    url: "https://ayush.company/locations/europe/ai-voice-agents",
    siteName: "DestiX AI",
    images: [
      {
        url: "https://ayush.company/og-europe.png",
        width: 1200,
        height: 630,
        alt: "AI Voice Agent Agency for Europe - DestiX AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent Agency for Europe | Paris, Berlin, Amsterdam, Zurich | DestiX AI",
    description:
      "Deploy GDPR-compliant autonomous AI voice agents across European financial and tech hubs. Sub-500ms latency, local European DIDs (+33/+49/+31/+41/+353/+46), and multilingual code-switching.",
    images: ["https://ayush.company/og-europe.png"],
  },
};

export default function EuropeLocationLayout({
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
                "@type": "ProfessionalService",
                "@id": "https://ayush.company/locations/europe/ai-voice-agents/#service",
                "name": "AI Voice Agent Agency for Europe | DestiX AI",
                "alternateName": [
                  "DestiX AI Europe",
                  "European AI Voice Agent Agency",
                  "Enterprise AI Voice Telephony Europe",
                  "GDPR Compliant AI Voice Agents Europe",
                  "AI Voice Agency Paris Berlin Amsterdam Zurich Dublin Stockholm"
                ],
                "serviceType": "Autonomous AI Voice Telephony, Conversational Infrastructure & Multi-Market Telephony",
                "provider": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "founder": {
                    "@type": "Person",
                    "name": "Ayush Meena",
                    "url": "https://ayush.company/about"
                  }
                },
                "areaServed": [
                  { "@type": "Continent", "name": "Europe" },
                  { "@type": "Country", "name": "European Union" },
                  { "@type": "City", "name": "Paris", "containedInPlace": { "@type": "Country", "name": "France" } },
                  { "@type": "City", "name": "Berlin", "containedInPlace": { "@type": "Country", "name": "Germany" } },
                  { "@type": "City", "name": "Amsterdam", "containedInPlace": { "@type": "Country", "name": "Netherlands" } },
                  { "@type": "City", "name": "Zurich", "containedInPlace": { "@type": "Country", "name": "Switzerland" } },
                  { "@type": "City", "name": "Dublin", "containedInPlace": { "@type": "Country", "name": "Ireland" } },
                  { "@type": "City", "name": "Stockholm", "containedInPlace": { "@type": "Country", "name": "Sweden" } },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "Switzerland" }
                ],
                "description": "DestiX AI engineers enterprise-grade autonomous conversational AI voice telephony across Europe. Operating under strict GDPR Article 22 compliance, ePrivacy Directives, and carrier-grade European SIP trunking across Paris, Berlin, Amsterdam, Zurich, Dublin, and Stockholm.",
                "url": "https://ayush.company/locations/europe/ai-voice-agents",
                "priceRange": "€2,000 - €75,000",
                "currenciesAccepted": "EUR, CHF, GBP, USD"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/locations/europe/ai-voice-agents/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ayush.company"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Locations",
                    "item": "https://ayush.company/locations"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "AI Voice Agents for Europe",
                    "item": "https://ayush.company/locations/europe/ai-voice-agents"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/locations/europe/ai-voice-agents/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI guarantee full GDPR Article 22 and ePrivacy compliance for European voice agents?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI deploys privacy-by-design architecture adhering strictly to GDPR Article 22 (Automated Individual Decision-Making) and the European ePrivacy Directive. Our voice agents provide mandatory upfront transparency disclosure informing callers they are speaking with an autonomous AI voice concierge, instant zero-latency escalation to human operators upon request, and ephemeral data handling with zero persistent voice biometric retention. All voice telemetry, call transcripts, and embeddings reside exclusively within sovereign EU cloud data centers located in Frankfurt (AWS eu-central-1) and Dublin (AWS eu-west-1), protected under binding Data Processing Agreements (DPAs) and ISO 27001 standards."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which languages and regional accents do your European AI voice agents support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI voice agents feature native acoustic modeling across 8 major European languages: English (British RP, Irish, and Euro-corporate dialects), French (Metropolitan Parisien and Swiss French), German (Standard Hochdeutsch, Austrian, and Swiss German accents), Dutch, Italian, Spanish (Castilian), Portuguese, and Swedish. Our models dynamically detect caller language mid-sentence in under 400 milliseconds and code-switch naturally without disconnecting or degrading conversational context."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does European telephony, local DID provisioning, and SIP trunking work across Paris, Berlin, Amsterdam, Zurich, Dublin, and Stockholm?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We deploy carrier-grade European SIP trunking via Twilio EU (Dublin/Frankfurt media zones) and Vonage EU edge points, provisioning verified local European virtual DIDs including France (+33), Germany (+49), Netherlands (+31), Switzerland (+41), Ireland (+353), and Sweden (+46). Calls are transmitted using low-jitter Opus 48kHz audio codecs over TLS/SRTP encrypted media backbones with sub-30ms internal European packet hops, fully compliant with national telecom authorities including ARCEP (France), BNetzA (Germany), ACM (Netherlands), BAKOM (Switzerland), ComReg (Ireland), and PTS (Sweden)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the enterprise pricing structure for deploying AI voice agents in Europe (EUR / CHF / GBP)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI provides transparent enterprise pricing tailored for European enterprises ranging between €2,000 and €75,000: Pilot Sprints start at €2,000 to €5,000 (CHF 2,200 – 5,500 / £1,800 – 4,500) for a 2-week production pilot on 1 European DID with bilingual routing; Multi-Market Production Scale ranges from €7,500 to €25,000 (CHF 8,000 – 27,000 / £6,500 – 22,000) for 3 European hubs, full CRM bidirectional syncing, and GDPR audit trails; Continental Enterprise Deployments range from €35,000 to €75,000+ (CHF 38,000 – 80,000+ / £30,000 – 65,000+) covering all 6 European hubs, dedicated sovereign Frankfurt/Dublin VPC clusters, bespoke voice cloning, and 24/7 dedicated European telecom SLAs."
                    }
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
