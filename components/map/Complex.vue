<template>
  <div class="map" :class="{ fullscreen: fullscreenMap }">
    <div id="map-complex"></div>

    <template v-if="fullscreenMap">
      <button class="close" @click="fullscreenMap = false">
        <img src="/images/icons/close.svg" width="24" height="24" />
      </button>
    </template>
    <template v-else>
      <button @click="fullscreenMap = true" class="btn-to-fullscreen">
        <span> Смотреть на карте </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 4.5V9C20.25 9.19891 20.171 9.38968 20.0303 9.53033C19.8897 9.67098 19.6989 9.75 19.5 9.75C19.3011 9.75 19.1103 9.67098 18.9697 9.53033C18.829 9.38968 18.75 9.19891 18.75 9V6.31031L14.0306 11.0306C13.8899 11.1714 13.699 11.2504 13.5 11.2504C13.301 11.2504 13.1101 11.1714 12.9694 11.0306C12.8286 10.8899 12.7496 10.699 12.7496 10.5C12.7496 10.301 12.8286 10.1101 12.9694 9.96937L17.6897 5.25H15C14.8011 5.25 14.6103 5.17098 14.4697 5.03033C14.329 4.88968 14.25 4.69891 14.25 4.5C14.25 4.30109 14.329 4.11032 14.4697 3.96967C14.6103 3.82902 14.8011 3.75 15 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5ZM9.96937 12.9694L5.25 17.6897V15C5.25 14.8011 5.17098 14.6103 5.03033 14.4697C4.88968 14.329 4.69891 14.25 4.5 14.25C4.30109 14.25 4.11032 14.329 3.96967 14.4697C3.82902 14.6103 3.75 14.8011 3.75 15V19.5C3.75 19.6989 3.82902 19.8897 3.96967 20.0303C4.11032 20.171 4.30109 20.25 4.5 20.25H9C9.19891 20.25 9.38968 20.171 9.53033 20.0303C9.67098 19.8897 9.75 19.6989 9.75 19.5C9.75 19.3011 9.67098 19.1103 9.53033 18.9697C9.38968 18.829 9.19891 18.75 9 18.75H6.31031L11.0306 14.0306C11.1714 13.8899 11.2504 13.699 11.2504 13.5C11.2504 13.301 11.1714 13.1101 11.0306 12.9694C10.8899 12.8286 10.699 12.7496 10.5 12.7496C10.301 12.7496 10.1101 12.8286 9.96937 12.9694Z"
            fill="#4FBA78"
          />
        </svg>
      </button>
    </template>

    <ModalsComplex v-model="cardOpen" />
  </div>
</template>
<script setup lang="ts">
const cardOpen = ref(false)
const itemCardOpen = ref()
const { fullscreenMap } = useStartSettingsMap()
let sizeMap = [] as number[]

const marks = [
  {
    coords: [56.00933, 54.719426],
    href: '/images/img/country_real_estate.png',
    title: 'Михайловка Green Place',
    text: 'с. Михайловка',
  },
  {
    coords: [56.008651, 54.720201],
    href: '/images/img/country_real_estate.png',
    title: 'Михайловка Green Place',
    text: 'с. Михайловка',
  },
  {
    coords: [56.016617, 54.721629],
    href: '/images/img/country_real_estate.png',
    title: 'Михайловка Green Place',
    text: 'с. Михайловка',
  },
  {
    coords: [56.012493, 54.716517],
    href: '/images/img/country_real_estate.png',
    title: 'Михайловка Green Place',
    text: 'с. Михайловка',
  },
  {
    coords: [56.003305, 54.716656],
    href: '/images/img/country_real_estate.png',
    title: 'Михайловка Green Place',
    text: 'с. Михайловка',
  },
]
let map

