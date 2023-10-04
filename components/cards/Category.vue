<template>
  <div
    class="card"
    :style="{
      '--bg-card': 'url(/images/img/country_real_estate.png)',
    }"
  >
    <div class="card__content">
      <h4 class="title">{{ title }}</h4>
      <p class="text">{{ text }}</p>
    </div>
    <div class="card__wrapper">
      <div class="card__bg"></div>
    </div>
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
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-image: var(--bg-card);
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

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
    @apply tw-border tw-border-primary-hover   tw-outline-offset-4 tw-mx-auto tw-overflow-hidden tw-absolute tw-h-10;
    transform-origin: center center;
    transform: translate(-50%, 50%);
    bottom: 50%;
    left: 50%;
    width: 250px;
    height: 250px;
    border-radius: 50px;
    transition: all 300ms ease-in-out;
    &::before {
      content: '';
      position: absolute;
      background-image: var(--bg-card);
      background-size: cover;

      width: 311px;
      height: 311px;
      transform: translate3d(-31px, -31px, 0px) rotate(-45deg);
      transition: all 300ms ease-in-out;
    }
  }
  &__wrapper {
    @apply tw-border tw-border-primary-hover tw-border-solid    tw-mx-auto tw-overflow-hidden tw-absolute tw-h-10;
    transform-origin: center center;
    transform: translate3d(-50%, -0%, 0px) rotate(45deg);
    bottom: calc(2.5rem + 40px);
    left: 50%;
    width: 254px;
    height: 254px;
    border-radius: 50px;
    transition: all 300ms ease-in-out;
  }
  &__link {
    @apply tw-absolute tw-bottom-6 tw-left-6 lg:tw-bottom-10 lg:tw-left-10 tw-opacity-0;
    transition: opacity 300ms ease-in-out 0.3s;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover &__wrapper {
    transform: translate3d(-50%, -0%, 0px) rotate(45deg) scale(4);
    opacity: 0;
    &::before {
      // transform: translate3d(-31px, -31px, 0px) rotate(-45deg) scale(2);
    }
  }
  &:hover &__link {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
}
</style>
