<template>
  <BaseWait :waiting="store.loadingAlbum">
    <template #loader>
      loading...
    </template>
    <div v-if="store.filtredAlbums.length === 0">
      <p>Пока не загружено ни одно фото.</p>
    </div>
    <Swiper
      v-else
      class="album-slider"
      v-bind="swiperOpts"
    >
      <SwiperSlide
        class="album-slider__slide"
        v-for="item in store.filtredAlbums"
        :key="item.id"
        @click="showModal(item)"
      >
        <img
          class="album-slider__img"
          :src="item.preview?.url"
          loading="lazy"
        />
        <div class="album-slider__count">
          {{ item.images_count }} фото
        </div>
        <div class="album-slider__info">
          <p class="album-slider__month">{{ store.monthList[item.month] }}</p>
          <p class="album-slider__year">{{ item.year }} г.</p>
        </div>
      </SwiperSlide>
      <SlidersNavBtns />
      <BaseModal v-model="showedModal" v-slot="{ hide }">
        <AlbumModalCard
          v-if="currentAlbum"
          :album="currentAlbum"
          :prevAlbum="prevAlbum"
          @close="hide"
          @showPrev="showModal"
        />
      </BaseModal>
    </Swiper>
  </BaseWait>
</template>

<script setup lang="ts">
  import { useComplexProgress, type OneAlbum } from '../store';
  import AlbumModalCard from './AlbumModalCard.vue';

  const store = useComplexProgress();
  const showedModal = ref(false);
  const currentAlbum = ref<OneAlbum | null>(null);
  const prevAlbum = computed(() => {
    if(!store.albumData || !currentAlbum.value) return null;
    const current = currentAlbum.value;
    const index = store.albumData.data.findIndex(album => album.id === current.id);
    if(index <= 0) return null;
    return store.albumData.data[index - 1];
  });

  function showModal(album: OneAlbum) {
    showedModal.value = true;
    currentAlbum.value = album;
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
    return store.showAlbum();
  });
</script>


<style scoped lang="scss">
  .album-slider {
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

    &__info {
      z-index: 10;
      position: absolute;
      left: 24px;
      bottom: 24px;
    }

    &__count {
      z-index: 10;
      position: absolute;
      left: 24px;
      top: 24px;
      padding: 12px 8px;
      border-radius: 8px;
      background: linear-gradient(119deg, rgba(134, 134, 134, 0.50) 14.6%, rgba(134, 134, 134, 0.50) 85.71%);
      backdrop-filter: blur(4px);
      @apply tw-text-white tw-text-xs;
    }

    &__month {
      margin-bottom: 4px;
      @apply tw-text-white tw-text-2xl tw-font-freesetdemi;
    }

    &__year {
      @apply tw-text-white tw-text-base;
    }
  }
</style>
