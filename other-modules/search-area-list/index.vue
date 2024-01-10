<template>
  <div class="search-table-block">
    <Table />
  </div>
</template>

<script setup lang="ts">
  import Table from './components/Table.vue';
</script>

<style scoped lang="scss">
  .search-table-block {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;
  }
</style>
