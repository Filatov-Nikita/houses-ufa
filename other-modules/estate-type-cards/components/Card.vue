<template>
  <NuxtLink
    class="estate-type-card"
    :to="item.url"
    :style="[{ '--bg-card': `url(${ item.main_image?.url ?? '' })` }]"
  >
  <div class="estate-type-card__content">
      <div class="estate-type-card__title" v-html="item.title"></div>
      <p class="estate-type-card__text" v-html="item.subtitle"></p>
    </div>
    <div class="estate-type-card__romb">
      <div class="estate-type-card__romb-img"></div>
    </div>
    <div class="estate-type-card__next">
      <BaseIcon class="estate-type-card__next-icon" name="forward-line" />
    </div>
    <img v-if="item.background_image" class="estate-type-card__cover" :src="item.background_image.url" />
  </NuxtLink>
</template>
<script setup lang="ts">
import type { BannerOne } from '../types';

defineProps<{
  item: BannerOne,
}>();
</script>
<style lang="scss" scoped>
.estate-type-card {
  overflow: hidden;
  display: block;
  width: 100%;
  height: 640px;
  position: relative;
  padding: 40px;
  border-radius: 16px;
  @apply tw-bg-primary tw-text-white;

  @include lg {
    padding: 32px;
  }

  @include md {
    padding: 24px;
  }


  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      var(--bg-card);
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  &:hover::before {
    // opacity: 1;
  }

  &__cover {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    z-index: 1;
  }

  &__content {
    position: relative;
    z-index: 10;
  }

  &__title {
    font-size: 32px;
    line-height: 1.25;
    font-weight: 600;

    @include sm {
      @apply tw-text-2xl;
    }
  }

  &__text {
    margin-top: 16px;
    @apply tw-text-xl;

    @include sm {
      @apply tw-text-lg;
    }
  }

  &__next {
    z-index: 2;
    position: absolute;
    bottom: 24px;
    left: 24px;
    opacity: 0;
    width: 48px;
    height: 48px;
    padding: 12px;
    border-radius: 8px;
    transition: opacity 300ms;
    @apply tw-text-primary tw-bg-white;
  }

  &:hover &__next {
    opacity: 1;
  }

  &__next-icon {
    width: 24px;
    height: 24px;
  }

  &__romb {
    z-index: 2;
    overflow: hidden;
    width: 254px;
    height: 254px;
    position: absolute;
    left: 50%;
    bottom: calc(2.5rem + 40px);
    border: 1px solid theme('colors.primary-hover');
    border-radius: 50px;
    transform-origin: center center;
    transform: translate3d(-50%, -0%, 0px) rotate(45deg);
    transition: all 250ms ease-in-out;
  }

  &:hover &__romb {
    // transform: translate3d(-50%, -0%, 0px) rotate(45deg) scale(1.2);
    // opacity: 0;
  }

  &__romb-img {
    overflow: hidden;
    width: 250px;
    height: 250px;
    position: absolute;
    left: 50%;
    bottom: 50%;
    border-radius: 50px;
    transform: translate(-50%, 50%);
    transform-origin: center center;
    border: 1px solid theme('colors.primary-hover');
    outline-offset: 4px;

    &::before {
      content: '';
      width: 311px;
      height: 311px;
      position: absolute;
      background-image: var(--bg-card);
      background-size: cover;
      background-position: center;
      transform: translate3d(-31px, -31px, 0px) rotate(-45deg);
      transition: transform 300ms ease-in-out;
    }
  }
  &:hover &__romb-img::before {
    transform: translate3d(-31px, -31px, 0px) rotate(-45deg) scale(1.2);
  }
}
</style>
