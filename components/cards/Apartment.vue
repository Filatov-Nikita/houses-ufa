<template>
  <!-- Карточка бестселлеры -->
  <div class="card" :class="[`card_bg--${theme}`]">
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
      <div class="tw-inline-flex tw-gap-2">
        <BaseButton
          padding-classes="tw-p-2"
          theme="gray"
          @click="isFavorite = !isFavorite"
        >
          <BaseIcon
            v-if="isFavorite"
            name="heart_bg"
            class="tw-text-primary tw-w-6 tw-h-6"
          />
          <BaseIcon v-else name="heart" class="tw-w-6 tw-h-6" />
        </BaseButton>
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
      <!-- <img
          src="/images/img/test.png"
          alt=""
          
        /> -->
      <BaseIcon
        name="house"
        class="tw-w-16 tw-h-16 tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2"
      />
    </div>
    <div class="tw-grid tw-gap-4">
      <div class="tw-grid tw-gap-2">
        <h3 class="tw-text-body_m">
          {{ place }}
        </h3>
        <div
          class="tw-px-2 tw-py-1 tw-w-fit tw-items-center tw-rounded-lg tw-bg-base00 tw-flex tw-gap-2.5 tw-mb-6 xl:tw-mb-8"
        >
          <BaseIcon
            name="paint_brush_board"
            class="tw-text-primary tw-w-4 tw-h-4"
          />
          <span> Предчистовая отделка </span>
        </div>
      </div>
      <p class="tw-text-h5"><span v-pretty="price"> </span> ₽</p>
      <div class="tw-grid tw-gap-1">
        <p
          v-if="monthPayment"
          class="tw-text-text02 tw-text-body_s -tw-tracking-875"
        >
          В ипотеку
          <span class="tw-text-primary"
            >от <span v-pretty="monthPayment"> </span> ₽ / мес</span
          >
        </p>
        <p
          v-if="initialFee"
          class="tw-text-text02 tw-text-body_s -tw-tracking-875"
        >
          Первоначальный взнос —
          <span class="tw-text-primary">
            от <span v-pretty="initialFee"> </span> ₽
          </span>
        </p>
      </div>
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
  finishing?: string
  monthPayment?: number
  initialFee?: number
}

const pros = withDefaults(defineProps<Props>(), {
  theme: 'white',
})
const isFavorite = ref(true)
</script>
<style lang="scss" scoped>
.card {
  @apply tw-rounded-2xl tw-overflow-hidden tw-p-6;
  &_bg {
    &--white {
      @apply tw-bg-white;
    }
    &--gray {
      @apply tw-bg-base00;
    }
  }
  .btn {
    @apply tw-bg-white tw-grid tw-place-content-center tw-w-10 tw-h-10 tw-rounded-lg;
  }
}
</style>
