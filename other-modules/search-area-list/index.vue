<template>
  <div class="search-table-block">
    <div class="scroll-area">
      <Table v-if="response" :items="response.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Table from './components/Table.vue';
  import type { AreaOne } from './types';

  const { data: response } = await useDataFetch<{ data: AreaOne[] }>('/lead/land-plots');
</script>

<style scoped lang="scss">
  .search-table-block {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 16px;
    }
  }

  .scroll-area {
    overflow-y: hidden;
  }
</style>
