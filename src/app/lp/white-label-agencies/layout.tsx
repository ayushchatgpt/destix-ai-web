import { Metadata } from "next";

export const metadata: Metadata = {
  title: "White-Label AI Voice Infrastructure for Agencies & RevOps Consultancies | DestiX AI",
  description:
    "Launch your own high-margin autonomous voice AI practice. 100% white-label under your agency domain, wholesale carrier rates, and audited 435ms latency. Keep 80%+ gross margins.",
  alternates: {
    canonical: "https://ayush.company/lp/white-label-agencies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WhiteLabelAgenciesLpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
