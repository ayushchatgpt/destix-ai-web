import type { Metadata } from "next";
import { buildBenchmarkResearchGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "2026 Global Enterprise AI Telephony & Acoustic Latency Benchmark | DestiX AI Research",
  description:
    "Audited benchmark study evaluating conversational turn-taking latency, STT error rates, SIP carrier jitter, and unit economics across 14 enterprise AI voice providers in London, New York, Dubai, and India. Conducted by DestiX AI Systems Studio.",
  keywords: [
    "2026 enterprise ai telephony benchmark",
    "ai voice agent latency benchmark",
    "voice ai turnaround latency audit",
    "enterprise conversational ai benchmark",
    "sub 500ms voice parity study",
    "destix ai research"
  ],
  alternates: {
    canonical: "https://ayush.company/research/2026-enterprise-ai-telephony-benchmark",
  },
  openGraph: {
    title: "2026 Global Enterprise AI Telephony & Acoustic Latency Benchmark | DestiX AI Research",
    description:
      "Comprehensive empirical benchmark of 14 enterprise voice AI providers across 5 acoustic dimensions, audited SIP trunk latency, and real-world Hurdle Rate ROI.",
    url: "https://ayush.company/research/2026-enterprise-ai-telephony-benchmark",
    siteName: "DestiX AI Research",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "2026 Enterprise AI Telephony Benchmark",
      },
    ],
  },
};

export default function BenchmarkResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBenchmarkResearchGraph()),
        }}
      />
      {children}
    </>
  );
}
