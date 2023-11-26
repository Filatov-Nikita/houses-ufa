<template>
  <div class="town-similar-list">
    <EstateCardsTown
      class="town-similar-list__item"
      v-for="item in list"
      :key="item.id"
      :town="item"
    />
  </div>
</template>

<script setup lang="ts">
  import { useTownSimilar } from '../store';

  const store = useTownSimilar();

  const list = computed(() => {
    const array = store.data?.data ?? [];
    const newArr = array.map(el => {
      return {
        ...el,
        layout: { ...el.layout, feed_images: el.layout.images }
      };
    });
    return newArr;
  });
</script>

<style scoped lang="scss">
  .town-similar-list {
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
