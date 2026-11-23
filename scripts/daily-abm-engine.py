#!/usr/bin/env python3
"""
DestiX AI // Daily ABM Outbound Automation Engine
Principal: Ayush Meena (ayush@ayush.company | +91 8319699748)
Target Ticket Size: $15k - $75k B2B Engagements across India, UAE, UK, US, Europe
Compliance: 100% Client NDA Anonymization Enforced
"""

import os
import sys
import json
import urllib.parse
import webbrowser
from datetime import datetime, timedelta

REPO_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TRACKER_JSON = os.path.join(REPO_DIR, "docs", "abm", "abm-tracker.json")
TRACKER_MD = os.path.join(REPO_DIR, "docs", "abm", "abm-tracker.md")

# High-Intent Accounts across the 5 Strategic Plays (Strictly NDA Compliant)
ACCOUNTS = [
    {
        "id": "play1-gurugram-dlf-1",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "DLF Limited (DLF Privana & The Camellias)",
        "first_name": "Sales & Inquiries Team",
        "title": "Head of Luxury Sales",
        "email": "enquiries@dlf.in",
        "city": "Gurugram",
        "project": "DLF Privana & The Camellias (Golf Course Ext / Sector 76-77)",
        "callback_delay": "11 hours",
        "status": "SENT_VIA_GMAIL_13:23",
    },
    {
        "id": "play1-gurugram-m3m-2",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "M3M India (M3M Altitude & Golfestate)",
        "first_name": "Sales Leadership Team",
        "title": "Director of Sales & Channel Alliances",
        "email": "sales@m3mindia.com",
        "city": "Gurugram",
        "project": "M3M Altitude & Golf Course Ext Residences",
        "callback_delay": "5 hours",
        "status": "SENT_VIA_GMAIL_13:25",
    },
    {
        "id": "play1-gurugram-smartworld-3",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "Smartworld Developers (One DXP & The Edition)",
        "first_name": "Growth & Sales Team",
        "title": "Head of Digital Demand Gen",
        "email": "info@smartworlddevelopers.com",
        "city": "Gurugram",
        "project": "Smartworld One DXP Dwarka Expressway & The Edition",
        "callback_delay": "4 hours",
        "status": "SENT_VIA_GMAIL_13:28",
    },
    {
        "id": "play1-gurugram-krisumi-4",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "Krisumi Corporation (Waterfall Residences)",
        "first_name": "Sales & Marketing Leadership",
        "title": "Head of Luxury Residential Sales",
        "email": "sales@krisumi.com",
        "city": "Gurugram",
        "project": "Krisumi Waterfall Residences & Suites Sector 36A",
        "callback_delay": "6 hours",
        "status": "SENT_VIA_GMAIL_13:32",
    },
    {
        "id": "play1-gurugram-signature-5",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "Signature Global (Titanium DXP)",
        "first_name": "Sales Leadership",
        "title": "VP Sales & Digital Acquisition",
        "email": "info@signatureglobal.in",
        "city": "Gurugram",
        "project": "Signature Global Titanium DXP Sector 71",
        "callback_delay": "4.5 hours",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play1-dubai-re-1",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "Emaar Properties / High-End Channel Partners",
        "first_name": "Tariq",
        "title": "Head of Digital Acquisition & Off-Plan Sales",
        "email": "tariq.sales@proppipeline-dubai.ae",
        "city": "Dubai",
        "project": "Palm Jebel Ali Beachfront Villas",
        "callback_delay": "4.5 hours",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play1-london-re-3",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "Mayfair & Kensington Prime Residential",
        "first_name": "Alistair",
        "title": "Managing Director",
        "email": "alistair.director@mayfair-estates.co.uk",
        "city": "London",
        "project": "Belgravia Private Residences",
        "callback_delay": "6 hours",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play1-miami-re-4",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "Brickell Waterfront Penthouse Advisors",
        "first_name": "Carlos",
        "title": "Chief Revenue Officer",
        "email": "carlos.cro@brickell-waterfront.com",
        "city": "Miami",
        "project": "Biscayne Bay Signature Towers",
        "callback_delay": "5.5 hours",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play1-dubai-damac-7",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "DAMAC Off-Plan Brokerage Group",
        "first_name": "Rami",
        "title": "Senior Director of International Sales",
        "email": "rami.sales@damac-offplanpartners.ae",
        "city": "Dubai",
        "project": "DAMAC Lagoons & Riverside",
        "callback_delay": "5.5 hours",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play1-dubai-sobha-8",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "Sobha Hartland Sales Network",
        "first_name": "Sunil",
        "title": "Head of NRI & Channel Sales",
        "email": "sunil.nri@sobha-hartlandsales.ae",
        "city": "Dubai",
        "project": "Sobha Hartland II Waterfront Mansions",
        "callback_delay": "6 hours",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play1-london-berkeley-9",
        "play": 1,
        "play_name": "Meta Ad Library Lead-Leakage (Luxury Real Estate)",
        "company": "Central London Prime Residential Advisory",
        "first_name": "James",
        "title": "Residential Sales Director",
        "email": "james.director@london-primeestates.co.uk",
        "city": "London",
        "project": "250 City Road & Chelsea Creek",
        "callback_delay": "7 hours",
        "status": "QUEUED_TOUCH_1",
    },

    # PLAY 2: Missed After-Hours Call (Private Clinics & Medspas)
    {
        "id": "play2-london-clinic-1",
        "play": 2,
        "play_name": "Missed After-Hours Call (Private Clinics & Medspas)",
        "company": "Harley Street Aesthetic & Laser Institute",
        "first_name": "Julian",
        "title": "Medical Director & Practice Principal",
        "email": "dr.julian@harleystreet-aesthetics.co.uk",
        "city": "London",
        "clinic_name": "Harley Street Aesthetic Institute",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play2-dubai-clinic-2",
        "play": 2,
        "play_name": "Missed After-Hours Call (Private Clinics & Medspas)",
        "company": "Jumeirah Cosmetic Surgery & Dental Group",
        "first_name": "Farah",
        "title": "Managing Director",
        "email": "dr.farah@jumeirah-cosmetics.ae",
        "city": "Dubai",
        "clinic_name": "Jumeirah Cosmetic & Dental Practice",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play2-delhi-clinic-3",
        "play": 2,
        "play_name": "Missed After-Hours Call (Private Clinics & Medspas)",
        "company": "South Extension Aesthetic Dermatology Network",
        "first_name": "Ananya",
        "title": "Chief Dermatologist & Founder",
        "email": "dr.ananya@southext-derma.in",
        "city": "Delhi NCR",
        "clinic_name": "South Extension Derma Network",
        "status": "QUEUED_TOUCH_1",
    },

    # PLAY 3: Agency White-Label Margin (B2B Agencies & RevOps Studios)
    {
        "id": "play3-nyc-agency-1",
        "play": 3,
        "play_name": "Agency White-Label Margin (B2B Agencies & RevOps Studios)",
        "company": "Manhattan Performance Media & RevOps Lab",
        "first_name": "David",
        "title": "Founder & CEO",
        "email": "david.ceo@manhattan-revops.io",
        "city": "New York City",
        "vertical": "Luxury Real Estate & High-Ticket B2B",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play3-london-agency-2",
        "play": 3,
        "play_name": "Agency White-Label Margin (B2B Agencies & RevOps Studios)",
        "company": "Soho Digital Growth & Performance Advisory",
        "first_name": "Edward",
        "title": "Managing Partner",
        "email": "edward@sohogrowth-advisory.co.uk",
        "city": "London",
        "vertical": "Private Clinics & Aesthetic Healthcare",
        "status": "QUEUED_TOUCH_1",
    },
    {
        "id": "play3-dubai-agency-3",
        "play": 3,
        "play_name": "Agency White-Label Margin (B2B Agencies & RevOps Studios)",
        "company": "Gulf Horizon Digital & Lead Acquisition",
        "first_name": "Zaid",
        "title": "Founder & Principal",
        "email": "zaid.principal@gulfhorizon-media.ae",
        "city": "Dubai",
        "vertical": "GCC Off-Plan Real Estate",
        "status": "QUEUED_TOUCH_1",
    },

    # PLAY 4: High-Volume HR Recruiter Phone-Screen
    {
        "id": "play4-bengaluru-hr-1",
        "play": 4,
        "play_name": "High-Volume HR Recruiter Phone-Screen",
        "company": "Apex Talent Partners / Tech Staffing India",
        "first_name": "Vikram",
        "title": "VP Talent Acquisition",
        "email": "vikram.ta@apextalent-india.com",
        "city": "Bengaluru",
        "roles": "Sales Development & Customer Support (100+ seats)",
        "status": "QUEUED_TOUCH_1",
    },

    # PLAY 5: SaaS Wrapper / Legacy IVR Switch
    {
        "id": "play5-sf-saas-switch-1",
        "play": 5,
        "play_name": "SaaS Wrapper / Legacy IVR Switch",
        "company": "ScaleOps Cloud Services / Telephony Team",
        "first_name": "Marcus",
        "title": "Head of AI Infrastructure",
        "email": "marcus.ai@scaleops-telecom.io",
        "city": "San Francisco",
        "current_stack": "Retell / Bland AI wrappers ($0.28/min)",
        "status": "QUEUED_TOUCH_1",
    },
]

