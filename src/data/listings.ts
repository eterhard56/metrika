export type Listing = {
  id: string;
  title: string;
  rooms: number;
  area: number;
  kitchen?: number;
  floor: number;
  floors: number;
  price: number;
  pricePerMeter: number;
  district: string;
  address: string;
  type: "secondary" | "newbuild";
  finish: "евро" | "косметика" | "без отделки" | "дизайнерский";
  tags: string[];
  highlight: string;
  image: string;
  featured: boolean;
  avitoUrl: string;
};

/** Топ-офферы каталога Метрики (Оренбург). Актуальная лента — на Avito бренда. */
export const listings: Listing[] = [
  {
    id: "m-01",
    title: "Светлая двушка у Салмыша",
    rooms: 2,
    area: 54.2,
    kitchen: 12,
    floor: 7,
    floors: 17,
    price: 5_890_000,
    pricePerMeter: 108_672,
    district: "Дзержинский",
    address: "ул. Салмышская",
    type: "secondary",
    finish: "евро",
    tags: ["ипотека", "мебель", "вид во двор"],
    highlight: "Топ по цене/м² в районе",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-02",
    title: "Однушка с ремонтом под ключ",
    rooms: 1,
    area: 38.4,
    kitchen: 10,
    floor: 12,
    floors: 17,
    price: 4_250_000,
    pricePerMeter: 110_677,
    district: "Дзержинский",
    address: "пр-т Дзержинского",
    type: "secondary",
    finish: "евро",
    tags: ["сдан дом", "лифт", "парковка"],
    highlight: "Готова к заезду",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-03",
    title: "Трёшка с панорамным светом",
    rooms: 3,
    area: 78.6,
    kitchen: 14,
    floor: 9,
    floors: 16,
    price: 8_450_000,
    pricePerMeter: 107_506,
    district: "Центральный",
    address: "ул. Туркестанская",
    type: "secondary",
    finish: "дизайнерский",
    tags: ["семья", "школы рядом", "кладовая"],
    highlight: "Флагман подсемейной подборки",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-04",
    title: "Новостройка без отделки",
    rooms: 2,
    area: 58.3,
    floor: 4,
    floors: 17,
    price: 6_120_000,
    pricePerMeter: 104_974,
    district: "Дзержинский",
    address: "ЖК «Фамильные кварталы»",
    type: "newbuild",
    finish: "без отделки",
    tags: ["от застройщика", "рассрочка", "двор без машин"],
    highlight: "Чистый холст под ваш ремонт",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-05",
    title: "Уютная двушка в Промышленном",
    rooms: 2,
    area: 47.5,
    kitchen: 9,
    floor: 5,
    floors: 9,
    price: 4_690_000,
    pricePerMeter: 98_737,
    district: "Промышленный",
    address: "ул. Новая",
    type: "secondary",
    finish: "косметика",
    tags: ["торг", "тихий двор", "транспорт"],
    highlight: "Лучший входной чек среди топа",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-06",
    title: "Студия для старта",
    rooms: 0,
    area: 28.0,
    kitchen: 8,
    floor: 3,
    floors: 12,
    price: 3_150_000,
    pricePerMeter: 112_500,
    district: "Ленинский",
    address: "ул. Пролетарская",
    type: "secondary",
    finish: "евро",
    tags: ["инвестиция", "сдана", "центр"],
    highlight: "Компактная точка входа",
    image:
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-07",
    title: "Семейная 3-к с лоджией",
    rooms: 3,
    area: 74.0,
    kitchen: 13,
    floor: 6,
    floors: 10,
    price: 7_280_000,
    pricePerMeter: 98_378,
    district: "Дзержинский",
    address: "ул. Родимцева",
    type: "secondary",
    finish: "евро",
    tags: ["детсад", "парковка", "кладовая"],
    highlight: "Баланс площади и цены",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-08",
    title: "Однушка с видом на бульвар",
    rooms: 1,
    area: 42.0,
    kitchen: 11,
    floor: 15,
    floors: 17,
    price: 4_980_000,
    pricePerMeter: 118_571,
    district: "Центральный",
    address: "ул. Советская",
    type: "secondary",
    finish: "дизайнерский",
    tags: ["высокий этаж", "мебель", "техника"],
    highlight: "Премиум-локация в топе",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-09",
    title: "Просторная двушка у парка",
    rooms: 2,
    area: 62.1,
    kitchen: 12,
    floor: 4,
    floors: 20,
    price: 6_750_000,
    pricePerMeter: 108_696,
    district: "Дзержинский",
    address: "ул. Брестская",
    type: "newbuild",
    finish: "евро",
    tags: ["новостройка", "ипотека 5.5%", "паркинг"],
    highlight: "Рядом с офисом Метрики",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-10",
    title: "Классика 2-к в кирпичном доме",
    rooms: 2,
    area: 50.3,
    kitchen: 8,
    floor: 5,
    floors: 9,
    price: 4_700_000,
    pricePerMeter: 93_439,
    district: "Промышленный",
    address: "ул. Салмышская",
    type: "secondary",
    finish: "косметика",
    tags: ["торг уместен", "школа", "магазины"],
    highlight: "Сильный кандидат под ремонт",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-11",
    title: "Пентхаус-настроение: 3-к 81 м²",
    rooms: 3,
    area: 81.1,
    kitchen: 16,
    floor: 16,
    floors: 17,
    price: 9_650_000,
    pricePerMeter: 118_989,
    district: "Дзержинский",
    address: "пр-т Гагарина",
    type: "secondary",
    finish: "дизайнерский",
    tags: ["панорама", "гардероб", "два санузла"],
    highlight: "Самый статусный лот недели",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d36b3d?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
  {
    id: "m-12",
    title: "Компактная 1-к для ипотеки",
    rooms: 1,
    area: 36.0,
    kitchen: 9,
    floor: 6,
    floors: 17,
    price: 3_790_000,
    pricePerMeter: 105_278,
    district: "Ленинский",
    address: "ул. Чкалова",
    type: "secondary",
    finish: "евро",
    tags: ["первый взнос", "лифт", "чистый подъезд"],
    highlight: "Мягкий старт в собственность",
    image:
      "https://images.unsplash.com/photo-1630698747733-3c29f2f8d0f0?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    avitoUrl: "https://www.avito.ru/brands/i369388507?src=sharing",
  },
];

export type SortKey =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "area-desc"
  | "ppm-asc"
  | "rooms-desc";

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

export function formatPriceShort(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    return `${m.toFixed(m >= 10 ? 1 : 2).replace(".", ",")} млн ₽`;
  }
  return formatPrice(value);
}

export function roomsLabel(rooms: number): string {
  if (rooms === 0) return "Студия";
  return `${rooms}-к`;
}

export function sortListings(items: Listing[], key: SortKey): Listing[] {
  const copy = [...items];
  switch (key) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "area-desc":
      return copy.sort((a, b) => b.area - a.area);
    case "ppm-asc":
      return copy.sort((a, b) => a.pricePerMeter - b.pricePerMeter);
    case "rooms-desc":
      return copy.sort((a, b) => b.rooms - a.rooms || b.area - a.area);
    case "featured":
    default:
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured) || a.price - b.price);
  }
}
