import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agency & Autonomous Conversational Studio | DestiX AI — Ayush Meena",
  description:
    "DestiX AI (Desti) is a category-defining AI agency and digital architecture studio founded by Ayush Meena. Installing autonomous voice agents and bespoke 3D web platforms that convert high-ticket demand 24/7.",
  keywords: [
    "ai agency",
    "best ai agency",
    "ai voice agency",
    "voice agency",
    "website agency",
    "meena ai",
    "desti ai",
    "ai desti",
    "DestiX AI",
    "Desti",
    "Ayush Meena",
    "autonomous ai agency",
    "ai automation agency",
    "delhi ncr ai agency",
    "dubai ai agency",
  ],
  alternates: {
    canonical: "https://ayush.company/ai-agency",
  },
  openGraph: {
    title: "AI Agency & Autonomous Systems Practice | DestiX AI",
    description:
      "We don't build standard chatbots. DestiX AI engineers autonomous telephony circuits and 3D spatial platforms for market leaders.",
    url: "https://ayush.company/ai-agency",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Agency & Autonomous Systems Practice",
      },
    ],
  },
};

export default function AiAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
