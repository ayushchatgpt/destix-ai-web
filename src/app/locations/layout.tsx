import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Practice Areas & Service Locations | DestiX AI",
  description:
    "Explore DestiX AI deployment locations across Delhi NCR, Mumbai, Dubai, London, and New York. Autonomous voice agents, AI receptionists, and 3D digital platforms.",
  keywords: [
    "DestiX AI locations",
    "AI voice agents Delhi NCR",
    "AI voice agents Mumbai",
    "real estate voice agents Dubai",
    "AI agency service areas",
    "Ayush Meena global deployments",
  ],
  alternates: {
    canonical: "https://ayush.company/locations",
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
