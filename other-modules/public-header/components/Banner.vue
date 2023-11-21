<template>
  <div class="bannerBlock">
    <img class="bannerBlock__img" :src="banner.imgSrc" alt="фото банера">
    <div class="bannerBlock__wrap">
      <div class="bannerBlock__text">
        <p class="bannerBlock__title">
          {{ banner.title }}
        </p>
        <p class="bannerBlock__subtitle">
          {{ banner.subtitle }}
        </p>
      </div>
      <div class="bannerBlock__action">
        <BaseButton class="bannerBlock__link" :to="banner.readMoreHref" theme="white">
          <span class="tw-text-primary">Подробнее</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Banner } from '@/stores/banner';

  defineProps<{
    banner: Banner,
  }>();
</script>

<style scoped lang="scss">
  .bannerBlock {
    position: relative;
    z-index: 1;
    padding: 24px;
    border-radius: 16px;
    overflow: hidden;
    @apply tw-text-white;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%);
    }

    @include lg {
      padding: 40px;
    }

    @include md {
      padding: 24px;
    }

    &__title {
      margin-bottom: 4px;
      @apply tw-text-2xl tw-text-white;
    }

    &__subtitle {
      @apply tw-text-base tw-text-white;
    }

    &__img {
      position: absolute;
      object-fit: cover;
      object-position: center;
      z-index: -2;
      @apply tw-w-full tw-h-full tw-left-0 tw-top-0;
    }

    &__wrap {
      @include lg {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 16px;
      }
    }

    &__text {
      @include lg {
        flex-grow: 1;
      }
    }

    &__action {
      margin-top: 68px;

      @include lg {
        margin-top: 0px;
      }

      @include md {
        margin-top: 40px;
        width: 100%;
      }
    }

    &__link {
      @include md {
        @apply tw-w-full;
      }
    }
  }
</style>
