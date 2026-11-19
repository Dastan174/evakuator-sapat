import React from "react";
import { ExternalLink } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatWhatsAppUri } from "@/lib/utils";

export function Reviews() {
  const waReviewLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, "Здравствуйте! Хочу оставить отзыв о работе эвакуатора:");
  return (
    <section id="reviews" className="border-b border-zinc-800 bg-zinc-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Отзывы клиентов" subtitle="Публикуем только реальные отзывы с разрешения клиентов." />
        <div className="flex flex-col gap-6 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-zinc-400">[Реальные отзывы клиентов — будут добавлены после подтверждения владельцем]</p>
          <div className="flex flex-wrap gap-3">
            <a href={waReviewLink} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-11 items-center gap-2 border border-zinc-700 px-4 text-sm font-semibold text-zinc-100 hover:border-emerald-500">
              <WhatsAppIcon className="h-4 w-4 text-emerald-400" />Оставить отзыв
            </a>
            {BUSINESS_CONFIG.socials.twoGisLink && (
              <a href={BUSINESS_CONFIG.socials.twoGisLink} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-11 items-center gap-2 border border-zinc-700 px-4 text-sm text-zinc-300 hover:border-zinc-500">
                2GIS <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
