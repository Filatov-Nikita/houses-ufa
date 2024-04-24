<template>
  <div class="promotion-page">
    <h1 class="promotion-page__title">Акции</h1>
    <PromotionList />
  </div>
</template>

<script setup lang="ts">
  import PromotionList from '@/other-modules/promotion-list/index.vue';

  definePageMeta({
    layout: 'lk-b2y',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'ЖК ЛК агентства | Акции',
  });
</script>

<style scoped lang="scss">
  .promotion-page {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 16px;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 32px;
      @apply tw-text-text00;

      @include sm {
        font-size: 24px;
        line-height: 1.3;
        margin-bottom: 24px;
      }
    }
  }
</style>
