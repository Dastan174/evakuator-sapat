import type { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/config/business";
import { DEFAULT_SEO_CONFIG } from "@/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_CONFIG.brandName,
    short_name: "Сапат",
    description: DEFAULT_SEO_CONFIG.description,
    start_url: "/",
    display: "browser",
    background_color: "#09090b",
    theme_color: "#09090b",
    lang: "ru",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
