import React from "react";
import { Plus } from "lucide-react";
import { FAQ_LIST } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Native <details>: keyboard and screen-reader accessible without client JS. */
export function FAQ() {
  return (
    <section id="faq" className="border-b border-zinc-800 bg-zinc-900/40 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <SectionHeading title="Частые вопросы" subtitle="О заказе, цене и междугородних перевозках." className="mb-0" />
        <div className="border-b border-zinc-800">
          {FAQ_LIST.map((faq, index) => (
            <details key={faq.id} open={index === 0} className="group border-t border-zinc-800">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-bold text-zinc-100 hover:text-amber-400 sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="h-5 w-5 shrink-0 text-amber-400 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
