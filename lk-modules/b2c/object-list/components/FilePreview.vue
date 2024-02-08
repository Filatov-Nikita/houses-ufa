<template>
  <a class="file-preview" :href="fileUrl" target="_blank">
    <div class="file-preview__icon-wrap">
      <BaseIcon class="file-preview__icon" name="file" />
    </div>
    <div class="file-preview__body">
      <p class="file-preview__name">{{ file.name }}</p>
      <p class="file-preview__size">{{ filesize }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
  import type { File } from '@/types/share';

  const props = defineProps<{
    file: File,
    fileBaseUrl: string,
  }>();

  const filesize = computed(() => (props.file.size_in_bytes / 1024).toFixed(0) + ' Кб');

  const fileUrl = computed(() => `${props.fileBaseUrl}files/${props.file.id}`);
</script>
<style scoped lang="scss">
  .file-preview {
    display: flex;
    gap: 12px;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    @apply tw-bg-white;

    &:hover &__name {
      @apply tw-text-primary-hover;
    }

    &__icon-wrap {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      padding: 12px;
      border-radius: 8px;
      @apply tw-text-icon tw-bg-base00;
    }

    &__icon {
      width: 100%;
      height: 100%;
    }

    &__name {
      @apply tw-text-text01 tw-text-base;
    }

    &__size {
      margin-top: 4px;
      @apply tw-text-text02 tw-text-sm;
    }
  }
</style>
