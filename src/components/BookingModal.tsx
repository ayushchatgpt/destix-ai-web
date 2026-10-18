"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle, ArrowRight, Sparkles, User, Mail, Building, Phone } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = "Autonomous AI Voice Agents",
}) => {
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedDate, setSelectedDate] = useState("Tomorrow, 4:00 PM IST");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#06B6D4", "#3B82F6", "#10B981", "#F8FAFC"],
      });
    }, 700);
  };

  const services = [
    "Autonomous AI Voice Agents",
    "Enterprise AI Operating System",
    "High-Converting 3D WebGL Storefront",
    "White-Label Agency Partnership",
  ];

  const timeSlots = [
    "Tomorrow, 11:30 AM IST",
    "Tomorrow, 2:00 PM IST",
    "Tomorrow, 4:00 PM IST",
    "Day after, 6:30 PM IST (US Morning)",
    "Day after, 9:00 PM IST (US Afternoon)",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-[#0E1017] text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 bg-white/[0.02]">
          <div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Private Strategy Session
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Schedule 30-min with <span className="text-cyan-400">Ayush Meena</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isBooked ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                <CheckCircle className="size-8" />
              </div>
              <h4 className="font-display text-3xl font-bold text-white">
                Consultation Confirmed
              </h4>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                A calendar invitation and direct Google Meet link have been prepared for{" "}
                <strong className="text-white">{formData.email || "your email"}</strong> with founder{" "}
                <strong className="text-cyan-400">Ayush Meena</strong>.
              </p>

              <div className="mx-auto mt-6 max-w-md rounded-2xl border border-white/10 bg-[#08090C] p-4 text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Focus Area</span>
                  <span className="text-white font-sans font-medium">{selectedService}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Selected Time</span>
                  <span className="text-cyan-300 font-sans font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Lead Engineer</span>
                  <span className="text-white font-sans font-medium">Ayush Meena (Founder & CEO)</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-primary px-8 py-3 text-xs uppercase tracking-wider font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-400">
                  1. Select Strategic Focus
                </label>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`text-left px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                        selectedService === srv
                          ? "border-cyan-400 bg-cyan-950/40 text-cyan-300 font-semibold shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                          : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot picker */}
              <div>
                <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-400">
                  2. Choose Preferred Window
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {timeSlots.map((ts) => (
                    <button
                      key={ts}
                      type="button"
                      onClick={() => setSelectedDate(ts)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs transition-all ${
                        selectedDate === ts
                          ? "border-cyan-400 bg-cyan-500 text-black font-semibold shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                          : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <Clock className="size-3" />
                      {ts}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2">
                <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-400">
                  3. Your Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#08090C] py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                    <input
                      required
                      type="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#08090C] py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                    <input
                      required
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#08090C] py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                    <input
                      required
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#08090C] py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  {isSubmitting ? (
                    <span>Securing Strategy Slot...</span>
                  ) : (
                    <span>Lock In Strategy Consultation</span>
                  )}
                </button>
                <p className="mt-2 text-center text-[11px] font-mono text-slate-500">
                  Zero sales pitch. Strict 5x ROI model audit or we politely decline.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
