"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  initialService = "Autonomous Voice Infrastructure & CRM Pipeline",
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
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#B88746", "#D4A373", "#181614", "#F6F4EE"],
      });
    }, 600);
  };

  const services = [
    "Autonomous Voice Infrastructure & CRM Pipeline",
    "Bespoke 3D WebGL Digital Storefront & Telephony Bridge",
    "High-Ticket Lead Interception System (<45s SLA)",
    "White-Label Studio Engineering Partnership",
  ];

  const timeSlots = [
    "Tomorrow, 11:30 AM IST",
    "Tomorrow, 2:00 PM IST",
    "Tomorrow, 4:00 PM IST",
    "Day after, 6:30 PM IST (US Morning)",
    "Day after, 9:00 PM IST (US Afternoon)",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#131210]/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-[#E2DDD1] p-6 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F6F4EE] text-[#55514B] hover:text-[#181614] border border-[#E2DDD1] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#E2DDD1] text-[10px] font-['JetBrains_Mono'] tracking-widest text-[#B88746] uppercase mb-4 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88746]" />
              Direct Diagnostic Session
            </div>

            <h3 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-[#181614] tracking-tight mb-2">
              Book Your 30-Min Diagnostic Call.
            </h3>
            <p className="text-xs sm:text-sm text-[#55514B] leading-relaxed mb-6 font-normal">
              You will confer directly with principal &amp; systems architect <strong className="text-[#181614]">Ayush Meena</strong>. We will audit your lead drop-off rate, map your CRM bottlenecks, and confirm 5x Hurdle Rate feasibility before any project begins.
            </p>

            <form onSubmit={handleBook} className="space-y-4">
              {/* Target Focus */}
              <div>
                <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] mb-1.5">
                  Primary Architecture Focus
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] text-[#181614] text-xs sm:text-sm focus:border-[#B88746] focus:outline-none transition-colors"
                >
                  {services.map((s, idx) => (
                    <option key={idx} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Discovery Window Slots */}
              <div>
                <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] mb-1.5">
                  Select Diagnostic Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlots.map((slot, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setSelectedDate(slot)}
                      className={`px-3 py-2.5 rounded-xl text-left text-xs font-['JetBrains_Mono'] border transition-all ${
                        selectedDate === slot
                          ? "bg-[#EDE8DC] border-[#B88746] text-[#B88746] font-bold shadow-2xs"
                          : "bg-[#F6F4EE] border-[#E2DDD1] text-[#55514B] hover:border-[#B88746]/40"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] text-[#181614] text-xs sm:text-sm placeholder:text-[#888277] focus:border-[#B88746] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] text-[#181614] text-xs sm:text-sm placeholder:text-[#888277] focus:border-[#B88746] focus:outline-none"
                  />
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] mb-1">
                    Company / Domain
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="enterprise.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] text-[#181614] text-xs sm:text-sm placeholder:text-[#888277] focus:border-[#B88746] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#888277] mb-1">
                    Direct Phone (For Test Demo Dial)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E2DDD1] text-[#181614] text-xs sm:text-sm placeholder:text-[#888277] focus:border-[#B88746] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm tracking-tight flex items-center justify-center gap-2 transition-all duration-300 shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Reserving Calendar Slot...</span>
                ) : (
                  <>
                    <span>Confirm 30-Min Diagnostic Call with Ayush</span>
                    <ArrowRight className="w-4 h-4 text-[#F6F4EE]" />
                  </>
                )}
              </button>

              <div className="text-center text-[10px] font-['JetBrains_Mono'] text-[#888277] pt-2">
                DIRECT BUILDER INTERFACE • ZERO SLIDEWARE • CONFIDENTIAL AUDIT
              </div>
            </form>
          </div>
        ) : (
          /* Booked Confirmation Screen */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#EDE8DC] border border-[#B88746] text-[#B88746] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#B88746]" />
            </div>

            <h3 className="font-['Instrument_Serif'] text-4xl text-[#181614] mb-3">
              Diagnostic Call Reserved.
            </h3>

            <p className="text-sm text-[#55514B] leading-relaxed max-w-md mx-auto mb-6 font-normal">
              We have reserved <strong className="text-[#181614]">{selectedDate}</strong> for your 30-minute architecture diagnostic session with <strong className="text-[#181614]">Ayush Meena</strong>. An executive calendar invite has been sent to <span className="text-[#B88746]">{formData.email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] text-xs text-[#55514B] font-['JetBrains_Mono'] max-w-md mx-auto mb-8 space-y-1 text-left">
              <div>FOCUS: {selectedService}</div>
              <div>WINDOW: {selectedDate}</div>
              <div>PRINCIPAL: Ayush Meena (ayushmeenadestixai@gmail.com)</div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#181614] hover:bg-[#B88746] text-xs font-semibold text-[#F6F4EE] transition-colors"
            >
              Return to Studio Platform
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
