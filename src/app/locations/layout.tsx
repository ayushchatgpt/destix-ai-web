import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent Deployment Locations | 30+ Cities Worldwide | DestiX AI",
  description:
    "DestiX AI deploys autonomous AI voice agents across 30+ cities worldwide including New York, Miami, Los Angeles, London, Dubai, Delhi NCR, Mumbai, Bengaluru, Paris, Berlin, and more. Local phone numbers, sub-500ms voice parity, regional compliance.",
  keywords: [
    // Global & Core Services
    "AI voice agent deployment locations",
    "global AI voice agent agency",
    "autonomous AI telephony locations",
    "enterprise conversational AI worldwide",
    "international AI voice receptionists",
    "sub-500ms voice parity telephony",
    "local DID phone numbers AI agent",
    "DestiX AI locations",
    "Ayush Meena AI agency",
    // North America / USA
    "AI voice agent USA",
    "AI voice agent New York",
    "AI voice agent Miami",
    "AI voice agent Los Angeles",
    "AI voice agent San Francisco",
    "AI voice agent Chicago",
    // United Kingdom
    "AI voice agent UK",
    "AI voice agent London",
    "AI voice receptionist London",
    // Europe (EU & Switzerland)
    "AI voice agent Europe",
    "AI voice agent Paris",
    "AI voice agent Berlin",
    "AI voice agent Amsterdam",
    "AI voice agent Zurich",
    "GDPR compliant AI voice agents",
    // Middle East / UAE
    "AI voice agents Dubai",
    "real estate voice agents Dubai",
    "AI voice agents Abu Dhabi",
    // India / South Asia
    "AI voice agents India",
    "AI voice agents Delhi NCR",
    "AI voice agents Gurugram",
    "AI voice agents Noida",
    "AI voice receptionist Mumbai",
    "AI voice agents Bengaluru",
    "AI voice agents Hyderabad",
    "AI voice agents Chennai",
    "AI voice agents Pune",
    "Hindi AI voice agent",
  ],
  alternates: {
    canonical: "https://ayush.company/locations",
  },
  openGraph: {
    title: "AI Voice Agent Deployment Locations | 30+ Cities Worldwide | DestiX AI",
    description:
      "DestiX AI deploys autonomous AI voice agents across 30+ cities worldwide including New York, Miami, Los Angeles, London, Dubai, Delhi NCR, Mumbai, Bengaluru, Paris, Berlin, and more. Local phone numbers, sub-500ms voice parity, regional compliance.",
    url: "https://ayush.company/locations",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Global Deployment Locations - 30+ Cities Worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent Deployment Locations | 30+ Cities Worldwide | DestiX AI",
    description:
      "DestiX AI deploys autonomous AI voice agents across 30+ cities worldwide including New York, Miami, Los Angeles, London, Dubai, Delhi NCR, Mumbai, Bengaluru, Paris, Berlin, and more. Local phone numbers, sub-500ms voice parity, regional compliance.",
    images: ["https://ayush.company/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayush.company/locations#breadcrumb",
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
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://ayush.company/locations#itemlist",
        "name": "DestiX AI Global Voice Agent Deployment Locations",
        "description":
          "Directory of DestiX AI autonomous AI voice agent deployment locations across North America, Europe, the United Kingdom, Middle East, and India.",
        "numberOfItems": 20,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AI Voice Agents in USA",
            "url": "https://ayush.company/locations/usa/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Voice Agents in New York",
            "url": "https://ayush.company/locations/usa/new-york/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Voice Agents in Miami",
            "url": "https://ayush.company/locations/usa/miami/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "AI Voice Agents in Los Angeles",
            "url": "https://ayush.company/locations/usa/los-angeles/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "AI Voice Agents in United Kingdom",
            "url": "https://ayush.company/locations/uk/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "AI Voice Agents in London",
            "url": "https://ayush.company/locations/uk/london/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "AI Voice Agents in Europe (Paris, Berlin, Amsterdam, Zurich)",
            "url": "https://ayush.company/locations/europe/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Real Estate AI Voice Agents in Dubai & Abu Dhabi",
            "url": "https://ayush.company/locations/dubai/real-estate-ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "AI Voice Agents in India (Pan-India Telephony)",
            "url": "https://ayush.company/locations/india/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "AI Voice Agents in Delhi NCR",
            "url": "https://ayush.company/locations/delhi-ncr/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "name": "AI Voice Agents for Real Estate in Delhi NCR",
            "url": "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-real-estate"
          },
          {
            "@type": "ListItem",
            "position": 12,
            "name": "AI Voice Agents for Clinics in Delhi NCR",
            "url": "https://ayush.company/locations/delhi-ncr/ai-voice-agents-for-clinics"
          },
          {
            "@type": "ListItem",
            "position": 13,
            "name": "Hindi AI Voice Agent in Delhi NCR",
            "url": "https://ayush.company/locations/delhi-ncr/hindi-ai-voice-agent"
          },
          {
            "@type": "ListItem",
            "position": 14,
            "name": "AI Voice Agents in Gurugram",
            "url": "https://ayush.company/locations/gurugram/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 15,
            "name": "AI Voice Agents in Noida",
            "url": "https://ayush.company/locations/noida/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 16,
            "name": "AI Voice Receptionist in Mumbai",
            "url": "https://ayush.company/locations/mumbai/ai-voice-receptionist"
          },
          {
            "@type": "ListItem",
            "position": 17,
            "name": "AI Voice Agents in Bengaluru",
            "url": "https://ayush.company/locations/bengaluru/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 18,
            "name": "AI Voice Agents in Hyderabad",
            "url": "https://ayush.company/locations/hyderabad/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 19,
            "name": "AI Voice Agents in Chennai",
            "url": "https://ayush.company/locations/chennai/ai-voice-agents"
          },
          {
            "@type": "ListItem",
            "position": 20,
            "name": "AI Voice Agents in Pune",
            "url": "https://ayush.company/locations/pune/ai-voice-agents"
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ayush.company/locations#service",
        "name": "DestiX AI — Global Autonomous AI Voice Agent Telephony",
        "url": "https://ayush.company/locations",
        "description":
          "DestiX AI deploys autonomous AI voice agents across 30+ cities worldwide including New York, Miami, Los Angeles, London, Dubai, Delhi NCR, Mumbai, Bengaluru, Paris, Berlin, and more. Local phone numbers, sub-500ms voice parity, regional compliance.",
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
          { "@type": "City", "name": "New York" },
          { "@type": "City", "name": "Miami" },
          { "@type": "City", "name": "Los Angeles" },
          { "@type": "City", "name": "San Francisco" },
          { "@type": "City", "name": "Chicago" },
          { "@type": "City", "name": "Houston" },
          { "@type": "City", "name": "Dallas" },
          { "@type": "City", "name": "Boston" },
          { "@type": "City", "name": "Seattle" },
          { "@type": "City", "name": "Atlanta" },
          { "@type": "City", "name": "London" },
          { "@type": "City", "name": "Manchester" },
          { "@type": "City", "name": "Birmingham" },
          { "@type": "City", "name": "Edinburgh" },
          { "@type": "City", "name": "Dubai" },
          { "@type": "City", "name": "Abu Dhabi" },
          { "@type": "City", "name": "Riyadh" },
          { "@type": "City", "name": "Doha" },
          { "@type": "City", "name": "Paris" },
          { "@type": "City", "name": "Berlin" },
          { "@type": "City", "name": "Amsterdam" },
          { "@type": "City", "name": "Zurich" },
          { "@type": "City", "name": "Dublin" },
          { "@type": "City", "name": "Stockholm" },
          { "@type": "City", "name": "Frankfurt" },
          { "@type": "City", "name": "Delhi NCR" },
          { "@type": "City", "name": "Gurugram" },
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Bengaluru" },
          { "@type": "City", "name": "Hyderabad" },
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Singapore" },
          { "@type": "City", "name": "Sydney" }
        ],
        "priceRange": "$2,000 - $85,000",
        "currenciesAccepted": "USD, EUR, GBP, AED, INR"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {children}
    </>
  );
}
