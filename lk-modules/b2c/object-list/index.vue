<template>
  <div>
    <EmptyList v-if="isEmpty" />
    <div class="object-list__items" v-else>
      <Item
        v-for="town in towns"
        class="object-list__item"
        :key="town.id"
        :town="town"
      />
      <Item
        v-for="flat in flats"
        class="object-list__item"
        :key="flat.id"
        :flat="flat"
        @successCancelKeyOrder="refreshFlats"
        @successKeyOrder="refreshFlats"
      />
      <Item
        v-for="parking in parkings"
        class="object-list__item"
        :key="parking.id"
        :parking="parking"
      />
      <Item
        v-for="place in places"
        class="object-list__item"
        :key="place.id"
        :place="place"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { UserTown, UserFlat, UserParking, UserPlace } from './types';
  import Item from './components/Item.vue';
  import EmptyList from './components/EmptyList.vue';

  const {
    townResponse,
    flatResponse,
    placeResponse,
    parkingResponse
  } = await getData();

  function refreshFlats() {
    flatResponse.refresh();
  }

  const towns = computed(() => {
    return townResponse.data.value?.data ?? [];
  });

  const flats = computed(() => {
    return flatResponse.data.value?.data ?? [];
  });

  const places = computed(() => {
    return placeResponse.data.value?.data ?? [];
  });

  const parkings = computed(() => {
    return parkingResponse.data.value?.data ?? [];
  });

  const isEmpty = computed(() => {
    const result =
      towns.value.length === 0 &&
      flats.value.length === 0 &&
      places.value.length === 0 &&
      parkings.value.length === 0;
    return result;
  });

  async function getData() {
    const baseURL = useRuntimeConfig().public.rootApi;

    const townProm = useDataFetch<{ data: UserTown[] }>('b2c/objects/estates', { baseURL });
    const flatProm = useDataFetch<{ data: UserFlat[] }>('b2c/objects/flats', { baseURL });
    const placeProm = useDataFetch<{ data: UserPlace[] }>('b2c/objects/pantries', { baseURL });
    const parkingProm = useDataFetch<{ data: UserParking[] }>('b2c/objects/lots', { baseURL });

    const [
      townResponse,
      flatResponse,
      placeResponse,
      parkingResponse,
    ] = await Promise.all([
      townProm,
      flatProm,
      placeProm,
      parkingProm,
    ]);

    return {
      townResponse,
      flatResponse,
      placeResponse,
      parkingResponse,
    }
  }
</script>

<style scoped lang="scss">
  .object-list {
    &__items {

    }

    &__item {
      & + & {
        margin-top: 32px;
        padding-top: 32px;
        border-top: 1px solid theme('colors.border00');
      }
    }
  }
</style>
