<template>
  <BaseSkeleton v-if="loading" class="tw-w-full tw-h-[300px] tw-rounded-2xl" />
  <div class="file-list-empty" v-else-if="files.length === 0">
    Нет доступных документов.
  </div>
  <section class="file-list" v-else>
    <div class="file-list__wrap">
      <FilePreview class="file-list__file" v-for="doc in files" :file="doc" :disabled="loadingDocs && loadingDocs[doc.id]" @click="$emit('download:file', doc)" />
    </div>
    <BaseButton class="file-list__action" theme="green" @click="$emit('download:all')" :disabled="loadingAll">
      Скачать все документы
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
  import type { DocFile } from '../types';
  import FilePreview from './FilePreview.vue';

  defineProps<{
    loading?: boolean,
    files: DocFile[],
    loadingAll?: boolean,
    loadingDocs?: Record<string, boolean>,
  }>();

  defineEmits<{
    (event: 'download:file', file: DocFile): void,
    (event: 'download:all'): void,
  }>();
</script>

<style scoped lang="scss">
  .file-list {
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__file {
      width: calc(50% - 20px);
      margin: 10px;
    }

    &__action {
      margin-top: 16px;
      width: 100%;
    }
  }

  .file-list-empty {
    padding: 24px 0px;
    @apply tw-text-text00 tw-text-base tw-text-center;
  }
</style>