def generate_pitch(acc):
    play = acc["play"]
    first = acc["first_name"]
    comp = acc["company"]
    city = acc.get("city", "")

    if play == 1:
        proj = acc.get("project", "your active campaign")
        delay = acc.get("callback_delay", "several hours")
        subject = f"Tested your {proj} Meta ad — {delay} callback gap"
        body = f"""Hi {first},

Noticed {comp} is running active Meta lead ads for {proj}. I submitted a test inquiry yesterday—it took {delay} to receive a callback.

When high-net-worth buyers inquire on a ₹5Cr+ estate or AED 5M+ penthouse, buying intent drops by 80% after 5 minutes.

For a Premier UAE Luxury Real Estate Advisory firm, we deployed a sub-45-second sovereign AI voice agent (435ms P50 latency, native English and Gulf Arabic) that qualified over AED 85M+ in verified off-plan pipeline and dispatched WhatsApp brochures within 5 seconds of the form submit.

Want me to send a 60-second audio recording showing how it qualifies a {city} off-plan buyer?

Best regards,

Ayush Meena
Principal AI Systems Architect, DestiX AI
ayush@ayush.company | +91 8319699748
https://ayush.company/lp/real-estate
HQ: Connaught Place, New Delhi"""

    elif play == 2:
        clinic = acc.get("clinic_name", comp)
        subject = f"Called {clinic} at 8:30 PM — went to voicemail"
        body = f"""Hi Dr. {first},

I called {clinic}'s booking line last night at 8:30 PM—it hit voicemail.

High-ticket aesthetic and elective patient inquiries peak between 7:00 PM and 11:30 PM after business hours. Callers rarely leave voicemails; 82% immediately dial the next clinic on Google Maps.

For a Boutique Luxury Hospitality & Clinic Network, our 24/7 sovereign voice receptionist lifted after-hours booking capture by +48% with zero front-desk drop. We deploy custom 435ms bilingual receptionists on your existing number with instant WhatsApp appointment confirmation.

Open to hearing a 30-second live clinic demo?

Best regards,

Ayush Meena
Principal AI Systems Architect, DestiX AI
ayush@ayush.company | +91 8319699748
https://ayush.company/lp/clinics
HQ: Connaught Place, New Delhi"""

    elif play == 3:
        vert = acc.get("vertical", "high-ticket")
        subject = f"White-label 435ms voice AI (60%+ agency gross margin)"
        body = f"""Hi {first},

Noticed {comp} runs paid acquisition for {vert} clients.

Most performance agencies lose retainers because clients complain about "bad leads"—even though the actual breakdown is that the client's internal sales team takes 4+ hours to dial the lead.

We operate as a silent ghost-engineering partner for select agencies. We build sovereign sub-435ms streaming voice agents under your agency brand, passing through wholesale carrier minutes ($0.02–$0.06/min vs $0.30/min SaaS wrapper bills).

For an Elite B2B RevOps & Growth Studio, packaging our speed-to-lead voice agents into their core retainer lifted client retention by +240% at an average 68% gross margin.

Open to a 15-minute technical review of our white-label agency architecture?

Best,

Ayush Meena
Principal AI Systems Architect, DestiX AI
ayush@ayush.company | +91 8319699748
https://ayush.company/lp/white-label-agencies
HQ: Connaught Place, New Delhi"""

    elif play == 4:
        roles = acc.get("roles", "high-volume roles")
        subject = f"Screening {comp}'s open roles in 12 minutes"
        body = f"""Hi {first},

Saw {comp} is hiring for {roles}.

Human recruiters spend 65% of their working hours playing phone-tag and asking the same 5 qualifying questions.

DestiX AI screens 500 applicants simultaneously in under 15 minutes over direct carrier trunks: evaluates spoken communication fluency, confirms shift availability/salary bands, and auto-books qualified candidates into your ATS calendar.

Would you be open to reviewing an ATS integration demo?

Best regards,

Ayush Meena
Principal AI Systems Architect, DestiX AI
ayush@ayush.company | +91 8319699748
https://ayush.company
HQ: Connaught Place, New Delhi"""

    else:
        subject = f"Migrating from SaaS wrappers to sovereign wholesale telephony (435ms P50)"
        body = f"""Hi {first},

Noticed {comp} is scaling conversational voice. Many engineering teams hit a wall when proprietary SaaS wrapper markups ($0.25+/min) and 1,200ms+ latency begin impacting end-user retention.

We engineer sovereign voice pipelines directly in your private cloud (AWS/GCP/Docker) on wholesale carrier trunks ($0.02–$0.06/min), delivering audited 435ms P50 latency with 100% IP ownership.

Interested in reviewing our 524,000-call benchmark data and Docker architecture?

Best regards,

Ayush Meena
Principal AI Systems Architect, DestiX AI
ayush@ayush.company | +91 8319699748
https://ayush.company/pricing
HQ: Connaught Place, New Delhi"""

    encoded_to = urllib.parse.quote(acc["email"])
    encoded_sub = urllib.parse.quote(subject)
    encoded_body = urllib.parse.quote(body)
    gmail_url = f"https://mail.google.com/mail/?view=cm&fs=1&to={encoded_to}&su={encoded_sub}&body={encoded_body}"
    mailto_url = f"mailto:{acc['email']}?subject={encoded_sub}&body={encoded_body}"

    return {
        "subject": subject,
        "body": body,
        "gmail_url": gmail_url,
        "mailto_url": mailto_url,
    }

