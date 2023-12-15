<template>
  <div class="fav-flat-list" v-if="store.flats.length > 0">
    <FlatItem
      class="fav-flat-list__item"
      v-for="item in store.flats"
      :flat="item"
    />
  </div>
  <EmptyList v-else />
</template>

<script setup lang="ts">
  import EmptyList from '../components/EmptyList.vue';
  import FlatItem from './FlatItem.vue';
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
