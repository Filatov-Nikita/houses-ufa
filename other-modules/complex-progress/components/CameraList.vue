<template>
  <BaseWait :waiting="store.loadingCamera">
    <template #loader>
      loading...
    </template>
    <div v-if="data.length === 0">
      <p>Пока ни одна камера не подключена.</p>
    </div>
    <Swiper
      v-else
      class="camera-slider"
      v-bind="swiperOpts"
    >
      <SwiperSlide
        v-for="item in data"
        :key="item.id"
        class="camera-slider__slide"
        @click="showModal(item)"
      >
        <img
          class="camera-slider__img"
          v-if="item.preview"
          :src="item.preview.url"
          loading="lazy"
        />
        <button class="camera-slider__play">
          <BaseIcon name="play" />
        </button>
        <p class="camera-slider__caption">{{ item.title }}</p>
      </SwiperSlide>
      <SlidersNavBtns />
      <BaseModal v-model="showedModal" v-slot="{ hide }">
        <CameraModalCard v-if="currentCamera" :camera="currentCamera" @close="hide" />
      </BaseModal>
    </Swiper>
  </BaseWait>
</template>

<script setup lang="ts">
  import { useComplexProgress, type OneCamera } from '../store';
  import CameraModalCard from './CameraModalCard.vue';

  const store = useComplexProgress();
  const data = computed(() => store.cameraData?.data ?? []);
  const showedModal = ref(false);
  const currentCamera = ref<OneCamera | null>(null);

  function showModal(camera: OneCamera) {
    showedModal.value = true;
    currentCamera.value = camera;
  }

  const swiperOpts = {
    spaceBetween: 20,
    modules: [ SwiperNavigation ],
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    } as const,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    } as const,
  };

  await useLazyAsyncData(() => {
    return store.showCamera();
  });
</script>


<style scoped lang="scss">
  .camera-slider {
    height: 380px;
    width: 100%;

    &__slide {
      height: 100%;
      cursor: pointer;
      overflow: hidden;
      border-radius: 16px;

      &::before {
        content: '';
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%);
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__play {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      border-radius: 8px;
      padding: 16px;
      @apply tw-text-white tw-bg-primary;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    &__caption {
      position: absolute;
      bottom: 24px;
      left: 24px;
      z-index: 20;
      @apply tw-text-white tw-text-2xl;
    }
  }
</style>
