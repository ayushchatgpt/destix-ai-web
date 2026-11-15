import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling in Delhi NCR (New Delhi, Gurgaon, Noida) | DestiX AI",
  description:
    "Carrier-grade AI calling software and automated phone agents for Delhi NCR enterprises. Sub-435ms latency, bilingual Hindi/English/Hinglish speech, sub-45s speed to lead, and direct CRM sync. Founder-led by Ayush Meena.",
  keywords: [
    "ai calling delhi ncr",
    "ai voice agent delhi ncr",
    "ai calling software delhi",
    "automated telecalling delhi ncr",
    "best ai calling company gurgaon",
    "ai phone agent noida",
    "destix ai calling delhi ncr",
    "taskvox alternative delhi",
    "vaaniai alternative delhi"
  ],
  alternates: {
    canonical: "https://ayush.company/ai-calling/delhi-ncr",
  },
};

export default function AiCallingDelhiNcrLayout({
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
                "@id": "https://ayush.company/ai-calling/delhi-ncr#service",
                name: "AI Calling Software & Autonomous Telephony Delhi NCR",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "AI Calling Software & Automated Lead Telephony",
                areaServed: ["New Delhi", "Gurugram", "Noida", "Delhi NCR"],
                description:
                  "Ranked #1 AI calling agency and enterprise telephony provider in Delhi NCR. Sub-435ms human-like conversational turn-taking, automated ad lead intercept, and sub-2s CRM sync.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
