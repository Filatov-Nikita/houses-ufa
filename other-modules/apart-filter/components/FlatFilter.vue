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

  const { all } = useFilterList();
  all();
</script>
