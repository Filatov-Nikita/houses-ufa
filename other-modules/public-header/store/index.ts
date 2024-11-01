import { defineStore } from 'pinia';
import { data } from '@/composables/useGoal/data';

export const usePublicHeader = defineStore('publicHeader', () => {
  const showedForm = ref(false);
  const goalForm = ref<keyof typeof data>('order');

  function toggleForm(goal: keyof typeof data = 'order') {
    showedForm.value = !showedForm.value;
    goalForm.value = goal;
  };

  const showedNav = ref(false);

  function toggleNav() {
    showedNav.value = !showedNav.value;
  };

  return {
    showedForm,
    showedNav,
    goalForm,
    toggleForm,
    toggleNav
  };
});
