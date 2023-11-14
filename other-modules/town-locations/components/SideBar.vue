<template>
  <SideBar
    :locations="locations"
    :currentType="store.currentType"
    @setCurrentType="setCurrentType"
  />
</template>

<script setup lang="ts">
  import { useTownLocations } from '../store';
  import SideBar from '@/components/Estate/Location/SideBar.vue';

  const store = useTownLocations();

  const locations = computed(() => store.data?.data ?? []);

  function setCurrentType(value: string): void {
    store.currentType = value;
  }
</script>
