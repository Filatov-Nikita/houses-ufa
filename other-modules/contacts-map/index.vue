<template>
  <div class="contacts-map">
    <Map
      :singleIdx="singleOfficeIdx"
      :marks="marks"
      @updateSingleIdx="updateSingleIdx"
    />
    <div
      class="tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-p-4 tw-absolute tw-z-10 tw-bottom-0 tw-w-full lg:tw-top-6 lg:tw-left-6 xl:tw-top-8 xl:tw-left-10 lg:tw-w-[375px] tw-shadow-shadow01 tw-h-fit"
    >
      <div
        v-show="Number.isInteger(singleOfficeIdx) && singleOfficeIdx !== null"
        class="tw-p-4 tw-grid tw-gap-4"
      >
        <!-- <BaseButton
          class=""
          padding-classes="tw-p-0"
          theme="transparent"
          @click="singleOfficeIdx = null"
        >
          <div class="tw-text-primary tw-flex tw-gap-1 tw-items-center">
            <BaseIcon name="back" class="tw-w-6 tw-h-6" />
            <span class="tw-text-body_s tw-leading-normal"> Назад </span>
          </div>
        </BaseButton> -->
        <BaseTabsGroup v-model="tab" theme="gray">
          <BaseTabsGroupItem
            v-for="(item, index) in tabs"
            :name="item.name"
            theme="gray"
            class="tw-w-full"
            @click="singleOfficeIdx = index"
          >
            {{ item.title }}
          </BaseTabsGroupItem>
        </BaseTabsGroup>
        <div class="tw-flex tw-gap-4">
          <div
            class="tw-w-10 tw-h-10 tw-rounded-lg tw-relative tw-overflow-hidden"
          >
            <img
              v-if="marks[singleOfficeIdx]"
              :src="marks[singleOfficeIdx].img"
              alt=""
              class="tw-absolute tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div>
            <h4 v-if="marks[singleOfficeIdx]" class="tw-text-body_m tw-mb-1">
              {{ marks[singleOfficeIdx].title }}
            </h4>
            <p
              v-if="marks[singleOfficeIdx]"
              class="tw-text-text01 tw-text-body_s2 -tw-tracking-875"
            >
              {{ marks[singleOfficeIdx].address }}
            </p>
          </div>
        </div>

        <div v-if="marks[singleOfficeIdx]" class="tw-grid tw-gap-2">
          <p class="tw-text-h6" v-html="marks[singleOfficeIdx].phone"></p>
          <p
            class="tw-text-body_s tw-text-text01"
            v-html="marks[singleOfficeIdx].workTime"
          ></p>
        </div>
        <div class="tw-flex tw-gap-3">
          <BaseButton class="tw-flex-grow" @click="showForm">
            Обратный звонок
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Map from './components/Map.vue'
const marks = [
  {
    id: 1,
    img: '/images/offices/1.png',
    title: 'ЖК «Сапфир»',
    address: 'г. Уфа, ул. Комсомольская, д. 8',
    coords: [54.739456, 55.992989],
    phone: '+7 (347) 225-00-73',
    workTime: 'Пн-Сб: 10:00-20:00 (сб. до 18:00) <br> Вс: 10:00-17:00',
  },
  {
    id: 2,
    img: '/images/offices/1.png',
    title: 'ЖК «Сапфир»',
    address: 'г. Уфа, ул. Комсомольская, д. 9',
    coords: [54.731456, 55.993989],
    phone: '+7 (347) 225-00-73',
    workTime: 'Пн-Сб: 10:00-20:00 (сб. до 18:00) <br> Вс: 10:00-17:00',
  },
]
const nameStreet = ref('')
const suggest = ref()
const singleOfficeIdx = ref(0)
const openMap = ref(false)
const updateSingleIdx = (idx) => {
  singleOfficeIdx.value = idx
}

const tab = ref('office')
const tabs = [
  {
    name: 'office',
    title: 'Офис продаж',
  },
  {
    name: 'object',
    title: 'Объект',
  },
]
</script>
<style lang="scss" scoped>
.contacts-map {
  @apply tw-rounded-2xl tw-overflow-hidden tw-h-screen  lg:tw-h-[560px] xl:tw-h-[608px] tw-relative;

  margin-inline: -16px;
  @sceen lg {
    width: 100%;
    margin: 0;
  }
}
</style>
