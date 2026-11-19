import type { Metadata } from "next";
import { BUSINESS_CONFIG } from "./business";

/**
 * Canonical origin. Explicit NEXT_PUBLIC_SITE_URL wins; otherwise Vercel's production domain is used
 * (VERCEL_PROJECT_PRODUCTION_URL switches to the custom domain automatically once one is attached).
 * localhost only applies to local builds, never to a deployment.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const DEFAULT_SEO_CONFIG = {
  title: "Эвакуатор «Сапат» в Бишкеке 24/7 — вызов и межгород",
  description:
    "Эвакуатор «Сапат» работает в Бишкеке круглосуточно. Междугородние перевозки по Кыргызстану, в Алматы и южные города Казахстана. Стоимость и маршрут уточняйте по телефону.",
  keywords: ["эвакуатор Бишкек", "эвакуатор Бишкек 24/7", "эвакуатор Сапат", "эвакуатор после ДТП", "заказать эвакуатор", "межгород эвакуатор Кыргызстан", "перевозка авто в Алматы"],
};

export function getPageMetadata(pageTitle?: string, pageDescription?: string, canonicalPath = ""): Metadata {
  // The root layout's title template appends the brand, so <title> gets the bare page title.
  const title = pageTitle || DEFAULT_SEO_CONFIG.title;
  const fullTitle = pageTitle ? `${pageTitle} | ${BUSINESS_CONFIG.brandName}` : DEFAULT_SEO_CONFIG.title;
  const description = pageDescription || DEFAULT_SEO_CONFIG.description;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  return {
    title, description, keywords: DEFAULT_SEO_CONFIG.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: fullTitle, description, url: canonicalUrl, siteName: BUSINESS_CONFIG.brandName,
      locale: "ru_KG", type: "website",
    },
    robots: { index: true, follow: true },
  };
}

/** Keep structured data limited to confirmed business facts; add verified contacts/address before launch. */
export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TowingService",
    name: BUSINESS_CONFIG.brandName,
    description: DEFAULT_SEO_CONFIG.description,
    url: SITE_URL,
    telephone: BUSINESS_CONFIG.contacts.primaryPhone,
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "от 2 000 сомов",
    paymentAccepted: BUSINESS_CONFIG.paymentMethods.join(", "),
    areaServed: [
      { "@type": "City", name: "Бишкек" },
      { "@type": "Country", name: "Кыргызстан" },
      { "@type": "City", name: "Алматы" },
      { "@type": "AdministrativeArea", name: "Южные города Казахстана" },
    ],
  };
}
