<template>
  <SectionFirst
    :history-list="[{ name: 'Главная', to: '/' }, { name: 'Пресс-центр' }]"
  >
    <template #title> Пресс-центр </template>
    <template #text> Описание </template>
    <template #icon>
      <img
        src="/assets/images/icons/first-section/press-centr.svg"
        alt=""
        class="tw-absolute tw-w-[84px] tw-h-[84px] tw-bottom-0 -tw-right-2 lg:tw-w-[234px] lg:tw-h-[234px] lg:-tw-bottom-10 lg:tw-right-10"
      />
    </template>
  </SectionFirst>
  <section>
    <div class="tw-container">
      <div class="section__top"></div>
      <div
        class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-2 xl:tw-grid-cols-3"
      >
        <CardsItemNews
          v-for="item in newsList"
          :to="item.to"
          :title="item.title"
          :date="item.date"
          :is_favorite="item.is_favorite"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const newsList = [
  {
    to: '/',
    title:
      'Mkset: «Таунхаус против квартиры. Что комфортнее для семьи с детьми?»',
    date: '12.05.23',
    is_favorite: true,
  },
  {
    to: '/',
    title:
      'Mkset: «Таунхаус против квартиры. Что комфортнее для семьи с детьми?»',
    date: '12.05.23',
    is_favorite: false,
  },
  {
    to: '/',
    title:
      'Mkset: «Таунхаус против квартиры. Что комфортнее для семьи с детьми?»',
    date: '12.05.23',
    is_favorite: false,
  },
  {
    to: '/',
    title:
      'Mkset: «Таунхаус против квартиры. Что комфортнее для семьи с детьми?»',
    date: '12.05.23',
    is_favorite: false,
  },
]
</script>
<style lang="scss" scoped></style>
