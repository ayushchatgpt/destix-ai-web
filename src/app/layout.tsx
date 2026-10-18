import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F6F4EE",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DestiX AI — Systems Architecture & Conversational Intelligence Practice | Ayush Meena",
  description:
    "Autonomous voice infrastructure paired with category-defining digital architectures for luxury real estate developers, private clinics, and high-ticket advisory practices. Principal & Systems Architect: Ayush Meena.",
  keywords: [
    "DestiX AI",
    "Ayush Meena",
    "Systems Architecture",
    "Conversational Intelligence Practice",
    "Autonomous Voice Infrastructure",
    "Luxury Digital Architecture",
    "High-Ticket Conversion Systems",
    "ayush.company",
    "Delhi NCR",
  ],
  authors: [{ name: "Ayush Meena", url: "https://ayush.company" }],
  creator: "Ayush Meena",
  publisher: "DestiX AI Practice",
  metadataBase: new URL("https://ayush.company"),
  openGraph: {
    title: "DestiX AI — Systems Architecture & Conversational Intelligence Practice",
    description:
      "Autonomous voice infrastructure paired with category-defining digital architectures for high-ticket developers, clinics, and advisory practices.",
    url: "https://ayush.company",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DestiX AI — Systems Architecture Practice",
    description: "Systems engineered for revenue velocity. Principal: Ayush Meena.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F6F4EE] text-[#181512] scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F6F4EE] text-[#181512] font-sans selection:bg-[#B88746]/20 selection:text-[#181512]">
        {children}
      </body>
    </html>
  );
}
