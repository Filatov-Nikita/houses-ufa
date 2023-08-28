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
            name="sellers"
            class="tw-hidden lg:tw-grid lg:tw-gap-6"
          >
            <button
              v-for="item in sectionsSellerList"
              @click="sectionSeller = item"
              class="tw-text-body_l tw-text-left"
              :class="[
                item.name === sectionSeller?.name
                  ? 'tw-text-primary'
                  : 'tw-text-text02',
              ]"
            >
              {{ item.name }}
            </button>
          </BaseTabsTabContentItem>
          <BaseTabsTabContentItem
            name="owners"
            class="tw-hidden lg:tw-grid lg:tw-gap-6"
          >
            <button
              v-for="item in sectionsOwnerList"
              @click="sectionOwner = item"
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
        <BaseTabsTabContentItem name="sellers">
          <div class="section__top">
            <h2 class="section__title">{{ sectionSeller?.name }}</h2>
          </div>
          <div class="tw-grid tw-gap-2">
            <AccordionMain
              v-for="item in 6"
              class="tw-bg-white tw-py-6 tw-px-4 tw-rounded-2xl"
              icons-class="tw-h-10 tw-w-10 tw-rounded-lg tw-grid tw-place-content-center tw-bg-secondary"
            >
              <template #title>
                Какие условия по ипотеке и в каких банках?
              </template>

              <template #content>
                <div class="tw-mt-4 tw-text-text01 lg:tw-text-body_m2">
                  Компания сотрудничает более чем с 20 банками-партнерами в
                  рамках ипотечного кредитования. Список банков и условиями
                  кредитования, а также ипотечный калькулятор находятся по
                  ссылке Если Вы не увидели интересующий Вас банк в этом списке,
                  наши менеджеры по ипотеке проведут индивидуальную аккредитацию
                  в любом банке под Вашу сделку.
                </div>
              </template>
            </AccordionMain>
          </div>
        </BaseTabsTabContentItem>
        <BaseTabsTabContentItem name="owners">
          <div class="section__top">
            <h2 class="section__title">{{ sectionOwner?.name }}</h2>
          </div>
          <div class="tw-grid tw-gap-2">
            <AccordionMain
              v-for="item in 6"
              class="tw-bg-white tw-py-6 tw-px-4 tw-rounded-2xl"
              icons-class="tw-h-10 tw-w-10 tw-rounded-lg tw-grid tw-place-content-center tw-bg-secondary"
            >
              <template #title>
                Какие условия по ипотеке и в каких банках?
              </template>

              <template #content>
                <div class="tw-mt-4 tw-text-text01 lg:tw-text-body_m2">
                  Компания сотрудничает более чем с 20 банками-партнерами в
                  рамках ипотечного кредитования. Список банков и условиями
                  кредитования, а также ипотечный калькулятор находятся по
                  ссылке Если Вы не увидели интересующий Вас банк в этом списке,
                  наши менеджеры по ипотеке проведут индивидуальную аккредитацию
                  в любом банке под Вашу сделку.
                </div>
              </template>
            </AccordionMain>
          </div>
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
    v-model="openPopupSections"
  >
    <div class="tw-grid tw-gap-2">
      <BaseButton
        v-for="item in sectionsSellerList"
        theme="gray"
        class="active"
      >
        {{ item.name }}
      </BaseButton>
    </div>
  </ModalsOther>
</template>
<script lang="ts" setup>
interface Option {
  id: number
  name: string
}
const scrollArea = ref<HTMLElement>()
const isFixed = ref(true)
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
}

const openPopupSections = ref(false)
const sectionsSellerList = [
  {
    id: 1,
    name: 'Ипотека',
  },
  {
    id: 2,
    name: 'Документы по сделке',
  },
  {
    id: 3,
    name: 'Обмеры БТИ',
  },
  {
    id: 4,
    name: 'Материнский капитал',
  },
  {
    id: 5,
    name: 'Налоги',
  },
] as Option[]
const sectionsOwnerList = [
  {
    id: 1,
    name: 'Документы по сделке',
  },
  {
    id: 2,
    name: 'Ипотека',
  },
  {
    id: 3,
    name: 'Обмеры БТИ',
  },
  {
    id: 4,
    name: 'Материнский капитал',
  },
  {
    id: 5,
    name: 'Налоги',
  },
] as Option[]
const sectionSeller = ref<Option>()
const sectionOwner = ref<Option>()
const tab = ref('')
const tabs = [
  {
    name: 'sellers',
    title: 'Покупателям',
  },
  {
    name: 'owners',
    title: 'Владельцам',
  },
]

onMounted(() => {
  tab.value = tabs[0].name
  if (scrollArea.value) {
    var observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        isFixed.value = false
      } else {
        isFixed.value = true
      }
    }, options)
    observer.observe(scrollArea.value)
  }
  sectionSeller.value = sectionsSellerList[0]
  sectionOwner.value = sectionsOwnerList[0]
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
