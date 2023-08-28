<template>
  <SectionFirst
    :history-list="[
      { name: 'Главная', to: '/' },
      { name: 'Избранное и сравнение' },
    ]"
  >
    <template #title> Избранное и сравнение </template>
    <template #text> Описание </template>
    <template #icon>
      <img
        src="/assets/images/icons/first-section/heart.svg"
        alt=""
        class="tw-absolute tw-w-[84px] tw-h-[84px] tw-bottom-0 -tw-right-2 lg:tw-w-[234px] lg:tw-h-[234px] lg:-tw-bottom-10 lg:tw-right-10"
      />
    </template>
  </SectionFirst>
  <section>
    <div class="tw-container">
      <div
        class="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-4 tw-mb-6 xl:tw-mb-8"
      >
        <div class="tw-overflow-auto">
          <BaseTabsGroup v-model="tab" class="">
            <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
              {{ item.title }}
            </BaseTabsGroupItem>
          </BaseTabsGroup>
        </div>
        <div>
          <BaseButton
            v-if="openComparision"
            theme="white"
            @click="openComparision = false"
          >
            <div class="tw-flex tw-gap-2">
              <BaseIcon name="back" class="tw-text-primary tw-w-6 tw-h-6" />
              Вернуться
            </div>
          </BaseButton>
          <BaseButton v-else theme="white" @click="openComparision = true">
            <div class="tw-flex tw-gap-2">
              <BaseIcon
                name="comparison"
                class="tw-text-primary tw-w-6 tw-h-6"
              />
              Сравнение
            </div>
          </BaseButton>
        </div>
      </div>
      <template v-if="!openComparision">
        <tamplate v-if="tab === 'apartments'">
          <div
            v-if="favoriteList.length === 0"
            class="tw-bg-white tw-rounded-2xl tw-grid tw-place-items-center tw-text-center tw-gap-4 tw-px-4 tw-py-6 lg:tw-p-6"
          >
            <div class="tw-p-4 tw-bg-base00 tw-rounded-lg tw-w-fit tw-mb-4">
              <BaseIcon name="building" class="tw-w-8 tw-h-8" />
            </div>
            <h3 class="tw-text-h6">
              Вы ещё не добавили ни одной квартиры в избранное
            </h3>
            <p class="tw-max-w-[566px] tw-text-body_s tw-text-text02">
              Избранное — это отличный способ отслеживать интересующие вас
              объекты недвижимости и сохранять их для последующего просмотра или
              сравнения
            </p>
            <BaseButton class="tw-w-full lg:tw-w-auto">
              Перейти к квартирам
            </BaseButton>
          </div>
          <template v-else>
            <div
              class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-3 xl:tw-grid-cols-4"
            >
              <CardsApartment v-for="item in favoriteList" v-bind="item" />
            </div>
          </template>
        </tamplate>
        <tamplate v-if="tab === 'cottages'">
          <div
            class="tw-bg-white tw-rounded-2xl tw-grid tw-place-items-center tw-text-center tw-gap-4 tw-px-4 tw-py-6 lg:tw-p-6"
          >
            <div class="tw-p-4 tw-bg-base00 tw-rounded-lg tw-w-fit tw-mb-4">
              <BaseIcon name="house" class="tw-w-8 tw-h-8" />
            </div>
            <h3 class="tw-text-h6">
              Вы ещё не добавили ни одного дома в избранное
            </h3>
            <p class="tw-max-w-[566px] tw-text-body_s tw-text-text02">
              Избранное — это отличный способ отслеживать интересующие вас
              объекты недвижимости и сохранять их для последующего просмотра или
              сравнения
            </p>
            <BaseButton class="tw-w-full lg:tw-w-auto">
              Перейти к домам
            </BaseButton>
          </div>
        </tamplate>
      </template>
      <div v-else>
        <Compare />
      </div>
    </div>
  </section>
  <section v-if="openComparision">
    <div class="tw-container">
      <div class="tw-grid tw-gap-6 lg:tw-gap-5 lg:tw-grid-cols-2">
        <div
          class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 tw-grid tw-gap-6 xl:tw-gap-12 tw-content-between"
        >
          <div>
            <h2 class="section__title tw-mb-4">
              Хотите сохранить свое избранное?
            </h2>
            <p class="tw-text-text02 tw-text-body_m">
              Чтобы сохранить список избранного и получите доступ к другим
              сервисам
            </p>
          </div>
          <BaseButton> Личный кабинет</BaseButton>
        </div>
        <div
          class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 tw-grid tw-gap-6 xl:tw-gap-12 tw-content-between"
        >
          <div>
            <h2 class="section__title tw-mb-4">Сформируйте брошюру</h2>
            <p class="tw-text-text02 tw-text-body_m">
              Брошюра с вашим избранным доступна для скачивания или отправки по
              электронной почте
            </p>
          </div>
          <div class="tw-grid tw-gap-2 lg:tw-grid-cols-2 lg:tw-gap-5">
            <BaseButton theme="gray">Скачать</BaseButton>
            <BaseButton theme="gray">Отправить</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const tab = ref('')
const tabs = [
  {
    name: 'apartments',
    title: 'Квартиры',
  },
  {
    name: 'cottages',
    title: 'Коттеджи и таунхаусы',
  },
  {
    name: 'pantries',
    title: 'Кладовые',
  },
  {
    name: 'autocracy',
    title: 'Машиноместо',
  },
]
const openComparision = ref(false)
const favoriteList = [
  {
    title: 'title',
    square: 1,
    place: 'ЖК «Михайловка Green Place», с. Михайловка',
    price: 1234,
    storey: 1,
    letter: 2,
    monthPayment: 10000,
    initialFee: 100000,
    src: ['/assets/images/img/test.png', '/assets/images/img/test.png'],
  },
  {
    title: 'title',
    square: 2,
    place: 'ЖК «Михайловка Green Place», с. Михайловка',
    price: 1234,
    storey: 1,
    letter: 2,
    monthPayment: 10000,
    initialFee: 100000,
    src: ['/assets/images/img/test.png', '/assets/images/img/test.png'],
  },
  {
    title: 'title',
    square: 3,
    place: 'ЖК «Михайловка Green Place», с. Михайловка',
    price: 1234,
    storey: 1,
    letter: 2,
    src: ['/assets/images/img/test.png', '/assets/images/img/test.png'],
  },
  {
    title: 'title',
    square: 4,
    place: 'ЖК «Михайловка Green Place», с. Михайловка',
    price: 1234,
    storey: 1,
    letter: 2,
    monthPayment: 10000,
    initialFee: 100000,
    src: ['/assets/images/img/test.png', '/assets/images/img/test.png'],
  },
  {
    title: 'title',
    square: 5,
    place: 'ЖК «Михайловка Green Place», с. Михайловка',
    price: 1234,
    storey: 1,
    letter: 2,
    monthPayment: 10000,
    initialFee: 100000,
    src: ['/assets/images/img/test.png', '/assets/images/img/test.png'],
  },
  {
    title: 'title',
    square: 6,
    place: 'ЖК «Михайловка Green Place», с. Михайловка',
    price: 1234,
    storey: 1,
    letter: 2,
    monthPayment: 10000,
    initialFee: 100000,
    src: ['/assets/images/img/test.png', '/assets/images/img/test.png'],
  },
]
onMounted(() => {
  tab.value = tabs[0].name
})
</script>
<style lang="scss" scoped></style>
