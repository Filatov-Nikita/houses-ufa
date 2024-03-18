import type { MenuItem } from '../types';

export function useTopMenu() {
  const items: MenuItem[] = reactive([
    {
      label: 'Квартиры',
      to: '/complexes',
    },
    {
      label: 'Коттеджи и таунхаусы',
      to: '/towns',
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
    {
      label: 'Спецпредложения',
      to: '/main-filter?is_in_promotion_only=1&filterType=flats',
    },
  ]);

  function isSpec(item: MenuItem) {
    return item.label === 'Спецпредложения';
  };

  return {
    items,
    isSpec,
  }
};
