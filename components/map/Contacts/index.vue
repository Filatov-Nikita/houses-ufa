<template>
  <div class="tw-hidden lg:tw-block">
    <div class="map tw-relative">
      <MapContactsMap
        :singleIdx="singleOfficeIdx"
        :marks="marks"
        :taxiLink="taxiLink"
        @updateTaxiLink="updateTaxiLink"
        @updateSingleIdx="updateSingleIdx"
      />
      <div
        class="tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-p-4 tw-absolute tw-z-10 tw-top-10 tw-left-10 tw-w-[375px] tw-shadow-shadow01"
      >
        <template v-for="(item, index) in marks">
          <div
            class="tw-flex tw-gap-4 tw-py-3 tw-items-center tw-cursor-pointer"
            v-show="singleOfficeIdx === null"
            @click="singleOfficeIdx = index"
          >
            <div
              :key="item.id"
              class="tw-w-10 tw-h-10 tw-rounded-lg tw-relative tw-overflow-hidden"
            >
              <img
                :src="item.img"
                alt=""
                class="tw-absolute tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div class="tw-grow">
              <h4 class="tw-text-body_m tw-mb-1">{{ item.title }}</h4>
              <p class="tw-text-text01 tw-text-body_s2 -tw-tracking-875">
                {{ item.address }}
              </p>
            </div>
            <BaseIcon name="forward" class="tw-w-6 tw-h-6 tw-text-icon" />
          </div>
          <div v-if="index !== marks.length -1 && marks.length > 1" class=" tw-border-b tw-border-border00"></div>
        </template>
        <div
          v-show="Number.isInteger(singleOfficeIdx) && singleOfficeIdx !== null"
          class="tw-p-4 tw-grid tw-gap-4"
        >
          <BaseButton
            class=""
            padding-classes="tw-p-0"
            theme="transparent"
            @click="singleOfficeIdx = null"
          >
            <div class="tw-text-primary tw-flex tw-gap-1 tw-items-center">
              <BaseIcon name="back" class="tw-w-6 tw-h-6" />
              <span class="tw-text-body_s tw-leading-normal"> Назад </span>
            </div>
          </BaseButton>
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
          <p>
            Выберите точку на карте или введите адрес для построения маршрута
          </p>
          <div class=" tw-relative">

            <BaseInput
              name="nameStreet"
              label=""
              placeholder="Введите название улицы"
              v-model="nameStreet"
              id="suggest"
              input-class="!tw-pr-12"

            />
            <BaseIcon name="paper" class=" tw-w-6 tw-h-6 tw-text-icon tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-mt-1"/>
          </div>
          <div v-if="marks[singleOfficeIdx]" class="tw-grid tw-gap-2">
            <p class="tw-text-h6" v-html="marks[singleOfficeIdx].phone"></p>
            <p class="tw-text-body_s" v-html="marks[singleOfficeIdx].workTime"></p>
          </div>
          <div class="tw-flex tw-gap-3">
            <BaseButton class="tw-flex-grow"> Обратный звонок </BaseButton>
            <NuxtLink :to="taxiLink" target="_blank">
              <BaseButton theme="gray" padding-classes="tw-p-3">
                <BaseIcon name="yandex_taxi" class="tw-w-8 tw-h-8" />
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:tw-hidden">
    <div class="tw-grid tw-gap-2 tw-bg-white tw-rounded-2xl tw-p-4">
      <template v-for="(item, index) in marks">

        <div
          class="tw-flex tw-gap-4 tw-py-3 tw-items-center tw-cursor-pointer"

          @click="() => ((openMap = true), (singleOfficeIdx = index))"
        >
          <div
            :key="item.id"
            class="tw-w-10 tw-h-10 tw-rounded-lg tw-relative tw-overflow-hidden"
          >
            <img
              :src="item.img"
              alt=""
              class="tw-absolute tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div class="tw-grow">
            <h4 class="tw-text-body_m tw-mb-1">{{ item.title }}</h4>
            <p class="tw-text-text01 tw-text-body_s2 -tw-tracking-875">
              {{ item.address }}
            </p>
          </div>
          <BaseIcon name="forward" class="tw-w-6 tw-h-6 tw-text-icon" />
        </div>

        <div v-if="index !== marks.length -1" class=" tw-border-b tw-border-border00">
        </div>
      </template>
    </div>
  </div>
  <BaseModal v-model="openMap" :isFullMob="true" :forMob="true">
    <div class="tw-h-screen tw-w-full tw-relative !tw-overflow-hidden">
      <BaseButton
        type="button"
        @click="openMap = false"
        theme="gray"
        padding-classes=" tw-p-3"
        class="tw-absolute tw-top-4 tw-right-4 tw-z-10"
      >
        <BaseIcon name="close" class="tw-w-6 tw-h-6" />
      </BaseButton>
      <MapContactsMap
        :singleIdx="singleOfficeIdx"
        :marks="marks"
        :taxiLink="taxiLink"
        @updateTaxiLink="updateTaxiLink"
        @updateSingleIdx="updateSingleIdx"
      />

      <div
        v-show="Number.isInteger(singleOfficeIdx) && singleOfficeIdx !== null"
        class="widget tw-absolute tw-z-10 tw-bottom-0 tw-left-0 tw-bg-base00 tw-px-4 tw-rounded-t-2xl tw-transition-transform tw-duration-300 tw-ease-in"
        :style="[
          hideWidget
            ? {
                transform: `translateY(calc(100% - ${widgetToggle.offsetHeight}px ))`,
              }
            : '',
        ]"
      >
        <div
          class="tw-flex tw-justify-center tw-py-2 tw-mb-2 tw-cursor-pointer"
          ref="widgetToggle"
          @click="hideWidget = !hideWidget"
        >
          <div class="tw-w-12 tw-h-1 tw-rounded-[50px] tw-bg-secondary"></div>
        </div>
        <div class="tw-p-4 tw-grid tw-gap-4 tw-bg-white tw-rounded-2xl">
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
              <h4 v-if="marks[singleOfficeIdx]" class="tw-text-body_l tw-mb-1">
                {{ marks[singleOfficeIdx].title }}
              </h4>
              <p
                v-if="marks[singleOfficeIdx]"
                class="tw-text-text01 tw-text-body_xs -tw-tracking-875"
              >
                {{ marks[singleOfficeIdx].address }}
              </p>
            </div>
          </div>
          <p class="tw-text-body_s2 -tw-tracking-875">
            Выберите точку на карте или введите адрес для построения маршрута
          </p>
          <BaseInput
            name="nameStreet"
            label=""
            placeholder="Введите название улицы"
            v-model="nameStreet"
            id="suggest"
          />
          <div class="tw-grid tw-gap-2">
            <p class="tw-text-h6" v-html="marks[singleOfficeIdx].phone"></p>
            <p class="tw-text-body_s2 -tw-tracking-875" v-html="marks[singleOfficeIdx].workTime"></p>
          </div>
          <div class="tw-flex tw-gap-3">
            <BaseButton class="tw-flex-grow"> Обратный звонок </BaseButton>
            <NuxtLink :to="taxiLink" target="_blank">
              <BaseButton theme="gray" padding-classes="tw-p-3">
                <BaseIcon name="yandex_taxi" class="tw-w-8 tw-h-8" />
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
<script setup>
const marks = [
  {
    id: 1,
    img: '/images/offices/1.png',
    title: 'ЖК «Сапфир»',
    address: 'г. Уфа, ул. Комсомольская, д. 8',
    coords: [54.739456, 55.992989],
    phone: '+7 (347) 225-00-73',
    workTime: 'Понедельник - суббота: 10:00–20:00<br>Воскресенье: 11:00–18:00',
  },
  {
    id: 2,
    img: '/images/offices/2.png',
    title: 'Центральный офис «Жилой Квартал»',
    address: 'г. Уфа, ул. З. Биишевой, 13',
    coords: [54.694097, 55.982982],
    phone: 'Отдел продаж: +7 (347) 225-00-73<br>Офис: +7 (347) 225-03-25',
    workTime: 'Отдел продаж: 10:00–18:00<br>Офис: 09:00–18:00',
  },
  {
    id: 3,
    img: '/images/offices/3.png',
    title: 'ЖК «Михайловка Green»',
    address: 'с. Михайловка, ул. Дубравная, 1/1а',
    coords: [54.829424, 55.878741],
    phone: '+7 (347) 294-00-40',
    workTime: 'Отдел продаж: 10:00–18:00<br>Офис: 09:00–18:00',
  },
  {
    id: 4,
    img: '/images/offices/4.png',
    title: 'ЖК «Гудвилл Парк»',
    address: 'с. Шмидтово, ул. Ромашковая, д 10',
    coords: [54.615121, 56.093906],
    phone: '+7 347 225-00-73',
    workTime: 'Понедельник - суббота: 10:00–20:00 (сб. до 18:00)<br>Воскресенье: 10:00–17:00',
  },
  {
    id: 5,
    img: '/images/offices/5.png',
    title: 'ЖК «Зубово Life 3»',
    address: 'Зубово Life 3, ул. Народная, 1/1',
    coords: [54.632676, 55.904127],
    phone: '+7 (347) 225-00-73',
    workTime: 'Понедельник - суббота: 10:00–20:00<br>Воскресенье: 11:00–18:00',
  },
  {
    id: 6,
    img: '/images/offices/6.png',
    title: 'ЖК «Зубово Life 2»',
    address: 'с.Зубово, ул.Авроры, д.1а',
    coords: [54.623535, 55.899312],
    phone: '+7 (347) 225-03-25',
    workTime: 'Понедельник - суббота: 10:00–20:00 (сб. до 18:00)<br>Воскресенье: 11:00–17:00',
  },
]
const nameStreet = ref('')
const suggest = ref()
const singleOfficeIdx = ref(null)
const openMap = ref(false)
const updateSingleIdx = (idx) => {
  singleOfficeIdx.value = idx
}
const taxiLink = ref('')
const updateTaxiLink = (link) => {
  taxiLink.value = link
}
const hideWidget = ref(false)
const widgetToggle = ref()
</script>
<style>
/* Квадратный макет метки */

