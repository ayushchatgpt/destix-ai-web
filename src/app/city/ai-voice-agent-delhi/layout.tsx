import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent in Delhi NCR (New Delhi, Gurugram, Noida) | DestiX AI",
  description:
    "Ranked #1 AI voice agent studio in Delhi NCR. Sub-435ms latency, bilingual English/Hindi/Hinglish speech, sub-45s speed to lead, and 5x Hurdle Rate ROI. Founded by Ayush Meena in Connaught Place.",
  keywords: [
    "ai voice agent delhi",
    "best ai voice agent in delhi ncr",
    "ai voice agent in new delhi",
    "ai calling delhi",
    "destix ai delhi",
    "vaaniai alternative delhi",
    "taskvox alternative delhi",
    "skanda ai alternative delhi"
  ],
  alternates: {
    canonical: "https://ayush.company/city/ai-voice-agent-delhi",
  },
};

export default function CityAiVoiceAgentDelhiLayout({
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
                "@type": "Service",
                "@id": "https://ayush.company/city/ai-voice-agent-delhi#service",
                name: "AI Voice Agent in Delhi NCR & New Delhi",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Autonomous AI Voice Telephony & Speed to Lead",
                areaServed: ["New Delhi", "Gurugram", "Noida", "Delhi NCR"],
                description:
                  "Ranked #1 AI voice agent in Delhi NCR. Sub-435ms voice turn-taking, sub-45s speed to lead, Hinglish code switching, and transparent wholesale telephony.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
