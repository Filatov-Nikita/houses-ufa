<template>
  <div>
    <div class="tw-overflow-auto tw-mb-6 xl:tw-mb-8">
      <BaseTabsGroup v-model="tab" class="">
        <BaseTabsGroupItem v-for="item in teamTabs" :name="item.name">
          {{ item.title }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
    <BaseTabsTabContent v-model="tab">
      <BaseTabsTabContentItem name="advantage1" key="advantage1">
        <div
          class="tw-rounded-2xl tw-overflow-hidden lg:tw-grid lg:tw-grid-cols-2 lg:tw-min-h-[488px]"
        >
          <div
            class="tw-grid tw-content-between tw-bg-white tw-px-4 tw-py-6 lg:tw-p-6"
          >
            <div>
              <h2>Разнообразие преимуществ</h2>
              <p>
                Жилой комплекс «Малина» — это место, где природа и город
                объединились, чтобы создать целый мир удобства в условиях
                природы. Расположение за чертой города не ограничит вас от
                активной жизни. Рядом с комплексом собрана вся инфраструктура:
                детский сад, школа, магазины и общественные остановки, поэтому
                жизнь на природе станет не только приятной, но и комфортной.
              </p>
            </div>
            <BaseButton theme="gray"> Выбрать квартиру</BaseButton>
          </div>

          <Swiper
            :modules="[SwiperPagination]"
            :pagination="{
              type: 'bullets',
              el: '.swiper-pagination',
              dynamicBullets: true,
            }"
            class="tw-h-[240px] lg:tw-h-full lg:tw-w-full"
          >
            <SwiperSlide class="tw-relative tw-h-full tw-w-full">
              <img
                src="/assets/images/img/country_real_estate.png"
                alt=""
                class="tw-object-cover tw-h-full tw-absolute tw-w-full"
              />
            </SwiperSlide>
            <SwiperSlide class="tw-relative tw-h-full tw-w-full">
              <img
                src="/assets/images/img/country_real_estate.png"
                alt=""
                class="tw-object-cover tw-h-full tw-absolute tw-w-full"
              />
            </SwiperSlide>
            <div class="swiper-pagination !tw-left-auto !-tw-right-4"></div>
          </Swiper>
        </div>
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>
<script lang="ts" setup>
const tab = ref('advantage1')
const teamTabs = [
  {
    name: 'advantage1',
    title: 'Преимущество 1',
  },
  {
    name: 'advantage2',
    title: 'Преимущество 2',
  },
  {
    name: 'advantage3',
    title: 'Преимущество 3',
  },
  {
    name: 'advantage4',
    title: 'Преимущество 4',
  },
]
</script>
<style lang="scss" scoped></style>
