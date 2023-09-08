<template>
  <BaseTabsGroup v-model="tab" class="tw-mb-6 lg:tw-mb-8">
    <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
      {{ item.title }}
    </BaseTabsGroupItem>
  </BaseTabsGroup>
  <BaseTabsTabContent v-model="tab">
    <BaseTabsTabContentItem name="tiding" key="tiding">
      <NewsList :list="tidingList" />
      <BaseButton
        v-if="countShowTiding !== 0"
        theme="white"
        class="tw-w-full tw-mt-6 xl:tw-mt-8"
        @click="newsStore.getArticles(tab)"
      >
        Показать ещё {{ countShowTiding }} из
        {{ totalTiding }}
      </BaseButton>
    </BaseTabsTabContentItem>
    <BaseTabsTabContentItem name="mass_media" key="mass_media">
      <NewsList :list="massMediaList" />
      <BaseButton
        v-if="countShowMassMedia !== 0"
        theme="white"
        class="tw-w-full tw-mt-6 xl:tw-mt-8"
        @click="newsStore.getArticles(tab)"
      >
        Показать ещё {{ countShowMassMedia }} из {{ totalMassMedia }}
      </BaseButton>
    </BaseTabsTabContentItem>
  </BaseTabsTabContent>
</template>
<script lang="ts" setup>
import NewsList from './list.vue'
import { useNewsStore } from '../store'
import { storeToRefs } from 'pinia'
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
const newsStore = useNewsStore()
const {
  step,
  totalMassMedia,
  totalTiding,
  tidingList,
  massMediaList,
  countShowTiding,
  countShowMassMedia,
} = storeToRefs(newsStore)

const init = async () => {
  await newsStore.getArticles(tab.value)
}

const tab = ref<'tiding' | 'mass_media'>('tiding')
const tabs = [
  {
    name: 'tiding',
    title: 'Новости',
  },
  {
    name: 'mass_media',
    title: 'СМИ о нас',
  },
]

await init()

watch(tab, async (val) => {
  await newsStore.getArticles(val)
  // if (val === 'tiding') tidingList.value = list.value
  // if (val === 'mass_media') massMediaList.value = list.value
})
</script>
<style lang="scss" scoped></style>
