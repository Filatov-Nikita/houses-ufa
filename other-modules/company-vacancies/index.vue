<template>
  <div class="company-vacancies">
    <div class="company-vacancies__left">
      <h2 class="company-vacancies__title">
        Мы постоянно в поиске профессионалов своего дела
      </h2>
      <BaseButton
        class="company-vacancies__btn"
        to="https://hh.ru/employer/705238"
        target="_blank"
      >
        <div class="tw-flex tw-justify-between">
          <span>Вакансии</span>
          <BaseIcon class="tw-w-6 tw-h-6" name="target" />
        </div>
      </BaseButton>
    </div>
    <div class="company-vacancies__right">
      <img src="/images/img/vacancies.png" alt="Фото сотрудников" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .company-vacancies {
    @apply tw-pt-6 tw-px-4 tw-h-[480px] lg:tw-h-auto lg:tw-p-6 xl:tw-p-12 tw-bg-base01 tw-rounded-2xl tw-overflow-hidden tw-relative tw-grid tw-gap-[85px];

    &__title {
      @apply tw-text-h5 lg:tw-text-h4 tw-mb-8;
    }

    &__btn {
      @apply tw-w-full lg:tw-w-[177px];
    }

    &__left {
      @apply lg:tw-w-[622px];
    }

    &__right {
      @apply tw-absolute tw-w-[483px] tw-h-[320px] tw-object-cover tw-bottom-0 lg:-tw-right-28 lg:tw-top-1/2 lg:tw-transform tw-translate-y-[130px] -tw-translate-x-7 lg:-tw-translate-y-1/2;
    }
  }
</style>
