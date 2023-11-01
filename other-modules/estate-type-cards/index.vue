<template>
  <Swiper v-bind="swiperOpts">
    <SwiperSlide
      v-for="card in data"
      :key="card.name"
    >
      <Card v-bind="card" />
    </SwiperSlide>
    <div class="swiper-pagination swiper-pagination_lighten estate-type-pag"></div>
  </Swiper>
</template>

<script setup lang="ts">
  import Card from './components/Card.vue';
  import { data } from './data';

  const swiperOpts = {
    spaceBetween: 16,
    modules: [ SwiperPagination ],
    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
    } as const,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    } as const,
  };
</script>

<style scoped lang="scss">
  .estate-type-pag {
    @apply tw-flex tw-justify-end tw-px-5 tw-pb-4;
  }
</style>
