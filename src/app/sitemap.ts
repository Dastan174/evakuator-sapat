import { MetadataRoute } from "next";
import { SITE_URL } from "@/config/seo";
import { SERVICES_LIST } from "@/config/services";
import { SERVICE_PAGES } from "@/config/service-pages";
import { GALLERY_IMAGES, HERO_IMAGES, PHOTOS } from "@/config/gallery";

const imageUrl = (src: string) => `${SITE_URL}${encodeURI(src)}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-19");

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [HERO_IMAGES.main, HERO_IMAGES.back, HERO_IMAGES.front, ...GALLERY_IMAGES].map((photo) => imageUrl(photo.src)),
    },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...SERVICES_LIST.filter((service) => SERVICE_PAGES[service.slug]).map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: SERVICE_PAGES[service.slug].photos.map((key) => imageUrl(PHOTOS[key].src)),
    })),
    { url: `${SITE_URL}/contacts`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
