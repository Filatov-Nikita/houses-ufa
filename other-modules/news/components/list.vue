<template>
  <div class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-2 xl:tw-grid-cols-3">
    <NewsItem v-for="item in list" :key="item.id" v-bind="item" />
  </div>
</template>
<script lang="ts" setup>
import NewsItem from './item.vue'
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
interface Props {
  list: Article[]
}
const props = defineProps<Props>()
const createDateTime = () => {
  if ('1973-09-14T00:00:00Z') {
    const create = new Date('1973-09-14T00:00:00Z')
    return `${create.getDate()}.${
      String(create.getMonth()).length == 1
        ? '0' + create.getMonth()
        : create.getMonth()
    }.${create.getFullYear()}`
  }
}
</script>
<style lang="scss" scoped></style>
