<template>
  <div class="tw-whitespace-nowrap">
    <div class="tw-flex tw-flex-col tw-gap-6">
      <Swiper
        :modules="[SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :pagination="{
          type: 'bullets',
          el: '.swiper-paginate',
          bulletActiveClass: 'line-active',
          bulletClass: 'line',
        }"
        :spaceBetween="30"
        class="tw-w-full"
      >
        <SwiperSlide v-for="image in description.images">
          <div
            class="tw-rounded-2xl tw-overflow-hidden tw-relative tw-w-full tw-h-[147px] lg:tw-h-[264px] xl:tw-h-[281px] tw-bg-secondary tw-justify-self-center"
          >
            <img
              :src="image.url"
              alt=""
              class="tw-object-cover tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-w-full tw-h-full"
            />
          </div>
        </SwiperSlide>
        <div class="swiper-paginate tw-mt-3"></div>
      </Swiper>
      <div class="tw-grid tw-gap-2">
        <h5
          class="tw-text-text02 tw-text-body_s2"
        >
          {{ description.title }}
        </h5>
        <div v-if="description.townName" class="tw-text-body_m tw-mb-2">
          {{ description.townName }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-nocheck
import { decriptionHeadApartment } from './models'
const isSelected = ref(false)
const compareHeadProps = defineProps<{
  description: decriptionHeadApartment
}>()
</script>
<style lang="scss" scoped>
.heart {
  &.active > path {
    @apply tw-fill-primary tw-stroke-none;
  }
}
</style>
