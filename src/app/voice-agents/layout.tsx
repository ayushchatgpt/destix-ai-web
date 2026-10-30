import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents & Telephony Infrastructure | DestiX AI — Ayush Meena",
  description:
    "Deploy human-sounding autonomous AI voice agents with sub-45s lead interception and zero hold times. Engineered by Ayush Meena at DestiX AI (Desti) for luxury real estate, healthcare, and high-ticket sales.",
  keywords: [
    "voice agent",
    "AI voice agent",
    "autonomous voice agents",
    "DestiX AI",
    "Desti",
    "Ayush Meena",
    "Ayush",
    "real estate voice agent",
    "telephony AI",
    "sub-45s speed to lead",
    "AI call center automation",
    "voice conversational AI",
  ],
  alternates: {
    canonical: "https://ayush.company/voice-agents",
  },
  openGraph: {
    title: "AI Voice Agents & Autonomous Telephony Infrastructure | DestiX AI",
    description:
      "Enterprise AI Voice Agents with sub-500ms acoustic parity and instant lead qualification. Principal: Ayush Meena.",
    url: "https://ayush.company/voice-agents",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/api/og?title=AI%20Voice%20Agents%20%26%20Autonomous%20Telephony%20Infrastructure&category=Autonomous%20Voice&badge=Enterprise%20Parity",
        width: 1200,
        height: 630,
        alt: "AI Voice Agents & Autonomous Telephony Infrastructure",
      },
    ],
  },
};

export default function VoiceAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
