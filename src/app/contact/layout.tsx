import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation with Ayush Meena | DestiX AI Private Desk",
  description:
    "Schedule a 30-minute diagnostic session directly with Ayush Meena at DestiX AI (Desti). Architecture reviews, voice agent feasibility audits, and bespoke 3D web scoping.",
  keywords: [
    "Contact DestiX AI",
    "Ayush Meena contact",
    "Desti consultation",
    "book AI diagnostic call",
    "ayushmeenadestixai@gmail.com",
    "DestiX AI desk",
  ],
  alternates: {
    canonical: "https://ayush.company/contact",
  },
  openGraph: {
    title: "Book a Consultation with Ayush Meena | DestiX AI",
    description: "Direct advisory desk and consultation booking for DestiX AI.",
    url: "https://ayush.company/contact",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "Book a Consultation with Ayush Meena",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
