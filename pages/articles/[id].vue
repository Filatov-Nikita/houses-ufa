<template>
  <section>
    <div class="tw-container tw-h-full">
      <div
        class="tw-bg-white tw-px-4 tw-py-6 xl:tw-px-10 xl:tw-py-16 tw-rounded-2xl"
      >
        <BreadCrumbs
          :history-list="[{ to: '/', name: 'Главная' }, { name: 'Подборщик' }]"
          class="tw-mb-6 lg:tw-mb-4"
        />
        <div
          class="tw-grid tw-gap-4 lg:tw-flex tw-justify-between tw-items-center tw-mb-6 lg:tw-mb-10"
        >
          <h2 class="section__title">День Победы встретили вместе</h2>
          <BaseButton theme="gray" class="tw-w-fit">
            <div
              class="tw-text-text02 tw-text-body_m tw-flex tw-gap-2 tw-items-center"
            >
              <BaseIcon class="tw-w-6 tw-h-6" name="heart" />
            </div>
          </BaseButton>
        </div>
        <div class="tw-flex tw-justify-between tw-items-center">
          <div class="tw-text-text02 lg:tw-text-body_l">31.03.2023</div>
          <button class="tw-flex tw-items-center tw-gap-4">
            <div class="tw-p-2 tw-rounded-lg tw-bg-[#F4F4F4]">
              <BaseIcon name="share" class="tw-w-4 tw-h-4 tw-text-primary" />
            </div>
            <span class="tw-text-black"> Поделиться </span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div
        class="tw-bg-white tw-rounded-2xl tw-px-4 tw-py-6 lg:tw-p-6 xl:tw-p-10"
      >
        <div
          class="lg:tw-w-[786px] xl:tw-w-[860px] tw-grid tw-gap-10 lg:tw-gap-12"
        >
          <div class="tw-grid tw-gap-4 lg:tw-gap-6">
            <p>
              Несмотря на прошедшие десятилетия и смену нескольких поколений,
              сегодня в 2023, мы, как и тогда в памятном 1945, с глубоким
              почтением склоняем головы перед теми, кто воевал на полях сражений
              и трудился в тылу, испытывая гордость и радость за подвиг целого
              поколения героев.
            </p>
            <p>
              9 мая жильцы наших коттеджных посёлков и жилых комплексов почтили
              память о великой Победе. Тематическая викторина помогла вспомнить
              нам самые значимые события той войны. И независимо от возраста
              абсолютно все с удовольствием пели песни военных лет. Даже
              4-летние ребята напевали знаменитую «Катюшу», задорную «Смуглянку»
              и легендарный «День Победы».
            </p>
            <p>
              Пока взрослые соревновались в перетягивании канатов и угадывании
              военных мелодий, дети цветными мелками рисовали открытки,
              посвященные Дню Победы. На асфальте «ожили» легендарный танк Т-34,
              праздничный салют, лица ветеранов. Даже яркое желтое солнце,
              голубые облака и белый голубь стали синонимами победы, символами
              мирной жизни. И, конечно же, самые активные получили памятные
              подарки.
            </p>
            <p>
              Не забыли мы и о важном атрибуте военной эпохи - полевой кухне.
              Незаменимая гречка с тушенкой, горячий чай с башкирскими травами –
              все это подкрепило праздничный дух гостей праздника.
            </p>
            <p>
              ГК «Жилой Квартал» была рада встретить этот великий день с вами,
              дорогие наши друзья. Мирного неба всем нам над головой!
            </p>
          </div>
          <div class="tw-rounded-2xl tw-overflow-hidden">
            <img src="/images/img/country_real_estate.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top tw-flex tw-justify-between">
        <h2 class="section__title">Читать далее</h2>
      </div>
      <ArticlesReadMoreList :article-id="+$route.params.id" />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <FormCard1 />
    </div>
  </section>
</template>
<script lang="ts" setup>
  import ArticlesReadMoreList from '@/other-modules/articles-readmore-list/index.vue';
</script>
<style lang="scss" scoped></style>
