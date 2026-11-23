import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import { ArrowUpRight, Compass, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-40 pb-24 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD1] text-[11px] font-mono tracking-widest text-[#B88746] mb-8 shadow-xs">
          <Compass className="size-3.5 text-[#B88746]" />
          <span>ERROR 404 &bull; ARCHITECTURAL SPECIFICATION NOT FOUND</span>
        </div>

        <h1 className="font-['Instrument_Serif'] text-6xl sm:text-8xl md:text-9xl text-[#181614] leading-[0.9] mb-6">
          Page Not <span className="italic text-[#B88746]">Found.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#55514B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-xl mx-auto mb-10">
          The requested route does not exist or has been relocated to our sovereign canonical telephony matrix. Explore our primary operating hubs below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 group"
          >
            <span>Return to Global Home</span>
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B88746] group-hover:text-[#F6F4EE]" />
          </Link>
          <Link
            href="/services/voice-agents"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
          >
            Inspect Voice Telephony
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E2DDD1] hover:border-[#181614] text-[#181614] font-semibold text-sm transition-all duration-300 text-center"
          >
            View Pricing &amp; ROI
          </Link>
        </div>

        {/* Major Hub Directory */}
        <div className="p-8 rounded-3xl bg-white border border-[#E2DDD1] shadow-xs text-left max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B88746] font-semibold mb-4">
            Direct Sovereign Deployment Hubs
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-['Plus_Jakarta_Sans']">
            <Link href="/delhi" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Delhi NCR (HQ)
            </Link>
            <Link href="/mumbai" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Mumbai
            </Link>
            <Link href="/bengaluru" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Bengaluru
            </Link>
            <Link href="/hyderabad" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Hyderabad
            </Link>
            <Link href="/pune" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Pune
            </Link>
            <Link href="/chandigarh" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Chandigarh
            </Link>
            <Link href="/jaipur" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Jaipur
            </Link>
            <Link href="/lucknow" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Lucknow
            </Link>
            <Link href="/london" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; London (UK)
            </Link>
            <Link href="/miami" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Miami (US)
            </Link>
            <Link href="/new-york" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; New York (US)
            </Link>
            <Link href="/dubai" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Dubai (UAE)
            </Link>
            <Link href="/paris" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Paris (France)
            </Link>
            <Link href="/texas" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Texas (US)
            </Link>
            <Link href="/europe" className="text-[#181614] hover:text-[#B88746] transition-colors py-1">
              &rarr; Pan-Europe
            </Link>
            <Link href="/locations" className="text-[#B88746] font-semibold hover:underline py-1">
              &rarr; View All 25 Hubs
            </Link>
          </div>
        </div>
      </main>

      <FinalDeploymentFooter />
    </div>
  );
}
