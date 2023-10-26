<template>
  <NuxtLink
    class="estate-card"
    :class="`estate-card--${theme}`"
    :to="to"
  >
    <div class="estate-card__header">
      <div class="estate-card__top">
        <div class="estate-card__name" v-html="name"></div>
        <div class="estate-card__params">
          <div class="estate-card__param" v-for="param in params">{{ param }}</div>
        </div>
      </div>
      <div class="estate-card__actions">
        <slot name="actions" />
      </div>
    </div>
    <EstateCardsImages :theme="theme" :images="images" />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    theme?: 'white' | 'gray',
    name: string,
    params: string[],
    images: string | string[],
    to?: string,
  }

  withDefaults(defineProps<Props>(), {
    theme: 'white',
    to: '/',
  });
</script>

<style scoped lang="scss">
  .estate-card {
    border-radius: 16px;
    padding: 24px;

    &--white {
      @apply tw-bg-white;
    }

    &--gray {
      @apply tw-bg-base00;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 16px;
    }

    &__name {
      @apply tw-text-base tw-text-text00;
    }

    &__params {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 4px;
    }

    &__param {
      @apply tw-text-text02 tw-text-sm;

      & + & {
        &::before {
          content: '·';
          display: inline-block;
          font-size: 12px;
          line-height: 16px;
          margin-right: 8px;
        }
      }
    }

    &__price {
      @apply tw-text-text00 tw-text-2xl;
    }

    &__actions {
      flex-shrink: 0;
      display: flex;
      gap: 8px;
    }
  }
</style>
