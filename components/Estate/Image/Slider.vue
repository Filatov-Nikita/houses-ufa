<template>
  <Swiper
    class="estate-image-slider"
    v-bind="swiperProps"
    :effect="effect"
    :fadeEffect="fadeEffect"
  >
    <SwiperSlide class="estate-image-slider__slide" v-for="image in images">
      <img
        class="estate-image-slider__img"
        :class="imgClasses"
        :src="image"
        loading="lazy"
      />
    </SwiperSlide>
    <NavBtns />
    <div class="swiper-pagination estate-image-slider__pag"></div>
  </Swiper>
</template>

<script setup lang="ts">
  import NavBtns from '@/components/sliders/NavBtns.vue';

  interface Props {
    images: Array<string>,
    imgClasses?: string,
    effect?: string,
    fadeEffect?: { crossFade: boolean },
  }

  defineProps<Props>();

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

    &__img {
      border-radius: 16px;
      object-fit: cover;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
</style>
