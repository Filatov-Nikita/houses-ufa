<template>
  <button class="file-preview" :disabled="disabled">
    <div class="file-preview__icon-wrap">
      <BaseIcon class="file-preview__icon" name="file-text" />
    </div>
    <div class="file-preview__body">
      <p class="file-preview__name">{{ file.file_name }}</p>
      <p class="file-preview__size">{{ filesize }}</p>
    </div>
    <div class="file-preview__action-wrap">
      <div class="file-preview__action">
        <BaseIcon class="file-preview__action-icon" color="tw-fill-white" name="download-file" />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
  import type { DocFile } from '../types';

  const props = defineProps<{
    file: DocFile,
    disabled?: boolean,
  }>();

  const filesize = computed(() => (props.file.size_in_bytes / 1024).toFixed(0) + ' Кб');

  const fileUrl = computed(() => `${useRuntimeConfig().public.rootApi}b2y/closing-docs/${props.file.id}`);
</script>

<style scoped lang="scss">
  .file-preview {
    display: flex;
    gap: 16px;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid theme('colors.border00');
    cursor: pointer;
    @apply tw-bg-base00 tw-text-left;

    &:hover &__name {
      @apply tw-text-primary-hover;
    }

    &:hover &__action {
      @apply tw-bg-primary-hover;
    }

    &:disabled {
      opacity: 0.6 !important;
      pointer-events: none;
    }

    &__icon-wrap {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      padding: 12px;
      border-radius: 8px;
      @apply tw-text-text02 tw-bg-white;
    }

    &__icon {
      width: 100%;
      height: 100%;
    }

    &__name {
      @apply tw-text-text00 tw-text-base;
    }

    &__size {
      @apply tw-text-text02 tw-text-sm;
    }

    &__action-wrap {
      flex-grow: 1;
      text-align: right;
      line-height: 0;
      font-size: 0px;
    }

    &__action-icon {
      width: 24px;
      height: 24px;
    }

    &__action {
      display: inline-block;
      padding: 12px;
      border-radius: 8px;
      @apply tw-bg-primary;
    }
  }
</style>
