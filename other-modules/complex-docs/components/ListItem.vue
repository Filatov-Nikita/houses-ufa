<template>
  <a class="item" :href="item.file?.url ?? item.url ?? '/'" target="_blank">
    <div class="body">
      <div class="name">{{ item.name }}</div>
      <div class="meta" v-if="item.file">
        {{ item.file.size_human_readable }}, {{ item.file.extension }}
      </div>
    </div>
    <button class="btn" type="button">
      <BaseIcon name="download-file" fit />
    </button>
  </a>
</template>

<script setup lang="ts">
  import type { DocumentItem } from '../types';

  defineProps<{
    item: DocumentItem,
  }>();
</script>

<style scoped lang="scss">
  .item {
    display: flex;
    align-items: flex-start;
    column-gap: 48px;
  }

  .item:hover .name {
    @apply tw-text-primary;
  }

  .item:hover .btn {
    @apply tw-text-white tw-bg-primary;
  }

  .item:hover .meta {
    @apply tw-text-primary-hover;
  }

  .body {
    flex-grow: 1;
  }

  .name {
    @apply tw-text-text00 tw-text-xl;
  }

  .meta {
    @apply tw-text-text02 tw-text-sm tw-mt-1;
  }

  .btn {
    flex-shrink: 0;
    border-radius: 8px;
    padding: 8px;
    width: 40px;
    height: 40px;
    @apply tw-bg-base00 tw-text-primary;
  }
</style>
