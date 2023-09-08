<template>
  <div
    class="lg:tw-grid lg:tw-grid-cols-[394px_1fr] xl:tw-grid-cols-[440px_1fr]"
  >
    <div>
      <BaseTabsGroup v-model="tab" class="tw-mb-6 lg:tw-mb-8">
        <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
          {{ item.title }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>

      <div>
        <BaseTabsTabContent v-model="tab">
          <BaseTabsTabContentItem
            name="buyer"
            class="tw-hidden lg:tw-grid lg:tw-gap-6"
            v-if="sectionsBuyerList"
          >
            <button
              v-for="item in sectionsBuyerList"
              @click="selectSection('buyer', item)"
              class="tw-text-body_l tw-text-left"
              :class="[
                item.name === sectionBuyer?.name
                  ? 'tw-text-primary'
                  : 'tw-text-text02',
              ]"
            >
              {{ item.name }}
            </button>
          </BaseTabsTabContentItem>
          <BaseTabsTabContentItem
            name="owner"
            class="tw-hidden lg:tw-grid lg:tw-gap-6"
            v-if="sectionsOwnerList"
          >
            <button
              v-for="item in sectionsOwnerList"
              @click="selectSection('owner', item)"
              class="tw-text-body_l tw-text-left"
              :class="[
                item.name === sectionOwner?.name
                  ? 'tw-text-primary'
                  : 'tw-text-text02',
              ]"
            >
              {{ item.name }}
            </button>
          </BaseTabsTabContentItem>
        </BaseTabsTabContent>
      </div>
    </div>
    <div>
      <BaseTabsTabContent v-model="tab">
        <BaseTabsTabContentItem name="buyer" key="buyer">
          <div class="section__top">
            <h2 class="section__title">{{ sectionBuyer?.name }}</h2>
          </div>
          <FaqList v-if="list" v-bind="list" />
        </BaseTabsTabContentItem>
        <BaseTabsTabContentItem name="owner" key="owner">
          <div class="section__top">
            <h2 class="section__title">{{ sectionOwner?.name }}</h2>
          </div>
          <FaqList v-if="list" v-bind="list" />
        </BaseTabsTabContentItem>
      </BaseTabsTabContent>
      <div ref="scrollArea" class="tw-flex tw-justify-center tw-mt-2">
        <BaseButton
          class="select-btn"
          :class="{ 'select-btn__fixed': isFixed }"
          @click="openPopupSections = true"
        >
          Выберите раздел</BaseButton
        >
      </div>
    </div>
  </div>
  <ModalsOther
    title="Выберите раздел"
    :is-full="true"
    :forMob="true"
    v-model="openPopupSections"
  >
    <div class="tw-grid tw-gap-2" v-if="tab === 'buyer'">
      <BaseButton
        v-for="item in sectionsBuyerList"
        @click="selectSection('buyer', item)"
        theme="gray"
        class="active"
      >
        {{ item.name }}
      </BaseButton>
    </div>
    <div class="tw-grid tw-gap-2" v-if="tab === 'owner'">
      <BaseButton
        v-for="item in sectionsOwnerList"
        @click="selectSection('owner', item)"
        theme="gray"
        class="active"
      >
        {{ item.name }}
      </BaseButton>
    </div>
  </ModalsOther>
</template>
<script lang="ts" setup>
import FaqList from './list.vue'

import { useFaqStore } from '../store'
import { storeToRefs } from 'pinia'

interface Section {
  id: number
  name: string
  priority: number
  target: 'buyer' | 'owner'
}

const faqStore = useFaqStore()
const { sections, list } = storeToRefs(faqStore)

const scrollArea = ref<HTMLElement>()
const isFixed = ref(true)
const options = {
  root: null,
  rootMargin: '0px',
  threshold: [0, 1],
}

const openPopupSections = ref(false)
const sectionsBuyerList = computed(() => {
  if (sections.value) {
    return sections.value.filter((item) => item.target === 'buyer')
  }
})
const sectionsOwnerList = computed(() => {
  if (sections.value) {
    return sections.value.filter((item) => item.target === 'owner')
  }
})
const sectionBuyer = ref<Section>()
const sectionOwner = ref<Section>()
const tab = ref('buyer')
const tabs = [
  {
    name: 'buyer',
    title: 'Покупателям',
  },
  {
    name: 'owner',
    title: 'Владельцам',
  },
]
const selectSection = async (type: 'buyer' | 'owner', item: Section) => {
  if (type === 'buyer') sectionBuyer.value = item
  if (type === 'owner') sectionOwner.value = item
  await faqStore.getList(item.id)
  if (openPopupSections.value) openPopupSections.value = false
}
const init = async () => {
  await faqStore.getSections()
  if (sectionsBuyerList.value)
    selectSection('buyer', sectionsBuyerList.value[0])
}
init()
onMounted(() => {
  if (scrollArea.value) {
    let observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].boundingClientRect.top > 0) {
        if (entries[0].isIntersecting) {
          isFixed.value = false
        } else {
          isFixed.value = true
        }
      }
    }, options)
    observer.observe(scrollArea.value)
  }
})
watch(tab, async (val) => {
  if (val === 'buyer' && sectionsBuyerList.value)
    await selectSection('buyer', sectionsBuyerList.value[0])
  if (val === 'owner' && sectionsOwnerList.value)
    await selectSection('owner', sectionsOwnerList.value[0])
})
</script>
<style lang="scss" scoped>
.select-btn {
  @apply lg:tw-hidden;
  &__fixed {
    @apply tw-fixed tw-bottom-5 tw-left-1/2 tw-transform -tw-translate-x-1/2;
  }
}
</style>
