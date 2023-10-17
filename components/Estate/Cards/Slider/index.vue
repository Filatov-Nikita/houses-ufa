<template>
  <Swiper v-bind="swiperOpts">
    <SwiperSlide v-for="img in images">
      <div class="estate-slider">
        <img
          :src="img"
          class="estate-slider__img"
          alt=""
        />
      </div>
    </SwiperSlide>
    <div class="swiper-paginate estate-slider__pag"></div>
  </Swiper>
</template>

<script setup lang="ts">
  defineProps<{
    images: string[],
  }>();

  const swiperOpts = {
    modules: [ SwiperPagination ],
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      type: 'bullets',
      el: '.swiper-paginate',
      bulletActiveClass: 'line-active',
      bulletClass: 'line',
    } as const
  }
</script>

<style scoped lang="scss">
  .estate-slider {
    width: 277px;
    height: 277px;

    &__img {
      @apply tw-w-full tw-h-full tw-object-center tw-rounded-2xl tw-object-cover;
    }

    &__pag {
      @apply tw-mt-3;
    }
  }
</style>
