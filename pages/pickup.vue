<template>
  <section>
    <div class="tw-container tw-h-full">
      <div class="tw-bg-white tw-px-4 tw-py-6 tw-rounded-2xl">
        <BreadCrumbs
          :history-list="[{ to: '/', name: 'Главная' }, { name: 'Подборщик' }]"
          class="tw-mb-6"
        />
        <div
          class="tw-flex tw-justify-between tw-items-center tw-mb-6 lg:tw-mb-10"
        >
          <h2 class="section__title">Подобрать жильё</h2>
          <BaseButton theme="transparent" @click="clear">
            <div
              class="tw-text-text02 tw-text-body_m tw-flex tw-gap-2 tw-items-center"
            >
              <span> Очистить фильтр </span>
              <BaseIcon class="tw-w-6 tw-h-6" name="close" />
            </div>
          </BaseButton>
        </div>
        <div class="tw-flex tw-gap-2 lg:tw-hidden">
          <BaseButton theme="gray" class="tw-grow">
            <div class="tw-flex tw-gap-4 tw-justify-center">
              <span> Фильтр </span>
              <BaseIcon class="tw-w-6 tw-h-6 tw-text-primary" name="filtr" />
            </div>
          </BaseButton>
          <BaseButton theme="gray" class="tw-shrink-0">
            <BaseIcon class="tw-w-6 tw-h-6 tw-text-primary" name="sorted" />
          </BaseButton>
        </div>
        <form class="tw-hidden lg:tw-block">
          <BaseSelect
            label="Тип недвижимости"
            name="typeApartment"
            :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
            v-model="typeApartmentOpt"
          />
          <BaseSelect
            label="Объекты"
            name="object"
            :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
            v-model="objectOpt"
          />
          <div>
            <div class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">
              Комнатность
            </div>
            <div class="tw-flex tw-gap-2">
              <BaseButton theme="gray"> С </BaseButton>
              <BaseButton theme="gray"> 1 </BaseButton>
              <BaseButton theme="gray"> 2 </BaseButton>
              <BaseButton theme="gray"> 3+ </BaseButton>
            </div>
          </div>
          <BaseRange
            v-bind="{
              min: 29,
              max: 250,
              name1: 'sqaure-to',
              name2: 'square-from',
              label: 'Площадь объекта, м²',
              theme: 'white',
            }"
            v-model="square"
          />
          <BaseRange
            v-bind="{
              min: 29,
              max: 250,
              name1: 'sqaure-to',
              name2: 'square-from',
              label: 'Площадь участка, сот',
              theme: 'white',
            }"
            v-model="squarePlot"
          />
          <div class="tw-w-[384px]">
            <div class="tab-mini">
              <button
                v-for="item in typeSortedOptions"
                :class="{ active: item.id === typeSorted?.id }"
                @click="typeSorted = item"
                type="button"
              >
                <span class="">{{ item.value }}</span>
                <BaseIcon name="info" class="tw-w-4 tw-h-4" />
              </button>
            </div>
            <BaseRange
              v-bind="{
                min: 29,
                max: 250,
                name1: 'sqaure-to',
                name2: 'square-from',
                label: '',
                theme: 'white',
              }"
              v-model="sorted"
            />
          </div>
          <BaseRange
            v-bind="{
              min: 29,
              max: 250,
              name1: 'sqaure-to',
              name2: 'square-from',
              label: 'Этажность',
              theme: 'white',
            }"
            v-model="storey"
          />
          <BaseSelect
            label="Статус"
            name="status"
            :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
            v-model="statusOpt"
          />
          <BaseSelect
            label="Акция"
            name="action"
            :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
            v-model="actionOpt"
          />
          <BaseSelect
            label="Вид отделки"
            name="typeFinishing"
            :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
            v-model="finishingOpt"
          />
        </form>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h3 class="tw-text-body_l">Найдено 869 предложений</h3>
      </div>
      <div
        class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-3 xl:tw-grid-cols-4"
      >
        <CardsApartment v-for="item in favoriteList" v-bind="item" />
      </div>
      <BaseButton theme="white" class="tw-w-full tw-mt-6 xl:tw-mt-8">
        Показать ещё 8 из 128
      </BaseButton>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Как купить</h2>
      </div>
      <div class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-3">
        <div
          class="tw-bg-white tw-rounded-2xl tw-p-5 tw-grid xl:tw-flex tw-gap-6"
        >
          <div class="tw-bg-base00 tw-p-2 tw-rounded-lg tw-w-fit tw-h-fit">
            <BaseIcon name="wallet" class="tw-w-8 tw-h-8 tw-text-primary" />
          </div>
          <div>
            <h4 class="tw-text-h6 tw-mb-4">Получить предложение</h4>
            <p class="tw-text-body_m">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </div>
        <div
          class="tw-bg-white tw-rounded-2xl tw-p-5 tw-grid xl:tw-flex tw-gap-6"
        >
          <div class="tw-bg-base00 tw-p-2 tw-rounded-lg tw-w-fit tw-h-fit">
            <BaseIcon name="read" class="tw-w-8 tw-h-8 tw-text-primary" />
          </div>
          <div>
            <h4 class="tw-text-h6 tw-mb-4">Купить онлайн</h4>
            <p class="tw-text-body_m">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </div>
        <div
          class="tw-bg-white tw-rounded-2xl tw-p-5 tw-grid xl:tw-flex tw-gap-6"
        >
          <div class="tw-bg-base00 tw-p-2 tw-rounded-lg tw-w-fit tw-h-fit">
            <BaseIcon name="rub" class="tw-w-8 tw-h-8 tw-text-primary" />
          </div>
          <div>
            <h4 class="tw-text-h6 tw-mb-4">Взять ипотеку</h4>
            <p class="tw-text-body_m">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <FormCard1 />
    </div>
  </section>
