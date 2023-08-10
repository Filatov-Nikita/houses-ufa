<template>
  <div class="base-breadcrumbs">
    {{ pathStr }}
  </div>
</template>

<script setup lang="ts">
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

  const breadStore = useBreadcrumbsStore();

  const items = computed(() => breadStore.items);
  const pathStr = computed(() => items.value.map(item => item.label).join(' / '));
</script>

<style scoped lang="scss">
  .base-breadcrumbs {
    display: inline-block;
    @apply tw-text-base tw-font-normal;
  }
</style>