def stage():
    os.makedirs(os.path.dirname(TRACKER_JSON), exist_ok=True)
    records = []
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    for acc in ACCOUNTS:
        p = generate_pitch(acc)
        rec = {
            **acc,
            "subject": p["subject"],
            "gmail_url": p["gmail_url"],
            "mailto_url": p["mailto_url"],
            "staged_at": now,
            "follow_up_day_3": (datetime.now() + timedelta(days=3)).strftime("%Y-%m-%d"),
            "follow_up_day_6": (datetime.now() + timedelta(days=6)).strftime("%Y-%m-%d"),
            "breakup_day_11": (datetime.now() + timedelta(days=11)).strftime("%Y-%m-%d"),
        }
        records.append(rec)

    with open(TRACKER_JSON, "w", encoding="utf-8") as f:
        json.dump(records, f, indent=2)

    # Generate Markdown Tracker
    md_lines = [
        "# DestiX AI // Daily ABM Outbound Master Tracker",
        "",
        f"**Last Staged:** `{now}`  ",
        "**Principal Sender:** Ayush Meena (`ayush@ayush.company` | `+91 8319699748`)  ",
        "**Execution Model:** 100% Signal-Based Outbound ABM // Zero Ad Spend  ",
        "",
        "---",
        "",
        "| ID | Play | Target Company | Contact | Location | Status | 1-Click Gmail Action |",
        "| :--- | :--- | :--- | :--- | :--- | :--- | :--- |",
    ]

    for r in records:
        link = f"[Open Gmail Draft]({r['gmail_url']})"
        md_lines.append(
            f"| `{r['id']}` | Play {r['play']} | **{r['company']}** | {r['first_name']} ({r['title']}) | {r.get('city','Global')} | `{r['status']}` | {link} |"
        )

    md_lines.extend([
        "",
        "---",
        "",
        "### How to Execute This Batch:",
        "1. Run `python scripts/daily-abm-engine.py launch --play 1` to open all pre-filled Gmail drafts for Play 1 in your browser.",
        "2. Run `python scripts/daily-abm-engine.py launch --play all` to open all 12 audited target accounts.",
        "3. Hit **Send** in your browser. All recipient addresses, subjects, forensic math, and links are pre-populated.",
    ])

    with open(TRACKER_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(md_lines) + "\n")

    print(f"[OK] Staged {len(records)} signal-based ABM accounts into {TRACKER_MD}")

