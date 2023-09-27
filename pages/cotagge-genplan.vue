<template>
  <section class="head-section tw-flex tw-flex-col">
    <div class="tw-container tw-mb-3">
      <BaseBanner actionLabel="Оставить заявку" theme="white">
        <p>
          Оставить заявку. Оставьте свои контактные данные и мы свяжемся с вами
        </p>
      </BaseBanner>
    </div>
    <div class="tw-container tw-h-full">
      <div class="head-section__wrapper">
        <div>
          <BreadCrumbs
            :history-list="[
              { to: '/', name: 'Главная' },
              { name: 'Генплан коттеджа' },
            ]"
            class="!tw-text-white tw-mb-4"
          />
          <h2 class="section__title title tw-mb-4 lg:tw-mb-2">
            Название коттеджного посёлка (загород)
          </h2>
          <h3>Локация</h3>
        </div>
        <div class="content">
          <BaseButton theme="white" class="tw-mb-4">Выбрать дом</BaseButton>
          <p class="">
            Визуализация проекта предварительная, возможны изменения
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div
        class="tw-hidden lg:tw-grid tw-gap-y-8 tw-gap-x-5 lg:tw-grid-cols-3 xl:tw-grid-cols-5"
      >
        <BaseRange
          v-bind="{
            min: 29,
            max: 250,
            name1: 'sqaure-to',
            name2: 'square-from',
            label: 'Площадь дома, м²',
            theme: 'white',
          }"
          v-model="squareHome"
        />
        <BaseRange
          v-bind="{
            min: 3,
            max: 12,
            name1: 'sqaure-plot-to',
            name2: 'square-plot-from',
            label: 'Площадь участка, сот',
            theme: 'white',
          }"
          v-model="squarePlotHome"
        />

        <BaseRange
          v-bind="{
            min: 1,
            max: 4,
            name1: 'floor-to',
            name2: 'floor-from',
            label: 'Этажность',
            theme: 'white',
          }"
          v-model="floorHome"
        />
        <div class="tw-col-span-3 xl:tw-col-span-2 tw-w-full">
          <div class="tw-text-text02 tw-mb-2 tw-text-body_s2 -tw-tracking-875">
            Статус
          </div>
          <div class="tw-grid lg:tw-grid-cols-2 tw-gap-5">
            <div class="tw-flex tw-gap-2 tw-w-full">
              <BaseButton theme="white" class="tw-w-full">Строится</BaseButton>
              <BaseButton theme="white" class="tw-w-full">Сдан</BaseButton>
            </div>
            <BaseButton class=" ">Показать 45 домов</BaseButton>
          </div>
        </div>
      </div>
      <div class="lg:tw-hidden">
        <BaseButton theme="gray" class="tw-w-full">
          <div class="tw-flex tw-gap-4 tw-justify-center">
            <span> Фильтр </span>
            <BaseIcon class="tw-w-6 tw-h-6 tw-text-primary" name="filtr" />
          </div>
        </BaseButton>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <CardsAbout
        v-bind="{
          to: '/',
          title: 'О жилом комплексе',
          text: 'Жилой комплекс «Малина» — это место, где природа и город объединились, чтобы создать целый мир удобства в условиях природы. Расположение за чертой города не ограничит вас от активной жизни. Рядом с комплексом собрана вся инфраструктура: детский сад, школа, магазины и общественные остановки, поэтому жизнь на природе станет не только приятной, но и комфортной.',
          indicators: [
            { title: '200', subtitle: 'домовладений' },
            { title: '15 км', subtitle: 'от города' },
            { title: '250 мест', subtitle: 'детский сад' },
          ],
        }"
      />
      <!-- <div class="tw-rounded-2xl tw-bg-white tw-p-6 lg:tw-p-10"></div> -->
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="tw-grid lg:tw-grid-cols-2 tw-gap-5">
        <div>
          <MapComplex class="tw-h-[480px] lg:!tw-h-full" />
        </div>
        <div class="tw-rounded-2xl tw-bg-white tw-p-6 xl:tw-p-10 tw-h-fit">
          <h2 class="section__title tw-mb-6 xl:tw-mb-8">
            Транспортная доступность
          </h2>
          <p class="tw-text-body_m tw-text-text01 tw-mb-6 xl:tw-mb-8">
            Современный загородный квартал в 15 км от МКАД по Дмитровскому шоссе
            в живописном посёлке Шолохово. В 2023 году до близлежащего поселка
            «Северный» дотянется Люблинско-Дмитровская линия метро.
          </p>
          <div class="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-5">
            <div
              class="tw-bg-border00 tw-rounded-2xl tw-py-4 tw-pl-4 tw-pr-6 tw-grid tw-gap-12"
            >
              <div class="tw-flex tw-gap-4 tw-items-center">
                <div
                  class="tw-shrink-0 tw-w-12 tw-h-12 tw-relative tw-rounded-full tw-overflow-hidden"
                >
                  <img
                    src="/images/monument.png"
                    alt=""
                    class="tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0"
                  />
                </div>
                <h4 class="tw-text-body_m">Монумент Дружбы</h4>
              </div>
              <div>
                <h5 class="tw-text-h5 tw-mb-1">5 км</h5>
                <p class="tw-text-text02 tw-text-body_m">22 мин</p>
              </div>
            </div>
            <div
              class="tw-bg-border00 tw-rounded-2xl tw-py-4 tw-pl-4 tw-pr-6 tw-grid tw-gap-12"
            >
              <div class="tw-flex tw-gap-4 tw-items-center">
                <div
                  class="tw-shrink-0 tw-w-12 tw-h-12 tw-relative tw-rounded-full tw-overflow-hidden"
                >
                  <img
                    src="/images/monument.png"
                    alt=""
                    class="tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0"
                  />
                </div>
                <h4 class="tw-text-body_m">Парк Победы</h4>
              </div>
              <div>
                <h5 class="tw-text-h5 tw-mb-1">6 км</h5>
                <p class="tw-text-text02 tw-text-body_m">23 мин</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Генплан коттеджного посёлка {Название}</h2>
      </div>
      <GenplanCottage />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <TabAdvantages />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Инфраструктура</h2>
      </div>
      <MapCategory />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Проекты домов</h2>
      </div>
      <TabProjectsHouses />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Материалы</h2>
      </div>
      <TabMaterials />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Как купить</h2>
      </div>
      <div class="tw-grid lg:tw-grid-cols-3 tw-gap-4 lg:tw-gap-5">
        <a
          href="#"
          class="tw-rounded-2xl tw-bg-white tw-grid lg:tw-flex tw-gap-6 lg:tw-gap-8 tw-px-4 tw-py-6 lg:tw-p-6"
        >
          <div
            class="tw-w-12 tw-h-12 tw-bg-secondary tw-text-primary tw-rounded-lg tw-grid tw-place-content-center"
          >
            <BaseIcon class="tw-w-6 tw-h-6" name="wallet" />
          </div>

          <div class="tw-grid tw-gap-4">
            <h4 class="tw-text-h6">Получить предложение</h4>
            <p class="tw-text-body_m tw-text-text01">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </a>
        <a
          href="#"
          class="tw-rounded-2xl tw-bg-white tw-grid lg:tw-flex tw-gap-6 lg:tw-gap-8 tw-px-4 tw-py-6 lg:tw-p-6"
        >
          <div
            class="tw-w-12 tw-h-12 tw-bg-secondary tw-text-primary tw-rounded-lg tw-grid tw-place-content-center"
          >
            <BaseIcon class="tw-w-6 tw-h-6" name="read" />
          </div>

          <div class="tw-grid tw-gap-4">
            <h4 class="tw-text-h6">Купить онлайн</h4>
            <p class="tw-text-body_m tw-text-text01">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </a>
        <a
          href="#"
          class="tw-rounded-2xl tw-bg-white tw-grid lg:tw-flex tw-gap-6 lg:tw-gap-8 tw-px-4 tw-py-6 lg:tw-p-6"
        >
          <div
            class="tw-w-12 tw-h-12 tw-bg-secondary tw-text-primary tw-rounded-lg tw-grid tw-place-content-center"
          >
            <BaseIcon class="tw-w-6 tw-h-6" name="rub" />
          </div>

          <div class="tw-grid tw-gap-4">
            <h4 class="tw-text-h6">Взять ипотеку</h4>
            <p class="tw-text-body_m tw-text-text01">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </a>
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
type NumOrNull = number | null
type ModelValue = [NumOrNull, NumOrNull] | null
useHead({
  script: [
    {
      src: 'https://api-maps.yandex.ru/2.1/?apikey=62425c4f-4dfc-4f52-a01f-bc1e23d27b7d&coordorder=longlat&lang=ru_RU',
      type: 'text/javascript',
    },
  ],
})
const squareHome = ref<ModelValue>([29, 250])
const squarePlotHome = ref<ModelValue>([3, 12])
const floorHome = ref<ModelValue>([1, 4])
</script>
<style lang="scss" scoped>
.head-section {
  height: 540px;
  &__wrapper {
    background:
      linear-gradient(46deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 100%),
      url(/images/img/about.png) 50% / cover no-repeat;
    @apply tw-grid tw-content-between tw-h-full tw-py-8 tw-px-4 lg:tw-px-10 lg:tw-py-10 xl:tw-py-16 tw-rounded-2xl tw-overflow-hidden tw-text-white;
  }
  @screen xl {
    height: 640px;
  }
}
</style>
