<template>
  <div v-if="response" class="promo-list">
    <p v-if="response.data.length === 0" class="promo-list__empty">
      Нет действующих акций
    </p>
    <div v-else class="promo-list__items">
      <Item
        class="promo-list__item"
        v-for="item in response.data"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Item from './components/Item.vue';
  import { PromotionListItem } from '@/types/promotions';

  const { data: response } = await useDataFetch<{ data: PromotionListItem[] }>('marketing/promotions');
</script>

<style scoped lang="scss">
  .promo-list {
    &__empty {
      text-align: center;
      padding: 24px;
      @apply tw-text-lg;
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__item {
      margin: 10px;
      width: calc(50% - 20px);

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }
</style>
