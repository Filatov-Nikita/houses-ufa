import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    headerMenu: getHeaderMenu(),
    navSectionLinks: getNavSectionLinks(),
    contacts: getContacts()
  }),
});

function getHeaderMenu() {
  return [
    {
      label: 'Квартиры',
      to: '/flats'
    },
    {
      label: 'Коттеджи',
      to: '/houses'
    },
    {
      label: 'Таунхаусы',
      to: '/tauns'
    },
    {
      label: 'Ипотека',
      to: '/credit'
    },
    {
      label: 'О компании',
      to: '/about'
    },
  ];
}

function getContacts() {
  return {
    address: {
      text: 'ул. З. Биишевой, д. 13',
      label: 'Центральный офис'
    },
    phone: '+7 (347) 225-00-84',
    socialLinks: {
      whatsapp: 'https://vk.com/zhiloikvartal',
      telegram: 'https://vk.com/zhiloikvartal',
      viber: 'https://vk.com/zhiloikvartal',
      vk: 'https://vk.com/zhiloikvartal',
      ok: 'https://vk.com/zhiloikvartal'
    }
  };
}

function getNavSectionLinks() {
  return {
    flats: {
      label: 'Квартиры',
      items: []
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
          to: '/'
        },
      ],
    },
    about: {
      label: 'О компании',
      items: [
        {
          label: 'История компании',
          to: '/'
        },
        {
          label: 'Команда',
          to: '/'
        },
        {
          label: 'Награды',
          to: '/'
        },
        {
          label: 'Работа в компании',
          to: '/'
        },
      ],
    },
    pressCenter: {
      label: 'Пресс-центр',
      items: [
        {
          label: 'Новости',
          to: '/'
        },
        {
          label: 'СМИ о нас',
          to: '/'
        },
        {
          label: 'Написать нам',
          to: '/'
        },
        {
          label: 'Вопросы и ответы',
          to: '/'
        },
      ],
    },
    contacts: {
      label: 'Контакты',
      items: [
        {
          label: 'Офисы',
          to: '/'
        },
        {
          label: 'Сервисные службы',
          to: '/'
        },
      ],
    },
  };
}
