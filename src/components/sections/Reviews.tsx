import React from "react";
import { ExternalLink } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { BUSINESS_CONFIG } from "@/config/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatWhatsAppUri } from "@/lib/utils";

export function Reviews() {
  const waReviewLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, "Здравствуйте! Хочу оставить отзыв о работе эвакуатора:");
  return <section id="reviews" className="py-16 sm:py-24 bg-zinc-950">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading badge="Отзывы" title="Ваш опыт важен" subtitle="Мы не публикуем неподтвержденные отзывы. Здесь появятся реальные отзывы клиентов после получения разрешения на публикацию." />
      <div className="border border-dashed border-zinc-700 bg-zinc-900/30 p-8 sm:p-12 text-center">
        <p className="text-sm sm:text-base text-zinc-300">[Реальные отзывы клиентов — будут добавлены после подтверждения владельцем]</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href={waReviewLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"><WhatsappIcon className="h-4 w-4" />Написать отзыв</a>
          {BUSINESS_CONFIG.socials.twoGisLink && <a href={BUSINESS_CONFIG.socials.twoGisLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 border border-zinc-700 text-zinc-300 text-sm hover:border-zinc-500"><span>2GIS</span><ExternalLink className="w-3.5 h-3.5" /></a>}
        </div>
      </div>
    </div>
  </section>;
}
