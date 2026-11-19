import type { Metadata } from "next";
import { SERVICES_LIST } from "@/config/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getPageMetadata } from "@/config/seo";

export const metadata: Metadata = getPageMetadata(
  "Услуги эвакуатора в Бишкеке",
  "Перевозка легковых автомобилей и помощь после ДТП в Бишкеке. Условия, доступность и стоимость уточняйте при заказе.",
  "/services",
);

export default function ServicesPage() {
  return <div className="py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Услуги эвакуатора в Бишкеке" subtitle="Выберите тип услуги и сообщите водителю о состоянии автомобиля и маршруте. Возможность выполнения и стоимость уточняйте заранее." />
      <div className="grid grid-cols-1 gap-x-12 border-b border-zinc-800 lg:grid-cols-2">
        {SERVICES_LIST.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
      <div className="mt-12 border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-zinc-100">Что сообщить при заказе</h2>
        <ul className="mt-4 grid gap-2 text-sm text-zinc-400 sm:grid-cols-2">
          <li>Марка и модель автомобиля</li><li>Ваше точное местоположение</li><li>Состояние машины и повреждения</li><li>Адрес доставки</li>
        </ul>
      </div>
    </div>
    <div className="mt-16"><FinalCTA /></div>
  </div>;
}
