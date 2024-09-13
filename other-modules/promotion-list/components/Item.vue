<template>
  <RouterLink class="promo-list-item" :to="`/promotions/${item.slug}`">
    <img
      v-if="item.image_mobile && $viewport.isLessThan('md')"
      class="promo-list-item__preview"
      :src="item.image_mobile.url"
      :width="item.image_mobile.width ?? 0"
      :height="item.image_mobile.height ?? 0"
      loading="lazy"
    />
    <img
      v-else-if="item.image"
      class="promo-list-item__preview"
      :src="item.image.url"
      :width="item.image.width ?? 0"
      :height="item.image.height ?? 0"
      loading="lazy"
    />
    <div class="promo-list-item__until">
      <p>до {{ $formatDate(item.ends_at) }}</p>
    </div>
    <div class="promo-list-item__body">
      <h2 class="promo-list-item__title">{{ item.title }}</h2>
      <p class="promo-list-item__text">{{ item.subtitle }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  import { PromotionListItem } from '@/types/promotions';

  defineProps<{
    item: PromotionListItem,
  }>();
</script>

<style scoped lang="scss">
  .promo-list-item {
    padding: 24px;
    border-radius: 16px;
    overflow: hidden;
    min-height: 344px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include md {
      min-height: 280px;
    }

    @include sm {
      padding: 16px;
    }

    &__preview {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }

    &__until {
      align-self: flex-start;
      border-radius: 8px;
      padding: 12px 16px;
      box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
      @apply tw-bg-white tw-text-text00;
    }

    &__body {
      margin-top: auto;
      @apply tw-text-white;
    }

    &__title {
      font-size: 20px;
      line-height: 1.6;
      font-weight: 600;
      margin-bottom: 6px;
    }

    &__text {

    }
  }
</style>
