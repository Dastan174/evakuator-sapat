"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, ArrowDown } from "lucide-react";
import { STORY_STAGES } from "@/config/gallery";
import { BUSINESS_CONFIG } from "@/config/business";
import { formatTelUri } from "@/lib/utils";

export function StoryScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || window.innerWidth < 768) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean) as HTMLDivElement[];
      gsap.set(images.slice(1), { autoAlpha: 0, scale: 1.08 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${STORY_STAGES.length * 85}%`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
        },
      });

      images.forEach((image, index) => {
        if (index === 0) {
          timeline.to(image, { scale: 1.04, duration: 1 }, 0);
          return;
        }
        const previous = images[index - 1];
        timeline
          .to(previous, { autoAlpha: 0, scale: 0.96, duration: 0.45 }, index - 0.15)
          .to(image, { autoAlpha: 1, scale: 1, duration: 0.55 }, index - 0.15);
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative border-y border-zinc-800 bg-zinc-950 py-20 md:h-screen md:min-h-[720px] md:overflow-hidden md:py-0" aria-labelledby="story-title">
      <div className="mx-auto grid h-full max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative z-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Как проходит перевозка</p>
          <h2 id="story-title" className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-zinc-100 sm:text-5xl">От обращения до доставки</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">Показываем понятный путь заказа: сообщите детали, согласуйте условия, а мы организуем перевозку по Бишкеку или междугороднему маршруту.</p>

          <div className="mt-8 space-y-4">
            {STORY_STAGES.map((stage) => (
              <article key={stage.number} className="group flex gap-4 border-l border-zinc-800 py-1 pl-4 transition-colors hover:border-amber-500">
                <span className="font-mono text-sm text-amber-400">{stage.number}</span>
                <div>
                  <h3 className="text-base font-bold text-zinc-100">{stage.title}</h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-zinc-500">{stage.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a href={telLink} className="mt-8 inline-flex min-h-12 items-center gap-2 bg-amber-500 px-5 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-amber-400">
            <Phone className="h-4 w-4" /> Уточнить возможность перевозки
          </a>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden border border-zinc-800 bg-zinc-900 md:aspect-[5/4]">
          {STORY_STAGES.map((stage, index) => (
            <div key={stage.number} ref={(element) => { imageRefs.current[index] = element; }} className="absolute inset-0">
              <Image src={stage.image.src} alt={stage.image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="pointer-events-none object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-amber-400">{stage.title}</span>
            </div>
          ))}
          <div className="absolute right-5 top-5 flex items-center gap-2 text-xs text-zinc-400"><ArrowDown className="h-4 w-4 text-amber-400" /> Scroll</div>
        </div>
      </div>
    </section>
  );
}