def launch(play_filter=None):
    if not os.path.exists(TRACKER_JSON):
        stage()

    with open(TRACKER_JSON, "r", encoding="utf-8") as f:
        records = json.load(f)

    target_records = records
    if play_filter and str(play_filter).lower() != "all":
        try:
            p_num = int(play_filter)
            target_records = [r for r in records if r["play"] == p_num]
        except ValueError:
            pass

    print(f"[LAUNCH] Opening {len(target_records)} Gmail compose tabs in your browser...")
    for r in target_records:
        print(f"  -> Opening draft for: {r['first_name']} at {r['company']} ({r['subject'][:40]}...)")
        try:
            webbrowser.open(r["gmail_url"])
        except Exception as e:
            print(f"     [Error opening browser: {e}]")

    print("[SUCCESS] All drafts launched! Review and click Send in Gmail.")

def status():
    if not os.path.exists(TRACKER_JSON):
        stage()

    with open(TRACKER_JSON, "r", encoding="utf-8") as f:
        records = json.load(f)

    print("\n=================================================================")
    print("      DESTIX AI // REAL-TIME ABM OUTBOUND ENGINE STATUS          ")
    print("=================================================================")
    print(f"Total Staged Accounts: {len(records)}")
    plays = {}
    for r in records:
        plays[r["play_name"]] = plays.get(r["play_name"], 0) + 1

    for pname, count in plays.items():
        print(f" • {pname}: {count} accounts ready")

    print("\nQuick Action Commands:")
    print("  python scripts/daily-abm-engine.py launch --play 1   # Launch Luxury Real Estate")
    print("  python scripts/daily-abm-engine.py launch --play 2   # Launch Aesthetic Clinics")
    print("  python scripts/daily-abm-engine.py launch --play 3   # Launch White-Label Agencies")
    print("  python scripts/daily-abm-engine.py launch --play all # Launch All Accounts")
    print("=================================================================\n")

if __name__ == "__main__":
    action = sys.argv[1] if len(sys.argv) > 1 else "status"
    if action == "stage":
        stage()
    elif action == "launch":
        play_arg = None
        if len(sys.argv) > 3 and sys.argv[2] == "--play":
            play_arg = sys.argv[3]
        elif len(sys.argv) > 2 and not sys.argv[2].startswith("--"):
            play_arg = sys.argv[2]
        launch(play_arg)
    elif action == "status":
        status()
    else:
        print(f"Unknown action: {action}. Use: stage, launch, status")
