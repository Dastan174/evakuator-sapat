import React from "react";
import { PhoneCall, MapPin, Truck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUSINESS_CONFIG } from "@/config/business";
import { HOW_IT_WORKS_STEPS } from "@/config/services";
import { formatTelUri } from "@/lib/utils";
import { MotionReveal } from "@/components/ui/MotionReveal";

const ICONS = [PhoneCall, MapPin, Truck];

export function HowItWorks() {
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  return <section id="how-it-works" className="py-16 sm:py-24 bg-zinc-900/40 border-y border-zinc-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading badge="Порядок работы" title="Как заказать эвакуатор" subtitle="Подготовьте информацию об автомобиле и адресах, чтобы уточнить возможность перевозки и стоимость." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {HOW_IT_WORKS_STEPS.map((item, idx) => {
          const Icon = ICONS[idx] ?? Truck;
          return <MotionReveal key={item.step} delay={idx * 0.08}>
            <article className="h-full border border-zinc-800 bg-zinc-950/70 p-7">
            <div className="flex items-center justify-between mb-6"><span className="text-3xl font-black text-amber-500 font-mono">{item.step}</span><Icon className="w-6 h-6 text-amber-400" aria-hidden="true" /></div>
            <h3 className="text-lg font-bold text-zinc-100 mb-3">{item.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            {idx === 0 && <a href={telLink} className="mt-5 inline-block text-sm font-semibold text-amber-400 hover:text-amber-300">Позвонить →</a>}
            </article>
          </MotionReveal>;
        })}
      </div>
    </div>
  </section>;
}
