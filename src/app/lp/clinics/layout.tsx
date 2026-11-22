import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 After-Hours Clinic & Medspa Voice AI Receptionist | DestiX AI",
  description:
    "Capture 100% of after-hours patient inquiries. Sub-500ms voice AI qualifies elective procedures, books consultations directly into your EHR, and triages emergencies 24/7.",
  alternates: {
    canonical: "https://ayush.company/lp/clinics",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ClinicsLpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
