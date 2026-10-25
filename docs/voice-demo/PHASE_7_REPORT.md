# DestiX AI — Phase 7 Verification Report
## Dynamic Lead Extraction & Structured Qualification Dossier

---

### Executive Summary

In Phase 7, the buyer qualification data extraction pipeline was verified end-to-end between Dograh's runtime database and the DestiX Next.js web application. The API endpoint `/api/lead-summary` dynamically accepts any session `runId` and retrieves the genuine structured context extracted during that specific conversation.

---

### 1. Dynamic Extraction Architecture vs. Test Fixtures

- **Route Implementation**: `/api/lead-summary/route.ts` is a secure Next.js server Route Handler. It dynamically accepts a query parameter:
  ```
  GET /api/lead-summary?runId={runId}
  ```
- **Session ID Propagation**: When a user begins a call via `useDograhVoice.ts`, Dograh assigns a unique `workflowRunId`. Upon call completion or disconnection, `useDograhVoice.ts` automatically queries `/api/lead-summary?runId=${workflowRunId}`.
- **Fixture vs. Live Run Audit**:
  - **Run 3**: During Phase 7 unit testing of the UI rendering component, Run 3's `gathered_context` was initially seeded with standard high-net-worth real estate criteria to verify component formatting and the clipboard copy feature.
  - **Run 5 (Authentic Live Extraction)**: Produced 100% dynamically by the Dograh voice agent workflow during a genuine 98-second user call conducted through the web browser.

---

### 2. Live Spoken Extraction Verification (Run 5 Audit)

A direct query to `http://localhost:3000/api/lead-summary?runId=5` returned the following genuine data extracted from human speech:

```json
{
  "runId": 5,
  "name": "Embed Run - 2026-10-23T06:55:04.470329+00:00",
  "isCompleted": true,
  "gatheredContext": {
    "property_type": "apartment",
    "preferred_locations": "Dubai",
    "budget": "2 crore INR",
    "buying_timeline": "immediate",
    "purchase_intent": "personal residence",
    "bedrooms": "unknown",
    "financing_preference": "unknown",
    "other_requirements": "first flat from own salary",
    "preferred_next_step": "broker callback",
    "call_status": "end_call",
    "call_disposition": "end_call",
    "nodes_visited": [
      "Welcome & Introduction",
      "Buyer Qualification",
      "Consultant Handoff"
    ]
  },
  "initialContext": {
    "source": "destix_web_dubai_demo",
    "page_url": "http://localhost:3000/locations/dubai/real-estate-ai-voice-agents",
    "workflow_run_id": 5
  },
  "usageInfo": {
    "call_duration_seconds": 98,
    "stt": {
      "DeepgramSTTService#2|||nova-3-general": 95.58
    },
    "llm": {
      "GroqLLMService#2|||qwen/qwen3.8-27b": {
        "prompt_tokens": 9132,
        "completion_tokens": 446,
        "total_tokens": 9578
      }
    }
  }
}
```

---

### 3. Verification of 9 Real Estate Qualification Fields

| Field Key | Real Estate Role | Run 5 Live Spoken Extraction | System Fallback Behavior |
| :--- | :--- | :--- | :--- |
| `property_type` | Asset category | `"apartment"` | `"Not specified"` |
| `preferred_locations` | Target geography | `"Dubai"` | `"Not specified"` |
| `budget` | Purchasing budget | `"2 crore INR"` | `"Not specified"` |
| `buying_timeline` | Acquisition timeframe | `"immediate"` | `"Not specified"` |
| `purchase_intent` | End-use intent | `"personal residence"` | `"Not specified"` |
| `bedrooms` | Unit size / bedrooms | `"unknown"` | Fallback rendered cleanly |
| `financing_preference` | Capital source / mortgage | `"unknown"` | Fallback rendered cleanly |
| `other_requirements` | Bespoke requirements | `"first flat from own salary"` | `"None noted"` |
| `preferred_next_step` | Consultant handoff | `"broker callback"` | `"Not specified"` |

---

### 4. Security & Compliance Verification

- **Server-Side Key Isolation**: `DOGRAH_SERVER_API_KEY` is loaded strictly on the Node.js runtime and is never exposed in the browser bundle or client requests.
- **Dynamic Parameterization**: Tested across multiple run IDs (`runId=3`, `runId=4`, `runId=5`). Each session returns its own discrete gathered context.
- **Zero Fabrication**: Fields not stated by the user are marked as `"unknown"` or `"Not specified"`. No fake appointments or calendar invites are claimed.
- **Clipboard Dossier Integration**: The "Copy Lead Dossier" button formats all 9 fields into a clean text block for immediate copy into broker CRMs (Salesforce, HubSpot, or WhatsApp).
