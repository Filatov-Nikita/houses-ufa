import { defineStore } from 'pinia';

export const usePublicFooter = defineStore('publicFooter', () => {
  const showedForm = ref(false);

  function toggleForm() {
    showedForm.value = !showedForm.value;
  };

  return {
    showedForm,
    toggleForm,
  };
});
