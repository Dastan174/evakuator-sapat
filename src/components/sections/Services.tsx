import React from "react";
import Link from "next/link";
import { SERVICES_LIST } from "@/config/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function Services() {
  return <section id="services" className="py-16 sm:py-24 bg-zinc-950/60 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading badge="Услуги" title="Перевозка автомобилей в Бишкеке" subtitle="Эвакуация легковых автомобилей, перевозка после ДТП и междугородние маршруты. Состав и условия услуг уточняйте перед заказом." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES_LIST.map((service, index) => (
          <MotionReveal key={service.id} delay={index * 0.06}>
            <ServiceCard service={service} />
          </MotionReveal>
        ))}
      </div>
      <div className="mt-8 text-center"><Link href="/services" className="text-sm font-semibold text-amber-400 hover:text-amber-300">Подробнее об услугах →</Link></div>
    </div>
  </section>;
}
