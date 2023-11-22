<template>
  <MainFilter />
  <section>
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Как купить</h2>
      </div>
      <div class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-3">
        <div
          class="tw-bg-white tw-rounded-2xl tw-p-5 tw-grid xl:tw-flex tw-gap-6"
        >
          <div class="tw-bg-base00 tw-p-2 tw-rounded-lg tw-w-fit tw-h-fit">
            <BaseIcon name="wallet" class="tw-w-8 tw-h-8 tw-text-primary" />
          </div>
          <div>
            <h4 class="tw-text-h6 tw-mb-4">Получить предложение</h4>
            <p class="tw-text-body_m">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </div>
        <div
          class="tw-bg-white tw-rounded-2xl tw-p-5 tw-grid xl:tw-flex tw-gap-6"
        >
          <div class="tw-bg-base00 tw-p-2 tw-rounded-lg tw-w-fit tw-h-fit">
            <BaseIcon name="read" class="tw-w-8 tw-h-8 tw-text-primary" />
          </div>
          <div>
            <h4 class="tw-text-h6 tw-mb-4">Купить онлайн</h4>
            <p class="tw-text-body_m">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </div>
        <div
          class="tw-bg-white tw-rounded-2xl tw-p-5 tw-grid xl:tw-flex tw-gap-6"
        >
          <div class="tw-bg-base00 tw-p-2 tw-rounded-lg tw-w-fit tw-h-fit">
            <BaseIcon name="rub" class="tw-w-8 tw-h-8 tw-text-primary" />
          </div>
          <div>
            <h4 class="tw-text-h6 tw-mb-4">Взять ипотеку</h4>
            <p class="tw-text-body_m">
              Условия покупки и специальные предложения.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <FormCard1 />
    </div>
  </section>
</template>

<script setup lang="ts">
  import MainFilter from '@/other-modules/main-filter/index.vue';
</script>
