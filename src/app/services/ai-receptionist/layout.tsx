import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 AI Voice Receptionist & Front Desk Telephony Automation | DestiX AI",
  description:
    "Deploy autonomous AI voice receptionists answering 100% of inbound calls in under two rings. Sub-435ms voice parity, calendar appointment scheduling, intelligent call routing, and WhatsApp confirmations. Principal: Ayush Meena.",
  keywords: [
    "ai voice receptionist",
    "ai receptionist",
    "virtual ai receptionist",
    "ai phone answering service",
    "automated front desk",
    "ai receptionist for clinics",
    "ai receptionist for real estate",
    "ai phone receptionist for law firms",
    "destix ai receptionist",
    "ayush meena ai receptionist",
    "zero hold time receptionist",
    "best ai voice receptionist 2026"
  ],
  alternates: {
    canonical: "https://ayush.company/services/ai-receptionist",
  },
  openGraph: {
    title: "24/7 AI Voice Receptionist & Front Desk Telephony Automation | DestiX AI",
    description:
      "Never miss a high-ticket customer call again. Sub-435ms autonomous voice receptionists that greet callers, qualify intent, book appointments, and transfer seamlessly.",
    url: "https://ayush.company/services/ai-receptionist",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI 24/7 AI Voice Receptionist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 AI Voice Receptionist & Front Desk Telephony Automation | DestiX AI",
    description:
      "Sub-435ms human-parity front desk phone answering with direct calendar booking and instant SMS/WhatsApp follow-ups.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function AiReceptionistLayout({
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
                "@type": "Service",
                "@id": "https://ayush.company/services/ai-receptionist#service",
                "name": "24/7 AI Voice Receptionist & Autonomous Front Desk",
                "serviceType": "Inbound Conversational Telephony & Reception Automation",
                "provider": {
                  "@id": "https://ayush.company/#organization",
                },
                "url": "https://ayush.company/services/ai-receptionist",
                "description":
                  "Human-parity autonomous voice receptionists answering phone calls under two rings, qualifying patient and client inquiries, and booking appointments 24/7.",
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/services/ai-receptionist#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ayush.company" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ayush.company/solutions" },
                  { "@type": "ListItem", "position": 3, "name": "AI Receptionist", "item": "https://ayush.company/services/ai-receptionist" },
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