import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a raw phone string into a click-to-call tel URI.
 */
export function formatTelUri(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/**
 * Format a WhatsApp link with a prefilled greeting/order message.
 */
export function formatWhatsAppUri(phone: string, text?: string): string {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${cleanPhone}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
