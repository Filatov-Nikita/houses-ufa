<template>
  <SectionFirst
    :history-list="[{ name: 'Главная', to: '/' }, { name: 'Вопросы и ответы' }]"
  >
    <template #title> Вопросы и ответы </template>
    <template #text>
      Если вы не нашли ответ на своё вопрос, пожалуйста, свяжитесь с
      <NuxtLink to="/" class="tw-text-primary">нами</NuxtLink>
    </template>
    <template #icon>
      <img
        src="/assets/images/icons/first-section/faq.svg"
        alt=""
        class="tw-absolute tw-w-[84px] tw-h-[84px] tw-bottom-0 -tw-right-2 lg:tw-w-[234px] lg:tw-h-[234px] lg:-tw-bottom-10 lg:tw-right-10"
      />
    </template>
  </SectionFirst>
  <section>
    <div class="tw-container">
      <TabFAQ />
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
