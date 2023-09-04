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
      class="tw-flex tw-flex-col lg:tw-grid tw-gap-6 xl:tw-gap-5 lg:tw-grid-cols-[1fr_minmax(0,_371px)] xl:tw-grid-cols-[1fr_minmax(371px,_515px)]"
    >
      <div
        class="tw-relative tw-overflow-hidden lg:tw-h-[531px] xl:tw-h-[745px]"
      >
        <BaseTabsGroup
          v-model="tab"
          class="!tw-bg-base00 lg:!tw-bg-white tw-w-full lg:tw-w-auto !tw-grid !tw-grid-cols-2 tw-mb-2 lg:!tw-inline-flex lg:tw-absolute tw-top-4 lg:tw-left-1/2 lg:-tw-translate-x-1/2 lg:tw-z-10"
        >
          <BaseTabsGroupItem
            v-for="item in tabs"
            :name="item.name"
            theme="white"
          >
            {{ item.title }}
          </BaseTabsGroupItem>
        </BaseTabsGroup>
        <BaseTabsTabContent v-model="tab" class="tw-h-full">
          <BaseTabsTabContentItem name="render" key="render" class="tw-h-full">
            <Swiper
              :modules="[SwiperPagination, SwiperNavigation]"
              :pagination="{
                type: 'bullets',
                el: '.swiper-pagination',
                dynamicBullets: true,
              }"
              class="tw-h-[311px] lg:tw-h-full"
            >
              <SwiperSlide v-for="n in 5" @click="openPopup = true">
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
          </BaseTabsTabContentItem>
          <BaseTabsTabContentItem name="layout" key="layout" class="tw-h-full">
            <div
              class="tw-hidden lg:tw-inline-flex tw-gap-5 tw-absolute tw-bottom-4 xl:tw-bottom-5 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-z-10"
            >
              <div v-for="(n, index) in 3" class="tw-grid tw-gap-2">
                <button
                  class="tw-bg-white tw-border tw-rounded-lg tw-overflow-hidden tw-w-[72px] tw-h-14 xl:tw-h-16 xl:tw-w-20"
                  :class="[
                    activeIndex === index
                      ? 'tw-border-primary'
                      : ' tw-border-white',
                  ]"
                  @click="slideTo(index)"
                >
                  <img
                    src="/assets/images/img/Планировка квартиры.png"
                    alt=""
                  />
                </button>
                <span class="tw-text-center tw-text-body_s">
                  Этаж {{ index + 1 }}</span
                >
              </div>
            </div>
            <Swiper
              :modules="[SwiperPagination, SwiperNavigation]"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="tw-h-[311px] lg:tw-h-full"
            >
              <SwiperSlide v-for="n in 5">
                <div
                  class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center tw-h-[311px] lg:tw-h-full"
                >
                  <img
                    format="avif,webp"
                    src="/assets/images/img/Планировка квартиры.png"
                    class="tw-object-contain tw-absolute tw-h-full tw-w-full"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </BaseTabsTabContentItem>
        </BaseTabsTabContent>
      </div>

      <div class="lg:tw-px-6 xl:tw-px-10 lg:tw-py-5.5 tw-grid tw-gap-8">
        <div class="tw-flex tw-gap-2">
          <div
            class="tw-text-body_m tw-bg-base00 tw-rounded-lg tw-py-2 tw-px-3 tw-w-fit"
          >
            Свободен
          </div>
          <div
            class="tw-text-body_m tw-bg-base00 tw-rounded-lg tw-py-2 tw-px-3 tw-w-fit tw-flex tw-gap-2.5"
            v-if="isBuildingHouse"
          >
            <BaseIcon name="hammer" class="tw-w-6 tw-h-6 tw-text-primary" />
            <span> Дом строится </span>
          </div>
          <div
            class="tw-text-body_m tw-bg-base00 tw-rounded-lg tw-py-2 tw-px-3 tw-w-fit tw-flex tw-gap-2.5"
            v-else
          >
            <BaseIcon name="house" class="tw-w-6 tw-h-6 tw-text-primary" />
            <span> Дом построен </span>
          </div>
        </div>
        <div>
          <h2 class="tw-text-h5 lg:tw-text-h4 tw-mb-2">Участок №28</h2>
          <p class="tw-text-text01 tw-text-body_m">
            ЖК «Михайловка Green Place», с. Михайловка
          </p>
        </div>
        <div class="tw-flex tw-justify-between tw-items-center">
          <div
            class="tw-px-2 tw-py-1 tw-text-body_s -tw-tracking-875 tw-w-fit tw-items-center tw-rounded-lg tw-bg-base00 tw-flex tw-gap-2.5"
          >
            <BaseIcon
              name="paint_brush_board"
              class="tw-text-primary tw-w-4 tw-h-4"
            />
            <span> Предчистовая отделка </span>
          </div>
          <div class="tw-text-text02">235 695 ₽ / м²</div>
        </div>
        <div class="tw-grid tw-gap-4">
          <div
            v-for="(item, index) in floorConf"
            :key="index"
            class="tw-grid tw-grid-cols-2"
          >
            <span> {{ item }} </span>
            <span class="tw-place-self-end tw-text-text02"> 3 </span>
          </div>
        </div>
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
  <ModalsOther
    title="Участок №28"
    :isFullMob="false"
    :isFull="true"
    v-model="openPopup"
    :closeBtnMob="false"
    titlePos="tw-text-left"
  >
    <div class="tw-relative tw-overflow-hidden lg:tw-h-full">
      <BaseTabsGroup
        v-model="tab"
        class="!tw-bg-base00 lg:!tw-bg-white tw-w-full lg:tw-w-auto !tw-grid !tw-grid-cols-2 tw-mb-2 lg:!tw-inline-flex lg:tw-absolute tw-top-4 lg:tw-left-1/2 lg:-tw-translate-x-1/2 lg:tw-z-10"
      >
        <BaseTabsGroupItem v-for="item in tabs" :name="item.name" theme="white">
          {{ item.title }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
      <BaseTabsTabContent v-model="tab" class="tw-h-full">
        <BaseTabsTabContentItem name="render" key="render" class="tw-h-full">
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
        </BaseTabsTabContentItem>
        <BaseTabsTabContentItem
          name="layout"
          key="layout"
          class="tw-h-full tw-grid tw-justify-center"
        >
          <div class="lg:tw-w-[537px] tw-overflow-hidden tw-relative">
            <div
              class="tw-inline-flex tw-gap-5 tw-absolute tw-bottom-4 xl:tw-bottom-5 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-z-10"
            >
              <div v-for="(n, index) in 3" class="tw-grid tw-gap-2">
                <button
                  class="tw-bg-white tw-border tw-rounded-lg tw-overflow-hidden tw-w-12 tw-h-10 lg:tw-w-[72px] lg:tw-h-14 xl:tw-h-16 xl:tw-w-20"
                  :class="[
                    activeIndex === index
                      ? 'tw-border-primary'
                      : ' tw-border-white',
                  ]"
                  @click="slideTo(index)"
                >
                  <img
                    src="/assets/images/img/Планировка квартиры.png"
                    alt=""
                  />
                </button>
                <span class="tw-text-center tw-text-xs lg:tw-text-body_s">
                  Этаж {{ index + 1 }}</span
                >
              </div>
            </div>
            <Swiper
              :modules="[SwiperPagination, SwiperNavigation]"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="tw-h-[311px] lg:tw-h-full"
            >
              <SwiperSlide v-for="n in 5">
                <div
                  class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center tw-h-[311px] lg:tw-h-full"
                >
                  <img
                    format="avif,webp"
                    src="/assets/images/img/Планировка квартиры.png"
                    class="tw-object-contain tw-absolute tw-h-full tw-w-full"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </BaseTabsTabContentItem>
      </BaseTabsTabContent>
      <div class="lg:tw-hidden tw-mt-6">
        <BaseButton theme="gray" @click="openPopup = false" class="tw-w-full">
          Закрыть
        </BaseButton>
      </div>
    </div>
  </ModalsOther>
</template>

<script setup lang="ts">
import type { Swiper } from 'swiper'
interface Props {
  isBuildingHouse?: false
}
const props = withDefaults(defineProps<Props>(), {
  isBuildingHouse: false,
})
const tab = ref('render')
const tabs = [
  {
    name: 'render',
    title: 'Рендер',
  },
  {
    name: 'layout',
    title: 'Планировка',
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
const floorConf = [
  'Проект дома',
  'Тип',
  'Материал',
  'Площадь дома',
  'Площадь участка',
  'Комнатность',
  'Этажность',
  'Санузел',
]

const openPopup = ref(false)
</script>
<style scoped>
.btn {
  @apply tw-bg-secondary tw-grid tw-place-content-center tw-w-12 tw-h-12 tw-rounded-lg;
}
.back {
  @apply tw-flex tw-gap-4 tw-items-center tw-text-text00;
}
</style>
