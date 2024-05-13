<template>
  <NuxtLink class="article-item" :to="`/articles/${item.slug}`">
    <div v-if="item.published_at" class="article-item__date">
      {{ $formatDate(item.published_at) }}
    </div>
    <div class="article-item__text">{{ item.title }}</div>
    <div class="article-item__bottom">
      <span class="article-item__readmore">Подробнее</span>
      <div class="likes" @click.self.prevent="1">
        <div class="likes__col">{{ item.likes_count }}</div>
        <div class="likes__icon">
          <BaseIcon class="tw-w-full tw-h-full" color="tw-fill-icon" name="heart" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Article {
    id:           number;
    body:         string;
    published_at: string | null;
    source_url:   string;
    title:        string;
    type:         string;
    likes_count:  number;
    seo:          SEO;
    slug:         string,
  }

  interface SEO {
    description: string;
    key_words:   string;
    title:       string;
  }

  interface Props {
    item: Article
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
.article-item {
  padding: 48px 40px 40px;
  border-radius: 24px;
  @apply tw-bg-white tw-text-text00 tw-text-2xl;

  @include lg {
    padding: 24px;
    display: flex;
    flex-direction: column;
    @apply tw-text-xl;
  }

  @include sm {
    padding: 24px 16px;
  }

  &:hover {
    @apply tw-bg-secondary-hover;
  }

  &__date {
    margin-bottom: 16px;
    @apply tw-text-base tw-text-text02;
  }

  &__text {
    height: 96px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 48px;

    @include lg {
      height: auto;
      display: block;
      margin-bottom: 64px;
    }
  }

  &__readmore {
    @apply tw-text-base tw-text-text02;
  }

  &:hover &__readmore {
    @apply tw-text-primary-hover;
  }

  &__bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    justify-content: space-between;

    @include lg {
      margin-top: auto;
    }
  }
}

.likes {
  padding: 16px 12px;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  align-items: center;

  &__col {
    @apply tw-text-base tw-text-text00;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
