"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { BUSINESS_CONFIG } from "@/config/business";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "unset";
      return;
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(
    BUSINESS_CONFIG.contacts.whatsappPhone,
    BUSINESS_CONFIG.contacts.defaultWhatsAppMessage
  );

  return (
    <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true" aria-label="Мобильное меню">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
            <div>
              <span className="text-base font-extrabold text-zinc-100 tracking-tight">
                {BUSINESS_CONFIG.brandName}
              </span>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Бишкек · Кыргызстан · Казахстан
              </p>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
              aria-label="Закрыть меню"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {MAIN_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/80 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Contact actions */}
        <div className="pt-6 border-t border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{BUSINESS_CONFIG.operatingHours}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{BUSINESS_CONFIG.location.baseAddress}</span>
          </div>

          <a
            href={telLink}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-md"
          >
            <Phone className="w-4 h-4 fill-zinc-950" />
            <span>{BUSINESS_CONFIG.contacts.primaryPhoneFormatted}</span>
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Написать в WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
