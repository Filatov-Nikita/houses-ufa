interface Estate {
  name: string,
  image: string,
  location: string | null,
  priceFrom: number | null,
  badge: string | null,
}

export const showedMilav = ref(false);
export type Town = Estate & { type: 'town', objectId: number };
export type Flat = Estate & { type: 'flat', is_in_city: boolean, objectId: number };
export type Milav = Estate & { type: 'milav', text: string, };

export type Item = Town | Flat | Milav;

export const data: Item[] = [
  {
    type: 'flat',
    name: 'Сапфир',
    is_in_city: true,
    image: '/images/home/objects/1.jpg',
    location: null,
    priceFrom: 7200000,
    badge: null,
    objectId: 3,
  },
  {
    type: 'flat',
    name: 'Зубово Life Garden',
    is_in_city: false,
    image: '/images/home/objects/2.jpg',
    location: 'с. Зубово',
    priceFrom: 3329445,
    badge: null,
    objectId: 4,
  },
  {
    type: 'town',
    name: 'Зубово Life 3',
    image: '/images/home/objects/3.jpg',
    location: 'с. Зубово',
    priceFrom: null,
    badge: null,
    objectId: 2,
  },
  {
    type: 'town',
    name: 'Созвездие Цефей',
    image: '/images/home/objects/4.jpg',
    location: 'с. Шмидтово',
    priceFrom: null,
    badge: null,
    objectId: 4,
  },
  {
    type: 'town',
    name: 'Гудвилл Парк',
    image: '/images/home/objects/5.jpg',
    location: 'с. Шмидтово',
    priceFrom: null,
    badge: null,
    objectId: 1,
  },
  {
    type: 'flat',
    name: 'Михайловка Green Place',
    is_in_city: false,
    image: '/images/home/objects/6.jpg',
    location: 'с. Михайловка',
    priceFrom: 3090150,
    badge: null,
    objectId: 2,
  },
  {
    type: 'town',
    name: 'Михайловка Green 2',
    image: '/images/home/objects/7.jpg',
    location: 'с. Михайловка',
    priceFrom: null,
    badge: null,
    objectId: 3,
  },
  {
    type: 'milav',
    name: 'Премьера 2024 г.<br />Новый посёлок «Миллаверде»',
    text: 'Скоро старт<br />продаж',
    image: '/images/home/objects/milav.jpg',
    location: 'с. Миловка',
    priceFrom: null,
    badge: null,
  },
];
