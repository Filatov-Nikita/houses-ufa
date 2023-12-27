import { defineStore } from 'pinia';

export const useFavList = defineStore('b2tFavList', () => {
  const showedCheckClient = ref(false);
  const currentId = ref<number>();
  const currentType = ref<'flat' | 'estate'>();

  function toggleShowedCheckClient() {
    showedCheckClient.value = !showedCheckClient.value;
  }

  return {
    currentId,
    currentType,
    showedCheckClient,
    toggleShowedCheckClient,
  };
});
