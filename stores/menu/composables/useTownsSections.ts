import type { Section } from '../types';
import { useTownsStore } from '@/stores/towns';
import { useSlugsStore } from '@/stores/slugs';
import { estateToLink } from './helpers';

export function useTownsSections() {
  const slugsStore = useSlugsStore();
  const townsStore = useTownsStore();

  const townsLinks = computed(() => {
    const slugs = slugsStore.slugs?.towns;
    return townsStore.towns?.data.map(town => estateToLink(town, '/cottage-settlements', slugs)) ?? [];
  });

  const section = computed<Record<string, Section>>(() => {
    return {
      towns: {
        label: 'Коттеджи и таунхаусы',
        links: townsLinks.value,
      },
    };
  });

  return {
    section,
  }
};
