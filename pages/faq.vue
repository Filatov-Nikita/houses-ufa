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
      <div class="section__top">
        <h2 class="section__title">Ипотека</h2>
      </div>
      <div class="tw-grid tw-gap-2">
        <AccordionMain
          v-for="item in 6"
          class="tw-bg-white tw-py-6 tw-px-4 tw-rounded-2xl"
          icons-class="tw-h-10 tw-w-10 tw-rounded-lg tw-grid tw-place-content-center tw-bg-secondary"
        >
          <template #title>
            Какие условия по ипотеке и в каких банках?
          </template>

          <template #content>
            <div class="tw-mt-4 tw-text-text01 lg:tw-text-body_m2">
              Компания сотрудничает более чем с 20 банками-партнерами в рамках
              ипотечного кредитования. Список банков и условиями кредитования, а
              также ипотечный калькулятор находятся по ссылке Если Вы не увидели
              интересующий Вас банк в этом списке, наши менеджеры по ипотеке
              проведут индивидуальную аккредитацию в любом банке под Вашу
              сделку.
            </div>
          </template>
        </AccordionMain>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
