"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Clock, Banknote, Weight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import { HERO_IMAGES } from "@/config/gallery";
import { STARTING_PRICE_LABEL } from "@/config/services";
import { WhatsAppIcon } from "@/components/ui/icons";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { useDesktopMotion } from "@/lib/useDesktopMotion";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const motionOn = useDesktopMotion();
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, BUSINESS_CONFIG.contacts.defaultWhatsAppMessage);

  // Depth parallax on the photo layers only; the copy never moves with scroll.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  // Amplitude is zero until the hook confirms a wide screen without reduced motion; markup hydrates identically.
  // Function transformers, not ranges: ranges get frozen into a native ScrollTimeline at the first (zero) amplitude.
  const depth = motionOn ? 1 : 0;
  const backY = useTransform(scrollYProgress, (p) => -40 * depth * p);
  const mainY = useTransform(scrollYProgress, (p) => -90 * depth * p);
  const mainScale = useTransform(scrollYProgress, (p) => 1 + 0.08 * depth * p);
  const frontY = useTransform(scrollYProgress, (p) => -190 * depth * p);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:px-8 lg:py-14">
        <div>
          <h1 id="hero-title" className="hero-rise font-display text-[clamp(2.6rem,6.4vw,5.6rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white [text-wrap:balance]">
            Эвакуатор в&nbsp;Бишкеке <span className="text-amber-400">24/7</span>
          </h1>
          <p className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg" style={delay(80)}>
            Перевозим легковые автомобили, внедорожники, микроавтобусы и&nbsp;спецтехнику до&nbsp;8&nbsp;тонн. По&nbsp;городу и&nbsp;межгороду — Кыргызстан, Алматы и&nbsp;юг Казахстана.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={telLink} aria-label={`Позвонить: ${BUSINESS_CONFIG.contacts.primaryPhoneFormatted}`} className="press inline-flex min-h-14 items-center justify-center gap-3 whitespace-nowrap bg-amber-500 px-6 text-lg font-bold tabular-nums text-zinc-950 hover:bg-amber-400">
              <Phone className="h-5 w-5 fill-zinc-950" aria-hidden="true" />
              {BUSINESS_CONFIG.contacts.primaryPhoneFormatted}
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-14 items-center justify-center gap-3 whitespace-nowrap border border-zinc-700 px-6 text-base font-semibold text-white hover:border-emerald-500 hover:text-emerald-300">
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" />
              Написать в WhatsApp
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-300 sm:grid-cols-3 sm:gap-6">
            <li className="flex items-center gap-2.5"><Clock className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />{BUSINESS_CONFIG.operatingHours}</li>
            <li className="flex items-center gap-2.5"><Banknote className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />Цена {STARTING_PRICE_LABEL}</li>
            <li className="flex items-center gap-2.5"><Weight className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />Нагрузка {BUSINESS_CONFIG.vehicleCapacity}</li>
          </ul>
        </div>

        {/* Phone/tablet: one plain photo, no motion. */}
        <div className="hero-reveal relative aspect-[4/3] overflow-hidden bg-zinc-900 sm:aspect-[16/10] lg:hidden" style={delay(120)}>
          <Image src={HERO_IMAGES.main.src} alt={HERO_IMAGES.main.alt} fill priority sizes="100vw" className="object-cover object-[50%_70%]" />
        </div>

        {/* Desktop: three photo layers at different depths. */}
        <div className="relative hidden h-[min(74svh,700px)] lg:block">
          <motion.div style={{ y: backY }} className="absolute left-[4%] top-0 w-[38%]">
            <ParallaxImage src={HERO_IMAGES.back.src} alt={HERO_IMAGES.back.alt} sizes="22vw" amount={12} className="hero-reveal aspect-[3/4] brightness-[.8]" style={delay(100)} />
          </motion.div>

          <motion.div style={{ y: mainY }} className="absolute right-0 top-[7%] z-10 h-[86%] w-[64%]">
            <div className="hero-reveal relative h-full overflow-hidden bg-zinc-900 shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)]" style={delay(220)}>
              <motion.div style={{ scale: mainScale }} className="absolute inset-0">
                <Image src={HERO_IMAGES.main.src} alt={HERO_IMAGES.main.alt} fill priority sizes="32vw" className="object-cover object-[50%_65%]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div style={{ y: frontY }} className="absolute bottom-0 left-0 z-20 w-[50%]">
            <ParallaxImage src={HERO_IMAGES.front.src} alt={HERO_IMAGES.front.alt} sizes="26vw" amount={12} className="hero-reveal aspect-[4/3] outline outline-8 outline-zinc-950 shadow-[0_24px_48px_-16px_rgba(0,0,0,.9)]" style={delay(340)} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
