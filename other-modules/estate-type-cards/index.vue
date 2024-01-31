<template>
  <Swiper v-bind="swiperOpts">
    <SwiperSlide
      v-for="item in items"
      :key="item.id"
    >
      <Card :item="item" />
    </SwiperSlide>
    <div class="swiper-pagination swiper-pagination_lighten estate-type-pag"></div>
  </Swiper>
</template>

<script setup lang="ts">
  import Card from './components/Card.vue';
  import type { BannerOne } from './types';

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

  const { data: response } = await useDataFetch<{ data: BannerOne[] }>('marketing/banners');

  const items = computed(() => {
    if(!response.value) return [];
    return response.value.data.sort((a, b) => b.priority - a.priority);
  });
</script>

<style scoped lang="scss">
  .estate-type-pag {
    @apply tw-flex tw-justify-end tw-px-5 tw-pb-4;
  }
</style>
