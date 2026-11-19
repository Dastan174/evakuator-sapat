import React from "react";
import { MapPin, Route } from "lucide-react";
import { SERVICE_AREAS } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceAreas() {
  const groups = [
    { title: "По городу", Icon: MapPin, areas: SERVICE_AREAS.filter((area) => area.type === "city_district") },
    { title: "Межгород", Icon: Route, areas: SERVICE_AREAS.filter((area) => area.type === "intercity") },
  ];

  return (
    <section id="areas" className="border-b border-zinc-800 bg-zinc-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Где работаем" subtitle="По городу — Бишкек. Междугородние маршруты по Кыргызстану и Казахстану согласуем при заказе." />
        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {groups.map(({ title, Icon, areas }) => (
            <div key={title} className="border-t border-zinc-800 pt-6">
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-400">
                <Icon className="h-4 w-4 text-amber-400" aria-hidden="true" /> {title}
              </h3>
              <ul className="mt-4">
                {areas.map((area) => (
                  <li key={area.id} className="py-3">
                    <p className="font-display text-xl font-semibold tracking-[-0.02em] text-zinc-100 sm:text-2xl">{area.name}</p>
                    <p className="mt-1 text-sm text-zinc-500">{area.etaMinutes}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
