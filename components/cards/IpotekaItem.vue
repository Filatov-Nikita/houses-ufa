<template>
  <!-- карточка ипотеки -->
  <NuxtLink class="card" :class="{ 'card-flag': isImages }" :to="to">
    <img v-if="isImages" :src="img" alt="" class="img" />
    <div class="content">
      <div
        class="tw-grid tw-gap-4 lg:tw-flex lg:tw-justify-between lg:tw-items-center tw-mb-6 xl:tw-mb-10"
      >
        <h4 class="title">{{ title }}</h4>
        <div class="procent tw-relative">{{ procent }}</div>
      </div>
      <p class="text">
        Ипотечная программа с господдержкой и специальные условия от банка МКБ.
        Просто заполните анкету и получите одобрение. Всего один шаг, и квартира
        — ваша. Субсидированная ставка действует первые два года, далее 8% или
        7,7% при сумме кредита до 12 млн рублей и первом взносе от 15%. При
        сумме от 12 до 30 млн рублей ставка равна 6,5% годовых.
      </p>
    </div>
    <div class="arrow">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7806 12.531L14.0306 19.281C13.8899 19.4218 13.699 19.5008 13.5 19.5008C13.301 19.5008 13.1101 19.4218 12.9694 19.281C12.8286 19.1403 12.7496 18.9494 12.7496 18.7504C12.7496 18.5514 12.8286 18.3605 12.9694 18.2198L18.4397 12.7504H3.75C3.55109 12.7504 3.36032 12.6714 3.21967 12.5307C3.07902 12.3901 3 12.1993 3 12.0004C3 11.8015 3.07902 11.6107 3.21967 11.4701C3.36032 11.3294 3.55109 11.2504 3.75 11.2504H18.4397L12.9694 5.78104C12.8286 5.64031 12.7496 5.44944 12.7496 5.25042C12.7496 5.05139 12.8286 4.86052 12.9694 4.71979C13.1101 4.57906 13.301 4.5 13.5 4.5C13.699 4.5 13.8899 4.57906 14.0306 4.71979L20.7806 11.4698C20.8504 11.5394 20.9057 11.6222 20.9434 11.7132C20.9812 11.8043 21.0006 11.9019 21.0006 12.0004C21.0006 12.099 20.9812 12.1966 20.9434 12.2876C20.9057 12.3787 20.8504 12.4614 20.7806 12.531Z"
          fill="white"
        />
      </svg>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const propsIpoteka = withDefaults(
  defineProps<{
    title: string
    text?: string
    procent: string
    isImages?: boolean
    to: string
    img: string
  }>(),
  {
    isImages: true,
  }
)
</script>
<style lang="scss" scoped>
.card {
  @apply tw-h-[560px] lg:tw-h-[440px] xl:tw-h-[440px] tw-rounded-2xl tw-overflow-hidden tw-relative;
  @apply tw-px-4 tw-py-6 lg:tw-p-10 tw-grid tw-content-between;
  @apply tw-bg-base01;
  transition: background-color 0.3s ease;
  &-flag::before {
    content: '';
    background: url(./assets/images/icons/ipoteka-bg.svg) center no-repeat;
    background-size: contain;
    position: absolute;
    bottom: -130px;
    right: -170px;
    height: 302px;
    width: 100%;

    transition: transform 0.3s ease;
    @screen lg {
      bottom: auto;
      right: -250px;
      height: 100%;
      width: 763px;
    }
    @screen xl {
      right: -200px;
    }
  }
  .arrow {
    @apply tw-w-12 tw-h-12 tw-rounded-lg tw-grid tw-place-content-center tw-bg-primary lg:tw-opacity-0;
    transition: opacity 0.3s ease;
  }
  .content {
    @apply lg:tw-w-[432px] xl:tw-w-[720px] tw-relative;
  }
  .title {
    @apply tw-text-h5 lg:tw-text-h4;
  }
  .text {
    @apply xl:tw-max-w-[682px];
  }
  .procent {
    @apply tw-rounded-lg tw-grid tw-place-content-center tw-p-2 lg:tw-py-3 lg:tw-px-[18px] tw-bg-primary lg:tw-bg-base02 tw-w-fit;
    @apply tw-font-freesetdemi tw-text-body_l lg:tw-text-h6 tw-text-white;
    transition: background-color 0.3s ease;
  }
  .img {
    @apply tw-absolute tw-object-cover tw-w-[302px] tw-h-[302px] lg:tw-w-[455px] lg:tw-h-[455px] -tw-bottom-[120px] -tw-right-[58px] lg:tw-bottom-auto lg:tw-right-10 lg:tw-top-5;
  }
  &:hover {
    & {
      @apply lg:tw-bg-secondary-hover;
    }
    .procent {
      @apply lg:tw-bg-primary;
    }
    .arrow {
      @apply lg:tw-opacity-100;
    }
  }
}
</style>
