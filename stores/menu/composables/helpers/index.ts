import type { MenuItem } from '../../types';
import { type ComplexItem } from '@/stores/complexes';

export function estateToLink(item: ComplexItem, path: string): MenuItem {
  return {
    label: item.name,
    to: `${path}/${item.id}`,
  }
}
