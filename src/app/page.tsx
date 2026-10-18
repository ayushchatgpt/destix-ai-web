"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeTrack from "@/components/MarqueeTrack";
import HowWeBuild from "@/components/HowWeBuild";
import SelectedWorks from "@/components/SelectedWorks";
import ProductionPlaybooks from "@/components/ProductionPlaybooks";
import CorePracticeAreas from "@/components/CorePracticeAreas";
import VoiceDemoConsole from "@/components/VoiceDemoConsole";
import ScopingModel from "@/components/ScopingModel";
import LeadershipDossier from "@/components/LeadershipDossier";
import FaqSection from "@/components/FaqSection";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  const handleScrollToDemo = () => {
    const el = document.getElementById("voice-console");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#181614] relative selection:bg-[#B8652B]/20 selection:text-[#181614]">
      {/* Section 1: Sticky Glass Header (Always Converting) */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Section 2: The High-Converting Hero */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onScrollToDemo={handleScrollToDemo}
      />

      {/* Section 3: Deep Espresso Marquee (Authority Strip) */}
      <MarqueeTrack />

      {/* Section 4: (02) The Conversion Problem & Our Solution (6 Pillars) */}
      <HowWeBuild />

      {/* Section 5: (03) Selected Work & Live Proof */}
      <SelectedWorks />

      {/* Section 6: (04) Deployed Production Playbooks (Vertical Blueprints) */}
      <ProductionPlaybooks />

      {/* Section 7: (05) The Core Practice Areas (Deep Espresso Section) */}
      <CorePracticeAreas />

      {/* Section 8: (06) The Live Voice Demonstration Console */}
      <VoiceDemoConsole />

      {/* Section 9: (07) The Scoping Model & Interactive Volume Modeler (NO TIERS) */}
      <ScopingModel onOpenBooking={handleOpenBooking} />

      {/* Section 10: (08) The Studio Leadership Dossier */}
      <LeadershipDossier onOpenBooking={handleOpenBooking} />

      {/* Section 11: High-Trust FAQ Accordion */}
      <FaqSection />

      {/* Section 12: Final High-Conversion Invitation & Footer */}
      <FinalDeploymentFooter onOpenBooking={handleOpenBooking} />

      {/* 30-Min Diagnostic Consultation Modal */}
      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
