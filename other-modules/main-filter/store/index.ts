import { defineStore } from 'pinia';
import { useComplexesStore } from '@/stores/complexes';
import { useTownsStore } from '@/stores/towns';
import { useFilterParams } from './filter-params';
import { useFlatsFilter } from './flats';
import { useTownsFilter } from './towns';

const useMainFilter = defineStore('mainFilter', () => {
  const complexStore = useComplexesStore();
  const townsStore = useTownsStore();
  const filterParams = useFilterParams();
  const flatFilter = useFlatsFilter();
  const townFilter = useTownsFilter();

  const filterType = ref<'flats' | 'towns'>('flats');

  const objectList = computed(() => {
    switch(filterType.value) {
      case 'flats': return complexStore.complexes?.data ?? [];
      case 'towns': return townsStore.towns?.data ?? [];
    }
  });

  const isFlat = computed(() => filterType.value === 'flats');
  const isTown = computed(() => filterType.value === 'towns');

  const currentFilter = computed(() => {
    switch(filterType.value) {
      case 'flats': return flatFilter;
      case 'towns': return townFilter;
    }
  });

  const showedCount = computed(() => currentFilter.value.data?.data.length ?? 0);

  function show(): void {
    if(isFlat.value) flatFilter.show();
    else if(isTown.value) townFilter.show();
  }

  function clear(): void {
    filterParams.clearParams();
    townFilter.clearParams();
    flatFilter.clearParams();
  }

  watch(filterType, () => filterParams.params.object_id = null);

  return {
    filterType,
    objectList,
    isFlat,
    isTown,
    showedCount,
    show,
    clear,
  }
});

export { useMainFilter };
