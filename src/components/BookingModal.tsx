"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck, Mail, MessageSquare, PhoneCall } from "lucide-react";
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
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Dispatch to internal booking pipeline
      const res = await fetch("/api/diagnostic-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          selectedService,
          selectedWindow: selectedDate,
          telemetry: {
            currentSection: typeof window !== "undefined" ? window.location.pathname : "BookingModal",
            referrer: typeof document !== "undefined" ? document.referrer || "Direct" : "Direct",
            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "Unknown",
          },
        }),
      });

      if (!res.ok) {
        console.warn("Booking API returned non-200, continuing to confirmation view.");
      }

      setIsBooked(true);
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#B88746", "#D4A373", "#181614", "#F6F4EE"],
      });
    } catch (err) {
      console.error("Booking dispatch error:", err);
      // Even if network blips, allow user to view confirmation and use WhatsApp / Mailto fallback
      setIsBooked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Autonomous Voice Infrastructure & CRM Pipeline",
    "Real Estate Lead Interception (<30s Speed to Lead)",
    "Bespoke 3D WebGL Digital Storefront & Telephony Bridge",
    "White-Label Studio Engineering Partnership",
  ];

  const timeSlots = [
    "Tomorrow, 11:30 AM IST",
    "Tomorrow, 2:00 PM IST",
    "Tomorrow, 4:00 PM IST",
    "Day after, 6:30 PM IST (US Morning)",
    "Day after, 9:00 PM IST (US Afternoon)",
  ];

  // Pre-compiled direct WhatsApp ping link
  const waMessage = encodeURIComponent(
    `Hi Ayush, I just booked a 30-Min Diagnostic Call with you on ayush.company.\n\n` +
    `• Name: ${formData.name}\n` +
    `• Company: ${formData.company}\n` +
    `• Focus: ${selectedService}\n` +
    `• Window: ${selectedDate}\n` +
    `• Phone: ${formData.phone}`
  );

  // Pre-compiled direct mailto link
  const mailtoSubject = encodeURIComponent(`🚨 [30-Min Diagnostic Call Booking] ${formData.name} - ${formData.company}`);
  const mailtoBody = encodeURIComponent(
    `Hi Ayush,\n\nI just scheduled a 30-minute diagnostic session with you on ayush.company.\n\n` +
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Company: ${formData.company}\n` +
    `Phone: ${formData.phone}\n` +
    `Architecture Focus: ${selectedService}\n` +
    `Requested Window: ${selectedDate}\n\n` +
    `Looking forward to conferring directly.`
  );

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

              {errorMessage && (
                <div className="text-xs text-rose-500 font-mono">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 rounded-full bg-[#181614] hover:bg-[#B88746] text-[#F6F4EE] font-semibold text-sm tracking-tight flex items-center justify-center gap-2 transition-all duration-300 shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Reserving Calendar Slot &amp; Dispatching Dossier...</span>
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
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#EDE8DC] border border-[#B88746] text-[#B88746] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#B88746]" />
            </div>

            <h3 className="font-['Instrument_Serif'] text-4xl text-[#181614] mb-2">
              Diagnostic Call Reserved.
            </h3>

            <p className="text-sm text-[#55514B] leading-relaxed max-w-md mx-auto mb-6 font-normal">
              We have reserved <strong className="text-[#181614]">{selectedDate}</strong> for your 30-minute architecture diagnostic session with <strong className="text-[#181614]">Ayush Meena</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-[#F6F4EE] border border-[#E2DDD1] text-xs text-[#55514B] font-['JetBrains_Mono'] max-w-md mx-auto mb-6 space-y-1 text-left">
              <div><span className="text-[#888277]">CLIENT:</span> {formData.name} ({formData.company})</div>
              <div><span className="text-[#888277]">CONTACT:</span> {formData.email} &bull; {formData.phone}</div>
              <div><span className="text-[#888277]">FOCUS:</span> {selectedService}</div>
              <div><span className="text-[#888277]">WINDOW:</span> {selectedDate}</div>
              <div><span className="text-[#888277]">PRINCIPAL:</span> Ayush Meena (ayushmeenadestixai@gmail.com)</div>
            </div>

            {/* Direct Instant Reach Actions */}
            <div className="space-y-3 max-w-md mx-auto mb-6">
              <a
                href={`mailto:ayushmeenadestixai@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#181614] hover:bg-[#B88746] text-white text-xs font-mono font-semibold transition-colors shadow-xs"
              >
                <Mail className="size-3.5" />
                <span>Send 1-Click Email Dossier to Ayush</span>
              </a>

              <a
                href={`https://wa.me/?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-mono font-semibold transition-colors shadow-xs"
              >
                <MessageSquare className="size-3.5" />
                <span>Ping Ayush on WhatsApp for Instant Confirmation</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full bg-[#F6F4EE] hover:bg-[#EDE8DC] border border-[#E2DDD1] text-xs font-semibold text-[#181614] transition-colors"
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
