import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Qualification & Sub-45s Speed-to-Lead Telephony | DestiX AI",
  description:
    "Autonomous AI inbound lead qualification agents. Trigger sub-45-second phone callbacks upon Meta/Google ad form submission. BANT qualification, CRM scoring, and live call transfers to sales reps.",
  keywords: [
    "ai lead qualification",
    "speed to lead automation",
    "automated lead qualification system",
    "ai voice lead qualification",
    "b2b lead qualification ai",
    "instant outbound callback ai",
    "bant qualification ai",
    "real estate lead qualification ai",
    "inbound lead scoring automation",
    "destix ai lead qualification",
    "best ai lead qualification agency"
  ],
  alternates: {
    canonical: "https://ayush.company/services/lead-qualification",
  },
  openGraph: {
    title: "AI Lead Qualification & Sub-45s Speed-to-Lead Telephony | DestiX AI",
    description:
      "Never lose a high-ticket inbound lead again. Our autonomous voice agents call inbound prospects within 45 seconds of form fill, score budget & authority, and warm-transfer qualified buyers.",
    url: "https://ayush.company/services/lead-qualification",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise AI Lead Qualification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Qualification & Sub-45s Speed-to-Lead Telephony | DestiX AI",
    description:
      "Sub-45s speed-to-lead outbound voice telephony. 391% higher qualification conversions by engaging leads while intent is at its peak.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function LeadQualificationLayout({
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
                "@id": "https://ayush.company/services/lead-qualification#service",
                name: "AI Lead Qualification & Speed-to-Lead Telephony",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Lead Qualification & Automated Telephony",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Autonomous voice systems executing sub-45-second speed-to-lead callbacks on ad inquiries, conducting structured BANT qualification interviews, and dispatching warm transfers directly to account executives.",
              },
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
                    "@type": "Services",
                    position: 2,
                    name: "Services",
                    item: "https://ayush.company/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Lead Qualification",
                    item: "https://ayush.company/services/lead-qualification",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Why is sub-45-second speed-to-lead so crucial for conversions?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Industry telemetry reveals that reaching an inbound inquiry within 60 seconds increases qualification conversion rates by 391% compared to waiting even 30 minutes. DestiX AI catches the prospect while their screen is still open and intent is peak.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What happens when a lead is fully qualified during the call?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The agent executes an automated SIP warm transfer directly to your designated sales executive's phone line, whispering a 10-second summary before bridging the buyer. If no reps are free, it locks an appointment directly on their calendar.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does it handle voicemail, invalid numbers, and non-answers?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Integrated Silero VAD detects answering machines in under 80ms and drops a pristine customized audio voicemail. It then triggers an automated WhatsApp text sequence and schedules automated callback attempts across optimal hours.",
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
