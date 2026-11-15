"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Smartphone,
  Users,
  Bell,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function AppointmentBookingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const bookingCapabilities = [
    {
      title: "Real-Time Slot Negotiation",
      desc: "Queries calendar APIs in under 120ms. Understands natural language queries like 'next Tuesday afternoon around 3 or anytime Thursday before noon' without rigid date pickers.",
      icon: Calendar,
      tag: "NATURAL LANGUAGE",
    },
    {
      title: "Automated Multi-Channel Reminders",
      desc: "Sends customized WhatsApp messages, SMS, and ICS calendar invites with 24-hour and 2-hour reminder sequences, slashing clinic and consultation no-show rates by 44%.",
      icon: Bell,
      tag: "44% LOWER NO-SHOWS",
    },
    {
      title: "Strict BANT Qualification Gates",
      desc: "Screens prospect budget, timeline, and decision-maker status before showing calendar availability. Prevents low-intent leads from consuming executive calendar bandwidth.",
      icon: ShieldCheck,
      tag: "EXECUTIVE PROTECTION",
    },
    {
      title: "Autonomous Rescheduling & Cancellation",
      desc: "Clients can call or text to move appointments. The AI instantly releases old calendar events and reserves new slots across Google Calendar, Outlook, and Cal.com.",
      icon: RefreshCw,
      tag: "ZERO PHONE TAG",
    },
    {
      title: "CRM & Field Rep Route Sync",
      desc: "For field sales and real estate site visits, the agent books meetings based on geographical clusters, factoring in driving buffers and rep availability.",
      icon: Users,
      tag: "TERRITORY ROUTING",
    },
    {
      title: "Sub-2-Second Confirmation Dispatch",
      desc: "Dispatches personalized confirmation packets containing driving directions, site entry gate codes, and preparatory documentation instantly over WhatsApp and email.",
      icon: Zap,
      tag: "INSTANT DISPATCH",
    },
  ];

  const integrationPlatforms = [
    { name: "Google Calendar & Workspace", type: "Bidirectional REST Sync" },
    { name: "Microsoft Outlook 365 & Exchange", type: "Graph API Webhooks" },
    { name: "Cal.com & Calendly Enterprise", type: "Sub-second Event Triggers" },
    { name: "Salesforce Meetings & Scheduler", type: "Enterprise Pipeline Mapping" },
    { name: "HubSpot Meetings Tool", type: "Contact Timeline Sync" },
    { name: "Zoho Bookings & Bigin", type: "Regional Allocation Engine" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7D7871] uppercase">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <Link href="/services" className="hover:text-[#1A1817] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">Appointment Booking Automation</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Autonomous Scheduling Infrastructure
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              AI Appointment Booking & Calendar Automation
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Turn inbound inquiries and qualified telephone prospects into locked calendar appointments in under 45 seconds. Zero back-and-forth emails, zero double bookings, and sub-second calendar synchronization.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Commission Booking System</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/pricing"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                View Unit Economics
              </Link>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <div className="text-3xl sm:text-4xl font-serif text-[#1A1817] mb-1">
                44%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8F6426] mb-2">
                No-Show Reduction
              </div>
              <p className="text-xs text-[#7D7871] leading-relaxed">
                Automated multi-touch WhatsApp and SMS confirmations keep attendance rates above 86%.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <div className="text-3xl sm:text-4xl font-serif text-[#1A1817] mb-1">
                &lt; 45s
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8F6426] mb-2">
                Booking Speed
              </div>
              <p className="text-xs text-[#7D7871] leading-relaxed">
                From initial caller greeting to calendar event invite delivery across all devices.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <div className="text-3xl sm:text-4xl font-serif text-[#1A1817] mb-1">
                100%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8F6426] mb-2">
                Conflict Prevention
              </div>
              <p className="text-xs text-[#7D7871] leading-relaxed">
                Atomic slot holds prevent dual bookings even during peak 50+ concurrent call spikes.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <div className="text-3xl sm:text-4xl font-serif text-[#1A1817] mb-1">
                24/7/365
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8F6426] mb-2">
                Availability
              </div>
              <p className="text-xs text-[#7D7871] leading-relaxed">
                Lock bookings at midnight, weekends, and regional public holidays without staff overhead.
              </p>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Capabilities Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              Engineered for Zero Calendar Friction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookingCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <cap.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8F6426] px-2.5 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/20">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1817] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#5A554E] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Stacks */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E2DDD1] bg-[#FAF8F5]">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
                Native Platform Interconnects
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1817] mb-4">
                Supported Calendar & Enterprise CRMs
              </h2>
              <p className="text-sm text-[#5A554E] leading-relaxed">
                We configure direct streaming integrations. When a meeting is confirmed, contact entity cards, pre-call qualification notes, and Zoom/Google Meet links generate automatically.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrationPlatforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[#E2DDD1] bg-[#F6F4EE] flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-[#1A1817]">{platform.name}</span>
                  <span className="text-[11px] font-mono text-[#8F6426]">{platform.type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-12 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Technical Clarity
            </span>
            <h2 className="font-serif text-3xl text-[#1A1817]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <h3 className="font-serif text-lg text-[#1A1817] mb-2">
                How does the AI handle time-zone differences and calendar conflicts?
              </h3>
              <p className="text-sm text-[#5A554E] leading-relaxed">
                The agent interfaces directly with the calendar API (Google Workspace, Microsoft Graph, or Cal.com) over streaming webhooks. It checks slot availability in real-time, calculates user time zones dynamically, and locks the slot with an atomic hold during the conversation to prevent double bookings.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <h3 className="font-serif text-lg text-[#1A1817] mb-2">
                Can it qualify the caller before granting an appointment slot?
              </h3>
              <p className="text-sm text-[#5A554E] leading-relaxed">
                Yes. The agent evaluates BANT criteria (Budget, Authority, Need, and Timeline). If a caller does not meet the qualification threshold, it routes them to asynchronous resources or secondary queues rather than booking time on your senior executive calendars.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5]">
              <h3 className="font-serif text-lg text-[#1A1817] mb-2">
                What happens if a customer needs to reschedule or cancel?
              </h3>
              <p className="text-sm text-[#5A554E] leading-relaxed">
                Customers can reply via SMS, WhatsApp, or call back the voice agent. The system authenticates the caller via phone number or booking ID, releases the original slot instantly, and offers alternative verified available openings.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                Start Automating Your Calendar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Deploy Autonomous AI Scheduling Within 7 Days
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Eliminate manual scheduling labor, cut clinic and sales no-shows by 44%, and lock in high-intent client meetings while your competitors are still playing phone tag.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Schedule System Discovery
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
