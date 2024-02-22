<template>
  <div class="estate-badge" :style="{ '--color': badge.color }">
    <span class="estate-badge__icon-wrap" v-if="badge.image">
      <img class="estate-badge__icon" :width="badge.image.width ?? 0" :height="badge.image.height ?? 0" :src="badge.image.url" />
    </span>
    <span class="estate-badge__label">{{ badge.label }}</span>
  </div>
</template>

<script setup lang="ts">
  import type { Badge } from '@/types/estate/badges';

  defineProps<{
    badge: Badge,
  }>();
</script>

<style scoped lang="scss">
  .estate-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: var(--color);
    @apply tw-text-white;

    &__icon-wrap {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    &__icon {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    &__label {
      font-size: 14px;
      line-height: 24px;
    }
  }
</style>
