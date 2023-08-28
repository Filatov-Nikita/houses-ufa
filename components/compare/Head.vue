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
        class="tw-w-full"
      >
        <SwiperSlide v-for="n in 3">
          <div
            class="tw-rounded-2xl tw-overflow-hidden tw-relative tw-w-full tw-h-[147px] lg:tw-h-[264px] xl:tw-h-[281px] tw-bg-secondary tw-justify-self-center"
          >
            <button
              class="tw-rounded-lg tw-w-8 tw-h-8 tw-bg-white tw-absolute tw-right-4 tw-top-4 tw-z-10 tw-grid tw-place-content-center tw-p-2.5"
              @click="isSelected = !isSelected"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="heart"
                :class="{ active: isSelected }"
              >
                <path
                  d="M22.5 9.18607C22.5016 9.90031 22.3616 10.6078 22.088 11.2675C21.8144 11.9273 21.4128 12.5263 20.9062 13.0298L12.5344 21.5254C12.4646 21.5963 12.3814 21.6526 12.2897 21.691C12.1979 21.7294 12.0994 21.7492 12 21.7492C11.9005 21.7492 11.8021 21.7294 11.7103 21.691C11.6186 21.6526 11.5354 21.5963 11.4656 21.5254L3.09374 13.0298C2.07307 12.0104 1.49917 10.6273 1.49829 9.1847C1.49741 7.74214 2.06963 6.35831 3.08905 5.33764C4.10848 4.31697 5.49161 3.74307 6.93418 3.74219C8.37674 3.74131 9.76057 4.31352 10.7812 5.33295L12 6.47201L13.2272 5.3292C13.9888 4.57131 14.958 4.05608 16.0122 3.84854C17.0665 3.641 18.1586 3.75047 19.1507 4.16311C20.1428 4.57576 20.9904 5.27309 21.5865 6.16706C22.1826 7.06104 22.5005 8.11158 22.5 9.18607Z"
                  stroke="#2D2D2D"
                  stroke-width="1"
                />
              </svg>
            </button>

            <img
              src="/assets/images/img/country_real_estate.png"
              alt=""
              class="tw-object-cover tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-w-full tw-h-full"
            />
          </div>
        </SwiperSlide>
        <div class="swiper-paginate tw-mt-3"></div>
      </Swiper>
      <div class="tw-grid tw-gap-2">
        <h5
          v-if="description?.typeHome === 'cottage'"
          class="tw-text-text02 tw-text-body_s2"
        >
          {{ description.title }}
        </h5>
        <div v-if="description?.price" class="tw-text-body_m tw-mb-2">
          {{ description?.price }} ₽
        </div>
        <p
          v-if="description?.typeHome === 'apartment'"
          class="tw-text-text01 tw-text-body_xs"
        >
          {{ description.title }} м²
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
