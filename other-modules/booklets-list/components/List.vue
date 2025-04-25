<template>
  <div class="items">
    <ListItem
      class="list-item"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import type { BookletItem } from '../types';
  import ListItem from './ListItem.vue';

  defineProps<{
    items: BookletItem[],
  }>();
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }

  .list-item {
    width: calc(50% - 20px);
    margin: 10px;

    @include sm {
      width: calc(100% - 20px);
    }
  }
</style>
