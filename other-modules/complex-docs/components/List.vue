<template>
  <div>
    <ListItem
      class="list-item"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import type { DocumentItem } from '../types';
  import ListItem from './ListItem.vue';

  defineProps<{
    items: DocumentItem[],
  }>();
</script>

<style scoped lang="scss">
  .list-item {
    padding: 24px 0;
    border-bottom: 1px solid theme('colors.border00');

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border: 0;
      padding-bottom: 0;
    }
  }
</style>
