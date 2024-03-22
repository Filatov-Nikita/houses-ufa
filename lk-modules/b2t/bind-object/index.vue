<template>
  <div class="tw-pb-8">
    <Header class="tw-mb-8" />
    <Content @bind:success="emit('bind:success')" />
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  import Content from './components/Content.vue';
  import { useMainFilter, type CurrentTypes } from './store/index';
  import { useFlatsFilter } from './store/flats';
  import { useFilterParams } from './store/filter-params';

  const props = defineProps<{
    clientId: number,
  }>();

  const emit = defineEmits<{
    (event: 'bind:success'): void,
  }>();

  const filter = useMainFilter();
  const flatFilter = useFlatsFilter();
  const filterParams = useFilterParams();
  const route = useRoute();

  filter.init();

  onUnmounted(() => filter.clear());

  watch(() => props.clientId, (id) => {
    filter.clientId = id;
  }, { immediate: true });

  watch(() => route.query.filterType, (type) => {
    if(type !== undefined && type !== filter.filterType) {
      filter.filterType = type as CurrentTypes;
    }
  });

  watch(() => filter.filterType, () => {
    filterParams.params.object_id = null;
    filterParams.params.order_by_direction = null;
    filterParams.params.order_by_field = null;
  });

  watch(() => filter.filterType, (val) => {
    if(val === 'out-city-flats') flatFilter.params.is_in_city = 0;
    else flatFilter.params.is_in_city = 1;
  }, { immediate: true });
</script>
