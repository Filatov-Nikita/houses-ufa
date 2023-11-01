<template>
  <section class="tw-container">
    <Header class="tw-mb-10" />
    <Content />
  </section>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  import Content from './components/Content.vue';
  import { useMainFilter } from './store/index';
  import { useFlatsFilter } from './store/flats';
  import { useTownsFilter } from './store/towns';
  import { useFilterParams } from './store/filter-params';
  import { notNullable, recordToNull } from './store/helpers';

  const filter = useMainFilter();
  const flatFilter = useFlatsFilter();
  const townFilter = useTownsFilter();
  const filterParams = useFilterParams();
  const router = useRouter();
  const route = useRoute();

  filter.init();

  onUnmounted(() => filter.clear());

  watch(() => filter.filterType, () => {
    filterParams.params.object_id = null;
    filterParams.params.order_by_direction = null;
    filterParams.params.order_by_field = null;
  });

  watch(() => filter.filterType, (val) => {
    if(val === 'out-city-flats') flatFilter.params.is_in_city = 0;
    else flatFilter.params.is_in_city = 1;
  }, { immediate: true });

  watch([
    () => filter.filterType,
    () => filterParams.params,
    () => flatFilter.params,
    () => townFilter.params,
  ], () => {
    const newQuery = notNullable(Object.assign(
      {},
      route.query,
      filterParams.params,
      filter.isFlat ? flatFilter.params : recordToNull(flatFilter.params),
      filter.isTown ? townFilter.params : recordToNull(townFilter.params),
      { filterType: filter.filterType },
    ));

    router.replace({ query: newQuery });
  }, { deep: true, immediate: true });
</script>
