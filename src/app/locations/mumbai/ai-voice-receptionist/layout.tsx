import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Receptionist & Clinic Phone Automation Mumbai | DestiX AI",
  description:
    "Deploy autonomous AI voice receptionists for healthcare clinics, dental practices, and high-ticket service companies in Mumbai. 24/7 call triage, zero hold times, and direct calendar scheduling. Founder: Ayush Meena.",
  keywords: [
    "AI voice receptionist Mumbai",
    "voice agents Mumbai",
    "clinic phone answering Mumbai",
    "healthcare AI receptionist",
    "medical appointment booking AI",
    "DestiX AI Mumbai",
    "Ayush Meena Mumbai",
  ],
  alternates: {
    canonical: "https://ayush.company/locations/mumbai/ai-voice-receptionist",
  },
  openGraph: {
    title: "AI Voice Receptionist & Clinic Phone Automation Mumbai | DestiX AI",
    description:
      "24/7 autonomous telephony screening and appointment scheduling for private healthcare and premium practices in Mumbai.",
    url: "https://ayush.company/locations/mumbai/ai-voice-receptionist",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Voice Receptionist & Clinic Phone Automation Mumbai",
      },
    ],
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
            "@type": "Service",
            "@id": "https://ayush.company/locations/mumbai/ai-voice-receptionist/#service",
            "name": "AI Voice Receptionist & Clinic Telephony Mumbai",
            "serviceType": "Healthcare & Private Practice Conversational Telephony",
            "provider": {
              "@type": "Organization",
              "name": "DestiX AI",
              "url": "https://ayush.company",
            },
            "areaServed": [
              { "@type": "City", "name": "Mumbai" },
              { "@type": "City", "name": "Bandra" },
              { "@type": "City", "name": "South Mumbai" },
              { "@type": "AdministrativeArea", "name": "Maharashtra" }
            ],
            "description": "Autonomous AI voice receptionist systems answering inbound patient calls in under two rings 24/7 across Mumbai.",
          }),
        }}
      />
      {children}
    </>
  );
}
