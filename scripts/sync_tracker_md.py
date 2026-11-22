import json

tracker_path = r"C:\Users\ayush\.gemini\antigravity\scratch\destix-ai-web\docs\earned-media\outreach-tracker.json"
md_path = r"C:\Users\ayush\.gemini\antigravity\scratch\destix-ai-web\docs\earned-media\outreach-tracker.md"

with open(tracker_path, "r", encoding="utf-8") as f:
    records = json.load(f)

md = "# DestiX AI Real-Time Earned-Media Outreach Tracker\n\n"
md += "**Last Synchronized:** `2026-11-22 10:48:25`  \n"
md += "**Principal Sender:** Ayush Meena (`ayushmeenadestixai@gmail.com`)  \n"
md += "**Domain:** https://ayush.company | **Entity:** `Q142174891`  \n\n"
md += "---\n\n"

for r in records:
    md += f"### {r['outlet']}\n"
    md += f"- **Target Recipients:** `{r['recipients']}`\n"
    md += f"- **Subject:** `{r['subject']}`\n"
    md += f"- **Web Portal:** [{r['web_portal']}]({r['web_portal']})\n"
    md += f"- **Status:** `{r['status']}`\n"
    if r.get("confirmation_notes"):
        md += f"- **Live Submission Status:** {r['confirmation_notes']}\n"
    md += f"- **Follow-Up Target Date:** `{r['follow_up_day_4']}`\n"
    md += f"- **1-Click Gmail Web:** [Open Pre-Filled Gmail Draft]({r['gmail_compose_url']})\n\n"

with open(md_path, "w", encoding="utf-8") as f:
    f.write(md)

print("[OK] Markdown tracker updated.")
