<template>
  <div class="base-breadcrumbs">
    <template v-for="(item, i) in items">
      <span v-if="!item.to">{{ item.label }}</span>
      <NuxtLink
        v-else
        :to="item.to"
        :class="{ 'tw-pointer-events-none': i === items.length - 1 }"
      >
        {{ item.label }}
      </NuxtLink>
      <span v-if="i !== items.length - 1"> / </span>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

  const breadStore = useBreadcrumbsStore();

  const items = computed(() => breadStore.items);
</script>

<style scoped lang="scss">
  .base-breadcrumbs {
    display: inline-block;
    @apply tw-text-base tw-font-normal;
  }
</style>
