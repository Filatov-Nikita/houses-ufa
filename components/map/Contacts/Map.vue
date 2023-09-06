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
            <img src=${item.img} width="40" height="40">
            </div>
            <div class="contact-layout__content">
              <span class="contact-layout__title">${item.title}</span>
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
