<template>
  <div class="promotion-page">
    <h1 class="promotion-page__title">Акции</h1>
    <PromotionList />
  </div>
</template>

<script setup lang="ts">
  import PromotionList from '@/lk-modules/b2t/promotion-list/index.vue';

  definePageMeta({
    layout: 'lk-b2t',
    middleware: ['auth'],
  });
</script>

<style scoped lang="scss">
  .promotion-page {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 32px;
      @apply tw-text-text00;
    }
  }
</style>
