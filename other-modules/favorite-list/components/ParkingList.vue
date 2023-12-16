<template>
  <div class="fav-parking-list" v-if="store.parkings.length > 0">
    <PlaceParkingItem
      class="fav-parking-list__item"
      v-for="item in store.parkings"
      placeName="Машиноместо"
      type="parkings"
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
  .fav-parking-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      margin: 10px;
      width: calc(25% - 20px);

      @include lg {
        width: calc(100% / 12 * 4 - 20px);
      }

      @include md {
        width: calc(50% - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }
</style>
