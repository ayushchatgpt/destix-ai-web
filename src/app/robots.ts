import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Claude-SearchBot",
          "anthropic-ai",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "Amazonbot",
          "YouBot",
          "Meta-ExternalAgent",
          "Bytespider",
          "cohere-ai",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://ayush.company/sitemap.xml",
    host: "https://ayush.company",
  };
}
