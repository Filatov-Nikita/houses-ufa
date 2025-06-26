<template>
  <Swiper
    class="slider"
    v-if="data"
    :modules="[ Navigation, Pagination ]"
    :spaceBetween="16"
    :speed="700"
    loop
    autoHeight
    :navigation="{
      nextEl: '.swiper-nav--right',
      prevEl: '.swiper-nav--left',
    }"
    :pagination="{ type: 'bullets' }"
    @swiper="swiper = $event"
    @slideChange="onChangeSlide"
  >
    <SwiperSlide
      v-for="item in data.data"
      :key="item.id"
    >
      <div class="content">
        <div>
          <div class="title" v-if="item.title" v-html="item.title"></div>
          <div class="subtitle" v-if="item.subtitle" v-html="item.subtitle"></div>
        </div>
        <div class="btn-wrap">
          <BaseButton
            v-if="item.button_url && item.button_label"
            :to="item.button_url"
            target="_blank"
            theme="white"
          >
            {{ item.button_label }}
          </BaseButton>
        </div>
      </div>
      <picture v-if="item.desktop_image">
        <source
          v-if="item.mobile_image"
          :width="item.mobile_image.width ?? 0"
          :height="item.mobile_image.height ?? 0"
          :srcset="item.mobile_image.url"
          media="(max-width: 767.9px)"
        />
        <source
          v-if="item.tablet_image"
          :width="item.tablet_image.width ?? 0"
          :height="item.tablet_image.height ?? 0"
          :srcset="item.tablet_image.url"
          media="(max-width: 1023.9px)"
        />
        <source
          v-if="item.laptop_image"
          :width="item.laptop_image.width ?? 0"
          :height="item.laptop_image.height ?? 0"
          :srcset="item.laptop_image.url"
          media="(max-width: 1420.9px)"
        />
        <source :srcset="item.desktop_image.url" media="(min-width: 1421px)" />
        <img class="photo"
          :width="item.desktop_image.width ?? 0"
          :height="item.desktop_image.height ?? 0"
          :src="item.desktop_image.url"
          :alt="item.title ?? ''"
        />
      </picture>
    </SwiperSlide>
    <NavBtns />
  </Swiper>
</template>

<script setup lang="ts">
  import NavBtns from '@/components/sliders/NavBtns.vue';
  import { Navigation, Pagination } from 'swiper/modules';
  import { ref, computed } from 'vue';

  const api = useNuxtApp().$api;
  const res = await useAsyncData(api.marketing.slides);
  const data = useDataOrFail(res);
  const items = computed(() => data.value.data);

  const swiper = ref<any>(null);

  const activeTimer = timer();
  const defaultSeconds = 3;

  if(process.client && items.value.length > 0) {
    activeTimer.start(items.value[0]?.holding_timeout ?? defaultSeconds);
  }

  function onChangeSlide(swiper: any) {
    activeTimer.clear();
    const seconds = items.value[swiper.realIndex]?.holding_timeout ?? defaultSeconds;
    activeTimer.start(seconds);
  }

  function timer() {
    let timeout: any = null;
    return {
      start: (seconds: number) => {
        timeout = setTimeout(() => {
          swiper.value?.slideNext();
        }, seconds * 1000);
      },
      clear: () => clearTimeout(timeout),
    }
  }
</script>

<style scoped lang="scss">
  .slider {
    --swiper-pagination-color: #fff;
    --swiper-pagination-left: auto;
    --swiper-pagination-bottom: 40px;
    --swiper-pagination-top: auto;
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-pagination-bullet-inactive-opacity: 0.6;
    overflow: hidden;
  }

  .swiper :deep(.swiper-pagination) {
    padding-right: 40px;
    text-align: right;
    pointer-events: none;
  }

  .slider :deep(.swiper-nav) {
    @include sm {
      display: none;
    }
  }

  .photo {
    border-radius: 16px;
    width: 100%;
    height: auto;
  }

  .content {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px;
    @apply tw-text-white;

    @include sm {
      padding: 24px;
    }
  }

  .btn-wrap {
    margin-top: auto;
  }

  .title {
    @apply tw-text-h1;

    @include sm {
      @apply tw-text-2xl;
    }
  }

  .subtitle {
    margin-top: 8px;
    @apply tw-text-body_l;
  }
</style>
