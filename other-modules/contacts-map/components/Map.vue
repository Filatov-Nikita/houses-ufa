<template>
  <div class="map-complex" ref="mapEl"></div>
</template>
<script setup>
const props = defineProps({
  marks: Array,
  singleIdx: [Number, null],
})
const emits = defineEmits(['updateTaxiLink', 'updateSingleIdx'])

let map
const mapEl = ref()
const taxiLinkStart = 'https://taxi.yandex.ru/'
const taxiLink = ref('')
const mapInit = () => {
  if (ymaps) {
    ymaps.ready(init)
    function init() {
      // Создание карты.
      if (Number.isInteger(props.singleIdx) && props.singleIdx !== null) {
        map = new ymaps.Map(
          mapEl.value,
          {
            center: props.marks[props.singleIdx].coords,
            zoom: 13,
            controls: [],
          },
          {
            searchControlProvider: 'yandex#search',
          }
        )
        props.marks.forEach((item, idx) => {
          map.geoObjects.add(createMark(item, idx))
        })
        let suggestInp = document.querySelector('#suggest')
        if (suggestInp) {
          const input = [...suggestInp.childNodes].find(
            (item) => item.tagName === 'INPUT'
          )

          if (input) {
            console.log(input)
            var suggestView = new ymaps.SuggestView(input)

            suggestView.events.add('select', () => {
              geocode(input)
            })
          }
        }

        map.geoObjects.splice(
          props.singleIdx,
          props.singleIdx,
          createMark(props.marks[props.singleIdx], props.singleIdx, true)
        )
        const screenXS = window.matchMedia('(max-width: 1023px)').matches
        let pixelCenter = map.getGlobalPixelCenter(props.marks[props.singleIdx])
        if (screenXS) pixelCenter = [pixelCenter[0], pixelCenter[1] + 228]
        else pixelCenter = [pixelCenter[0] - 128, pixelCenter[1]]
        const geoCenter = map.options
          .get('projection')
          .fromGlobalPixels(pixelCenter, map.getZoom())
        map.setCenter(geoCenter)
      } else {
        map = new ymaps.Map(
          mapEl.value,
          {
            center: [54.71835837, 56.01448981],
            zoom: 13,
            controls: [],
          },
          {
            searchControlProvider: 'yandex#search',
          }
        )

        props.marks.forEach((item, idx) => {
          map.geoObjects.add(createMark(item, idx))
        })
      }
    }
  }
}
const geocode = (inp) => {
  console.log(inp)
  // Забираем запрос из поля ввода.
  var request = inp.value
  // Геокодируем введённые данные.
  ymaps.geocode(request).then(
    (res) => {
      var obj = res.geoObjects.get(0),
        error,
        hint
      const coordsSelect = obj.geometry.getCoordinates()
      console.log(coordsSelect)
      let coordsPointTo = null
      ymaps
        .route(
          [
            [56.00933, 54.719426],
            // Метро "Третьяковская".
            coordsSelect,
          ],
          {
            // Автоматически позиционировать карту.
            mapStateAutoApply: true,
          }
        )
        .then(function (route) {
          map.geoObjects.removeAll()
          map.geoObjects.add(route)

          emits(
            'updateTaxiLink',
            `${taxiLinkStart}?gto=${[56.00933, 54.719426].join(
              ','
            )}&gfrom=${coordsSelect.join(',')}`
          )
        })
      console.log(coordsSelect)
    },
    function (e) {
      console.log(e)
    }
  )
}

const createMark = (item, idx, active = false) => {
  var animatedLayout = ymaps.templateLayoutFactory.createClass(
    `<div class="contact-layout ${active ? 'active' : ''}">
            <div class="contact-layout__img ">
            <img src=${item.photo} width="40" height="40">
            </div>
            <div class="contact-layout__content">
              <span class="contact-layout__title">${item.name}</span>
            </div>
            </div>`,
    {
      build: function () {
        animatedLayout.superclass.build.call(this)
        var element =
          this.getParentElement().getElementsByClassName('contact-layout')[0]
        var smallShape = {
          type: 'Circle',
          coordinates: [20, 20],
          radius: 40,
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
            'click',
            function (e) {
              emits('updateSingleIdx', idx)
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
  return mark
}
onMounted(() => {
  mapInit()
})

watch(
  () => props.singleIdx,
  (val, oldVal) => {
    if (map) {
      if (Number.isInteger(+val) && val !== null) {
        let suggestInp = document.querySelector('#suggest')
        if (suggestInp) {
          const input = [...suggestInp.childNodes].find(
            (item) => item.tagName === 'INPUT'
          )

          if (input) {
            console.log(input)
            var suggestView = new ymaps.SuggestView(input)

            suggestView.events.add('select', () => {
              geocode(input)
            })
          }
        }
        map.geoObjects.splice(val, val, createMark(props.marks[val], val, true))

        const screenXS = window.matchMedia('(max-width: 1023px)').matches
        let pixelCenter = map.getGlobalPixelCenter(props.marks[val])
        if (screenXS) {
          pixelCenter = [pixelCenter[0], pixelCenter[1] + 0]

          const geoCenter = map.options
            .get('projection')
            .fromGlobalPixels(pixelCenter, map.getZoom())
          map.panTo(geoCenter, map.getZoom())
        } else {
          map.panTo([props.marks[val].coords], map.getZoom())
        }
      }
      if (Number.isInteger(+oldVal) && oldVal !== null) {
        map.geoObjects.splice(
          oldVal,
          oldVal,
          createMark(props.marks[oldVal], oldVal)
        )
      }
    }
  }
)
</script>
<style lang="scss" scoped>
.map-complex {
  @apply tw-h-full tw-w-full;
}
</style>
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
  z-index: 1000;
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
