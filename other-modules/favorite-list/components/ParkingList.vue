<template>
  <div class="fav-flat-list" v-if="store.parkings.length > 0">
    <PlaceParkingItem
      class="fav-flat-list__item"
      v-for="item in store.parkings"
      placeName="Машиноместо"
      v-bind="item"
    />
  </div>
  <EmptyList v-else />
</template>

<script setup lang="ts">
  import EmptyList from '../components/EmptyList.vue';
  import PlaceParkingItem from './PlaceParkingItem.vue';
  import { useFavList } from '../store';

  const store = useFavList();
</script>

<style scoped lang="scss">
  .fav-flat-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      margin: 10px;
      width: calc(25% - 20px);
    }
  }
</style>
