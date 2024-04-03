import type { House } from '../types/house';

export default function useLiter(literId: Ref<number | null>) {
  const { data: liter, execute } = useDataFetch<{ data: House }>(
    computed(() => `estate/houses/${literId.value}/master-plan`),
    {
      immediate: false,
    }
  );

  return {
    liter,
    show: execute,
  }
}
