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
  },
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
