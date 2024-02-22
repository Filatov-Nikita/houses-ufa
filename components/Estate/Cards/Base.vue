<template>
  <component :is="to ? NuxtLink : tag ?? 'div'"
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
    <div v-if="badges && badges.length > 0" class="estate-card__badges">
      <EstateBadgesPromo
        class="estate-card__badge"
        v-for="badge in badges"
        :key="badge.id"
        :badge="badge"
      />
    </div>
  </component>
</template>

<script setup lang="ts">
  import { NuxtLink } from '#components';
  import type { RouteLocationRaw } from 'vue-router';
  import type { Badge } from '@/types/estate/badges';

  interface Props {
    theme?: 'white' | 'gray',
    name: string,
    params: string[],
    images: string | string[],
    tag?: string,
    to?: RouteLocationRaw,
    badges?: Badge[],
  }

  withDefaults(defineProps<Props>(), {
    theme: 'white',
  });
</script>

<style scoped lang="scss">
  .estate-card {
    border-radius: 16px;
    padding: 24px;

    @include sm {
      padding: 24px 16px;
    }

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

    &__badges {
      margin-top: 16px;
    }

    &__badge {
      & + & {
        margin-top: 8px;
      }
    }
  }
</style>
