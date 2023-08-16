<template>
  <div>
    <div class="tw-flex tw-justify-between tw-mb-6">
      <p class="tw-max-w-[900px]">
        {{ list[activeIndex].description }}
      </p>
      <div class="tw-hidden lg:tw-flex tw-gap-4">
        <button
          @click="swiper?.slidePrev()"
          class="tw-rounded-lg tw-h-12 tw-w-12 tw-bg-white tw-grid tw-place-content-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5306 18.9698C15.6003 19.0395 15.6556 19.1222 15.6933 19.2132C15.731 19.3043 15.7504 19.4019 15.7504 19.5004C15.7504 19.599 15.731 19.6965 15.6933 19.7876C15.6556 19.8786 15.6003 19.9614 15.5306 20.031C15.4609 20.1007 15.3782 20.156 15.2872 20.1937C15.1961 20.2314 15.0985 20.2508 15 20.2508C14.9014 20.2508 14.8039 20.2314 14.7128 20.1937C14.6218 20.156 14.539 20.1007 14.4694 20.031L6.96935 12.531C6.89962 12.4614 6.8443 12.3787 6.80656 12.2876C6.76882 12.1966 6.74939 12.099 6.74939 12.0004C6.74939 11.9019 6.76882 11.8043 6.80656 11.7132C6.8443 11.6222 6.89962 11.5394 6.96935 11.4698L14.4694 3.96979C14.6101 3.82906 14.801 3.75 15 3.75C15.199 3.75 15.3899 3.82906 15.5306 3.96979C15.6713 4.11052 15.7504 4.30139 15.7504 4.50042C15.7504 4.69944 15.6713 4.89031 15.5306 5.03104L8.56029 12.0004L15.5306 18.9698Z"
              fill="#2D2D2D"
            />
          </svg>
        </button>
        <button
          @click="swiper?.slideNext()"
          class="tw-rounded-lg tw-h-12 tw-w-12 tw-bg-white tw-grid tw-place-content-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0306 12.531L9.53062 20.031C9.46093 20.1007 9.37821 20.156 9.28716 20.1937C9.19612 20.2314 9.09854 20.2508 8.99999 20.2508C8.90144 20.2508 8.80386 20.2314 8.71282 20.1937C8.62177 20.156 8.53905 20.1007 8.46936 20.031C8.39968 19.9614 8.34441 19.8786 8.30669 19.7876C8.26898 19.6965 8.24957 19.599 8.24957 19.5004C8.24957 19.4019 8.26898 19.3043 8.30669 19.2132C8.34441 19.1222 8.39968 19.0395 8.46936 18.9698L15.4397 12.0004L8.46936 5.03104C8.32863 4.89031 8.24957 4.69944 8.24957 4.50042C8.24957 4.30139 8.32863 4.11052 8.46936 3.96979C8.61009 3.82906 8.80097 3.75 8.99999 3.75C9.19901 3.75 9.38988 3.82906 9.53062 3.96979L17.0306 11.4698C17.1003 11.5394 17.1557 11.6222 17.1934 11.7132C17.2312 11.8043 17.2506 11.9019 17.2506 12.0004C17.2506 12.099 17.2312 12.1966 17.1934 12.2876C17.1557 12.3787 17.1003 12.4614 17.0306 12.531Z"
              fill="#2D2D2D"
            />
          </svg>
        </button>
      </div>
    </div>

    <Swiper
      :modules="[SwiperPagination, SwiperNavigation]"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :slides-per-view="1"
      :breakpoints="{
        '1024': {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      }"
      :pagination="{
        type: 'bullets',
        el: '.swiper-pagination',
        bulletActiveClass: 'dot-active',
        bulletClass: 'dot',
      }"
    >
      <!-- <SwiperBaseContols /> -->
      <SwiperSlide v-for="(item, idx) in list" :key="idx">
        <NuxtLink
          :to="item.to"
          class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-inline-block tw-h-[380px] lg:h-[320px] tw-w-full tw-bg-black-gradient tw-bg-[url('/img/hero-pattern.svg')]"
          :style="{
            background: `linear-gradient(45deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), url(${item.img})  50% / cover no-repeat`,
          }"
        >
          <div class="tw-p-6 tw-grid tw-relative tw-content-between tw-h-full">
            <div
              class="tw-backdrop-blur-sm tw-text-white tw-text-body_s -tw-tracking-875 tw-px-3 tw-h-[32px] tw-bg-text01/40 tw-w-fit tw-rounded-lg tw-grid tw-place-content-center tw-justify-self-end"
            >
              {{ item.status }}
            </div>
            <div class="tw-text-white">
              <h4 class="tw-text-h5">
                {{ item.name }}
              </h4>
              <p class="tw-text-base tw-leading-normal lg:tw-text-body_m">
                {{ item.subtitle }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide> </SwiperSlide>
    </Swiper>
  </div>
</template>
<script lang="ts" setup>
import type { Swiper } from 'swiper'
interface Props {
  list: {
    to: string
    name: string
    description: string
    subtitle: string
    status: string
    img: string
  }[]
}

const buildObjProps = defineProps<Props>()
const activeIndex = ref(0)
const swiper = ref<Swiper>()
const onSwiper = (s: Swiper) => {
  swiper.value = s
  // console.log(swiper.value.slideNext())
  activeIndex.value = s.activeIndex
}
const onSlideChange = (s: Swiper) => {
  activeIndex.value = s.activeIndex
}
</script>
<style lang="scss" scoped></style>
