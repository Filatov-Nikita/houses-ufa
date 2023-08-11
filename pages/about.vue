<template>
  <section class="about">
    <div class="tw-container tw-h-full">
      <div class="about__wrapper">
        <BreadCrumbs
          :history-list="[{ to: '/', name: 'Главная' }, { name: 'О компании' }]"
          class="!tw-text-white"
        />
        <div class="content">
          <h2 class="section__title title">Жилой Квартал</h2>
          <p class="text-top">— признанный бренд в Республике Башкортостан</p>
          <p class="text-bottom">
            с 22-летней историей и сложившейся репутацией надежного партнера
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div
        class="tw-grid tw-gap-4 lg:tw-grid-cols-2 xl:tw-grid-cols-4 tw-mb-4 lg:tw-mb-5"
      >
        <div class="tw-rounded-2xl tw-bg-white tw-p-6 tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              №1
            </h3>
            <h4 class="tw-text-primary tw-text-h5">девелопер</h4>
          </div>
          <p class="tw-text-text02">в загородном строительстве</p>
        </div>

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              14
            </h3>
            <h4 class="tw-text-primary tw-text-h5">комплексов</h4>
          </div>
          <p class="tw-text-text02">построено и еще строится</p>
        </div>

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              2001
            </h3>
            <h4 class="tw-text-primary tw-text-h5">год —</h4>
          </div>
          <p class="tw-text-text02">год основания компании</p>
        </div>

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              1.5
            </h3>
            <h4 class="tw-text-primary tw-text-h5">млн м2</h4>
          </div>
          <p class="tw-text-text02">введено в эксплуатацию</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title tw-mb-4 lg:tw-mb-6">Построенные объекты</h2>
        <CardsBuildObjects :list="buildObjectList" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const buildObjectList = [
  {
    to: '/',
    img: '/assets/images/img/country_real_estate.png',
    name: 'Малина',
    subtitle: 'Квартиры в Михайловке',
    status: 'Сдан',
    description:
      'Жилой комплекс «Малина» — это место, где природа и город объединились, чтобы создать целый мир удобства в условиях природы. Расположение за чертой города не ограничит вас от активной жизни. ',
  },
  {
    to: '/',
    img: '/assets/images/img/country_real_estate.png',
    name: 'Малина',
    subtitle: 'Квартиры в Михайловке',
    status: 'Сдан',
    description:
      'Жилой комплекс «Малина» — это место, где природа и город объединились, чтобы создать целый мир удобства в условиях природы. Расположение за чертой города не ограничит вас от активной жизни. ',
  },

  {
    to: '/',
    img: '/assets/images/img/country_real_estate.png',
    name: 'Малина',
    subtitle: 'Квартиры в Михайловке',
    status: 'Сдан',
    description:
      'Жилой комплекс «Малина» — это место, где природа и город объединились, чтобы создать целый мир удобства в условиях природы. Расположение за чертой города не ограничит вас от активной жизни. ',
  },
]
</script>
<style lang="scss" scoped>
.about {
  height: 540px;
  &__wrapper {
    background:
      linear-gradient(46deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 100%),
      url(./assets/images/img/about.png) 50% / cover no-repeat;
    @apply tw-grid tw-content-between tw-h-full tw-py-8 tw-px-4 lg:tw-px-10 lg:tw-py-10 xl:tw-py-16 tw-rounded-2xl tw-overflow-hidden tw-text-white;
    .content {
    }
    .title {
      @apply tw-mb-6;
    }
    .text {
      &-top {
        @apply tw-text-body_l lg:tw-text-h5 tw-mb-4;
      }
    }
  }
  @screen xl {
    height: 640px;
  }
}
</style>
