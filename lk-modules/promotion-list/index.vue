<template>
  <div class="promotion-list" v-if="response">
    <p v-if="response.data.length === 0" class="promotion-list__empty">Нет акций</p>
    <div v-else class="promotion-list__grid">
      <Item
        class="promotion-list__item"
        v-for="item in response.data"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PromoOne } from './types';
  import Item from './components/Item.vue';

  const { data: response } = await useDataFetch<{ data: PromoOne[] }>('b2t/boosts', {
    baseURL: useRuntimeConfig().public.rootApi,
  });
</script>

<style scoped lang="scss">
  .promotion-list {
    &__empty {
      @apply tw-text-center tw-text-xl tw-p-6;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__item {
      width: calc(50% - 20px);
      margin: 10px;

      @include md {
        width: calc(100% - 20px);
      }
    }
  }
</style>
