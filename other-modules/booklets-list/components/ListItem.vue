<template>
  <a class="item" :href="item.file?.url ?? '/'" target="_blank">
    <div class="preview" v-if="item.preview_desktop || item.preview_mobile">
      <picture>
        <source
          v-if="item.preview_mobile"
          :srcset="item.preview_mobile.url"
          media="(max-width: 767.9px)"
          :width="item.preview_mobile.width ?? 0"
          :height="item.preview_mobile.height ?? 0"
        />
        <img
          v-if="item.preview_desktop"
          class="preview-img"
          :width="item.preview_desktop.width ?? 0"
          :height="item.preview_desktop.height ?? 0"
          :src="item.preview_desktop.url"
          loading="lazy"
        />
      </picture>
    </div>
    <div class="body" >
      <div class="text">
        <div class="name">{{ item.name }}</div>
        <div class="caption" v-if="item.file">
          <span class="tw-uppercase">{{ item.file.extension }}</span>
          <span>·</span>
          <span>{{ item.file.size_human_readable }}</span>
        </div>
      </div>
      <button class="btn" type="button">
        <BaseIcon name="download-file" fit />
      </button>
    </div>
  </a>
</template>

<script setup lang="ts">
  import type { BookletItem } from '../types';

  defineProps<{
    item: BookletItem,
  }>();
</script>

<style scoped lang="scss">
  .item {
    display: block;
    border-radius: 16px;
    border: 1px solid theme('colors.border00');
    padding: 16px;

    &:hover {
      border-color: theme('colors.primary');

      .btn {
        @apply tw-bg-base00 tw-text-primary;
      }

      .name {
        @apply tw-text-primary;
      }

      .caption {
        @apply tw-text-primary-hover;
      }
    }
  }

  .preview {
    width: 100%;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    background: #F7F8F8;

    @include sm {
      width: 200px;
      height: 200px;
    }
  }

  .preview-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .body {
    margin-top: 24px;
    display: flex;
    align-items: center;
    column-gap: 48px;
  }

  .text {
    flex-grow: 1;
  }

  .name {
    @apply tw-text-text01 tw-text-base;
  }

  .caption {
    display: flex;
    align-items: center;
    column-gap: 8px;
    @apply tw-text-text02 tw-text-sm;
  }

  .btn {
    flex-shrink: 0;
    border-radius: 8px;
    padding: 12px;
    width: 48px;
    height: 48px;
    @apply tw-bg-primary tw-text-white;
  }
</style>
