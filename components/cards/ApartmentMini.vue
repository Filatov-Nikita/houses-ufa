<template>
  <!-- Карточка бестселлеры -->
  <div class="card">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-4">
      <h4 class="tw-text-body_m">{{ title }}</h4>
      <div>
        <BaseButton padding-classes="tw-p-2" theme="gray">
          <BaseIcon class="tw-w-6 tw-h-6" name="dots_three_vertical" />
        </BaseButton>
      </div>
    </div>
    <div class="tw-mb-6">
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
      >
        <SwiperSlide v-for="img in src">
          <div
            class="tw-relative tw-bg-base00 tw-rounded-2xl tw-overflow-hidden tw-w-full tw-max-w-[311px] tw-h-[311px] lg:tw-max-w-[264px] lg:tw-h-[264px] xl:tw-max-w-[277px] xl:tw-h-[277px] tw-mx-auto"
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
    </div>
    <div>
      <p class="tw-text-body_m tw-text-text02 tw-mb-2">
        {{ type }}
      </p>
      <h5 class="tw-text-h5">{{ square }} м²</h5>
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
  type: string
  square: string
  src: string[]
}

const pros = defineProps<Props>()
</script>
<style lang="scss" scoped>
.card {
  @apply tw-rounded-2xl tw-overflow-hidden tw-p-6 tw-bg-white;
  .btn {
    @apply tw-bg-base00 tw-grid tw-place-content-center tw-w-10 tw-h-10 tw-rounded-lg;
  }
}
</style>
