<template>
  <div class="estate-header">
    <BaseBreadcrumbs class="estate-header__bread" />
    <div class="estate-header__wrap">
      <div class="estate-header__item">
        <h1 class="estate-header__title">{{ name }}</h1>
        <p class="estate-header__location">{{ location }}</p>
      </div>
      <p class="estate-header__date" v-if="completionQuarter && completionYear">
        Сдача в {{ completionQuarter }} кв. {{ completionYear }}
      </p>
    </div>
    <div class="estate-header__bottom">
      <BaseButton class="estate-header__action" theme="white" @click="onAction">
        {{ actionTitle }}
      </BaseButton>
      <p class="estate-header__caption">{{ caption }}</p>
    </div>
    <Swiper class="estate-header__slider" :autoplay="{ delay: 5000 }" loop :modules="[Autoplay, EffectFade]" watchOverflow effect="fade" :speed="500">
      <SwiperSlide class="estate-header__slide" v-for="image in images">
        <img class="estate-header__img" :src="image.url" :width="image.width ?? 'auto'" :height="image.height ?? 'auto'" :alt="name" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import { Image } from '@/types/share';
  import { Autoplay, EffectFade } from 'swiper/modules';

  interface Props {
    name: string,
    location: string,
    actionTitle: string,
    caption: string,
    images: Image[],
    completionQuarter?: number | string,
    completionYear?: number | string,
  }

  defineProps<Props>();
  const emit = defineEmits<{ (event: 'action'): void }>();

  function onAction() {
    emit('action');
  }
</script>

<style scoped lang="scss">
  .estate-header {
    border-radius: 16px;
    position: relative;
    height: 640px;
    padding: 64px 40px;
    display: flex;
    flex-direction: column;
    @apply tw-text-white;

    @include lg {
      padding: 40px;
      height: 540px;
    }

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 32px 16px;
      height: 450px;
    }

    &__bread {
      margin-bottom: 16px;
    }

    &__location {
      @apply tw-text-2xl;

      @include sm {
        @apply tw-text-base;
      }
    }

    &__caption {
      opacity: 0.85;
      @apply tw-text-sm;

      @include sm {
        @apply tw-text-xs;
      }
    }

    &__bottom {
      margin-top: auto;
    }

    &__title {
      margin-bottom: 8px;
      line-height: 1.2;
      font-size: 48px;

      @include sm {
        margin-bottom: 16px;
        @apply tw-text-2xl;
      }
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 24px;

      @include sm {
        gap: 8px;
      }
    }

    &__item {
      flex-grow: 1;

      @include sm {
        width: 100%;
      }
    }

    &__date {
      padding: 6px 12px;
      border-radius: 100px;
      background: rgba(0,0,0,0.4);
      @apply tw-text-white tw-text-body_s tw-font-medium;
    }

    &__action {
      margin-bottom: 16px;
    }

    &__slider {
      position: absolute;
      z-index: -2;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      @apply tw-inset-0;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      border-radius: 16px;
    }

    &::after {
      content: '';
      border-radius: 16px;
      display: block;
      z-index: -1;
      position: absolute;
      background: linear-gradient(270deg, rgba(0, 0, 0, 0.00) 5.33%, rgba(0, 0, 0, 0.40) 100%);
      @apply tw-inset-0;
    }
  }
</style>
