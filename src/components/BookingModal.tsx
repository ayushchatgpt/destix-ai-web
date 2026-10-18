"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle, ArrowRight, Sparkles, User, Mail, Building, Phone } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  initialService = "Sprint 01: Single Voice Agent Deployment",
}: BookingModalProps) {
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
        colors: ["#00F5A0", "#3B82F6", "#10B981", "#F4F4F6"],
      });
    }, 600);
  };

  const services = [
    "Sprint 01: Single Voice Agent Deployment ($500/mo)",
    "Sprint 02: Full 3D Spatial Web Platform ($1,800)",
    "Sprint 03: Complete DestiX Growth OS ($1,250/mo)",
    "White-Label Agency Infrastructure Partnership",
  ];

  const timeSlots = [
    "Tomorrow, 11:30 AM IST",
    "Tomorrow, 2:00 PM IST",
    "Tomorrow, 4:00 PM IST",
    "Day after, 6:30 PM IST (US Morning)",
    "Day after, 9:00 PM IST (US Afternoon)",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#111216] border border-white/10 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(0,245,160,0.2)] max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#16181F] text-[#7A7D87] hover:text-[#F4F4F6] border border-white/10 hover:border-[#00F5A0]/40 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181F] border border-white/10 text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#00F5A0] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-beacon" />
              Direct Access to Founder
            </div>

            <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#F4F4F6] tracking-tight mb-2">
              Schedule Architecture Session.
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
              You will meet directly with founder &amp; systems architect <span className="text-[#F4F4F6] font-semibold">Ayush Meena</span>. We will map your call architecture, review conversion metrics, and confirm 5x ROI feasibility.
            </p>

            <form onSubmit={handleBook} className="space-y-4">
              {/* Target Sprint Selection */}
              <div>
                <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#7A7D87] mb-1.5">
                  Target Deployment Scope
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-white/10 text-[#F4F4F6] text-xs sm:text-sm focus:border-[#00F5A0] focus:outline-none transition-colors"
                >
                  {services.map((s, idx) => (
                    <option key={idx} value={s} className="bg-[#111216] text-[#F4F4F6]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Slot Picker */}
              <div>
                <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#7A7D87] mb-1.5">
                  Select Discovery Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlots.map((slot, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setSelectedDate(slot)}
                      className={`px-3 py-2.5 rounded-xl text-left text-xs font-['JetBrains_Mono'] border transition-all ${
                        selectedDate === slot
                          ? "bg-[#16181F] border-[#00F5A0] text-[#00F5A0] font-semibold shadow-[0_0_15px_rgba(0,245,160,0.15)]"
                          : "bg-[#08080A] border-white/5 text-[#7A7D87] hover:border-white/20"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#7A7D87] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08080A] border border-white/10 text-[#F4F4F6] text-xs sm:text-sm placeholder:text-[#525560] focus:border-[#00F5A0] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#7A7D87] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08080A] border border-white/10 text-[#F4F4F6] text-xs sm:text-sm placeholder:text-[#525560] focus:border-[#00F5A0] focus:outline-none"
                  />
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#7A7D87] mb-1">
                    Company / Domain
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="company.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08080A] border border-white/10 text-[#F4F4F6] text-xs sm:text-sm placeholder:text-[#525560] focus:border-[#00F5A0] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#7A7D87] mb-1">
                    Phone (For Instant Demo Dial)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08080A] border border-white/10 text-[#F4F4F6] text-xs sm:text-sm placeholder:text-[#525560] focus:border-[#00F5A0] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 rounded-full bg-[#00F5A0] hover:bg-[#34F8B3] text-[#08080A] font-bold text-sm tracking-tight flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(0,245,160,0.4)] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Reserving Calendar Slot...</span>
                ) : (
                  <>
                    <span>Confirm Session with Ayush</span>
                    <ArrowRight className="w-4 h-4 text-[#08080A]" />
                  </>
                )}
              </button>

              <div className="text-center text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] pt-2">
                DIRECT FOUNDER ACCESS • ZERO OBLIGATION • 100% PRIVATE DISCOVERY
              </div>
            </form>
          </div>
        ) : (
          /* Booked Confirmation Screen */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#00F5A0]" />
            </div>

            <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#F4F4F6] mb-3">
              Calendar Confirmed.
            </h3>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md mx-auto mb-6">
              We&apos;ve reserved <span className="text-[#00F5A0] font-semibold">{selectedDate}</span> for your architecture session with <span className="text-white font-semibold">Ayush Meena</span>. A Google Meet invite and blueprint dossier have been sent to <span className="text-[#00F5A0]">{formData.email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-[#08080A] border border-white/5 text-xs text-[#7A7D87] font-['JetBrains_Mono'] max-w-md mx-auto mb-8 space-y-1 text-left">
              <div>SESSION: {selectedService}</div>
              <div>DATE: {selectedDate}</div>
              <div>ORGANIZER: Ayush Meena (ayushmeenadestixai@gmail.com)</div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#16181F] hover:bg-[#1E222D] border border-white/10 text-xs font-bold text-[#F4F4F6] transition-colors"
            >
              Return to Platform
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
