<template>
  <div class="map" :class="{ fullscreen: fullscreenMap }">
    <div class="tw-hidden lg:tw-block tw-absolute tw-z-10 tw-left-10 tw-top-10">
      <div class="control-panel">
        <button
          @click="typeMark = 'all'"
          :class="{ active: typeMark === 'all' }"
        >
          <div class="type">
            <img src="/assets/images/icons/marks/all.svg" alt="все" />
            <span>Все категории</span>
          </div>
          <div class="count">{{ marks.length }}</div>
        </button>

        <button
          v-for="markType in markTypes"
          @click="typeMark = Object.keys(markType)[0]"
          :class="{ active: typeMark === Object.keys(markType)[0] }"
        >
          <div class="type">
            <img
              :src="
                '/assets/images/icons/marks/' +
                Object.keys(markType)[0] +
                '.svg'
              "
              :alt="Object.values(markType)[0]"
            />
            <span>{{ Object.values(markType)[0] }}</span>
          </div>
          <div class="count">
            {{ filterMap(Object.keys(markType)[0]).length }}
          </div>
        </button>
      </div>
    </div>
    <div id="map-category"></div>

    <template v-if="fullscreenMap">
      <button class="close" @click="fullscreenMap = false">
        <img src="/assets/images/icons/close.svg" width="24" height="24" />
      </button>
      <div class="control-panel-mobile">
        <div>
          <button
            @click="typeMark = 'all'"
            :class="{ active: typeMark === 'all' }"
          >
            <div class="type">
              <img src="/assets/images/icons/marks/all.svg" alt="все" />
              <span>Все категории</span>
            </div>
            <div class="count">{{ marks.length }}</div>
          </button>

          <button
            v-for="markType in markTypes"
            @click="typeMark = Object.keys(markType)[0]"
            :class="{ active: typeMark === Object.keys(markType)[0] }"
          >
            <div class="type">
              <img
                :src="
                  '/assets/images/icons/marks/' +
                  Object.keys(markType)[0] +
                  '.svg'
                "
                :alt="Object.values(markType)[0]"
              />
              <span>{{ Object.values(markType)[0] }}</span>
            </div>
            <div class="count">
              {{ filterMap(Object.keys(markType)[0]).length }}
            </div>
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <button
        @click="fullscreenMap = true"
        style="z-index: 10001"
        class="btn-to-fullscreen"
      >
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
  </div>
