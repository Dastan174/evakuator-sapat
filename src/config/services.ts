import { ServiceItem, PricingTier, ServiceArea, FAQItem } from "@/types";

export const STARTING_PRICE = 2000;
export const STARTING_PRICE_LABEL = "от 2 000 сомов";

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "passenger-cars", slug: "legkovye-avto", title: "Эвакуация легковых автомобилей",
    shortDesc: "Перевозка легковых автомобилей при поломке, ДТП или необходимости доставки.",
    fullDesc: "Закажите эвакуатор для перевозки легкового автомобиля. Сообщите марку, модель, состояние автомобиля и адреса водителю для точного расчёта.",
    iconName: "Car", startingPrice: STARTING_PRICE, priceNote: "начальная стоимость",
    features: ["Грузоподъёмность до 8 тонн", "Стоимость от 2 000 сомов"], isPopular: false, isConfirmed: true,
  },
  {
    id: "accident-recovery", slug: "posle-dtp", title: "Эвакуация после ДТП",
    shortDesc: "Погрузка и перевозка автомобиля после ДТП с учётом его состояния.",
    fullDesc: "Для заказа перевозки после ДТП сообщите о повреждениях, состоянии колёс и точном местоположении автомобиля.",
    iconName: "TriangleAlert", startingPrice: STARTING_PRICE, priceNote: "начальная стоимость",
    features: ["Оценка состояния перед погрузкой", "Стоимость от 2 000 сомов"], isPopular: false, isConfirmed: true,
  },
  {
    id: "broken-vehicles", slug: "neispravnye-avto", title: "Перевозка неисправных автомобилей",
    shortDesc: "Перевозка автомобиля, который не может продолжить движение самостоятельно.",
    fullDesc: "Для заказа перевозки неисправного автомобиля сообщите неисправность, состояние колёс и рулевого управления.",
    iconName: "Wrench", startingPrice: STARTING_PRICE, priceNote: "начальная стоимость",
    features: ["Для легковых автомобилей и кроссоверов", "Стоимость от 2 000 сомов"], isPopular: false, isConfirmed: true,
  },
  {
    id: "suv-crossovers", slug: "vnedorozhniki", title: "Эвакуация внедорожников",
    shortDesc: "Перевозка кроссоверов и внедорожников в пределах допустимой нагрузки.",
    fullDesc: "Позвоните и сообщите марку, модель и примерную массу автомобиля, чтобы подтвердить детали заказа.",
    iconName: "CarFront", startingPrice: STARTING_PRICE, priceNote: "начальная стоимость",
    features: ["Грузоподъёмность до 8 тонн", "Параметры согласуются при заказе"], isPopular: false, isConfirmed: true,
  },
  {
    id: "minibuses", slug: "mikroavtobusy", title: "Перевозка микроавтобусов",
    shortDesc: "Перевозка микроавтобусов и более крупных автомобилей при допустимой нагрузке.",
    fullDesc: "Сообщите габариты и примерную массу автомобиля, чтобы подтвердить возможность погрузки и маршрут.",
    iconName: "BusFront", startingPrice: STARTING_PRICE, priceNote: "начальная стоимость",
    features: ["Нагрузка до 8 тонн", "Возможность уточняется по параметрам"], isPopular: false, isConfirmed: true,
  },
  {
    id: "special-equipment", slug: "spetstehnika", title: "Перевозка спецтехники",
    shortDesc: "Перевозка спецтехники при соответствии габаритов и нагрузки возможностям эвакуатора.",
    fullDesc: "Перед заказом сообщите тип, массу, габариты техники и маршрут для согласования возможности перевозки.",
    iconName: "Forklift", startingPrice: STARTING_PRICE, priceNote: "начальная стоимость",
    features: ["Нагрузка до 8 тонн", "Габариты и маршрут согласуются заранее"], isPopular: false, isConfirmed: true,
  },
  {
    id: "intercity-towing", slug: "mezhgorod", title: "Междугородняя перевозка",
    shortDesc: "Межгород по Кыргызстану, в Алматы и южные города Казахстана.",
    fullDesc: "Заявлены междугородние перевозки по Кыргызстану, в Алматы и южные города Казахстана. Перед заказом подтвердите маршрут и стоимость.",
    iconName: "Route", startingPrice: STARTING_PRICE, priceNote: "от 2 000 сомов · по маршруту",
    features: ["Кыргызстан", "Алматы и южные города Казахстана"], isPopular: false, isConfirmed: true,
  },
];

export const PRICING_TIERS: PricingTier[] = [
  { id: "standard", title: "Легковой автомобиль", category: "Легковые автомобили", startingPrice: STARTING_PRICE_LABEL, priceNote: "начальная стоимость", description: "Итог зависит от адресов, состояния автомобиля и маршрута.", features: ["Грузоподъёмность до 8 тонн", "Стоимость согласуется до заказа"], isPopular: true },
  { id: "suv", title: "Внедорожник", category: "Кроссоверы и внедорожники", startingPrice: STARTING_PRICE_LABEL, priceNote: "начальная стоимость", description: "Уточним параметры автомобиля и возможность погрузки.", features: ["Нагрузка до 8 тонн", "Расчёт по телефону или WhatsApp"], isPopular: false },
  { id: "complex", title: "После ДТП", category: "Автомобили после ДТП", startingPrice: STARTING_PRICE_LABEL, priceNote: "начальная стоимость", description: "Цена зависит от состояния автомобиля и сложности погрузки.", features: ["Сообщите о повреждениях", "Стоимость согласуется заранее"], isPopular: false },
  { id: "intercity", title: "Междугородняя перевозка", category: "Кыргызстан и Казахстан", startingPrice: STARTING_PRICE_LABEL, priceNote: "начальная стоимость", description: "Маршрут, расстояние и итоговую стоимость согласуем перед заказом.", features: ["Кыргызстан", "Алматы и южные города Казахстана"], isPopular: false },
];

export const SERVICE_AREAS: ServiceArea[] = [
  { id: "bishkek", name: "Бишкек", type: "city_district", etaMinutes: "Заказы принимаются 24/7", highlighted: true },
  { id: "kyrgyzstan", name: "Межгород по Кыргызстану", type: "intercity", etaMinutes: "Маршрут согласуется" },
  { id: "almaty", name: "Алматы и южные города Казахстана", type: "intercity", etaMinutes: "Маршрут согласуется" },
];

export const FAQ_LIST: FAQItem[] = [
  { id: "how-to-order", question: "Как заказать эвакуатор?", answer: "Позвоните по указанному номеру или напишите в WhatsApp. Укажите марку автомобиля, точное местоположение, характер неисправности и адрес доставки." },
  { id: "pricing-calculation", question: "Сколько стоит эвакуатор?", answer: "Начальная стоимость — от 2 000 сомов. Итог зависит от автомобиля, его состояния, сложности погрузки и маршрута. Точную цену согласуем до начала работ." },
  { id: "capacity", question: "Какую нагрузку выдерживает эвакуатор?", answer: "Заявленная нагрузка — до 8 тонн. Возможность перевозки зависит от фактической массы, габаритов автомобиля или спецтехники и маршрута." },
  { id: "transportable-vehicles", question: "Какие автомобили можно перевезти?", answer: "Легковые автомобили, кроссоверы, внедорожники, микроавтобусы, а также спецтехнику в пределах допустимой нагрузки и габаритов." },
  { id: "intercity-service", question: "Куда выполняются междугородние перевозки?", answer: "По Кыргызстану, в Алматы и южные города Казахстана. Конкретный маршрут и стоимость согласуем при заказе." },
];

