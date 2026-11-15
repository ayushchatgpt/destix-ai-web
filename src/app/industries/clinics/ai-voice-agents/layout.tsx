import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Receptionists for Clinics & Healthcare Practices | DestiX AI",
  description:
    "HIPAA & DPDP compliant AI voice receptionists for private medical clinics, dental practices, dermatology centers, and diagnostic chains. Sub-2 rings answering, appointment scheduling, and patient triage.",
  keywords: [
    "ai voice receptionist for clinics",
    "healthcare ai voice agent",
    "medical clinic phone automation",
    "dental clinic ai receptionist",
    "patient appointment booking ai",
    "hipaa compliant ai receptionist",
    "destix ai clinic voice",
    "best clinic voice ai"
  ],
  alternates: {
    canonical: "https://ayush.company/industries/clinics/ai-voice-agents",
  },
};

export default function ClinicsIndustryLayout({
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
                "@id": "https://ayush.company/industries/clinics/ai-voice-agents#service",
                name: "AI Voice Receptionists for Clinics & Healthcare Centers",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Healthcare Telephony & Automated Patient Scheduling",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Autonomous healthcare telephony answering patient calls under 2 rings, coordinating clinic appointments, collecting triage summaries, and sending appointment reminders.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
