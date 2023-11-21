import { defineStore } from 'pinia';

export const usePublicHeader = defineStore('publicHeader', () => {
  const showedForm = ref(false);

  function toggleForm() {
    showedForm.value = !showedForm.value;
  };

  const showedNav = ref(false);

  function toggleNav() {
    showedNav.value = !showedNav.value;
  };

  return {
    showedForm,
    showedNav,
    toggleForm,
    toggleNav
  };
});
