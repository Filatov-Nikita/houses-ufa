<template>
  <BaseModal v-model="open" v-slot="{ hide }">
    <div
      class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-6 xl:tw-p-10 tw-flex tw-flex-col tw-gap-6 lg:tw-h-full lg:tw-grid lg:tw-grid-rows-[auto_1fr]"
    >
      <div class="tw-flex tw-justify-between tw-items-center">
        <h4 class="tw-text-h6">Ход строительства</h4>
        <div class="tw-hidden lg:tw-block">
          <BaseButton
            type="button"
            @click="() => hide()"
            theme="gray"
            padding-classes=" tw-p-3"
            class=""
          >
            <BaseIcon name="close" class="tw-w-6 tw-h-6" />
          </BaseButton>
        </div>
      </div>
      <div class="tw-relative tw-overflow-hidden">
        <Swiper
          :modules="[SwiperPagination, SwiperNavigation]"
          :pagination="{
            type: 'bullets',
            el: '.swiper-pagination',
            dynamicBullets: true,
          }"
          :navigation="{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }"
          class="tw-h-[230px] lg:tw-h-full tw-mb-6 lg:tw-mb-0"
        >
          <SwiperSlide v-for="n in 5">
            <div
              class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center tw-h-full"
            >
              <img
                format="avif,webp"
                src="/assets/images/img/country_real_estate.png"
                class="tw-object-cover tw-absolute tw-h-full tw-w-full"
              />
            </div>
          </SwiperSlide>

          <div
            class="swiper-pagination lg:tw-hidden !tw-left-auto !-tw-right-4"
          ></div>
          <div
            class="tw-hidden lg:tw-inline-flex tw-gap-3 tw-absolute tw-right-4 tw-bottom-4 tw-z-10"
          >
            <button
              class="swiper-prev tw-rounded-lg tw-h-12 tw-w-12 tw-bg-text01/40 tw-backdrop-blur-sm tw-grid tw-place-content-center"
            >
              <BaseIcon name="back" class="tw-w-6 tw-h-6 tw-text-white" />
            </button>
            <button
              class="swiper-next tw-rounded-lg tw-h-12 tw-w-12 tw-bg-text01/40 tw-backdrop-blur-sm tw-grid tw-place-content-center"
            >
              <BaseIcon name="forward" class="tw-w-6 tw-h-6 tw-text-white" />
            </button>
          </div>
        </Swiper>

        <div
          class="tw-grid tw-gap-6 lg:tw-bg-white lg:tw-rounded-2xl lg:tw-p-6 lg:tw-w-[243px] lg:tw-absolute lg:tw-bottom-6 lg:tw-left-6 tw-z-10"
        >
          <h5 class="tw-text-body_l lg:tw-text-h6">Май 2023</h5>
          <div class="tw-grid tw-grid-cols-[1fr_auto] tw-gap-4 lg:tw-block">
            <BaseButton>Предыдущий отчет</BaseButton>
            <div class="lg:tw-hidden">
              <BaseButton
                padding-classes="tw-p-4"
                theme="gray"
                @click="() => hide()"
              >
                <BaseIcon name="close" class="tw-w-6 tw-h-6" />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', val: boolean): void
}>()

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
