import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents for Mumbai Real Estate & Healthcare | DestiX AI",
  description:
    "Deploy autonomous AI voice agents for luxury real estate (Lodha, Oberoi, Godrej, Piramal brokerages in Bandra, Worli, BKC, Thane) and healthcare clinics in Mumbai. Sub-450ms latency, speed-to-lead qualification, 24/7 patient triage, and CRM scheduling. Founder: Ayush Meena.",
  keywords: [
    // Real Estate Keywords
    "AI voice agent Mumbai real estate",
    "Mumbai property lead AI",
    "AI for Lodha brokers",
    "AI for Oberoi Realty agents",
    "Bandra real estate AI",
    "BKC luxury property AI",
    "Worli AI calling",
    "Thane real estate AI voice",
    "Navi Mumbai AI agent",
    "Lower Parel AI",
    "Godrej Properties AI telecalling",
    "Piramal Realty voice agent",
    "Rustomjee real estate AI",
    "Hiranandani Powai AI voice",
    "Mumbai real estate speed to lead",
    "showflat site visit booking AI",
    "99acres MagicBricks AI caller",
    // Healthcare & Clinic Keywords (retained and enhanced)
    "AI voice receptionist Mumbai",
    "voice agents Mumbai",
    "clinic phone answering Mumbai",
    "healthcare AI receptionist",
    "medical appointment booking AI",
    "DestiX AI Mumbai",
    "Ayush Meena Mumbai",
    "South Mumbai clinic phone automation",
    "cosmetic surgery AI receptionist Mumbai",
    "dermatology appointment booking AI",
    "dental clinic AI voice Mumbai",
    "IVF clinic patient triage AI",
    // Vernacular & BFSI Keywords
    "Hinglish AI voice agent Mumbai",
    "BKC wealth management voice AI",
    "Mumbai BFSI voice agent",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/mumbai/ai-voice-receptionist",
  },
  openGraph: {
    title: "AI Voice Agents for Mumbai Real Estate & Healthcare | DestiX AI",
    description:
      "Deploy autonomous AI voice agents for luxury real estate brokerages (Lodha, Oberoi, Godrej, Piramal in Bandra, Worli, BKC, Thane) and healthcare clinics across Mumbai.",
    url: "https://ayush.company/locations/mumbai/ai-voice-receptionist",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AI Voice Agents for Mumbai Real Estate & Healthcare - DestiX AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents for Mumbai Real Estate & Healthcare | DestiX AI",
    description:
      "Autonomous AI voice agents for luxury property brokerages and private clinics across Mumbai. Sub-450ms latency, speed-to-lead calling, and CRM scheduling.",
    images: ["https://ayush.company/opengraph-image.png"],
  },
};

export default function MumbaiLocationLayout({
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
                "@id": "https://ayush.company/locations/mumbai/ai-voice-receptionist/#service",
                "name": "DestiX AI Voice Agents Mumbai",
                "alternateName": "DestiX AI Mumbai - Real Estate & Healthcare Voice Automation",
                "url": "https://ayush.company/locations/mumbai/ai-voice-receptionist",
                "priceRange": "₹₹₹",
                "telephone": "+91-9876543210",
                "description":
                  "Enterprise AI voice agents for luxury Mumbai real estate brokerages (Lodha, Oberoi, Godrej, Piramal in Bandra, Worli, BKC, Thane) and healthcare clinics. 24/7 patient triage, sub-45s speed-to-lead qualification, and automated CRM scheduling.",
                "provider": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Bandra Kurla Complex (BKC), G Block",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400051",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 19.0596,
                  "longitude": 72.8601
                },
                "areaServed": [
                  { "@type": "City", "name": "Mumbai" },
                  { "@type": "AdministrativeArea", "name": "Bandra" },
                  { "@type": "AdministrativeArea", "name": "Worli" },
                  { "@type": "AdministrativeArea", "name": "BKC" },
                  { "@type": "City", "name": "Thane" },
                  { "@type": "City", "name": "Navi Mumbai" },
                  { "@type": "AdministrativeArea", "name": "South Mumbai" },
                  { "@type": "AdministrativeArea", "name": "Andheri" },
                  { "@type": "AdministrativeArea", "name": "Lower Parel" },
                  { "@type": "AdministrativeArea", "name": "Powai" },
                  { "@type": "AdministrativeArea", "name": "Maharashtra" }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/locations/mumbai/ai-voice-receptionist/#breadcrumb",
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
                    "name": "Mumbai",
                    "item": "https://ayush.company/locations/mumbai/ai-voice-receptionist"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/locations/mumbai/ai-voice-receptionist/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How quickly does DestiX AI call property buyers registered on MagicBricks and 99acres in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI voice agents connect to instant webhooks from MagicBricks, 99acres, Housing.com, and Meta ads to dial inbound leads in under 45 seconds. While the prospective buyer is actively browsing the property details or floor plan, the voice agent initiates a respectful, conversational call to verify budget, configuration needs, and site visit availability."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI pre-qualify high-net-worth buyers for luxury Mumbai properties (₹5 Cr to ₹25 Cr+)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Engineered specifically for luxury developments in Bandra West, Worli Sea Face, BKC, and Lower Parel, DestiX AI tactfully evaluates whether the prospect is an end-user or investor, confirms their purchase timeframe, gauges ready funding versus loan requirements, and verifies alignment with ₹1 Cr to ₹25 Cr+ ticket sizes before locking in an on-site showflat appointment."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do DestiX AI voice receptionists handle confidential patient intake for Mumbai healthcare clinics?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI operates 24/7 with zero hold times for South Mumbai and Bandra private practices, including cosmetic surgery, dermatology, dental, and IVF clinics. The agent answers inquiries, screens treatment interests, gathers confidential intake notes, and schedules consultation appointments directly into your clinic management software."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the voice system integrate directly with Practo, Clinicea, and CRM platforms used in South Mumbai practices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI integrates bi-directionally with healthcare management platforms like Practo and Clinicea, as well as real estate CRMs including LeadSquared, Salesforce, HubSpot, and Google Calendar. Consultation slots, call recordings, lead scores, and qualification notes sync in real time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI voice agents code-switch between Mumbai English, Hindi, and Marathi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our conversational telephony pipeline supports natural code-switching between formal Indian English, conversational Hindi, and local Mumbai colloquialisms. The voice agent maintains a sub-450ms response latency, preventing robotic pauses or awkward interruptions."
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
