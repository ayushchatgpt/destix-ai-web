"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FinalDeploymentFooter } from "@/components/FinalDeploymentFooter";
import { Server, PhoneCall, ShieldCheck, Zap, ArrowRight, DollarSign, Layers } from "lucide-react";

export default function YellowHaptikExotelPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] flex flex-col selection:bg-[#B88746]/20">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE6DD] border border-[#DCD6C9] text-xs font-['JetBrains_Mono'] text-[#B88746] font-semibold uppercase tracking-wider mb-6">
            <Layers className="w-3.5 h-3.5 text-[#B88746]" />
            Enterprise Market Audit // Native Speech Streaming vs. Legacy Chatbots
          </div>

          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-6xl text-[#181614] tracking-tight leading-[1.05] mb-6">
            DestiX AI vs Yellow.ai, Jio Haptik, Exotel &amp; Gnani.ai: <span className="italic text-[#B88746]">2026 Enterprise Audit</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-['JetBrains_Mono'] text-[#888277] pb-8 border-b border-[#E2DDD1] mb-10">
            <span>Author: Ayush Meena</span>
            <span>•</span>
            <span>Published: Q1 2026</span>
            <span>•</span>
            <span>Read Time: 9 Mins</span>
            <span>•</span>
            <span className="text-[#B88746]">Focus: Enterprise Platforms vs Sovereign Custom Engineering</span>
          </div>

          {/* Executive Summary Box */}
          <div className="p-6 rounded-2xl bg-[#EDE9E0] border border-[#DDD7CB] mb-12">
            <h2 className="text-xs font-['JetBrains_Mono'] uppercase tracking-widest text-[#B88746] font-bold mb-3">
              Architectural Takeaway for Enterprise Buyers
            </h2>
            <p className="text-sm sm:text-base text-[#181614] leading-relaxed font-normal">
              Funded Indian enterprise platforms (Yellow.ai Nexus VOX, Jio Haptik) originated as text-first customer support chatbots that were subsequently retrofitted with text-to-speech engines. This legacy architecture results in multi-second conversational latency (~1,200ms–2,500ms) and locks enterprises into high five-figure annual software seat contracts ($35k–$100k+). Cloud telephony providers (Exotel, Ameyo) provide raw virtual numbers and IVR lines, but lack conversational LLM intelligence. <strong>DestiX AI was engineered from the foundation as a native streaming speech-to-speech voice core, achieving an audited 435ms P50 latency, colloquial Hinglish/Arabic code-switching, 100% client code ownership, and transparent wholesale carrier pass-through pricing (~₹4.50–₹7.50/min) with zero seat taxes.</strong>
            </p>
          </div>

          {/* Section 1: Architectural Comparison Table */}
          <section className="mb-14">
            <h2 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-6">
              1. Full-Stack Architectural Comparison
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-[#E2DDD1] bg-white shadow-sm mb-6">
              <table className="w-full text-left text-xs font-['JetBrains_Mono']">
                <thead className="bg-[#FAF8F5] border-b border-[#E2DDD1] text-[#888277]">
                  <tr>
                    <th className="p-4">Dimension</th>
                    <th className="p-4">DestiX AI</th>
                    <th className="p-4">Yellow.ai (Nexus VOX)</th>
                    <th className="p-4">Jio Haptik</th>
                    <th className="p-4">Exotel / Ameyo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DDD1] text-[#181614]">
                  <tr className="bg-[#B88746]/5 font-semibold">
                    <td className="p-4 text-[#B88746]">Core Architectural Focus</td>
                    <td className="p-4">Native Speech-to-Speech Streaming</td>
                    <td className="p-4 font-normal">Omnichannel Enterprise Chatbot</td>
                    <td className="p-4 font-normal">Customer Support Bot Platform</td>
                    <td className="p-4 font-normal">Cloud Telephony &amp; Contact Center</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Turnaround Latency (P50)</td>
                    <td className="p-4 text-emerald-600 font-bold">435ms (Audited)</td>
                    <td className="p-4">~1,200ms–2,200ms</td>
                    <td className="p-4">~1,400ms–2,500ms</td>
                    <td className="p-4">N/A (Traditional IVR)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Pricing Structure</td>
                    <td className="p-4 font-bold text-[#B88746]">Setup Sprint + Wholesale Pass-Through</td>
                    <td className="p-4">$35k–$100k+ Annual SaaS Seat License</td>
                    <td className="p-4">Enterprise Retainer Contract</td>
                    <td className="p-4">Monthly Cloud Telephony Retainer</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Language Nuance</td>
                    <td className="p-4">Colloquial Hinglish, Tanglish, Arabic</td>
                    <td className="p-4">Formal Hindi / English STT</td>
                    <td className="p-4">Formal Hindi / English STT</td>
                    <td className="p-4">Carrier Audio Routing Only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">IP &amp; Code Sovereignty</td>
                    <td className="p-4 text-emerald-600 font-bold">100% Client Code Ownership</td>
                    <td className="p-4">Proprietary Multi-Tenant SaaS</td>
                    <td className="p-4">Proprietary Cloud Lock-In</td>
                    <td className="p-4">Proprietary Telephony Platform</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Speed-to-Lead Webhooks</td>
                    <td className="p-4 font-bold text-emerald-600">&lt;45s Webhook Trigger</td>
                    <td className="p-4">Custom Integration Req.</td>
                    <td className="p-4">Custom Integration Req.</td>
                    <td className="p-4">Manual Campaign Upload</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Why Conversational Latency Explodes on Legacy Chatbots */}
          <section className="mb-14">
            <h2 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-6">
              2. The Latency Bottleneck: Why Legacy Chatbot Voice Lags
            </h2>
            <p className="text-sm text-[#55514B] leading-relaxed mb-4">
              When an enterprise installs a voice layer from a legacy chatbot provider, audio follows an inefficient multi-hop path:
            </p>
            <ol className="space-y-3 text-xs font-['Plus_Jakarta_Sans'] text-[#55514B] list-decimal pl-5 mb-6">
              <li><strong>Carrier Audio Ingestion:</strong> Telco packet arrives via SIP trunk.</li>
              <li><strong>Batched Audio Buffer:</strong> The system waits for speech to pause before sending a complete audio chunk to the STT model (300ms–500ms delay).</li>
              <li><strong>Full Sentence Transcription:</strong> The text is rendered as a complete sentence before passing to the reasoning engine.</li>
              <li><strong>Chatbot Business Logic Execution:</strong> The chatbot evaluates complex multi-turn decision trees designed for text messaging (400ms–800ms delay).</li>
              <li><strong>Complete TTS Synthesis:</strong> The text response is generated and synthesized as a complete audio buffer before playback begins.</li>
            </ol>
            <div className="p-5 rounded-2xl bg-white border border-[#B88746]/40 text-xs">
              <strong className="text-[#B88746] block mb-1 font-['JetBrains_Mono'] uppercase tracking-wider">
                DestiX AI Native Streaming Pipeline (435ms P50):
              </strong>
              <p className="text-[#181614] leading-relaxed">
                DestiX AI bypasses batched serialization entirely. Call audio streams over WebSockets directly to Deepgram Nova-3 (110ms partial token streaming) &rarr; tokens stream instantaneously to Groq Llama 3.3 70B / Claude 3.5 Sonnet (95ms TTFT) &rarr; the first generated tokens are streamed in chunks to Cartesia Sonic (90ms audio return) &rarr; outbound carrier packet transit (20ms). Total roundtrip: <strong>435 milliseconds</strong>.
              </p>
            </div>
          </section>

          {/* Section 3: Commercial Unit Economics */}
          <section className="mb-14">
            <h2 className="font-['Instrument_Serif'] text-3xl text-[#181614] mb-6">
              3. Commercial Unit Economics: SaaS Seat Taxes vs. Wholesale Pass-Through
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E2DDD1]">
                <h3 className="font-bold text-base mb-2 text-rose-600">Enterprise SaaS Platform Model</h3>
                <ul className="space-y-2 text-xs text-[#55514B] leading-relaxed">
                  <li>• $35,000–$100,000 annual platform fee upfront</li>
                  <li>• Per-agent monthly seat licenses ($150–$350/agent)</li>
                  <li>• Marked-up telephony minutes (₹12–₹25/min in India)</li>
                  <li>• Custom professional service integration retainers</li>
                  <li>• Data locked inside proprietary vendor cloud</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#B88746]/40">
                <h3 className="font-bold text-base mb-2 text-[#B88746]">DestiX AI Sovereign Wholesale Model</h3>
                <ul className="space-y-2 text-xs text-[#55514B] leading-relaxed">
                  <li>• Transparent one-time sprint engineering setup fee</li>
                  <li>• Zero recurring software platform or seat taxes</li>
                  <li>• <strong>Wholesale carrier pass-through (~₹4.50–₹7.50/min India; $0.02–$0.06/min US/UK)</strong></li>
                  <li>• 100% client code and n8n orchestration ownership</li>
                  <li>• Contractual 5x Hurdle Rate ROI guarantee</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: CTA Box */}
          <section className="p-8 rounded-3xl bg-[#181614] text-[#F6EFE2] text-center mb-16">
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-5xl text-[#F6EFE2] mb-4">
              Ready to Upgrade to Sub-435ms Voice Telephony?
            </h2>
            <p className="text-sm text-[#C5BDB1] max-w-xl mx-auto mb-8 leading-relaxed font-normal">
              Book a 30-minute diagnostic session with Principal AI Systems Architect Ayush Meena. We&apos;ll audit your existing call flow and show you how to cut automation costs by 70%.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#B88746] hover:bg-[#C5A059] text-[#131210] font-bold text-sm transition-all"
              >
                <span>Book Diagnostic Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research/2026-enterprise-ai-telephony-benchmark"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-xs font-['JetBrains_Mono'] text-[#F6EFE2] transition-colors"
              >
                <span>View 524k Call Benchmark</span>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <FinalDeploymentFooter />
    </div>
  );
}
