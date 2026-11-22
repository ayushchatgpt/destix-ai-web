import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub-45s Luxury Real Estate Voice AI & Speed-to-Lead Telephony | DestiX AI",
  description:
    "Convert Meta and Google ad leads in under 45 seconds. Audited 435ms P50 latency, native English/Arabic/Hinglish, and instant WhatsApp brochures. Verified AED 85M+ off-plan pipeline.",
  alternates: {
    canonical: "https://ayush.company/lp/real-estate",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RealEstateLpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
