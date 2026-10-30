import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Phone Numbers for AI Voice Agents (+91 SIP Trunks) | DestiX AI",
  description:
    "How to get and configure Indian +91 phone numbers for AI voice agents. Virtual mobile numbers, landline DIDs, DLT compliance, and SIP trunk integration for Twilio, Vapi, and DestiX AI.",
  keywords: [
    "Indian phone numbers for AI voice agents",
    "how to get +91 number for AI voice bot",
    "Indian SIP trunk for voice AI",
    "virtual mobile number India voice agent",
    "DLT registration AI calling India",
    "DestiX AI Indian telephony",
  ],
  alternates: {
    canonical: "https://ayush.company/blog/indian-phone-numbers-for-ai-voice-agents",
  },
  openGraph: {
    title: "Indian Phone Numbers for AI Voice Agents (+91 SIP Trunks) | DestiX AI",
    description:
      "A practical engineering guide to provisioning, registering, and routing Indian carrier phone numbers for autonomous voice bots.",
    url: "https://ayush.company/blog/indian-phone-numbers-for-ai-voice-agents",
    siteName: "DestiX AI",
    type: "article",
      images: [
      {
        url: "https://ayush.company/api/og?title=Indian%20Phone%20Numbers%20for%20AI%20Voice%20Agents%20%28%2B91%20SIP%20Tr...&category=Intel%20%26%20Strategy&badge=2026%20Verified",
        width: 1200,
        height: 630,
        alt: "Indian Phone Numbers for AI Voice Agents (+91 SIP Tr...",
      },
    ],
  },
};

export default function IndianNumbersGuideLayout({
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
                "@type": "Article",
                "@id": "https://ayush.company/blog/indian-phone-numbers-for-ai-voice-agents/#article",
                "headline": "Indian Phone Numbers for AI Voice Agents: SIP Trunks, DLT Compliance, and Carrier Routing",
                "description": "How Indian businesses provision +91 virtual numbers and landline DIDs for production conversational AI voice systems.",
                "inLanguage": "en-US",
                "datePublished": "2026-10-25T11:00:00+05:30",
                "dateModified": "2026-10-25T18:30:00+05:30",
                "author": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "url": "https://ayush.company/about"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/blog/indian-phone-numbers-for-ai-voice-agents/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can I use Twilio for Indian phone numbers in voice AI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Twilio offers limited Indian numbers with strict documentation and high per-minute voice tariffs. Production voice systems in India typically use direct Indian SIP trunk providers (like Tata Tele, Airtel Business, or licensed virtual telecom aggregators) connected via BYOC (Bring Your Own Carrier) to minimize latency."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does DLT compliance affect AI voice calling in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Outbound automated calls require registered entity IDs and DLT-approved telemarketer headers under TRAI guidelines. Inbound AI receptionists, where the customer dials your published +91 number, do not require outbound DLT scrubbing."
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
