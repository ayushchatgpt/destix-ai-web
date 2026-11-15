"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FinalDeploymentFooter from "@/components/FinalDeploymentFooter";
import BookingModal from "@/components/BookingModal";
import {
  ShoppingBag,
  Zap,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  RefreshCw,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function EcommerceDevelopmentPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const ecommerceFeatures = [
    {
      title: "Automated Voice & WhatsApp Cart Recovery",
      desc: "Triggers gentle conversational outreach within 15 minutes of an abandoned checkout. Resolves customer hesitations, offers dynamic checkout links, and recovers up to 28% of lost revenue.",
      icon: PhoneCall,
      tag: "28% CART RECOVERY",
    },
    {
      title: "Headless High-Speed Architecture",
      desc: "Next.js 16 storefronts coupled to Shopify Plus or custom backends. Sub-second page navigation and checkout initiation for maximum conversion rates.",
      icon: Zap,
      tag: "SUB-1S LOAD TIMES",
    },
    {
      title: "WhatsApp Conversational Catalog & Checkout",
      desc: "Direct integration with the official Meta WhatsApp Business Cloud API. Browse collections, check live stock, and complete purchases natively within the chat thread.",
      icon: MessageSquare,
      tag: "NATIVE COMMERCE",
    },
    {
      title: "Predictive Inventory & Order Sync",
      desc: "Bidirectional synchronization across Shopify, Amazon, ERP, and regional warehouses. Automated stock alerts and replenishment forecast triggers.",
      icon: RefreshCw,
      tag: "REAL-TIME SYNC",
    },
    {
      title: "AI Product Recommendation Engine",
      desc: "Semantic vector search understanding visual and contextual customer queries like 'linen summer blazer matching khaki trousers' with instant basket upsells.",
      icon: TrendingUp,
      tag: "AVERAGE ORDER VALUE +22%",
    },
    {
      title: "Autonomous Post-Purchase Support",
      desc: "Instant tracking updates, automated return & exchange processing, and order modifications handled 24/7 without manual customer support ticketing.",
      icon: ShieldCheck,
      tag: "ZERO TICKET BACKLOG",
    },
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
            <span className="text-[#1A1817]">AI E-Commerce Development</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Autonomous Conversational Commerce
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              AI E-Commerce Development & Automated Storefronts
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Turn passive storefront traffic into high-converting buyers. We engineer lightning-fast headless e-commerce stores, automated abandoned checkout recovery voice pipelines, and native WhatsApp commerce.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy E-Commerce System</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/3d-web"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                Explore 3D Web Storefronts
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6426] block mb-2">
              Capabilities Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817]">
              Engineered for Revenue Acceleration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#E2DDD1] bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/30 flex items-center justify-center text-[#B88746]">
                      <feat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8F6426] px-2.5 py-1 rounded-full bg-[#B88746]/10 border border-[#B88746]/20">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1817] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#5A554E] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1817] text-[#F6F4EE] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] block mb-2">
                E-Commerce Scaling
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Recalibrate Your Store For Autonomous Sales
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Connect your Shopify Plus or custom e-commerce store to DestiX AI. Recover abandoned carts and deliver personalized 24/7 shopping concierge experiences.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Request E-Commerce Demo
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
