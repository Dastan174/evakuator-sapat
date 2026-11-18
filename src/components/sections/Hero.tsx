"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Clock, ArrowDown, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { BUSINESS_CONFIG } from "@/config/business";
import { GALLERY_IMAGES } from "@/config/gallery";
import { STARTING_PRICE_LABEL } from "@/config/services";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, BUSINESS_CONFIG.contacts.defaultWhatsAppMessage);
  const heroImage = GALLERY_IMAGES[0];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const image = imageRef.current;
    const imageInner = imageInnerRef.current;
    const copy = copyRef.current;
    const meta = metaRef.current;
    if (!section || !stage || !image || !imageInner || !copy || !meta) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || window.innerWidth < 768) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      section.classList.add("cinematic-hero-ready");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: stage,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(imageInner, { scale: 1.18, xPercent: 3, yPercent: 2, ease: "none", duration: 1 }, 0)
        .to(image, { yPercent: -8, ease: "none", duration: 1 }, 0)
        .to(copy, { yPercent: -22, autoAlpha: 0.35, ease: "none", duration: 0.72 }, 0.1)
        .to(meta, { yPercent: -38, autoAlpha: 0, ease: "none", duration: 0.5 }, 0.2);
    }, section);

    return () => {
      context.revert();
      section.classList.remove("cinematic-hero-ready");
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] bg-zinc-950 md:h-[220vh] md:min-h-0" aria-labelledby="hero-title">
      <div ref={stageRef} className="relative flex min-h-[100svh] items-end overflow-hidden border-b border-zinc-800 md:h-screen md:items-center">
        <div ref={imageRef} className="absolute inset-0 pointer-events-none">
          <div ref={imageInnerRef} className="absolute -inset-[3%] will-change-transform">
            <Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,.98)_0%,rgba(9,9,11,.78)_34%,rgba(9,9,11,.18)_72%,rgba(9,9,11,.55)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,9,11,.98)_0%,transparent_42%,rgba(9,9,11,.3)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 sm:pb-20 lg:px-8 md:pb-24">
          <div ref={copyRef} className="max-w-4xl will-change-transform">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
              <span className="h-px w-10 bg-amber-500" /> Эвакуатор «Сапат» · Бишкек
            </p>
            <h1 id="hero-title" className="max-w-4xl text-[clamp(3.25rem,10vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-white">
              Доставка<br /><span className="text-amber-400">без лишних слов</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
              Эвакуатор до 8 тонн для легковых автомобилей, внедорожников, микроавтобусов и спецтехники. Бишкек и межгород.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telLink} className="inline-flex min-h-14 items-center justify-center gap-3 bg-amber-500 px-7 text-base font-black text-zinc-950 shadow-2xl shadow-amber-500/20 transition-colors hover:bg-amber-400 active:scale-[.98]">
                <Phone className="h-5 w-5 fill-zinc-950" /> Вызвать эвакуатор
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/25 bg-black/25 px-7 text-base font-bold text-white backdrop-blur-sm transition-colors hover:border-emerald-400 hover:text-emerald-300 active:scale-[.98]">
                <WhatsappIcon className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>

          <div ref={metaRef} className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/20 pt-5 text-xs uppercase tracking-[0.14em] text-zinc-300 will-change-transform sm:text-sm">
            <span><Clock className="mr-2 inline h-4 w-4 text-amber-400" />{BUSINESS_CONFIG.operatingHours}</span>
            <span><ShieldCheck className="mr-2 inline h-4 w-4 text-emerald-400" />{STARTING_PRICE_LABEL}</span>
            <span className="hidden sm:inline">Нагрузка {BUSINESS_CONFIG.vehicleCapacity}</span>
          </div>
        </div>

        <div className="absolute bottom-7 right-4 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-300 md:flex lg:right-8">
          <span>Scroll to explore</span><ArrowDown className="h-4 w-4 animate-bounce text-amber-400" />
        </div>
      </div>
    </section>
  );
}
