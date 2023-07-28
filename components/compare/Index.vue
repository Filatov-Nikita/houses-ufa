<template>
  <div>
    <div class="compare lg:tw-mx-[88px]">
      <div
        class="tw-flex tw-justify-center lg:tw-justify-start tw-items-center tw-gap-4 tw-mb-4 lg:tw-mb-6"
      >
        <BaseSwitch
          :checked="isDuplicateOpt"
          @update:checked="(e) => (isDuplicateOpt = e)"
        />
        <span class="tw-text-body_s2 -tw-tracking-875 lg:tw-text-body_m"
          >Убрать одинаковые параметры</span
        >
      </div>
      <div class="compare__head lg:tw-mb-6">
        <CompareHeadListMobile
          v-if="widthWindow < 1024"
          :values="data"
          @update-general-value="getGeneralValue"
        />
        <CompareHeadList
          v-else
          :values="data"
          @update-general-value="getGeneralValue"
        />
      </div>

      <div class="compare__body">
        <CompareItemGroup
          v-if="generalValuesKeys.rooms"
          title="Комнатность"
          :data-list="generalValuesKeys.rooms"
          :border-bottom="true"
        />
        <CompareItemGroup
          v-if="generalValuesKeys.square"
          title="Площадь"
          :data-list="generalValuesKeys.square"
          :border-bottom="true"
        />
        <CompareItemGroup
          v-if="generalValuesKeys.payment_month"
          title="В ипотеку"
          :data-list="generalValuesKeys.payment_month"
          :border-bottom="true"
        />
        <CompareItemGroup
          v-if="generalValuesKeys.finishing"
          title="Отделка"
          :data-list="generalValuesKeys.finishing"
          :finishing="true"
        />
        <div class="accordion tw-mt-6">
          <div class="accordion__head">
            <div
              @click="openLocation = !openLocation"
              class="tw-text-body_m lg:tw-text-h5 tw-flex tw-gap-2 lg:tw-gap-4 tw-items-center tw-cursor-pointer tw-select-none"
            >
              <span> Расположение </span>
              <svg
                class="tw-w-6 tw-h-6 lg:tw-w-8 lg:tw-h-8 tw-transform tw-rotate-180 tw-transition-all tw-duration-100"
                :class="{ 'tw-rotate-0': openLocation }"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.7074 20.7083C26.6146 20.8013 26.5043 20.875 26.3829 20.9253C26.2615 20.9757 26.1314 21.0016 25.9999 21.0016C25.8685 21.0016 25.7384 20.9757 25.617 20.9253C25.4956 20.875 25.3853 20.8013 25.2924 20.7083L15.9999 11.4145L6.70745 20.7083C6.5198 20.8959 6.26531 21.0013 5.99995 21.0013C5.73458 21.0013 5.48009 20.8959 5.29245 20.7083C5.1048 20.5206 4.99939 20.2662 4.99939 20.0008C4.99939 19.7354 5.10481 19.4809 5.29245 19.2933L15.2924 9.29329C15.3853 9.20031 15.4956 9.12655 15.617 9.07623C15.7384 9.0259 15.8685 9 15.9999 9C16.1314 9 16.2615 9.0259 16.3829 9.07623C16.5043 9.12655 16.6146 9.20031 16.7074 9.29329L26.7074 19.2933C26.8004 19.3862 26.8742 19.4964 26.9245 19.6178C26.9748 19.7392 27.0007 19.8694 27.0007 20.0008C27.0007 20.1322 26.9748 20.2623 26.9245 20.3837C26.8742 20.5051 26.8004 20.6154 26.7074 20.7083Z"
                  fill="#4FBA78"
                />
              </svg>
            </div>
          </div>
          <div class="accordion__body" :class="{ active: openLocation }">
            <div class="accordion__body-content">
              <CompareItemGroup
                v-if="generalValuesKeys.location"
                title="Локация"
                :data-list="generalValuesKeys.location"
                :border-bottom="true"
              />
              <CompareItemGroup
                v-if="generalValuesKeys.residential_area"
                title="Жилой квартал"
                :data-list="generalValuesKeys.residential_area"
                :border-bottom="true"
              />
              <CompareItemGroup
                v-if="generalValuesKeys.liter"
                title="Литер"
                :data-list="generalValuesKeys.liter"
                :border-bottom="true"
              />
              <CompareItemGroup
                v-if="generalValuesKeys.entrance"
                title="Подъезд"
                :data-list="generalValuesKeys.entrance"
                :border-bottom="true"
              />
              <CompareItemGroup
                v-if="generalValuesKeys.floor"
                title="Этаж"
                :data-list="generalValuesKeys.floor"
                :border-bottom="true"
              />
              <CompareItemGroup
                v-if="generalValuesKeys.apartment_number"
                title="Номер квартиры"
                :data-list="generalValuesKeys.apartment_number"
                :border-bottom="true"
              />
              <CompareItemGroup
                v-if="generalValuesKeys.balcony"
                title="Балкон / Лоджия"
                :data-list="generalValuesKeys.balcony"
                :border-bottom="true"
              />
              <CompareItemGroup
                v-if="generalValuesKeys.inlet"
                title="Ввод"
                :data-list="generalValuesKeys.inlet"
              />
            </div>
          </div>
        </div>
        <div class="requests tw-mt-5">
          <BaseButton
            v-for="item in generalValuesKeys.id"
            theme="secondary"
            class="tw-text-body_s2 -tw-tracking-875 lg:tw-text-body_m"
            >Оставить заявку</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  decriptionHeadApartment,
  apartmentGeneralDescriptionT,
  cottageGeneralDescriptionT,
} from './models'
const openLocation = ref(false)
const isDuplicateOpt = ref(false)
const data: Array<apartmentGeneralDescriptionT | cottageGeneralDescriptionT> = [
  {
    id: 1,
    title: '1 команатная, 123',
    typeHome: 'apartment',
    price: 1234536,
    rooms: 1,
    square: 1,
    payment_month: 1,
    finishing: 'отделка',
    location: 'location',
    residential_area: '123',
    inlet: 'X',
    images: [
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
    ],
    liter: 1,
    entrance: 2,
    floor: 3,
    apartment_number: 'string',
    balcony: 'Есть',
    href: '#',
  },
  {
    id: 2,
    title: '1 команатная, 123',
    typeHome: 'apartment',
    price: 1234536,
    rooms: 12,
    square: 1,
    payment_month: 1,
    finishing: 'отделка',
    location: 'location',
    residential_area: '123',
    inlet: 'X',
    images: [
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
    ],
    liter: 1,
    entrance: 2,
    floor: 3,
    apartment_number: 'string',
    balcony: 'Есть',
    href: '#',
  },
  {
    id: 3,
    title: '1 команатная, 123',
    typeHome: 'apartment',
    price: 1234536,
    rooms: 13,
    square: 1,
    payment_month: 1,
    finishing: 'отделка',
    location: 'location',
    residential_area: '123',
    inlet: 'X',
    images: [
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
    ],
    liter: 1,
    entrance: 2,
    floor: 3,
    apartment_number: 'string',
    balcony: 'Есть',
    href: '#',
  },
  {
    id: 4,
    title: '1 команатная, 123',
    typeHome: 'apartment',
    price: 1234536,
    rooms: 14,
    square: 1,
    payment_month: 1,
    finishing: 'отделка',
    location: 'location',
    residential_area: '123',
    inlet: 'X',
    images: [
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
    ],
    liter: 1,
    entrance: 2,
    floor: 3,
    apartment_number: 'string',
    balcony: 'Есть',
    href: '#',
  },
  {
    id: 5,
    title: '1 команатная, 123',
    typeHome: 'apartment',
    price: 1234536,
    rooms: 15,
    square: 1,
    payment_month: 1,
    finishing: 'отделка',
    location: 'location',
    residential_area: '123',
    inlet: 'X',
    images: [
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
    ],
    liter: 1,
    entrance: 2,
    floor: 3,
    apartment_number: 'string',
    balcony: 'Есть',
    href: '#',
  },
  {
    id: 6,
    title: '1 команатная, 123',
    typeHome: 'apartment',
    price: 1234536,
    rooms: 16,
    square: 1,
    payment_month: 1,
    finishing: 'отделка',
    location: 'location',
    residential_area: '123',
    inlet: 'X',
    images: [
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
      '/assets/images/img/country_real_estate.png',
    ],
    liter: 1,
    entrance: 2,
    floor: 3,
    apartment_number: 'string',
    balcony: 'Есть',
    href: '#',
  },
]

