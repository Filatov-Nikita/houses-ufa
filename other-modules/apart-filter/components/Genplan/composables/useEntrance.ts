import type { Entrance } from '../types/entrance';

export default function useEntrance(entranceId: Ref<number | null>) {

  const { data: entrance, execute } = useDataFetch<{ data: Entrance }>(
    computed(() => `estate/entrances/${entranceId.value}/master-plan`),
    {
      immediate: false,
    }
  );

  return {
    entrance,
    show: execute,
  }
}