</template>
<script setup lang="ts">
const { fullscreenMap } = useStartSettingsMap()
let sizeMap = [] as number[]
const typeMark = ref('all')
const marks = [
  {
    coords: [56.00933, 54.719426],
    href: '/assets/images/icons/marks/bank.svg',
    title: 'Супермаркет "Пятерочка"',
    type: 'bank',
  },
  {
    coords: [56.008651, 54.720201],
    href: '/assets/images/icons/marks/basket.svg',
    title: 'Супермаркет "Пятерочка"',
    type: 'basket',
  },
  {
    coords: [56.016617, 54.721629],
    href: '/assets/images/icons/marks/park.svg',
    title: 'Супермаркет "Пятерочка"',
    type: 'park',
  },
  {
    coords: [56.012493, 54.716517],
    href: '/assets/images/icons/marks/health.svg',
    title: 'Продукты',
    type: 'health',
  },
  {
    coords: [56.003305, 54.716656],
    href: '/assets/images/icons/marks/education.svg',
    title: 'Супермаркет "Магнит"',
    type: 'education',
  },
  {
    coords: [55.992771, 54.713326],
    href: '/assets/images/icons/marks/park.svg',
    title: 'Супермаркет "Магнит"',
    type: 'park',
  },
  {
    coords: [56.000967, 54.720685],
    href: '/assets/images/icons/marks/basket.svg',
    title: 'Ашан',
    type: 'basket',
  },
]
const markTypes = [
  {
    bank: 'Банки',
  },
  { basket: 'Магазины и ТЦ' },
  {
    restaurant: 'Кафе и рестораны',
  },
  {
    park: 'Парки',
  },
  {
    entertainment: 'Музеи, театры, кино',
  },
  {
    education: 'Школы и ВУЗы',
  },
  {
    health: 'Спорт',
  },
  {
    sport: 'Красота и здоровье',
  },
]
const filterMap = (type: string) => {
  return marks.filter((item) => item.type === type)
}
const marksFilter = computed(() => {
  return marks.filter((item) => {
    if (typeMark.value === 'all') return true
    return item.type === typeMark.value
  })
})
let map
let clusterer
onMounted(() => {
  if (ymaps) {
    ymaps.ready(init)
    function init() {
      // Создание карты.

      map = new ymaps.Map(
        'map-category',
        {
          center: [56.01607131, 54.7286735],
          zoom: 12,
          controls: [],
        },
        {
          searchControlProvider: 'yandex#search',
        }
      )
      var animatedLayoutMain = ymaps.templateLayoutFactory.createClass(
        `<div class="square_main-layout"><img src="/assets/images/img/country_real_estate.png" width="64" height="64"><span class="square_main-layout-text">Главный офис</span></div>`,
        {
          build: function () {
            animatedLayoutMain.superclass.build.call(this)
            var element =
              this.getParentElement().getElementsByClassName(
                'square_main-layout'
              )[0]
            var smallShape = {
              type: 'Circle',
              coordinates: [0, 0],
              radius: 48,
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
                  if (window.innerWidth < 1024) {
                    this.isActive = !this.isActive
                    this.rebuild()
                  }
                },
                this
              )
            }
          },
        }
      )

      const mainMark = new ymaps.Placemark(
        // Координаты метки
        [56.00933, 54.719426],
        {},
        {
          iconLayout: animatedLayoutMain,
        }
      )
      clusterer = new ymaps.Clusterer({
        // Макет метки кластера pieChart.
        clusterIconLayout: 'default#pieChart',
        clusterIconShape: {
          type: 'Rectangle',
          coordinates: [
            [0, 0],
            [10, 10],
          ],
        },
        // Радиус диаграммы в пикселях.
        clusterIconPieChartRadius: 20,
        // Радиус центральной части макета.
        clusterIconPieChartCoreRadius: 8,
        // Ширина линий-разделителей секторов и внешней обводки диаграммы.
        clusterIconPieChartStrokeWidth: 2,
        // Определяет наличие поля balloon.
        hasBalloon: false,
      })
      let geoObjects = []
      marksFilter.value.forEach((item, i) => {
        var animatedLayout = ymaps.templateLayoutFactory.createClass(
          `<div class="square_layout"><img src=${item.href} width="32" height="32"><span class="square_layout-text">${item.title}</span></div>`,
          {
            build: function () {
              animatedLayout.superclass.build.call(this)
              var element =
                this.getParentElement().getElementsByClassName(
                  'square_layout'
                )[0]
              var smallShape = {
                type: 'Circle',
                coordinates: [0, 0],
                radius: 32,
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
                    if (window.innerWidth < 1024) {
                      this.isActive = !this.isActive
                      this.rebuild()
                    }
                  },
                  this
                )
              }
            },
          }
        )
        geoObjects[i] = new ymaps.Placemark(
          // Координаты метки
          item.coords,
          {},
          {
            iconLayout: animatedLayout,
            iconColor: getColor(item.type),
          }
        )
      })

      clusterer.add(geoObjects)

      map.geoObjects.add(clusterer).add(mainMark)
      sizeMap = map.container.getSize()
    }
  }
})
const getColor = (type: string) => {
  if (type === 'bank') return '#4BA4ED'
  if (type === 'basket') return '#EF546C'
  if (type === 'education') return '#EBC74F'
  if (type === 'entetainment') return '#7C4EDA'
  if (type === 'health') return '#F255A4'
  if (type === 'park') return '#55D679'
  if (type === 'restaurant') return '#48CCA4'
  if (type === 'sport') return '#F1704F'
}
watch(typeMark, (val) => {
  clusterer.removeAll()
  marksFilter.value.forEach((item) => {
    var animatedLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="square_layout"><img src=${item.href} width="32" height="32"><span class="square_layout-text">${item.title}</span></div>`,
      {
        build: function () {
          animatedLayout.superclass.build.call(this)
          var element =
            this.getParentElement().getElementsByClassName('square_layout')[0]
          var smallShape = {
            type: 'Circle',
            coordinates: [0, 0],
            radius: 32,
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
                console.log(e)

                this.isActive = true
                this.rebuild()
              },
              this
            )

            this.getData().geoObject.events.add(
              'mouseleave',
              function () {
                if (this.isActive) this.isActive = false
                this.rebuild()
              },
              this
            )
          }
        },
      }
    )
    clusterer.add(
      new ymaps.Placemark(
        // Координаты метки
        item.coords,
        {},
        {
          iconLayout: animatedLayout,
          iconColor: getColor(item.type),
        }
      )
    )
  })
})
watch(fullscreenMap, (val) => {
  if (val) {
    map.container.getParentElement().style.height = window.screen.height + 'px'
    map.container.fitToViewport()
  } else {
    console.log(sizeMap)

    map.container.getParentElement().style.height = sizeMap[1] + 'px'
    map.container.fitToViewport()
  }
})

// definePageMeta({
//   layout: 'default'
// });
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
.square_layout {
  display: flex;
  border-radius: 12px;
  position: absolute;
  left: -23px;
  top: -23px;
  width: max-content;
  /* width: 32px;
  height: 32px; */
  border: 2px solid white;
  background-color: white;
  align-items: center;
  gap: 6px;
}
.square_layout > img {
  align-self: baseline;
}
.square_layout.active .square_layout-text {
  display: block;
}
.square_layout-text {
  @apply tw-text-body_xs;
  display: none;
  padding: 12px 8px;
}
</style>
<style lang="scss" scoped>
.map {
  @apply tw-w-full tw-h-[560px] lg:tw-h-[600px] tw-rounded-2xl tw-overflow-hidden  tw-relative;
  &.fullscreen {
    @apply tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen;
  }
  #map-category {
    @apply tw-h-full tw-w-full;
  }

  .btn-to-fullscreen {
    @apply tw-absolute tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-bottom-4 tw-max-w-[311px] tw-w-full  tw-bg-white tw-rounded-lg tw-px-6 tw-py-4;
    @apply tw-flex tw-justify-center tw-items-center tw-gap-4 tw-text-body_m;
    @apply lg:tw-hidden;
  }
}
.control-panel {
  @apply tw-bg-white tw-p-4 tw-shadow-shadow01 tw-rounded-2xl  tw-w-[305px];
  @apply tw-grid tw-gap-2;

  & > button {
    @apply tw-py-2 tw-pl-2 tw-pr-4 tw-bg-base00 tw-rounded-lg;
    @apply hover:tw-bg-secondary-hover;
    @apply tw-flex tw-justify-between tw-items-center;
    &.active {
      @apply tw-bg-secondary-press;
    }
    .type {
      @apply tw-flex tw-items-center tw-gap-4 tw-text-body_m;
    }
    .count {
      @apply tw-text-body_s2 -tw-tracking-875 tw-text-text02;
    }
  }
}
.close {
  @apply tw-rounded-lg tw-grid tw-place-content-center tw-bg-white tw-w-12 tw-h-12;
  @apply tw-fixed tw-right-4 tw-top-4;
  z-index: 10001;
}
.control-panel-mobile {
  @apply tw-absolute tw-bottom-4 tw-left-4 tw-pr-4 tw-w-full tw-overflow-hidden;

  z-index: 10001;
  & > div {
    @apply tw-flex tw-gap-2 tw-overflow-auto;
  }
  & button {
    @apply tw-py-2 tw-pl-2 tw-pr-4 tw-bg-base00 tw-rounded-lg tw-min-w-[221px];
    @apply hover:tw-bg-secondary-hover;
    @apply tw-flex tw-justify-between tw-items-center;
    &.active {
      @apply tw-bg-secondary-press;
    }
    .type {
      @apply tw-flex tw-items-center tw-gap-4 tw-text-body_m;
    }
    .count {
      @apply tw-text-body_s2 -tw-tracking-875 tw-text-text02;
    }
  }
}
.yandex-container {
  height: 608px;
}

.card {
  @apply tw-bg-primary tw-relative tw-overflow-hidden tw-p-10 tw-rounded-2xl;
  width: 350px;
  height: 650px;
  &__content {
    @apply tw-text-white tw-grid tw-gap-4 tw-relative tw-z-10;
    .title {
      @apply tw-text-h4;
    }
    .text {
      @apply tw-text-body_l;
    }
  }
  &__bg {
    @apply tw-border tw-border-primary-hover tw-outline tw-outline-primary-hover tw-outline-[0.5px] tw-outline-offset-4 tw-mx-auto tw-overflow-hidden tw-absolute tw-h-10;
    transform-origin: center center;
    transform: translate3d(-50%, -0%, 0px) rotate(45deg);
    bottom: calc(2.5rem + 40px);
    left: 50%;
    width: 250px;
    height: 250px;
    border-radius: 50px;
    &::before {
      content: '';
      position: absolute;
      background-image: var(--bg-card);
      background-size: cover;

      width: 311px;
      height: 311px;
      transform: translate3d(-31px, -31px, 0px) rotate(-45deg);
    }
  }
  &__link {
    @apply tw-absolute tw-bottom-10 tw-left-10 tw-opacity-0;
    transition: opacity 300ms ease-in-out 0.3s;
  }
  &:hover &__bg {
    /*
    */
    width: 100%;
    height: 100%;

    transform: translate3d(-50%, 50%, 0px) rotate(0deg);
    bottom: 50%;
    animation: hover 2s forwards alternate;
    &::before {
      animation: hover-image 2s forwards;
      width: 100%;
      height: 100%;
      transform: translate3d(0px, 0px, 0px) rotate(0deg);
    }
  }
  &:hover &__link {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
}
@keyframes hover {
  0% {
    transform: translate3d(-50%, -0%, 0px) rotate(45deg);
    transform-origin: center center;
    left: 50%;
    width: 250px;
    height: 250px;
    border-radius: 50px;
    bottom: calc(2.5rem + 40px);
  }
  30% {
    bottom: 50%;
    transform: translate3d(-50%, 50%, 0px) rotate(45deg);
  }
  40% {
    transform: translate3d(-50%, 50%, 0px) rotate(0deg);
  }
  50% {
    width: 250px;
    height: 250px;
    outline-width: 2px;
  }
  80% {
    width: 80%;
    height: 90%;
  }
  80% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
    transform: translate3d(-50%, 50%, 0px) rotate(0deg);

    border-radius: 0px;
    border-width: 0;
  }
}
@keyframes hover-image {
  0% {
    width: 311px;
    height: 311px;
    transform: translate3d(-31px, -31px, 0px) rotate(-45deg);
  }
  30% {
    transform: translate3d(-71px, -91px, 0px) rotate(-45deg);
    width: 450px;
    height: 450px;
  }
  40% {
    transform: translate3d(0px, -0px, 0px) rotate(-0deg);
  }
  50% {
    width: 200%;
    height: 200%;
  }
  100% {
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px) rotate(0deg);
  }
}
/*
*/

.hex {
  width: 200px;
  height: 200px;
  display: inline-block;
  color: orange;
  filter: url('#goo');
}

.hex::before {
  content: '';
  display: block;
  background: currentColor;
  height: 100%;
  /*padding-top: 56.6%;  100%*cos(30) */
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
</style>
