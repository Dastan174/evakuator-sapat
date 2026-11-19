import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { TowTruckIcon, WhatsAppIcon } from "@/components/ui/icons";
import { BUSINESS_CONFIG } from "@/config/business";
import { FOOTER_QUICK_LINKS, MAIN_NAV_ITEMS } from "@/config/navigation";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

export function Footer() {
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, BUSINESS_CONFIG.contacts.defaultWhatsAppMessage);
  return <footer className="bg-zinc-950 border-t border-zinc-800 pt-14 pb-28 sm:pb-12 text-zinc-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 pb-10 border-b border-zinc-800">
        <div><Link href="/" className="inline-flex items-center gap-3 text-zinc-100 font-bold"><TowTruckIcon className="h-7 w-7 text-amber-400" />{BUSINESS_CONFIG.brandName}</Link><p className="mt-4 text-sm leading-relaxed">{BUSINESS_CONFIG.tagline}.</p><p className="mt-4 text-xs text-zinc-500">{BUSINESS_CONFIG.legalEntityNotice}</p></div>
        <div><h2 className="text-xs font-semibold tracking-widest text-zinc-200 uppercase mb-4">Навигация</h2><ul className="space-y-2.5 text-sm">{MAIN_NAV_ITEMS.map((item) => <li key={item.href}><Link href={item.href} className="hover:text-amber-400">{item.title}</Link></li>)}</ul></div>
        <div><h2 className="text-xs font-semibold tracking-widest text-zinc-200 uppercase mb-4">Услуги</h2><ul className="space-y-2.5 text-sm">{FOOTER_QUICK_LINKS.map((item) => <li key={item.title}><Link href={item.href} className="hover:text-amber-400">{item.title}</Link></li>)}</ul></div>
        <div><h2 className="text-xs font-semibold tracking-widest text-zinc-200 uppercase mb-4">Связаться</h2><div className="space-y-3 text-sm"><p className="flex gap-2"><Clock className="w-4 h-4 text-amber-400 shrink-0" />{BUSINESS_CONFIG.operatingHours}</p><p className="flex gap-2"><MapPin className="w-4 h-4 text-amber-400 shrink-0" /><span>{BUSINESS_CONFIG.location.baseAddress}</span></p></div><div className="mt-4 space-y-2"><a href={telLink} className="flex items-center gap-2 border border-zinc-700 px-3 py-2.5 text-zinc-100 hover:border-amber-500"><Phone className="w-4 h-4 text-amber-400" />{BUSINESS_CONFIG.contacts.primaryPhoneFormatted}</a><a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-zinc-700 px-3 py-2.5 text-zinc-100 hover:border-emerald-500"><WhatsAppIcon className="w-4 h-4 text-emerald-400" />WhatsApp</a></div></div>
      </div>
      <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-zinc-500"><p>© {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. Все права защищены.</p><p>Бишкек · Кыргызстан · Межгород по согласованию</p></div>
    </div>
  </footer>;
}
