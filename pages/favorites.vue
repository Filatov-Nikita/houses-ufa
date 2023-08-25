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
            Избранное — это отличный способ отслеживать интересующие вас объекты
            недвижимости и сохранять их для последующего просмотра или сравнения
          </p>
          <BaseButton class="tw-w-full lg:tw-w-auto">
            Перейти к квартирам
          </BaseButton>
        </div>
        <template v-else>
          <div
            class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-3 xl:tw-grid-cols-4"
            v-if="!openComparision"
          >
            <CardsApartment v-for="item in favoriteList" v-bind="item" />
          </div>
          <div v-else>
            <Compare />
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
            Избранное — это отличный способ отслеживать интересующие вас объекты
            недвижимости и сохранять их для последующего просмотра или сравнения
          </p>
          <BaseButton class="tw-w-full lg:tw-w-auto">
            Перейти к домам
          </BaseButton>
        </div>
      </tamplate>
      <!-- <BaseTabsTabContentItem name="pantries"> </BaseTabsTabContentItem>
        <BaseTabsTabContentItem name="autocracy"> </BaseTabsTabContentItem> -->
    </div>
    <BaseModal v-model="openM" v-slot="{ hide }" :is-full-mob="true">
      <BaseModalCard
        v-bind="{ hide }"
        :is-full-mob="true"
        class="tw-h-screen lg:tw-h-auto"
      >
        <form class="tw-grid tw-gap-9 lg:tw-gap-8 tw-h-full">
          <div
            class="tw-p-4 lg:tw-p-0 tw-rounded-2xl tw-bg-white tw-self-start"
          >
            <div class="tw-relative">
              <div class="tw-absolute tw-right-0 tw-top-0">
                <div class="tw-hidden lg:tw-block">
                  <BaseButton
                    @click="() => hide()"
                    theme="gray"
                    padding-classes=" tw-p-3"
                    class=""
                  >
                    <BaseIcon name="close" class="tw-w-6 tw-h-6" />
                  </BaseButton>
                </div>
                <div class="lg:tw-hidden">
                  <BaseButton
                    @click="() => hide()"
                    theme="transparent"
                    padding-classes=" tw-p-0"
                    class=""
                  >
                    <BaseIcon name="close" class="tw-w-8 tw-h-8 tw-text-icon" />
                  </BaseButton>
                </div>
              </div>

              <div class="tw-mb-6 lg:tw-mb-8">
                <h4
                  class="tw-text-h6 lg:tw-text-h4 tw-min-h-[32px] tw-grid tw-place-content-center lg:tw-block tw-mb-6 lg:tw-mb-2"
                >
                  Получить консультацию
                </h4>
                <p class="tw-text-text02">
                  Оставьте свои контактные данные и мы свяжемся с вами
                </p>
              </div>
              <div class="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-5">
                <BaseInput
                  name="name"
                  label="Имя"
                  placeholder="Иван"
                  class="lg:tw-col-span-2"
                />
                <BaseInput
                  name="name"
                  label="Телефон"
                  placeholder="+7 (XXX) XXX XX XX"
                />
                <BaseInput
                  name="email"
                  label="E-mail"
                  placeholder="name@gmail.com"
                />
                <BaseInput
                  name="message"
                  label="Сообщение"
                  placeholder="У меня есть вопрос..."
                  class="lg:tw-col-span-2"
                />
              </div>
            </div>
          </div>
          <div class="tw-bg-white -tw-mx-4 tw-px-4 tw-py-3 tw-self-end">
            <div class="tw-grid lg:tw-grid-cols-2 tw-gap-2 lg:tw-gap-5">
              <BaseButton theme="gray" class="lg:tw-order-2">
                Получить консультацию
              </BaseButton>
              <p
                class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 lg:tw-order-1"
              >
                Нажимая кнопку, вы соглашаетесь
                <br class="tw-hidden lg:tw-block" />
                <a href="#" class="tw-text-primary">
                  с условиями обработки персональных данных
                </a>
              </p>
            </div>
          </div>
        </form>
      </BaseModalCard>
    </BaseModal>
  </section>
</template>
<script lang="ts" setup>
const openM = ref(true)
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
