import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Websites & WebGL Digital Architecture | DestiX AI — Ayush Meena",
  description:
    "Award-winning 3D websites, WebGL spatial environments, and bespoke luxury real estate digital storefronts. Engineered in Next.js & Three.js by Ayush Meena at DestiX AI (Desti).",
  keywords: [
    "3D website",
    "3D websites",
    "3D website agency",
    "3D web development",
    "Three.js agency",
    "WebGL developer",
    "real estate agency website",
    "luxury real estate web design",
    "DestiX AI",
    "Desti",
    "Ayush Meena",
    "Ayush",
    "creative technologist",
  ],
  alternates: {
    canonical: "https://ayush.company/websites",
  },
  openGraph: {
    title: "3D Websites & WebGL Digital Architecture | DestiX AI — Ayush Meena",
    description:
      "Bespoke 3D spatial web architectures engineered to command high-ticket client authority and eliminate price resistance.",
    url: "https://ayush.company/websites",
    siteName: "DestiX AI",
  },
};

export default function WebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
