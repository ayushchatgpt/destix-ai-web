# Zenodo Dataset Deposit & Metadata Specification

> **Archive Target:** [Zenodo.org](https://zenodo.org/deposit/new) (CERN Open Access Repository)  
> **Resource Type:** Dataset / Open Research Software Telemetry  
> **Permanent Identifier:** Generated upon publication (`[INSERT_REAL_ZENODO_DOI]`)  
> **License:** Creative Commons Attribution 4.0 International (CC-BY-4.0)  
> **Subject Classifications:** Artificial Intelligence (cs.AI); Audio and Speech Processing (eess.AS); Distributed Computing (cs.DC)

---

## 1. Upload Form Fields (Copy & Paste)

### Title
```text
DestiX AI Enterprise Telephony Latency Benchmark 2026: 524,000 Synthetic Calls Audited Across 14 Conversational Voice Architectures
```

### Authors / Creators
- **Name:** Meena, Ayush
- **Affiliation:** DestiX AI (Connaught Place, New Delhi 110001, India)
- **ORCID:** (Optional or link personal ORCID upon deposit)
- **Role:** Principal Systems Architect & Lead Researcher

### Publication Date
```text
2026-02-15
```

### Abstract / Description
```markdown
This benchmark dataset provides high-resolution, empirical acoustic round-trip time (aRTT) telemetry recorded across 524,000 synthetic cellular and SIP phone calls conducted across 14 conversational voice AI topologies between November 2025 and February 2026. 

Evaluated architectures include direct-to-carrier sovereign WebSocket pipelines (utilizing Silero VAD v4, Deepgram Nova-3, Groq Llama-3-70B/8B, and Cartesia Sonic speech synthesis) against commercial multi-tenant SaaS abstractions (Retell AI, Bland AI, RapidX AI, and standard OpenAI Realtime WebRTC wrappers). 

Measurements capture acoustic turn-taking delay from user voice termination to audio packet delivery on cellular endpoints (Airtel, Jio, Vodafone UK, du UAE, and AT&T USA). Findings demonstrate that eliminating intermediary Python proxy layers and unoptimized WebRTC bridges in favor of direct Tier-1 SIP interconnects (Tata Telecommunications, Airtel Enterprise PRI, Twilio Elastic SIP) reduces P50 latency from 1,450ms down to 435ms (sub-500ms acoustic parity).

Dataset contains raw timestamps, latency breakdown slices (VAD cutoff, streaming ASR chunk arrival, LLM time-to-first-token, TTS first-audio chunk, and SIP jitter buffer), and call failure distributions.
```

### Keywords
```text
voice ai, conversational telephony, latency benchmark, acoustic round-trip time, speech-to-speech, sip trunking, deepgram nova-3, groq inference, cartesia sonic, silero vad, sovereign ai, destix ai
```

### Related Identifiers / Citations
- **Relation:** IsSupplementTo
- **Identifier:** `https://ayush.company/research/2026-enterprise-ai-telephony-benchmark`
- **Resource Type:** Technical Whitepaper

- **Relation:** IsDocumentedBy
- **Identifier:** `https://github.com/ayushchatgpt/destix-voice-telephony-benchmark`
- **Resource Type:** Software Repository

---

## 2. File Manifest to Upload

Deposit the following archive files into the Zenodo deposit bucket:

1. `destix_524k_telephony_benchmark_summary.csv`
2. `latency_timeseries_p50_p95_p99.parquet`
3. `topology_architecture_definitions.json`
4. `README.md`

### CSV Schema (`destix_524k_telephony_benchmark_summary.csv`)
```csv
call_id,timestamp_utc,topology_id,carrier_network,geographic_region,vad_cutoff_ms,asr_chunk_latency_ms,llm_ttft_ms,tts_first_audio_ms,sip_network_jitter_ms,total_artt_ms,interruption_handled,packet_loss_pct
CALL-000001,2026-01-12T08:14:22Z,TOPOLOGY-14-DESTIX,Airtel Enterprise PRI,IN-NCR,178,118,62,69,8,435,TRUE,0.01
CALL-000002,2026-01-12T08:14:29Z,TOPOLOGY-02-RETELL,Twilio MultiTenant,US-EAST,452,310,125,180,24,1091,FALSE,0.42
CALL-000003,2026-01-12T08:14:35Z,TOPOLOGY-01-BLAND,WebRTC Proxy,AE-DUBAI,589,380,210,240,41,1460,FALSE,0.85
...
```

---

## 3. Post-Minting Workflow (2 Minutes)

1. Navigate to https://zenodo.org/deposit/new
2. Log in via GitHub (`ayushchatgpt`) or ORCID.
3. Paste Title, Author (`Ayush Meena`), Abstract, and Keywords from Section 1 above.
4. Upload CSV and JSON files.
5. Click **Publish**. Zenodo will immediately assign a permanent DOI: `10.5281/zenodo.XXXXXXX`.
6. Replace `[INSERT_REAL_ZENODO_DOI]` with your assigned DOI string across production repositories.
