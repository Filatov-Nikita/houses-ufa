export const newYearData = [
  {
    name: 'Коттеджи и таунхаусы<br>по ценам 2023 года',
    text: 'от 8 200 000 ₽',
    img: '/images/home/estate-types/h1.jpg',
    imgCover: '/images/home/estate-types/snow-1.jpg',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'towns',
      },
    },
  },
  {
    name: 'Настало время<br>волшебства',
    text: 'своя квартира от 20 000 ₽ в месяц',
    img: '/images/home/estate-types/h2.jpg',
    imgCover: '/images/home/estate-types/snow-2.jpg',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'flats',
      },
    },
  },
  {
    name: 'Выгода до 260 тыс. ₽<br>на 1-к. квартиру',
    text: 'от 4 376 745 ₽',
    img: '/images/home/estate-types/h3.jpg',
    imgCover: '/images/home/estate-types/snow-3.jpg',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'out-city-flats',
      },
    },
  },
];

export const data = [
  {
    name: 'Выгода до 586 тыс. ₽ <br/> на 2K смарт',
    text: 'новая цена 5 367 390 ₽',
    img: '/images/home/estate-types/towns2.png',
    imgCover: '/images/home/estate-types/cover1.png',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'out-city-flats',
        room_factor_two_smart: 1,
        room_factor_two_classic: 1,
      }
    },
  },
  {
    name: 'Настало время <br/> волшебства',
    text: 'своя квартира от 20 000 ₽ в месяц',
    img: '/images/home/estate-types/ufa-in-city2.png',
    imgCover: '/images/home/estate-types/cover2.png',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'flats',
        object_id: 3,
      },
    },
  },
  {
    name: 'Выгода до 520 тыс. ₽ <br/> на коттеджи Орландо',
    text: 'новая цена 12 440 000 ₽',
    img: '/images/home/estate-types/ufa-out-city2.png',
    imgCover: '/images/home/estate-types/cover3.png',
    to: {
      path: '/towns/461',
    },
  },
];
