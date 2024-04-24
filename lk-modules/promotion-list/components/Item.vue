<template>
  <article class="promotion-item">
    <h2 class="promotion-item__title">{{ item.title }}</h2>
    <p class="promotion-item__text">{{ item.body }}</p>
    <p class="promotion-item__final">Дедлайн: {{ $formatDate(item.ends_at) }}</p>
  </article>
</template>

<script setup lang="ts">
  import { PromoOne } from '../types';

  defineProps<{
    item: PromoOne,
  }>();
</script>

<style scoped lang="scss">
  .promotion-item {
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    @apply tw-bg-base00;

    &__title {
      @apply tw-text-2xl;
    }

    &__text, &__final {
      @apply tw-text-sm tw-text-text02;
    }

    &__final {
      margin-top: auto;
    }
  }
</style>
