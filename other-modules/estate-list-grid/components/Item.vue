<template>
  <NuxtLink class="estate-grid-item" :to="to" target="_blank">
    <div>
      <div class="estate-grid-item__name">{{ item.title }}</div>
      <div class="estate-grid-item__price" v-if="item.subtitle">
        {{ item.subtitle }}
      </div>
    </div>
    <div class="estate-grid-item__bottom">
      <div class="estate-grid-item__location" v-if="item.marketing_tag">
        {{ item.marketing_tag }}
      </div>
      <div class="estate-grid-item__badge" v-if="item.location_tag">
        <BaseIcon class="estate-grid-item__badge-icon" name="geo" />
        <span>{{ item.location_tag }}</span>
      </div>
    </div>
    <img
      class="estate-grid-item__img"
      v-if="item.image"
      :width="item.image.width ?? 0"
      :height="item.image.height ?? 0"
      :src="item.image.url"
      :alt="item.title"
      loading="lazy"
    >
    <div class="estate-grid-item__next">
      <BaseIcon class="estate-grid-item__next-icon" name="forward-line" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { PosterItem } from '../types';

  const props = defineProps<{
    item: PosterItem,
  }>();

  const to = computed(() => {
    return props.item.url;
  });
</script>

<style scoped lang="scss">
  .estate-grid-item {
    display: block;
    border-radius: 16px;
    position: relative;
    height: 374px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    @apply tw-text-white;

    &__name {
      font-weight: 600;
      margin-bottom: 4px;
      @apply tw-text-2xl;
    }

    &__price {
      @apply tw-text-lg;
    }

    &__bottom {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    &__location {
      padding: 4px 12px;
      margin-bottom: 12px;
    }

    &__badge {
      padding: 10px 12px;
      display: flex;
      gap: 12px;
    }

    &__badge-icon {
      width: 24px;
      height: 24px;
    }

    &__location, &__badge {
      border-radius: 8px;
      backdrop-filter: blur(4px);
      background: rgba(79, 79, 79, 0.4);
      @apply tw-text-base;
    }

    &__img {
      border-radius: 16px;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
      object-position: center;
      z-index: -2;
    }

    &__next {
      position: absolute;
      bottom: 24px;
      left: 24px;
      opacity: 0;
      width: 48px;
      height: 48px;
      padding: 12px;
      border-radius: 8px;
      transition: opacity 300ms;
      @apply tw-text-primary tw-bg-white;
    }

    &:hover &__next {
      opacity: 1;
    }

    &__next-icon {
      width: 24px;
      height: 24px;
    }

    &::after {
      content: '';
      display: block;
      border-radius: 16px;
      background: linear-gradient(96deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.00) 100%);
      position: absolute;
      z-index: -1;
      @apply tw-inset-0;
    }
  }
</style>
