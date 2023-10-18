import { defineStore } from 'pinia';
import { useComplexesStore } from '@/stores/complexes';
import { useTownsStore } from '@/stores/towns';
import { useFilterParams } from './filter-params';
import { useFlatsFilter } from './flats';
import { useTownsFilter } from './towns';
import { useRoute, useRouter } from 'vue-router';
import { notNullable, recordToNull } from './helpers'

type CurrentTypes = 'flats' | 'towns' | 'out-city-flats';

const useMainFilter = defineStore('mainFilter', () => {
  const complexStore = useComplexesStore();
  const townsStore = useTownsStore();
  const filterParams = useFilterParams();
  const flatFilter = useFlatsFilter();
  const townFilter = useTownsFilter();
  const route = useRoute();
  const router = useRouter();

  const filterType = ref<CurrentTypes>(initType());
  const showedType = ref<CurrentTypes>(filterType.value);

  function initType(): CurrentTypes {
    const types = ['flats', 'towns', 'out-city-flats'];
    const type = route.query.filterType;
    const isTrue = types.includes(typeof type === 'string' ? type : '');
    return (isTrue ? type : 'flats') as CurrentTypes;
  }

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

  watch(filterType, () => {
    filterParams.params.object_id = null
    filterParams.params.order_by_direction = null
    filterParams.params.order_by_field = null
  });

  watch(filterType, (val) => {
    if(val === 'out-city-flats') flatFilter.params.is_in_city = 1;
    else flatFilter.params.is_in_city = 0;
  });

  watch([
    filterType,
    () => filterParams.params,
    () => flatFilter.params,
    () => townFilter.params,
  ], () => {
    const newQuery = notNullable(Object.assign(
      {},
      route.query,
      filterParams.params,
      isFlat.value ? flatFilter.params : recordToNull(flatFilter.params),
      isTown.value ? townFilter.params : recordToNull(townFilter.params),
      { filterType: filterType.value },
    ));

    router.replace({ query: newQuery });
  }, { deep: true, immediate: true });

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
