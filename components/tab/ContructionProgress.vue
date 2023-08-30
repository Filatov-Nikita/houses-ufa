<template>
  <div>
    <BaseTabsGroup v-model="tab" class="tw-mb-6 lg:tw-mb-8">
      <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
        {{ item.title }}
      </BaseTabsGroupItem>
    </BaseTabsGroup>
    <BaseTabsTabContent v-model="tab">
      <BaseTabsTabContentItem name="photos" key="photos" class="tw-relative">
        <Swiper
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="1.3"
          :space-between="20"
          :centeredSlides="true"
          @swiper="onSwiper"
          :breakpoints="{
            '1024': {
              slidesPerView: 3,
              centeredSlides: false,
            },
            '1440': {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }"
          :pagination="{
            type: 'bullets',
            el: '.swiper-pagination',
            bulletActiveClass: 'dot-active',
            bulletClass: 'dot',
          }"
          :navigation="{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }"
        >
          <SwiperSlide v-for="n in 10">
            <div class="card">
              <img
                src="/assets/images/img/country_real_estate.png"
                alt=""
                class=""
              />
              <div class="card__wrapper">
                <div class="card__count">12 фото</div>
                <div class="tw-grid tw-gap-1 tw-text-white">
                  <div class="tw-text-h5">Май</div>
                  <div>2023 г.</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button
          @click="swiper?.slidePrev()"
          class="tw-absolute -tw-left-4 tw-top-1/2 tw-z-10 tw-transform -tw-translate-y-1/2 tw-rounded-lg tw-h-12 tw-w-12 tw-bg-text01/40 tw-backdrop-blur-sm tw-grid tw-place-content-center"
        >
          <BaseIcon name="back" class="tw-w-6 tw-h-6 tw-text-white" />
        </button>
        <button
          @click="swiper?.slideNext()"
          class="tw-absolute -tw-right-4 tw-top-1/2 tw-z-10 tw-transform -tw-translate-y-1/2 tw-rounded-lg tw-h-12 tw-w-12 tw-bg-text01/40 tw-backdrop-blur-sm tw-grid tw-place-content-center"
        >
          <BaseIcon name="forward" class="tw-w-6 tw-h-6 tw-text-white" />
        </button>
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="cameras" key="cameras" class="tw-relative">
        <Swiper
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="1.3"
          :space-between="20"
          :centeredSlides="true"
          @swiper="onSwiperCamera"
          :breakpoints="{
            '1024': {
              slidesPerView: 3,
              centeredSlides: false,
            },
            '1440': {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }"
          :pagination="{
            type: 'bullets',
            el: '.swiper-pagination',
            bulletActiveClass: 'dot-active',
            bulletClass: 'dot',
          }"
          :navigation="{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }"
        >
          <SwiperSlide v-for="n in 10">
            <div class="card card-camera">
              <img
                src="/assets/images/img/country_real_estate.png"
                alt=""
                class=""
              />
              <BaseButton
                padding-classes="tw-p-4"
                class="tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-y-1/2 -tw-translate-x-1/2 tw-w-fit"
              >
                <BaseIcon name="play" class="tw-w-6 tw-h-6" />
              </BaseButton>
              <div class="card__wrapper">
                <div></div>
                <div class="tw-grid tw-gap-1 tw-text-white">
                  <div class="tw-text-h5">Камера 1</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button
          @click="swiperCamera?.slidePrev()"
          class="tw-absolute -tw-left-4 tw-top-1/2 tw-z-10 tw-transform -tw-translate-y-1/2 tw-rounded-lg tw-h-12 tw-w-12 tw-bg-text01/40 tw-backdrop-blur-sm tw-grid tw-place-content-center"
        >
          <BaseIcon name="back" class="tw-w-6 tw-h-6 tw-text-white" />
        </button>
        <button
          @click="swiperCamera?.slideNext()"
          class="tw-absolute -tw-right-4 tw-top-1/2 tw-z-10 tw-transform -tw-translate-y-1/2 tw-rounded-lg tw-h-12 tw-w-12 tw-bg-text01/40 tw-backdrop-blur-sm tw-grid tw-place-content-center"
        >
          <BaseIcon name="forward" class="tw-w-6 tw-h-6 tw-text-white" />
        </button>
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>
<script lang="ts" setup>
import type { Swiper } from 'swiper'
const activeIndex = ref(0)
const swiper = ref<Swiper>()
const onSwiper = (s: Swiper) => {
  swiper.value = s
}
const swiperCamera = ref<Swiper>()
const onSwiperCamera = (s: Swiper) => {
  swiperCamera.value = s
}
const tab = ref('')
const tabs = [
  {
    name: 'photos',
    title: 'Фото',
  },
  {
    name: 'cameras',
    title: 'Онлайн-камеры',
  },
]
onMounted(() => (tab.value = tabs[0].name))
</script>
<style lang="scss" scoped>
.card {
  @apply tw-overflow-hidden tw-rounded-2xl tw-relative tw-p-6;
  height: 380px;
  img {
    @apply tw-absolute tw-w-full tw-h-full tw-object-cover tw-top-0 tw-left-0;
  }
  &__wrapper {
    @apply tw-relative tw-h-full tw-grid tw-content-between;
  }
  &__count {
    @apply tw-rounded-lg tw-px-2 tw-py-3 tw-text-xs tw-text-white tw-backdrop-blur-sm tw-w-fit;
    background: linear-gradient(
      151deg,
      rgba(134, 134, 134, 0.5) 0%,
      rgba(134, 134, 134, 0.5) 100%
    );
  }
}
.card-camera {
}
</style>
