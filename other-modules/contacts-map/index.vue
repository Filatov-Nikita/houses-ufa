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
        <BaseTabsGroup v-if="townCard.shop" v-model="tab" theme="gray">
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
              v-if="marks[singleOfficeIdx].photo"
              :src="marks[singleOfficeIdx].photo"
              alt=""
              class="tw-absolute tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div>
            <h4 v-if="marks[singleOfficeIdx]" class="tw-text-body_m tw-mb-1">
              {{ marks[singleOfficeIdx].name }}
            </h4>
            <p
              v-if="marks[singleOfficeIdx].address"
              class="tw-text-text01 tw-text-body_s2 -tw-tracking-875"
            >
              {{ marks[singleOfficeIdx].address }}
            </p>
          </div>
        </div>

        <div v-if="marks[singleOfficeIdx]" class="tw-grid tw-gap-2">
          <a class="tw-text-h6" v-if="marks[singleOfficeIdx].phone" :href="`tel:${marks[singleOfficeIdx].phone}`">
            {{ marks[singleOfficeIdx].phone }}
          </a>
          <p
            v-if="marks[singleOfficeIdx].workTime"
            class="tw-text-body_s tw-text-text01"
            v-html="marks[singleOfficeIdx].workTime"
          ></p>
        </div>
        <div class="tw-flex tw-gap-3">
          <BaseButton class="tw-flex-grow" @click="toggleForm">
            Обратный звонок
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { usePublicHeader } from '@/other-modules/public-header/store';
import type { EstateCard } from '@/types/estate/estate-card';
import Map from './components/Map.vue';

interface Item {
  name: string,
  coords: [ string, string ],
  photo?: string,
  address?: string,
  phone?: string,
  workTime?: string,
}

const props = defineProps<{
  townCard: EstateCard,
}>();

const { toggleForm } = usePublicHeader();

const townData = computed<Item>(() => {
  return {
    name: props.townCard.name,
    coords: [ props.townCard.latitude, props.townCard.longitude ],
    photo: props.townCard.sight_picture?.url,
  }
});

const officeData = computed<Item | null>(() => {
  if(!props.townCard.shop) return null;
  return {
    name: props.townCard.shop.name,
    coords: [ props.townCard.shop.latitude, props.townCard.shop.longitude ],
    photo: props.townCard.shop.sight_picture?.url,
    address: props.townCard.shop.address,
    phone: props.townCard.shop.phone_number,
    workTime: props.townCard.shop.business_hours,
  }
});

const marks = computed<Item[]>(() => {
  const items: Item[] = [ townData.value ];
  if(officeData.value) items.unshift(officeData.value);
  return items;
});

const nameStreet = ref('')
const suggest = ref()
const singleOfficeIdx = ref(0)
const openMap = ref(false)
const updateSingleIdx = (idx) => {
  singleOfficeIdx.value = idx
}

const tab = ref(props.townCard.shop ? 'office' : 'object')
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
