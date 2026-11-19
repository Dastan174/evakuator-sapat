import { HERO_IMAGES } from "@/config/gallery";
import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Эвакуатор в Бишкеке 24/7",
    subtitle: "Легковые, внедорожники, микроавтобусы и спецтехника до 8 тонн. Межгород.",
    photo: HERO_IMAGES.main.src,
  });
}
