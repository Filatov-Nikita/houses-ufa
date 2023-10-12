import type { MenuItem } from '../types';

export function useTopMenu() {
  const items: MenuItem[] = reactive([
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
  ]);

  return {
    items
  }
};
