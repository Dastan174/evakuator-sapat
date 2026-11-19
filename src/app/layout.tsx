import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileEmergencyBar } from "@/components/ui/MobileEmergencyBar";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { DEFAULT_SEO_CONFIG, generateLocalBusinessJsonLd, SITE_URL } from "@/config/seo";
import { BUSINESS_CONFIG } from "@/config/business";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const unbounded = Unbounded({ subsets: ["latin", "cyrillic"], weight: ["600", "700"], variable: "--font-display", display: "swap" });

export const viewport: Viewport = { themeColor: "#09090b", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_SEO_CONFIG.title, template: `%s | ${BUSINESS_CONFIG.brandName}` },
  description: DEFAULT_SEO_CONFIG.description,
  keywords: DEFAULT_SEO_CONFIG.keywords,
  openGraph: { type: "website", locale: "ru_KG", siteName: BUSINESS_CONFIG.brandName, title: DEFAULT_SEO_CONFIG.title, description: DEFAULT_SEO_CONFIG.description },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = generateLocalBusinessJsonLd();
  return <html lang="ru" className={`${inter.variable} ${unbounded.variable} dark scroll-smooth`}>
    <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /></head>
    <body className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans antialiased selection:bg-amber-500/30 selection:text-white">
      <Header /><main className="flex-1 pt-[72px]">{children}</main><Footer /><MobileEmergencyBar /><SmoothScroll />
    </body>
  </html>;
}
