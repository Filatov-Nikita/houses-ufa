import type { Section } from '../types';

type Sections = Record<string, Section>;

export function useNavMenu(sectionList: ComputedRef<Sections>) {
  const sections: Sections = reactive({
    about: {
      label: 'О компании',
      links: [
        {
          label: 'О нас',
          to: '/about',
        },
        {
          label: 'История компании',
          to: '/about#history',
        },
        {
          label: 'Команда',
          to: '/about#team',
        },
        {
          label: 'Работа в компании',
          to: '/about#work',
        },
        {
          label: 'Акции',
          to: '/promotions',
        },
      ],
    },
    press: {
      label: 'Пресс-центр',
      links: [
        {
          label: 'Новости',
          to: '/articles',
        },
        {
          label: 'СМИ о нас',
          to: '/articles?type=mass_media',
        },
        {
          label: 'Вопросы и ответы',
          to: '/faq',
        },
        {
          label: 'Документы',
          to: '/documents',
        },
      ],
    },
    contacts: {
      label: 'Контакты',
      links: [
        {
          label: 'Офисы',
          to: '/contacts',
        },
        {
          label: 'Сервисные службы',
          to: '/contacts?type=service',
        },
      ],
    },
    purchase: {
      label: 'Как купить',
      links: [
        {
          label: 'Ипотека',
          to: '/ipoteka',
        },
        {
          label: 'Трейд-ин',
          to: '/purchase/trade-in',
        },
        {
          label: 'Материнский капитал',
          to: '/purchase/mat-capital',
        },
        {
          label: 'Программа лояльности',
          to: '/purchase/discont',
        },
      ],
    },
  });

  const items = computed<Sections>(() => {
    return Object.assign({}, sectionList.value, sections);
  });

  return {
    items,
  }
};
