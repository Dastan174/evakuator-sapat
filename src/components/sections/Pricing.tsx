import React from "react";
import { Check, Phone, MessageSquare, AlertCircle } from "lucide-react";
import { PRICING_TIERS } from "@/config/services";
import { BUSINESS_CONFIG } from "@/config/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatTelUri, formatWhatsAppUri, cn } from "@/lib/utils";

export function Pricing() {
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-zinc-900/30 border-y border-zinc-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Стоимость"
          title="Уточните цену до оформления заказа"
          subtitle="Начальная стоимость — от 2 000 сомов. Итог зависит от автомобиля, состояния, маршрута и сложности погрузки."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {PRICING_TIERS.map((tier) => {
            const waTierLink = formatWhatsAppUri(
              BUSINESS_CONFIG.contacts.whatsappPhone,
              `Здравствуйте! Хочу уточнить цену на тариф "${tier.title}". Марка авто: ___, Маршрут: ___`
            );

            return (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col justify-between rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300",
                  tier.isPopular
                    ? "border-amber-500/50 bg-zinc-900/90 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30 -translate-y-1"
                    : "border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700"
                )}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                    Популярный тариф
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {tier.category}
                  </div>

                  <h3 className="mt-1 text-lg font-bold text-zinc-100">
                    {tier.title}
                  </h3>

                  <div className="mt-4 mb-2">
                    <span className="text-2xl sm:text-3xl font-black text-zinc-100">
                      {tier.startingPrice}
                    </span>
                    <span className="block text-xs text-zinc-400 mt-0.5">
                      {tier.priceNote}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                    {tier.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-zinc-850 pt-5">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-850 space-y-2">
                  <a
                    href={telLink}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-md transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 fill-zinc-950" />
                    <span>Узнать точную цену</span>
                  </a>

                  <a
                    href={waTierLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Расчет в WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing notice box */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 sm:p-6 flex items-start gap-3.5 max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <span className="font-semibold text-zinc-200">
              Важная информация о тарификации:
            </span>{" "}
            Указана начальная стоимость от 2 000 сомов. Точную цену и условия согласуем до оформления заказа.
          </div>
        </div>
      </div>
    </section>
  );
}
