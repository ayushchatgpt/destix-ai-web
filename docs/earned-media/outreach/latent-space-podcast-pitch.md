# Pitch 4: Latent Space Podcast & High-Signal Developer Channels

**To:** `swyx@latent.space`, `alessio@latent.space` (or via X DM @swyx / @alessiotti)  
**Subject:** Episode Pitch: Why Voice AI Breaks at 800ms and How to Shave 365ms off Turn-Taking (524k Call Benchmark)

```text
Hi Swyx & Alessio,

Loved the episodes on real-time multi-modal audio. Most teams claim sub-second latency, but when you benchmark real ear-to-mouth roundtrip audio across cellular SIP trunks, the reality is 1,400ms to 2,500ms.

We spent the last six months stress-testing 14 voice AI architectures across 524,000 synthetic calls over live PSTN/SIP carrier interconnects:
https://ayush.company/research/2026-enterprise-ai-telephony-benchmark
Open-source harness: https://github.com/ayushchatgpt/destix-voice-telephony-benchmark

What we learned the hard way:
1. Why WebRTC browser audio yields false confidence, and why SIP UDP buffers introduce 80ms of hidden jitter unless configured with jitter-buffer zeroing.
2. The exact breakdown of getting to 435ms P50: Silero VAD (80ms) + Deepgram Nova-3 interim token streaming (110ms) + Groq Llama-3.3 TTFT (120ms) + Cartesia Sonic first-chunk audio (90ms) + carrier buffer (35ms).
3. The acoustic interruption problem: Why software VAD causes unnatural bot cutoff unless paired with dual WebRTC Hardware AEC and sub-180ms cancellation loops.

I would love to do a deep-dive technical episode on engineering voice pipelines for real-world cellular conditions, including a live, unfiltered sub-450ms phone demo on air.

Best,

Ayush Meena
Principal AI Systems Architect, DestiX AI
Website: https://ayush.company
Direct Desk: ayushmeenadestixai@gmail.com
```
