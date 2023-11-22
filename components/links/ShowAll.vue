<template>
  <NuxtLink class="show-all-link" :to="to">
    <span><slot /></span>
    <BaseIcon name="forward-line" color="tw-fill-primary" class="show-all-link__icon" />
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router';

  defineProps<{
    to: RouteLocationRaw,
  }>();
</script>

<style scoped lang="scss">
  .show-all-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    @apply tw-text-primary;

    &:hover {
      opacity: 0.7;
    }

    @include md {
      padding: 12px 0;
      justify-content: space-between;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
