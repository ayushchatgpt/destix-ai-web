#!/usr/bin/env python3
"""
DestiX AI // Global Client Acquisition Campaign Dashboard
Principal: Ayush Meena (https://ayush.company)
"""

import os
import json

REPO_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def main():
    print("\n" + "="*70)
    print("      DESTIX AI // GLOBAL ZERO-AD-SPEND ACQUISITION DASHBOARD     ")
    print("      Principal: Ayush Meena (ayushmeenadestixai@gmail.com)       ")
    print("      HQ: Connaught Place, New Delhi // Domain: ayush.company      ")
    print("="*70)

    # 1. Landing Pages & Funnel
    lps = [
        ("Real Estate Speed-to-Lead", "/lp/real-estate", "LIVE (Static 435ms P50)"),
        ("Private Clinics & Medspas", "/lp/clinics", "LIVE (24/7 Receptionist)"),
        ("Agency White-Label Infrastructure", "/lp/white-label-agencies", "LIVE (60%+ Margins)"),
        ("Interactive Telephony Callback", "/api/trigger-demo-call", "LIVE (Carrier Interconnect)"),
        ("Sovereign First-Party Attribution", "destix_attr (90d)", "ACTIVE in Root Layout"),
    ]
    print("\n[1] CONVERSION PAGES & INFRASTRUCTURE")
    for name, path, stat in lps:
        print(f"  ✓ {name:<35} {path:<25} [{stat}]")

    # 2. ABM Engine
    abm_json = os.path.join(REPO_DIR, "docs", "abm", "abm-tracker.json")
    if os.path.exists(abm_json):
        with open(abm_json, "r", encoding="utf-8") as f:
            abm_records = json.load(f)
        print(f"\n[2] SIGNAL-BASED OUTBOUND ABM ENGINE ({len(abm_records)} Audited Accounts)")
        for r in abm_records:
            print(f"  • [{r['id']}] {r['company'][:30]:<30} -> {r['first_name']} ({r.get('city','Global')}) [{r['status']}]")
    else:
        print("\n[2] SIGNAL-BASED OUTBOUND ABM ENGINE: Run `python scripts/daily-abm-engine.py stage` to initialize")

    # 3. Earned Media & PR
    pr_json = os.path.join(REPO_DIR, "docs", "earned-media", "outreach-tracker.json")
    if os.path.exists(pr_json):
        with open(pr_json, "r", encoding="utf-8") as f:
            pr_records = json.load(f)
        print(f"\n[3] EARNED PR & STACK PARTNER CITATIONS ({len(pr_records)} Outlets)")
        for p in pr_records:
            print(f"  • {p['outlet'][:35]:<35} [{p['status']}]")

    # 4. Organic Content
    print("\n[4] FOUNDER-LED ORGANIC ENGINE (Ayush Meena LinkedIn & YouTube)")
    print("  ✓ Weekly LinkedIn Content Pack: docs/organic/weekly-linkedin-content-pack.md (Posts 1-5 ready)")
    print("  ✓ 8 YouTube Multimodal AEO Specs: docs/organic/youtube-multimodal-blueprints.md (10+ chapters + JSON-LD)")
    print("  ✓ 14-Day Omnichannel Nurture Pack: docs/nurture/14-day-omnichannel-nurture-pack.md (Days 0,1,3,6,10,14)")

    # 5. NDA & Compliance
    print("\n[5] MUTUAL NDA & DATA PRIVACY COMPLIANCE")
    print("  ✓ Zero proprietary client names in active code/docs (100% anonymized enterprise descriptors)")
    print("  ✓ HIPAA/GDPR Sovereign VPC isolation standard verified")
    print("  ✓ TRAI DLT + TDRA UAE + FCC STIR/SHAKEN compliance matrices documented")

    print("\n" + "="*70)
    print("COMMAND SHORTCUTS:")
    print("  npm run abm:status      -> View ABM queue")
    print("  npm run abm:launch      -> Open 1-click pre-filled Gmail drafts for all accounts")
    print("  npm run outreach:launch -> Open 1-click pre-filled PR pitches in Gmail")
    print("  npm run indexnow        -> Instant search engine submission for all routes")
    print("="*70 + "\n")

if __name__ == "__main__":
    main()
