export interface LeadSummary {
  property_type?: string;
  preferred_locations?: string | string[];
  budget?: string;
  buying_timeline?: string;
  purchase_intent?: string;
  bedrooms?: string | number;
  financing_preference?: string;
  other_requirements?: string;
  preferred_next_step?: string;
  notes?: string;
  lead_category?: "HOT" | "WARM" | "NURTURE" | string;
  lead_category_rationale?: string;
  contact_name?: string;
  contact_phone?: string;
  whatsapp_shortlist_requested?: string | boolean;
  requested_appointment_details?: string;
  booking_status?: string;
  missing_fields?: string;
  [key: string]: unknown;
}

export type VoiceLanguage = "auto" | "en" | "ar" | "hi";

export type DograhVoiceStatus =
  | "uninitialized"
  | "idle"
  | "connecting"
  | "connected"
  | "ending"
  | "ended"
  | "failed";

export interface DograhDisconnectEvent {
  agentId?: number | null;
  token?: string | null;
  workflowRunId?: number | null;
  durationSeconds?: number;
}

export interface DograhWidgetAPI {
  init?: () => Promise<void>;
  start?: (...args: unknown[]) => Promise<void>;
  stop?: (...args: unknown[]) => void;
  end?: (...args: unknown[]) => void;
  retry?: () => Promise<void>;
  getState?: () => Record<string, unknown>;
  onReady?: (cb: () => void) => void;
  onCallStart?: (cb: () => void) => void;
  onCallConnected?: (cb: () => void) => void;
  onCallDisconnected?: (cb: (data: DograhDisconnectEvent) => void) => void;
  onCallEnd?: (cb: () => void) => void;
  onError?: (cb: (error: Error | { message?: string }) => void) => void;
  onStatusChange?: (cb: (status: string, title?: string, subtext?: string) => void) => void;
}

declare global {
  interface Window {
    DograhWidget?: DograhWidgetAPI;
  }
}
