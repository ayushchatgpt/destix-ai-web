import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents Across India | DestiX AI",
  description:
    "National autonomous AI voice telephony infrastructure across India. Carrier-grade SIP trunks (+91 virtual DIDs), sub-500ms voice parity, strict TRAI/DLT compliance, and 9 native Indian languages powering D2C COD verification and enterprise speed-to-lead.",
  keywords: [
    "AI Voice Agents Across India",
    "Best AI Voice Agent India",
    "Pan India AI Voice Agents",
    "Enterprise AI Voice Telephony India",
    "D2C COD Verification India",
    "Multilingual AI Voice Agent Hindi English Tamil Telugu",
    "TRAI DLT Compliant AI Voice Agent",
    "AI Voice Receptionist India",
    "Speed to Lead Voice Agent India",
    "AI Voice Agents Delhi NCR",
    "AI Voice Agents Mumbai",
    "AI Voice Agents Bengaluru",
    "AI Voice Agents Hyderabad",
    "AI Voice Agents Chennai",
    "AI Voice Agents Pune",
    "AI Voice Agents Kolkata",
    "DestiX AI India",
    "Ayush Meena AI Voice Agent",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/india/ai-voice-agents",
  },
  openGraph: {
    title: "AI Voice Agents Across India | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony deployed across 22 telecom circles in India. Sub-500ms voice parity, TRAI/DLT compliance, and native multilingual support across Hindi, English, Tamil, Telugu, Kannada, and Marathi.",
    url: "https://ayush.company/locations/india/ai-voice-agents",
    siteName: "DestiX AI",
    images: [
      {
        url: "https://ayush.company/og-india.png",
        width: 1200,
        height: 630,
        alt: "AI Voice Agents Across India - DestiX AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents Across India | DestiX AI",
    description:
      "Deploy national autonomous AI voice agents across India. Sub-500ms voice parity, carrier-grade +91 SIP trunks, TRAI/DLT compliance, and D2C COD verification.",
    images: ["https://ayush.company/og-india.png"],
  },
};

export default function IndiaLocationLayout({
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
                "@id": "https://ayush.company/locations/india/ai-voice-agents/#service",
                "name": "AI Voice Agents Across India | DestiX AI",
                "alternateName": [
                  "Pan-India AI Voice Telephony",
                  "DestiX AI India",
                  "National AI Voice Agent Provider India",
                  "AI Voice Agents for Indian Enterprises",
                  "Multilingual AI Voice Agents India"
                ],
                "serviceType": "National Autonomous AI Voice Telephony & Conversational Infrastructure",
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
                  { "@type": "Country", "name": "India" },
                  { "@type": "City", "name": "New Delhi" },
                  { "@type": "AdministrativeArea", "name": "Delhi NCR" },
                  { "@type": "City", "name": "Mumbai" },
                  { "@type": "City", "name": "Bengaluru" },
                  { "@type": "City", "name": "Hyderabad" },
                  { "@type": "City", "name": "Chennai" },
                  { "@type": "City", "name": "Pune" },
                  { "@type": "City", "name": "Kolkata" }
                ],
                "description": "DestiX AI operates national autonomous AI voice infrastructure across 22 telecom circles in India, delivering sub-500ms voice parity, TRAI/DLT compliance, and 9-language multilingual support for D2C brands, real estate, healthcare, BFSI, and SaaS.",
                "url": "https://ayush.company/locations/india/ai-voice-agents"
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/locations/india/ai-voice-agents/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do DestiX AI voice agents operate across all Indian telecom circles?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI routes autonomous voice traffic across all 22 Indian telecom circles using low-latency domestic SIP interconnects with Airtel, Tata Tele Business Services (TTBS), and Exotel. Outbound calls utilize verified +91 virtual DIDs with circle-specific CLI routing and sub-50ms national edge transit to guarantee 99.98% connectivity."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI ensure strict TRAI and DLT compliance for outbound calls in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "All calls comply strictly with Telecom Regulatory Authority of India (TRAI) directives, operating over dedicated 140/160 series telemarketer numbering ranges. DestiX AI automates real-time scrubbing against the National Customer Preference Register (NCPR/DND) and adheres to verified Distributed Ledger Technology (DLT) header and consent templates, eliminating carrier spam labeling."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which Indian languages and dialects do DestiX AI voice agents support natively?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI natively supports 9 major Indian languages and regional dialects: Hindi, Indian English, urban Hinglish, Tamil, Telugu, Marathi, Kannada, Bengali, and Gujarati. The models feature real-time dialect adaptation and code-switching with sub-500ms acoustic response parity."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does DestiX AI power pan-India D2C Cash-on-Delivery (COD) verification and NDR rescue across Tier 1 to Tier 4 cities?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For D2C e-commerce brands, DestiX AI triggers automated verification calls within 120 seconds of checkout across Tier 1, 2, 3, and 4 Indian pincodes. In the customer's native language, the voice agent verifies buyer intent and landmarks, filtering bogus orders before dispatch. When 3PL couriers report delivery failures, automated NDR rescue calls contact customers to reschedule delivery, reducing overall RTO by 35% to 42%."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
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
                    "name": "AI Voice Agents Across India",
                    "item": "https://ayush.company/locations/india/ai-voice-agents"
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
