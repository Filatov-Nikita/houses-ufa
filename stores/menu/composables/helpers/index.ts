import type { MenuItem } from '../../types';

interface EstateOne {
  id: number,
  name: string,
}

export function estateToLink<T extends EstateOne>(item: T, path: string): MenuItem {
  return {
    label: item.name,
    to: `${path}/${item.id}`,
  }
}
