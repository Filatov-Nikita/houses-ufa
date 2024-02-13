<template>
  <a class="file-preview" :href="fileUrl" target="_blank">
    <div class="file-preview__icon-wrap">
      <BaseIcon class="file-preview__icon" name="file-text" />
    </div>
    <div class="file-preview__body">
      <p class="file-preview__name">{{ file.name }}</p>
      <p class="file-preview__size">{{ filesize }}</p>
    </div>
    <div class="file-preview__action-wrap">
      <div class="file-preview__action">
        <BaseIcon class="file-preview__action-icon" color="tw-fill-white" name="eye" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
  import type { File } from '@/types/share';

  const props = defineProps<{
    file: File,
    qnaId: number,
  }>();

  const filesize = computed(() => (props.file.size_in_bytes / 1024).toFixed(0) + ' Кб');

  const fileUrl = computed(() => `${useRuntimeConfig().public.host}crm/press-center/faq/qna/${props.qnaId}/files/${props.file.id}`);
</script>

<style scoped lang="scss">
  .file-preview {
    display: flex;
    gap: 16px;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid theme('colors.border00');
    cursor: pointer;
    @apply tw-bg-base00;

    &:hover &__name {
      @apply tw-text-primary-hover;
    }

    &:hover &__action {
      @apply tw-bg-primary-hover;
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
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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

    &__body {
      overflow: hidden;
    }
  }
</style>
