/**
 * IndexNow Automated Submission Script for DestiX AI (ayush.company)
 * Reads key from INDEXNOW_KEY environment variable (fallback to verification key file).
 * Submits all sitemap URLs to IndexNow endpoints (Bing, Yandex, IndexNow.org).
 */

const HOST = "ayush.company";
const DEFAULT_KEY = "e4d7f58c73b04c859187382d6139f417";
const KEY = process.env.INDEXNOW_KEY || DEFAULT_KEY;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

async function submitIndexNow() {
  console.log(`[IndexNow] Fetching sitemap from ${SITEMAP_URL}...`);

  try {
    const sitemapRes = await fetch(SITEMAP_URL, {
      headers: { "User-Agent": "DestiX-IndexNow-Bot/1.0" },
    });

    if (!sitemapRes.ok) {
      throw new Error(`Failed to fetch sitemap: HTTP ${sitemapRes.status}`);
    }

    const xml = await sitemapRes.text();
    const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
    const urlList: string[] = [];
    let match;

    while ((match = locRegex.exec(xml)) !== null) {
      urlList.push(match[1]);
    }

    console.log(`[IndexNow] Discovered ${urlList.length} canonical URLs.`);

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    };

    for (const endpoint of ENDPOINTS) {
      console.log(`[IndexNow] Submitting payload to ${endpoint}...`);
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(payload),
        });

        console.log(`[IndexNow] Status ${res.status} from ${endpoint}`);
      } catch (err) {
        console.error(`[IndexNow] Request failed for ${endpoint}:`, err);
      }
    }

    console.log("[IndexNow] Submission cycle complete.");
  } catch (error) {
    console.error("[IndexNow] Fatal error during submission:", error);
  }
}

submitIndexNow();
