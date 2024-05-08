import type { Section } from '../types';
import { useComplexesStore } from '@/stores/complexes';
import { useSlugsStore } from '@/stores/slugs';
import { estateToLink } from './helpers';


export function useComplexesSections() {
  const complexesStore = useComplexesStore();
  const slugsStore = useSlugsStore();

  const complexesLinks = computed(() => {
    const slugs = slugsStore.slugs?.complexes;
    return complexesStore.complexes?.data.map(complex => estateToLink(complex, '/complexes', slugs)) ?? [];
  });

  const section = computed<Record<string, Section>>(() => {
    return {
      complexes: {
        label: 'Квартиры',
        links: complexesLinks.value,
      },
    };
  });

  return {
    section,
  }
};
