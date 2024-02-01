<template>
  <div class="tender-table-block">
    <Toolbar class="tender-table-block__head" :count="count" />
    <div class="scrol-area">
      <Table v-if="response" :items="response.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Toolbar from './components/Toolbar.vue';
  import Table from './components/Table.vue';
  import type { TenderOne } from './types';

  const { data: response } = await useDataFetch<{ data: TenderOne[] }>('/lead/procurements');

  const count = computed(() => {
    if(!response.value) return 0;
    return response.value.data.length;
  });
</script>

<style scoped lang="scss">
  .tender-table-block {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 16px;
    }

    &__head {
      margin-bottom: 32px;
    }
  }

  .scrol-area {
    overflow-y: hidden;
  }
</style>
