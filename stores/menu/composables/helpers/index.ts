import type { MenuItem } from '../../types';

interface EstateOne {
  id: number,
  name: string,
}

export function estateToLink<T extends EstateOne>(item: T, path: string, slugs: Record<number, string> = {}): MenuItem {
  const slug = slugs[item.id] ?? item.id;

  return {
    label: item.name,
    to: `${path}/${slug}`,
  }
}
