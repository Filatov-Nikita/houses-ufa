<template>
  <div class="card">
    <div class="card__content">
      <h4 class="title">{{ title }}</h4>
      <p class="text">{{ text }}</p>
    </div>
    <div
      class="card__bg"
      :style="{
        '--bg-card': 'url(/images/img/country_real_estate.png)',
      }"
    ></div>
    <NuxtLink class="card__link" :to="to">
      <BaseSquareIcon>
        <img
          src="~assets/images/icons/arrow_line_right-green.svg"
          width="32"
          height="32"
        />
      </BaseSquareIcon>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const categoryProps = defineProps<{
  title: string
  text: string
  img: string
  to: string
}>()
</script>
<style lang="scss" scoped>
.card {
  @apply tw-bg-primary tw-relative tw-overflow-hidden tw-p-6 lg:tw-p-10 tw-rounded-2xl;
  width: 100%;
  height: 540px;
  &__content {
    @apply tw-text-white tw-grid tw-gap-4 tw-relative tw-z-10;
    .title {
      @apply tw-text-h4;
    }
    .text {
      @apply tw-text-body_l;
    }
  }
  &__bg {
    @apply tw-border tw-border-primary-hover tw-outline tw-outline-primary-hover tw-outline-[0.5px] tw-outline-offset-4 tw-mx-auto tw-overflow-hidden tw-absolute tw-h-10;
    transform-origin: center center;
    transform: translate3d(-50%, -0%, 0px) rotate(45deg);
    bottom: calc(2.5rem + 40px);
    left: 50%;
    width: 250px;
    height: 250px;
    border-radius: 50px;
    &::before {
      content: '';
      position: absolute;
      background-image: var(--bg-card);
      background-size: cover;

      width: 311px;
      height: 311px;
      transform: translate3d(-31px, -31px, 0px) rotate(-45deg);
    }
  }
  &__link {
    @apply tw-absolute tw-bottom-6 tw-left-6 lg:tw-bottom-10 lg:tw-left-10 tw-opacity-0;
    transition: opacity 300ms ease-in-out 0.3s;
  }
  &:hover &__bg {
    /*
    */
    width: 100%;
    height: 100%;

    transform: translate3d(-50%, 50%, 0px) rotate(0deg);
    bottom: 50%;
    animation: hover 2s forwards alternate;
    &::before {
      animation: hover-image 2s forwards;
      width: 100%;
      height: 100%;
      transform: translate3d(0px, 0px, 0px) rotate(0deg);
    }
  }
  &:hover &__link {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
}
@keyframes hover {
  0% {
    transform: translate3d(-50%, -0%, 0px) rotate(45deg);
    transform-origin: center center;
    left: 50%;
    width: 250px;
    height: 250px;
    border-radius: 50px;
    bottom: calc(2.5rem + 40px);
  }
  30% {
    bottom: 50%;
    transform: translate3d(-50%, 50%, 0px) rotate(45deg);
  }
  40% {
    transform: translate3d(-50%, 50%, 0px) rotate(0deg);
  }
  50% {
    width: 250px;
    height: 250px;
    outline-width: 2px;
  }
  80% {
    width: 80%;
    height: 90%;
  }
  80% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
    transform: translate3d(-50%, 50%, 0px) rotate(0deg);

    border-radius: 0px;
    border-width: 0;
  }
}
@keyframes hover-image {
  0% {
    width: 311px;
    height: 311px;
    transform: translate3d(-31px, -31px, 0px) rotate(-45deg);
  }
  30% {
    transform: translate3d(-71px, -91px, 0px) rotate(-45deg);
    width: 450px;
    height: 450px;
  }
  40% {
    transform: translate3d(0px, -0px, 0px) rotate(-0deg);
  }
  50% {
    width: 200%;
    height: 200%;
  }
  100% {
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px) rotate(0deg);
  }
}
</style>
