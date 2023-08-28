<template>
  <!-- Карточка бестселлеры -->
  <div class="card">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-4">
      <div class="">
        <div class="tw-mb-1">{{ title }}, {{ square }} м²</div>
        <div
          class="tw-flex tw-gap-2 tw-text-text02 tw-text-body_s2 -tw-tracking-875"
        >
          <div>Этаж {{ storey }}</div>
          <template v-if="letter">
            <div>·</div>
            <div>Литер {{ letter }}</div>
          </template>
        </div>
      </div>
      <div>
        <BaseButton padding-classes="tw-p-2" theme="gray">
          <BaseIcon name="dots_three_vertical" class="tw-w-6 tw-h-6" />
        </BaseButton>
      </div>
    </div>
    <Swiper
      v-if="src.length > 0"
      :modules="[SwiperPagination, SwiperNavigation]"
      :slides-per-view="1"
      :pagination="{
        type: 'bullets',
        el: '.swiper-paginate',
        bulletActiveClass: 'line-active',
        bulletClass: 'line',
      }"
      class="tw-mb-6"
    >
      <SwiperSlide v-for="img in src">
        <div
          class="tw-relative tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-max-w-[311px] tw-h-[311px] lg:tw-max-w-[264px] lg:tw-h-[264px] xl:tw-max-w-[277px] xl:tw-h-[277px] tw-mx-auto"
        >
          <img
            :src="img"
            alt=""
            class="tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-h-full tw-object-cover"
          />
        </div>
      </SwiperSlide>
      <div class="swiper-paginate tw-mt-3"></div>
    </Swiper>
    <div
      v-else
      class="tw-relative tw-bg-base00 tw-text-icon tw-rounded-2xl tw-overflow-hidden tw-w-full tw-max-w-[311px] tw-h-[311px] lg:tw-max-w-[264px] lg:tw-h-[264px] xl:tw-max-w-[277px] xl:tw-h-[277px] tw-mx-auto"
    >
      <BaseIcon
        name="house"
        class="tw-w-16 tw-h-16 tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2"
      />
    </div>
    <div>
      <h3 class="tw-text-body_m tw-mb-4">
        {{ place }}
      </h3>
      <p class="tw-text-h5"><span v-pretty="price"> </span> ₽</p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
  square: number
  place: string
  price: number
  src: string[]
  theme?: 'gray' | 'white'
  storey: number
  letter?: number
}

const pros = withDefaults(defineProps<Props>(), {
  theme: 'white',
})
</script>
<style lang="scss" scoped>
.card {
  @apply tw-bg-base00 tw-rounded-2xl tw-overflow-hidden tw-p-6;
  .btn {
    @apply tw-bg-white tw-grid tw-place-content-center tw-w-10 tw-h-10 tw-rounded-lg;
  }
}
</style>
