<template>
  <div class="flat-similar-list">
    <Item
      class="flat-similar-list__item"
      v-for="item in list"
      :key="item.id"
      :flat="item"
    />
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import { useFlatSimilar } from '../store';

  const store = useFlatSimilar();

  const list = computed(() => store.data?.data ?? []);
</script>

<style scoped lang="scss">
  .flat-similar-list {
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
