import React from "react";
import Link from "next/link";
import { ArrowRight, Car, CarFront, BusFront, Forklift, Route, TriangleAlert, Wrench, Phone, type LucideIcon } from "lucide-react";
import { ServiceItem } from "@/types";
import { BUSINESS_CONFIG } from "@/config/business";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = { Car, CarFront, BusFront, Forklift, Route, TriangleAlert, Wrench };

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = ICONS[service.iconName] ?? Car;
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waOrderLink = formatWhatsAppUri(
    BUSINESS_CONFIG.contacts.whatsappPhone,
    `Здравствуйте! Интересует услуга "${service.title}". Марка авто: ___, Местоположение: ___`,
  );

  return (
    <article className="group flex gap-5 border-t border-zinc-800 py-7 transition-colors hover:border-amber-500/60">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-zinc-800 bg-zinc-900 text-amber-400 transition-colors group-hover:border-amber-500/50">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-bold text-zinc-100">
          <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 underline-offset-4 hover:text-amber-400 hover:underline">
            {service.title}
            <ArrowRight className="h-4 w-4 shrink-0 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-400" aria-hidden="true" />
          </Link>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:text-base">{service.shortDesc}</p>
        <p className="mt-2 text-sm text-zinc-500">{service.features.join(" · ")}</p>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        <a href={telLink} aria-label={`Позвонить: ${service.title}`} className="press flex h-11 w-11 items-center justify-center border border-zinc-700 text-zinc-200 hover:border-amber-500 hover:bg-amber-500 hover:text-zinc-950">
          <Phone className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href={waOrderLink} target="_blank" rel="noopener noreferrer" aria-label={`Написать в WhatsApp: ${service.title}`} className="press flex h-11 w-11 items-center justify-center border border-zinc-700 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
          <WhatsAppIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
