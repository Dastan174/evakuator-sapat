import React from "react";
import { Truck, CircleDollarSign, Weight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ADVANTAGES_LIST } from "@/config/services";

const ICONS = [CircleDollarSign, Weight, Truck];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="О компании" title="Эвакуатор «Сапат» — Бишкек и межгород" subtitle="Работаем круглосуточно. Перевозим автомобили и спецтехнику до 8 тонн по Бишкеку и согласованным междугородним маршрутам." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ADVANTAGES_LIST.map((item, index) => {
            const Icon = ICONS[index] ?? Truck;
            return <article key={item.id} className="border-l-2 border-amber-500/70 bg-zinc-900/40 p-6">
              <Icon className="w-6 h-6 text-amber-400 mb-5" aria-hidden="true" />
              <h3 className="text-base font-bold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
