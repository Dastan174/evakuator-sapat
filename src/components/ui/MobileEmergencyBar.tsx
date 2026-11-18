import React from "react";
import { Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon"
import { BUSINESS_CONFIG } from "@/config/business";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

export function MobileEmergencyBar() {
  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, BUSINESS_CONFIG.contacts.defaultWhatsAppMessage);
  return <div className="fixed bottom-0 inset-x-0 z-50 border-t border-zinc-800 bg-zinc-950/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
    <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
      <a href={telLink} aria-label="Позвонить по номеру эвакуатора" className="flex min-h-12 items-center justify-center gap-2 bg-amber-500 px-3 text-sm font-bold text-zinc-950 hover:bg-amber-400"><Phone className="h-4 w-4" />Позвонить</a>
      <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Написать в WhatsApp" className="flex min-h-12 items-center justify-center gap-2 bg-emerald-700 px-3 text-sm font-semibold text-white hover:bg-emerald-600"><WhatsappIcon className="h-4 w-4" />WhatsApp</a>
    </div>
  </div>;
}
