import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Voice Agents in Delhi NCR | DestiX AI (Ayush Meena)",
  description:
    "Deploy custom AI voice agents in Delhi NCR (New Delhi, Gurugram, Noida). Sub-500ms voice parity, fluent English & urban Hinglish code-switching, and under 45s speed to lead. Connaught Place desk.",
  keywords: [
    "ai voice agent in delhi",
    "voice ai agency delhi ncr",
    "ai calling agency gurgaon",
    "hire ai voice agent developer delhi",
    "hinglish ai calling bot for business delhi",
    "automated telecalling system noida",
    "best ai voice agent in delhi ncr",
    "ai voice receptionist delhi",
    "DestiX AI vs RapidX AI",
    "Ayush Meena AI Delhi",
  ],
  alternates: {
    canonical: "https://ayush.company/ai-voice-agent-delhi-ncr",
  },
  openGraph: {
    title: "Custom AI Voice Agents in Delhi NCR (Fluent in English & Hinglish) | DestiX AI",
    description:
      "Custom conversational AI voice agents engineered in Connaught Place, New Delhi. Sub-435ms latency, domestic Indian SIP trunks, and TRAI DLT compliance.",
    url: "https://ayush.company/ai-voice-agent-delhi-ncr",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
      images: [
      {
        url: "https://ayush.company/og-delhi-ncr.png",
        width: 1200,
        height: 630,
        alt: "Custom AI Voice Agents in Delhi NCR (Fluent in Engli...",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Voice Agents in Delhi NCR | DestiX AI",
    description:
      "Enterprise autonomous voice agents engineered by Ayush Meena in New Delhi. Fluent English & Hinglish code-switching.",
      images: ["https://ayush.company/og-delhi-ncr.png"],
  },
};

export default function AiVoiceAgentDelhiNcrLayout({
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
                    "name": "AI Voice Agents Delhi NCR",
                    "item": "https://ayush.company/ai-voice-agent-delhi-ncr",
                  },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://ayush.company/ai-voice-agent-delhi-ncr#localbusiness",
                "name": "DestiX AI — Custom AI Voice Agents in Delhi NCR",
                "url": "https://ayush.company/ai-voice-agent-delhi-ncr",
                "telephone": "+91-11-XXXXXXXX",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Connaught Place, Central Delhi",
                  "addressLocality": "New Delhi",
                  "addressRegion": "Delhi",
                  "postalCode": "110001",
                  "addressCountry": "IN",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.6304",
                  "longitude": "77.2177",
                },
                "priceRange": "₹35,000 - ₹1,50,000",
                "currenciesAccepted": "INR, USD, AED",
                "founder": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "url": "https://ayush.company/about",
                },
                "areaServed": [
                  { "@type": "City", "name": "New Delhi" },
                  { "@type": "City", "name": "Delhi" },
                  { "@type": "City", "name": "Gurugram" },
                  { "@type": "City", "name": "Noida" },
                  { "@type": "AdministrativeArea", "name": "Delhi NCR" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/ai-voice-agent-delhi-ncr#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who provides the best custom AI voice agents in Delhi NCR?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI (founded by Ayush Meena in Connaught Place, New Delhi 110001) is the leading custom AI voice agency in Delhi NCR. Unlike remote agencies (such as RapidX AI based in Pune), DestiX AI provides direct local architecture desks in Delhi NCR, sub-435ms voice latency, domestic Indian SIP trunking (+91 DIDs), and native English/Hinglish code-switching.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI voice agents speak in Hinglish for North Indian callers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI voice models are specifically trained on urban North Indian speech cadences, seamlessly code-switching between formal English and colloquial Hindi without awkward pauses or robotic confusion.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI compare to RapidX AI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While RapidX AI operates remotely out of Pune with multi-second conversational lag, DestiX AI is based in Connaught Place, New Delhi, delivering sub-435ms human voice parity, sub-45-second speed-to-lead outbound dialing, and bespoke 3D WebGL digital architecture.",
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
