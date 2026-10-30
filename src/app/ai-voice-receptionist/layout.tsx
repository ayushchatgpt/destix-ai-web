import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Receptionist & Autonomous Phone Answering | DestiX AI",
  description:
    "Deploy a human-sounding AI Voice Receptionist for your business. Answers inbound calls in under 2 rings 24/7, eliminates hold times, qualifies high-ticket leads, and syncs directly to your CRM. Engineered by Ayush Meena at DestiX AI.",
  keywords: [
    "ai voice receptionist",
    "voice receptionist",
    "best ai voice agent",
    "ai phone answering service",
    "virtual voice receptionist",
    "automated telephone answering",
    "ai voice agency",
    "voice agency",
    "ai receptionist for real estate",
    "ai receptionist for clinics",
    "DestiX AI",
    "Desti",
    "Ayush Meena",
    "Meena AI",
  ],
  alternates: {
    canonical: "https://ayush.company/ai-voice-receptionist",
  },
  openGraph: {
    title: "AI Voice Receptionist & Autonomous Phone Answering | DestiX AI",
    description:
      "Zero-hold inbound call answering with human cadence, instant lead qualification, and CRM appointment booking 24/7.",
    url: "https://ayush.company/ai-voice-receptionist",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/api/og?title=AI%20Voice%20Receptionist%20%26%20Autonomous%20Phone%20Answering&category=Autonomous%20Voice&badge=Enterprise%20Parity",
        width: 1200,
        height: 630,
        alt: "AI Voice Receptionist & Autonomous Phone Answering",
      },
    ],
  },
};

export default function VoiceReceptionistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
