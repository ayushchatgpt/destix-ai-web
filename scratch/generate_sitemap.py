import re

ts_path = r"C:\Users\ayush\.gemini\antigravity\scratch\destix-ai-web\src\app\sitemap.ts"
xml_path = r"C:\Users\ayush\.gemini\antigravity\scratch\destix-ai-web\public\sitemap.xml"

with open(ts_path, "r", encoding="utf-8") as f:
    content = f.read()

# Match entries like:
# url: `${baseUrl}/...`,
# priority: 0.98,
pattern = re.compile(r'url:\s*`\$\{baseUrl\}([^`]*)`,\s*lastModified:[^,]*,\s*changeFrequency:\s*"([^"]+)"[^,]*,[\s\n]*priority:\s*([0-9.]+)', re.MULTILINE)
matches = pattern.findall(content)

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

today = "2026-11-15"

for path, freq, priority in matches:
    url = f"https://ayush.company{path}"
    xml_lines.append("  <url>")
    xml_lines.append(f"    <loc>{url}</loc>")
    xml_lines.append(f"    <lastmod>{today}</lastmod>")
    xml_lines.append(f"    <changefreq>{freq}</changefreq>")
    xml_lines.append(f"    <priority>{priority}</priority>")
    xml_lines.append("  </url>")

xml_lines.append("</urlset>")

output = "\n".join(xml_lines) + "\n"

with open(xml_path, "w", encoding="utf-8") as f:
    f.write(output)

print(f"Generated {len(matches)} URLs in {xml_path}")
