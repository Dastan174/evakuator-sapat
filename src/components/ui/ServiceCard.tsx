import React from "react";
import {
  Car,
  AlertTriangle,
  Wrench,
  Truck,
  Compass,
  BatteryCharging,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { ServiceItem } from "@/types";
import { BUSINESS_CONFIG } from "@/config/business";
import { formatTelUri, formatWhatsAppUri, cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const getIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-amber-400" };
    switch (name) {
      case "Car":
        return <Car {...props} />;
      case "AlertTriangle":
        return <AlertTriangle {...props} />;
      case "Wrench":
        return <Wrench {...props} />;
      case "Truck":
        return <Truck {...props} />;
      case "Compass":
        return <Compass {...props} />;
      case "BatteryCharging":
        return <BatteryCharging {...props} />;
      default:
        return <Car {...props} />;
    }
  };

  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waOrderLink = formatWhatsAppUri(
    BUSINESS_CONFIG.contacts.whatsappPhone,
    `Здравствуйте! Интересует услуга "${service.title}". Марка авто: ___, Местоположение: ___`
  );

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between border border-zinc-800/80 bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1",
        service.isPopular && "ring-1 ring-amber-500/30",
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            {getIcon(service.iconName)}
          </div>
          <div className="text-right max-w-[48%]">
            <span className="inline-block text-sm font-semibold text-amber-400">
              {service.startingPrice}
            </span>
            <div className="text-[11px] text-zinc-500">{service.priceNote}</div>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
          {service.title}
        </h3>

        <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
          {service.shortDesc}
        </p>

        <ul className="mt-5 space-y-2 border-t border-zinc-800/60 pt-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400/80 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2">
        <a
          href={telLink}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold transition-all duration-200 border border-zinc-700/60 hover:border-amber-500"
          aria-label={`Вызвать эвакуатор для ${service.title}`}
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Вызвать</span>
        </a>
        <a
          href={waOrderLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2.5 rounded-lg bg-emerald-700/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-600/30 transition-all duration-200"
          aria-label={`Заказать ${service.title} через WhatsApp`}
        >
          <WhatsappIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
