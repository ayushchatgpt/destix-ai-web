import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Automation & AI Voice Telephony | DestiX AI",
  description:
    "End-to-end real estate automation by DestiX AI. Sub-45-second speed to lead from Meta/Google ads and 99acres, autonomous budget qualification, automated site visit booking, and instant WhatsApp brochures.",
  keywords: [
    "real estate automation",
    "ai voice agent for real estate",
    "real estate speed to lead",
    "real estate lead qualification ai",
    "real estate crm telephony automation",
    "automated site visit scheduling",
    "luxury real estate voice agent",
    "99acres lead callback ai",
    "magicbricks lead response automation",
    "real estate voice bot delhi",
    "gurgaon real estate ai automation",
    "dubai real estate voice agent",
    "ai broker assistant",
    "destix ai real estate",
    "ayush meena real estate ai",
  ],
  alternates: {
    canonical: "https://ayush.company/solutions/real-estate-automation",
  },
  openGraph: {
    title: "Real Estate Automation & AI Voice Telephony | DestiX AI",
    description:
      "Convert 4x more luxury property leads. DestiX AI calls inbound ad leads in under 45 seconds, qualifies budget and timeline, and schedules site tours 24/7.",
    url: "https://ayush.company/solutions/real-estate-automation",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
      images: [
      {
        url: "https://ayush.company/og-real-estate.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Automation & AI Voice Telephony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Automation & AI Voice Telephony | DestiX AI",
    description:
      "Autonomous real estate voice agents and lead automation engine engineered by Ayush Meena.",
      images: ["https://ayush.company/og-real-estate.png"],
  },
};

export default function RealEstateAutomationLayout({
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
                    "name": "Solutions",
                    "item": "https://ayush.company/solutions",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Real Estate Automation",
                    "item":
                      "https://ayush.company/solutions/real-estate-automation",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://ayush.company/solutions/real-estate-automation#service",
                "name": "Real Estate Automation & AI Voice Telephony Suite",
                "alternateName": [
                  "Real Estate Automation",
                  "AI Voice Agent for Real Estate",
                  "Real Estate Speed to Lead AI",
                  "Property Lead Qualification Engine"
                ],
                "description":
                  "Turnkey autonomous real estate automation engine delivering sub-45-second phone callbacks to inbound ad inquiries, qualifying budget and intent, and booking verified site visits 24/7.",
                "provider": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company",
                  "founder": {
                    "@type": "Person",
                    "name": "Ayush Meena",
                    "url": "https://ayush.company/about",
                  },
                },
                "areaServed": [
                  { "@type": "City", "name": "Delhi NCR" },
                  { "@type": "City", "name": "Gurugram" },
                  { "@type": "City", "name": "Noida" },
                  { "@type": "City", "name": "Mumbai" },
                  { "@type": "City", "name": "Dubai" },
                  { "@type": "Country", "name": "India" },
                  { "@type": "Country", "name": "United Arab Emirates" }
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://ayush.company/solutions/real-estate-automation#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is real estate automation with AI voice agents?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Real estate automation with DestiX AI connects your advertising channels (Meta Ads, Google Ads, 99acres, MagicBricks) to an autonomous conversational voice engine. When a prospective buyer submits an inquiry, an outbound phone call is triggered in under 45 seconds to qualify their budget, configuration (3BHK/4BHK/Penthouse), and purchase timeline before scheduling a site tour directly into your sales team's calendar.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "How does speed to lead impact luxury real estate conversion?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Studies demonstrate that reaching property leads within 5 minutes results in a 391% higher conversion rate compared to waiting hours. DestiX AI beats this benchmark by calling in under 45 seconds while the buyer is still holding their device, eliminating the 14-hour overnight spreadsheet decay.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Can DestiX AI voice models speak in Hindi and Hinglish for Indian property buyers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. DestiX AI voice agents support seamless real-time code-switching between formal English, colloquial Hindi, and urban Hinglish, specifically calibrated for property buyers in Gurugram, Delhi NCR, and Mumbai.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "How does the system integrate with existing real estate CRMs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DestiX AI connects via bi-directional webhooks to Salesforce, HubSpot, LeadSquared, Zoho CRM, and Google Sheets, logging call recordings, transcripts, and qualification tags instantly.",
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