onMounted(() => {
  if (ymaps) {
    console.log(ymaps);
    
    ymaps.ready(init)
    function init() {
      // Создание карты.

      map = new ymaps.Map(
        'map-complex',
        {
          center: [56.01448981, 54.71835837],
          zoom: 16,
          controls: [],
        },
        {
          searchControlProvider: 'yandex#search',
        }
      )
      let geoObjects = []
      marks.forEach((item, i) => {
        var animatedLayout = ymaps.templateLayoutFactory.createClass(
          `<div class="complex-layout">
            <div class="complex-layout__img">
            <img src=${item.href} width="56" height="56">
            </div>
            <div class="complex-layout__content">
              <span class="complex-layout__title">${item.title}</span>
              <span class="complex-layout__text">${item.text}</span>
            </div>
            </div>`,
          {
            build: function () {
              animatedLayout.superclass.build.call(this)
              var element =
                this.getParentElement().getElementsByClassName(
                  'complex-layout'
                )[0]
              var smallShape = {
                type: 'Circle',
                coordinates: [25, 25],
                radius: 56,
              }
              this.getData().options.set('shape', smallShape)
              if (this.isActive) {
                element.classList.add('active')
                element.style.animation = '.35s show-big-placemark'
              } else if (this.inited) {
                element.classList.remove('active')
                element.style.animation = '.35s show-small-placemark'
              }
              if (!this.inited) {
                this.inited = true
                this.isActive = false

                this.getData().geoObject.events.add(
                  'mouseenter',
                  function (e) {
                    if (window.innerWidth >= 1024) {
                      this.isActive = true
                      this.rebuild()
                    }
                  },
                  this
                )

                this.getData().geoObject.events.add(
                  'mouseleave',
                  function () {
                    if (window.innerWidth >= 1024) {
                      if (this.isActive) this.isActive = false
                      this.rebuild()
                    }
                  },
                  this
                )
                this.getData().geoObject.events.add(
                  'click',
                  function (e) {
                    itemCardOpen.value = marks[i]
                    cardOpen.value = true
                  },
                  this
                )
              }
            },
          }
        )
        const mark = new ymaps.Placemark(
          // Координаты метки
          item.coords,
          {},
          {
            iconLayout: animatedLayout,
          }
        )
        map.geoObjects.add(mark)
      })
      sizeMap = map.container.getSize()
    }
  }
})

watch(cardOpen, (val) => {
  if (!val) {
    itemCardOpen.value = undefined
  }
})

watch(fullscreenMap, (val) => {
  if (val) {
    map.container.getParentElement().style.height = window.screen.height + 'px'
    map.container.getParentElement().style.width = window.screen.width + 'px'
    map.container.fitToViewport()
  } else {
    map.container.getParentElement().style.height = sizeMap[1] + 'px'
    map.container.fitToViewport()
  }
})
</script>
<style>
/* Квадратный макет метки */
.square_main-layout {
  display: flex;
  border-radius: 12px;
  position: absolute;
  left: -23px;
  top: -23px;
  overflow: hidden;
  width: max-content;
  border: 4px solid white;
  background-color: white;
  align-items: center;
  gap: 6px;
}
.square_main-layout > img {
  width: 56px;
  height: 56px;
  object-fit: cover;
}
.square_main-layout.active .square_main-layout-text {
  display: block;
}
.square_main-layout-text {
  @apply tw-text-body_xs;
  display: none;
  padding: 12px 8px;
}
.complex-layout {
  display: flex;
  border-radius: 12px;
  position: absolute;
  gap: 18px;
  width: max-content;
  /* width: 32px;
  height: 32px; */
  background-color: white;
  align-items: center;
}
.complex-layout__img {
  gap: 6px;
  border: 2px solid theme('colors.primary');
  border-radius: 12px;
  overflow: hidden;
}
.complex-layout__img > img {
  width: 56px;
  height: 56px;
  object-fit: cover;
}
.complex-layout.active {
  padding: 8px;
}
.complex-layout__content {
  display: none;
}
.complex-layout.active .complex-layout__content {
  display: grid;
}
.complex-layout__text {
  @apply tw-text-text02;
}
.complex-layout__title {
  @apply tw-text-body_l tw-mb-1;
}
</style>
<style lang="scss" scoped>
.map {
  @apply tw-w-full tw-h-[560px] lg:tw-h-[600px] tw-rounded-2xl tw-overflow-hidden  tw-relative;
  &.fullscreen {
    @apply tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen;
    z-index: 100;
  }
  #map-complex {
    @apply tw-h-full tw-w-full;
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
