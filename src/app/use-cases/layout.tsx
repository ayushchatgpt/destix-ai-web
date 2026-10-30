import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Real Estate Agency Websites & Advisory Systems | DestiX AI",
  description:
    "Production playbooks for luxury real estate agencies, private wealth firms, and boutique practices. Proven architectures including Alliance Capital Properties (ACP Dubai) driving AED 85M+ pipeline.",
  keywords: [
    "real estate agency website",
    "luxury real estate website",
    "real estate voice agent",
    "real estate AI lead qualification",
    "Alliance Capital Properties Dubai",
    "ACP Dubai",
    "DestiX AI",
    "Desti",
    "Ayush Meena",
    "high-ticket real estate marketing",
  ],
  alternates: {
    canonical: "https://ayush.company/use-cases",
  },
  openGraph: {
    title: "Luxury Real Estate Agency Websites & Advisory Systems | DestiX AI",
    description:
      "Turn passive luxury property traffic into qualified investor pipeline 24/7.",
    url: "https://ayush.company/use-cases",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/api/og?title=Luxury%20Real%20Estate%20Agency%20Websites%20%26%20Advisory%20Systems&category=Autonomous%20Voice&badge=Enterprise%20Parity",
        width: 1200,
        height: 630,
        alt: "Luxury Real Estate Agency Websites & Advisory Systems",
      },
    ],
  },
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
