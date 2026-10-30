"use client";

import React, { useState } from "react";
import { useDograhVoice } from "@/hooks/useDograhVoice";
import {
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  RotateCcw,
  ShieldCheck,
  Building2,
  Sparkles,
  Volume2,
  AlertCircle,
} from "lucide-react";

export default function RheaCallPage() {
  const {
    status,
    isReady,
    error,
    callDuration,
    startCall,
    endCall,
    retry,
    isMuted,
    toggleMute,
    audioLevel,
  } = useDograhVoice("en");

  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTapLocked, setIsTapLocked] = useState(false);

  const isConnected = status === "connected";
  const isConnecting = status === "connecting";
  const isEnded = status === "ended";
  const isFailed = status === "failed";
  const isIdle = status === "idle" || status === "uninitialized";

  // Prevent rapid double-taps
  const handleConnect = async () => {
    if (isTapLocked || isConnecting || isConnected) return;
    setIsTapLocked(true);
    setHasInteracted(true);
    try {
      await startCall();
    } finally {
      setTimeout(() => setIsTapLocked(false), 600);
    }
  };

  const handleRetry = async () => {
    if (isTapLocked) return;
    setIsTapLocked(true);
    try {
      await retry();
    } finally {
      setTimeout(() => setIsTapLocked(false), 600);
    }
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainder
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <main
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#090807] text-[#EDE8DF] select-none overflow-hidden font-sans"
      role="region"
      aria-label="Rhea Voice Consultation Session"
    >
      {/* Ambient background glow layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B88746]/10 rounded-full blur-[140px] opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[#141210] rounded-full blur-[100px] opacity-90" />
      </div>

      {/* Top Header: Brand & Security Status */}
      <header className="relative z-10 w-full max-w-lg mx-auto flex items-center justify-between px-6 pt-8 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#141210] border border-[#B88746]/30 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-[#B88746]" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#B88746] uppercase block font-mono">
              DestiX AI
            </span>
            <span className="text-[11px] text-[#A69F91] tracking-tight block">
              South Delhi Advisory
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141210]/80 border border-[#B88746]/20 backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B88746]" aria-hidden="true" />
          <span className="text-[11px] font-medium text-[#EDE8DF]/90 font-mono tracking-tight">
            Encrypted Voice
          </span>
        </div>
      </header>

      {/* Centerpiece: Rhea's Visual Resonator & Voice Orb */}
      <section
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6"
        aria-live="polite"
      >
        <div className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72 my-auto">
          {/* Outer rotating decorative orbit */}
          <div
            className={`absolute inset-0 rounded-full border border-dashed border-[#B88746]/20 transition-all duration-1000 ${
              isConnected
                ? "animate-[spin_24s_linear_infinite] scale-105 opacity-80"
                : "opacity-40"
            }`}
          />

          {/* Secondary counter-rotating harmonic ring */}
          <div
            className={`absolute inset-4 rounded-full border border-dotted border-[#B88746]/30 transition-all duration-700 ${
              isConnected
                ? "animate-[spin_18s_linear_infinite_reverse] scale-100 opacity-90"
                : "opacity-30"
            }`}
          />

          {/* Reactive Voice Orb */}
          <div
            className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1E1B18] to-[#12100E] border border-[#B88746]/40 shadow-2xl transition-transform duration-150"
            style={{
              transform: isConnected
                ? `scale(${1 + (audioLevel / 100) * 0.22})`
                : isConnecting
                ? "scale(0.96)"
                : "scale(1)",
              boxShadow: isConnected
                ? `0 0 ${25 + audioLevel * 0.6}px rgba(184, 135, 70, ${
                    0.25 + (audioLevel / 100) * 0.45
                  })`
                : "0 10px 30px rgba(0,0,0,0.6)",
            }}
          >
            {/* Ambient Aura inside Orb */}
            <div
              className={`absolute inset-2 rounded-full bg-gradient-to-tr from-[#B88746]/10 to-transparent transition-opacity duration-300 ${
                isConnected ? "opacity-100" : "opacity-40"
              }`}
            />

            {/* Sparkle badge for AI Consultant */}
            <div className="w-10 h-10 rounded-full bg-[#27231E] border border-[#B88746]/40 flex items-center justify-center mb-2 z-10 shadow-inner">
              <Sparkles className="w-5 h-5 text-[#B88746]" aria-hidden="true" />
            </div>

            <div className="z-10 text-center px-4">
              <h1 className="text-xl sm:text-2xl font-serif font-medium text-[#EDE8DF] tracking-tight">
                Rhea
              </h1>
              <p className="text-[11px] text-[#B88746] font-mono tracking-wider uppercase mt-0.5">
                AI Consultant
              </p>
            </div>
          </div>
        </div>

        {/* Live Status Pill & Duration Timer */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141210] border border-[#B88746]/30 shadow-md">
            <span
              className={`w-2 h-2 rounded-full ${
                isConnected
                  ? "bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]"
                  : isConnecting
                  ? "bg-amber-400 animate-ping"
                  : isFailed
                  ? "bg-rose-500"
                  : "bg-[#7E776B]"
              }`}
            />
            <span className="text-xs font-mono font-medium tracking-wide uppercase text-[#EDE8DF]">
              {isConnected
                ? "Live Consultation"
                : isConnecting
                ? "Establishing Link..."
                : isEnded
                ? "Session Ended"
                : isFailed
                ? "Connection Unsuccessful"
                : isReady
                ? "Ready to Consult"
                : "Initializing..."}
            </span>

            {isConnected && (
              <>
                <span className="text-[#524E48] font-mono">•</span>
                <span className="text-xs font-mono font-semibold text-[#B88746]">
                  {formatTimer(callDuration)}
                </span>
              </>
            )}
          </div>

          {/* Dynamic 7-bar Audio Reactive Waveform */}
          {isConnected && (
            <div
              className="flex items-center gap-1.5 h-6 mt-1"
              aria-label={`Real-time audio frequency level: ${audioLevel}%`}
            >
              {[0.4, 0.7, 1.0, 0.85, 0.6, 0.9, 0.5].map((multiplier, i) => {
                const barHeight = Math.max(
                  4,
                  Math.min(22, Math.round(audioLevel * 0.22 * multiplier + 4))
                );
                return (
                  <span
                    key={i}
                    className="w-1 bg-gradient-to-t from-[#B88746] to-[#EDE8DF] rounded-full transition-all duration-75"
                    style={{ height: `${barHeight}px` }}
                  />
                );
              })}
            </div>
          )}

          {/* Transparent Persona Description */}
          <p className="text-xs text-[#A69F91] text-center max-w-xs mt-2 leading-relaxed">
            {isConnected
              ? "Speaking with Rhea in fluent Indian English for South Delhi luxury property advisory."
              : isEnded
              ? "Thank you for consulting with DestiX AI. You can restart or review anytime."
              : "Rhea — DestiX AI's virtual real-estate consultant for South Delhi."}
          </p>
        </div>
      </section>

      {/* Bottom Controls: Phone Call Actions */}
      <footer className="relative z-10 w-full max-w-sm mx-auto px-6 pb-10 flex flex-col items-center gap-4">
        {/* Connection Failure Error Box */}
        {isFailed && error && (
          <div
            className="w-full p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-2.5 backdrop-blur-sm"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-rose-300">Connection Error</p>
              <p className="mt-0.5 text-rose-200/80 leading-normal">{error}</p>
            </div>
          </div>
        )}

        {/* Action Controls by State */}
        {isIdle && (
          <div className="w-full flex flex-col items-center gap-3">
            <button
              onClick={handleConnect}
              disabled={isTapLocked || !isReady}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#B88746] to-[#D4A360] hover:from-[#A67536] hover:to-[#C69450] text-[#090807] font-semibold text-base tracking-wide flex items-center justify-center gap-3 shadow-[0_10px_25px_rgba(184,135,70,0.3)] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Connect to Rhea voice consultation"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Connect to Rhea</span>
            </button>
            <p className="text-[11px] text-[#A69F91]/80 text-center font-mono">
              Direct Indian-English voice link • Browser microphone required
            </p>
          </div>
        )}

        {isConnecting && (
          <div className="w-full flex flex-col items-center gap-3">
            <div className="w-full py-4 px-6 rounded-2xl bg-[#141210] border border-[#B88746]/30 text-[#EDE8DF] flex items-center justify-center gap-3">
              <span className="w-4 h-4 border-2 border-[#B88746] border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-medium">Securing Line to Rhea...</span>
            </div>
            <button
              onClick={endCall}
              className="text-xs text-[#A69F91] hover:text-[#EDE8DF] underline transition-colors"
            >
              Cancel Link
            </button>
          </div>
        )}

        {isConnected && (
          <div className="w-full flex items-center justify-center gap-6 pt-2">
            {/* Mute / Unmute Button */}
            <button
              onClick={toggleMute}
              className={`p-4 rounded-full border transition-all active:scale-95 ${
                isMuted
                  ? "bg-amber-950/40 border-amber-500/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  : "bg-[#141210] border-[#B88746]/30 text-[#EDE8DF] hover:border-[#B88746]"
              }`}
              aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>

            {/* End Call Button */}
            <button
              onClick={endCall}
              className="p-5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-[0_0_25px_rgba(225,29,72,0.4)] transition-all active:scale-95"
              aria-label="End consultation"
              title="End Call"
            >
              <PhoneOff className="w-7 h-7 fill-current" />
            </button>

            {/* Audio Indicator */}
            <div
              className="p-4 rounded-full bg-[#141210] border border-[#B88746]/30 text-[#B88746]"
              title="Voice Active"
            >
              <Volume2 className="w-6 h-6" />
            </div>
          </div>
        )}

        {isEnded && (
          <div className="w-full flex flex-col items-center gap-3">
            <button
              onClick={handleConnect}
              disabled={isTapLocked}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#141210] hover:bg-[#1C1814] border border-[#B88746]/40 text-[#EDE8DF] font-semibold text-sm flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
              aria-label="Start new consultation with Rhea"
            >
              <RotateCcw className="w-4 h-4 text-[#B88746]" />
              <span>Start New Consultation</span>
            </button>
            <p className="text-[11px] text-[#A69F91] text-center">
              Consultation complete. Call duration: {formatTimer(callDuration)}
            </p>
          </div>
        )}

        {isFailed && (
          <div className="w-full flex flex-col items-center gap-3">
            <button
              onClick={handleRetry}
              disabled={isTapLocked}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#B88746] hover:bg-[#A67536] text-[#090807] font-semibold text-sm flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
              aria-label="Retry connection to Rhea"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Connection</span>
            </button>
          </div>
        )}

        {/* Honest AI Assistant Footnote */}
        <p className="text-[10px] text-[#524E48] text-center tracking-tight font-mono">
          DestiX AI Private Advisory • Powered by Sarvam AI & Groq • Indian English
        </p>
      </footer>
    </main>
  );
}
