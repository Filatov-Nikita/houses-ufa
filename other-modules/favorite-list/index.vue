<template>
  <div class="fav-list">
    <CategoryFilter class="fav-list__category-filter" />
    <EstateCompare v-if="store.showedCompare" />
    <template v-else>
      <FlatList v-if="store.favType === 'flats'" />
      <TownList v-else-if="store.favType === 'towns'" />
      <PlaceList v-else-if="store.favType === 'places'" />
      <ParkingList v-else-if="store.favType === 'parkings'" />
    </template>
  </div>
</template>

<script setup lang="ts">
  import CategoryFilter from './components/CategoryFilter.vue';
  import FlatList from './components/FlatList.vue';
  import TownList from './components/TownList.vue';
  import PlaceList from './components/PlaceList.vue';
  import ParkingList from './components/ParkingList.vue';
  import EstateCompare from '@/other-modules/estate-compare/Index.vue';
  import { useFavList } from './store';

  const store = useFavList();

  watch(() => store.favType, (val) => {
    switch(val) {
      case 'flats': return store.showFlats();
      case 'towns': return store.showTowns();
      case 'parkings': return store.showParkings();
      case 'places': return store.showPlaces();
    }
  }, { immediate: true });
</script>


<style scoped lang="scss">
  .fav-list {
    &__category-filter {
      margin-bottom: 32px;
    }
  }
</style>
