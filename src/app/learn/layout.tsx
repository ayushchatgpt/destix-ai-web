import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn AI Voice Agents & Autonomous Systems Architecture | DestiX AI Archive",
  description:
    "The engineering archive and technical learning hub by DestiX AI. Deep-dive guides on sub-500ms voice agents, Indian SIP telephony, Meta WhatsApp automation, and spatial web architecture.",
  keywords: [
    "learn AI voice agents",
    "AI voice agent architecture India",
    "voice agent latency optimization",
    "Indian SIP trunking AI agents",
    "n8n AI automation tutorials",
    "DestiX AI engineering guide",
    "conversational AI tutorials Delhi"
  ],
  alternates: {
    canonical: "https://ayush.company/learn",
  },
  openGraph: {
    title: "Learn AI Voice Agents & Autonomous Systems Architecture | DestiX AI Archive",
    description:
      "The engineering archive and technical learning hub by DestiX AI. Deep-dive guides on sub-500ms voice agents, Indian SIP telephony, Meta WhatsApp automation, and spatial web architecture.",
    url: "https://ayush.company/learn",
    siteName: "DestiX AI",
    locale: "en_IN",
    type: "website",
      images: [
      {
        url: "https://ayush.company/og-intel.png",
        width: 1200,
        height: 630,
        alt: "Learn AI Voice Agents & Autonomous Systems Architecture",
      },
    ],
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
