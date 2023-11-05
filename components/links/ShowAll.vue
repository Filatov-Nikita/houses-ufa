<template>
  <NuxtLink class="show-all-link show-all-link--desktop" :to="to">
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
    @apply tw-gap-2 tw-text-primary;

    &--mob {
      @apply tw-mt-4 tw-flex lg:tw-hidden tw-justify-between tw-items-center;
    }

    &--desktop {
      @apply tw-hidden lg:tw-flex tw-items-center;
    }

    &__icon {
      @apply tw-w-6 tw-h-6;
    }
  }
</style>
