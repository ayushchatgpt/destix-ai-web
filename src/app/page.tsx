"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeTrack from "@/components/MarqueeTrack";
import SpatialNeuralCore from "@/components/SpatialNeuralCore";
import EngineeringPillars from "@/components/EngineeringPillars";
import AudioTelemetryConsole from "@/components/AudioTelemetryConsole";
import ArchitecturalShowcase from "@/components/ArchitecturalShowcase";
import DeploymentSprints from "@/components/DeploymentSprints";
import MinutesRoiCalculator from "@/components/MinutesRoiCalculator";
import FounderDossier from "@/components/FounderDossier";
import FaqSection from "@/components/FaqSection";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  const handleScrollToDemo = () => {
    const el = document.getElementById("voice");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-[#F4F4F6] relative selection:bg-[#00F5A0]/20 selection:text-[#00F5A0]">
      {/* Section 1: Floating Glass Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Section 2: The Command Center Hero */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onScrollToDemo={handleScrollToDemo}
      />

      {/* Autonomous System Ticker Strip */}
      <MarqueeTrack />

      {/* Section 3: The Interactive 3D Spatial Canvas (DestiX Neural Core in Three.js WebGL) */}
      <SpatialNeuralCore />

      {/* Section 4: The 6 Core Engineering Pillars */}
      <EngineeringPillars />

      {/* Section 5: Interactive Audio Telemetry Console */}
      <AudioTelemetryConsole />

      {/* Section 6: The Signature Work & Architectural Showcase */}
      <ArchitecturalShowcase />

      {/* Section 7: Transparent Deployment Sprints (Pricing) */}
      <DeploymentSprints onOpenBooking={handleOpenBooking} />

      {/* Section 8: Interactive Minutes & Cost Savings Calculator */}
      <MinutesRoiCalculator onOpenBooking={handleOpenBooking} />

      {/* Section 9: Founder Dossier (Ayush Meena) */}
      <FounderDossier onOpenBooking={handleOpenBooking} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Section 10: Final Deployment CTA & Clean Footer */}
      <FinalDeploymentFooter onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & Discovery Modal */}
      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
