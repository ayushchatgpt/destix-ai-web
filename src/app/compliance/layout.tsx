import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telephony Compliance & Data Sovereignty Architecture | DestiX AI",
  description:
    "Official enterprise regulatory compliance dossier for DestiX AI telephony and data privacy. Documenting TRAI 140/160 DLT, TDRA UAE, UK Ofcom, US FCC/TCPA STIR/SHAKEN, and EU AI Act / GDPR Article 22 zero-retention architectures.",
  alternates: {
    canonical: "https://ayush.company/compliance",
  },
  openGraph: {
    title: "Telephony Compliance & Data Sovereignty Architecture | DestiX AI",
    description:
      "Enterprise regulatory compliance and telecommunications architecture across India, UAE, UK, USA, and Europe. 100% code and carrier account ownership.",
    url: "https://ayush.company/compliance",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telephony Compliance & Data Sovereignty Architecture | DestiX AI",
    description:
      "Enterprise regulatory compliance and telecommunications architecture across India, UAE, UK, USA, and Europe.",
  },
};

export default function ComplianceLayout({
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
                "@type": "TechArticle",
                "@id": "https://ayush.company/compliance#article",
                "headline": "DestiX AI Enterprise Telephony Compliance & Data Sovereignty Architecture",
                "description": "Comprehensive technical architecture documentation of DestiX AI compliance frameworks across TRAI DLT, TDRA UAE, Ofcom UK, FCC/TCPA US, and EU GDPR Article 22.",
                "url": "https://ayush.company/compliance",
                "inLanguage": "en",
                "author": {
                  "@type": "Person",
                  "@id": "https://ayush.company/#person",
                  "name": "Ayush Meena",
                  "jobTitle": "Principal AI Systems Architect",
                  "sameAs": "https://www.wikidata.org/wiki/Q142174891"
                },
                "publisher": {
                  "@type": "Organization",
                  "@id": "https://ayush.company/#organization",
                  "name": "DestiX AI",
                  "url": "https://ayush.company"
                },
                "datePublished": "2026-01-15T00:00:00+00:00",
                "dateModified": new Date().toISOString(),
                "about": [
                  { "@type": "Thing", "name": "Telephony Compliance" },
                  { "@type": "Thing", "name": "TRAI DLT Registration" },
                  { "@type": "Thing", "name": "FCC TCPA STIR/SHAKEN" },
                  { "@type": "Thing", "name": "UK Ofcom Regulation" },
                  { "@type": "Thing", "name": "EU AI Act & GDPR Article 22" },
                  { "@type": "Thing", "name": "Data Sovereignty" }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ayush.company/compliance#breadcrumbs",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ayush.company"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Compliance & Architecture",
                    "item": "https://ayush.company/compliance"
                  }
                ]
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
