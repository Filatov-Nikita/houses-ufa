import { defineStore } from 'pinia';
import { data } from '@/composables/useGoal/data';

export const usePublicFooter = defineStore('publicFooter', () => {
  const showedForm = ref(false);
  const goalForm = ref<keyof typeof data>('order');

  function toggleForm(goal: keyof typeof data = 'order') {
    showedForm.value = !showedForm.value;
    goalForm.value = goal;
  };

  return {
    showedForm,
    goalForm,
    toggleForm,
  };
});
