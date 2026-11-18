import React from "react";
import { Metadata } from "next";
import { Phone, MapPin, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { BUSINESS_CONFIG } from "@/config/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPageMetadata } from "@/config/seo";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

export const metadata: Metadata = getPageMetadata(
  "Контакты эвакуатора в Бишкеке",
  "Эвакуатор «Сапат»: телефон и WhatsApp +996 700 162 550. Работаем 24/7 в Бишкеке, выполняем междугородние перевозки по Кыргызстану и Казахстану по согласованию.",
  "/contacts"
);

export default function ContactsPage() {
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(
    BUSINESS_CONFIG.contacts.whatsappPhone,
    BUSINESS_CONFIG.contacts.defaultWhatsAppMessage
  );

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Контакты"
          title="Контакты для заказа эвакуатора"
          subtitle="Звоните или пишите в WhatsApp круглосуточно. В Бишкеке работаем по городу; междугородний маршрут согласуйте при обращении."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct Dial Card */}
          <div className="rounded-2xl border border-amber-500/30 bg-zinc-900/80 p-8 shadow-xl shadow-amber-500/5">
            <div className="flex items-center gap-3 text-amber-400 mb-6">
              <Phone className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Прямой телефон вызова
              </span>
            </div>

            <div className="text-2xl sm:text-3xl font-black text-zinc-100">
              {BUSINESS_CONFIG.contacts.primaryPhoneFormatted}
            </div>

            <p className="mt-2 text-xs text-zinc-400">
              {BUSINESS_CONFIG.contacts.emergencyHotlineNotice}
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={telLink}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 fill-zinc-950" />
                <span>Позвонить прямо сейчас</span>
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
              >
                <WhatsappIcon className="h-4 w-4" />
                <span>Написать в WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Location & Details Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-zinc-100">Режим работы</div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {BUSINESS_CONFIG.operatingHours}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-zinc-100">
                    Адрес
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {BUSINESS_CONFIG.location.baseAddress}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-zinc-100">
                    Район обслуживания
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    В городе — Бишкек. Междугородние перевозки по Кыргызстану и в Казахстан — по согласованию маршрута.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-200">Способы оплаты:</span> {BUSINESS_CONFIG.paymentMethods.join(", ")}
            </div>
          </div>
        </div>

        {/* Dispatch speed advice */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex items-start gap-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Совет при вызове:</strong> Для
            максимально быстрого выезда отправьте водителю точку геолокации в
            WhatsApp. Это исключает ошибки в названиях улиц или ориентиров, особенно
            на объездной дороге и в пригородных новостройках.
          </div>
        </div>
      </div>
    </div>
  );
}
