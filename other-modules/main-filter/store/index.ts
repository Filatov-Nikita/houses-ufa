import { defineStore } from 'pinia';
import { useComplexesStore } from '@/stores/complexes';
import { useTownsStore } from '@/stores/towns';
import { useFilterParams } from './filter-params';
import { useFlatsFilter } from './flats';
import { useTownsFilter } from './towns';

type CurrentTypes = 'flats' | 'towns' | 'out-city-flats';

const useMainFilter = defineStore('mainFilter', () => {
  const complexStore = useComplexesStore();
  const townsStore = useTownsStore();
  const filterParams = useFilterParams();
  const flatFilter = useFlatsFilter();
  const townFilter = useTownsFilter();

  const filterType = ref<CurrentTypes>('flats');
  const showedType = ref<CurrentTypes>('flats');

  const objectList = computed(() => {
    switch(filterType.value) {
      case 'flats': return complexStore.complexes?.data ?? [];
      case 'out-city-flats': return complexStore.outCityComplexes;
      case 'towns': return townsStore.towns?.data ?? [];
    }
  });

  const isFlat = computed(() => ['flats', 'out-city-flats'].includes(filterType.value));
  const isTown = computed(() => filterType.value === 'towns');

  const currentFilter = computed(() => {
    switch(showedType.value) {
      case 'flats': return flatFilter;
      case 'out-city-flats': return flatFilter;
      case 'towns': return townFilter;
    }
  });

  const meta = computed(() => currentFilter.value.data?.meta ?? null);
  const pag = computed(() => currentFilter.value.pagination);
  const showedCount = computed(() => meta.value?.total ?? 0);
  const loading = computed(() => currentFilter.value.loading);
  const loadingNext = computed(() => currentFilter.value.loadingNext);

  function show(): void {
    if(isFlat.value) flatFilter.show();
    else if(isTown.value) townFilter.show();
    showedType.value = filterType.value;
  }

  function next(): void {
    currentFilter.value.next();
  }

  function clear(): void {
    filterParams.clearParams();
    townFilter.clearParams();
    flatFilter.clearParams();
  }

  watch(filterType, () => {
    filterParams.params.object_id = null
    filterParams.params.order_by_direction = null
    filterParams.params.order_by_field = null
  });

  watch(filterType, (val) => {
    if(val === 'out-city-flats') flatFilter.params.is_in_city = 1;
    else flatFilter.params.is_in_city = 0;
  });

  return {
    filterType,
    objectList,
    isFlat,
    isTown,
    showedCount,
    loading,
    loadingNext,
    showedType,
    meta,
    pag,
    currentFilter,
    show,
    next,
    clear,
  }
});

export { useMainFilter };
