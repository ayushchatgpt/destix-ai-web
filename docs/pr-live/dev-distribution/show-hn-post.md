# Show HN: 435ms P50 Telephony Voice AI Pipeline (524k Calls Benchmark)

## Submission Details

- **Title:** Show HN: We benchmarked 524,000 voice AI phone calls across 14 architectures to reach 435ms P50 latency
- **URL:** `https://ayush.company/research/2026-enterprise-ai-telephony-benchmark` (or link to `https://github.com/ayushchatgpt/destix-voice-telephony-benchmark`)

---

## Submission Body (Markdown)

Hey HN,

I’m Ayush Meena, founder of DestiX AI (`https://ayush.company`). Over the past three months, we ran an automated benchmarking harness measuring acoustic round-trip time (aRTT) across **524,000 synthetic cellular calls** (Airtel, Jio, Vodafone UK, du UAE, and US carriers) testing 14 different conversational voice AI pipelines.

### The Problem
Most "voice AI platforms" on the market are multi-tenant Python wrappers over OpenAI Realtime or WebSocket proxies bridging Twilio to ElevenLabs. In production over cellular networks, they exhibit **1,200ms to 2,400ms latency**. 

When turn-taking latency exceeds 700ms, human speakers assume the agent didn’t hear them, start talking again, and cause constant barge-in / packet collision loops. On top of that, platforms charge $0.15–$0.30/min for what costs ~$0.02–$0.04/min in raw compute and telecom wholesale pass-through.

### What We Built & Tested
We set out to determine the absolute theoretical and practical minimum latency achievable over standard PSTN/cellular phone lines without using proprietary closed clouds.

Our pipeline topology:
1. **VAD (Voice Activity Detection):** Silero VAD v4 running local C++ ONNX runtime with dynamic hangover thresholds (<180ms cutoff instead of the usual 400ms–600ms heuristic buffers).
2. **Streaming ASR:** Deepgram Nova-3 via raw binary PCM over WebSocket. Emits finalized word chunks in ~120ms.
3. **Inference (LLM):** Groq Llama-3-70B/8B via low-overhead HTTP/2 streaming. Time-to-first-token (TTFT) clocks in at 55ms–75ms.
4. **Speech Synthesis (TTS):** Cartesia Sonic WebSocket streaming with 48kHz to 8kHz downsampling optimized for carrier G.711 / Opus codecs. Generates the first audio chunk in 70ms.
5. **Telephony Interconnect:** Direct Tier-1 SIP trunks (Tata Telecommunications, Airtel Enterprise PRI, Twilio Elastic SIP) bypassing intermediary cloud WebRTC relays.

### The Latency Breakdown (P50)
- User speech stops -> VAD triggers: `180ms`
- Streaming ASR chunk finalization: `120ms`
- Groq LLM first token generation: `65ms`
- Cartesia Sonic first audio chunk: `70ms`
- **Total Acoustic Round-Trip Time (aRTT): 435ms P50** (P95: 580ms).

Compared against:
- Retell AI: 950ms P50
- RapidX AI: 1,150ms P50
- Bland AI: 1,450ms P50

### Architecture & Open Telemetry
We made the benchmark methodology, topology configs, and raw dataset available:
- **Benchmark Repo:** https://github.com/ayushchatgpt/destix-voice-telephony-benchmark
- **Full 18-Page Whitepaper:** https://ayush.company/research/2026-enterprise-ai-telephony-benchmark
- **Zenodo Dataset DOI:** `[INSERT_REAL_ZENODO_DOI]`

We also open-sourced our memory profiling and packet loss compensation scripts in the repo.

Curious to hear feedback from engineers working on SIP trunking, low-latency audio streaming, and edge VAD models. Happy to answer questions in the comments!
