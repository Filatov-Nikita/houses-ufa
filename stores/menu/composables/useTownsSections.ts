import type { Section } from '../types';
import { useTownsStore } from '@/stores/towns';
import { estateToLink } from './helpers';

export function useTownsSections() {
  const townsStore = useTownsStore();

  const townsLinks = computed(() => {
    return townsStore.towns?.data.map(town => estateToLink(town, '/towns')) ?? [];
  });

  const section = computed<Record<string, Section>>(() => {
    return {
      towns: {
        label: 'Коттеджи',
        links: townsLinks.value,
      },
    };
  });

  return {
    section,
  }
};
