"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY_IMAGES } from "@/config/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || window.innerWidth < 768) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden border-y border-zinc-800 bg-zinc-950 py-16 sm:py-24 md:min-h-screen md:py-20" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Галерея" title="Техника в работе" subtitle="Реальные фотографии перевозок по городу и междугородним маршрутам." />
      </div>
      <div ref={trackRef} className="mx-auto flex max-w-7xl gap-4 px-4 sm:px-6 lg:px-8 md:w-max md:max-w-none md:gap-6">
        {GALLERY_IMAGES.slice(0, 7).map((image) => (
          <figure key={image.src} className="relative min-w-[85vw] overflow-hidden border border-zinc-800 bg-zinc-900 sm:min-w-[60vw] md:min-w-[42vw] lg:min-w-[35vw]">
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 85vw, 42vw" className="pointer-events-none aspect-[4/3] h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white">{image.title}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-7xl px-4 text-center text-xs text-zinc-500 sm:px-6 lg:px-8 md:text-left">На телефоне галерея прокручивается обычным вертикальным потоком.</p>
    </section>
  );
}