.contact-layout {
  display: flex;
  border-radius: 12px;
  border: 2px solid white;
  position: absolute;
  width: max-content;
  /* width: 32px;
  height: 32px; */
  background-color: white;
  align-items: center;
  @apply tw-shadow-shadow01;
}
.contact-layout__img {
  gap: 6px;
  border-radius: 12px;

  overflow: hidden;
}
.contact-layout__img > img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.contact-layout__content {
  padding: 0 16px;
}
.contact-layout.active {
  background: theme('colors.primary');
  color: white;
}

.contact-layout__title {
  @apply tw-text-body_m;
}
</style>
<style lang="scss" scoped>
.map {
  @apply tw-w-full tw-h-[560px] lg:tw-h-[600px] tw-rounded-2xl tw-overflow-hidden  tw-relative;
  &.fullscreen {
    @apply tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen;
  }

  .btn-to-fullscreen {
    @apply tw-absolute tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-bottom-4 tw-max-w-[311px] tw-w-full  tw-bg-white tw-rounded-lg tw-px-6 tw-py-4;
    @apply tw-flex tw-justify-center tw-items-center tw-gap-4 tw-text-body_m;
    @apply lg:tw-hidden;
  }
}
.close {
  @apply tw-rounded-lg tw-grid tw-place-content-center tw-bg-white tw-w-12 tw-h-12;
  @apply tw-fixed tw-right-4 tw-top-4;
  z-index: 10001;
}
.yandex-container {
  height: 608px;
}