</template>
<script lang="ts" setup>
interface Option {
  label: string
  value: string
}
type NumOrNull = number | null
type ModelValue = [NumOrNull, NumOrNull] | null
interface Sorted {
  id: number
  value: string
  range: ModelValue
}
const clear = () => {}
const typeApartmentOpt = ref<Option>()
const typeApartmentOptions = [{ label: 'test 1', value: '1' }] as Option[]
const objectOpt = ref<Option>()
const objectOptions = [{ label: 'test 1', value: '1' }] as Option[]
const actionOpt = ref<Option>()
const actionOptions = [{ label: 'test 1', value: '1' }] as Option[]
const statusOpt = ref<Option>()
const statusOptions = [{ label: 'test 1', value: '1' }] as Option[]
const finishingOpt = ref<Option>()
const finishingOptions = [{ label: 'test 1', value: '1' }] as Option[]
const square = ref<ModelValue>([29, 250])
const squarePlot = ref<ModelValue>([29, 250])
const storey = ref<ModelValue>([29, 250])
const typeSorted = ref<Sorted>()
const typeSortedOptions = [
  {
    id: 1,
    value: 'По стоимости',
    range: [29, 250],
  },
  {
    id: 2,
    value: 'По взносу',
    range: [29, 250],
  },
  {
    id: 3,
    value: 'По платежу',
    range: [29, 250],
  },
] as Sorted[]
const sorted = ref<ModelValue>()
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
  typeApartmentOpt.value = typeApartmentOptions[0]
  objectOpt.value = objectOptions[0]
  actionOpt.value = actionOptions[0]
  statusOpt.value = statusOptions[0]
  finishingOpt.value = finishingOptions[0]
  typeSorted.value = typeSortedOptions[0]
  if (typeSorted.value) sorted.value = typeSorted.value.range
})
</script>
<style lang="scss" scoped>
.tab-mini {
  @apply tw-bg-base00 tw-p-2 tw-inline-flex tw-rounded-md tw-gap-2;
  button {
    @apply tw-flex tw-items-center tw-gap-2 tw-h-[32px] tw-px-2  tw-rounded-md tw-text-text02 tw-text-body_s2 -tw-tracking-875;
    background: transparent;
    & > svg {
      @apply tw-text-text02;
    }
    &.active {
      @apply tw-bg-white;
      & > svg {
        @apply tw-text-primary;
      }
    }
  }
}
</style>
