<template>
  <article class="credit-item">
    <div class="credit-item__left" :class="{ 'credit-item__left--short': short }">
      <div class="credit-item__title">
        <h3 class="credit-item__name">{{ item.name }}</h3>
        <div class="credit-item__perc">от {{ perc }}%</div>
      </div>
      <p class="credit-item__text">{{ item.description }}</p>
      <button class="credit-item__next">
        <BaseIcon class="credit-item__icon" name="forward-line" />
      </button>
    </div>
    <template v-if="img && !short">
      <svg class="credit-item__decor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528 440" fill="#4FBA78">
        <path d="M120.86 440L763 440L763 6.10352e-05L120.86 4.89746e-06C50.0992 -1.28862e-06 14.719 -3.48992e-05 3.17374 22.4597C-8.37149 44.9194 12.2916 73.5496 53.6177 130.81L83.1799 171.771C99.9812 195.05 108.382 206.69 108.382 220C108.382 233.311 99.9813 244.95 83.1804 268.229L83.1798 268.23L53.6181 309.19C12.2918 366.45 -8.37133 395.08 3.17383 417.54C14.7191 440 50.0992 440 120.86 440Z" />
      </svg>
      <img class="credit-item__img" :src="img" :alt="item.name" />
    </template>
  </article>
</template>

<script setup lang="ts">
  import { Group } from '@/types/credit';

  interface Props {
    item: Group,
    img?: string,
    short?: boolean
  }

  const props =  withDefaults(defineProps<Props>(), { short: false });

  const perc = computed(() => (+props.item.percent_min).toFixed(0));
</script>

<style scoped lang="scss">
  .credit-item {
    padding: 64px;
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    @apply tw-bg-base01;

    @include lg {
      padding: 40px;
    }

    @include sm {
      padding: 24px 16px;
    }

    &:hover &__next {
      opacity: 1;
    }

    &:hover &__perc {
      @apply tw-bg-primary;
    }

    &:hover &__decor {
      transform: translateX(0);
    }

    &__perc {
      display: inline-block;
      border-radius: 8px;
      padding: 12px;
      @apply tw-text-white tw-bg-base02;

      @include sm {
        padding: 10px 8px;
        @apply tw-bg-primary;
      }
    }

    &__decor {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      transition: transform 300ms;
      transform: translateX(100%);
      z-index: 0;

      @include sm {
        height: 192px;
        top: auto;
        bottom: -97px;
        right: -75px;
        transform: translateX(0);
      }
    }

    &__img {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 10;
      width: 400px;
      height: calc(100% - 20px);
      object-fit: contain;
      object-position: bottom;

      @include sm {
        width: 158px;
        bottom: -35px;
      }
    }

    &__left {
      position: relative;
      z-index: 20;
      width: calc(100% / 12 * 7);

      @include sm {
        width: 100%;
      }

      &--short {
        width: 100%;
      }
    }

    &__name {
      font-size: 32px;
      line-height: 1.25;
      @apply tw-text-text00;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__title {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 40px;
      gap: 16px;

      @include lg {
        margin-bottom: 24px;
      }
    }

    &__text {
      font-size: 16px;
      line-height: 1.75;
      margin-bottom: 32px;
      max-width: 682px;
      @apply tw-text-text01;

      @include sm {
        margin-bottom: 45px;
      }
    }

    &__next {
      border-radius: 8px;
      width: 48px;
      height: 48px;
      padding: 12px;
      opacity: 0;
      transition: opacity 300ms;
      @apply tw-bg-primary tw-text-white;

      @include sm {
        opacity: 1;
      }
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
