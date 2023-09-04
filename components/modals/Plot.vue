<template>
  <!--start-->
  <ModalsOther
    title="Участок №28"
    :isFullMob="false"
    :isFull="true"
    v-model="open"
    :closeBtnMob="false"
    titlePos="tw-text-left"
  >
    <div class="lg:tw-flex lg:tw-justify-center">
      <div
        class="tw-relative tw-overflow-hidden lg:tw-h-[531px] xl:tw-h-[745px] lg:tw-w-[537px] xl:tw-w-[745px]"
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
              class="tw-h-full"
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
          <BaseTabsTabContentItem name="layout" key="layout">
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
              class="tw-h-[31px] lg:tw-h-full"
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
      <div class="tw-mt-6 lg:tw-hidden">
        <BaseButton theme="gray" class="tw-w-full"> Закрыть </BaseButton>
      </div>
    </div>
  </ModalsOther>
  <!--end-->
</template>
<script lang="ts" setup>
import type { Swiper } from 'swiper'
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', val: boolean): void
}>()
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
const open = ref(false)
watch(
  () => props.modelValue,
  (v) => {
    open.value = v
  }
)
watch(open, (v) => {
  if (!v) emit('update:modelValue', false)
})
</script>
<style lang="scss" scoped></style>
