interface Estate {
  name: string,
  image: string,
  location: string | null,
  priceFrom: number | null,
  badge: string | null,
  objectId: number
}

type Town = Estate & { type: 'town' };
type Flat = Estate & { type: 'flat', is_in_city: boolean };

export type Item = Town | Flat;

export const data: Item[] = [
  {
    type: 'flat',
    name: 'Сапфир',
    is_in_city: true,
    image: '/images/home/objects/1.jpg',
    location: null,
    priceFrom: 3258542,
    badge: null,
    objectId: 3,
  },
  {
    type: 'flat',
    name: 'Зубово Life Garden',
    is_in_city: false,
    image: '/images/home/objects/2.jpg',
    location: 'с. Зубово',
    priceFrom: 3258542,
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
    priceFrom: 3258542,
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
];
