import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08080A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DestiX AI | Autonomous AI Voice Infrastructure & Spatial Web Architecture | Ayush Meena",
  description:
    "We don't build standard chatbots or generic templates. DestiX AI installs human-sounding autonomous voice agents and bespoke 3D interactive web platforms that turn cold traffic into qualified pipeline 24/7. Founded by Ayush Meena.",
  keywords: [
    "DestiX AI",
    "Ayush Meena",
    "Autonomous Voice Agents",
    "Spatial Web Architecture",
    "Three.js Agency",
    "Sub-45s Lead Booking",
    "Enterprise AI OS",
    "ayush.company",
    "Delhi NCR AI Studio",
  ],
  authors: [{ name: "Ayush Meena", url: "https://ayush.company" }],
  creator: "Ayush Meena",
  publisher: "DestiX AI",
  metadataBase: new URL("https://ayush.company"),
  openGraph: {
    title: "DestiX AI | Autonomous Voice Agents & Category-Defining 3D Web",
    description:
      "Ultra-low-latency voice agents paired with high-performance 3D spatial digital storefronts that command instant authority.",
    url: "https://ayush.company",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DestiX AI | Autonomous Voice Infrastructure & Spatial 3D Web",
    description: "Engineered for revenue velocity. Founded by Ayush Meena.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#08080A] text-[#F4F4F6] scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#08080A] text-[#F4F4F6] font-sans selection:bg-[#00F5A0]/20 selection:text-[#00F5A0]">
        {children}
      </body>
    </html>
  );
}
