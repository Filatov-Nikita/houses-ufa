<template>
  <article class="faq-item">
    <div class="faq-item__header" @click="showed = !showed">
      <h3 class="faq-item__title">{{ title }}</h3>
      <BtnsActionsBase class="faq-item__btn" :class="{ 'faq-item__btn--active': showed }" icon="forward" />
    </div>
    <transition name="show">
      <div class="faq-item__body" v-if="showed">
        <p v-html="body"></p>
        <div class="faq-item__files" v-if="files.length > 0">
          <div
            class="faq-item__file-item"
            v-for="file in files"
            :key="file.id"
          >
            <FilePreview
              :file="file"
              :qna-id="id"
            />
          </div>
        </div>
      </div>
    </transition>
  </article>
</template>

<script setup lang="ts">
  import type { File } from '@/types/share';
  import FilePreview from './FilePreview.vue'

  defineProps<{
    title: string,
    body: string,
    files: File[],
    id: number,
  }>();

  const showed = ref(false);
</script>

<style>
  .faq-item__body p a {
    @apply tw-text-primary tw-underline;
  }
</style>

<style scoped lang="scss">
  .faq-item {
    padding: 24px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include md {
      padding: 24px 16px;
    }

    &__header {
      display: flex;
      gap: 48px;
      cursor: pointer;
      user-select: none;

      @include md {
        gap: 16px;
      }
    }

    &__title {
      flex-grow: 1;
      align-self: center;
      @apply tw-text-text00 tw-text-xl;

      @include md {
        @apply tw-text-lg;
      }
    }

    &__btn {
      transition: transform 200ms;
      transform: rotate(90deg);
      flex-shrink: 0;

      &--active {
        transform: rotate(-90deg);
      }
    }

    &__body {
      padding-top: 16px;
      padding-right: 80px;
      font-size: 16px;
      line-height: 28px;
      white-space: pre-wrap;
      @apply tw-text-text01;

      @include md {
        padding-right: 8px;
      }
    }

    &__files {
      display: flex;
      flex-wrap: wrap;
      margin: 22px -8px -8px;
    }

    &__file-item {
      width: calc(50% - 16px);
      margin: 8px;

      @include lg {
        width: calc(100% - 16px);
      }
    }
  }

  .show-enter-active,
  .show-leave-active {
    transform: translateX(0);
    transition: all 250ms linear;
    opacity: 1;
  }

  .show-enter-from,
  .show-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
