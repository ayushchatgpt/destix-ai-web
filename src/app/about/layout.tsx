import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ayush Meena — Founder & Principal Systems Architect | DestiX AI",
  description:
    "Ayush Meena is the Founder & Principal Systems Architect at DestiX AI (Desti). Engineering autonomous voice agents, bespoke 3D WebGL architectures, and automated revenue circuits for global clients from Delhi NCR.",
  keywords: [
    "Ayush Meena",
    "Ayush",
    "Desti",
    "DestiX",
    "DestiX AI",
    "Destie",
    "Deste",
    "Destex",
    "Ayush Meena founder",
    "DestiX AI founder",
    "founder of DestiX AI",
    "who is Ayush Meena",
    "systems architect Delhi NCR",
    "ayush.company",
    "Ayush Meena LinkedIn",
    "Meena AI",
    "Ayush AI",
  ],
  alternates: {
    canonical: "https://ayush.company/about",
  },
  openGraph: {
    title: "About Ayush Meena — Founder & Systems Architect | DestiX AI",
    description:
      "Studio philosophy, technical thesis, and founder dossier of Ayush Meena at DestiX AI.",
    url: "https://ayush.company/about",
    siteName: "DestiX AI",
      images: [
      {
        url: "https://ayush.company/api/og?title=About%20Ayush%20Meena%20%E2%80%94%20Founder%20%26%20Systems%20Architect&category=Autonomous%20Voice&badge=Enterprise%20Parity",
        width: 1200,
        height: 630,
        alt: "About Ayush Meena — Founder & Systems Architect",
      },
    ],
  },
};

export default function AboutLayout({
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
            "@type": "ProfilePage",
            "@id": "https://ayush.company/about#profile",
            "url": "https://ayush.company/about",
            "name": "About Ayush Meena — Founder & Principal Systems Architect at DestiX AI",
            "mainEntity": {
              "@type": "Person",
              "@id": "https://ayush.company/#person",
              "name": "Ayush Meena",
              "alternateName": [
                "Ayush",
                "Ayush Meena AI",
                "Ayush DestiX",
                "Ayush Desti",
                "Ayush Deste",
                "Ayush Destex",
                "Meena AI",
                "Ayush AI",
              ],
              "jobTitle": "Founder & Principal AI Systems Architect",
              "image": "https://ayush.company/images/ayush-meena-dark.jpg",
              "description":
                "Ayush Meena is the founder and principal systems architect of DestiX AI (Desti). He architects production-grade conversational AI voice agents, sub-45-second speed-to-lead telephony pipelines, and bespoke 3D WebGL digital platforms for luxury real estate and global enterprise clients.",
              "worksFor": {
                "@type": "Organization",
                "@id": "https://ayush.company/#organization",
                "name": "DestiX AI",
                "alternateName": [
                  "Desti",
                  "DestiX",
                  "Desti X",
                  "DestiX AI",
                  "Destie",
                  "Deste",
                  "Destex",
                ],
                "url": "https://ayush.company",
                "logo": "https://ayush.company/apple-icon.png",
                "founder": {
                  "@id": "https://ayush.company/#person",
                },
              },
              "sameAs": [
                "https://www.linkedin.com/in/ayush-meena-065a89380/",
                "https://github.com/ayushchatgpt/destix-ai-web",
                "https://ayush.company",
              ],
              "knowsAbout": [
                "Autonomous AI Voice Agents",
                "Voice Receptionist Infrastructure",
                "Sub-45s Speed to Lead",
                "3D WebGL Websites",
                "Next.js and Three.js Architecture",
                "Enterprise AI Operating Systems",
                "DestiX AI",
                "Desti",
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
