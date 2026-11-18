"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Phone, MessageSquare, Clock, ArrowDownRight, ShieldCheck } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import { GALLERY_IMAGES } from "@/config/gallery";
import { STARTING_PRICE_LABEL } from "@/config/services";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const truckY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 24]);
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, BUSINESS_CONFIG.contacts.defaultWhatsAppMessage);
  const heroImage = GALLERY_IMAGES[0];

  return (
    <section ref={containerRef} className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pb-16 pt-8 [@media(max-width:767px)]:min-h-0 sm:pb-24 sm:pt-12">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="text-center lg:col-span-7 lg:text-left">
            <MotionReveal>
              <div className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-zinc-400 lg:justify-start">
                <span className="h-px w-9 bg-amber-500" /> Эвакуатор 24/7 · Бишкек
              </div>
              <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-[-0.04em] text-zinc-100 sm:text-6xl lg:text-7xl">
                Эвакуатор в <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent">Бишкеке</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg lg:mx-0">
                Эвакуатор до 8 тонн для легковых автомобилей, внедорожников, микроавтобусов и спецтехники. Бишкек и межгород. Стоимость — от 2 000 сомов.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.12} className="mt-8 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center lg:justify-start">
              <a href={telLink} className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-7 py-4 text-base font-black text-zinc-950 shadow-xl shadow-amber-500/25 transition-all duration-200 hover:from-amber-400 hover:to-amber-300 active:scale-95 sm:text-lg">
                <Phone className="h-5 w-5 fill-zinc-950 transition-transform duration-200 group-hover:rotate-12" />
                <span>Вызвать эвакуатор</span>
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl border border-emerald-500/30 bg-zinc-900 px-6 py-4 text-base font-bold text-emerald-400 shadow-lg shadow-black/40 transition-all duration-200 hover:border-emerald-500/50 hover:bg-zinc-800 hover:text-emerald-300 active:scale-95 sm:text-lg">
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>Написать в WhatsApp</span>
              </a>
            </MotionReveal>

            <MotionReveal delay={0.2} className="mt-9 border-t border-zinc-800 pt-5 text-sm text-zinc-400">
              <Clock className="mr-2 inline h-4 w-4 text-amber-400" />{BUSINESS_CONFIG.operatingHours}
              <span className="mx-2 text-zinc-700">·</span><ShieldCheck className="mr-1 inline h-4 w-4 text-emerald-400" />{STARTING_PRICE_LABEL}
            </MotionReveal>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div style={{ y: truckY }} className="relative flex w-full items-center justify-center max-md:transform-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/50">
                <Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="(max-width: 1024px) 100vw, 41vw" className="pointer-events-none object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/45 to-transparent p-5 pt-16">
                  <ArrowDownRight className="absolute right-5 top-5 h-6 w-6 text-amber-400" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.2em] text-amber-400">Фотография техники</span>
                  <p className="mt-1 text-sm text-white">Реальная техника компании</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
