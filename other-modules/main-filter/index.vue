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
  import { useFilterParams } from './store/filter-params';

  const filter = useMainFilter();
  const flatFilter = useFlatsFilter();
  const filterParams = useFilterParams();

  filter.init();

  onUnmounted(() => filter.clear());

  watch(() => filter.filterType, () => {
    filterParams.params.object_id = null;
    filterParams.params.order_by_direction = null;
    filterParams.params.order_by_field = null;
  });

  watch(() => filter.filterType, (val) => {
    if(val === 'out-city-flats') flatFilter.params.is_in_city = 1;
    else flatFilter.params.is_in_city = 0;
  }, { immediate: true });
</script>
