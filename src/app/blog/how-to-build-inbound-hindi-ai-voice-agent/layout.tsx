import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build an Inbound Hindi AI Voice Agent (2026) | DestiX AI",
  description:
    "Engineering guide: How to build and deploy an inbound Hindi & Hinglish AI voice agent. Speech-to-text calibration, mid-sentence code-switching, low-latency LLM inference, and Indian accent synthesis.",
  keywords: [
    "how to build Hindi AI voice agent",
    "inbound Hindi voice bot",
    "Hinglish conversational AI",
    "Hindi speech to text voice AI",
    "Hindi voice synthesis Cartesia Deepgram",
    "DestiX AI Hindi voice agent",
  ],
  alternates: {
    canonical: "https://ayush.company/blog/how-to-build-inbound-hindi-ai-voice-agent",
  },
  openGraph: {
    title: "How to Build an Inbound Hindi AI Voice Agent (2026) | DestiX AI",
    description:
      "Architecture, phonetics, and speech synthesis for building conversational Hindi & Hinglish voice agents with sub-500ms latency.",
    url: "https://ayush.company/blog/how-to-build-inbound-hindi-ai-voice-agent",
    siteName: "DestiX AI",
    type: "article",
      images: [
      {
        url: "https://ayush.company/api/og?title=How%20to%20Build%20an%20Inbound%20Hindi%20AI%20Voice%20Agent%20%282026%29&category=Intel%20%26%20Strategy&badge=2026%20Verified",
        width: 1200,
        height: 630,
        alt: "How to Build an Inbound Hindi AI Voice Agent (2026)",
      },
    ],
  },
};

export default function HindiVoiceGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://ayush.company/blog/how-to-build-inbound-hindi-ai-voice-agent/#article",
                "headline": "How to Build an Inbound Hindi & Hinglish AI Voice Agent (2026 Architecture)",
                "description": "Technical guide to acoustic code-switching, Devanagari romanization, and low-latency speech inference for Indian businesses.",
                "inLanguage": "en-US",
                "datePublished": "2026-10-25T12:00:00+05:30",
                "dateModified": "2026-10-25T18:30:00+05:30",
                "author": {
                  "@type": "Person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "url": "https://ayush.company/about"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ayush.company/blog/how-to-build-inbound-hindi-ai-voice-agent/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What speech-to-text model works best for Hindi and Hinglish?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Deepgram Nova-2 Multilingual provides the lowest word error rate (WER) and sub-120ms streaming latency for conversational Indian Hindi and code-switched Hinglish."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you handle mid-sentence language switching in AI voice bots?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "By deploying system prompts calibrated on phonetic romanized Hindi alongside English tokens, allowing LLMs to infer intent without stalling or translating into stilted formal Hindi."
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
