"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, Truck } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { BUSINESS_CONFIG } from "@/config/business";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, BUSINESS_CONFIG.contacts.defaultWhatsAppMessage);
  return <>
    <header className="fixed top-0 inset-x-0 z-40 border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[72px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={BUSINESS_CONFIG.brandName}>
          <span className="flex h-10 w-10 items-center justify-center bg-amber-500 text-zinc-950"><Truck className="w-5 h-5" /></span>
          <span className="leading-tight"><span className="block text-sm sm:text-base font-bold tracking-tight text-zinc-100">{BUSINESS_CONFIG.brandName}</span><span className="block text-[10px] uppercase tracking-[0.18em] text-zinc-500">Бишкек · Межгород</span></span>
        </Link>
        <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-zinc-300" aria-label="Основная навигация">
          {MAIN_NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} className="hover:text-amber-400 transition-colors">{item.title}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Написать в WhatsApp" className="hidden sm:flex h-10 w-10 items-center justify-center border border-zinc-700 text-emerald-400 hover:border-emerald-500"><WhatsappIcon className="h-4 w-4" /></a>
          <a href={telLink} className="hidden md:block text-right"><span className="block text-xs text-zinc-500">Заказать эвакуатор</span><span className="text-sm font-bold text-zinc-100">{BUSINESS_CONFIG.contacts.primaryPhoneFormatted}</span></a>
          <a href={telLink} className="inline-flex items-center gap-2 bg-amber-500 px-3 sm:px-4 py-2.5 text-xs font-bold text-zinc-950 hover:bg-amber-400"><Phone className="h-4 w-4" /><span className="hidden sm:inline">Позвонить</span></a>
          <button type="button" onClick={() => setIsMobileMenuOpen(true)} className="xl:hidden min-h-11 min-w-11 p-2 text-zinc-300 hover:text-white" aria-label="Открыть меню" aria-expanded={isMobileMenuOpen}><Menu className="w-5 h-5" /></button>
        </div>
      </div></div>
    </header>
    <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
  </>;
}
