<template>
  <div>
    <div
      class="tw-flex tw-flex-wrap tw-gap-4 tw-justify-between tw-items-end tw-mb-6 lg:tw-mb-8"
    >
      <div>
        <h5 class="tw-text-text02 tw-text-body_s2 tw-mb-2">Комнатность</h5>
        <div class="tw-inline-flex tw-gap-2">
          <BaseButton
            v-for="item in roomList"
            :theme="room && item.id === room.id ? 'green' : 'gray'"
            @click="room = item"
          >
            {{ item.name }}
          </BaseButton>
        </div>
      </div>
      <div class="tw-overflow-auto">
        <BaseTabsGroup v-model="tab" class="!tw-bg-base00">
          <BaseTabsGroupItem
            v-for="item in tabs"
            :name="item.name"
            :key="item.name"
            theme="gray"
          >
            {{ item.title }}
          </BaseTabsGroupItem>
        </BaseTabsGroup>
      </div>
    </div>
    <BaseTabsTabContent v-model="tab">
      <BaseTabsTabContentItem name="apartments" key="apartments">
        <Swiper
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="1"
          :breakpoints="{
            '1024': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '1440': {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }"
          :pagination="{
            type: 'bullets',
            dynamicBullets: true,
            dynamicMainBullets: 3,
            el: '.swiper-pagination',
            bulletActiveClass: 'dot-bullet-active',
            bulletClass: 'dot-bullet',
          }"
          :navigation="{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }"
        >
          <SwiperSlide v-for="(category, idx) in 9" :key="idx">
            <CardsBestseller
              v-bind="{
                title: 'test',
                square: 33,
                storey: 1,
                letter: 8,
                price: 1000000,
                place: 'Ufa',
                src: [],
              }"
            />
          </SwiperSlide>
          <button
            class="swiper-next tw-w-8 tw-h-8 tw-rounded-lg tw-backdrop-blur-sm tw-bg-text01/40 tw-grid tw-place-content-center tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-3 tw-z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0306 12.531L9.53055 20.031C9.46087 20.1007 9.37815 20.156 9.2871 20.1937C9.19606 20.2314 9.09847 20.2508 8.99993 20.2508C8.90138 20.2508 8.8038 20.2314 8.71276 20.1937C8.62171 20.156 8.53899 20.1007 8.4693 20.031C8.39962 19.9614 8.34435 19.8786 8.30663 19.7876C8.26892 19.6965 8.24951 19.599 8.24951 19.5004C8.24951 19.4019 8.26892 19.3043 8.30663 19.2132C8.34435 19.1222 8.39962 19.0395 8.4693 18.9698L15.4396 12.0004L8.4693 5.03104C8.32857 4.89031 8.24951 4.69944 8.24951 4.50042C8.24951 4.30139 8.32857 4.11052 8.4693 3.96979C8.61003 3.82906 8.80091 3.75 8.99993 3.75C9.19895 3.75 9.38982 3.82906 9.53055 3.96979L17.0306 11.4698C17.1003 11.5394 17.1556 11.6222 17.1933 11.7132C17.2311 11.8043 17.2505 11.9019 17.2505 12.0004C17.2505 12.099 17.2311 12.1966 17.1933 12.2876C17.1556 12.3787 17.1003 12.4614 17.0306 12.531Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            class="swiper-prev tw-w-8 tw-h-8 tw-rounded-lg tw-backdrop-blur-sm tw-bg-text01/40 tw-grid tw-place-content-center tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-3 tw-z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5307 18.9698C15.6004 19.0395 15.6557 19.1222 15.6934 19.2132C15.7311 19.3043 15.7505 19.4019 15.7505 19.5004C15.7505 19.599 15.7311 19.6965 15.6934 19.7876C15.6557 19.8786 15.6004 19.9614 15.5307 20.031C15.461 20.1007 15.3783 20.156 15.2873 20.1937C15.1962 20.2314 15.0986 20.2508 15.0001 20.2508C14.9016 20.2508 14.804 20.2314 14.7129 20.1937C14.6219 20.156 14.5392 20.1007 14.4695 20.031L6.96948 12.531C6.89974 12.4614 6.84443 12.3787 6.80668 12.2876C6.76894 12.1966 6.74951 12.099 6.74951 12.0004C6.74951 11.9019 6.76894 11.8043 6.80668 11.7132C6.84443 11.6222 6.89974 11.5394 6.96948 11.4698L14.4695 3.96979C14.6102 3.82906 14.8011 3.75 15.0001 3.75C15.1991 3.75 15.39 3.82906 15.5307 3.96979C15.6715 4.11052 15.7505 4.30139 15.7505 4.50042C15.7505 4.69944 15.6715 4.89031 15.5307 5.03104L8.56041 12.0004L15.5307 18.9698Z"
                fill="white"
              />
            </svg>
          </button>
          <div
            class="swiper-pagination !tw-static !tw-justify-center !tw-flex !tw-w-auto !tw-mt-9 !tw-translate-x-0"
          ></div>
        </Swiper>
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="cottages" key="cottages">
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="townhouses" key="townhouses">
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>
<script lang="ts" setup>
interface Room {
  id: number
  name: string
}
const roomList = [
  {
    id: 1,
    name: 'Студия',
  },
  {
    id: 2,
    name: '1',
  },
  {
    id: 3,
    name: '2',
  },
  {
    id: 4,
    name: '3+',
  },
] as Room[]
const room = ref<Room>()
const tab = ref('apartments')
const tabs = [
  {
    name: 'apartments',
    title: 'Квартиры',
  },
  {
    name: 'cottages',
    title: 'Коттеджи',
  },
  {
    name: 'townhouses',
    title: 'Таунхаусы',
  },
]
onMounted(() => (room.value = roomList[0]))
</script>
<style lang="scss" scoped></style>
