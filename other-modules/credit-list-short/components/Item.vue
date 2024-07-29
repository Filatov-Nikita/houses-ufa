<template>
  <NuxtLink class="credit-item" to="/ipoteka#credit-calc">
    <div class="credit-item__left">
      <div class="credit-item__block">
        <h3 class="credit-item__name">{{ item.name }}</h3>
        <div class="credit-item__perc">от {{ perc }}%</div>
      </div>
    </div>
    <template v-if="img">
      <svg class="credit-item__decor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528 440" fill="#4FBA78">
        <path d="M120.86 440L763 440L763 6.10352e-05L120.86 4.89746e-06C50.0992 -1.28862e-06 14.719 -3.48992e-05 3.17374 22.4597C-8.37149 44.9194 12.2916 73.5496 53.6177 130.81L83.1799 171.771C99.9812 195.05 108.382 206.69 108.382 220C108.382 233.311 99.9813 244.95 83.1804 268.229L83.1798 268.23L53.6181 309.19C12.2918 366.45 -8.37133 395.08 3.17383 417.54C14.7191 440 50.0992 440 120.86 440Z" />
      </svg>
      <img class="credit-item__img" :src="img" :alt="item.name" />
    </template>
  </NuxtLink>
</template>

<script setup lang="ts">
  import { Group } from '@/types/credit';

  interface Props {
    item: Group,
    img?: string,
  }

  const props =  defineProps<Props>();

  const perc = computed(() => parseFloat(props.item.percent_min));
</script>

<style scoped lang="scss">
  .credit-item {
    padding: 40px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    height: 425px;
    @apply tw-bg-base01;

    @include lg {
      padding: 24px;
    }

    @include sm {
      height: 380px;
    }

    &:hover &__perc {
      @apply tw-bg-primary;
    }

    &:hover &__decor {
      transform: translateX(0);
    }

    &__perc {
      margin-top: auto;
      display: inline-block;
      border-radius: 8px;
      padding: 16px 18px;
      @apply tw-text-white tw-bg-base02 tw-text-xl;

      @include sm {
        padding: 10px 16px;
        @apply tw-text-lg;
      }
    }

    &__decor {
      position: absolute;
      right: -100px;
      top: 0;
      height: 100%;
      transition: transform 300ms;
      transform: translateX(100%);
      z-index: 0;

      @include lg {
        right: -240px;
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

      @include lg {
        width: 350px;
      }

      @include md {
        width: 400px;
      }

      @include sm {
        width: 300px;
      }
    }

    &__left {
      width: calc(100% / 12 * 7);
      height: 100%;
      position: relative;
      z-index: 100;
    }

    &__block {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: flex-start;
    }

    &__name {
      font-size: 32px;
      line-height: 1.25;
      @apply tw-text-text00;

      @include lg {
        font-size: 24px;
        line-height: 1.3;
      }
    }
  }
</style>
