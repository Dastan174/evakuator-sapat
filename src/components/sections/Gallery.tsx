"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { GALLERY_IMAGES } from "@/config/gallery";
import { useDesktopMotion } from "@/lib/useDesktopMotion";

const COLUMNS = [0, 1, 2].map((column) => GALLERY_IMAGES.filter((_, index) => index % 3 === column));

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const motionOn = useDesktopMotion();

  // Column drift: outer columns move gently, the middle one travels further, so the wall reads as depth.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const outerY = useTransform(scrollYProgress, (p) => (1 - 2 * p) * 40);
  const middleY = useTransform(scrollYProgress, (p) => (1 - 2 * p) * 120);

  return (
    <section ref={sectionRef} id="gallery" className="overflow-hidden border-b border-zinc-800 bg-zinc-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Наши эвакуаторы в работе" subtitle="Фотографии техники и выполненных перевозок — по городу, на трассе, со спецтехникой." />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {COLUMNS.map((images, column) => (
            <motion.div
              key={column}
              style={motionOn ? { y: column === 1 ? middleY : outerY } : undefined}
              className={column === 2 ? "col-span-2 grid grid-cols-3 gap-3 sm:gap-4 lg:col-span-1 lg:flex lg:flex-col lg:gap-6" : "flex flex-col gap-3 sm:gap-4 lg:gap-6"}
            >
              {images.map((image) => (
                <ParallaxImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  sizes="(max-width: 1023px) 50vw, 30vw"
                  className={column === 2 ? "group aspect-[3/4] lg:aspect-[var(--ratio)]" : "group aspect-[var(--ratio)]"}
                  style={{ "--ratio": `${image.width} / ${image.height}` } as CSSProperties}
                  imageClassName="transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
