import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/config/gallery";

export function Gallery() {
  return (
    <section id="gallery" className="border-y border-zinc-800 bg-zinc-900/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Фотографии"
          title="Реальная техника и выполненные перевозки"
          subtitle="Фотографии эвакуаторов и работ компании. Если нужно уточнить возможность перевозки вашего автомобиля — позвоните или напишите в WhatsApp."
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3" aria-label="Фотографии техники и работ">
          {GALLERY_IMAGES.map((image) => (
            <figure key={image.src} className="group relative mb-4 break-inside-avoid overflow-hidden border border-zinc-800 bg-zinc-950">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 30vw"
                className="pointer-events-none h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/55 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white">
                {image.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          Фотографии предоставлены владельцем компании. Возможность перевозки и условия уточняются перед заказом.
        </p>
      </div>
    </section>
  );
}
