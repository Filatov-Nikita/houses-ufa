<template>
  <SectionFirst
    :history-list="[{ name: 'Главная', to: '/' }, { name: 'Пресс-центр' }]"
  >
    <template #title> Пресс-центр </template>
    <template #text> Описание </template>
    <template #icon>
      <img
        src="/images/icons/first-section/press-centr.svg"
        alt=""
        class="tw-absolute tw-w-[84px] tw-h-[84px] tw-bottom-0 -tw-right-2 lg:tw-w-[234px] lg:tw-h-[234px] lg:-tw-bottom-10 lg:tw-right-10"
      />
    </template>
  </SectionFirst>
  <section>
    <div class="wrapper">
      <ArticlesFilter />
    </div>
  </section>
</template>
<script lang="ts" setup>
import ArticlesFilter from '@/other-modules/articles-filter/index.vue';
</script>
<style lang="scss" scoped></style>
