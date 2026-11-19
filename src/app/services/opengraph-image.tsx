import { PHOTOS } from "@/config/gallery";
import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Услуги эвакуатора в Бишкеке",
    subtitle: "После ДТП, неисправные авто, спецтехника и межгород. От 2 000 сомов.",
    photo: PHOTOS.loader.src,
  });
}
