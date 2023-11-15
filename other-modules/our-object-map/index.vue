<template>
  <Map
    :locations="locations"
  />
</template>

<script setup lang="ts">
  import Map from './components/Map.vue';
  import { useTownsStore, type TownItem } from '@/stores/towns';
  import { useComplexesStore, type ComplexItem } from '@/stores/complexes';
  import { type Location } from './types';

  const complexes = useComplexesStore();
  const towns = useTownsStore();

  const locations = computed(() => {
    const _complexes = complexes.complexes?.data ?? [];
    const _towns = towns.towns?.data ?? [];
    const list: Location[] = [];

    _complexes.forEach(complex => {
      list.push(getLocation(complex, 'complex'));
    });

    _towns.forEach(town => {
      list.push(getLocation(town, 'town'));
    });

    return list;
  });

  function getLocation(item: ComplexItem | TownItem, type: 'town' | 'complex'): Location {
    return {
      type,
      id: item.id,
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
      location: item.location,
      sight_picture: item.sight_picture,
    }
  }
</script>
