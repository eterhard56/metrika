export const agency = {
  name: "Метрика",
  fullName: "Метрика Недвижимость",
  tagline: "Точные метры. Честные сделки.",
  city: "Оренбург",
  description:
    "Одобрение ипотеки, сложные сделки, быстрая покупка и продажа жилья, оценка и страхование — с сопровождением до ключей.",
  address: {
    primary: "ул. Терешковой, 140/1, каб. 8, 2 этаж",
    secondary: "ул. Брестская, 5/2",
    district: "Дзержинский район",
    postal: "460044",
  },
  hours: "ежедневно 10:00–18:00",
  phones: [
    { label: "Основной", e164: "79058151333", display: "+7 905 815-13-33" },
    { label: "WhatsApp / звонок", e164: "79878605097", display: "+7 987 860-50-97" },
  ],
  links: {
    avito: "https://www.avito.ru/brands/i369388507?src=sharing",
    vk: "https://vk.ru/club238333013",
    gis: "https://2gis.ru/orenburg/geo/70000001087667472",
    domclick: "https://agencies.domclick.ru/agency/329994",
  },
  stats: {
    rating: 5,
    dealsYear: 32,
    activeOffers: 17,
    experienceYears: 8,
  },
  legal: "ИП Малашенко Алексей Анатольевич · ИНН 561101027771",
  team: [
    { name: "Елена Иванова", role: "Руководитель офиса" },
    { name: "Татьяна Довженко", role: "Риелтор" },
    { name: "Алексей Малашенко", role: "Основатель" },
    { name: "Мария Тарасова", role: "Риелтор" },
  ],
} as const;
