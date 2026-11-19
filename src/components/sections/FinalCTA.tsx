import React from "react";
import { Phone } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

export function FinalCTA() {
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, BUSINESS_CONFIG.contacts.defaultWhatsAppMessage);
  return (
    <section className="bg-amber-500 py-16 text-zinc-950 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Нужен эвакуатор?</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-900 sm:text-lg">Звоните или пишите круглосуточно — согласуем подачу, стоимость и маршрут.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={telLink} className="press inline-flex min-h-14 items-center justify-center gap-3 bg-zinc-950 px-7 text-base font-bold text-white hover:bg-zinc-800">
            <Phone className="h-5 w-5" aria-hidden="true" /><span className="tabular-nums">{BUSINESS_CONFIG.contacts.primaryPhoneFormatted}</span>
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-14 items-center justify-center gap-3 border-2 border-zinc-950 px-7 text-base font-bold hover:bg-zinc-950 hover:text-white">
            <WhatsAppIcon className="h-5 w-5" />WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
