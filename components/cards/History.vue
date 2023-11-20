<template>
  <div
    class="card tw-flex tw-flex-col tw-gap-10 lg:tw-gap-16 tw-overflow-hidden"
  >
    <div>
      <Swiper
        :modules="[SwiperPagination, SwiperNavigation, SwiperEffectFade]"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :slides-per-view="1"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :pagination="{
          type: 'bullets',
          el: '.swiper-pagination',
          bulletActiveClass: 'dot-active',
          bulletClass: 'dot',
        }"
      >
        <SwiperSlide v-for="(item, idx) in list" :key="idx">
          <div class="tw-grid tw-gap-10 lg:tw-grid-cols-12 lg:tw-gap-5">
            <div class="tw-grid tw-gap-4 tw-content-between lg:tw-col-span-7">
              <h4
                class="tw-text-h5 lg:tw-text-h4 tw-font-semibold tw-text-primary"
              >
                {{ item.year }} год
              </h4>
              <div class="tw-grid tw-gap-6">
                <h3 class="tw-text-h5" v-html="item.title"></h3>
                <p class="tw-text-text02">
                  {{ item.description }}
                </p>
              </div>
            </div>
            <div
              class="tw-rounded-2xl tw-overflow-hidden tw-h-[380px] lg:tw-h-[308px] lg:tw-w-[308px] tw-relative lg:tw-col-span-5 lg:tw-justify-self-end"
            >
              <img
                :src="item.img"
                alt=""
                class="tw-absolute tw-h-full tw-w-full tw-object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="tw-flex tw-justify-between tw-overflow-auto">
      <div class="tw-relative">
        <div
          class="tw-absolute tw-h-[4px] tw-w-full tw-top-1/2 tw-transform -tw-translate-y-1/2"
        >
          <div
            class="tw-bg-primary tw-w-0 tw-h-[2px] tw-transition-width tw-duration-150 tw-ease-in"
            ref="line"
          ></div>
          <div class="tw-bg-secondary tw-w-full tw-h-[1px]"></div>
        </div>
        <div class="tw-relative tw-flex tw-gap-10">
          <button
            v-for="(item, index) in list"
            :ref="setBtnRef"
            @click="slideTo(index)"
            class="tw-px-4 tw-py-3 tw-rounded-lg tw-transition-all tw-duration-300 tw-ease-in"
            :class="[
              activeIndex === index || activeIndex > index
                ? 'tw-bg-primary tw-text-white'
                : ' tw-bg-secondary',
            ]"
          >
            {{ item.year }}
          </button>
        </div>
      </div>
      <div class="tw-hidden lg:tw-flex tw-gap-4">
        <button
          @click="swiper?.slidePrev()"
          class="tw-rounded-lg tw-h-12 tw-w-12 tw-bg-secondary tw-grid tw-place-content-center"
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
          class="tw-rounded-lg tw-h-12 tw-w-12 tw-bg-secondary tw-grid tw-place-content-center"
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
  </div>
</template>
<script lang="ts" setup>
import type { Swiper } from 'swiper'
const list = [
  {
    year: '2001',
    title: 'Основание компании',
    description: '',
    img: '/images/hist-test.jpg',
  },
  {
    year: '2012',
    title: 'Начало строительства первого коттеджного посёлка «Сильва Парк»',
    description: '',
    img: '/images/hist-test.jpg',
  },
  {
    year: '2014',
    title: 'Начало строительства первого жилого комплекса «Прованс»',
    description: '',
    img: '/images/hist-test.jpg',
  },
  {
    year: '2015',
    title: 'Начало строительства первого проекта комплексного освоения территории «Михайловка Green Place»',
    description: '',
    img: '/images/hist-test.jpg',
  },
  {
    year: '2016',
    title: 'Начало работы собственной управляющей компании',
    description: '',
    img: '/images/hist-test.jpg',
  },
  {
    year: '2022',
    title: 'Количество жильцов в проектах построенных ГК «Жилой Квартал» достигло 50 000 человек',
    description: '',
    img: '/images/hist-test.jpg',
  },
  {
    year: '2023',
    title: 'Начало строительства уникального для Российского рынка недвижимости концептуального коттеджного посёлка "Созвездие Цефей".<br>Выход в город – начало строительства ЖК «Сапфир».',
    description: '',
    img: '/images/hist-test.jpg',
  },
]
const activeIndex = ref(0)
const swiper = ref<Swiper>()
const onSwiper = (s: Swiper) => {
  swiper.value = s

  activeIndex.value = s.activeIndex
}
const onSlideChange = (s: Swiper) => {
  activeIndex.value = s.activeIndex
}
const slideTo = (index: number) => {
  swiper.value?.slideTo(index)
}
const line = ref<HTMLElement>()
let btns = [] as HTMLElement[]
const setBtnRef = (el: HTMLElement) => {
  if (el) btns.push(el)
}
onBeforeUpdate(() => (btns = []))
watch(activeIndex, (val) => {
  const firstBtn = btns[0]
  const targetBtn = btns[val]
  if (firstBtn && targetBtn) {
    const fLeft = firstBtn.getBoundingClientRect().left
    const tLeft = targetBtn.getBoundingClientRect().left
    if (line.value) line.value.style.width = tLeft - fLeft + 'px'
  }
})
</script>
<style lang="scss" scoped>
.card {
  @apply tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-6 xl:tw-p-10;
}
</style>
