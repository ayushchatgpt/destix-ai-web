import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ayush Meena — Founder & Systems Architect | DestiX AI",
  description:
    "Ayush Meena is the Founder & Principal Systems Architect at DestiX AI (Desti). Engineering autonomous voice agents, bespoke 3D WebGL architectures, and automated revenue circuits for global clients from Delhi NCR.",
  keywords: [
    "Ayush Meena",
    "Ayush",
    "Desti",
    "DestiX",
    "DestiX AI",
    "Ayush Meena founder",
    "DestiX AI founder",
    "systems architect Delhi NCR",
    "ayush.company",
    "Ayush Meena LinkedIn",
  ],
  alternates: {
    canonical: "https://ayush.company/about",
  },
  openGraph: {
    title: "About Ayush Meena — Founder & Systems Architect | DestiX AI",
    description:
      "Studio philosophy, technical thesis, and founder dossier of Ayush Meena at DestiX AI.",
    url: "https://ayush.company/about",
    siteName: "DestiX AI",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
