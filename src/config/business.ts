import { BusinessConfig } from "@/types";

/** Replace every marked placeholder with owner-confirmed information before launch. */
export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: 'Эвакуатор «Сапат»',
  legalEntityNotice: "[Требуется подтверждение: юридическое наименование]",
  tagline: "Эвакуация автомобилей в Бишкеке и междугородние перевозки",
  subTagline: "Круглосуточная эвакуация автомобилей в Бишкеке. Междугородние маршруты по Кыргызстану и в Казахстан — доступность уточняйте при заказе.",
  operatingHours: "Круглосуточно, 24/7",
  isAvailable247: true,
  paymentMethods: ["Наличные", "Перевод по QR-коду"],
  vehicleCapacity: "до 8 тонн",
  contacts: {
    primaryPhone: "+996700162550",
    primaryPhoneFormatted: "+996 700 162 550",
    whatsappPhone: "+996700162550",
    whatsappPhoneFormatted: "+996 700 162 550",
    defaultWhatsAppMessage:
      "Здравствуйте! Мне нужен эвакуатор. Марка авто: ___, местоположение: ___, куда доставить: ___",
    emergencyHotlineNotice: "Заказы принимаются круглосуточно.",
  },
  location: {
    city: "Бишкек",
    region: "Кыргызстан",
    country: "Кыргызстан",
    baseAddress: "[Точный адрес не предоставлен; зона обслуживания — город Бишкек]",
    googleMapsQuery: "",
    coordinates: { lat: 0, lng: 0 },
  },
  socials: {},
  disclaimerText:
    "Стоимость, возможность и сроки подачи уточняйте по телефону до оформления заказа.",
};
