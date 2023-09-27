<template>
  <section class="head-section tw-flex tw-flex-col">
    <div class="tw-container">
      <BaseBanner actionLabel="Оставить заявку" theme="white" class="tw-mb-3">
        <p>
          Оставить заявку. Оставьте свои контактные данные и мы свяжемся с вами
        </p>
      </BaseBanner>
    </div>
    <div class="tw-container tw-h-full">
      <div class="head-section__wrapper">
        <div>
          <BreadCrumbs
            :history-list="[{ to: '/', name: 'Главная' }, { name: 'ЖК' }]"
            class="!tw-text-white tw-mb-4"
          />
          <h2 class="section__title title tw-mb-4 lg:tw-mb-2">
            Название Жилого Комплекса
          </h2>
          <h3>Локация</h3>
        </div>
        <div class="content">
          <BaseButton theme="white" class="tw-mb-4"
            >Выбрать квартиру</BaseButton
          >
          <p class="">
            Визуализация проекта предварительная, возможны изменения
          </p>
        </div>
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
        <h2 class="section__title">Генплан жилого комплекса {Название ЖК}</h2>
      </div>
      <GenplanZhk />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Расположение и инфраструктура</h2>
      </div>
      <MapCategory />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <TabTypApartment />
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
      <div class="section__top">
        <h2 class="section__title">Галерея</h2>
      </div>
      <TabGallery />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Ход строительства</h2>
      </div>
      <TabContructionProgress />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <FormCard1 />
    </div>
  </section>
</template>
<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://api-maps.yandex.ru/2.1/?apikey=62425c4f-4dfc-4f52-a01f-bc1e23d27b7d&coordorder=longlat&lang=ru_RU',
      type: 'text/javascript',
    },
  ],
})
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
