import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_LIST } from "@/config/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="border-b border-zinc-800 bg-zinc-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Что перевозим" subtitle="Легковые автомобили, внедорожники, микроавтобусы и спецтехника — в пределах нагрузки до 8 тонн. Условия уточняйте перед заказом." />
        <div className="grid grid-cols-1 gap-x-12 border-b border-zinc-800 lg:grid-cols-2">
          {SERVICES_LIST.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
        <Link href="/services" className="group mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
          Подробнее об услугах <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
