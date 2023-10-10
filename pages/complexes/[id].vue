<template>
  <BaseWait :waiting="loadingComplex">
    <template #loader>
      <div class="tw-container tw-space-y-8">
        <BaseSkeleton
          class="tw-w-full tw-h-[300px]"
          v-for="_i in 5"
        />
      </div>
    </template>
    <section class="head-section tw-flex tw-flex-col">
      <div class="tw-container">
        <BaseBanner actionLabel="Оставить заявку" theme="colored" class="tw-mb-3">
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
              {{ complex?.name }}
            </h2>
            <h3>{{ complex?.location }}</h3>
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
        <ApartFilter />
      </div>
    </section>
    <section v-if="complex?.about">
      <div class="tw-container">
        <CardsAbout
          v-bind="{
            to: '/',
            title: 'О жилом комплексе',
            text: complex.about.description,
            indicators: [
              {
                title: complex.about.feature_1_title,
                subtitle: complex.about.feature_1_value,
              },
              {
                title: complex.about.feature_2_title,
                subtitle: complex.about.feature_2_value,
              },
              {
                title: complex.about.feature_3_title,
                subtitle: complex.about.feature_3_value,
              },
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
          <h2 class="section__title">Генплан жилого комплекса {{ complex?.name }}</h2>
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
  </BaseWait>
</template>
<script lang="ts" setup>
import ApartFilter from '@/other-modules/apart-filter/index.vue';
import { useComplexOne } from '@/stores/pages/complex-one';

useHead({
  script: [
    {
      src: 'https://api-maps.yandex.ru/2.1/?apikey=62425c4f-4dfc-4f52-a01f-bc1e23d27b7d&coordorder=longlat&lang=ru_RU',
      type: 'text/javascript',
    },
  ],
})
const complexOneStore = useComplexOne();
const { setComplexId, showOne, showHouses } = complexOneStore;

const route = useRoute();

const complexId = computed<number>(() => parseInt(route.params.id as string));
const complex = computed(() => complexOneStore.complex?.data ?? null);
const loadingComplex = computed(() => complexOneStore.loadingComplex);

useAsyncData(() => {
  setComplexId(complexId.value);
  return Promise.all([showOne(), showHouses()]);
});
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
