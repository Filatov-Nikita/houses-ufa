<template>
  <div class="object-map" id="our-object-map"></div>
</template>

<script setup lang="ts">
  //@ts-nocheck
  import { type Location } from '../types';
  declare let ymaps: any;

  const props = defineProps<{
    locations: Location[],
  }>();

  const router = useRouter();

  let map: any;

  function initMap() {
    ymaps.layout.storage.add('ourObjects#locationLayout', createMarkLayout());

    map = new ymaps.Map('our-object-map', {
      center: [54.735152, 55.958722],
      zoom: 10,
      controls: [],
    });

    appendPlacemarks(map);
  }

  onMounted(() => {
    ymaps.ready(initMap);
  });

  function createMarkLayout() {
    const layout = ymaps.templateLayoutFactory.createClass(
      `<div class="our-obj-location-mark">
        <div class="our-obj-location-mark__pict">
          <img width="56" height="56" src="{{ properties.imgSrc }}" />
        </div>
        <div class="our-obj-location-mark__data">
          <div class="our-obj-location-mark__name">{{ properties.name }}</div>
          <div class="our-obj-location-mark__location">{{ properties.location }}</div>
        </div>
      </div>`,
      {
        build() {
          layout.superclass.build.call(this);
          const element = this.getParentElement().querySelector('.our-obj-location-mark');

          if(this.inited) {
            if (this.isActive) {
              element.classList.add('our-obj-location-mark--active');
            } else {
              element.classList.remove('our-obj-location-mark--active');
            }
          } else {
            this.inited = true;
            this.isActive = false;
            initPlacemarkEvents.call(this, this.getData());
          }
        }
      }
    );

    return layout;
  }

  function initPlacemarkEvents(data) {
    data.geoObject.events
      .add('click', function () {
        const id = data.geoObject.properties.get('id');
        const type = data.geoObject.properties.get('type');
        showObject(id, type);
      })
      .add('mouseenter', function () {
        this.isActive = true;
        this.rebuild();
      }, this)
      .add('mouseleave', function () {
        this.isActive = false;
        this.rebuild();
      }, this);
  }

  function showObject(id: number, type: 'town' | 'complex') {
    const path = type === 'complex' ? '/complexes/' : '/cottage-settlements/';
    router.push({ path: path + id });
  }

  function appendPlacemarks(map: any) {
    props.locations.forEach(location => {
      const placemark = createPlacemark(location);
      map.geoObjects.add(placemark);
    });
  }

  function createPlacemark(location: Location) {
    const placemark = new ymaps.Placemark(
      getLatLng(location),
      {
        imgSrc: location.sight_picture?.url,
        name: location.name,
        location: location.location,
        id: location.id,
        type: location.type,
      },
      {
        iconLayout: 'ourObjects#locationLayout',
        iconShape: {
          type: 'Rectangle',
          coordinates: [[-0, -0], [62, 62]],
        }
      }
    );

    return placemark;
  }

  function getLatLng<T extends { longitude: string, latitude: string }>(location: T): [ number, number ] {
    return [ +location.latitude, +location.longitude ];
  }

  watch(() => props.locations, () => {
    if(map) {
      map.geoObjects.removeAll();
      appendPlacemarks(map);
    }
  });
</script>

<style lang="scss">
  .our-obj-location-mark {
    display: flex;
    gap: 20px;
    padding: 8px;
    padding-right: 16px;
    border-radius: 8px;
    min-width: fit-content;

    &--active {
      @apply tw-bg-white;
    }

    &__pict {
      border-radius: 8px;
      border: 3px solid theme('colors.primary');
      overflow: hidden;
      min-width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__data {
      align-self: center;
      display: none;
      text-wrap: nowrap;
    }

    &__name {
      @apply tw-text-text00 tw-text-lg;
    }

    &__location {
      margin-top: 4px;
      @apply tw-text-base tw-text-text02;
    }

    &--active &__data {
      display: block !important;
    }
  }
</style>

<style scoped lang="scss">
  .object-map {
    width: 100%;
    height: 500px;
    border-radius: 16px;
    overflow: hidden;

    @include sm {
      height: 400px;
    }
  }
</style>
