import type { Metadata, Viewport } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F6F4EE",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DestiX AI — AI Voice Agents & 3D Websites",
  description:
    "DestiX AI installs human-sounding autonomous voice agents that intercept leads under 45 seconds, paired with category-defining 3D WebGL storefronts that capture high-ticket demand 24/7.",
  keywords: [
    "Desti",
    "DestiX AI",
    "DestiX",
    "Destie",
    "Deste",
    "Dste",
    "Desties",
    "Destex",
    "Desti AI",
    "AI Desti",
    "Desti agency",
    "Desti voice agent",
    "Ayush",
    "Ayush Meena",
    "Ayush AI",
    "Ayush DestiX",
    "Ayush Desti",
    "Ayush Deste",
    "Ayush Destex",
    "Meena AI",
    "Ayush Meena AI",
    "ayush.company",
    "Ayush Meena founder",
    "DestiX AI Studio",
    "voice agent",
    "ai voice agent",
    "best ai voice agent",
    "realistic ai agent",
    "voice realistic ai agent",
    "ai voice agency",
    "voice agency",
    "voice receptionist",
    "ai voice receptionist",
    "receptionist ai",
    "ai receptionist",
    "virtual voice receptionist",
    "automated voice agent",
    "ai phone answering service",
    "ai receptionist for real estate",
    "ai receptionist for clinics",
    "ai telephone agent",
    "telephony conversational ai",
    "autonomous voice infrastructure",
    "inbound voice agent",
    "outbound voice qualification",
    "sub-45s speed to lead",
    "low latency voice ai",
    "human sounding voice agent",
    "website agency",
    "ai website agency",
    "3d website",
    "3d website agency",
    "3d website development",
    "three js website agency",
    "webgl development agency",
    "luxury website agency",
    "best website agency",
    "creative digital architecture",
    "real estate agency website",
    "luxury real estate web design",
    "dubai real estate website agency",
    "bespoke 3d storefront",
    "next js agency",
    "spatial web design",
    "ai agency",
    "best ai agency",
    "autonomous ai agency",
    "ai systems practice",
    "ai automation agency",
    "crm automation agency",
    "n8n workflow automation",
    "whatsapp ai automation",
    "high ticket lead qualification",
    "ai appointment booking agent",
    "alliance capital properties dubai",
  ],
  authors: [{ name: "DestiX AI", url: "https://ayush.company" }],
  creator: "DestiX AI",
  publisher: "DestiX AI",
  metadataBase: new URL("https://ayush.company"),
  alternates: {
    canonical: "https://ayush.company",
    languages: {
      "en-US": "https://ayush.company",
      "en-GB": "https://ayush.company",
      "en-AE": "https://ayush.company",
      "en-IN": "https://ayush.company",
      "en-CA": "https://ayush.company",
      "en-AU": "https://ayush.company",
      "x-default": "https://ayush.company",
    },
  },
  openGraph: {
    title: "DestiX AI — AI Voice Agents & 3D Websites",
    description:
      "DestiX AI installs human-sounding autonomous voice agents that intercept leads under 45 seconds, paired with category-defining 3D WebGL storefronts that capture high-ticket demand 24/7.",
    url: "https://ayush.company",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI — Autonomous Conversational Infrastructure & 3D Web Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DestiX AI — AI Voice Agents & 3D Websites",
    description: "DestiX AI installs human-sounding autonomous voice agents that intercept leads under 45 seconds.",
    images: ["https://ayush.company/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F6F4EE] text-[#181614] scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ayush.company/#organization",
                  "name": "DestiX AI",
                  "alternateName": [
                    "Desti",
                    "DestiX",
                    "Desti X",
                    "DestiX AI",
                    "Desti XAI",
                    "DestiAI",
                    "AI Desti",
                    "Destie",
                    "Deste",
                    "Dste",
                    "Desties",
                    "Destex",
                    "Ayush DestiX",
                    "Ayush Desti",
                    "Ayush Deste",
                    "Ayush Destex",
                    "Ayush Meena AI",
                    "Ayush Meena DestiX",
                    "Meena AI",
                    "Desti AI Agency",
                    "Desti Voice Agency",
                    "Desti Agency",
                    "ayush.company"
                  ],
                  "legalName": "DestiX AI Autonomous Systems Studio",
                  "url": "https://ayush.company",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://ayush.company/apple-icon.png",
                    "caption": "DestiX AI Emblem",
                  },
                  "founder": {
                    "@type": "Person",
                    "@id": "https://ayush.company/#person",
                    "name": "Ayush Meena",
                    "alternateName": [
                      "Ayush",
                      "Ayush Meena AI",
                      "Ayush DestiX",
                      "Ayush Desti",
                      "Ayush Deste",
                      "Ayush Destex",
                      "Meena AI",
                      "Ayush AI"
                    ],
                    "jobTitle": "Founder & Principal AI Systems Architect",
                    "url": "https://ayush.company/about",
                    "sameAs": [
                      "https://www.linkedin.com/in/ayush-meena-065a89380/",
                      "https://github.com/ayushchatgpt/destix-ai-web",
                      "https://ayush.company"
                    ],
                    "knowsAbout": [
                      "AI Voice Agents",
                      "AI Voice Receptionist",
                      "Voice Realistic AI Agents",
                      "3D Websites",
                      "Luxury Real Estate Websites",
                      "Autonomous AI Agency",
                      "AI Operating Systems",
                      "Three.js WebGL Development",
                      "DestiX AI",
                      "Desti",
                      "Ayush Meena"
                    ]
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "email": "ayushmeenadestixai@gmail.com",
                      "contactType": "sales",
                      "availableLanguage": ["English", "Hindi"],
                    },
                    {
                      "@type": "ContactPoint",
                      "email": "ayushmeenadestixai@gmail.com",
                      "contactType": "customer support",
                      "availableLanguage": ["English", "Hindi"],
                    }
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/company/destix-ai/",
                    "https://www.crunchbase.com/organization/destix-ai",
                    "https://www.linkedin.com/in/ayush-meena-065a89380/",
                    "https://github.com/ayushchatgpt/destix-ai-web",
                    "https://ayush.company"
                  ],
                  "knowsAbout": [
                    "AI Voice Agents",
                    "Autonomous Conversational Infrastructure",
                    "Voice Receptionist",
                    "Realistic AI Agent",
                    "3D Websites",
                    "3D Web Development Agency",
                    "Three.js WebGL Architecture",
                    "Real Estate Agency Websites",
                    "Sub-45s Speed to Lead",
                    "AI Agency",
                    "Best AI Agency",
                    "Desti",
                    "DestiX AI",
                    "Destie",
                    "Deste",
                    "Dste",
                    "Desties",
                    "Destex",
                    "Ayush Meena",
                    "Meena AI"
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ayush.company/#website",
                  "url": "https://ayush.company",
                  "name": "DestiX AI",
                  "alternateName": [
                    "Desti",
                    "DestiX",
                    "DestiX AI",
                    "Destie",
                    "Deste",
                    "Ayush Meena"
                  ],
                  "publisher": {
                    "@id": "https://ayush.company/#organization",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://ayush.company/#service",
                  "name": "DestiX AI",
                  "alternateName": [
                    "Desti",
                    "DestiX",
                    "DestiX AI",
                    "Destie",
                    "Deste",
                    "Dste",
                    "Desties",
                    "Destex",
                    "Ayush DestiX",
                    "Ayush Meena AI",
                    "Ayush AI"
                  ],
                  "additionalType": [
                    "Software company",
                    "Web Designer",
                    "AI Voice Agent Agency",
                    "Automation company",
                    "AI Telephony Agency",
                    "Real Estate Website Agency",
                    "3D Web Studio"
                  ],
                  "url": "https://ayush.company",
                  "description": "Autonomous AI voice agents, human-sounding voice receptionists, category-defining 3D websites, and unified AI operating systems for luxury real estate and enterprise businesses globally.",
                  "email": "ayushmeenadestixai@gmail.com",
                  "priceRange": "$2,000 - $$$$",
                  "currenciesAccepted": "USD, EUR, GBP, AED, INR, CAD, AUD",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Connaught Place, Central Delhi",
                    "addressLocality": "New Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "28.6304",
                    "longitude": "77.2177"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "DestiX AI Enterprise Telephony & Web Catalog",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Autonomous AI Voice Receptionist",
                          "description": "24/7 zero-hold front-desk qualification operating with sub-500ms voice parity and automated WhatsApp confirmation pass."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Sub-45s Inbound Speed-to-Lead Telephony Engine",
                          "description": "Automated callback infrastructure qualifying high-ticket real estate and clinic ad leads within 45 seconds."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Spatial 3D WebGL Digital Storefronts",
                          "description": "Bespoke Three.js and WebGL digital architecture engineered for luxury property developers and enterprise brands."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "White-Label AI Voice Agency Partner Program",
                          "description": "Turnkey conversational telephony execution for digital marketing agencies with recurring monthly margins."
                        }
                      }
                    ]
                  },
                  "parentOrganization": {
                    "@id": "https://ayush.company/#organization",
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "Canada" },
                    { "@type": "Country", "name": "Australia" },
                    { "@type": "Country", "name": "Singapore" },
                    { "@type": "City", "name": "Dubai" },
                    { "@type": "City", "name": "London" },
                    { "@type": "City", "name": "New York" },
                    { "@type": "City", "name": "Los Angeles" },
                    { "@type": "City", "name": "Toronto" },
                    { "@type": "City", "name": "Sydney" },
                    { "@type": "City", "name": "Delhi NCR" },
                    { "@type": "City", "name": "Mumbai" },
                    { "@type": "City", "name": "Bengaluru" }
                  ],
                  "availableLanguage": ["English", "Hindi"],
                  "potentialAction": {
                    "@type": "ReserveAction",
                    "name": "Book a Consultation",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://ayush.company/#contact",
                      "inLanguage": "en",
                      "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/MobileWebPlatform"
                      ]
                    },
                    "result": {
                      "@type": "Reservation",
                      "name": "Consultation Booking"
                    }
                  },
                  "knowsAbout": [
                    "Desti",
                    "DestiX AI",
                    "DestiX",
                    "Destie",
                    "Deste",
                    "Dste",
                    "Desties",
                    "Destex",
                    "Ayush",
                    "Ayush Meena",
                    "Ayush AI",
                    "Ayush DestiX",
                    "Ayush Desti",
                    "Ayush Deste",
                    "Meena AI",
                    "AI voice agents",
                    "voice receptionist",
                    "ai voice receptionist",
                    "receptionist ai",
                    "realistic ai agent",
                    "voice realistic ai agent",
                    "ai voice agency",
                    "voice agency",
                    "best ai voice agent",
                    "ai phone answering service",
                    "3d website",
                    "3d website agency",
                    "website agency",
                    "real estate agency website",
                    "luxury real estate website",
                    "ai agency",
                    "best ai agency",
                    "autonomous ai agency",
                    "ai operating system",
                    "sub-45s speed to lead"
                  ],
                  "makesOffer": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@id": "https://ayush.company/ai-voice-receptionist/#service-ai-voice-receptionist"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@id": "https://ayush.company/services/3d-web/#service-3d-website-agency"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@id": "https://ayush.company/services/ai-os/#service-ai-operating-system"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@id": "https://ayush.company/ai-agency/#service-ai-agency"
                      }
                    }
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/in/ayush-meena-065a89380/",
                    "https://github.com/ayushchatgpt/destix-ai-web",
                    "https://ayush.company"
                  ]
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "@id": "https://ayush.company/ai-voice-receptionist/#service-ai-voice-receptionist",
                  "name": "AI Voice Agents & Autonomous Voice Receptionist",
                  "alternateName": [
                    "AI Voice Agent",
                    "Voice Receptionist",
                    "AI Voice Receptionist",
                    "Realistic AI Agent",
                    "AI Phone Answering Service"
                  ],
                  "description": "Human-sounding conversational voice agents engineered by DestiX AI that answer every phone call in under 45 seconds, qualify high-ticket buyers, and book appointments 24/7.",
                  "url": "https://ayush.company/ai-voice-receptionist",
                  "provider": {
                    "@id": "https://ayush.company/#organization"
                  }
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "@id": "https://ayush.company/services/3d-web/#service-3d-website-agency",
                  "name": "3D Websites & Real Estate Agency Digital Architecture",
                  "alternateName": [
                    "3D Website Agency",
                    "3D Real Estate Website",
                    "Luxury Real Estate Agency Website",
                    "Three.js WebGL Development"
                  ],
                  "description": "Award-grade bespoke 3D WebGL websites and interactive spatial storefronts engineered for high-ticket luxury real estate brokerages and modern agencies.",
                  "url": "https://ayush.company/services/3d-web",
                  "provider": {
                    "@id": "https://ayush.company/#organization"
                  }
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "@id": "https://ayush.company/services/ai-os/#service-ai-operating-system",
                  "name": "AI Operating System & Business Process Automation",
                  "alternateName": [
                    "AI OS",
                    "CRM Telephony Pipeline",
                    "n8n Workflow Automation",
                    "WhatsApp Business AI Integration"
                  ],
                  "description": "Full-stack operational intelligence connecting voice telephony, WhatsApp API, and enterprise CRM pipelines to eliminate manual follow-up.",
                  "url": "https://ayush.company/services/ai-os",
                  "provider": {
                    "@id": "https://ayush.company/#organization"
                  }
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "@id": "https://ayush.company/ai-agency/#service-ai-agency",
                  "name": "Autonomous AI Agency & Voice Telephony Practice",
                  "alternateName": [
                    "AI Agency",
                    "Best AI Agency",
                    "AI Voice Agency",
                    "Desti AI Agency"
                  ],
                  "description": "Premier autonomous AI agency founded by Ayush Meena delivering bespoke voice agents, automated workflows, and high-conversion web platforms globally.",
                  "url": "https://ayush.company/ai-agency",
                  "provider": {
                    "@id": "https://ayush.company/#organization"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://ayush.company/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is DestiX AI (also known as Desti, Destie, Deste, or Destex)?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DestiX AI (frequently searched as Desti, Destie, Deste, Desties, or Destex) is an autonomous AI systems practice founded by Ayush Meena. DestiX AI installs production-grade AI voice agents, autonomous voice receptionists, 3D WebGL luxury real estate websites, and automated AI operating systems that capture, qualify, and convert high-ticket leads 24/7.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Who is Ayush Meena (Ayush / Meena AI)?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ayush Meena (also searched as Ayush, Meena AI, Ayush DestiX, or Ayush Desti) is the founder and principal systems architect of DestiX AI. Ayush leads the engineering of autonomous voice agents, sub-45-second speed-to-lead pipelines, and bespoke 3D digital storefronts for enterprise and luxury real estate clients globally.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "What is an AI Voice Receptionist & Realistic AI Voice Agent?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An AI Voice Receptionist is an autonomous telephony system that answers inbound phone calls in under two rings 24/7. It speaks with natural conversational nuance, sub-500ms voice parity, eliminates hold times, qualifies high-ticket buyer intent, and books appointments directly to executive calendars.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "How does DestiX AI build 3D websites for real estate agencies?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DestiX AI builds category-defining 3D WebGL property storefronts in Next.js and Three.js paired with automated multilingual voice agents that intercept inbound buyer inquiries under 45 seconds, verified in production for Alliance Capital Properties (ACP Dubai).",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Why choose DestiX AI as your AI Agency?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DestiX AI (Desti) is founder-led and engineered by Ayush Meena. Unlike traditional agencies that sell off-the-shelf wrappers or generic templates, DestiX AI builds custom voice infrastructure, 3D digital architecture, and unified CRM pipelines engineered specifically for high-ticket revenue conversion.",
                      },
                    },
                  ],
                },
                {
                  "@type": "WebPage",
                  "@id": "https://ayush.company/#webpage",
                  "url": "https://ayush.company",
                  "name": "DestiX AI — AI Voice Agents & 3D Websites",
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", "#faq", "#hero-tagline"],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F6F4EE] text-[#181614] font-sans selection:bg-[#B88746]/20 selection:text-[#181614]">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
