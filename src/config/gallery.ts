export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const photo = (name: string, alt: string, width: number, height: number): GalleryImage => ({
  src: `/images/WhatsApp Image 2026-11-18 at ${name}.webp`,
  alt,
  width,
  height,
});

/** Owner-provided photos from the company's 2GIS gallery. Alt text describes what is actually in frame. */
export const PHOTOS = {
  night: photo("23.28.03 (4)", "Красный эвакуатор с белым внедорожником ночью у жилого комплекса", 722, 955),
  sunset: photo("23.28.04", "Белый эвакуатор с седаном на платформе на фоне заката", 722, 950),
  mountainSedan: photo("23.28.03 (3)", "Седан на платформе эвакуатора на горной трассе", 542, 955),
  redSuv: photo("23.28.02", "Красный эвакуатор везёт синий внедорожник по улице", 750, 556),
  cityCrossover: photo("23.28.03 (1)", "Белый эвакуатор перевозит белый кроссовер по городу", 750, 556),
  blackSuv: photo("23.28.02 (4)", "Синий эвакуатор с чёрным внедорожником на платформе", 750, 422),
  loader: photo("23.28.04 (5)", "Синий грузовой эвакуатор перевозит красный мини-погрузчик", 960, 1280),
  mountainCrossover: photo("23.28.02 (2)", "Синий эвакуатор с белым кроссовером на горной дороге", 542, 958),
  lightTruck: photo("23.28.01", "Синий эвакуатор с белым грузовиком на платформе", 750, 421),
  redSedan: photo("23.28.02 (1)", "Красный эвакуатор с белым седаном на платформе", 750, 563),
  minibus: photo("23.28.02 (3)", "Синий эвакуатор перевозит белый микроавтобус", 542, 952),
  silverSedan: photo("23.28.03", "Белый эвакуатор с серебристым седаном на городской улице", 722, 950),
  van: photo("23.28.03 (2)", "Синий эвакуатор с белым фургоном у дороги", 750, 422),
  evening: photo("23.28.04 (1)", "Синий грузовой эвакуатор с легковым автомобилем вечером", 960, 1280),
  forklift: photo("23.28.04 (2)", "Синий грузовой эвакуатор перевозит вилочный погрузчик", 960, 1280),
  forkliftSide: photo("23.28.04 (3)", "Вилочный погрузчик на платформе синего эвакуатора", 960, 1280),
};

export type PhotoKey = keyof typeof PHOTOS;

/** Hero composition: main frame, back frame, front frame. */
export const HERO_IMAGES = { main: PHOTOS.night, back: PHOTOS.mountainSedan, front: PHOTOS.redSuv };

export const STORY_STAGES = [
  {
    number: "01",
    title: "Позвоните или напишите",
    description: "Сообщите, где находится автомобиль и куда его доставить. Звонки и WhatsApp принимаем круглосуточно.",
    image: PHOTOS.cityCrossover,
  },
  {
    number: "02",
    title: "Опишите автомобиль",
    description: "Марка, состояние, повреждения и примерная масса — по ним согласуем погрузку и стоимость.",
    image: PHOTOS.blackSuv,
  },
  {
    number: "03",
    title: "Согласуйте маршрут",
    description: "Перевозим автомобили и спецтехнику в пределах нагрузки до 8 тонн — по Бишкеку и межгороду.",
    image: PHOTOS.loader,
  },
  {
    number: "04",
    title: "Доставка",
    description: "Стоимость и маршрут фиксируем до начала работ, затем доставляем автомобиль по адресу.",
    image: PHOTOS.mountainCrossover,
  },
];

/** Gallery shows the photos not already used above, so no frame repeats on the page. */
export const GALLERY_IMAGES: GalleryImage[] = [
  PHOTOS.lightTruck,
  PHOTOS.minibus,
  PHOTOS.forklift,
  PHOTOS.redSedan,
  PHOTOS.evening,
  PHOTOS.van,
  PHOTOS.silverSedan,
  PHOTOS.forkliftSide,
  PHOTOS.sunset,
];