.card {
  $this: &;

  @apply tw-rounded-2xl tw-p-6 tw-bg-white tw-shadow-shadow01 tw-absolute tw-top-1/2 lg:tw-top-auto tw-grid tw-gap-6 tw-max-w-[360px] tw-w-full  tw-z-10 tw-content-start tw-opacity-100;
  @apply tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 lg:tw-left-auto lg:tw-translate-x-0;
  &__content {
    @apply tw-grid tw-gap-6;
    #{$this}__image {
      @apply tw-rounded-lg tw-overflow-hidden tw-h-[220px] tw-w-full tw-relative;
      & > img {
        @apply tw-absolute tw-w-full tw-h-full tw-object-cover;
      }
    }
    .status {
      @apply tw-rounded-lg tw-w-fit tw-bg-base01 tw-text-body_s tw-px-3 tw-py-[5px] tw-grid tw-place-content-center;
    }
    .title {
      @apply tw-text-h6 tw-mb-1;
    }
    .text {
      @apply tw-text-text02 tw-text-body_s2 -tw-tracking-875;
    }
  }
  &__btns {
    @apply tw-flex tw-gap-4;
  }
}

.fade-enter-active {
  @apply tw-animate-fadeIn;
}
.fade-leave-active {
  @apply tw-animate-fadeOut;
}
</style>
