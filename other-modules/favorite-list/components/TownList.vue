<template>
  <div class="fav-town-list" v-if="store.towns.length > 0">
    <TownItem
      class="fav-town-list__item"
      v-for="item in store.towns"
      :town="item"
    />
  </div>
  <EmptyList v-else />
</template>

<script setup lang="ts">
  import EmptyList from '../components/EmptyList.vue';
  import TownItem from './TownItem.vue';
  import { useFavList } from '../store';

  const store = useFavList();
</script>

<style scoped lang="scss">
  .fav-town-list {
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
