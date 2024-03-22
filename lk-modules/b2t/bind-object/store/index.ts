import { defineStore } from 'pinia';
import { useComplexesStore } from '@/stores/complexes';
import { useTownsStore } from '@/stores/towns';
import { useFilterParams } from './filter-params';
import { useFlatsFilter } from './flats';
import { useTownsFilter } from './towns';
import { useRoute } from 'vue-router';

export type CurrentTypes = 'flats' | 'towns' | 'out-city-flats';

const useMainFilter = defineStore('mainFilter', () => {
  const complexStore = useComplexesStore();
  const townsStore = useTownsStore();
  const filterParams = useFilterParams();
  const flatFilter = useFlatsFilter();
  const townFilter = useTownsFilter();
  const route = useRoute();

  const filterType = ref<CurrentTypes>(initType());
  const showedType = ref<CurrentTypes>(filterType.value);
  const clientId = ref<number | null>(null);

  function initType(): CurrentTypes {
    const types = ['flats', 'towns', 'out-city-flats'];
    const type = route.query.filterType;
    const isTrue = types.includes(typeof type === 'string' ? type : '');
    return (isTrue ? type : 'flats') as CurrentTypes;
  }

  const objectList = computed(() => {
    switch(filterType.value) {
      case 'flats': return complexStore.inCityComplexes ?? [];
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

  async function show() {
    showedType.value = filterType.value;
    if(isFlat.value) return await flatFilter.show();
    else if(isTown.value) return await townFilter.show();
  }

  function next(): void {
    currentFilter.value.next();
  }

  function clear(): void {
    filterParams.clearParams();
    townFilter.clearParams();
    flatFilter.clearParams();
  }

  function init() {
    filterType.value = initType();
    showedType.value = filterType.value;
    Object.assign(filterParams.params, filterParams.init());
    Object.assign(flatFilter.params, flatFilter.init());
    Object.assign(townFilter.params, townFilter.init());
  }

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
    clientId,
    show,
    next,
    clear,
    init,
  }
});

export { useMainFilter };
