<template>
  <div class="docs-download">
    <div class="list">
      <a v-for="item in documents" :key="item.id" :href="item.url" class="item" target="_blank">
        <div class="item__content">
          <div class="item__title">{{ item.name }}</div>
          <div class="item__subtitle">{{ item.size_human_readable }}, {{ item.extension }}</div>
        </div>
        <div class="item__icon">
          <BaseIcon name="download-file" />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Document } from '@/types/estate/estate-card';

  defineProps<{
    documents: Document[],
  }>();
</script>

<style lang="scss" scoped>
.docs-download {
  @apply tw-p-4 lg:tw-p-6 tw-rounded-2xl tw-bg-white;
  .list {
    .item {
      @apply tw-pb-4 tw-flex tw-justify-between tw-items-end;
      @apply lg:tw-items-start lg:tw-pb-6;
      &:last-child {
        padding-bottom: 0;
      }
      &:not(:first-child) {
        @apply tw-pt-4 tw-border-t tw-border-solid tw-border-border00;
        @apply lg:tw-pt-6;
      }
      &__content {
        @apply tw-grid tw-gap-1;
      }
      &__title {
        @apply lg:tw-text-h6;
      }
      &__subtitle {
        @apply tw-text-body_s tw-text-text02;
      }
      &__icon {
        @apply tw-w-7 tw-h-7 tw-bg-base00 tw-rounded tw-grid tw-place-content-center;
        @apply lg:tw-w-10 lg:tw-h-10 lg:tw-rounded-lg;
        svg {
          @apply tw-w-4 tw-h-4 tw-text-primary;
          @apply lg:tw-w-6 lg:tw-h-6;
        }
      }
    }
  }
}
</style>
