export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

/** Owner-provided photos from the company's 2GIS gallery. */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.01.webp",
    alt: "Белый эвакуатор перевозит легковой автомобиль на загородной дороге",
    title: "Перевозка легкового автомобиля",
    width: 750,
    height: 421,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.02.webp",
    alt: "Белый эвакуатор перевозит белый кроссовер по улице Бишкека",
    title: "Работа по городу",
    width: 750,
    height: 556,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.03.webp",
    alt: "Красный эвакуатор перевозит автомобиль по городу",
    title: "Эвакуация автомобиля",
    width: 750,
    height: 950,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.04.webp",
    alt: "Синий эвакуатор перевозит автомобиль в горах",
    title: "Междугородняя перевозка",
    width: 750,
    height: 950,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.02 (1).webp",
    alt: "Эвакуатор перевозит повреждённый микроавтобус",
    title: "Перевозка после ДТП",
    width: 750,
    height: 563,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.03 (1).webp",
    alt: "Эвакуатор перевозит белый микроавтобус",
    title: "Перевозка микроавтобуса",
    width: 750,
    height: 556,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.04 (1).webp",
    alt: "Эвакуатор перевозит легковой автомобиль ночью",
    title: "Работа в любое время",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.04 (2).webp",
    alt: "Эвакуатор перевозит автомобиль на горной дороге",
    title: "Перевозка по маршруту",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.04 (3).webp",
    alt: "Эвакуатор перевозит чёрный автомобиль по городу",
    title: "Эвакуация кроссовера",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/WhatsApp Image 2026-11-18 at 23.28.04 (5).webp",
    alt: "Эвакуатор перевозит спецтехнику",
    title: "Перевозка спецтехники",
    width: 960,
    height: 1280,
  },
];

export const STORY_STAGES = [
  {
    number: "01",
    title: "Нужна перевозка",
    description: "Позвоните или напишите в WhatsApp. Сообщите, где находится автомобиль и куда его доставить.",
    image: GALLERY_IMAGES[1],
  },
  {
    number: "02",
    title: "Погрузка автомобиля",
    description: "Перед заказом расскажите о состоянии машины, повреждениях и примерной массе.",
    image: GALLERY_IMAGES[4],
  },
  {
    number: "03",
    title: "Маршрут согласован",
    description: "Перевозим автомобили и спецтехнику в пределах заявленной нагрузки до 8 тонн.",
    image: GALLERY_IMAGES[7],
  },
  {
    number: "04",
    title: "Доставка автомобиля",
    description: "Согласуйте маршрут и стоимость до начала работ — по Бишкеку или междугороднему направлению.",
    image: GALLERY_IMAGES[6],
  },
];
