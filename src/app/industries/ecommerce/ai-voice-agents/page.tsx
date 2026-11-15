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
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function EcommerceIndustryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const ecommerceFeatures = [
    {
      title: "Sub-15m Abandoned Checkout Outbound",
      desc: "Triggers friendly, helpful outbound calls to customers who abandon high-value carts. Addresses payment or sizing doubts and texts direct discounted payment links.",
      icon: PhoneCall,
      tag: "28% RECOVERY",
    },
    {
      title: "Order Tracking & WISMO Answering",
      desc: "Instantly resolves 'Where Is My Order' queries by querying courier tracking APIs (FedEx, DHL, Delhivery, Blue Dart) with live status updates.",
      icon: RefreshCw,
      tag: "80% TICKET DEFLECTION",
    },
    {
      title: "VIP Concierge & Cross-Sell Recommendations",
      desc: "Tailors conversations based on order history and customer lifetime value, recommending matching accessories and exclusive early-access collections.",
      icon: TrendingUp,
      tag: "+22% AOV",
    },
    {
      title: "Automated Returns & Exchanges Intake",
      desc: "Guides buyers through return policies, verifies eligibility, issues return shipping labels over SMS/WhatsApp, and logs tickets in Gorgias or Zendesk.",
      icon: ShieldCheck,
      tag: "ZERO QUEUES",
    },
    {
      title: "Instant Shopify & WooCommerce Sync",
      desc: "Bi-directional streaming integration with your store inventory, customer profiles, and discount engine for seamless real-time operations.",
      icon: ShoppingBag,
      tag: "DIRECT API SYNC",
    },
    {
      title: "Peak Black Friday / Cyber Monday Scaling",
      desc: "Scales effortlessly to thousands of simultaneous calls during flash sales and holiday shopping periods without hiring seasonal temp agents.",
      icon: Zap,
      tag: "INFINITE SCALE",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1A1817] selection:bg-[#B88746]/20">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7D7871] uppercase">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#7D7871]">Industries</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B88746]" />
            <span className="text-[#1A1817]">E-Commerce & Retail</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 text-[#8F6426] text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Direct-to-Consumer Telephony
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
              AI Voice Agents for E-Commerce & Retail Brands
            </h1>
            <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-3xl">
              Turn abandoned checkouts into revenue and slash customer support overhead. DestiX AI builds autonomous voice agents that recover high-value baskets, resolve order tracking questions, and deliver white-glove VIP concierge services.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-[#1A1817] text-[#F6F4EE] rounded-full text-sm font-medium tracking-wide hover:bg-[#33302C] transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span>Deploy E-Commerce Voice Agent</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88746]" />
              </button>
              <Link
                href="/services/ecommerce-development"
                className="px-8 py-4 border border-[#E2DDD1] bg-[#FAF8F5] text-[#1A1817] rounded-full text-sm font-medium tracking-wide hover:border-[#B88746] transition-colors"
              >
                E-Commerce Systems
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
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
                Automate Your Retail Sales
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F4EE] mb-4">
                Unlock 28% Abandoned Cart Recovery
              </h2>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Experience how DestiX AI voice agents drive immediate top-line revenue for direct-to-consumer and enterprise retail operations.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-[#B88746] text-[#1A1817] rounded-full text-sm font-semibold tracking-wide hover:bg-[#C99756] transition-colors whitespace-nowrap shadow-md"
            >
              Commission Retail Agent
            </button>
          </div>
        </section>
      </main>

      <FinalDeploymentFooter />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
