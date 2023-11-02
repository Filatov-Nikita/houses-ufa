<template>
  <div class="company-info-items">
    <Item
      class="company-info-items__item"
      v-for="item in items"
      :key="item.title"
      v-bind="item"
    />
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import { items } from '../data';
</script>


<style scoped lang="scss">
  .company-info-items {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(100% / 12 * 3 - 20px);
      margin: 10px;
    }
  }
</style>
