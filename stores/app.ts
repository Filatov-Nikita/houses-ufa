interface NavBanner {
  title: string
  subtitle: string
  imgSrc: string
  readMoreHref: string
}

function cleanPhone(phone: string): string {
  return '+' + phone.replace(/\D/g, '')
}

export const useAppStore = defineStore('appStore', {
  state: () => ({
    headerPhone: '+7 (347) 225-00-73',
    headerMenu: getHeaderMenu(),
    navSectionLinks: getNavSectionLinks(),
    contacts: getContacts(),
    footerMenu: getFooterMenu(),
    socialList: getSocialList(),
    banner: getBanner() as NavBanner | null,
    showedCallback: false,
  }),
  getters: {
    cleanedHeadPhone: (state) => cleanPhone(state.headerPhone),
    cleanedContPhone: (state) => cleanPhone(state.contacts.phone),
  },
  actions: {
    async getZhkList() {
      const config = useRuntimeConfig()
      const { data } = await useDataFetch('/estate/complexes', {
        baseURL: config.public.baseURL,
      })
      const complexes = (data.value.data as { id: number; name: string }[]).map(
        (item) => {
          return {
            label: item.name,
            to: '/apartment/' + item.id,
          }
        }
      )
      this.navSectionLinks.flats.items = complexes
      this.footerMenu.apartments = complexes
    },
  },
})

function getBanner(): NavBanner {
  return {
    title: 'Тайтл 1',
    subtitle: 'Тайтл 2',
    imgSrc:
      'https://img.freepik.com/free-photo/high-angle-man-holding-corn-dog_23-2149929396.jpg?w=1480&t=st=1691951496~exp=1691952096~hmac=205e6f6ab8ba631d94e5d8cc2e6df35b747ec980e956e52aeda3e78b928e618c',
    readMoreHref: '/',
  }
}

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
    // bayers: [
    // {
    //   label: 'Акции',
    //   to: '/flats',
    // },
    // {
    //   label: 'Спецпреложения',
    //   to: '/houses',
    // },
    // {
    //   label: 'Программа лояльности',
    //   to: '/tauns',
    // },
    // {
    //   label: 'Способы покупки',
    //   to: '/credit',
    // },
    // {
    //   label: 'Школа покупателя',
    //   to: '/about',
    // },
    // ],
    apartments: [],
    // cottages: [
    //   {
    //     label: 'Михайловка Green 2',
    //     to: '/',
    //   },
    //   {
    //     label: 'Зубово Life 3',
    //     to: '/',
    //   },
    //   {
    //     label: 'Гудвилл Парк',
    //     to: '/',
    //   },
    // ],
    // commercial: [
    //   {
    //     label: 'Михайловка',
    //     to: '/',
    //   },
    //   {
    //     label: 'Зубово',
    //     to: '/',
    //   },
    //   {
    //     label: 'Гудвилл Парк',
    //     to: '/',
    //   },
    // ],
    // owners: [
    //   {
    //     label: 'Личный кабинет',
    //     to: '/',
    //   },
    // ],
    about_company: [
      {
        label: 'История компании',
        to: '/about#hist',
      },
      {
        label: 'Команда',
        to: '/about#team',
      },
      // {
      //   label: 'Награды',
      //   to: '/',
      // },
      {
        label: 'Работа в компании',
        to: '/about#work',
      },
    ],
    press_center: [
      {
        label: 'Новости',
        to: '/press-centr',
      },
      {
        label: 'СМИ о нас',
        to: '/press-centr',
      },
      {
        label: 'Вопросы и ответы',
        to: '/faq',
      },
    ],
    contacts: [
      {
        label: 'Контакты',
        to: '/contacts',
      },
      {
        label: 'Написать нам',
        to: '/about#callback',
      },
      // {
      //   label: 'Офисы',
      //   to: '/about',
      // },
      // {
      //   label: 'Сервисные службы',
      //   to: '/',
      // },
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
      whatsapp: '',
      telegram: 'https://vk.com/zhiloikvartal',
      viber: 'https://vk.com/zhiloikvartal',
      vk: 'https://vk.com/zhiloikvartal',
      ok: 'https://ok.ru/group/52485575540911',
      // youtube: 'https://www.youtube.com/channel/UCO0Id0I_Ez4mXUp7Iz5dWSg'
    },
  }
}

function getNavSectionLinks() {
  return {
    flats: {
      label: 'Квартиры',
      items: [] as { label: string; to: string }[],
    },
    // houses: {
    //   label: 'Коттеджи',
    //   items: [],
    // },
    // commerc: {
    //   label: '',
    //   items: [],
    // },
    // buyers: {
    //   label: 'Покупателям',
    //   items: [],
    // },
    // owners: {
    //   label: 'Владельцам',
    //   items: [
    //     {
    //       label: 'Личный кабинет',
    //       to: '/',
    //     },
    //   ],
    // },
    about: {
      label: 'О компании',
      items: [
        {
          label: 'История компании',
          to: '/about#hist',
        },
        {
          label: 'Команда',
          to: '/about#team',
        },
        // {
        //   label: 'Награды',
        //   to: '/',
        // },
        {
          label: 'Работа в компании',
          to: '/about#work',
        },
      ],
    },
    pressCenter: {
      label: 'Пресс-центр',
      items: [
        {
          label: 'Новости',
          to: '/press-centr',
        },
        {
          label: 'СМИ о нас',
          to: '/press-centr',
        },
        {
          label: 'Вопросы и ответы',
          to: '/faq',
        },
      ],
    },
    contacts: {
      label: 'Контакты',
      items: [
        {
          label: 'Контакты',
          to: '/contacts',
        },
        {
          label: 'Написать нам',
          to: '/about#callback',
        },
        // {
        //   label: 'Офисы',
        //   to: '/',
        // },
        // {
        //   label: 'Сервисные службы',
        //   to: '/',
        // },
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
