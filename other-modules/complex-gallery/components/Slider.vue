<template>
  <Swiper
    v-if="current"
    class="complex-gallery-slider"
    v-bind="swiperOpts"
    :key="current.id"
  >
    <SwiperSlide
      class="complex-gallery-slider__slide"
      v-for="img in current.images"
    >
      <img
        class="complex-gallery-slider__img"
        :width="img.width ?? 'auto'"
        :height="img.height ?? 'auto'"
        :src="img.url"
        loading="lazy"
      />
    </SwiperSlide>
    <SlidersNavBtns />
    <div class="swiper-pagination !tw-left-auto !-tw-right-4"></div>
    <p class="complex-gallery-slider__caption">
      Визуализация проекта предварительная, возможны изменения
    </p>
  </Swiper>
</template>

<script setup lang="ts">
  import { useComplexGallery } from '../store';

  const store = useComplexGallery();

  const swiperOpts = {
    modules: [SwiperPagination, SwiperNavigation],
    slidesPerView: 1,
    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
      dynamicBullets: true,
    } as const,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    } as const
  };

  const items = computed(() => store.data?.data ?? []);

  const current = computed(() => {
    const item = items.value.find(i => i.label === store.currentType);
    return item;
  });
</script>

<style scoped lang="scss">
  .complex-gallery-slider {
    border-radius: 16px;
    overflow: hidden;

    &__slide {
      height: 560px;

      @include md {
        height: 450px;
      }

      @include sm {
        height: 300px;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%);
      }
    }

    &__img {
      position: relative;
      z-index: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;

    }

    &__caption {
      position: absolute;
      bottom: 24px;
      left: 40px;
      z-index: 20;
      @apply tw-text-white tw-text-sm;

      @include lg {
        left: 32px;
      }

      @include sm {
        left: 16px;
        bottom: 16px;
        max-width: 230px;
        @apply tw-text-xs;
      }
    }
  }
</style>