const values: decriptionHeadApartment[] = [
  {
    id: 1,
    typeHome: 'apartment',
    title: '1 команатная, 123',
    price: '1 234 536',
    images: ['s'],
  },
  {
    id: 2,
    typeHome: 'apartment',
    title: '1 команатная, 123',
    price: '1 234 536',
    images: ['s'],
  },
  {
    id: 3,
    typeHome: 'apartment',
    title: '1 команатная, 123',
    price: '1 234 536',
    images: ['s'],
  },
  {
    id: 4,
    typeHome: 'apartment',
    title: '1 команатная, 123',
    price: '1 234 536',
    images: ['s'],
  },
  {
    id: 5,
    typeHome: 'apartment',
    title: '1 команатная, 123',
    price: '1 234 536',
    images: ['s'],
  },
  {
    id: 6,
    typeHome: 'apartment',
    title: '1 команатная, 123',
    price: '1 234 536',
    images: ['s'],
  },
]
const widthWindow = ref(0)
const visibleValues = ref<decriptionHeadApartment[]>([])
const updateWindow = () => {
  visibleValues.value = data.slice(0, 4)
  widthWindow.value = window.innerWidth
}
const generalValues = ref<
  Array<apartmentGeneralDescriptionT | cottageGeneralDescriptionT>
