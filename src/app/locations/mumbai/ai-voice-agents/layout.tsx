import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents in Mumbai | DestiX AI",
  description:
    "Deploy enterprise autonomous AI voice agents in Mumbai with DestiX AI. Built for luxury real estate (Lodha, Oberoi, Godrej, Piramal in Bandra, Worli, BKC, Thane) and healthcare clinics across Mumbai. Sub-450ms voice parity, vernacular Hindi/Marathi/English code-switching, and Indian SIP trunks. Founded by Principal AI Systems Architect Ayush Meena.",
  keywords: [
    "AI Voice Agents in Mumbai",
    "AI Voice Agents Mumbai",
    "AI Voice Agent Mumbai",
    "Mumbai AI Voice Agents",
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
    "AI voice receptionist Mumbai",
    "voice agents Mumbai",
    "clinic phone answering Mumbai",
    "healthcare AI receptionist",
    "medical appointment booking AI",
    "DestiX AI Mumbai",
    "Ayush Meena Mumbai",
    "Hinglish AI voice agent Mumbai",
    "BKC wealth management voice AI",
    "Mumbai BFSI voice agent",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/mumbai/ai-voice-agents",
  },
  openGraph: {
    title: "AI Voice Agents in Mumbai | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for luxury real estate brokerages (Lodha, Oberoi, Godrej, Piramal in Bandra, Worli, BKC, Thane) and healthcare clinics across Mumbai.",
    url: "https://ayush.company/locations/mumbai/ai-voice-agents",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ayush.company/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AI Voice Agents in Mumbai - DestiX AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents in Mumbai | DestiX AI",
    description:
      "Enterprise autonomous AI voice telephony for Mumbai luxury real estate and healthcare clinics.",
    images: ["https://ayush.company/opengraph-image.png"],
  },
};

export default function MumbaiVoiceAgentsLayout({
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
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://ayush.company",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Locations",
                    item: "https://ayush.company/locations",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Mumbai",
                    item: "https://ayush.company/locations/mumbai/ai-voice-agents",
                  },
                ],
              },
              {
                "@type": "Service",
                name: "AI Voice Agents in Mumbai",
                serviceType: "Autonomous AI Telephony & Conversational Automation",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                  founder: {
                    "@type": "Person",
                    name: "Ayush Meena",
                    jobTitle: "Principal AI Systems Architect",
                  },
                },
                areaServed: [
                  {
                    "@type": "City",
                    name: "Mumbai",
                  },
                  {
                    "@type": "City",
                    name: "Thane",
                  },
                  {
                    "@type": "City",
                    name: "Navi Mumbai",
                  },
                ],
                description:
                  "Sub-450ms human-parity autonomous AI voice agents for luxury real estate brokerages, healthcare clinics, and enterprises across Mumbai, BKC, Bandra, and Thane.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
