export const newYearData = [
  {
    name: 'Выгода до 520 тыс. ₽<br>на коттеджи<br>Орландо',
    text: 'новая цена 12 440 000 ₽',
    img: '/images/home/estate-types/img1.jpg',
    imgCover: '/images/home/estate-types/new-year1.jpg',
    to: {
      path: '/towns/461',
    },
  },
  {
    name: 'Рождественская<br/>распродажа',
    text: 'Дополнительная выгода<br>на квартиры до 14.01.2024',
    img: '/images/home/estate-types/img2.jpg',
    imgCover: '/images/home/estate-types/new-year2.jpg',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'flats',
        is_in_promotion_only: 1,
      },
    },
  },
  {
    name: 'Рождественская распродажа',
    text: 'Дополнительная выгода<br>на дома до 14.01.2024',
    img: '/images/home/estate-types/img3.jpg',
    imgCover: '/images/home/estate-types/new-year3.jpg',
    to: {
      path: '/main-filter',
      query: {
        filterType: 'towns',
        is_in_promotion_only: 1,
      },
    }
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
