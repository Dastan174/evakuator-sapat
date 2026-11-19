import { PHOTOS } from "@/config/gallery";
import { SERVICES_LIST } from "@/config/services";
import { SERVICE_PAGES } from "@/config/service-pages";
import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return SERVICES_LIST.filter((service) => SERVICE_PAGES[service.slug]).map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((item) => item.slug === slug);
  const page = SERVICE_PAGES[slug];
  if (!service || !page) {
    return renderOgImage({ title: "Эвакуатор в Бишкеке 24/7", subtitle: "Бишкек и межгород.", photo: PHOTOS.night.src });
  }
  return renderOgImage({ title: page.h1, subtitle: service.shortDesc, photo: PHOTOS[page.photos[0]].src });
}
