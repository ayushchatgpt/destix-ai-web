"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarqueeTrack } from "@/components/MarqueeTrack";
import { HowWeHelp } from "@/components/HowWeHelp";
import { ClientProof } from "@/components/ClientProof";
import { BuiltToCompound } from "@/components/BuiltToCompound";
import { FounderSection } from "@/components/FounderSection";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { PlaybooksSection } from "@/components/PlaybooksSection";
import { CoreServicesTriad } from "@/components/CoreServicesTriad";
import { LiveVoiceDemo } from "@/components/LiveVoiceDemo";
import { PricingCalculator } from "@/components/PricingCalculator";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { BookingModal } from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative min-h-screen bg-[#F4F1EA] text-[#181512]">
      {/* 1. Sticky Glass Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main>
        {/* 2. High-Converting Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Dark Espresso Infinite Marquee */}
        <MarqueeTrack />

        {/* 4. (02) How We Help (6-Pillar Border Grid + Vintage Photography) */}
        <HowWeHelp onOpenBooking={handleOpenBooking} />

        {/* 5. Client Proof & YouTube Case Studies */}
        <ClientProof />

        {/* 6. (03) Built to Compound (Triad of Depth) */}
        <BuiltToCompound />

        {/* 7. (04) Founder Authority Section (Ayush Meena, Founder & CEO) */}
        <FounderSection onOpenBooking={handleOpenBooking} />

        {/* 8. Certified AI Tech Stack Marquee */}
        <TechStackMarquee />

        {/* 9. (05) Case Studies & Playbooks (The 6 Production Blueprints) */}
        <PlaybooksSection onOpenBooking={handleOpenBooking} />

        {/* 10. (07) Core Services Triad (In Dark Espresso) */}
        <CoreServicesTriad onOpenBooking={handleOpenBooking} />

        {/* 11. Interactive Live Voice Agent Demo Widget */}
        <LiveVoiceDemo />

        {/* 12. (08) Transparent Pricing & Interactive Minute ROI Calculator */}
        <PricingCalculator onOpenBooking={handleOpenBooking} />

        {/* 13. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 14. Final CTA & Footer */}
      <FinalCtaFooter onOpenBooking={handleOpenBooking} />

      {/* Interactive Consultation Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
