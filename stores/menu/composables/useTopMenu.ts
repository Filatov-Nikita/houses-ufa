import type { MenuItem } from '../types';

export function useTopMenu() {
  const items: MenuItem[] = reactive([
    {
      label: 'Квартиры',
      to: '/main-filter?filterType=flats',
    },
    {
      label: 'Коттеджи и Таунхаусы',
      to: '/main-filter?filterType=towns',
    },
    {
      label: 'Ипотека',
      to: '/ipoteka',
    },
    {
      label: 'О компании',
      to: '/about',
    },
    {
      label: 'Контакты',
      to: '/contacts',
    },
  ]);

  return {
    items
  }
};
