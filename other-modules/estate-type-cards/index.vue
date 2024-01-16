<template>
  <Swiper v-bind="swiperOpts">
    <SwiperSlide
      v-for="card in items"
      :key="card.name"
    >
      <Card v-bind="card" />
    </SwiperSlide>
    <div class="swiper-pagination swiper-pagination_lighten estate-type-pag"></div>
  </Swiper>
</template>

<script setup lang="ts">
  import Card from './components/Card.vue';
  import { data, newYearData } from './data';

  const swiperOpts = {
    spaceBetween: 16,
    modules: [ SwiperPagination ],
    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
    } as const,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
        pagination: false,
      },
    } as const,
  };

  const current = new Date();
  const nextDate = new Date('2024-01-03T23:30:00');

  const items = computed(() => {
    if(nextDate.getTime() <= current.getTime()) {
      return newYearData;
    } else {
      return data;
    }
  });
</script>

<style scoped lang="scss">
  .estate-type-pag {
    @apply tw-flex tw-justify-end tw-px-5 tw-pb-4;
  }
</style>
