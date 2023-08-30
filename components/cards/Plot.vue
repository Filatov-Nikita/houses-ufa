<template>
  <div
    class="tw-px-4 tw-py-6 lg:tw-p-6 xl:tw-p-10 tw-rounded-2xl tw-bg-white tw-flex tw-flex-col tw-gap-4 lg:tw-gap-6"
  >
    <div class="tw-flex tw-items-center tw-justify-between">
      <a class="back">
        <img
          src="/assets/images/icons/arrow_line_left.svg"
          width="24"
          height="24"
        />
        <span> Вернуться назад </span>
      </a>
      <div>
        <div class="tw-hidden lg:tw-block">
          <div class="tw-flex tw-gap-3">
            <BaseButton class="!tw-p-3" theme="gray">
              <BaseIcon class="tw-w-6 tw-h-6" name="share" />
            </BaseButton>
            <BaseButton class="!tw-p-3" theme="gray">
              <BaseIcon class="tw-w-6 tw-h-6" name="download" />
            </BaseButton>
            <BaseButton class="!tw-p-3" theme="gray">
              <BaseIcon class="tw-w-6 tw-h-6" name="heart" />
            </BaseButton>
          </div>
        </div>
        <div class="lg:tw-hidden">
          <BaseButton class="!tw-p-2" theme="gray">
            <BaseIcon class="tw-w-6 tw-h-6" name="dots_three_vertical" />
          </BaseButton>
        </div>
      </div>
    </div>
    <div
      class="tw-flex tw-flex-col lg:tw-grid tw-gap-6 xl:tw-gap-5 lg:tw-grid-cols-[1fr_minmax(0,_371px)] xl:tw-grid-cols-[1fr_minmax(371px,_515px)] lg:tw-grid-rows-[531px] xl:tw-grid-rows-[745px]"
    >
      <div class="tw-relative tw-overflow-hidden">
        <Swiper
          :modules="[SwiperPagination, SwiperNavigation]"
          :pagination="{
            type: 'bullets',
            el: '.swiper-pagination',
            dynamicBullets: true,
          }"
          class="tw-h-[311px] lg:tw-h-full"
        >
          <SwiperSlide v-for="n in 5">
            <div
              class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center tw-h-[311px] lg:tw-h-full"
            >
              <img
                format="avif,webp"
                src="/assets/images/img/country_real_estate.png"
                class="tw-object-cover tw-absolute tw-h-full tw-w-full"
              />
            </div>
          </SwiperSlide>

          <div class="swiper-pagination !tw-left-auto !-tw-right-4"></div>
        </Swiper>
      </div>

      <div
        class="lg:tw-px-6 xl:tw-px-10 lg:tw-py-5.5 xl:tw-self-center tw-grid tw-gap-6 xl:tw-gap-8"
      >
        <div>
          <div class="tw-flex tw-gap-2 tw-mb-6">
            <div
              class="tw-text-body_m tw-bg-base00 tw-rounded-lg tw-py-2 tw-px-3 tw-w-fit"
            >
              Свободен
            </div>
            <div
              class="tw-text-body_m tw-bg-base00 tw-rounded-lg tw-py-2 tw-px-3 tw-w-fit tw-flex tw-gap-2.5"
            >
              <BaseIcon name="house-not" class="tw-w-6 tw-h-6 tw-text-icon" />
              <span> Без дома </span>
            </div>
          </div>
          <h2 class="tw-text-h5 lg:tw-text-h4 tw-mb-2">Участок №28</h2>
          <p class="tw-text-text01 tw-text-body_m">
            ЖК «Михайловка Green Place», с. Михайловка
          </p>
        </div>

        <h5 class="tw-flex tw-justify-between tw-text-body_m">
          <span> Площадь участка </span>
          <span class="tw-text-text02"> 8 сот. </span>
        </h5>
        <div>
          <h5 class="tw-grid tw-gap-2 tw-mb-2">
            <span class="tw-text-body_m tw-text-text02">
              Цена за дом с участком
            </span>
            <span class="tw-text-h4"> 12 165 265 ₽ </span>
          </h5>
          <div class="tw-text-body_m tw-text-text02">
            В ипотеку от
            <span class="tw-text-primary"> 15 659 ₽ / мес </span>
          </div>
        </div>
        <div class="tw-grid tw-gap-4 lg:tw-gap-6">
          <BaseButton class="tw-w-full">Забронировать</BaseButton>
          <BaseButton class="tw-w-full" theme="gray"
            >Получить консультацию</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Swiper } from 'swiper'

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
</script>
<style scoped>
.btn {
  @apply tw-bg-secondary tw-grid tw-place-content-center tw-w-12 tw-h-12 tw-rounded-lg;
}
.back {
  @apply tw-flex tw-gap-4 tw-items-center tw-text-text00;
}
</style>
