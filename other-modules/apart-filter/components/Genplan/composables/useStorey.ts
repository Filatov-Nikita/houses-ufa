import type { Storey } from '../types/storey';

export default function useStorey(storeyId: Ref<number | null>) {
  const { data: storey, execute } = useDataFetch<{ data: Storey }>(
    computed(() => `estate/floors/${storeyId.value}/master-plan`),
    {
      immediate: false,
    }
  );

  return {
    storey,
    show: execute,
  }
}
