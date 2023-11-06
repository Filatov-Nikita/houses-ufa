<template>
  <Swiper
    class="estate-image-slider"
    v-bind="swiperProps"
    :effect="effect"
    :fadeEffect="fadeEffect"
  >
    <SwiperSlide
      class="estate-image-slider__slide"
      :class="{ 'tw-cursor-pointer': fullscreen }"
      v-for="image in images"
      @click="emit('showImg')"
    >
      <img
        class="estate-image-slider__img"
        :class="imgClasses"
        :src="image"
        loading="lazy"
      />
      <FullScreenBtn
        v-show="fullscreen"
        class="estate-image-slider__fullscreen"
      />
    </SwiperSlide>
    <NavBtns />
    <div class="swiper-pagination estate-image-slider__pag"></div>
  </Swiper>
</template>

<script setup lang="ts">
  import NavBtns from '@/components/sliders/NavBtns.vue';
  import FullScreenBtn from '@/components/sliders/FullScreenBtn.vue';

  interface Props {
    images: Array<string>,
    imgClasses?: string,
    effect?: string,
    fadeEffect?: { crossFade: boolean },
    fullscreen?: boolean,
  }

  defineProps<Props>();
  const emit = defineEmits<{
    (event: 'showImg'): void,
  }>();


  const swiperProps = {
    modules: [SwiperPagination, SwiperNavigation, SwiperEffectFade],
    spaceBetween: 24,
    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
      dynamicBullets: true,
    } as const,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    } as const,
  };
</script>

<style scoped lang="scss">
  .estate-image-slider {
    position: relative;

    &__pag {
      left: auto !important;
      right: -16px !important;
    }

    &__slide {
      position: relative;
    }

    &__slide:hover &__fullscreen {
      opacity: 1;
    }

    &__img {
      border-radius: 16px;
      object-fit: contain;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &__fullscreen {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 10;
      transition: opacity, 300ms;
      transform: translate(-50%, -50%);
    }
  }
</style>
