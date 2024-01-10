<template>
  <div class="tender-table-block">
    <Toolbar class="tender-table-block__head" />
    <Table />
  </div>
</template>

<script setup lang="ts">
  import Toolbar from './components/Toolbar.vue';
  import Table from './components/Table.vue';
</script>

<style scoped lang="scss">
  .tender-table-block {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    &__head {
      margin-bottom: 32px;
    }
  }
</style>
