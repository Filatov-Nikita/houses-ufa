import type { Section } from '../types';
import { useComplexesStore } from '@/stores/complexes';
import { estateToLink } from './helpers';


export function useComplexesSections() {
  const complexesStore = useComplexesStore();

  const complexesLinks = computed(() => {
    return complexesStore.complexes?.data.map(complex => estateToLink(complex, '/complexes')) ?? [];
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
