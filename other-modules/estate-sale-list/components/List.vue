<template>
  <div v-if="isEmpty">Не найдено ни одного объекта</div>
  <Swiper v-else-if="filter.filterType === 'flats'" v-bind="swiperProps">
    <SwiperSlide v-for="flat in filter.flats" :key="flat.id">
      <FlatItem :flat="flat" />
    </SwiperSlide>
    <NavBtns />
  </Swiper>
  <Swiper v-else-if="filter.filterType === 'towns'" v-bind="swiperProps">
    <SwiperSlide v-for="town in filter.towns" :key="town.id">
      <TownItem :town="town" />
    </SwiperSlide>
    <NavBtns />
  </Swiper>
</template>

<script setup lang="ts">
  import { useEstateSaleList } from '../store';
  import FlatItem from './FlatItem.vue';
  import TownItem from './TownItem.vue';
  import NavBtns from '@/components/sliders/NavBtns.vue';

  const filter = useEstateSaleList();
  const isEmpty = computed(() => filter.currentFilter.data.value?.data?.length === 0);

  const swiperProps = {
    modules: [SwiperPagination, SwiperNavigation],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
      dynamicBullets: true,
    } as const,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    } as const,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    } as const,
  };
</script>

<style scoped lang="scss">

</style>
