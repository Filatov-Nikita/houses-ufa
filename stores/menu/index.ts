import { defineStore } from 'pinia';
import { useTopMenu } from './composables/useTopMenu';
import { useNavMenu } from './composables/useNavMenu';
import { useComplexesSections } from './composables/useComplexesSections';
import { useTownsSections } from './composables/useTownsSections';
import { useFooterMenu } from './composables/useFooterMenu';

const useMenuStore = defineStore('menuStore', () => {
  const { items: topMenu, isSpec } = useTopMenu();

  const townsSection = useTownsSections();
  const complexesSection = useComplexesSections();

  const sectionList = computed(() => {
    return Object.assign(
      {},
      complexesSection.section.value,
      townsSection.section.value
    );
  });

  const { items: navMenu } = useNavMenu(sectionList);
  const { items: footerMenu } = useFooterMenu(sectionList);

  return {
    topMenu,
    navMenu,
    footerMenu,
    isSpec,
  }
});

export { useMenuStore };
