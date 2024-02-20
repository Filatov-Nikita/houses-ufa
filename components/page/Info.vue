<template>
  <div class="page-info">
    <div class="page-info__left">
      <BaseBreadcrumbs class="page-info__bread" />
      <h1 class="page-info__title" v-html="title"></h1>
      <slot name="text" v-if="$slots.text" />
      <p v-else-if="text" class="page-info__text" v-html="text"></p>
    </div>
    <svg class="page-info__decor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 304" fill="none" preserveAspectRatio="none">
      <path d="M120.86 440L763 440L763 6.10352e-05L120.86 4.89746e-06C50.0992 -1.28862e-06 14.719 -3.48992e-05 3.17374 22.4597C-8.37149 44.9194 12.2916 73.5496 53.6177 130.81L83.1799 171.771C99.9812 195.05 108.382 206.69 108.382 220C108.382 233.311 99.9813 244.95 83.1804 268.229L83.1798 268.23L53.6181 309.19C12.2918 366.45 -8.37133 395.08 3.17383 417.54C14.7191 440 50.0992 440 120.86 440Z" fill="#F0F0F0"/>
    </svg>
    <slot name="icon" class="page-info__icon" fill="#8F8F8F" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string,
    text?: string,
  }>();
</script>

<style lang="scss">
  .page-info__icon {
    position: absolute;
    right: 43px;
    bottom: 0;
    z-index: 10;
    opacity: 0.1;
    width: 258px;
    height: 233px;

    @include md {
      width: 200px;
      height: 150px;
    }

    @include sm {
      width: 100px;
      height: 80px;
      right: 0px;
      bottom: 8px;
    }
  }
</style>

<style scoped lang="scss">
  .page-info {
    border-radius: 16px;
    padding: 64px 40px;
    position: relative;
    overflow: hidden;
    @apply tw-bg-white;

    @include lg {
      padding: 48px 24px;
    }

    @include sm {
      padding: 32px 16px;
    }

    &__bread {
      margin-bottom: 16px;
      @apply tw-text-text02;
    }

    &__title {
      font-size: 48px;
      line-height: 1.2;
      margin-bottom: 24px;
      @apply tw-text-text00;

      @include lg {
        font-size: 40px;
        line-height: 1.4;
      }

      @include sm {
        font-size: 24px;
        line-height: 1.3;
        margin-bottom: 16px;
      }
    }

    &__left {
      width: 50%;
      position: relative;
      z-index: 20;

      @include sm {
        width: 70%;
      }
    }

    &__text {
      @apply tw-text-text01 tw-text-xl;

      @include lg {
        @apply tw-text-lg;
      }

      @include sm {
        @apply tw-text-base;
      }
    }

    &__decor {
      position: absolute;
      bottom: 0px;
      right: 0;
      width: calc(50% - 20px);
      height: calc(100% + 5px);
      z-index: 0;

      @include sm {
        width: 235px;
        height: 100%;
        right: -82px;
      }
    }
  }
</style>
