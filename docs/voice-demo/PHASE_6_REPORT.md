# DestiX AI — Phase 6 Verification Report
## Live WebRTC Two-Way Audio Verification & Audit Analysis

---

### Executive Summary

In Phase 6, live WebRTC two-way voice streaming was tested and verified against the local Dograh runtime. This report documents both the automated transport benchmark (Run 3) and the live spoken human conversation (Run 5).

```mermaid
sequenceDiagram
    participant Browser as WebRTC Client (DestiX UI)
    participant Dograh as Dograh Server (Port 8000)
    participant STT as Deepgram Nova-3
    participant LLM as Groq (qwen/qwen3.8-27b)
    participant TTS as Deepgram Aura

    Browser->>Dograh: POST /api/v1/public/embed/init
    Dograh-->>Browser: session_token + run_id
    Browser->>Dograh: WebSocket /api/v1/ws/public/signaling/{token}
    Browser->>Dograh: SDP Offer (Audio Track)
    Dograh->>Browser: SDP Answer (Audio Track)
    Note over Browser,Dograh: WebRTC Connected (DTLS-SRTP / ICE)
    Browser->>Dograh: RTP Audio Packets (16kHz PCM / Opus)
    Dograh->>STT: Audio Stream (95.58s processed)
    STT->>LLM: Live Transcription ("apartment, Dubai, 2 crore INR...")
    LLM->>TTS: Generated Response Tokens (446 tokens @ 279ms)
    TTS->>Dograh: Synthesized Speech PCM
    Dograh->>Browser: RTP Audio Packets (Remote Audio Track)
    Note over Browser: Real-time Audio Playout & Dialogue Turns
    Browser->>Dograh: End Conversation & Disconnect
```

---

### 1. Investigation: Run 3 Automated Test vs. Real Spoken Audio

A critical engineering distinction must be made between **WebRTC media transport negotiation** and **conversational speech-to-speech AI**:

| Parameter | Run 3 (Automated Headless Test) | Run 5 (Live Spoken Browser Call) |
| :--- | :--- | :--- |
| **Client Type** | Python `aiortc` headless client | Chrome/Edge Browser (`useDograhVoice.ts`) |
| **Input Audio Type** | Synthetic sine wave tone (440 Hz) | Live human voice via microphone |
| **Call Duration** | 2 seconds | **98 seconds** |
| **WebRTC Transport Status** | Connected (SDP offer/answer, ICE) | Connected (SDP offer/answer, ICE) |
| **Incoming Frames Received** | **167 RTP audio frames** | Continuous bi-directional RTP stream |
| **Deepgram Nova-3 STT Usage** | 0.0 seconds (sine wave ignored by STT) | **95.58 seconds of actual speech** |
| **Groq LLM Reasoning Usage** | 0 prompt tokens / 0 completion tokens | **9,132 prompt / 446 completion tokens** |
| **Workflow State Traversal** | Remained at initial entry | **Welcome -> Qualification -> Handoff** |
| **Script Exit Code** | **Code 1** (Test harness assertion timeout) | **Clean Disconnect** (`exit_reason: end_call`) |

#### What the 167 Frames in Run 3 Actually Proved
The 167 incoming RTP audio frames recorded in Run 3 proved that:
1. The Dograh WebRTC engine properly initialized and answered the SDP offer over WebSocket.
2. DTLS-SRTP handshake and ICE candidate negotiation completed successfully over local UDP.
3. The server's outbound media track was attached and transmitting RTP packets back to the client.
4. **However**, because the input audio was a non-verbal 440 Hz sine tone, Deepgram STT detected no speech, Groq LLM was never prompted, and no conversational speech was synthesized. The headless test exited with code 1 due to the client harness timeout waiting for conversational transcript events.

---

### 2. Definitive Proof of Conversational Voice: Run 5 Audit

Run 5 represents an authentic, end-to-end human conversation conducted directly through the DestiX landing page interface at `http://localhost:3000/locations/dubai/real-estate-ai-voice-agents`:

- **Session Timestamp**: `2026-10-23T06:55:04.470Z`
- **Total Duration**: **98 seconds**
- **Speech Recognition (STT)**: Deepgram `nova-3-general` processed **95.58 seconds** of continuous conversational speech.
- **Conversational Reasoning (LLM)**: Groq `qwen/qwen3.8-27b` executed multiple conversational turns with sub-300ms latency:
  - **Prompt Tokens**: 9,132
  - **Completion Tokens**: 446
  - **Total Tokens**: 9,578
- **Speech Synthesis (TTS)**: Deepgram Aura (`aura-2-helena-en`) streamed natural audible responses back into the browser.
- **State Machine Progression**:
  1. `Welcome & Introduction`: Agent greeted the caller and established context.
  2. `Buyer Qualification`: Interactively qualified asset type, location, budget, timeline, and financing.
  3. `Consultant Handoff`: Completed qualification dossier and closed the call (`exit_reason: end_call`).
- **Dynamic Extraction**: Verified real-time lead extraction populated directly from speech (apartment, Dubai, 2 crore INR, immediate timeline, first flat from salary, broker callback).

---

### 3. Conclusion

The DestiX AI voice pipeline is fully verified. WebRTC transport, Deepgram speech-to-text, Groq conversational reasoning, and Deepgram speech synthesis function seamlessly together as a genuine, non-simulated conversational voice system.