>([])
const getGeneralValue = (generalIdList: number[]) => {
  generalValues.value = data.filter((val) => {
    if (generalIdList.indexOf(val.id) !== -1) {
      return true
    }
    return false
  })

  // generalValues.
}

const generalValuesKeys = computed(() => {
  let obj = {}
  generalValues.value.forEach((item) => {
    for (let key in item) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = [item[key]]
      } else {
        obj[key] = [...obj[key], item[key]]
      }
    }
  })
  if (isDuplicateOpt.value) {
    for (let key in obj) {
      const currentValue = obj[key][0]
      let dublicate = false
      let count = 0
      obj[key].every((item, index) => {
        if (item === currentValue) {
          count++
          return true
        }
        return false
      })
      if (count === obj[key].length) delete obj[key]
    }
  }

  return obj
})

const removeDuplicateOpt = () => {}
onMounted(() => {
  updateWindow()
  window.addEventListener('resize', updateWindow)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateWindow)
})
</script>
<style lang="scss" scoped>
.compare__body {
  & .item {
  }
}

.accordion {
  &__head {
  }
  &__body {
    @apply tw-grid tw-grid-rows-[0fr] tw-overflow-hidden;
    @apply tw-transition-all tw-duration-100;
    &-content {
      @apply tw-min-h-0;
    }
    &.active {
      grid-template-rows: 1fr;
    }
  }
}

.requests {
  @apply tw-grid tw-grid-cols-2 lg:tw-flex lg:tw-flex-wrap tw-overflow-hidden tw-gap-4 lg:tw-gap-5 tw-justify-between;
  & > button {
    @apply tw-inline-block;

    @screen lg {
      width: calc(25% - 1.25rem);
    }
  }
}
</style>
