<template>
  <div class="complex-flat-list">
    <Item
      class="complex-flat-list__item"
      v-for="flat in store.flatList"
      :flat="flat"
    />
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import { useComplexFlatGroups } from '../store';

  const store = useComplexFlatGroups();
</script>


<style scoped lang="scss">
  .complex-flat-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(100% / 12 * 3 - 20px);
      margin: 10px;

      @include lg {
        width: calc(100% / 12 * 4 - 20px);
      }

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }
</style>
