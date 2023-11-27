<template>
  <BaseModalCard class="album-modal">
    <div class="album-modal__header">
      <p class="album-modal__title">Ход строительства</p>
      <BtnsActionsBase icon="close" @click="close" />
    </div>
    <Swiper
      class="images-slider"
      v-bind="swiperOpts"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="item in images"
        :key="item.id"
        class="images-slider__slide"
      >
        <img
          class="images-slider__img"
          :src="item.url"
          loading="lazy"
        />
      </SwiperSlide>
      <div class="images-slider__controls">
        <SlidersNavBtns />
      </div>
      <div class="album-info">
        <p class="album-info__title">{{ dateFrom }}</p>
        <BaseButton
          class="album-info__btn"
          v-if="prevAlbum"
          @click="showPrev"
        >
          Предыдущий отчет
        </BaseButton>
      </div>
    </Swiper>
  </BaseModalCard>
</template>

<script setup lang="ts">
  import { type OneAlbum, useComplexProgress } from '../store';
  import { useDataFetch } from '@/composables/useDataFetch';
  import type { Image } from '@/types/share';
  import type { Swiper } from 'swiper';

  const store = useComplexProgress();

  const props = defineProps<{
    album: OneAlbum,
    prevAlbum: OneAlbum | null,
  }>();

  const swiperRef = ref<Swiper | null>(null);

  function onSwiper(swiper: Swiper) {
    swiperRef.value = swiper;
  }

  const emit = defineEmits<{
    (event: 'close'): void,
    (event: 'showPrev', prev: OneAlbum): void,
  }>();

  const swiperOpts = {
    spaceBetween: 20,
    modules: [ SwiperNavigation ],
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    } as const,
  };

  const url = computed(() => `estate/build-feeds/${props.album.id}`);

  const { data } = await useDataFetch<ResponseImages>(url, { lazy: true });

  const images = computed(() => data.value?.data.images ?? []);

  const dateFrom = computed(() => `${store.monthList[props.album.month]} ${props.album.year}`);

  function close() {
    emit('close');
  }

  function showPrev() {
    if(props.prevAlbum) {
      emit('showPrev', props.prevAlbum);
      swiperRef.value && swiperRef.value.slideTo(0);
    }
  }

  interface ResponseImages {
    data: ImageData;
  }

  interface ImageData {
    id:     number;
    month:  number;
    year:   number;
    images: Image[];
  }
</script>

<style scoped lang="scss">
  .album-modal {
    width: 100%;
    max-width: 1280px;

    &__header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      @apply tw-text-text00;
    }
  }

  .album-info {
    position: absolute;
    bottom: 24px;
    left: 24px;
    border-radius: 16px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    padding: 24px;
    z-index: 50;
    @apply tw-bg-white;

    @include sm {
      padding: 24px 16px;
    }

    &__title {
      @apply tw-text-text00 tw-text-xl;
    }

    &__btn {
      margin-top: 24px;
    }
  }

  .images-slider {
    width: 100%;
    height: 500px;

    &__slide {
      height: 100%;
      overflow: hidden;
      border-radius: 16px;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__controls {
      position: absolute;
      z-index: 50;
      bottom: 24px;
      right: 0;
      width: 144px;
      height: 40px;
    }
  }
</style>
