<template>
  <div v-if="current && current.images.length === 0">
    Нет ни одной картинки
  </div>
  <Swiper
    v-else-if="current"
    class="town-materials-content"
    v-bind="swiperOpts"
    :key="current.id"
  >
    <SwiperSlide
      class="town-materials-content__slide"
      v-for="img in current.images"
    >
      <img
        class="town-materials-content__img"
        :width="img.width ?? 'auto'"
        :height="img.height ?? 'auto'"
        :src="img.url"
        loading="lazy"
      />
    </SwiperSlide>
    <Card
    class="town-materials-content__card"
    :title="current.title"
    :text="current.description"
    :comment="current.comment"
    />
    <SlidersNavBtns />
    <div class="swiper-pagination !tw-left-auto !-tw-right-4"></div>
  </Swiper>
</template>

<script setup lang="ts">
  import { useTownMaterials } from '../store';
  import Card from './Card.vue';

  const store = useTownMaterials();

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
    const item = items.value.find(i => i.label === store.filterValue);
    return item;
  });
</script>

<style scoped lang="scss">
  .town-materials-content {
    border-radius: 16px;

    &__slide {
      min-height: 560px;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__card {
      position: absolute;
      bottom: 24px;
      left: 24px;
      width: calc(100% / 12 * 10);
      z-index: 100;
    }
  }
</style>
