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

  const { all } = useFilterList();
  const { showGrid } = useFilterPlan();

  all();
  showGrid();
</script>
