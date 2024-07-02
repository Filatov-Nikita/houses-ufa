import { defineStore } from 'pinia';

export interface Slot {
  starts_at: string,
  ends_at: string,
};

export interface OrderDay {
  date: string,
  slots: Slot[],
};

export const useTimeSlotsStore = defineStore('timeSlotsStore', () => {
  const orderDays = ref<OrderDay[] | null>(null);
  const loading = ref(false);

  async function showOrderDays() {
    loading.value = true;
    const { data } = await useDataFetch<{ data: OrderDay[] }>('b2c/objects/flats/key-acquisitions', {
      baseURL: useRuntimeConfig().public.rootApi,
    });
    orderDays.value = data.value?.data ?? null;
    loading.value = false;
  }

  return {
    orderDays,
    loading,
    showOrderDays,
  }
});
