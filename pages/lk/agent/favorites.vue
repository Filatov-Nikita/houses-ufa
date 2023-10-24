<template>
  <section v-if="favorites.length < 1" class="card-wrapper tw-min-h-[648px]">
    <div
      class="tw-grid tw-h-full tw-w-full tw-place-content-center tw-justify-items-center"
    >
      <div class="tw-rounded-lg tw-bg-base00 tw-p-4 tw-w-fit tw-mb-8">
        <BaseIcon name="heart" class="tw-w-8 tw-h-8" />
      </div>
      <div class="tw-text-h6 tw-mb-4">Избранное</div>
      <div class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 tw-mb-4">
        Добавьте в избранное объекты
      </div>
      <BaseButton> Перейти к объектам </BaseButton>
    </div>
  </section>
  <section v-else class="card-wrapper">
    <div class="section__top">
      <h2 class="section__title">Избранное</h2>
    </div>
    <div>
      <div
        v-for="(item, index) in 4"
        :key="index"
        class="tw-flex tw-justify-between"
        :class="[
          index === 0 ? 'tw-pb-8' : 4 === index + 1 ? 'tw-pt-8' : 'tw-py-8',
        ]"
      >
        <div class="tw-flex tw-gap-8">
          <div
            class="tw-w-[152px] tw-h-[152px] tw-rounded-2xl tw-overflow-hidden tw-bg-base00 tw-grid tw-place-content-center tw-p-4"
          >
            <img src="/images/img/plan-apartment.png" alt="" />
          </div>
          <div class="tw-grid tw-content-between">
            <div>
              <h5 class="tw-text-body_l tw-mb-2">1-комнатная, 36 м²</h5>
              <p
                class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-1"
              >
                2 этаж из 17 · Литер 1
              </p>
              <h6 class="tw-text-body_s2 -tw-tracking-875">
                Михайловка Green Place
              </h6>
            </div>
            <div
              class="tw-rounded-lg tw-bg-base00 tw-py-1 tw-px-2 tw-flex tw-gap-2.5 tw-items-center"
            >
              <BaseIcon
                name="paint_brush_board"
                class="tw-w-4 tw-h-4 tw-text-primary"
              />
              Предчистовая отделка
            </div>
          </div>
        </div>
        <div
          class="tw-grid tw-content-between tw-justify-items-end tw-text-right"
        >
          <div>
            <h4 class="tw-text-h6 tw-mb-2">20 256 296 ₽</h4>
            <div class="tw-text-body_s2 -tw-tracking-875 tw-mb-1">
              <span class="tw-text-text02">В ипотеку — </span>
              <span>от 15 659 ₽ / мес</span>
            </div>
            <div class="tw-text-body_s2 -tw-tracking-875">
              <span class="tw-text-text02">Первоначальный взнос — от </span
              ><span>5 825 659 ₽</span>
            </div>
          </div>
          <div class="tw-flex tw-gap-2">
            <BaseButton paddingClasses=" tw-px-4 tw-py-2"
              >Проверить клиента</BaseButton
            >

            <button class="tw-rounded-lg tw-p-2 tw-bg-base00">
              <BaseIcon
                name="heart_bg"
                class="tw-w-6 tw-h-6 tw-text-primary"
              ></BaseIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
})
const favorites = [{}]
</script>
<style lang="scss" scoped></style>
