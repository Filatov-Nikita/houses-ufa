<template>
  <section class="about">
    <div class="tw-container tw-h-full">
      <div class="about__wrapper">
        <BreadCrumbs
          :history-list="[{ to: '/', name: 'Главная' }, { name: 'О компании' }]"
          class="!tw-text-white"
        />
        <div class="content">
          <h2 class="section__title title tw-font-semibold">Жилой Квартал</h2>
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
        <div class="tw-rounded-2xl tw-bg-white tw-p-6 lg:tw-p-10 tw-grid tw-gap-12">
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

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 lg:tw-p-10  tw-grid tw-gap-12">
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

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 lg:tw-p-10  tw-grid tw-gap-12">
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

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 lg:tw-p-10  tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              1.5
            </h3>
            <h4 class="tw-text-primary tw-text-h5">млн м²</h4>
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
  <section id="hist">
    <div class="tw-container">
      <CardsHistory />
    </div>
  </section>
  <section id="team">
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Команда</h2>
      </div>
      <CardsTeam />
    </div>
  </section>
  <section id="work">
    <div class="tw-container">
      <div
        class="tw-pt-6 tw-px-4  tw-h-[480px] lg:tw-h-auto lg:tw-p-6 xl:tw-p-12 tw-bg-base01 tw-rounded-2xl tw-overflow-hidden tw-relative tw-grid  tw-gap-[85px]"
      >
        <div class="lg:tw-w-[622px]">
          <h2 class="tw-text-h5 lg:tw-text-h4 tw-mb-8">
            Мы постоянно в поиске профессионалов своего дела
          </h2>
          <BaseButton class="tw-w-full lg:tw-w-[177px]">
            <div class="tw-flex tw-justify-between">
              <span> Вакансии </span>
              <BaseIcon class="tw-w-6 tw-h-6" name="target" />
            </div>
          </BaseButton>
        </div>
        <div class="tw-absolute tw-w-[483px] tw-h-[320px] tw-object-cover tw-bottom-0 lg:-tw-right-28 lg:tw-top-1/2 lg:tw-transform tw-translate-y-[130px] -tw-translate-x-7 lg:-tw-translate-y-1/2">

          <img
            src="/images/img/vacancies.png"
            alt=""

          />
        </div>
      </div>
    </div>
  </section>
  <section id="callback">
    <div class=" tw-container">
      <div class=" tw-py-6 tw-px-4 lg:tw-p-6 xl:tw-p-12 tw-rounded-2xl tw-bg-base01">
        <h2 class="tw-text-h5 lg:tw-text-h4 tw-mb-2  ">
          Остались вопросы? <br class="lg:tw-hidden"> Напишите нам
        </h2>
        <p class=" tw-text-text02 tw-mb-6 lg:tw-mb-8">
          Оставьте свои контактные данные, ваш вопрос и мы свяжемся с вами
        </p>
        <form >
          <div class=" tw-grid lg:tw-grid-cols-3 tw-gap-6 lg:tw-gap-5 tw-mb-6 xl:tw-mb-8">

            <BaseInput name="name" label="Имя" placeholder="Иван" theme="white"/>
            <BaseInput name="name" label="Телефон" placeholder="+7 (XXX) XXX XX XX" theme="white"/>
            <BaseInput name="name" label="E-mail" placeholder="mail@mail.ru" theme="white"/>
            <BaseInput name="name" label="Вопрос" placeholder="Я бы хотел (-а) узнать..." theme="white" class=" lg:tw-col-span-3"/>
          </div>
          <BaseButton theme="white" class=" tw-w-full lg:tw-w-auto !tw-text-text02 tw-mb-4">
            Отправить
          </BaseButton>
          <p class=" tw-text-text02 tw-text-body_xs lg:tw-text-body_m">
            Нажимая кнопку, вы соглашаетесь
            <a href="#" class=" tw-text-primary">
              с условиями обработки персональных данных
            </a>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const buildObjectList = [
  {
    to: '/',
    img: '/images/img/country_real_estate.png',
    name: 'Малина',
    subtitle: 'Квартиры в Михайловке',
    status: 'Сдан',
    description:
      '1Жилой комплекс «Малина» — это место, где природа и город объединились, чтобы создать целый мир удобства в условиях природы. Расположение за чертой города не ограничит вас от активной жизни. ',
  },
  {
    to: '/',
    img: '/images/img/country_real_estate.png',
    name: 'Малина',
    subtitle: 'Квартиры в Михайловке',
    status: 'Сдан',
    description:
      '2Жилой комплекс «Малина» — это место, где природа и город объединились, чтобы создать целый мир удобства в условиях природы. Расположение за чертой города не ограничит вас от активной жизни. ',
  },

  {
    to: '/',
    img: '/images/img/country_real_estate.png',
    name: 'Малина',
    subtitle: 'Квартиры в Михайловке',
    status: 'Сдан',
    description:
      '3Жилой комплекс «Малина» — это место, где природа и город объединились, чтобы создать целый мир удобства в условиях природы. Расположение за чертой города не ограничит вас от активной жизни. ',
  },
]
</script>
<style lang="scss" scoped>
.about {
  height: 540px;
  &__wrapper {
    background:
      linear-gradient(46deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 100%),
      url(/images/img/about.png) 50% / cover no-repeat;
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
