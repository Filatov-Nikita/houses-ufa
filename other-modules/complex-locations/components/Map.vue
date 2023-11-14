<template>
  <Map
    v-if="objectData"
    :locations="filtredLocations"
    :objectData="objectData"
  />
</template>

<script setup lang="ts">
  import { useComplexLocations } from '../store';
  import { useComplexOne } from '@/stores/pages/complex-one';
  import Map from '@/components/Estate/Location/Map.vue';

  const store = useComplexLocations();
  const complexOne = useComplexOne();

  const filtredLocations = computed(() => store.filtredLocations);

  const objectData = computed(() => {
    if(!complexOne.complex) return;
    const data = complexOne.complex.data;

    return {
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      sight_picture: data.sight_picture,
    }
  });
</script>
