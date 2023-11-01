export const data = [
  {
    name: 'Квартиры в Уфе',
    img: '/images/home/estate-types/ufa-in-city.jpg',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'flats',
      },
    },
  },
  {
    name: 'Квартиры в Уфимском районе',
    img: '/images/home/estate-types/ufa-out-city.jpg',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'out-city-flats',
      },
    },
  },
  {
    name: 'Коттеджи и таунхаусы',
    img: '/images/home/estate-types/towns.jpg',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'towns',
      },
    },
  },
];
