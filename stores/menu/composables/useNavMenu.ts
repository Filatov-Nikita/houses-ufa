import type { Section } from '../types';

type Sections = Record<string, Section>;

export function useNavMenu(sectionList: ComputedRef<Sections>) {
  const sections: Sections = reactive({});

  const items = computed<Sections>(() => {
    return Object.assign({}, sectionList.value, sections);
  });

  return {
    items,
  }
};
