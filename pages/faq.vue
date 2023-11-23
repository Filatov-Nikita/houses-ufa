<template>
  <SectionFirst
    class="section"
    :history-list="[{ name: 'Главная', to: '/' }, { name: 'Вопросы и ответы' }]"
  >
    <template #title> Вопросы и ответы </template>
    <template #text>
      Если вы не нашли ответ на своё вопрос, пожалуйста, свяжитесь с
      <NuxtLink to="/" class="tw-text-primary">нами</NuxtLink>
    </template>
    <template #icon>
      <img
        src="/images/icons/first-section/faq.svg"
        alt=""
        class="tw-absolute tw-w-[84px] tw-h-[84px] tw-bottom-0 -tw-right-2 lg:tw-w-[234px] lg:tw-h-[234px] lg:-tw-bottom-10 lg:tw-right-10"
      />
    </template>
  </SectionFirst>

  <section class="section">
    <div class="wrapper">
      <Faq />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import Faq from '@/other-modules/faq/index.vue';
</script>
