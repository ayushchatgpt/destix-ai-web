import urllib.request
import json
import xml.etree.ElementTree as ET

# Fetch sitemap.xml
sitemap_url = "https://ayush.company/sitemap.xml"
print(f"Fetching sitemap from {sitemap_url}...")

req = urllib.request.Request(sitemap_url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req) as resp:
        xml_data = resp.read()
    root = ET.fromstring(xml_data)
    # Extract all loc elements
    urls = []
    for elem in root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
        urls.append(elem.text.strip())
    
    print(f"Discovered {len(urls)} URLs in sitemap.")

    # Submit to IndexNow
    payload = {
        "host": "ayush.company",
        "key": "e4d7f58c73b04c859187382d6139f417",
        "keyLocation": "https://ayush.company/e4d7f58c73b04c859187382d6139f417.txt",
        "urlList": urls
    }

    # Endpoints: api.indexnow.org and bing.com
    endpoints = [
        "https://api.indexnow.org/indexnow",
        "https://www.bing.com/indexnow"
    ]

    for ep in endpoints:
        print(f"Submitting to {ep}...")
        post_req = urllib.request.Request(
            ep,
            data=json.dumps(payload).encode('utf-8'),
            headers={"Content-Type": "application/json; charset=utf-8"}
        )
        try:
            with urllib.request.urlopen(post_req) as post_resp:
                print(f"  Success: Status {post_resp.status} from {ep}")
        except urllib.error.HTTPError as he:
            print(f"  HTTP Response {he.code}: {he.read().decode('utf-8')}")
        except Exception as e:
            print(f"  Error: {e}")

except Exception as e:
    print(f"Failed to fetch sitemap: {e}")
