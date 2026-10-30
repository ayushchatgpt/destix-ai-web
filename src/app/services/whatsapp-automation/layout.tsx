import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Automation & CRM AI Integration | DestiX AI",
  description:
    "Enterprise WhatsApp Business API automation integrated with AI voice agents. Automated post-call brochures, instant appointment confirmations, and bi-directional CRM syncing for high-ticket businesses.",
  keywords: [
    "WhatsApp automation Delhi",
    "WhatsApp AI bot India",
    "AI voice agent WhatsApp integration",
    "enterprise WhatsApp Business API automation",
    "WhatsApp CRM lead qualification",
    "DestiX AI WhatsApp automation",
  ],
  alternates: {
    canonical: "https://ayush.company/services/whatsapp-automation",
  },
  openGraph: {
    title: "WhatsApp Automation & CRM AI Integration | DestiX AI",
    description:
      "Sub-5-second automated WhatsApp triggers post-call, official Meta Business Cloud API integration, and CRM calendar synchronization.",
    url: "https://ayush.company/services/whatsapp-automation",
    siteName: "DestiX AI",
    type: "website",
    locale: "en_IN",
      images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Automation & CRM AI Integration",
      },
    ],
  },
};

export default function WhatsAppAutomationLayout({
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
                    "name": "Services",
                    "item": "https://ayush.company/voice-agents",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "WhatsApp Automation",
                    "item": "https://ayush.company/services/whatsapp-automation",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": "https://ayush.company/services/whatsapp-automation#service",
                "name": "Enterprise WhatsApp Automation & CRM Sync",
                "provider": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company"
                },
                "serviceType": "Conversational Messaging & CRM Telephony Automation",
                "areaServed": "Global",
                "description":
                  "Official Meta WhatsApp Business Cloud API integration that instantly triggers PDF brochures, calendar bookings, and CRM updates within 5 seconds of an AI voice call."
              }
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
