<template>
  <section>
    <div class="wrapper">
      <BaseWait :waiting="loading">
        <template #loader>
          <BaseSkeleton class="tw-w-full tw-h-[500px] tw-rounded-2xl" />
        </template>
        <div class="article-content">
          <div class="article-content__area">
            <div v-if="img" class="article-content__img">
              <img :width="img.width" :height="img.height" :src="img.url" loading="lazy" />
            </div>
            <p class="article-content__text" v-html="body ?? '-'"></p>
            <div class="article-content__source" v-if="sourceUrl">
              Новость взята из источника: <a :href="sourceUrl">{{ sourceUrl }}</a>
            </div>
          </div>
        </div>
      </BaseWait>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { Image } from '@/types/articles';

  interface Props {
    img: Image | null,
    body: string | null,
    loading: boolean,
    sourceUrl: string | null
  };

  defineProps<Props>();
</script>

<style>
  .article-content__text a {
    @apply tw-text-primary tw-underline;
  }
</style>

<style scoped lang="scss">
  .article-content {
    @apply tw-bg-white tw-rounded-2xl tw-px-4 tw-py-6 lg:tw-p-6 xl:tw-p-10;

    &__area {
      @apply lg:tw-w-[786px] xl:tw-w-[860px] tw-grid tw-gap-10 lg:tw-gap-12;
    }

    &__img {
      @apply tw-rounded-2xl tw-overflow-hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__text {
      white-space: pre-wrap;
    }

    &__source {
      @apply tw-text-sm;
      a {
        @apply tw-text-primary;
      }
    }
  }
</style>
