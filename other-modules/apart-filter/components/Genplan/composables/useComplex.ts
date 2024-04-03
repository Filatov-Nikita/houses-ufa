import type { Complex } from '../types/complex';

export default function useComplex(complexId: Ref<number>) {

  const { data: complex, execute } = useDataFetch<{ data: Complex }>(
    computed(() => `estate/complexes/${complexId.value}/master-plan`),
    {
      immediate: false,
    }
  );

  return {
    complex,
    show: execute,
  }
}
