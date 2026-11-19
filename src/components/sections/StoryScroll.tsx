"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { STORY_STAGES } from "@/config/gallery";
import { BUSINESS_CONFIG } from "@/config/business";
import { formatTelUri, cn } from "@/lib/utils";

/** Natural scroll: steps flow on the left, the photo on the right stays put and crossfades to the active step. */
export function StoryScroll() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="border-b border-zinc-800 bg-zinc-950 py-16 sm:py-24" aria-labelledby="story-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <h2 id="story-title" className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-100 sm:text-4xl lg:text-5xl">Как заказать эвакуатор</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400">Четыре шага от звонка до доставки. Цену и маршрут согласуем до начала работ.</p>

          <ol className="mt-10 lg:mt-4">
            {STORY_STAGES.map((stage, index) => (
              <li
                key={stage.number}
                ref={(element) => { stepRefs.current[index] = element; }}
                data-index={index}
                className="border-t border-zinc-800 py-8 lg:flex lg:min-h-[42svh] lg:items-center"
              >
                <div className={cn("flex gap-5 transition-opacity duration-500 lg:opacity-40", active === index && "lg:opacity-100")}>
                  <span className={cn("font-display text-sm font-semibold tabular-nums text-zinc-500 transition-colors duration-500", active === index && "text-amber-400")}>{stage.number}</span>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 sm:text-2xl">{stage.title}</h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-zinc-400">{stage.description}</p>
                    <div className="relative mt-5 aspect-[16/10] overflow-hidden bg-zinc-900 lg:hidden">
                      <Image src={stage.image.src} alt={stage.image.alt} fill sizes="100vw" className="object-cover" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <a href={telLink} className="press mt-4 inline-flex min-h-12 items-center gap-2 bg-amber-500 px-5 text-sm font-bold text-zinc-950 hover:bg-amber-400">
            <Phone className="h-4 w-4" aria-hidden="true" /> Позвонить и уточнить
          </a>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-[calc(72px+3rem)] aspect-[4/5] overflow-hidden bg-zinc-900">
            {STORY_STAGES.map((stage, index) => (
              <div
                key={stage.number}
                className={cn(
                  "absolute inset-0 transition-[opacity,transform] duration-700 [transition-timing-function:var(--ease-out-expo)]",
                  active === index ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                )}
                aria-hidden={active !== index}
              >
                <Image src={stage.image.src} alt={stage.image.alt} fill sizes="40vw" className="object-cover" />
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-0 flex gap-1.5 p-5" aria-hidden="true">
              {STORY_STAGES.map((stage, index) => (
                <span key={stage.number} className={cn("h-0.5 flex-1 bg-white/25 transition-colors duration-500", index <= active && "bg-amber-400")} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
