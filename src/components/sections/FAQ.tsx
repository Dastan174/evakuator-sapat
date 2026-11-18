"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { FAQ_LIST } from "@/config/services";
import { BUSINESS_CONFIG } from "@/config/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatTelUri, cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("how-to-order");
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-zinc-900/30 border-y border-zinc-850 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Частые вопросы"
          title="Ответы на популярные вопросы водителей"
          subtitle="Ответы на вопросы о заказе эвакуатора в Бишкеке и междугородней перевозке."
        />

        <div className="space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-amber-500/40 bg-zinc-900/90 shadow-md"
                    : "border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-zinc-100 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-850 text-zinc-300 transition-transform duration-200 flex-shrink-0",
                      isOpen && "rotate-180 text-amber-400 bg-amber-500/10"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-zinc-850/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-100">
                Остались вопросы по вашему автомобилю?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Позвоните напрямую водителю — консультация бесплатна.
              </p>
            </div>
          </div>

          <a
            href={telLink}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Задать вопрос водителю</span>
          </a>
        </div>
      </div>
    </section>
  );
}
