import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
          {
            key: "Link",
            value: '<https://ayush.company/sitemap.xml>; rel="sitemap"',
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.ayush.company",
          },
        ],
        destination: "https://ayush.company/:path*",
        permanent: true,
      },
      // Documentation alias for AI crawlers
      {
        source: "/docs",
        destination: "/compliance",
        permanent: true,
      },
      // Legacy & variant location URL consolidation to canonical routes
      {
        source: "/ai-voice-agent-delhi-ncr",
        destination: "/locations/delhi-ncr/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/city/ai-voice-agent-delhi",
        destination: "/locations/delhi-ncr/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/ai-calling/delhi-ncr",
        destination: "/locations/delhi-ncr/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/ai-agency-delhi",
        destination: "/locations/delhi-ncr/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/dubai",
        destination: "/locations/dubai/real-estate-ai-voice-agents",
        permanent: true,
      },
      {
        source: "/london",
        destination: "/locations/uk/london/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/uk",
        destination: "/locations/uk/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/miami",
        destination: "/locations/usa/miami/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/new-york",
        destination: "/locations/usa/new-york/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/nyc",
        destination: "/locations/usa/new-york/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/los-angeles",
        destination: "/locations/usa/los-angeles/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/la",
        destination: "/locations/usa/los-angeles/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/paris",
        destination: "/locations/europe/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/france",
        destination: "/locations/europe/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/europe",
        destination: "/locations/europe/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/mumbai",
        destination: "/locations/mumbai/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/bengaluru",
        destination: "/locations/bengaluru/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/bangalore",
        destination: "/locations/bengaluru/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/hyderabad",
        destination: "/locations/hyderabad/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/chennai",
        destination: "/locations/chennai/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/pune",
        destination: "/locations/pune/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/gurugram",
        destination: "/locations/gurugram/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/gurgaon",
        destination: "/locations/gurugram/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/noida",
        destination: "/locations/noida/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/dubai",
        destination: "/locations/dubai/real-estate-ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/dubai/ai-voice-agents",
        destination: "/locations/dubai/real-estate-ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/delhi",
        destination: "/locations/delhi-ncr/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/delhi-ncr",
        destination: "/locations/delhi-ncr/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/gurugram",
        destination: "/locations/gurugram/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/noida",
        destination: "/locations/noida/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/mumbai",
        destination: "/locations/mumbai/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/bengaluru",
        destination: "/locations/bengaluru/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/hyderabad",
        destination: "/locations/hyderabad/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/chennai",
        destination: "/locations/chennai/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/pune",
        destination: "/locations/pune/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/india",
        destination: "/locations/india/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/uk",
        destination: "/locations/uk/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/london",
        destination: "/locations/uk/london/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/usa",
        destination: "/locations/usa/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/new-york",
        destination: "/locations/usa/new-york/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/miami",
        destination: "/locations/usa/miami/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/los-angeles",
        destination: "/locations/usa/los-angeles/ai-voice-agents",
        permanent: true,
      },
      {
        source: "/locations/europe",
        destination: "/locations/europe/ai-voice-agents",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
