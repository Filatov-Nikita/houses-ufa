<template>
  <NuxtLink class="card" to="/articles/1">
    <div>
      <div class="date tw-mb-4">{{ $formatTime(published_at) }}</div>
      <h4 class="tw-text-h6 lg:tw-text-h5 tw-line-clamp-3">
        {{ title }}
      </h4>
    </div>
    <div class="tw-flex tw-justify-between tw-items-center">
      <NuxtLink to="/" class="tw-text-text02 hover:tw-text-primary link"
        >Подробнее</NuxtLink
      >
      <BaseButton padding-classes="tw-p-2" theme="transparent">
        <BaseIcon
          v-if="is_favorite"
          name="heart_bg"
          class="tw-text-primary tw-w-6 tw-h-6"
        />
        <BaseIcon v-else name="heart" class="tw-w-6 tw-h-6" />
      </BaseButton>
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup>
interface Article {
  id: number
  body: string
  published_at: string | null
  source_url: string | undefined
  title: string
  type: 'tiding' | 'mass_media'
  seo: {
    description: string | null
    key_words: string | null
    title: string | null
  }
  images: string[]
}
const newsProps = defineProps<Article>()
const is_favorite = ref(false)
</script>
<style lang="scss" scoped>
.card {
  @apply tw-rounded-3xl tw-py-12 tw-px-10 tw-bg-white tw-grid tw-gap-16;
  .date {
    @apply tw-text-text02;
  }
  @media (hover: hover) {
    &:hover {
      @apply tw-bg-secondary-hover;
      .link {
        @apply tw-text-primary;
      }
    }
    .heart-btn:hover {
      @apply tw-bg-secondary;
      & > svg > path {
        @apply tw-fill-primary tw-stroke-none;
      }
    }
    svg.active > path {
      @apply tw-fill-primary tw-stroke-none;
    }
  }
}
</style>
