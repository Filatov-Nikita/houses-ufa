<template>
  <LayoutFilter>
    <template #left>
      <FlatParams />
    </template>
    <div>
      <HeadFlatFilter />
    </div>
  </LayoutFilter>
</template>

<script setup lang="ts">
  import LayoutFilter from './LayoutFilter.vue';
  import FlatParams from './FlatParams.vue';
  import HeadFlatFilter from './HeadFlatFilter.vue';
  import { useFilterList } from '../store/filter-list';
  import { useFilterPlan } from '../store/filter-plan';
  import { useFilterHead } from '../store/filter-head';

  const { all: showList } = useFilterList();
  const { showGrid } = useFilterPlan();
  const filterHeadStore = useFilterHead();

  const current = computed(() => filterHeadStore.currentFlatFilter);

  async function load() {
    switch(current.value) {
      case 'list': return showList();
      case 'plan': return showGrid();
    }
  }

  useAsyncData(() => load());
  watch(current, () => load());
</script>
