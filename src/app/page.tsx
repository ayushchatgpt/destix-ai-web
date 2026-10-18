"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeTrack from "@/components/MarqueeTrack";
import OperatingPrinciples from "@/components/OperatingPrinciples";
import SelectedWorks from "@/components/SelectedWorks";
import ProductionPlaybooks from "@/components/ProductionPlaybooks";
import CorePracticeAreas from "@/components/CorePracticeAreas";
import VoiceDemoConsole from "@/components/VoiceDemoConsole";
import EngagementModel from "@/components/EngagementModel";
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
    <main className="min-h-screen bg-[#F6F4EE] text-[#181512] relative selection:bg-[#B88746]/20 selection:text-[#181512]">
      {/* Section 1: The Architectural Floating Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Section 2: The Command Hero */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onScrollToDemo={handleScrollToDemo}
      />

      {/* Section 3: The Monumental Espresso Marquee */}
      <MarqueeTrack />

      {/* Section 4: (02) The DestiX Operating Principles (How We Think) */}
      <OperatingPrinciples />

      {/* Section 5: (03) Selected Works & Architectural Benchmarks */}
      <SelectedWorks />

      {/* Section 6: (04) Deployed Production Playbooks (Vertical Blueprints) */}
      <ProductionPlaybooks />

      {/* Section 7: (05) The Core Practice Areas (Deep Espresso Section) */}
      <CorePracticeAreas />

      {/* Section 8: (06) The Live Voice Demonstration Console */}
      <VoiceDemoConsole />

      {/* Section 9: (07) The Engagement Model & Transparent Volume Modeler */}
      <EngagementModel onOpenBooking={handleOpenBooking} />

      {/* Section 10: (08) The Studio Leadership Dossier */}
      <LeadershipDossier onOpenBooking={handleOpenBooking} />

      {/* Section 11: Institutional FAQ Accordion */}
      <FaqSection />

      {/* Section 12: Final Commissioning Invitation & Footer */}
      <FinalDeploymentFooter onOpenBooking={handleOpenBooking} />

      {/* Private Architecture Discovery Modal */}
      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
