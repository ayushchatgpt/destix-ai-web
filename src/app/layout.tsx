import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08090C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DestiX AI | Autonomous AI Voice Infrastructure & Enterprise Systems | Ayush Meena",
  description:
    "AI does the qualification, you book the revenue. DestiX AI engineers human-sounding phone agents (< 350ms latency), automated n8n CRM pipelines, and category-defining 3D WebGL platforms. Founded by Ayush Meena.",
  keywords: [
    "DestiX AI",
    "Ayush Meena",
    "Autonomous Phone Operations",
    "AI Voice Agents",
    "Enterprise AI Operating System",
    "n8n CRM Automation",
    "Three.js WebGL Storefronts",
    "ayush.company",
    "Delhi NCR AI Agency",
  ],
  authors: [{ name: "Ayush Meena", url: "https://ayush.company" }],
  creator: "Ayush Meena",
  publisher: "DestiX AI",
  metadataBase: new URL("https://ayush.company"),
  openGraph: {
    title: "DestiX AI | Autonomous AI Voice Infrastructure & Enterprise Systems",
    description:
      "Conversational phone intelligence, enterprise CRM operating layers, and category-defining 3D WebGL platforms.",
    url: "https://ayush.company",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DestiX AI | Autonomous AI Voice Infrastructure",
    description: "AI does the qualification, you book the revenue. Founded by Ayush Meena.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#08090C] text-[#F8FAFC] scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#08090C] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#06B6D4] selection:text-[#08090C]">
        {children}
      </body>
    </html>
  );
}
