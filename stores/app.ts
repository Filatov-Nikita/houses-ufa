export const useAppStore = defineStore('appStore', {
  state: () => ({
    headerMenu: getHeaderMenu(),
    navSectionLinks: getNavSectionLinks(),
    contacts: getContacts(),
    footerMenu: getFooterMenu(),
    socialList: getSocialList(),
  }),
})

function getHeaderMenu() {
  return [
    {
      label: 'Квартиры',
      to: '/flats',
    },
    {
      label: 'Коттеджи',
      to: '/houses',
    },
    {
      label: 'Таунхаусы',
      to: '/tauns',
    },
    {
      label: 'Ипотека',
      to: '/credit',
    },
    {
      label: 'О компании',
      to: '/about',
    },
  ]
}
function getFooterMenu() {
  return {
    bayers: [
      {
        label: 'Акции',
        to: '/flats',
      },
      {
        label: 'Спецпреложения',
        to: '/houses',
      },
      {
        label: 'Программа лояльности',
        to: '/tauns',
      },
      {
        label: 'Способы покупки',
        to: '/credit',
      },
      {
        label: 'Школа покупателя',
        to: '/about',
      },
    ],
    apartments: [
      {
        label: 'Михайловка Green Place',
        to: '/flats',
      },
      {
        label: 'Зубово Life Garden',
        to: '/houses',
      },
    ],
    cottages: [
      {
        label: 'Михайловка Green 2',
        to: '/',
      },
      {
        label: 'Зубово Life 3',
        to: '/',
      },
      {
        label: 'Гудвилл Парк',
        to: '/',
      },
    ],
    commercial: [
      {
        label: 'Михайловка',
        to: '/',
      },
      {
        label: 'Зубово',
        to: '/',
      },
      {
        label: 'Гудвилл Парк',
        to: '/',
      },
    ],
    owners: [
      {
        label: 'Личный кабинет',
        to: '/',
      },
    ],
    about_company: [
      {
        label: 'История компании',
        to: '/',
      },
      {
        label: 'Команда',
        to: '/',
      },
      {
        label: 'Награды',
        to: '/',
      },
      {
        label: 'Работа в компании',
        to: '/',
      },
    ],
    press_center: [
      {
        label: 'Новости',
        to: '/',
      },
      {
        label: 'СМИ о нас',
        to: '/',
      },
      {
        label: 'Написать нам',
        to: '/',
      },
      {
        label: 'Вопросы и ответы',
        to: '/',
      },
    ],
    contacts: [
      {
        label: 'Офисы',
        to: '/',
      },
      {
        label: 'Сервисные службы',
        to: '/',
      },
    ],
  }
}
function getContacts() {
  return {
    address: {
      text: 'ул. З. Биишевой, д. 13',
      label: 'Центральный офис',
    },
    phone: '+7 (347) 225-00-84',
    socialLinks: {
      whatsapp: 'https://vk.com/zhiloikvartal',
      telegram: 'https://vk.com/zhiloikvartal',
      viber: 'https://vk.com/zhiloikvartal',
      vk: 'https://vk.com/zhiloikvartal',
      ok: 'https://vk.com/zhiloikvartal',
    },
  }
}

function getNavSectionLinks() {
  return {
    flats: {
      label: 'Квартиры',
      items: [],
    },
    houses: {
      label: 'Коттеджи',
      items: [],
    },
    commerc: {
      label: '',
      items: [],
    },
    buyers: {
      label: 'Покупателям',
      items: [],
    },
    owners: {
      label: 'Владельцам',
      items: [
        {
          label: 'Личный кабинет',
          to: '/',
        },
      ],
    },
    about: {
      label: 'О компании',
      items: [
        {
          label: 'История компании',
          to: '/',
        },
        {
          label: 'Команда',
          to: '/',
        },
        {
          label: 'Награды',
          to: '/',
        },
        {
          label: 'Работа в компании',
          to: '/',
        },
      ],
    },
    pressCenter: {
      label: 'Пресс-центр',
      items: [
        {
          label: 'Новости',
          to: '/',
        },
        {
          label: 'СМИ о нас',
          to: '/',
        },
        {
          label: 'Написать нам',
          to: '/',
        },
        {
          label: 'Вопросы и ответы',
          to: '/',
        },
      ],
    },
    contacts: {
      label: 'Контакты',
      items: [
        {
          label: 'Офисы',
          to: '/',
        },
        {
          label: 'Сервисные службы',
          to: '/',
        },
      ],
    },
  }
}

function getSocialList() {
  return {
    wp: {
      icon: '',
      link: '',
    },
    tg: {
      icon: '',
      link: '',
    },
    vb: {
      icon: '',
      link: '',
    },
    vk: {
      icon: '',
      link: '',
    },
    ok: {
      icon: '',
      link: '',
    },
  }
}