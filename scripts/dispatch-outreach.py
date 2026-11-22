import os
import re
import sys
import json
import webbrowser
import urllib.parse
from datetime import datetime, timedelta

REPO_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTREACH_DIR = os.path.join(REPO_DIR, "docs", "earned-media", "outreach")
LOG_JSON_PATH = os.path.join(REPO_DIR, "docs", "earned-media", "outreach-tracker.json")
LOG_MD_PATH = os.path.join(REPO_DIR, "docs", "earned-media", "outreach-tracker.md")

PITCHES = [
    {
        "id": "aim",
        "name": "Analytics India Magazine (AIM) Data Exclusive",
        "file": "aim-india-exclusive-pitch.md",
        "to": "editorial@analyticsindiamag.com,write-for-aim@analyticsindiamag.com",
        "web_portal": "https://analyticsindiamag.com/write-for-aim/",
    },
    {
        "id": "zawya",
        "name": "Zawya & Arabian Business Dubai PropTech Feature",
        "file": "zawya-dubai-proptech-pitch.md",
        "to": "pressrelease.zawya@lseg.com,editorial@arabianbusiness.com",
        "web_portal": "https://www.zawya.com/en/press-releases",
    },
    {
        "id": "inman",
        "name": "Inman & Propmodo Speed-to-Lead Op-Ed",
        "file": "inman-speed-to-lead-pitch.md",
        "to": "contributors@inman.com,editor@propmodo.com",
        "web_portal": "https://www.inman.com/contribute/",
    },
    {
        "id": "latent-space",
        "name": "Latent Space Podcast (Swyx & Alessio)",
        "file": "latent-space-podcast-pitch.md",
        "to": "swyx@latent.space,alessio@latent.space",
        "web_portal": "https://www.latent.space/",
    },
    {
        "id": "partners",
        "name": "Tech Partners (Deepgram, Cartesia, n8n DevRel)",
        "file": "deepgram-cartesia-partner-showcase-pitch.md",
        "to": "devrel@deepgram.com,community@cartesia.ai,content@n8n.io",
        "web_portal": "https://deepgram.com/contact-us",
    },
]

def parse_pitch_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract subject
    sub_match = re.search(r"\*\*Subject:\*\*\s*(.+)", content)
    if not sub_match:
        sub_match = re.search(r"Subject:\s*(.+)", content)
    subject = sub_match.group(1).strip() if sub_match else "DestiX AI Research"

    # Extract email body from code block
    body_match = re.search(r"```text\s*([\s\S]*?)```", content)
    if body_match:
        body = body_match.group(1).strip()
        # Remove subject line if it's the first line in the text block
        lines = body.splitlines()
        if lines and lines[0].lower().startswith("subject:"):
            body = "\n".join(lines[1:]).strip()
    else:
        body = content

    return subject, body

def build_links(to_emails, subject, body):
    encoded_to = urllib.parse.quote(to_emails)
    encoded_sub = urllib.parse.quote(subject)
    encoded_body = urllib.parse.quote(body)

    gmail_url = f"https://mail.google.com/mail/?view=cm&fs=1&to={encoded_to}&su={encoded_sub}&body={encoded_body}"
    mailto_uri = f"mailto:{to_emails}?subject={encoded_sub}&body={encoded_body}"

    return gmail_url, mailto_uri

def update_tracker(pitch_records):
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    records = []
    for p in pitch_records:
        records.append({
            "id": p["id"],
            "outlet": p["name"],
            "recipients": p["to"],
            "subject": p["subject"],
            "web_portal": p.get("web_portal", ""),
            "status": p.get("status", "READY_FOR_DISPATCH"),
            "staged_at": now,
            "gmail_compose_url": p["gmail_url"],
            "follow_up_day_4": (datetime.now() + timedelta(days=4)).strftime("%Y-%m-%d"),
        })

    with open(LOG_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(records, f, indent=2)

    # Build markdown summary tracker
    md = f"# DestiX AI Real-Time Earned-Media Outreach Tracker\n\n"
    md += f"**Last Synchronized:** `{now}`  \n"
    md += f"**Principal Sender:** Ayush Meena (`ayushmeenadestixai@gmail.com`)  \n"
    md += f"**Domain:** https://ayush.company | **Entity:** `Q142174891`  \n\n"
    md += f"---\n\n"

    for r in records:
        md += f"### {r['outlet']}\n"
        md += f"- **Target Recipients:** `{r['recipients']}`\n"
        md += f"- **Subject:** `{r['subject']}`\n"
        md += f"- **Web Portal:** [{r['web_portal']}]({r['web_portal']})\n"
        md += f"- **Status:** `{r['status']}`\n"
        md += f"- **1-Click Gmail Web:** [Open Pre-Filled Gmail Draft]({r['gmail_compose_url']})\n\n"

    with open(LOG_MD_PATH, "w", encoding="utf-8") as f:
        f.write(md)

def main():
    arg = sys.argv[1] if len(sys.argv) > 1 else "build"

    pitch_records = []
    for p in PITCHES:
        fpath = os.path.join(OUTREACH_DIR, p["file"])
        if not os.path.exists(fpath):
            continue
        subject, body = parse_pitch_file(fpath)
        gmail_url, mailto_uri = build_links(p["to"], subject, body)
        p_record = {
            **p,
            "subject": subject,
            "body": body,
            "gmail_url": gmail_url,
            "mailto_uri": mailto_uri,
            "status": "QUEUED_AND_STAGED",
        }
        pitch_records.append(p_record)

    update_tracker(pitch_records)
    print(f"[OK] Generated dispatch payloads and updated tracker: {LOG_MD_PATH}")

    if arg in ("--launch", "launch"):
        target = sys.argv[2] if len(sys.argv) > 2 else "all"
        for p in pitch_records:
            if target == "all" or target == p["id"]:
                print(f"[DISPATCHING] Opening Gmail Web draft for: {p['name']}...")
                p["status"] = "DISPATCH_LAUNCHED"
                webbrowser.open(p["gmail_url"])
        update_tracker(pitch_records)

if __name__ == "__main__":
    main()
