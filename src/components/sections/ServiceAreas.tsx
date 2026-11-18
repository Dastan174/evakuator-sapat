"use client";

import React, { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { SERVICE_AREAS } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUSINESS_CONFIG } from "@/config/business";
import { formatTelUri, cn } from "@/lib/utils";

export function ServiceAreas() {
  const [activeTab, setActiveTab] = useState<"city_district" | "intercity">("city_district");
  const filteredAreas = SERVICE_AREAS.filter((area) => area.type === activeTab);
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const tabs = [{ key: "city_district", label: "Город Бишкек" }, { key: "intercity", label: "Межгород" }] as const;
  return <section id="areas" className="py-16 sm:py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading badge="Зоны обслуживания" title="Эвакуатор по Бишкеку и междугородние маршруты" subtitle="В пределах города зона работы — Бишкек. Междугородние направления по Кыргызстану и Казахстану согласуйте при заказе." />
      <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Зоны обслуживания">
        {tabs.map((tab) => <button key={tab.key} role="tab" aria-selected={activeTab === tab.key} onClick={() => setActiveTab(tab.key)} className={cn("px-4 py-2.5 text-sm font-semibold transition-colors", activeTab === tab.key ? "bg-amber-500 text-zinc-950" : "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white")}>{tab.label}</button>)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="tabpanel">
        {filteredAreas.map((area) => <div key={area.id} className="flex items-center justify-between border border-zinc-800 bg-zinc-900/50 p-5">
          <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-amber-400" /><div><h3 className="text-sm font-bold text-zinc-100">{area.name}</h3><p className="mt-1 text-xs text-zinc-500">{area.etaMinutes}</p></div></div>
          <a href={telLink} aria-label={`Уточнить маршрут: ${area.name}`} className="p-2.5 bg-zinc-800 text-zinc-200 hover:bg-amber-500 hover:text-zinc-950"><Phone className="w-4 h-4" /></a>
        </div>)}
      </div>
      <p className="mt-6 text-center text-xs text-zinc-500">В пределах города обслуживается Бишкек. Точный адрес подачи и маршрут согласуем при заказе.</p>
    </div>
  </section>;
}
