import type { Metadata } from "next";
import { buildInteractiveToolGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enterprise AI ROI & Telephony Unit Cost Calculator | DestiX AI",
  description:
    "Interactive financial modeling calculator for CTOs and COOs. Calculate operational cost reductions, pass-through telephony savings ($0.03-$0.07/min vs $35k/yr headcount), and 5x Hurdle Rate ROI for autonomous AI voice agents.",
  keywords: [
    "enterprise ai roi calculator",
    "ai voice agent cost calculator",
    "telephony unit economics calculator",
    "call center ai cost savings",
    "ai receptionist roi",
    "pass through telephony calculator",
    "destix ai roi calculator",
    "b2b ai cost model"
  ],
  alternates: {
    canonical: "https://ayush.company/tools/roi-calculator",
  },
  openGraph: {
    title: "Enterprise AI ROI & Telephony Unit Cost Calculator | DestiX AI",
    description:
      "Model your exact operational savings. Compare full-time telecaller salaries and SaaS seat markups against DestiX AI wholesale telephony.",
    url: "https://ayush.company/tools/roi-calculator",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise ROI & Telephony Calculator",
      },
    ],
  },
};

export default function RoiCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildInteractiveToolGraph({
              toolSlug: "roi-calculator",
              toolName: "DestiX AI Enterprise Telephony & AI ROI Calculator",
              toolDescription:
                "Financial modeling tool calculating payback horizons, per-minute unit economics, and labor cost displacement for autonomous voice agents and CRM automation.",
            })
          ),
        }}
      />
      {children}
    </>
  );
}
