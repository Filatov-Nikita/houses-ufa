<template>
  <Map
    v-if="objectData"
    :locations="filtredLocations"
    :objectData="objectData"
  />
</template>

<script setup lang="ts">
  import { useTownLocations } from '../store';
  import { useTownOne } from '@/stores/pages/town-one';
  import Map from '@/components/Estate/Location/Map.vue';

  const store = useTownLocations();
  const townOne = useTownOne();

  const filtredLocations = computed(() => store.filtredLocations);

  const objectData = computed(() => {
    if(!townOne.town) return;
    const data = townOne.town.data;

    return {
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      sight_picture: data.sight_picture,
    }
  });
</script>
