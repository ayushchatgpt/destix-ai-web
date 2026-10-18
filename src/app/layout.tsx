import type { Metadata, Viewport } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F6F4EE",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DestiX AI — Autonomous Conversational Infrastructure & Digital Architecture | Ayush Meena",
  description:
    "AI does the heavy lifting, you bank the revenue. DestiX AI installs human-sounding autonomous voice agents, automated CRM pipelines, and category-defining 3D digital storefronts that intercept, qualify, and convert high-ticket leads 24/7. Principal: Ayush Meena.",
  keywords: [
    "DestiX AI",
    "Ayush Meena",
    "Autonomous Voice Infrastructure",
    "Digital Architecture Studio",
    "High-Ticket Lead Interception",
    "Sub-45s Inbound Triage",
    "Three.js Agency",
    "ayush.company",
    "Delhi NCR",
  ],
  authors: [{ name: "Ayush Meena", url: "https://ayush.company" }],
  creator: "Ayush Meena",
  publisher: "DestiX AI Studio",
  metadataBase: new URL("https://ayush.company"),
  openGraph: {
    title: "DestiX AI — Autonomous Conversational Infrastructure & Digital Architecture",
    description:
      "Human-sounding autonomous voice agents, automated CRM pipelines, and category-defining 3D digital storefronts that convert high-ticket leads 24/7.",
    url: "https://ayush.company",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DestiX AI — Autonomous Conversational Infrastructure",
    description: "AI does the heavy lifting, you bank the revenue. Principal: Ayush Meena.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F6F4EE] text-[#181614] scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F6F4EE] text-[#181614] font-sans selection:bg-[#B88746]/20 selection:text-[#181614]">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
