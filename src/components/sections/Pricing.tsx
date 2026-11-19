import React from "react";
import { Phone } from "lucide-react";
import { PRICING_TIERS, STARTING_PRICE } from "@/config/services";
import { BUSINESS_CONFIG } from "@/config/business";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

export function Pricing() {
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, "Здравствуйте! Хочу узнать стоимость эвакуатора. Марка авто: ___, откуда: ___, куда: ___");

  return (
    <section id="pricing" className="border-b border-zinc-800 bg-zinc-900/40 py-16 sm:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <h2 id="pricing-title" className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-100 sm:text-4xl lg:text-5xl">Стоимость эвакуатора</h2>
          <p className="mt-8 font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none tracking-[-0.04em] text-amber-400">
            <span className="text-[0.4em] font-semibold text-zinc-400">от </span>{STARTING_PRICE.toLocaleString("ru-RU")}<span className="text-[0.4em] font-semibold text-zinc-400"> сом</span>
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
            Итог зависит от автомобиля, его состояния, сложности погрузки и маршрута. Точную цену называем до начала работ. Оплата: {BUSINESS_CONFIG.paymentMethods.map((method) => method[0].toLowerCase() + method.slice(1)).join(" или ")}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={telLink} className="press inline-flex min-h-12 items-center justify-center gap-2 bg-amber-500 px-5 text-sm font-bold text-zinc-950 hover:bg-amber-400">
              <Phone className="h-4 w-4" aria-hidden="true" /> Узнать точную цену
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-12 items-center justify-center gap-2 border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 hover:border-emerald-500">
              <WhatsAppIcon className="h-4 w-4 text-emerald-400" /> Расчёт в WhatsApp
            </a>
          </div>
        </div>

        <dl className="self-end border-b border-zinc-800">
          {PRICING_TIERS.map((tier) => (
            <div key={tier.id} className="grid gap-1 border-t border-zinc-800 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <dt className="text-base font-bold text-zinc-100">{tier.category}</dt>
              <dd className="text-base leading-relaxed text-zinc-400">{tier.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
