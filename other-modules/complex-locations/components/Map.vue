<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
  import { useComplexLocations, type Location } from '../store';
  import { useComplexOne } from '@/stores/pages/complex-one';
  import { data } from '../data';

  declare const ymaps: any;

  const store = useComplexLocations();
  const complexOne = useComplexOne();

  const filtredLocations = computed(() => store.filtredLocations);

  onMounted(() => {
    ymaps.ready(initMap);
  });

  let map: any;

  function initMap() {
    const data = complexOne.complex?.data;
    if(!data) return;

    map = new ymaps.Map('map', {
      zoom: 15,
      center: getLatLng(data),
      controls: [],
    });

    ymaps.layout.storage.add('app#locationLayout', createMarkLayout());
    ymaps.layout.storage.add('app#complexLayout', createComplexLayout());
    render();
  }

  function render(): void {
    appendPlacemarks(map);
    appendRadius(map);
    appendComplex(map);
  }

  function appendPlacemarks(map: any) {
    const clusterer = new ymaps.Clusterer({
      clusterIconLayout: 'default#pieChart',
      clusterIconPieChartRadius: 16,
      clusterIconPieChartCoreRadius: 8,
      clusterIconPieChartStrokeWidth: 1,
    });

    filtredLocations.value.forEach(location => {
      const placemark = createPlacemark(location);
      clusterer.add(placemark);
    });

    map.geoObjects.add(clusterer);
  }

  function appendRadius(map: any) {
    const data = complexOne.complex?.data;
    if(!data) return;

    const radius = new ymaps.GeoObject({
      geometry: {
        type: 'Circle',
        coordinates: getLatLng(data),
        radius: 1000
     }
    }, {
      fillColor: '#6ACC48',
      fillOpacity: 0.2,
      strokeWidth: 0,
    });

    map.geoObjects.add(radius);
  }

  function appendComplex(map: any): void {
    const data = complexOne.complex?.data;
    if(!data) return;

    const placemark = new ymaps.Placemark(
      getLatLng(data),
      {
        hintContent: data.name,
        balloonContentHeader: data.name,
        imgSrc: data.sight_picture?.url,
      },
      {
        iconLayout: 'app#complexLayout',
        iconShape: {
          type: 'Rectangle',
          coordinates: [[-0, -0], [64, 64]],
        }
      }
    );

      map.geoObjects.add(placemark)
  }

  function createPlacemark(location: Location) {
    const iconColor = data[location.type.value]?.color ?? '';
    const placemark = new ymaps.Placemark(
      getLatLng(location),
      {
        hintContent: location.name,
        balloonContentHeader: location.name,
        iconName: data[location.type.value]?.icon ?? '',
        iconColor,
      },
      {
        iconColor,
        iconLayout: 'app#locationLayout',
        iconShape: {
          type: 'Rectangle',
          coordinates: [[-0, -0], [32, 32]],
        }
      }
    );

    return placemark;
  }

  function getLatLng<T extends { longitude: string, latitude: string }>(location: T): [ number, number ] {
    return [ +location.latitude, +location.longitude ];
  }

  function createMarkLayout() {
    return ymaps.templateLayoutFactory.createClass(
      `<div class="location-mark" style="--color: {{ properties.iconColor }};">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <use href="#icon-{{ properties.iconName }}"></use>
        </svg>
      </div>`
    );
  }

  function createComplexLayout() {
    return ymaps.templateLayoutFactory.createClass(
      `<div class="complex-mark">
        <img width="64" height="64" src="{{ properties.imgSrc }}" />
      </div>`
    );
  }

  watch(filtredLocations, () => {
    map.geoObjects.removeAll();
    render();
  });
</script>


<style scoped lang="scss">
  #map {
    border-radius: 16px;
    overflow: hidden;
  }
</style>

<style lang="scss">
  .location-mark {
    width: 36px;
    height: 36px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.07);
    background: var(--color);
    border: 2px solid #ffffff;
    border-radius: 8px;
    padding: 6px;

    svg {
      width: 20px;
      height: 20px;
      fill: white;
    }
  }

  .complex-mark {
    width: 68px;
    height: 68px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.07);
    border: 4px solid var(--system-white, #FFF);
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
</style>
