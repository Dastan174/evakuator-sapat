import { PHOTOS } from "@/config/gallery";
import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Вызвать эвакуатор в Бишкеке",
    subtitle: "Звонки и WhatsApp круглосуточно. Оплата наличными или по QR.",
    photo: PHOTOS.redSuv.src,
  });
}
