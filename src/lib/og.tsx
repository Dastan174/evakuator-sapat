import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { BUSINESS_CONFIG } from "@/config/business";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_ALT = `${BUSINESS_CONFIG.brandName} — эвакуатор в Бишкеке 24/7`;

const PHOTO_WIDTH = 520;
const fontFile = (subset: string, weight: number) =>
  readFile(path.join(process.cwd(), "node_modules/@fontsource/unbounded/files", `unbounded-${subset}-${weight}-normal.woff`));

// Glue short prepositions and numbers to the next word so they never hang at a line end.
const glue = (text: string) => text.replace(/(?<=^|\s)(в|и|из|до|по|с|на|\d+) /g, "$1 ");

/** Shared share-card for every page: brand, page title and phone on the left, the page's own photo on the right. */
export async function renderOgImage({ title, subtitle, photo }: { title: string; subtitle: string; photo: string }) {
  const [cyr700, lat700, cyr600, lat600, photoPng] = await Promise.all([
    fontFile("cyrillic", 700),
    fontFile("latin", 700),
    fontFile("cyrillic", 600),
    fontFile("latin", 600),
    // Satori cannot decode webp, so the photo is converted and cropped to the panel here.
    sharp(path.join(process.cwd(), "public", photo)).resize(PHOTO_WIDTH, OG_SIZE.height, { fit: "cover" }).png().toBuffer(),
  ]);

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#09090b", fontFamily: "UnboundedLatin, UnboundedCyrillic" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: OG_SIZE.width - PHOTO_WIDTH, padding: "56px 56px 52px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, background: "#f59e0b", borderRadius: 14 }}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 16v-4.5L4.5 8H9v8" />
                <path d="M9 13h12.5l.5 3" />
                <path d="M11.5 13l1.5-2.5h4l1.5 2.5" />
                <path d="M2 16h2M8 16h8M20 16h2" />
                <circle cx="6" cy="17" r="2" />
                <circle cx="18" cy="17" r="2" />
              </svg>
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "#f4f4f5" }}>{BUSINESS_CONFIG.brandName}</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", fontSize: title.length > 34 ? 50 : 60, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#ffffff" }}>{glue(title)}</div>
            <div style={{ display: "flex", fontSize: 24, fontWeight: 600, lineHeight: 1.35, color: "#a1a1aa" }}>{glue(subtitle)}</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", background: "#f59e0b", color: "#09090b", fontSize: 30, fontWeight: 700, padding: "16px 26px" }}>
              {BUSINESS_CONFIG.contacts.primaryPhoneFormatted}
            </div>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: "#fbbf24" }}>24/7</div>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img>, next/image does not apply */}
        <img src={`data:image/png;base64,${photoPng.toString("base64")}`} width={PHOTO_WIDTH} height={OG_SIZE.height} alt="" style={{ objectFit: "cover" }} />
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "UnboundedCyrillic", data: cyr700, weight: 700, style: "normal" },
        { name: "UnboundedLatin", data: lat700, weight: 700, style: "normal" },
        { name: "UnboundedCyrillic", data: cyr600, weight: 600, style: "normal" },
        { name: "UnboundedLatin", data: lat600, weight: 600, style: "normal" },
      ],
    },
  );
}
