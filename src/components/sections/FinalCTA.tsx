import React from "react";
import { Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { BUSINESS_CONFIG } from "@/config/business";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

export function FinalCTA() {
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, BUSINESS_CONFIG.contacts.defaultWhatsAppMessage);
  return <section className="py-20 sm:py-28 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-xs uppercase tracking-[0.24em] text-amber-400 mb-5">{BUSINESS_CONFIG.brandName} · Бишкек · 24/7</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-100 tracking-tight leading-tight">Нужен эвакуатор?</h2>
      <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">Свяжитесь с нами, чтобы уточнить возможность подачи, стоимость и условия перевозки вашего автомобиля.</p>
      <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-lg mx-auto">
        <a href={telLink} className="flex items-center justify-center gap-3 px-7 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-base transition-colors"><Phone className="w-5 h-5" /><span>{BUSINESS_CONFIG.contacts.primaryPhoneFormatted}</span></a>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-7 py-4 border border-zinc-700 hover:border-emerald-500 text-zinc-100 font-semibold text-base transition-colors"><WhatsappIcon className="h-5 w-5 text-emerald-400" /><span>Написать в WhatsApp</span></a>
      </div>
    </div>
  </section>;
}
